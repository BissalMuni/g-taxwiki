/**
 * 법령 개정 동기화 P3 — 개정 반영 코멘트 자동 등록
 *
 * detectChanges 로 검출된 개정 법령에 대해, 영향 문서마다
 * 개정이유를 담은 코멘트를 Supabase(tax.comments)에 등록한다.
 * 등록된 코멘트는 기존 review-feedback 파이프라인이 Claude 로 반영한다.
 *
 * 기본은 dry-run(등록될 내용 미리보기만). 실제 insert 는 --apply.
 *
 * 실행:
 *   npx tsx scripts/law-sync/register-comments.ts                 # dry-run
 *   npx tsx scripts/law-sync/register-comments.ts --simulate-all  # 검증용 감지
 *   npx tsx scripts/law-sync/register-comments.ts --apply         # 실제 등록
 *   npx tsx scripts/law-sync/register-comments.ts --apply --limit=3
 * 필요: .env.local 의 BEOPJECHEO_OC, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */
import fs from 'node:fs';
import path from 'node:path';
import { loadEnv } from './beopjecheo';
import { detectChanges, type Change } from './check-amendments';

const CONTENT_ROOT = 'src/content/';
const BASELINE = path.join(process.cwd(), 'src', 'lib', 'law-sync', 'law-baseline.json');

/** 파일 경로 → 문서 content_path (topic-page.tsx 와 동일 규칙: /{basePath}/{slugs}) */
function fileToContentPath(file: string): string | null {
  const norm = file.replace(/\\/g, '/');
  const i = norm.indexOf(CONTENT_ROOT);
  if (i < 0) return null;
  const rel = norm.slice(i + CONTENT_ROOT.length).replace(/\.tsx$/, '');
  return '/' + rel;
}

/** 중복 방지 마커 (law + 공포번호 단위) */
const marker = (c: Change) => `⟪law-sync:${c.law}:${c.to}⟫`;

function buildBody(c: Change): string {
  return [
    marker(c),
    `[법령 개정 자동 감지] ${c.law}이(가) 개정되었습니다 (공포 ${c.from} → ${c.to}, ${c.제개정구분}, 시행 ${c.시행일자}).`,
    '',
    `아래 개정이유를 확인하여, 이 문서에서 ${c.law} 관련 내용이 개정에 부합하는지 검토하고 필요한 부분을 반영해 주세요. 반영 시 문서 상단 헤더의 최근 개정일도 갱신해 주세요.`,
    '',
    '== 개정이유 ==',
    c.reason,
  ].join('\n');
}

interface Env {
  url: string;
  key: string;
}
function supaEnv(): Env {
  const env = loadEnv();
  const url = env.SUPABASE_URL || process.env.SUPABASE_URL || '';
  const key = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  if (!url || !key) throw new Error('SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY 가 .env.local 에 없습니다');
  return { url, key };
}

async function alreadyRegistered(env: Env, contentPath: string, mark: string): Promise<boolean> {
  const u = `${env.url}/rest/v1/comments?select=id&content_path=eq.${encodeURIComponent(
    contentPath,
  )}&body=ilike.${encodeURIComponent('%' + mark + '%')}`;
  const res = await fetch(u, {
    headers: { apikey: env.key, Authorization: `Bearer ${env.key}`, 'Accept-Profile': 'tax' },
  });
  if (!res.ok) throw new Error(`중복확인 HTTP ${res.status}`);
  const rows: any[] = await res.json();
  return rows.length > 0;
}

async function insertComment(env: Env, contentPath: string, c: Change): Promise<void> {
  const res = await fetch(`${env.url}/rest/v1/comments`, {
    method: 'POST',
    headers: {
      apikey: env.key,
      Authorization: `Bearer ${env.key}`,
      'Content-Type': 'application/json',
      'Content-Profile': 'tax',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      content_path: contentPath,
      author: '법령개정봇',
      body: buildBody(c),
      section_title: `${c.law} 개정 반영`,
      feedback_type: 'content',
      level: 'section',
      flagged: false,
    }),
  });
  if (!res.ok) throw new Error(`insert HTTP ${res.status}: ${await res.text()}`);
}

async function main() {
  const apply = process.argv.includes('--apply');
  const simulateAll = process.argv.includes('--simulate-all');
  const limitArg = process.argv.find((a) => a.startsWith('--limit='));
  const limit = limitArg ? parseInt(limitArg.slice('--limit='.length), 10) : Infinity;

  const { changes, errors } = await detectChanges({ simulateAll });
  if (errors.length) console.log(`감지 오류: ${errors.join('; ')}\n`);

  if (!changes.length) {
    console.log('개정 없음 — 등록할 코멘트가 없습니다.');
    return;
  }

  // 등록 대상(문서×법령) 목록 구성
  const targets: { contentPath: string; c: Change }[] = [];
  for (const c of changes) {
    for (const file of c.files) {
      const cp = fileToContentPath(file);
      if (cp) targets.push({ contentPath: cp, c });
    }
  }

  console.log(`개정 법령 ${changes.length}종 → 등록 대상(문서×법령) ${targets.length}건`);
  for (const c of changes) {
    console.log(`  · ${c.law}: 문서 ${c.files.length}개`);
  }
  console.log(`\n모드: ${apply ? '★ 실제 등록(--apply)' : 'DRY-RUN (미등록)'}${Number.isFinite(limit) ? ` | limit=${limit}` : ''}\n`);

  if (!apply) {
    // 미리보기: 첫 대상의 본문 샘플
    const sample = targets[0];
    if (sample) {
      console.log('── 코멘트 본문 샘플 (1건) ──');
      console.log(`content_path: ${sample.contentPath}`);
      console.log(`section_title: ${sample.c.law} 개정 반영`);
      console.log('body:');
      console.log(buildBody(sample.c).split('\n').slice(0, 14).join('\n'));
      console.log('…(이하 개정이유 전문)\n');
    }
    console.log(`DRY-RUN: 실제 등록하려면 --apply. (총 ${Math.min(targets.length, limit)}건 등록 예정)`);
    return;
  }

  const env = supaEnv();
  let done = 0;
  let skipped = 0;
  let truncated = false;
  const errByLaw = new Map<string, number>();
  for (const t of targets) {
    if (done >= limit) {
      truncated = true;
      break;
    }
    try {
      if (await alreadyRegistered(env, t.contentPath, marker(t.c))) {
        skipped++;
        continue;
      }
      await insertComment(env, t.contentPath, t.c);
      done++;
      console.log(`  ✓ ${t.contentPath}  (${t.c.law})`);
    } catch (e) {
      errByLaw.set(t.c.law, (errByLaw.get(t.c.law) ?? 0) + 1);
      console.log(`  ✗ ${t.contentPath}  (${t.c.law}) — ${(e as Error).message}`);
    }
  }
  console.log(`\n등록 ${done}건 / 중복 skip ${skipped}건`);

  // baseline 갱신: 전량 처리 + 실제 개정(공포번호 변화) + 해당 법령 등록 오류 0 → 현행 레코드로 advance
  if (truncated) {
    console.log('baseline 갱신 생략(--limit 로 일부만 처리).');
    return;
  }
  const bl = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));
  const advanced: string[] = [];
  for (const c of changes) {
    if (c.to === c.from) continue; // 실제 변화 아님(시뮬 등)
    if ((errByLaw.get(c.law) ?? 0) > 0) continue; // 오류 있으면 다음 회차 재시도
    bl.laws[c.law] = c.record;
    advanced.push(c.law);
  }
  if (advanced.length) {
    fs.writeFileSync(BASELINE, JSON.stringify(bl, null, 2) + '\n', 'utf8');
    console.log(`baseline 갱신: ${advanced.join(', ')}`);
  }
}

main();

/**
 * 법령 개정 동기화 P1 — 참조 법령 스캐너
 *
 * src/content 의 모든 leaf TSX 에서 주석형 meta 의 `lawReference` 값을 추출하고,
 * 자유 텍스트를 (법령명) 단위로 정규화하여 다음을 출력한다.
 *   - 문서별 참조 법령 목록
 *   - 전체 distinct 법령 집합 + 등장 횟수
 *   - 법령 → 문서 역인덱스
 *
 * 이 단계는 법제처 호출 없이 로컬 파일만 읽는다. (baseline 부트스트랩은 build-baseline.ts)
 *
 * 실행: npx tsx scripts/law-sync/scan-law-refs.ts [--json]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

/** 법령명 별칭 → 정규 법령명 */
const LAW_ALIASES: Record<string, string> = {
  지특법: '지방세특례제한법',
  '지특법 시행령': '지방세특례제한법 시행령',
  법시행령: '지방세법 시행령',
  시행령: '지방세법 시행령', // 단독 "시행령"은 지방세법 시행령을 의미
};

/** 알려진 정규 법령명 (긴 것부터 매칭) */
const KNOWN_LAWS = [
  '지방세특례제한법 시행령',
  '지방세특례제한법',
  '지방세기본법 시행령',
  '지방세기본법',
  '지방세징수법',
  '지방세법 시행령',
  '지방세법 시행규칙',
  '지방세법',
  '법인세법 시행령',
  '법인세법',
  '소득세법 시행령',
  '소득세법',
  '주택법시행령',
  '주택법 시행령',
  '주택법',
  '주민등록법',
  '건축법 시행령',
  '건축법',
  '집합건물의 소유 및 관리에 관한 법률',
  '농어촌특별세법',
].sort((a, b) => b.length - a.length);

/** 조문 시작 표시(이후는 조문, 법령명 아님) */
const JO_START = /(제\s*\d|§|①|②|③|④|⑤|⑥|⑦|⑧|⑨|⑩)/;

/** 파일에서 lawReference 원문 추출 (주석형 meta) */
function extractLawReference(src: string): string | null {
  const m = src.match(/lawReference:\s*"([^"]*)"/);
  return m ? m[1] : null;
}

/** lawReference 자유 텍스트 → 정규 법령명 배열 */
function parseLaws(raw: string): string[] {
  if (!raw.trim()) return [];
  const segments = raw.split(',').map((s) => s.trim()).filter(Boolean);
  const laws: string[] = [];
  let lastLaw: string | null = null;

  for (const seg of segments) {
    // 1) 별칭 우선 매칭 (세그먼트가 별칭 법령명으로 시작)
    let matched: string | null = null;
    for (const alias of Object.keys(LAW_ALIASES).sort((a, b) => b.length - a.length)) {
      if (seg.startsWith(alias)) {
        matched = LAW_ALIASES[alias];
        break;
      }
    }
    // 2) 알려진 정규 법령명 매칭
    if (!matched) {
      for (const law of KNOWN_LAWS) {
        if (seg.startsWith(law)) {
          matched = law;
          break;
        }
      }
    }
    // 3) 조문만 있는 세그먼트(§11①… 등)는 직전 법령의 연속
    if (!matched && JO_START.test(seg) && lastLaw) {
      matched = lastLaw;
    }
    // 4) 그래도 못 찾으면 법령명 후보로 기록(미지 법령 — 검수 필요)
    if (!matched) {
      matched = seg.replace(JO_START, '').trim().split(/\s+/).slice(0, 6).join(' ') || seg;
    }

    laws.push(matched);
    lastLaw = matched;
  }
  return Array.from(new Set(laws));
}

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.isFile() && e.name.endsWith('.tsx')) out.push(p);
  }
  return out;
}

export interface ScanResult {
  files: string[];
  perDoc: { file: string; raw: string; laws: string[] }[];
  counts: Map<string, number>;
  reverse: Map<string, string[]>;
  stats: { total: number; withRef: number; emptyRef: number; noMeta: number };
}

export function scanLawRefs(): ScanResult {
  const files = walk(CONTENT_DIR);

  const perDoc: { file: string; raw: string; laws: string[] }[] = [];
  const counts = new Map<string, number>();
  const reverse = new Map<string, string[]>();
  let withRef = 0;
  let emptyRef = 0;
  let noMeta = 0;

  for (const file of files) {
    const src = fs.readFileSync(file, 'utf8');
    const raw = extractLawReference(src);
    const rel = path.relative(process.cwd(), file).replace(/\\/g, '/');
    if (raw === null) {
      noMeta++;
      continue;
    }
    if (!raw.trim()) {
      emptyRef++;
      continue;
    }
    withRef++;
    const laws = parseLaws(raw);
    perDoc.push({ file: rel, raw, laws });
    for (const law of laws) {
      counts.set(law, (counts.get(law) ?? 0) + 1);
      const arr = reverse.get(law) ?? [];
      arr.push(rel);
      reverse.set(law, arr);
    }
  }

  return {
    files,
    perDoc,
    counts,
    reverse,
    stats: { total: files.length, withRef, emptyRef, noMeta },
  };
}

function main() {
  const asJson = process.argv.includes('--json');
  const { perDoc, counts, reverse, stats } = scanLawRefs();
  const distinct = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);

  if (asJson) {
    console.log(
      JSON.stringify(
        { perDoc, distinct: Object.fromEntries(distinct), reverse: Object.fromEntries(reverse) },
        null,
        2,
      ),
    );
    return;
  }

  console.log(
    `총 TSX: ${stats.total} | lawReference 있음: ${stats.withRef} | 빈 값: ${stats.emptyRef} | meta 없음: ${stats.noMeta}\n`,
  );
  console.log(`=== distinct 법령 (${distinct.length}종) — 등장 문서 수 ===`);
  for (const [law, n] of distinct) console.log(`  ${String(n).padStart(3)}  ${law}`);
}

// CLI 로 직접 실행될 때만 main() 호출 (import 시 실행 방지)
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}

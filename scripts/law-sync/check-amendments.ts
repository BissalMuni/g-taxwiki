/**
 * 법령 개정 동기화 P2 — 감지 코어
 *
 * baseline(law-baseline.json)의 공포번호와 법제처 현행 공포번호를 비교해
 * 개정된 법령을 검출하고, 개정 법령의 (1)개정이유 (2)영향 문서를 산출한다.
 *
 * 기본은 dry-run(감지·보고만). 코멘트 등록/베이스라인 갱신은 이후 단계(P3~).
 *
 * 실행:
 *   npx tsx scripts/law-sync/check-amendments.ts
 *   npx tsx scripts/law-sync/check-amendments.ts --simulate=지방세법   # 강제로 개정된 것처럼 흐름 검증
 *   npx tsx scripts/law-sync/check-amendments.ts --json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { scanLawRefs } from './scan-law-refs';
import { getOC, lookupLaw, fetchAmendReason, type LawRecord } from './beopjecheo';

const BASELINE = path.join(process.cwd(), 'src', 'lib', 'law-sync', 'law-baseline.json');

export interface Change {
  law: string;
  from: string; // baseline 공포번호
  to: string; // 현행 공포번호
  mst: string; // 현행 MST (조문 조회용)
  simulated: boolean;
  제개정구분: string;
  시행일자: string;
  files: string[];
  reason: string;
  record: LawRecord; // 현행 법령 레코드 (baseline 갱신용)
}

export interface DetectOptions {
  simulate?: Set<string>;
  simulateAll?: boolean;
}

/** baseline vs 현행 공포번호 비교로 개정 법령 검출 (+개정이유, 영향 문서) */
export async function detectChanges(
  opts: DetectOptions = {},
): Promise<{ changes: Change[]; errors: string[] }> {
  const simulate = opts.simulate ?? new Set<string>();
  const simulateAll = opts.simulateAll ?? false;

  const oc = getOC();
  const baseline = JSON.parse(fs.readFileSync(BASELINE, 'utf8')).laws as Record<
    string,
    { 공포번호: string; mst: string }
  >;
  const { reverse } = scanLawRefs();

  const changes: Change[] = [];
  const errors: string[] = [];

  for (const law of Object.keys(baseline)) {
    const baseNum = String(baseline[law].공포번호);
    let cur;
    try {
      cur = await lookupLaw(oc, law);
    } catch (e) {
      errors.push(`${law}: ${(e as Error).message}`);
      continue;
    }
    if (!cur) {
      errors.push(`${law}: 현행 조회 결과 없음`);
      continue;
    }
    const forced = simulateAll || simulate.has(law);
    const changed = forced || cur.공포번호 !== baseNum;
    if (!changed) continue;

    let reason = '';
    try {
      reason = await fetchAmendReason(oc, cur.mst);
    } catch (e) {
      reason = `(개정이유 조회 실패: ${(e as Error).message})`;
    }
    changes.push({
      law,
      from: baseNum,
      to: cur.공포번호,
      mst: cur.mst,
      simulated: forced,
      제개정구분: cur.제개정구분,
      시행일자: cur.시행일자,
      files: reverse.get(law) ?? [],
      reason,
      record: cur,
    });
  }

  return { changes, errors };
}

async function main() {
  const asJson = process.argv.includes('--json');
  const simulateAll = process.argv.includes('--simulate-all'); // 검증용: 전 법령을 개정된 것으로 간주
  const simulate = new Set(
    process.argv
      .filter((a) => a.startsWith('--simulate='))
      .flatMap((a) => a.slice('--simulate='.length).split(','))
      .map((s) => s.trim())
      .filter(Boolean),
  );

  const { changes, errors } = await detectChanges({ simulate, simulateAll });

  if (asJson) {
    console.log(JSON.stringify({ changes, errors }, null, 2));
    return;
  }

  if (!changes.length) {
    console.log('개정 없음 — 모든 법령의 공포번호가 baseline과 동일.');
  } else {
    console.log(`=== 개정 감지: ${changes.length}종 ===\n`);
    for (const c of changes) {
      console.log(
        `▶ ${c.law}${c.simulated ? ' (SIMULATED)' : ''}  공포 ${c.from} → ${c.to} / ${c.제개정구분} / 시행 ${c.시행일자}`,
      );
      console.log(`  영향 문서 ${c.files.length}개:`);
      for (const f of c.files.slice(0, 20)) console.log(`    - ${f}`);
      if (c.files.length > 20) console.log(`    …외 ${c.files.length - 20}개`);
      const reasonHead = c.reason.split('\n').slice(0, 12).join('\n    ');
      console.log(`  개정이유(발췌):\n    ${reasonHead}\n`);
    }
  }
  if (errors.length) console.log(`\n오류:\n  ${errors.join('\n  ')}`);
}

// CLI 로 직접 실행될 때만 main() 호출 (import 시 실행 방지)
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}

/**
 * 법령 개정 동기화 P1 — baseline 부트스트랩
 *
 * scan-law-refs 로 도출한 distinct 법령 각각을 법제처에서 조회하여
 * 현행 공포번호/시행일자/MST/법령ID 를 src/lib/law-sync/law-baseline.json 에 시딩한다.
 * 이후 감지 단계(check-amendments)는 이 baseline 의 "공포번호" 변화로 개정 여부를 판정한다.
 *
 * 실행: npx tsx scripts/law-sync/build-baseline.ts
 * 필요: .env.local 의 BEOPJECHEO_OC
 */
import fs from 'node:fs';
import path from 'node:path';
import { scanLawRefs } from './scan-law-refs';
import { getOC, lookupLaw, norm } from './beopjecheo';

const OUT = path.join(process.cwd(), 'src', 'lib', 'law-sync', 'law-baseline.json');

async function main() {
  const oc = getOC();
  const { counts } = scanLawRefs();
  const laws = Array.from(counts.keys()).sort();

  const baseline: Record<string, Awaited<ReturnType<typeof lookupLaw>>> = {};
  const missing: string[] = [];

  for (const law of laws) {
    try {
      const entry = await lookupLaw(oc, law);
      if (entry) {
        baseline[law] = entry;
        const flag = norm(entry.조회명) === norm(law) ? '' : `  ⚠ 매칭='${entry.조회명}'`;
        console.log(
          `✓ ${law.padEnd(18)} 공포 ${entry.공포번호} / 시행 ${entry.시행일자} / ${entry.제개정구분}${flag}`,
        );
      } else {
        missing.push(law);
        console.log(`✗ ${law} — 결과 없음`);
      }
    } catch (e) {
      missing.push(law);
      console.log(`✗ ${law} — 오류: ${(e as Error).message}`);
    }
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      { _생성: 'scripts/law-sync/build-baseline.ts', _주의: '개정감지는 공포번호 변화로 판정', laws: baseline },
      null,
      2,
    ) + '\n',
    'utf8',
  );
  console.log(`\n저장: ${path.relative(process.cwd(), OUT)} (${Object.keys(baseline).length}종)`);
  if (missing.length) console.log(`미해결(검수 필요): ${missing.join(', ')}`);
}

main();

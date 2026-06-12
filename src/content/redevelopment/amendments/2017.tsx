"use client";

import { CalcBox, Insight } from "@/components/content/shared";

export default function Amendments2017() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        주택재개발사업 등 <strong>사업시행자 감면율 일부 축소</strong>(지특법 §74). 시행자(LH 등)의 담세력을 고려한 조정.
      </p>

      <CalcBox title="■ 개정내용 — 시행자 감면 축소">
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>주택재개발사업(§74③1·2호)</strong>: 사업시행자 감면율 취득세 100% → <strong>3년 연장(감면 축소)</strong>, 일몰기한 2019.12.31.</li>
          <li>주택재개발사업·주거환경개선사업 사업시행자(LH공사 등)는 부동산 시세차익 등 수익성이 높은 사업을 추진하는 담세력 있는 기관이므로 감면 일부 축소</li>
          <li><strong>주거환경개선사업</strong>: 극히 열악한 지역에서 사업이 이루어지는 점을 감안하여 현행 감면율을 <strong>1년간 유예</strong></li>
        </ul>
        <Insight>
          이 흐름(시행자 감면 축소)은 2020년 감면 재설계에서 재개발 시행자 취득 주택 감면율을
          75% → 50%로 추가 조정하는 방향으로 이어진다.
        </Insight>
      </CalcBox>
    </div>
  );
}

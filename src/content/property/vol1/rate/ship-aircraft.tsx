"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

export default function RateShipAircraft() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        선박과 항공기는 단일 비례세율을 적용한다. 일반 선박·항공기는 0.3%, 사치성 자산인 고급선박은 5%로 중과한다.
      </p>

      <CalcBox title="■ 세율표">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>과세구분</th>
              <th style={{ ...th, width: "32%" }}>세율</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>고급선박</td>
              <td style={tdc}>과세표준 × 1,000분의 50 (5%)</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>그 밖의 선박</td>
              <td style={tdc}>과세표준 × 1,000분의 3 (0.3%)</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>항공기</td>
              <td style={tdc}>과세표준 × 1,000분의 3 (0.3%)</td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 고급선박 — 5% 중과 (지법 §13⑤5호)">
        <SubSection title="● 고급선박의 범위 (영 §28⑥)">
          <p>
            <strong>비업무용 자가용 선박</strong>으로서 시가표준액이 <strong>3억원을 초과</strong>하는 선박. 다만,
            실험·실습 등의 용도에 제공할 목적으로 취득한 것은 제외한다.
          </p>
        </SubSection>
        <Insight>
          고급선박만 5% 중과되고, 그 밖의 선박과 항공기는 모두 0.3%의 단일 비례세율이 적용된다.
        </Insight>
      </CalcBox>
    </div>
  );
}

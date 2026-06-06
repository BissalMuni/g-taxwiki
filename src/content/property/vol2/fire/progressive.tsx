"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };
const red = { color: "#cf1322", fontWeight: "bold" as const };

/** 산정식 박스 스타일 */
const formula = {
  border: "1px solid #d9d9d9",
  background: "#fafafa",
  borderRadius: "8px",
  padding: "12px 14px",
  margin: "8px 0",
  fontSize: "var(--content-font-size, 13px)",
  lineHeight: 1.8,
};

export default function Progressive() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        소방분 세율은 <strong>초과누진세율</strong>이다. 과세표준을 구간별로 나누어 각 구간 세율을 적용하는 방식으로,
        세율표의 <strong>누진식(고정금액 + 초과금액 × 세율)</strong>이 곧 누진공제를 반영한 계산식이다.
      </p>

      <CalcBox title="■ 초과누진 방식이란">
        <p>
          과세표준 전체에 하나의 세율을 곱하는 <strong>단일비례세율</strong>(도시지역분 0.14% 등)과 달리, 소방분은
          과세표준을 6개 구간으로 나누어 <strong>각 구간을 초과하는 부분에만 높은 세율</strong>을 적용한다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "44%" }}>과세표준 구간</th>
              <th style={{ ...th, width: "16%" }}>한계세율</th>
              <th style={th}>구간 누적세액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>① 600만원 이하</td>
              <td style={tdc}>0.04%</td>
              <td style={tdc}>2,400원 (600만원 시)</td>
            </tr>
            <tr>
              <td style={td}>② 600만 ~ 1,300만원</td>
              <td style={tdc}>0.05%</td>
              <td style={tdc}>5,900원 (1,300만원 시)</td>
            </tr>
            <tr>
              <td style={td}>③ 1,300만 ~ 2,600만원</td>
              <td style={tdc}>0.06%</td>
              <td style={tdc}>13,700원 (2,600만원 시)</td>
            </tr>
            <tr>
              <td style={td}>④ 2,600만 ~ 3,900만원</td>
              <td style={tdc}>0.08%</td>
              <td style={tdc}>24,100원 (3,900만원 시)</td>
            </tr>
            <tr>
              <td style={td}>⑤ 3,900만 ~ 6,400만원</td>
              <td style={tdc}>0.10%</td>
              <td style={tdc}>49,100원 (6,400만원 시)</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>⑥ 6,400만원 초과</td>
              <td style={{ ...tdc, fontWeight: "bold" }}>0.12%</td>
              <td style={tdc}>—</td>
            </tr>
          </tbody>
        </table>
        <Insight>
          세율표의 고정금액(2,400원·5,900원·13,700원…)은 <strong>직전 구간까지의 세액 누적분</strong>이다. 따라서
          「고정금액 + 초과금액 × 한계세율」만 계산하면 자동으로 누진이 반영된다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 계산 구조">
        <div style={formula}>
          <strong>소방분 세액</strong> = 해당 구간 고정금액 + (과세표준 − 구간 하한) × 한계세율
        </div>
        <p>과세표준이 속한 구간을 찾아 그 행의 산식을 그대로 적용하면 된다.</p>
      </CalcBox>

      <CalcBox title="■ 계산 예시">
        <SubSection title="● 예시 1 — 과세표준 5,000만원 (일반 건축물)">
          <p>5,000만원은 ⑤구간(3,900만 ~ 6,400만원, 한계세율 0.10%)에 속한다.</p>
          <table style={tbl}>
            <tbody>
              <tr>
                <td style={{ ...td, width: "62%" }}>고정금액 (3,900만원까지 누적)</td>
                <td style={tdc}>24,100원</td>
              </tr>
              <tr>
                <td style={td}>초과금액 (5,000만 − 3,900만) × 0.10%</td>
                <td style={tdc}>11,000,000 × 0.001 = 11,000원</td>
              </tr>
              <tr>
                <td style={{ ...tdHead }}>소방분 세액</td>
                <td style={{ ...tdc, ...red }}>35,100원</td>
              </tr>
            </tbody>
          </table>
        </SubSection>

        <SubSection title="● 예시 2 — 과세표준 1억원 (일반 건축물)">
          <p>1억원은 ⑥구간(6,400만원 초과, 한계세율 0.12%)에 속한다.</p>
          <table style={tbl}>
            <tbody>
              <tr>
                <td style={{ ...td, width: "62%" }}>고정금액 (6,400만원까지 누적)</td>
                <td style={tdc}>49,100원</td>
              </tr>
              <tr>
                <td style={td}>초과금액 (1억 − 6,400만) × 0.12%</td>
                <td style={tdc}>36,000,000 × 0.0012 = 43,200원</td>
              </tr>
              <tr>
                <td style={tdHead}>소방분 세액</td>
                <td style={{ ...tdc, ...red }}>92,300원</td>
              </tr>
            </tbody>
          </table>
        </SubSection>

        <SubSection title="● 예시 3 — 과세표준 1억원, 화재위험 건축물(2배 중과)">
          <p>표준세액 92,300원에 <strong>중과배율 200%</strong>를 적용한다.</p>
          <table style={tbl}>
            <tbody>
              <tr>
                <td style={{ ...td, width: "62%" }}>표준세액 × 200%</td>
                <td style={tdc}>92,300 × 2</td>
              </tr>
              <tr>
                <td style={tdHead}>소방분 세액</td>
                <td style={{ ...tdc, ...red }}>184,600원</td>
              </tr>
            </tbody>
          </table>
          <Insight>중과는 <strong>표준세율 자체에 배율</strong>을 적용한다. 누진 계산을 먼저 끝낸 뒤 배율을 곱해도 결과는 같다.</Insight>
        </SubSection>
      </CalcBox>
    </div>
  );
}

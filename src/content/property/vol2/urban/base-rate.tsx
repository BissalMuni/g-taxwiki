"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

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

export default function BaseRate() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세 도시지역분의 과세표준은 일반 재산세와 <strong>동일</strong>하며(§110), 여기에 도시지역분 세율
        <strong> 0.14%</strong>를 적용한다. 조례로 0.23%까지 탄력 적용할 수 있다(지법 §112①②).
      </p>

      <CalcBox title="■ 과세표준">
        <p>
          도시지역분의 과세표준은 본세와 같은 <strong>지법 §110의 과세표준</strong>(시가표준액 × 공정시장가액비율 등)을
          그대로 사용한다. 별도의 과세표준을 산정하지 않는다.
        </p>
      </CalcBox>

      <CalcBox title="■ 세율">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "34%" }}>구분</th>
              <th style={{ ...th, width: "26%" }}>세율</th>
              <th style={th}>근거</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>표준세율</td>
              <td style={{ ...tdc, fontWeight: "bold" }}>0.14% (1,000분의 1.4)</td>
              <td style={td}>지법 §112①2호</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>탄력세율 한도</td>
              <td style={{ ...tdc, fontWeight: "bold" }}>0.23% (1,000분의 2.3)</td>
              <td style={td}>지법 §112② — 조례로 0.23% 이내에서 가감</td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 세액 산출">
        <SubSection title="● 산출 구조">
          <div style={formula}>
            <strong>도시지역분 세액</strong> = 과세표준(§110) × 0.14%(또는 조례 세율)
            <br />
            <br />
            <strong>총 재산세액</strong> = 일반 재산세(본세) + 도시지역분 세액
          </div>
        </SubSection>
        <SubSection title="● 예시">
          <p>과세표준 2억원, 도시지역분 표준세율 0.14% 적용 시:</p>
          <table style={tbl}>
            <tbody>
              <tr>
                <td style={{ ...td, fontWeight: "bold", width: "60%" }}>도시지역분 = 200,000,000 × 0.14%</td>
                <td style={{ ...tdc, fontWeight: "bold", color: "#cf1322" }}>280,000원</td>
              </tr>
            </tbody>
          </table>
          <p>이 280,000원이 일반 재산세 본세에 합산되어 고지된다.</p>
        </SubSection>
        <Insight>
          도시지역분은 누진세율이 아니라 <strong>과세표준 전액에 단일세율(비례세율)</strong>을 적용한다. 본세의 4단계
          초과누진(주택 등)과 달리 계산이 단순하다.
        </Insight>
      </CalcBox>
    </div>
  );
}

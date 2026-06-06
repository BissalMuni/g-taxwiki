"use client";

import { CalcBox, SubSection, Step, Insight } from "@/components/content/shared";

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

export default function Calc() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        세부담 상한액은 <strong>「직전 연도 해당 재산에 대한 세액 상당액 × 세부담 상한율」</strong>로 계산한다. 핵심은
        비교 기준이 되는 <strong>직전 연도 세액 상당액</strong>을 어떻게 산정하느냐다(지법 §122, 영 §118).
      </p>

      <CalcBox title="■ 계산 흐름">
        <Step n={1} label="해당 연도 산출세액 계산" />
        <p>금년 과세표준 × 세율로 정상 산출세액을 구한다(탄력세율·특례세율 적용분 포함).</p>

        <Step n={2} label="직전 연도 세액 상당액 산정" />
        <p>금년의 과세대상 재산이 직전 연도 과세기준일에도 존재했다고 보아, 직전 연도 세액을 산정한다.</p>

        <Step n={3} label="세부담 상한액 계산" />
        <div style={formula}>
          <strong>세부담 상한액</strong> = 직전 연도 세액 상당액 × 세부담 상한율
          <br />
          &nbsp;&nbsp;&nbsp;(토지·건축물 150% / 주택 105·110·130%)
        </div>

        <Step n={4} label="결정세액 확정" />
        <div style={formula}>
          <strong>결정세액</strong> = MIN(① 해당 연도 산출세액, ③ 세부담 상한액)
        </div>
      </CalcBox>

      <CalcBox title="■ 직전 연도 세액 상당액의 산정 (영 §118)">
        <p>비교 기준이 되는 「직전 연도 세액 상당액」은 다음과 같이 구분하여 산정한다.</p>

        <SubSection title="● 원칙 — 직전 연도에 실제 부과된 세액">
          <p>
            직전 연도의 법령과 과세표준이 금년과 동일한 경우에는, 직전 연도에 실제 부과된 해당 재산의 재산세액을
            그대로 기준으로 삼는다.
          </p>
        </SubSection>

        <SubSection title="● 의제 산정 — 직전 연도에 부과 세액이 없는 경우">
          <p>
            분할·합병·지목변경·신축 등으로 직전 연도에 해당 재산에 부과된 세액이 없거나 비교가 곤란한 경우에는,
            <strong> 금년의 과세대상 재산이 직전 연도 과세기준일에 존재한 것으로 보아</strong> 직전 연도의 법령·과세표준·
            세율을 적용하여 산출한 세액 상당액을 기준으로 한다.
          </p>
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>토지의 분할·합병, 지목변경, 과세대상 구분 변경(분리 ↔ 합산 등)</li>
            <li>건축물의 신축·증축, 용도변경</li>
            <li>주택의 신축, 부속토지와 건물 소유자의 변동 등</li>
          </ul>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 예시 ① 토지·건축물 (상한율 150%)">
        <table style={tbl}>
          <tbody>
            <tr>
              <td style={{ ...td, fontWeight: "bold", width: "46%" }}>직전 연도 세액 상당액</td>
              <td style={tdc}>1,000,000원</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>해당 연도 산출세액</td>
              <td style={tdc}>2,000,000원</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>세부담 상한액 (1,000,000 × 150%)</td>
              <td style={tdc}>1,500,000원</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold", background: "#fff7e6" }}>결정세액 = MIN(2,000,000, 1,500,000)</td>
              <td style={{ ...tdc, fontWeight: "bold", background: "#fff7e6", color: "#cf1322" }}>1,500,000원</td>
            </tr>
          </tbody>
        </table>
        <p>
          산출세액(200만원)이 상한액(150만원)을 초과하므로, 초과분 50만원은 과세하지 않고 <strong>150만원</strong>으로
          결정한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 예시 ② 주택 — 경과조치 (세부담상한제 + 과표상한제 병행)">
        <p>
          주택은 '24~'28년 경과조치 기간 동안 <strong>세부담상한제로 계산한 세액</strong>과
          <strong> 과표상한제로 계산한 세액</strong>을 모두 구한 뒤, <strong>더 낮은 세액</strong>을 적용한다.
        </p>
        <table style={tbl}>
          <tbody>
            <tr>
              <td style={{ ...td, fontWeight: "bold", width: "46%" }}>① 과표상한제 적용 세액</td>
              <td style={tdc}>520,000원</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>② 세부담상한제 적용 세액 (직전 세액 × 105·110·130%)</td>
              <td style={tdc}>500,000원</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold", background: "#fff7e6" }}>결정세액 = MIN(①, ②)</td>
              <td style={{ ...tdc, fontWeight: "bold", background: "#fff7e6", color: "#cf1322" }}>500,000원</td>
            </tr>
          </tbody>
        </table>
        <Insight>
          경과조치 기간에는 두 제도 중 <strong>납세자에게 유리한(더 낮은) 세액</strong>이 적용되도록 설계되었다.
          '29년부터는 세부담상한제가 완전히 종료되고 과표상한제만 남는다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 적용 시 유의사항">
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li>
            세부담 상한은 <strong>물건별(재산별)로 각각 판단</strong>한다. 동일 납세자라도 토지·건축물·주택은 별개로
            계산한다.
          </li>
          <li>
            <strong>재산세 본세와 재산세 도시지역분</strong>은 각각 별도로 직전 연도 세액 상당액·세부담 상한을 적용한 뒤
            합산한다(영 §118). 본세와 도시지역분을 합산한 산출세액에 한 번에 상한을 적용하는 것이 아니다.
          </li>
          <li>
            지역자원시설세(소방분)·지방교육세 등 <strong>병기세목</strong>은 세부담 상한 대상이 아니다.
          </li>
          <li>
            세율 인하(탄력세율)나 1세대 1주택 특례세율이 적용된 경우, 그 인하된 세율로 산출한 세액을 기준으로
            상한을 적용한다.
          </li>
        </ul>
      </CalcBox>
    </div>
  );
}

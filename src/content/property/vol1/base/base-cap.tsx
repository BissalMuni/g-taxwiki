"use client";

import { CalcBox, Insight } from "@/components/content/shared";

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

export default function BaseCap() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        공시가격 급등 시에도 과세표준이 제한적으로만 증가하도록, 매년 과표 증가 한도를 설정하는 제도가
        <strong> 주택 과세표준 상한제</strong>다. <strong>2024.1.1. 이후 납세의무 성립분</strong>부터 적용하며, 종전의
        주택 세부담상한제를 대체한다(지법 §110③, §122).
      </p>

      <CalcBox title="■ 주택 과세표준 상한제 (지법 §110③, §122)">
        <p>
          매년 과표의 증가 한도를 설정하여 공시가격 급등 시에도 과표가 제한적으로 증가토록 함으로써 세부담을 안정적으로
          관리하기 위한 제도다.
        </p>
        <div style={formula}>
          <strong>과세표준상한액</strong> = 대통령령으로 정하는 직전 연도 해당 주택의 과세표준 상당액
          <br />
          &nbsp;&nbsp;&nbsp;+ (과세기준일 당시 시가표준액으로 산정한 과세표준 × 과세표준상한율)
          <br />
          <br />
          <strong>과세표준상한율</strong> = 소비자물가지수·주택가격변동률·지방재정 여건 등을 고려하여
          <br />
          &nbsp;&nbsp;&nbsp;<strong>100분의 5</strong> 범위 이내로 대통령령으로 정하는 비율
        </div>
      </CalcBox>

      <CalcBox title="■ 적용 원칙">
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li>
            최종 적용할 과세표준은 <strong>과표 상한액과 금년 공시가격을 적용한 과표 중 작은 값</strong>.
          </li>
          <li>
            과표상한제는 공시가격 <strong>상승</strong> 시 과표 증가를 제한하는 제도이므로, 공시가격이
            <strong> 하락</strong>하면 상한제가 적용되지 않고 하락한 공시가격으로 과표를 산정한다.
          </li>
          <li>
            <strong>새로 취득한 주택</strong>에 대해서는 세부담상한제를 적용하지 않고 과표상한제를 적용한다.
          </li>
        </ul>
        <Insight>
          과표상한제는 「과세표준」 자체를 제한하는 제도이고, 세부담상한제는 「산출세액」을 제한하던 제도다. 2024년부터는
          과표 단계에서 증가를 직접 제한한다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 세부담상한제 폐지 — 경과조치 (5년 한시운영)">
        <p>
          주택 재산세 세부담상한제는 과표상한제 도입과 함께 폐지되었으나, 급격한 세부담 증가를 방지하기 위해
          <strong> 5년간('24년~'28년) 한시운영</strong>한다.
        </p>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 부칙(법률 제19230호, 2023.3.14.) 제15조 — 제122조 개정규정 시행 전에 주택 재산세가 부과된 주택에 대해서는
          제122조 개정규정에도 불구하고 2028.12.31.까지 종전의 규정에 따른다.
        </p>
      </CalcBox>
    </div>
  );
}

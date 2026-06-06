"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

export default function Overview() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세 도시지역분은 도시지역의 도시계획사업 재원을 마련하기 위해, 도시지역 안의 토지·건축물·주택에 대한 일반
        재산세에 더하여 부과하는 재산세의 한 항목이다(지법 §112). 과거의 「도시계획세」가 2011년 재산세로 통합된 것이다.
      </p>

      <CalcBox title="■ 의의">
        <p>
          지방자치단체의 장은 「국토의 계획 및 이용에 관한 법률」에 따른 <strong>도시지역 중 지방의회 의결을 거쳐
          고시한 지역</strong>(재산세 도시지역분 적용대상 지역) 안의 토지·건축물·주택에 대하여, 조례로 정하는 바에 따라
          일반 재산세액에 도시지역분을 합산하여 부과할 수 있다.
        </p>
        <div style={{ border: "1px solid #d9d9d9", background: "#fafafa", borderRadius: "8px", padding: "12px 14px", margin: "8px 0", lineHeight: 1.8, fontSize: "var(--content-font-size, 13px)" }}>
          <strong>재산세액</strong> = ① 일반 재산세(본세) + ② 도시지역분
          <br />
          &nbsp;&nbsp;&nbsp;① = 과세표준(§110) × 일반세율(§111·§111의2)
          <br />
          &nbsp;&nbsp;&nbsp;② = 과세표준(§110) × <strong>0.14%</strong>(1,000분의 1.4)
        </div>
      </CalcBox>

      <CalcBox title="■ 연혁 — 도시계획세에서 재산세 도시지역분으로">
        <SubSection title="● 통합 경과">
          <p>
            종전에는 도시계획세가 재산세와 별개의 독립세목이었으나, <strong>2011년 지방세 세목 통·폐합</strong>으로
            재산세에 흡수되어 「재산세 도시지역분」이 되었다. 별도 세목이 아니라 재산세의 일부로 과세된다.
          </p>
        </SubSection>
        <Insight>
          도시지역분은 독립 세목이 아니라 <strong>재산세 그 자체</strong>다. 따라서 비과세·감면·세부담 상한·부과징수
          절차 등 재산세의 규정이 그대로 적용된다(중복 부분은 본세 규정 준용).
        </Insight>
      </CalcBox>

      <CalcBox title="■ 법적 성격">
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li><strong>임의 부과</strong>: 지방자치단체가 조례로 정하는 지역에 한해 부과한다(전국 일률 아님).</li>
          <li><strong>목적성</strong>: 도시계획사업에 필요한 비용 충당을 위한 재원.</li>
          <li><strong>합산 부과</strong>: 본세와 별도 고지가 아니라 하나의 재산세 고지서에 합산된다.</li>
        </ul>
      </CalcBox>
    </div>
  );
}

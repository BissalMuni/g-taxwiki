"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

export default function Method() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세는 지방자치단체의 장이 세액을 산정하여 <strong>보통징수</strong> 방법으로 부과·징수한다. 고지서는 늦어도
        납기개시 5일 전까지 발급한다.
      </p>

      <CalcBox title="■ 보통고지 / 고지서 발급시기">
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
          <li><strong>보통고지</strong>: 지방자치단체의 장이 세액을 산정하여 보통징수 방법으로 부과·징수.</li>
          <li>
            <strong>발급시기</strong>: 토지·건축물·주택·선박·항공기로 구분한 납세고지서에 과세표준과 세액을 적어
            <strong> 늦어도 납기개시 5일 전까지</strong> 발급.
          </li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 재산세의 합산 및 세액산정">
        <ol style={{ margin: "6px 0", paddingLeft: "1.3em", lineHeight: 1.8 }}>
          <li>시·군·구청장은 신고 또는 직권으로 매년 과세기준일 현재 재산을 조사하고, 과세대상 또는 비과세·감면대상으로 구분하여 재산세 과세대장에 등재.</li>
          <li>토지는 종합합산·별도합산·분리과세대상으로 구분하고 납세의무자별로 합산하여 세액 산출.</li>
          <li>납기개시 5일 전까지 납세의무자에게 납세고지서 발급.</li>
          <li>
            토지에 대한 재산세는 <strong>한 장의 납세고지서</strong>로 발급. 토지 외 재산은 건축물·주택·선박·항공기로
            구분하여 물건마다 각각 한 장, 또는 물건 종류별로 한 장의 고지서로 발급할 수 있다.
          </li>
        </ol>
      </CalcBox>

      <CalcBox title="■ 현황부과 (법 §106③, 2021.12.28. 신설)">
        <p>
          과세대상 물건이 공부상 등재되지 아니하였거나 공부상 등재 현황과 사실상의 현황이 다른 경우에는
          <strong> 사실상의 현황</strong>에 따라 재산세를 부과한다. 다만 다음의 경우 등 대통령령으로 정하는 경우에는
          <strong> 공부상 등재현황</strong>에 따라 부과한다.
        </p>
        <ol style={{ margin: "6px 0", paddingLeft: "1.3em", lineHeight: 1.7 }}>
          <li>관계 법령상 허가 등을 받아야 함에도 받지 않고 이용하는 경우로서, 사실상 현황에 따라 부과하면 오히려 재산세 부담이 낮아지는 경우</li>
          <li>과세기준일 현재의 사용이 일시적으로 공부상 등재현황과 달리 사용하는 것으로 인정되는 경우</li>
        </ol>
        <Insight>
          원칙은 「사실상 현황」 과세이나, 무허가 이용으로 부담이 낮아지거나 일시적 용도변경인 경우에는 「공부상 현황」으로
          과세하여 조세회피를 차단한다.
        </Insight>
      </CalcBox>

      <SubSection title="● 사례 — 고지의 적격성 및 사실상 소유자 판단 (대법원 2016두31074, 2016.4.15.)">
        <p>
          납기개시 5일 전 발급 규정은 납세의무자에게 과세표준·세액을 미리 알려 확인·준비 기간을 주려는 것일 뿐,
          기간 내 미발급이라도 납세의무의 성립·효력에 영향이 없다. 도시정비법상 청산금 미지급·소유권이전등기 미경료
          상태에서는 조합을 토지의 「사실상 소유자」로 볼 수 없다.
        </p>
      </SubSection>
    </div>
  );
}

"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

export default function Summary() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세는 토지·건축물·주택·선박·항공기를 <strong>보유한 사실</strong> 자체에 과세하는 보유세다. 무엇을 어떤
        현황으로 보유하는지를 매년 새로 판정한다.
      </p>

      <CalcBox title="■ 재산세의 의의와 성격">
        <p>
          재산세는 과세대상인 재산(토지·건축물·주택·선박·항공기)을 보유하고 있는 자에 대하여{" "}
          <strong>소유 사실</strong>에 과세하는 <strong>보유세</strong>로서, 보편성·안정성·응익적 성격을 가진 전형적인
          대중세이며, 기초자치단체인 <strong>시·군·구의 독립세</strong>로 그 수입을 일반재정수요에 충당하는{" "}
          <strong>보통세</strong>이다.
        </p>

        <SubSection title="● 시점보유과세 — 저량(stock)에 대한 과세">
          <p>
            ① 일종의 <strong>「시점보유과세」</strong> 성격을 가져, 보유한 기간에 따라 과세하는 「기간보유」와는 차이가 있다.
          </p>
          <p>
            ② 조세이론상 수익세 또는 보유과세로 분류되며, 실제 수익발생 여부를 <strong>불문</strong>하고 경제적 편익가치를
            얻는 데 과세근거를 둔다.
          </p>
          <p>
            ③ 소득과 같은 유량(flow)이 아닌 <strong>특정 보유시점의 자산가치인 저량(stock)</strong>에 과세하는 조세로서,
            과세기준일 당시 재산의 소유 여부를 토대로 개개인의 담세력을 측정한다.
          </p>
          <p>
            ④ 매년 부동산별 이용현황·개인별 보유상태 등을 확정하여 과세대상·세율·감면 등을 일일이 달리 적용할 수 있도록
            과세체계가 설계되어 있다.
          </p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 사실상 현황에 따른 과세 (지방세법 제106조제3항)">
        <p>
          재산세 과세대상 물건이 토지대장·건축물대장 등 <strong>공부(公簿)에 등재되지 않았거나</strong>, 공부상 등재현황과{" "}
          <strong>사실상의 현황이 다른 경우</strong>에는 <strong>사실상의 현황</strong>에 따라 재산세를 부과한다.
        </p>
        <p>
          다만, 과세대상 물건을 공부상 등재현황과 달리 이용함으로써 <strong>재산세 부담이 낮아지는 경우</strong> 등
          대통령령으로 정하는 경우에는 <strong>공부상 등재현황</strong>에 따라 부과한다.
        </p>

        <SubSection title="● 판단 기준 — 물건 기준의 실질과세">
          <p>
            사실상 현황 과세는 <strong>실질과세의 원칙과 과세형평</strong>을 도모하려는 취지다. 다만 그 판단은{" "}
            <strong>소유자가 아니라 과세대상 물건</strong>을 기준으로, 과세기준일 현재의 지목·토지 이용현황 등을 고려하여
            한다. 즉 공부상 등재현황과 사실상의 현황이 다르면 <strong>실제 현황 조사</strong> 등을 통해 사실상의 현황에 따라
            과세한다.
          </p>
        </SubSection>

        <Insight>
          핵심은 <strong>“공부(公簿)가 아니라 사실상의 현황”</strong>. 단, 현황을 달리 이용해 세 부담을 낮춘 경우엔 예외적으로
          공부상 현황으로 되돌려 과세한다.
        </Insight>
      </CalcBox>
    </div>
  );
}

"use client";

import { CalcBox, Insight } from "@/components/content/shared";

export default function OverviewRegionalHousing() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        지역주택조합은 <strong>「주택법」</strong>에 따른 주택조합으로, 사업예정지의 소유권이 확보되지 않은
        상태에서 조합원을 모집해 자금을 조달하고 대지 소유권을 취득한 뒤 주택을 건설·공급하는 사업이다.
      </p>

      <CalcBox title="■ 개념과 사업 흐름">
        <p>
          모집주체가 사업예정지의 소유권이 확보되지 않은 상태에서 ① 사업 계획 → ② 조합원 모집 →
          ③ 조합 결성 → ④ 조합원으로부터 자금 조달 및 대지 소유권 취득 → ⑤ 사업계획승인 →
          ⑥ 주택 건설 후 조합원에게 공급하는 순서로 진행한다.
        </p>
        <p>
          <strong>주택조합</strong>: 다수의 구성원이 주택을 마련하거나 리모델링하기 위하여 결성한 조합으로,
          지역주택조합·직장주택조합·리모델링주택조합으로 구분한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 취득세 과세 개요">
        <p>
          조합원·조합 모두 건축물(신축)은 <strong>원시취득 2.8%</strong>(준공일 등), 과세표준은 전체 공사비이다.
          사업추진 중 조합원으로부터 신탁받은 토지와 조합이 매입한 토지의 구분에 따라
          비조합원용 토지 면적이 산정된다(지법 §7⑧, ’23.1.1.~).
        </p>
        <Insight>
          지역주택조합 과세의 구체적 쟁점은 「4장 주요 현안 · 지역주택조합 과세」에서 다룬다.
        </Insight>
      </CalcBox>
    </div>
  );
}

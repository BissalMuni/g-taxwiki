"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

export default function LevyRelation() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        도시지역분은 독립 세목이 아니라 재산세의 일부이므로, 부과·징수 절차와 비과세·감면·세부담 상한 등은 본세 규정을
        따른다. 본세와 합산하여 하나의 재산세로 취급되는 점이 핵심이다.
      </p>

      <CalcBox title="■ 합산 고지">
        <p>
          도시지역분은 일반 재산세와 <strong>별도로 고지하지 않고</strong>, 같은 과세기준일(6/1)·납기에 하나의 재산세
          고지서로 합산하여 부과·징수한다.
        </p>
        <SubSection title="● 납기">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>토지·주택분(2기): 본세와 동일한 납기에 도시지역분이 함께 부과된다.</li>
            <li>건축물분: 본세와 동일한 납기(7월)에 함께 부과된다.</li>
          </ul>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 비과세·감면 관계">
        <p>
          본세가 비과세·감면되는 재산은 원칙적으로 <strong>도시지역분도 함께 비과세·감면</strong>된다(재산세의 일부이기
          때문). 다만 도시지역분 고유의 제외 토지(§112③)는 본세 과세 여부와 별개로 도시지역분만 제외될 수 있다.
        </p>
        <Insight>
          정리: ① 본세가 비과세/감면 → 도시지역분도 따라감. ② 본세는 과세되지만 도시지역분 제외 토지에 해당 →
          본세만 과세하고 도시지역분은 빼고 계산.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 세부담 상한과의 관계">
        <p>
          세부담 상한은 <strong>본세와 도시지역분을 합산한 산출세액</strong>을 기준으로 직전 연도 세액과 비교하여
          적용한다. 도시지역분만 따로 떼어 상한을 판단하지 않는다.
        </p>
        <SubSection title="● 병기세목과의 구별">
          <p>
            지역자원시설세(소방분)·지방교육세 등은 재산세에 병기(倂記)되는 <strong>별개 세목</strong>이므로 세부담 상한
            대상이 아니다. 반면 도시지역분은 재산세 그 자체이므로 상한 계산에 포함된다.
          </p>
        </SubSection>
      </CalcBox>
    </div>
  );
}

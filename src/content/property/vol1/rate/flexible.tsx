"use client";

import { CalcBox, Insight } from "@/components/content/shared";

export default function RateFlexible() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        탄력세율은 지방자치단체가 재정여건·재해 등 사정에 따라 표준세율을 조례로 조정할 수 있도록 한 제도다.
      </p>

      <CalcBox title="■ 탄력세율 (조례에 의한 가감)">
        <p>
          지방자치단체의 장은 <strong>특별한 재정수요나 재해 등의 발생</strong>으로 재산세의 세율 조정이 불가피하다고
          인정되는 경우, <strong>조례로 정하는 바</strong>에 따라 제1항의 표준세율의 <strong>100분의 50의 범위</strong>에서
          가감할 수 있다.
        </p>
        <Insight>
          가감한 세율은 <strong>해당 연도에만</strong> 적용된다. 표준세율의 ±50% 범위이므로, 예컨대 0.25% 기본세율은
          0.125%~0.375% 범위에서 조정할 수 있다.
        </Insight>
      </CalcBox>
    </div>
  );
}

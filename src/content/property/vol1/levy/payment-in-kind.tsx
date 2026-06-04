"use client";

import { CalcBox, Insight } from "@/components/content/shared";

export default function PaymentInKind() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        물납은 거액의 재산세를 금전 대신 부동산으로 납부하는 제도다. 납부세액 1천만원 초과 시 신청을 받아 허가한다.
      </p>

      <CalcBox title="■ 물납 (지법 §117)">
        <p>
          지방자치단체의 장은 재산세의 납부세액이 <strong>1천만원을 초과</strong>하는 경우에는 납세의무자의 신청을 받아
          해당 지방자치단체의 <strong>관할구역에 있는 부동산</strong>에 대하여만 대통령령으로 정하는 바에 따라
          <strong> 물납을 허가</strong>할 수 있다.
        </p>
        <Insight>
          물납 대상은 「관할구역 내 부동산」으로 한정된다. 납부세액 기준(1천만원 초과)은 분할납부 기준(250만원 초과)과
          구별된다.
        </Insight>
      </CalcBox>
    </div>
  );
}

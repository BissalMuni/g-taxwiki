"use client";

import { CalcBox, Insight } from "@/components/content/shared";

export default function Trust() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        신탁재산의 재산세 납세자는 위탁자이지만, 위탁자 체납 시 위탁자의 다른 재산으로 징수가 부족하면 수탁자가 신탁재산
        범위에서 물적납세의무를 진다.
      </p>

      <CalcBox title="■ 신탁재산 수탁자의 물적납세의무 (지법 §119의2)">
        <p>
          신탁재산의 <strong>위탁자</strong>가 재산세·납부지연가산세·체납처분비를 체납한 경우로서, 그 위탁자의 다른 재산에
          체납처분을 하여도 징수할 금액에 미치지 못할 때에는, 해당 신탁재산의 <strong>수탁자</strong>는 그 신탁재산
          (해당 신탁재산의 관리·처분·운용·개발 등을 통하여 수익자가 얻은 재산으로서 「신탁법」 §27에 따라 신탁재산에
          속하는 재산을 포함)으로써 위탁자의 재산세 등을 납부할 의무가 있다.
        </p>
        <Insight>
          신탁재산의 재산세 납세자는 <strong>위탁자</strong>이지만, 체납처분절차에서 위탁자의 재산으로 해결할 수 없는 경우
          <strong> 수탁자</strong>에게 신탁재산 범위의 물적납세의무가 있다.
        </Insight>
      </CalcBox>
    </div>
  );
}

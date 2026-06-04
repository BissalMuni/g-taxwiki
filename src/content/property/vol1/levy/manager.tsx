"use client";

import { CalcBox, Insight } from "@/components/content/shared";

export default function Manager() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세 납세의무자가 재산을 직접 사용·수익하지 않는 경우, 그 사용자·수익자를 납세관리인으로 지정해 신고할 수 있다
        (지방세기본법 §139).
      </p>

      <CalcBox title="■ 납세관리인 지정 신고 (지방세기본법 §139)">
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li>
            ④ 재산세의 납세의무자는 해당 재산을 직접 사용·수익하지 아니하는 경우에는 그 재산의
            <strong> 사용자·수익자를 납세관리인으로 지정하여 신고</strong>할 수 있다.
          </li>
          <li>
            ⑤ 지방자치단체의 장은 납세의무자가 제4항에 따라 사용자·수익자를 납세관리인으로 지정하여 신고하지 아니하는
            경우에는 그 재산의 <strong>사용자·수익자를 납세관리인으로 (직권) 지정</strong>할 수 있다.
          </li>
        </ul>
        <Insight>
          납세의무자가 신고하지 않으면 지방자치단체의 장이 직권으로 사용자·수익자를 납세관리인으로 지정할 수 있다.
        </Insight>
      </CalcBox>
    </div>
  );
}

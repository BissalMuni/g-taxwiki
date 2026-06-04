"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

export default function Report() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        공부와 사실상 소유관계가 다른 경우 등에는 과세기준일부터 15일 이내에 신고할 의무가 있다(지법 §120).
      </p>

      <CalcBox title="■ 신고 대상자 — 과세기준일부터 15일 이내">
        <p>
          다음에 해당하는 자는 <strong>과세기준일부터 15일 이내</strong>에 소재지 관할 지방자치단체장에게 증거자료를
          갖추어 신고하여야 한다.
        </p>
        <ol style={{ margin: "6px 0", paddingLeft: "1.3em", lineHeight: 1.7 }}>
          <li>소유권 변동·과세대상 변동 사유가 발생하였으나 과세기준일까지 등기·등록이 되지 아니한 재산의 <strong>공부상 소유자</strong></li>
          <li>상속이 개시된 재산으로 상속등기가 되지 아니한 경우 §107②2호에 따른 <strong>주된 상속자</strong></li>
          <li>사실상 종중재산으로서 공부상 개인 명의로 등재된 재산의 <strong>공부상 소유자</strong></li>
          <li>수탁자 명의로 등기·등록된 신탁재산의 <strong>수탁자</strong></li>
          <li>1세대 2주택 이상이면서 §111의2①의 1세대1주택 특례세율을 적용받으려는 경우 그 <strong>세대원</strong></li>
          <li>공부상 등재현황과 사실상의 현황이 다르거나 사실상의 현황이 변경된 경우 해당 재산의 <strong>사실상 소유자</strong></li>
        </ol>
      </CalcBox>

      <CalcBox title="■ 신고 방법 / 무신고">
        <SubSection title="● 신고 방법 (시행규칙 §62)">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
            <li>변동신고·주된 상속자·사실상 종중재산 공부상 소유자: 별지 제64호 서식</li>
            <li>신탁재산의 수탁자: 별지 제64호의2 서식</li>
          </ul>
        </SubSection>
        <SubSection title="● 무신고">
          <p>신고가 사실과 일치하지 아니하거나 신고가 없는 경우에는 지방자치단체의 장이 <strong>직권으로 조사</strong>하여 과세대장에 등재할 수 있다.</p>
        </SubSection>
        <Insight>
          <strong>상속분할협의 미성립</strong>(운영예규 법120-1) — 귀속 지분이 확정되지 않은 상태에서 일부 상속인의 법정
          상속분만 한정 신고한 경우는 §120의 사실상 소유자 신고로 보지 아니하여, §107②2호에 따라 주된 상속자에게
          납세의무가 있다.
        </Insight>
      </CalcBox>
    </div>
  );
}

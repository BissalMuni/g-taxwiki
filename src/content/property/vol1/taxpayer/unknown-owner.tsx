"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

export default function UnknownOwner() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        과세기준일 현재 <strong>소유권이 분명하지 아니하여 사실상 소유자를 확인할 수 없는 경우</strong>에는 그{" "}
        <strong>사용자</strong>가 재산세를 납부할 의무가 있다(지방세법 제107조제3항).
      </p>

      <CalcBox title="■ 1. 관계법령 (지방세법 제107조제3항)">
        <SubSection title="● 가. 「소유권의 귀속이 불분명한 재산」">
          <p>
            소유권의 귀속 자체에 분쟁이 생겨 있거나, 공부상 소유자가 <strong>생사불명·행방불명</strong>되어 오랜 기간 그
            소유자가 관리하고 있지 아니한 토지 등을 말한다(운영예규 §107-6).
          </p>
        </SubSection>

        <SubSection title="● 나. 사전 통지 의무">
          <p>
            사용자를 납세의무자로 보아 재산세를 부과하는 경우에는 그 사실을 사용자에게 <strong>미리 통지</strong>하여야 한다
            (시행령 §106③). 납세의무 통지는 별지 제68호 서식으로 한다(시행규칙 §54).
          </p>
        </SubSection>

        <SubSection title="● 다. 적용예">
          <p>
            제1항·제2항을 적용할 수 없는 경우로서 소유권 귀속에 분쟁이 있거나 소유자의 행방불명·생사불명으로 장기간
            관리하지 않는 경우, 그 <strong>사용자</strong>가 납세의무를 진다.
          </p>
          <Insight>
            ※ "사실상 소유자"란 공부상 등재 여부를 불문하고 당해 재산에 대한 실질적 소유권을 가진 자를 말한다
            (대법원 2005두15045, 2006.3.23.).
          </Insight>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 2. 주요 판례·사례">
        <div style={{ borderLeft: "3px solid #1890ff", paddingLeft: "10px" }}>
          <p style={{ margin: "0 0 4px", fontWeight: "bold" }}>
            법정상속된 주택의 사용자(임차인)에게 재산세를 부과할 수 있는지 여부{" "}
            <span style={{ fontWeight: "normal", fontSize: "12px", color: "#888" }}>(행안부 부동산세제과-1066, 2023.11.21.)</span>
          </p>
          <p style={{ margin: "0 0 4px" }}>
            「민법」상 상속은 피상속인 사망으로 개시되며, 상속 존부가 불분명하면 상속재산관리인 선임(§1053) → 상속인 수색
            공고(§1057) → 특별연고자 분여(§1057의2) → 분여되지 않으면 국가 귀속(§1058) 절차를 거친다.
          </p>
          <p style={{ margin: 0 }}>
            상속재산이 분여·국가귀속되기까지 상당한 시간이 소요되므로, 상속절차 진행 중 상속인이 있는 경우 소유가
            불분명하다고 볼 수 없다. 따라서 <strong>법정승계분을 납부하고 주택을 임차해 거주한 임차인</strong>을 사실상
            소유자로 보아 재산세 납세의무를 지울 수는 없다.
          </p>
        </div>
      </CalcBox>
    </div>
  );
}

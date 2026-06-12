"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

export default function Amendments2016() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        도시개발사업 등에 대한 감면 <strong>세분화</strong>(지특법 §74)와 <strong>최소납부세제 규정 개선</strong>(지특법 §177조의2).
      </p>

      <CalcBox title="■ 1. 도시개발사업 등 감면 세분화 (지특법 §74③)">
        <p>
          주택재개발사업·주거환경개선사업 시행 취득 부동산의 감면대상을 <strong>구체적으로 명시</strong>(제1~5호 신설)하고,
          사업시행자 취득분은 <strong>2016.12.31.</strong>까지, 사업대상 부동산 소유자가 시행자로부터 취득하는 부동산은
          <strong> 2018.12.31.</strong>까지 연장.
        </p>
        <ul className="list-disc pl-6 space-y-1" style={{ fontSize: "12.5px" }}>
          <li>1호: 주택재개발 시행자가 대지조성을 위하여 취득하는 부동산</li>
          <li>2호: 주택재개발 시행자가 관리처분계획에 따라 취득하는 주택</li>
          <li>3호: 주거환경개선 시행자가 사업 시행을 위하여 취득하는 주택</li>
          <li>4호: 소유자가 주택재개발 시행자로부터 취득하는 85㎡ 이하 주택(청산금 포함)</li>
          <li>5호: 소유자가 스스로 개량하거나 주거환경개선 시행자로부터 취득하는 85㎡ 이하 주택</li>
        </ul>
        <p className="text-muted" style={{ fontSize: "12px" }}>적용요령: 단순 조문정비 및 기존 운영사안이므로 기존과 동일하게 운영.</p>
      </CalcBox>

      <CalcBox title="■ 2. 최소납부세제 규정 개선 (지특법 §177조의2)">
        <SubSection title="● 내용">
          <p>
            면세점(<strong>취득세 200만원, 재산세 50만원</strong>) 이상의 감면을 받는 경우 감면율 상한을
            <strong> 85%로 제한</strong>하여 최소한 <strong>15% 이상</strong>은 지방세를 납부하도록 규정.
            (적용대상 감면조문에 §74 등 포함)
          </p>
        </SubSection>
        <SubSection title="● 개정이유">
          <p>
            전액면제는 성실 납세자와의 형평에 맞지 않으므로, 지방공공재 사용에 따른 최소한의 비용 지불이 필요.
            다만 농어민·취약계층·대체취득·형식적 취득에 대한 감면은 적용 예외.
          </p>
        </SubSection>
        <Insight>
          이 최소납부세제(15% 최소납부)는 정비사업 감면(§74)에도 적용되어, 체비지·보류지 등은
          ’20년부터 최소납부세제 대상이 된다(2020년 개정 참조).
        </Insight>
      </CalcBox>
    </div>
  );
}

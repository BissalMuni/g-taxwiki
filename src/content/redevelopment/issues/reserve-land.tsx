"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function IssuesReserveLand() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        <strong>체비지</strong>는 사업비 조달을 위해 환지하지 않고 확보한 처분 대상 토지,
        <strong> 보류지</strong>는 분쟁 대비·공공용지 확보 등을 위해 환지계획에서 제외해 남겨둔 토지이다.
        법률별로 개념·취득시기·과세가 다르다.
      </p>

      <CalcBox title="■ 개요와 인정요건">
        <p>
          「도시개발법」은 먼저 보류지를 설정한 후 일부를 체비지로 전환해 사업비에 충당하는 구조이고,
          「도시정비법」은 관리처분계획에 따라 조합원 분양 이후 발생하는 <strong>일반분양분을 체비지</strong>로 본다.
        </p>
        <Insight>
          체비지 인정요건(도정법 §87③ → 도시개발법 §34): ① 사업시행자가 ② 관리처분계획에서 일반분양분(체비지)으로
          인가받고 ③ 일반에게 분양하여 ④ 그 수익을 사업경비에 충당하는 등 관련 절차·요건을 <strong>모두 충족</strong>해야 한다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 사업시행자 감면 연혁">
        <table style={tbl}>
          <thead>
            <tr><th style={th}>사업 / 구분</th><th style={th}>~2019.12.31.</th><th style={th}>2020.1.15.~</th><th style={th}>2023.3.14.~</th><th style={th}>근거</th></tr>
          </thead>
          <tbody>
            <tr><td style={tdHead}>재개발 — 체비지·보류지</td><td style={td}>면제</td><td style={td}>과세</td><td style={td}>과세</td><td style={td}>§74③</td></tr>
            <tr><td style={tdHead}>재개발 — 대지조성</td><td style={td}>75% 경감</td><td style={td}>50% 경감</td><td style={td}>50% 경감</td><td style={td}>§74③·⑤</td></tr>
            <tr><td style={tdHead}>재개발 — 주택</td><td style={td}>75% 경감</td><td style={td}>50% 경감</td><td style={td}>50% 경감</td><td style={td}>§74③·⑤</td></tr>
            <tr><td style={tdHead}>주거환경개선 — 체비지·보류지</td><td style={td}>—</td><td style={td}>75% 경감</td><td style={td}>75% 경감</td><td style={td}>§74④2호</td></tr>
            <tr><td style={tdHead}>주거환경개선 — 주택</td><td style={td}>75% 경감</td><td style={td}>75% 경감</td><td style={td}>75% 경감</td><td style={td}>§74④1호</td></tr>
          </tbody>
        </table>
        <p className="text-muted" style={{ fontSize: "12px" }}>
          ※ 부칙 §11(법률 제16865호, 2020.1.15.): ’20.1.1. 前 사업시행계획 인가분으로 ’20.1.1. 이후 취득하는 부동산은 종전 §74①에 따른다.
        </p>
      </CalcBox>

      <CalcBox title="■ 체비지·보류지 취득세 과세">
        <table style={tbl}>
          <tbody>
            <tr><td style={tdHead}>납세의무자</td><td style={td}>(체비지) 사업시행자 / (보류지) 환지계획에서 정한 자</td></tr>
            <tr><td style={tdHead}>취득시기</td><td style={td}>환지처분공고일의 다음날 (※ 환지처분 전 매수 시 체비지대장에 등재한 날)</td></tr>
            <tr><td style={tdHead}>세율</td><td style={td}>무상승계취득 3.5%</td></tr>
            <tr><td style={tdHead}>과세표준</td><td style={td}>(2023.3.14. 이후) ㎡당 분양가액 × 초과면적</td></tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 유권해석·질의회신">
        <SubSection title="● 원시취득/유상취득 여부 (지방세특례제도과-1511, 2022.7.13.)">
          <p>· 과세물건이 이미 존재하는 상태에서의 취득은 원시취득에서 제외(2017.1.1. 개정). 체비지는 신축·매립처럼 새로 생성되는 것이 아니므로 <strong>원시취득 아님</strong>.</p>
          <p>· 사업시행자가 법률 규정에 따라 취득할 뿐 대가를 지급한 사정이 없으므로 <strong>유상취득도 아님</strong>.</p>
          <p>· 체비지 면제 규정만 있고 과세표준 조정 규정이 없으므로 대지조성용 보유토지 가액을 과세표준에서 <strong>차감 불가</strong>.</p>
        </SubSection>
        <SubSection title="● 그 밖의 해석">
          <p>· 관리처분계획상 체비지로 등재되어 있어도 <strong>일반인에게 분양되지 않은</strong> 부동산은 감면대상 체비지로 보기 어려움 (지방세특례제도과-1503, 2022.7.12.)</p>
          <p>· 체비지는 환지처분공고일 다음날 사업시행자가 취득하므로, 그 토지에서 건설사업에 착공해도 자기 소유 토지를 다시 취득한 것으로 볼 수 없어 <strong>추가 납세의무 없음</strong> (부동산세제과-2420, 2023.6.30.)</p>
          <p>· 환지처분공고 <strong>전</strong> 체비지를 매입하면 승계취득 (부동산세제과-1163, 2019.12.9.). 환지처분공고일 이전 잔금지급해도 취득시기는 <strong>공고일 다음날</strong> (지방세운영과-2370, 2008.12.2.)</p>
          <p>· 체비지를 담보로 양도담보계약 후 체비지대장 매입자란에 채권자를 등재하면 사실상 취득행위로 <strong>과세대상</strong> (지방세운영과-1662, 2014.5.15.)</p>
        </SubSection>
      </CalcBox>
    </div>
  );
}

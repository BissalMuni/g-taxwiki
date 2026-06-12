"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function IssuesDonationVsContribution() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        정비사업에서 신설 정비기반시설을 <strong>기부채납(국가 등 무상귀속)</strong>하면서 동시에 용도폐지되는
        종전 정비기반시설을 <strong>무상양여</strong>받는 경우, 양자 간 <strong>반대급부 성립 여부</strong>에 따라
        비과세(무상귀속) 또는 감면(과세) 판단이 갈린다.
      </p>

      <CalcBox title="■ 정비사업과 기부채납 — 핵심 쟁점">
        <ul className="list-disc pl-6 space-y-1">
          <li>기부채납(귀속) 신설 정비기반시설과 용도폐지 정비기반시설 무상양여 사이에는 <strong>반대급부가 성립</strong> (부동산세제과-563, 2025.2.26.)</li>
          <li>기부채납 조건으로 취득했으나 무상양여받는 용도폐지 토지가 있어 비과세가 아닌 <strong>감면(과세)</strong>으로 본 사례 (조심2022지1332, 2024.3.11.)</li>
          <li>무상양여 토지 중 일부가 신설도로에 재편입 예정이었고 준공인가로 국가 등에 귀속되어 <strong>비과세</strong>로 본 사례 (조심2021지0835, 2022.7.13.)</li>
          <li>용도폐지 정비기반시설 취득일은 <strong>준공일</strong>, 세율은 <strong>무상취득 세율</strong> 적용</li>
          <li>오피스텔 건축 허가요건으로 학교시설 신축비용을 부담한 경우 오피스텔 신축 취득세 과세표준에 학교시설 공사비 포함 (대법원2024두42079)</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 비과세 범위 산정 (무상귀속비율)">
        <SubSection title="● 원칙 — 개별 필지 특정">
          <p>개별 필지별로 무상양여받고 무상귀속하는 토지의 면적·위치를 특정할 수 있으면 해당 필지 면적을 직접 적용.</p>
        </SubSection>
        <SubSection title="● 예외 — 면적비율 기준">
          <p>개별 필지별 면적 산정이 어려우면 면적비율로 판단.</p>
          <table style={tbl}>
            <tbody>
              <tr><td style={tdHead}>사업시행자 취득 토지 × 무상귀속비율</td><td style={td}>= 비과세</td></tr>
              <tr><td style={tdHead}>무상양여 취득 토지 × 무상귀속비율</td><td style={td}>= 감면(과세)</td></tr>
            </tbody>
          </table>
          <p className="text-muted" style={{ fontSize: "12px" }}>* 무상귀속비율 = 전체 사업부지 면적 중 무상귀속 부지 면적 비율</p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 진행 중인 주요 쟁송 (서울)">
        <table style={tbl}>
          <thead>
            <tr><th style={th}>사업장</th><th style={th}>쟁점</th><th style={th}>진행현황</th><th style={th}>쟁점세액</th><th style={th}>처분청</th></tr>
          </thead>
          <tbody>
            <tr><td style={tdHead}>국제빌딩주변 제4구역 재개발</td><td style={td}>① 무상양여 후 기부채납 신설 정비기반시설 비과세 ② 이주비이자 과표 포함</td><td style={td}>이의·조심 기각, 1심 원고패, 2심</td><td style={td}>5억원</td><td style={td}>용산</td></tr>
            <tr><td style={tdHead}>염리 제2구역 주택재개발</td><td style={td}>신설 정비기반시설 원시취득 미해당·납세의무 없음</td><td style={td}>조심 미결, 1심 원고승, 2심</td><td style={td}>3.1억원</td><td style={td}>마포</td></tr>
            <tr><td style={tdHead}>길음1 재정비촉진구역 주택재개발</td><td style={td}>무상양여 후 기부채납</td><td style={td}>조심 기각, 1심</td><td style={td}>6.4억원</td><td style={td}>성북</td></tr>
            <tr><td style={tdHead}>장위7구역 주택재개발</td><td style={td}>무상양여 후 기부채납</td><td style={td}>조심 기각, 1심</td><td style={td}>4억원</td><td style={td}>성북</td></tr>
            <tr><td style={tdHead}>사당2 주택재건축</td><td style={td}>① 무상양여 후 기부채납 비과세 ② 이주비이자 과표 포함</td><td style={td}>감사원 기각, 1심</td><td style={td}>3.3억원</td><td style={td}>동작</td></tr>
          </tbody>
        </table>
        <Insight>
          무상귀속(비과세)과 무상양여(감면·과세)는 동전의 양면이다. 양자에 <strong>반대급부 성립</strong>을 인정하는
          행안부 해석(부동산세제과-563)에 따라, 실무는 필지별 특정 → 면적비율 순으로 비과세 범위를 산정한다.
        </Insight>
      </CalcBox>
    </div>
  );
}

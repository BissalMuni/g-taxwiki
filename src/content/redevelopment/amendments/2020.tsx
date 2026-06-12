"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function Amendments2020() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        도시개발사업 등에 대한 감면 <strong>재설계</strong>(지특법 §74, 영 §35). 사업별·대상자별로 혼재된 조문을
        사업별로 분리·정비하고, 감면사업 범위를 확대하며, <strong>재개발 1가구 1주택 감면요건을 신설</strong>했다.
      </p>

      <CalcBox title="■ 개정개요">
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>사업별 조문체계 정비</strong>: 도시개발·재개발 환지부동산 §74①, 도시개발 체비지·보류지 §74③, 재개발 §74⑤, 주거환경개선 §74④로 분리</li>
          <li><strong>감면사업 범위 확대</strong>: 도정법 개정(’18.2.7.) 이후 외형상 사업 구분이 곤란 → 舊주택재개발+舊도시환경정비 = 재개발사업, 舊주거환경개선+舊주거환경관리 = 주거환경개선사업</li>
          <li><strong>적용시기 신설</strong>: ’20.1.1. 이전 실시계획·사업시행계획 인가 사업은 종전 규정, 이후 인가 사업은 개정 규정</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 사업별 감면율 조정">
        <table style={tbl}>
          <thead>
            <tr><th style={th}>사업 / 대상</th><th style={th}>개정 전</th><th style={th}>개정 후</th></tr>
          </thead>
          <tbody>
            <tr><td style={tdHead}>도시개발 — 시행자 체비지·보류지</td><td style={td}>100% (§74①)<br />* 최소납부세제(’20~)</td><td style={td}>75% (§74③)</td></tr>
            <tr><td style={tdHead}>주거환경개선 — 대지조성 주택</td><td style={td}>75% (§74③3)</td><td style={td}>75% (§74④1)</td></tr>
            <tr><td style={tdHead}>주거환경개선 — 체비지·보류지</td><td style={td}>—</td><td style={td}>(신설) 75% (§74④2)</td></tr>
            <tr><td style={tdHead}>재개발 — 대지조성 부동산</td><td style={td}>75% (§74③1)</td><td style={td}>50% (§74⑤1)</td></tr>
            <tr><td style={tdHead}>재개발 — 관리처분 취득 주택</td><td style={td}>75% (§74③2)</td><td style={td}>50% (§74⑤2)</td></tr>
            <tr><td style={tdHead}>재개발 소유자 — 60㎡ 이하 주택</td><td style={td}>100% (§74③4)</td><td style={td}>75% (§74⑤3)</td></tr>
            <tr><td style={tdHead}>재개발 소유자 — 60~85㎡ 주택</td><td style={td}>—</td><td style={td}>50% (§74⑤3)</td></tr>
          </tbody>
        </table>
        <Insight>
          기존 일반분양 주택(체비지) 100%가 공공성 높은 임대주택(75%)보다 높던 과세불형평을 해소하여,
          재개발 시행자 취득 주택 감면을 50%로 조정.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 재개발 1가구 1주택(일시적 2주택) 감면요건 신설">
        <SubSection title="● 감면요건 (모두 충족)">
          <p>① (원조합원) 재개발사업 정비구역지정 고시일 현재 부동산 소유자</p>
          <p>② (주택기준) 전용 60㎡ 이하 75% / 60~85㎡ 50% 감면</p>
          <p>③ (1가구 1주택) 취득 시점 1가구 1주택 충족 — 서민주택(법 §33)·신혼부부 생애최초(법 §36의2)와 동일 요건</p>
          <p>④ (일시적 2주택) 재개발 시행자로부터 취득하는 주택 포함 2주택이 되더라도, 신규 취득일부터 <strong>3년 이내 종전주택 처분</strong> 조건으로 감면</p>
          <p className="text-muted" style={{ fontSize: "12px" }}>※ 상속으로 공동지분 보유(주택 부속토지 포함)는 주택 수 미산입. 주거용 오피스텔은 감면대상 주택 아님.</p>
        </SubSection>
        <SubSection title="● 추징 — 일시적 2주택 처분 사례">
          <table style={tbl}>
            <thead>
              <tr><th style={th}>사례 (유예기간 3년 내)</th><th style={th}>추징 여부</th></tr>
            </thead>
            <tbody>
              <tr><td style={td}>① 재개발주택(B)을 처분 → B 미보유</td><td style={td}><strong>추징</strong></td></tr>
              <tr><td style={td}>② B 처분 + 종전주택(A) 처분</td><td style={td}><strong>추징</strong></td></tr>
              <tr><td style={td}>③ 종전주택(A) 처분 후 B 처분 (3년 내 1주택 요건 충족)</td><td style={td}>추징 ×</td></tr>
              <tr><td style={td}>④ A 처분 후 신규주택(C) 추가 취득(B 미처분)</td><td style={td}>추징 × (C 취득은 무관)</td></tr>
            </tbody>
          </table>
          <p className="text-muted" style={{ fontSize: "12px" }}>기산일: 감면주택 취득일 다음 날 / 만료일: 취득일부터 3년 도래일의 전일.</p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 최소납부세제 적용">
        <p>
          소유자가 환지계획 등에 따라 취득하는 부동산의 면제(§74①)는 과표공제 성격으로 최소납부세제 대상이 아니나,
          <strong> 체비지·보류지는 ’20년부터 최소납부세제 적용대상</strong>에 해당.
        </p>
        <p className="text-muted" style={{ fontSize: "12px" }}>
          경과조치(부칙 §17)·적용례(부칙 §5): ’20.1.1. 前 실시계획·사업시행계획 인가분은 종전 규정 적용.
        </p>
      </CalcBox>
    </div>
  );
}

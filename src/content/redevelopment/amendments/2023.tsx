"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function Amendments2023() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재개발·도시개발사업 <strong>취득세 과세체계 전면 개선</strong>. 과세대상(건축물·토지·지목변경)별로 구분하고,
        과세는 「지방세법」(§7④후단·§7⑯ 신설, 영 §18의4)에서, 감면은 「지방세특례제한법」(§74)에서 규정하도록 분리.
        <strong> 적용: 2023. 1. 1.부터</strong>(법률 부칙 §2).
      </p>

      <CalcBox title="■ 1. 과세체계 개선 — 과세대상별 구분">
        <table style={tbl}>
          <thead>
            <tr><th style={th}>구분</th><th style={th}>개정 후 과세</th></tr>
          </thead>
          <tbody>
            <tr><td style={tdHead}>건축물</td><td style={td}>청산금 납부 여부와 무관하게 <strong>원시취득으로 과세</strong>(납세의무자 명확화, 법 §7⑯). 단, 1가구 1주택자는 면적별 감면(60㎡ 이하 75%, 60~85㎡ 50%)</td></tr>
            <tr><td style={tdHead}>토지(부속토지)</td><td style={td}>면적이 증가하지 않으면 과세 제외, <strong>증가한 면적에 한해 승계취득으로 과세</strong>(법 §7⑯)</td></tr>
            <tr><td style={tdHead}>지목변경(도시개발)</td><td style={td}>도시개발사업 지목변경에 대해 <strong>지목변경 취득으로 과세</strong>(환지예정지 기준, 법 §7④후단). 전체 공사비를 환지예정지(조합원) 면적 기준 안분</td></tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 재개발·도시개발 사업 과세체계 변경 (조합원 구분)">
        <table style={tbl}>
          <thead>
            <tr><th style={th}>구분</th><th style={th}>개정 전</th><th style={th}>개정 후</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>원조합원</td>
              <td style={td}>건축물·토지 구분 없이 면제(지특법 §74①), 단 청산금은 과세</td>
              <td style={td}>① 건축물: 신축(원시취득) 과세<br />② 토지: 과세 제외하되 면적 증가분은 승계취득 과세<br />③ 지목변경(도시개발): 환지예정지 기준 과세</td>
            </tr>
            <tr>
              <td style={tdHead}>승계조합원</td>
              <td style={td}>승계취득 가액을 제외하고 과세</td>
              <td style={td}>좌동 (개정 후 과세대상별 구분 적용)</td>
            </tr>
          </tbody>
        </table>
        <Insight>
          핵심: 지법 §7④ 후단(도시개발 환지 지목변경 취득 주체 의제)과 §7⑯(정비사업 건축물=원시취득,
          토지=승계취득, 초과면적 한정) 신설. 지특법 §74①·② 삭제 → 과세는 지법, 감면은 지특법으로 이원화.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 토지 과세표준 산식 (영 §18의4)">
        <SubSection title="● 조합·사업시행자 (체비지·보류지)">
          <table style={tbl}>
            <tbody>
              <tr><td style={{ ...tdHead, width: "20%" }}>가액 =</td><td style={td}>A × [B − (C × B ÷ D)]</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: "12.5px" }}>A: ㎡당 분양가액, B: 토지 면적, C: 사업 진행 중 취득한 토지면적(조합원 신탁토지 제외), D: 사업대상 토지 전체 면적</p>
          <p className="text-muted" style={{ fontSize: "12px" }}>※ 지목변경 수반 시 지목변경 취득가액(E) 공제: 가액 = A × [B − (C × B ÷ D)] − E</p>
        </SubSection>
        <SubSection title="● 조합원 (종전 면적 초과분)">
          <table style={tbl}>
            <tbody>
              <tr><td style={{ ...tdHead, width: "20%" }}>가액 =</td><td style={td}>(A × B) − C</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: "12.5px" }}>A: ㎡당 분양가액, B: 토지 면적(초과분), C: 지목변경에 따른 취득가액(공제)</p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 2. 감면체계 정비 (지특법 §74, 영 §35①②)">
        <p>
          과세표준 산정방식이 지특법 → 지법으로 이관됨에 따라 과표공제 방식을 규정하던 §74①·②, 영 §35①·②을 삭제.
          <strong> 원조합원은 청산금 부담 유무와 관계없이 1가구 1주택 감면 적용</strong>(청산금 미부담자도 과세 전환되는 점 고려).
          그 외 규정은 <strong>’25년말까지 3년 연장</strong>.
        </p>
        <table style={tbl}>
          <thead>
            <tr><th style={th}>조문</th><th style={th}>사업 / 대상</th><th style={th}>감면율</th></tr>
          </thead>
          <tbody>
            <tr><td style={tdHead}>§74③</td><td style={td}>도시개발사업 시행자 — 체비지·보류지</td><td style={td}>취득세 75%</td></tr>
            <tr><td style={tdHead}>§74④1</td><td style={td}>주거환경개선사업 시행자 — 대지조성 목적 취득 주택</td><td style={td}>취득세 75%</td></tr>
            <tr><td style={tdHead}>§74④2</td><td style={td}>주거환경개선사업 — 체비지·보류지</td><td style={td}>취득세 75%</td></tr>
            <tr><td style={tdHead}>§74④3</td><td style={td}>주거환경개선사업 소유자 — 직접개량·85㎡ 이하 주택</td><td style={td}>취득세 100%</td></tr>
            <tr><td style={tdHead}>§74⑤1</td><td style={td}>재개발사업 시행자 — 대지조성 목적 취득 부동산</td><td style={td}>취득세 50%</td></tr>
            <tr><td style={tdHead}>§74⑤2</td><td style={td}>재개발사업 — 관리처분계획에 따라 취득하는 주택</td><td style={td}>취득세 50%</td></tr>
            <tr><td style={tdHead}>§74⑤3가</td><td style={td}>재개발사업 소유자 — 60㎡ 이하 주택(청산금)</td><td style={td}>취득세 75%</td></tr>
            <tr><td style={tdHead}>§74⑤3나</td><td style={td}>재개발사업 소유자 — 60~85㎡ 이하 주택(청산금)</td><td style={td}>취득세 50%</td></tr>
          </tbody>
        </table>
        <p className="text-muted" style={{ fontSize: "12px" }}>
          적용: ’23.1.1. 이후 납세의무 성립분(부칙 §2). 단 ’23.1.1. 前 환지·관리처분계획인가분은 부칙 §11에 따라
          종전 §74①·②로 면제·부과, §74⑤3호로 경감 가능.
        </p>
      </CalcBox>
    </div>
  );
}

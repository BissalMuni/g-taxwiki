"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function Amendments2026() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        도시개발사업 등에 대한 감면 <strong>3년 연장</strong> 및 감면대상 <strong>부동산소유자 범위에 상속인 포함</strong>.
        근거: 「지방세특례제한법」 §74, 법률 제19232호 부칙 §11. <strong>시행: 2026. 1. 1.</strong>(부칙 §1)
      </p>

      <CalcBox title="■ 1. 도시개발사업 등에 대한 감면 연장">
        <table style={tbl}>
          <thead>
            <tr><th style={th}>구분</th><th style={th}>개정 전</th><th style={th}>개정 후</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>주거환경개선사업</td>
              <td style={td}>· 시행자: 대지조성용 주택·체비지·보류지 취득세 75% 감면<br />· 부동산소유자: 전용 85㎡ 이하 주택 취득세 면제</td>
              <td style={td}>현행과 같음<br /><strong>※ 부동산소유자 범위에 상속인 포함</strong></td>
            </tr>
            <tr>
              <td style={tdHead}>재개발사업</td>
              <td style={td}>· 시행자: 대지조성용 부동산·관리처분 취득 주택 50% 감면<br />· 부동산소유자: 60㎡ 이하 75%, 60~85㎡ 50% 감면(1가구 1주택 限)</td>
              <td style={td}>현행과 같음<br /><strong>※ 부동산소유자 범위에 상속인 포함</strong></td>
            </tr>
            <tr>
              <td style={tdHead}>일몰기한</td>
              <td style={td}>2025. 12. 31.</td>
              <td style={td}><strong>2028. 12. 31.</strong> (3년 연장)</td>
            </tr>
          </tbody>
        </table>
        <Insight>
          「지방세특례제한법」(법률 제19232호, 2023.3.14.) 부칙 §11: 2023.1.1. 이전 환지계획 인가
          또는 관리처분계획 인가를 받은 도시개발·재개발사업 부동산 소유자 취득분도 종전 규정에 따라
          <strong> 2028.12.31.까지 감면 연장</strong>.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 개정조문 요지 (지특법 §74)">
        <ul className="list-disc pl-6 space-y-1">
          <li>§74③ 도시개발사업 체비지·보류지 75% 경감: 2025.12.31. → <strong>2028.12.31.</strong></li>
          <li>§74④ 주거환경개선사업 주택 감면: 2025.12.31. → <strong>2028.12.31.</strong>, §74④3호 소유자에 <strong>“(상속인을 포함한다)”</strong> 추가</li>
          <li>§74⑤ 재개발사업 부동산 경감: 2025.12.31. → <strong>2028.12.31.</strong>, §74⑤3호 소유자에 <strong>“(상속인을 포함한다)”</strong> 추가</li>
          <li>부칙 §11①·② 경과조치 일몰: 2025.12.31. → <strong>2028.12.31.</strong></li>
        </ul>
      </CalcBox>
    </div>
  );
}

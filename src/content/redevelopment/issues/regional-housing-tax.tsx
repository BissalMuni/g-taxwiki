"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function IssuesRegionalHousingTax() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        지역주택조합은 「주택법」상 조합으로, 정비구역 내 토지소유를 요건으로 하지 않고 무주택자 등이 조합을 구성해
        분담금으로 토지를 확보·건설하는 구조이다. 재개발·재건축과 과세체계가 다르다.
      </p>

      <CalcBox title="■ 지역주택조합 vs 도시정비조합">
        <table style={tbl}>
          <thead>
            <tr><th style={th}>구분</th><th style={th}>지역주택조합</th><th style={th}>도시정비조합(재개발·재건축)</th></tr>
          </thead>
          <tbody>
            <tr><td style={tdHead}>법적근거</td><td style={td}>주택법</td><td style={td}>도시 및 주거환경정비법</td></tr>
            <tr><td style={tdHead}>목적</td><td style={td}>주택 마련 등 주택공급 촉진</td><td style={td}>주거환경·도시환경 개선</td></tr>
            <tr><td style={tdHead}>조합원 자격</td><td style={td}>6개월 이상 거주 무주택자 또는 85㎡ 이하 주택소유자</td><td style={td}>정비구역 내 토지·건축물 소유자</td></tr>
            <tr><td style={tdHead}>토지매입</td><td style={td}>조합원이 납부하는 분담금</td><td style={td}>조합원이 소유한 토지 등</td></tr>
            <tr><td style={tdHead}>관리처분계획</td><td style={td}>선택</td><td style={td}>필수</td></tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 취득세 과세 절차">
        <SubSection title="● 조합설립~사업계획인가 (토지 취득)">
          <p>① 조합원이 아닌 <strong>제3자로부터 토지 매입</strong> → 일반 유상거래와 동일하게 납세의무 성립</p>
          <p>② 조합원 소유 토지를 <strong>신탁으로 취득</strong> → 조합원용 토지는 조합원이 취득한 것으로 보아 과세 제외, <strong>비조합원용 토지만 조합이 납세의무자</strong></p>
          <p>③ 사업부지 <strong>지목변경</strong> → 형질변경으로 가액이 증가한 부분에 대해 취득으로 보아 납세의무 성립</p>
        </SubSection>
        <SubSection title="● 주택건설~분양 (건축물 취득)">
          <p>① 건축물 완공 → <strong>원시취득</strong> (조합원용은 조합원이, 비조합원용은 조합이 납세의무자)</p>
          <p>② 조합원이 완공 주택 분양 → 조합원이 건축자금을 부담하여 <strong>원시취득</strong>한 것으로 봄</p>
          <p>③ 비조합원이 일반분양으로 취득 → 조합이 원시취득한 건축물을 분양대금 지급하고 취득하는 <strong>유상거래</strong></p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 업무 요령 (조합원 지위 변동)">
        <ul className="list-disc pl-6 space-y-1">
          <li>조합원 지위 승계 → “입주자의 지위”는 단순 권리가 아니라 <strong>토지지분의 승계취득</strong>으로 보아 유상·증여·상속으로 구분해 일반 취득세 규정 적용</li>
          <li>결원 발생으로 신규 조합원 모집 → 조합에 <strong>금전만 납입</strong>하는 구조이므로 부동산 거래 아님, 취득세 납세의무 미성립</li>
          <li>지역주택조합 조합원 지위는 「지방세법」상 주택 수에 포함되는 <strong>조합원입주권에 해당하지 않아 주택 수 미포함</strong></li>
          <li>분양권 포기로 조합원 지위 상실 → 조합원 납세의무 미성립, 처분권이 조합에 귀속되어 <strong>조합이 원시취득</strong></li>
          <li>분양계약 후 파기 → 취득시기 기준으로 결정. 취득시기 前 조합원 귀책 파기는 조합원이 원시취득 납세의무, 취득시기 後 취소는 이미 성립한 원시취득(소유권 조합원 귀속)</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 유권해석·질의회신">
        <p>
          · 분양계약 미체결 조합원은 현금청산대상자가 되며 분양계약체결기간 종료일 다음날 조합원 지위를 상실,
          그 시점이 임시사용승인일 이전이면 건축물 완공으로 쟁점아파트를 취득한 것으로 볼 수 없음 (조심2014지0324)
        </p>
        <Insight>
          지역주택조합 조합원의 입주자 지위는 사업주체와의 공급계약이 아닌 입주자 지위에 불과하고, 향후 유상취득이
          아닌 <strong>원시취득 구조</strong>이므로 조합원입주권·주택분양권에 해당하지 않으며 다주택 중과 시 주택 수에도
          포함되지 않는다 (부동산세제과-308, 2022.1.26.).
        </Insight>
      </CalcBox>
    </div>
  );
}

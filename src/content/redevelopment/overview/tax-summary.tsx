"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "middle" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", textAlign: "center" as const };
const rate = { color: "#1890ff", fontWeight: "bold" as const };

export default function OverviewTaxSummary() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        정비(개발)사업의 지방세 과세체계를 사업유형·과세대상별로 요약한다. 동일 사업이라도
        <strong> 조합원 / 당초 토지 초과지분 / 조합(시행자) / 체비지·보류지</strong>에 따라
        취득원인·세율·취득시기·과세표준이 달라진다.
      </p>

      <CalcBox title="■ 정비(개발)사업 지방세 과세체계 요약">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>구분</th>
              <th style={th}>과세대상</th>
              <th style={th}>취득원인 (세율)</th>
              <th style={th}>취득시기</th>
              <th style={th}>과세표준</th>
            </tr>
          </thead>
          <tbody>
            {/* 재건축사업 */}
            <tr>
              <td style={tdHead} rowSpan={2}>재건축<br />사업</td>
              <td style={td}>조합원 — 건축물 신축</td>
              <td style={td}>원시취득 <span style={rate}>2.8%</span></td>
              <td style={td}>준공인가일 등</td>
              <td style={td}>전체 공사비 등 신축비용을 조합원 취득면적별로 안분</td>
            </tr>
            <tr>
              <td style={td}>당초 토지 초과지분 <span className="text-muted">(※ 건축물 부속토지)</span></td>
              <td style={td}>유상승계취득 <span style={rate}>4%</span></td>
              <td style={td}>잔금지급일</td>
              <td style={td}>과세면적 × 분양가액*/㎡</td>
            </tr>
            <tr>
              <td style={tdHead} rowSpan={2}>조합<br />(시행자)</td>
              <td style={td}>체비지·보류지 — 건축물(신축)</td>
              <td style={td}>원시취득 <span style={rate}>2.8%</span></td>
              <td style={td}>준공인가일 등</td>
              <td style={td}>전체 공사비 등 신축비용을 조합원 취득면적별로 안분</td>
            </tr>
            <tr>
              <td style={td}>건축물 부속토지</td>
              <td style={td}>무상승계취득 <span style={rate}>3.5%</span></td>
              <td style={td}>이전고시일 다음날</td>
              <td style={td}>과세면적 × 분양가액/㎡</td>
            </tr>

            {/* 재개발사업 */}
            <tr>
              <td style={tdHead} rowSpan={2}>재개발<br />사업</td>
              <td style={td}>조합원 — 건축물 신축</td>
              <td style={td}>원시취득 <span style={rate}>2.8%</span></td>
              <td style={td}>준공인가일 등</td>
              <td style={td}>전체 공사비 등 신축비용을 조합원 취득면적별로 안분</td>
            </tr>
            <tr>
              <td style={td}>당초 토지 초과지분 <span className="text-muted">(※ 건축물 부속토지)</span></td>
              <td style={td}>유상승계취득 <span style={rate}>4%</span></td>
              <td style={td}>잔금지급일</td>
              <td style={td}>과세면적 × 분양가액/㎡</td>
            </tr>
            <tr>
              <td style={tdHead} rowSpan={2}>조합<br />(시행자)</td>
              <td style={td}>체비지·보류지 — 건축물(신축)</td>
              <td style={td}>원시취득 <span style={rate}>2.8%</span></td>
              <td style={td}>준공인가일 등</td>
              <td style={td}>전체 공사비 등 신축비용을 조합원 취득면적별로 안분</td>
            </tr>
            <tr>
              <td style={td}>건축물 부속토지</td>
              <td style={td}>무상승계취득 <span style={rate}>3.5%</span></td>
              <td style={td}>이전고시일 다음날</td>
              <td style={td}>과세면적 × 분양가액/㎡</td>
            </tr>

            {/* 도시개발사업 */}
            <tr>
              <td style={tdHead} rowSpan={2}>도시<br />개발<br />사업</td>
              <td style={td}>조합원 — 지목변경</td>
              <td style={td}>지목변경 <span style={rate}>2%</span></td>
              <td style={td}>조성공사 준공일</td>
              <td style={td}>전체 공사비 등 지목변경비용을 조합원 취득(환지)면적별로 안분</td>
            </tr>
            <tr>
              <td style={td}>당초 토지 초과지분</td>
              <td style={td}>유상승계취득 <span style={rate}>4%</span></td>
              <td style={td}>잔금지급일</td>
              <td style={td}>과세면적 × 분양가액/㎡</td>
            </tr>
            <tr>
              <td style={tdHead} rowSpan={2}>조합<br />(시행자)</td>
              <td style={td}>지목변경</td>
              <td style={td}>지목변경 <span style={rate}>2%</span></td>
              <td style={td}>조성공사 준공일</td>
              <td style={td}>전체 공사비 등 지목변경비용을 조합원 취득면적별로 안분</td>
            </tr>
            <tr>
              <td style={td}>체비지·보류지 <span className="text-muted">(※ 일반분양분 토지)</span></td>
              <td style={td}>무상승계취득 <span style={rate}>3.5%</span></td>
              <td style={td}>이전고시일 다음날</td>
              <td style={td}>과세면적 × 분양가액/㎡ <span className="text-muted">(※ 지목변경 취득가액 공제)</span></td>
            </tr>

            {/* 지역주택조합 */}
            <tr>
              <td style={tdHead}>지역<br />주택<br />조합</td>
              <td style={td}>조합원·조합 — 건축물(신축)</td>
              <td style={td}>원시취득 <span style={rate}>2.8%</span></td>
              <td style={td}>준공일 등</td>
              <td style={td}>전체 공사비</td>
            </tr>
          </tbody>
        </table>
        <p className="text-muted" style={{ fontSize: "12px" }}>
          * ’25년 「지방세법 시행령」 부칙 특례 신설로 공시지가 적용 확인 대상
        </p>
      </CalcBox>

      <CalcBox title="■ 비조합원용 토지 과세체계 개선">
        <ul className="list-disc pl-6 space-y-1">
          <li>(대법원) 비조합원용 토지 — 제3자 등 매입 토지를 우선 차감</li>
          <li>(행안부) 비조합원용 토지를 신탁토지와 매입토지 비율로 안분
            <div className="text-muted" style={{ fontSize: "12px" }}>비조합원용 토지 × 신탁토지 ÷ (신탁토지 + 매입토지)</div>
          </li>
          <li>’22. 1. 1. 감사원 지적에 따라 산정기준 마련 (행안부 운영기준 명확화, 영 §11조의2)</li>
          <li>’23. 3. 14. 신탁받은 토지 면적 비율을 곱하여 산정하던 것을 <strong>공제방식</strong>(종전과 실질 동일)으로 규정
            <div className="text-muted" style={{ fontSize: "12px" }}>※ 재개발 체비지(일반분양분)도 같은 방식으로 산정</div>
          </li>
        </ul>

        <SubSection title="● 주택조합·재건축조합의 비조합원용 토지 면적 (지법 §7⑧, ’23.1.1.부터 적용)">
          <table style={tbl}>
            <tbody>
              <tr>
                <td style={{ ...tdHead, width: "30%" }}>비조합원용 토지 취득면적 =</td>
                <td style={{ ...td, textAlign: "center" as const }}>
                  일반분양분 토지면적 ×
                  <div style={{ borderBottom: "1px solid #555", paddingBottom: "4px", marginTop: "4px" }}>
                    주택조합 등이 사업추진 중 조합원으로부터 신탁받은 토지면적
                  </div>
                  <div style={{ paddingTop: "4px" }}>전체토지 면적</div>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-muted" style={{ fontSize: "12px" }}>예) 전체토지 100평 (당초 조합원 80평 + 조합 추가매입 20평)</p>
        </SubSection>

        <SubSection title="● 재개발조합 등 비조합원용 토지(체비지·보류지) 면적 (지법 §10조의5③3호)">
          <table style={tbl}>
            <tbody>
              <tr>
                <td style={{ ...tdHead, width: "22%" }}>가액 =</td>
                <td style={td}>A × [B − (C × B ÷ D)]</td>
              </tr>
            </tbody>
          </table>
          <ul className="list-disc pl-6 space-y-0.5 mt-2" style={{ fontSize: "12.5px" }}>
            <li>A : 해당 토지의 제곱미터당 분양가액</li>
            <li>B : 해당 토지 면적</li>
            <li>C : 사업시행자 또는 주택조합이 사업 진행 중 취득한 토지(조합원 신탁토지 제외)</li>
            <li>D : 해당 정비사업 대상 토지의 전체 면적</li>
          </ul>
          <p className="text-muted" style={{ fontSize: "12px" }}>예) 전체토지 100평 (당초 조합원 80평 + 조합 추가매입 20평)</p>
        </SubSection>

        <Insight>
          비조합원용 토지 산정은 <strong>4장 주요 현안 · 비조합원용 토지 취득시기</strong>와
          연결되는 핵심 쟁점이다.
        </Insight>
      </CalcBox>
    </div>
  );
}

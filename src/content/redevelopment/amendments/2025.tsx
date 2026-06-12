"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function Amendments2025() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        정비사업 토지분 취득세 <strong>과세표준 경과조치(부칙) 특례 신설</strong>.
        근거: 「지방세법 시행령」(대통령령 제33325호) <strong>부칙 §3조의2 신설</strong>.
      </p>

      <CalcBox title="■ 개정개요 — 부칙 특례 신설">
        <p>
          ’23.3.14. 과세표준이 <strong>공시지가 → 분양가액</strong>으로 개정된 이후, 그 시행일
          <strong> 前에 관리처분계획인가 등을 받은 정비사업</strong>이 ’23.3.14. 이후 취득하는 토지에 대해
          <strong> 공시지가와 분양가액 중 적은 가액</strong>을 과세표준으로 적용하는 특례를 신설(소급).
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>대상</strong>: 정비사업조합(재건축·재개발·도시개발사업조합, 소규모주택정비사업조합, 주택조합)이 취득하는 <strong>비조합원용 부동산·체비지·보류지</strong> 및 <strong>재건축조합원의 토지 지분 증가분</strong></li>
          <li><strong>요건</strong>: ’23.3.14. 前 관리처분계획인가 → ’23.3.14. 이후 취득하는 토지</li>
          <li><strong>효과</strong>: ‘분양가액’과 ‘공시지가’ 중 적은 가액 적용</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 과세표준 적용 (재건축 예시)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>관리처분 시점</th>
              <th style={th}>조합원(잔금지급일)<br />개정 전 → 후</th>
              <th style={th}>조합(소유권이전고시일)<br />개정 전 → 후</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>① 영 시행(’23.3.14.) 前 관리처분계획인가</td>
              <td style={td}>분양가액 → <strong>min(공시지가, 분양가액)</strong></td>
              <td style={td}>분양가액 → <strong>min(공시지가, 분양가액)</strong></td>
            </tr>
            <tr>
              <td style={tdHead}>② 영 시행 이후 관리처분계획인가</td>
              <td style={td}>분양가액 → 분양가액(동일)</td>
              <td style={td}>분양가액 → 분양가액(동일)</td>
            </tr>
          </tbody>
        </table>
        <p className="text-muted" style={{ fontSize: "12px" }}>
          * 재개발·도시개발사업 조합원은 지특법(법률 제19232호) 부칙 §11 경과규정 적용. 다만 2023.1.1.~2023.3.13.
          환지계획·관리처분계획인가분으로 ’23.3.14. 이후 취득하는 경우에만 이 특례 적용.
        </p>
      </CalcBox>

      <CalcBox title="■ 문답자료">
        <SubSection title="(1) 경과조치가 아닌 특례로 규정한 이유는?">
          <p>개정 전에는 재건축 등 정비사업 조합·조합원 과세 관련 별도 과세표준 산식이 없었으므로, 경과조치가 아닌 특례로 규정.</p>
        </SubSection>
        <SubSection title="(2) 재개발·도시개발사업 조합원만 규정이 다른 이유는?">
          <p>해당 조합원은 지특법 부칙 §11 경과규정에 따라 ’23.1.1. 前 인가분은 종전 규정 적용 가능(이미 경과조치 있음). 따라서 2023.1.1.~3.13. 사이 인가받아 ’23.3.14. 이후 취득하는 경우에만 별도 특례가 필요.</p>
        </SubSection>
        <SubSection title="(3) 승계조합원도 적용 가능한지?">
          <p>2023.1.1.~3.13. 인가 정비사업으로 ’23.3.14. 이후 취득하면서 승계조합원의 토지지분 증가분이 발생하는 경우에도 ‘공시지가’와 ‘분양가액’ 중 적은 가액 적용 가능.</p>
        </SubSection>
        <SubSection title="(4) 재건축 정비사업 과세표준 특례 적용 예시는?">
          <p>예) 관리처분계획인가 2017.11.17., 준공·입주 2022.8월, 소유권이전고시 2023.5월. 재건축조합이 ’23.5월 일반분양분 토지를 분양가액으로 신고·납부 완료 → ‘분양가액’과 ‘공시지가’ 중 적은 금액으로 <strong>5년 내 경정청구 가능</strong>.</p>
        </SubSection>
      </CalcBox>

      <Insight>
        이 특례는 <strong>4장 주요 현안 · 정비사업 과세표준</strong> 및 <strong>조합원 토지지분 증가 과세</strong>와 직접 연결된다.
      </Insight>
    </div>
  );
}

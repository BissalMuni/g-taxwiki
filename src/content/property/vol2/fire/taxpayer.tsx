"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };

export default function Taxpayer() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        소방분 지역자원시설세의 납세의무자는 과세대상인 <strong>건축물 또는 선박의 소유자</strong>다(지법 §143).
        재산세 납세의무자와 같은 기준이다.
      </p>

      <CalcBox title="■ 납세의무자 (지법 §143)">
        <p>과세기준일(<strong>매년 6월 1일</strong>) 현재 과세대상 건축물·선박을 사실상 소유하고 있는 자가 납세의무를 진다.</p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "26%" }}>대상</th>
              <th style={th}>납세의무자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>건축물</td>
              <td style={td}>건축물의 <strong>소유자</strong></td>
            </tr>
            <tr>
              <td style={tdHead}>선박</td>
              <td style={td}>선박의 <strong>소유자</strong></td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <a href="https://www.law.go.kr/법령/지방세법/제143조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 §143</a>
        </p>
      </CalcBox>

      <CalcBox title="■ 재산세 납세의무자와의 관계">
        <Insight>
          소방분 납세의무자는 사실상 <strong>재산세 건축물·선박분 납세의무자와 동일</strong>하다. 소유자가 분명하지 않거나
          공부상 소유자와 사실상 소유자가 다른 경우 등은 재산세 납세의무자 규정(지법 §107)의 판단을 그대로 따른다.
        </Insight>
        <p>
          따라서 과세기준일 현재의 사실상 소유자, 공유 시 지분권자, 신탁재산의 위탁자 등 재산세에서 정한 납세의무자
          판정 원칙이 소방분에도 적용된다.
        </p>
      </CalcBox>
    </div>
  );
}

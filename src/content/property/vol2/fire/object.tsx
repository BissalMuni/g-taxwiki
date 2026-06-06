"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };
const red = { color: "#cf1322", fontWeight: "bold" as const };

export default function ObjectScope() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        소방분 지역자원시설세의 과세대상은 <strong>소방시설로 이익을 받는 건축물과 선박</strong>이다(지법 §142①3호).
        토지는 과세대상이 아니다.
      </p>

      <CalcBox title="■ 과세대상 (지법 §142①3호)">
        <p>
          소방분은 <strong>소방시설로 인하여 이익을 받는 자의 건축물</strong>(주택의 건축물 부분 포함)
          <strong> 및 선박</strong>을 과세대상으로 한다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "20%" }}>대상</th>
              <th style={th}>범위</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>건축물</td>
              <td style={td}>
                재산세 과세대상 건축물. <strong>주택의 건축물 부분도 포함</strong>된다(토지 부분은 제외).
              </td>
            </tr>
            <tr>
              <td style={tdHead}>선박</td>
              <td style={td}>재산세 과세대상 선박</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, ...red }}>토지</td>
              <td style={td}><span style={red}>과세대상 아님</span> — 소방분은 토지에 부과하지 않는다.</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <a href="https://www.law.go.kr/법령/지방세법/제142조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 §142①3호</a>
        </p>
      </CalcBox>

      <CalcBox title="■ 주택의 처리">
        <Insight>
          주택은 재산세에서는 <strong>토지+건축물을 통합</strong>해 과세하지만, 소방분에서는
          <strong> 건축물 부분만</strong> 과세대상이 된다. 따라서 주택분 소방 지역자원시설세는 주택 시가표준액 중
          건물 부분에 상당하는 가액을 기준으로 산정한다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 「소방시설로 이익을 받는 자」의 범위">
        <p>
          소방시설 설치 지역에 있는 건축물·선박의 소유자는 원칙적으로 소방시설의 이익을 받는 것으로 본다.
          실무상 거의 모든 과세대상 건축물·선박이 포함되며, <strong>비과세 규정(§145)에 해당하지 않는 한</strong>
          과세된다.
        </p>
      </CalcBox>
    </div>
  );
}

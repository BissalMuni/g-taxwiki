"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };

/** 과세대상별 납기 (책 p137) */
const periods: [string, string][] = [
  ["토지", "매년 9월 16일 ~ 9월 30일"],
  ["건축물·선박·항공기", "매년 7월 16일 ~ 7월 31일"],
  ["주택", "산출세액의 1/2은 7월 16일~7월 31일, 나머지 1/2은 9월 16일~9월 30일"],
];

export default function BaseDate() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세 과세기준일은 매년 6월 1일이며, 과세대상별로 납기가 다르다. 주택은 연 2회로 분할하여 부과한다.
      </p>

      <CalcBox title="■ 과세기준일">
        <p>
          매년 <strong>6월 1일</strong>. 이 날 현재 재산을 사실상 소유한 자가 납세의무를 진다.
        </p>
      </CalcBox>

      <CalcBox title="■ 납기">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "26%" }}>과세대상</th>
              <th style={th}>납기</th>
            </tr>
          </thead>
          <tbody>
            {periods.map((p) => (
              <tr key={p[0]}>
                <td style={{ ...td, fontWeight: "bold" }}>{p[0]}</td>
                <td style={td}>{p[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul style={{ margin: "10px 0 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
          <li>
            주택분에 한해 산출세액이 <strong>20만원 이하</strong>인 경우, 조례로 정하는 바에 따라 납기를
            7월 16일~7월 31일로 하여 <strong>한꺼번에 부과·징수</strong>할 수 있다.
          </li>
          <li>
            과세대상 누락·위법·착오 등으로 이미 부과한 세액을 변경하거나 부과할 사유가 발생한 때에는
            <strong> 수시로 부과·징수</strong>할 수 있다.
          </li>
        </ul>
      </CalcBox>

      <Insight>
        <strong>과세기준일 현재 소유자</strong>(운영예규 법106-1) — 과세기준일 현재 과세대상물건의 소유권이 양도·양수된
        때에는 <strong>양수인</strong>을 당해연도의 납세의무자로 본다(법 §106·§114).
      </Insight>
    </div>
  );
}

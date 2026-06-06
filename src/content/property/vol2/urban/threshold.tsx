"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 재산세 각종 기준금액과 도시지역분 포함 여부 */
const rows: [string, string, string][] = [
  ["소액 징수면제", "2천원 미만", "포함 — 본세 + 도시지역분 합산액으로 판단"],
  ["분할납부", "250만원 초과", "포함 — 도시지역분 포함 재산세 납부세액 기준"],
  ["물납", "1천만원 초과", "포함 — 도시지역분 포함 재산세 납부세액 기준"],
  ["세부담 상한", "직전연도 세액 대비", "포함 — 본세 + 도시지역분 합산 산출세액 기준"],
];

export default function Threshold() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        도시지역분은 재산세의 일부이므로, 재산세에 적용되는 각종 「기준금액」(소액 징수면제·분할납부·물납·세부담 상한
        등)을 판단할 때 <strong>도시지역분을 포함</strong>하여 본세와 합산한 금액으로 본다.
      </p>

      <CalcBox title="■ 기준금액별 도시지역분 포함 여부">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "26%" }}>제도</th>
              <th style={{ ...th, width: "22%" }}>기준금액</th>
              <th style={th}>도시지역분 반영</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <td style={{ ...td, fontWeight: "bold" }}>{r[0]}</td>
                <td style={tdc}>{r[1]}</td>
                <td style={td}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 기준금액 수치는 지법 규정에 따르며, 본세와 도시지역분은 동일한 재산세로서 합산하여 한도를 판단한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 병기세목과의 구별">
        <p>
          같은 고지서에 표시되더라도 <strong>지역자원시설세(소방분)·지방교육세</strong>는 별개 세목이므로, 위 기준금액
          판단에서 재산세(도시지역분 포함)와 합산하지 않는다. 각 세목별로 따로 한도를 본다.
        </p>
        <Insight>
          판단 원칙: <strong>「재산세 = 본세 + 도시지역분」을 한 덩어리</strong>로 보아 기준금액을 적용한다. 병기세목은
          별도. 이 구분을 놓치면 분할납부·물납 가능 여부를 잘못 판단할 수 있다.
        </Insight>
      </CalcBox>
    </div>
  );
}

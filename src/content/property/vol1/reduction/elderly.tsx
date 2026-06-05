"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 노인복지시설 감면 (지특법 §20) */
const rows: [string, string, string][] = [
  ["무료·실비 노인복지시설", "면제 (100%)", "양로시설·노인공동생활가정·재가노인복지시설 등 무료 또는 실비 운영"],
  ["유료 노인복지시설", "25% 경감", "유료 양로시설·노인복지주택 등 입소비용을 받는 시설"],
];

export default function Elderly() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        「노인복지법」에 따른 노인복지시설을 설치·운영하기 위하여 취득하거나 직접 사용하는 부동산에 대해서는 운영
        형태(무료·실비/유료)에 따라 재산세를 감면한다(지특법 §20).
      </p>

      <CalcBox title="■ 감면 내용 (지특법 §20)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "30%" }}>운영 형태</th>
              <th style={{ ...th, width: "20%" }}>재산세 감면율</th>
              <th style={th}>해당 시설(예시)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <td style={{ ...td, fontWeight: "bold" }}>{r[0]}</td>
                <td style={{ ...tdc, color: "#cf1322", fontWeight: "bold" }}>{r[1]}</td>
                <td style={td}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 취득세도 동일한 형태별 감면(무료·실비 면제 / 유료 25% 경감)이 적용된다. 감면율·적용기한은 해당 연도
          지특법을 확인한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 추징 및 제외">
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li>정당한 사유 없이 취득일부터 <strong>1년 내 미사용</strong>, 또는 직접 사용기간 <strong>2년 미만</strong> 매각·전용 시 추징</li>
          <li>수익사업에 사용하거나 해당 목적에 직접 사용하지 않는 부분은 감면 제외</li>
        </ul>
        <Insight>
          핵심 구분은 <strong>무료·실비 vs 유료</strong>다. 입소자에게서 실비를 초과하는 비용을 받으면 유료시설로 보아
          경감(25%)에 그치고, 무료·실비 운영이면 면제(100%)된다.
        </Insight>
      </CalcBox>
    </div>
  );
}

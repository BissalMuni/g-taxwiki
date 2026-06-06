"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 노인복지시설 감면 (지특법 §20) */
const rows: [string, string, string][] = [
  ["경로당", "면제 (100%)", "노인의 여가선용 목적 (노인복지법 §36①2호) — 재산세·도시지역분·지역자원시설세 면제"],
  ["제1호 시설", "50% 경감", "노인의료복지시설·재가노인복지시설 중 입소자가 노인장기요양·기초생활 수급자이거나 국가·지자체가 입소비용을 연평균 80% 이상 부담하는 시설"],
  ["제2호 시설 (그 밖의 노인복지시설)", "25% 경감", "제1호 외의 노인복지시설"],
];

export default function Elderly() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        「노인복지법」에 따른 노인복지시설을 설치·운영하기 위하여 직접 사용하는 부동산에 대해서는 시설 종류에 따라
        재산세를 감면한다(지특법 §20). 경로당은 면제, 그 밖의 노인복지시설은 제1호 요건 충족 여부에 따라 50% 또는 25% 경감한다.
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
          ※ 감면 기간은 2026.12.31.까지이며, 최소납부세제는 해당 없음. 적용기한·세부 요건은 해당 연도 지특법을 확인한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 추징 및 제외">
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li>정당한 사유 없이 취득일부터 <strong>1년 내 미사용</strong>, 또는 직접 사용기간 <strong>2년 미만</strong> 매각·전용 시 추징</li>
          <li>수익사업에 사용하거나 해당 목적에 직접 사용하지 않는 부분은 감면 제외</li>
        </ul>
        <Insight>
          감면율은 <strong>시설 종류</strong>로 갈린다 — 경로당은 면제(100%), 제1호 요건(기초생활 수급자 입소 또는
          국가·지자체가 입소비용 80% 이상 부담) 시설은 50% 경감, 그 밖의 노인복지시설(제2호)은 25% 경감이다.
        </Insight>
      </CalcBox>
    </div>
  );
}

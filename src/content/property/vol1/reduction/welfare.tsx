"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 사회복지시설 재산세 감면 (지특법 §22③) — 대상 / 재산세 감면율 / 비고 */
const rows: [string, string, string][] = [
  [
    "직접 사용 부동산 (사회복지법인·한센인 권익증진 법인 등 §22③1호)",
    "면제 (100%)",
    "과세기준일 현재 사회복지사업에 직접 사용하는 부동산 — 재산세·도시지역분·지역자원시설세 면제",
  ],
  [
    "사회복지시설 설치·운영 법인 (§22③2호) — 유료시설",
    "25% 경감",
    "대통령령으로 정하는 법인·단체가 운영하는 유료 사회복지시설",
  ],
  [
    "위 2호 중 무료시설 (단서)",
    "50% 경감",
    "입소자·이용자가 입소·이용 비용을 부담하지 아니하는 무료 사회복지시설",
  ],
];

export default function Welfare() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        「사회복지사업법」에 따른 사회복지사업을 목적으로 하는 법인·단체가 그 사업에 <strong>직접 사용</strong>하는 부동산은
        재산세를 <strong>면제</strong>하고, 사회복지시설을 설치·운영하는 법인(2호)은 유료·무료에 따라{" "}
        <strong>25%·50%를 경감</strong>한다(지특법 §22③).
      </p>

      <CalcBox title="■ 감면 내용 (지특법 §22③)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>대상</th>
              <th style={{ ...th, width: "18%" }}>재산세 감면율</th>
              <th style={{ ...th, width: "34%" }}>비고</th>
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
          ※ 감면 기간은 2028.12.31.까지, 최소납부세제 해당. '23.1.1. 이후 납세의무가 성립하는 분부터 적용(부칙 §2).
          위 감면율은 재산세 본세·도시지역분·지역자원시설세에 공통 적용된다.
        </p>
      </CalcBox>

      <CalcBox title="■ 대상 주체 및 제외">
        <SubSection title="● 적용 대상 주체">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>「사회복지사업법」에 따른 사회복지법인 (또는 한센인 권익·복지 증진 목적 법인·단체)</li>
            <li>사회복지시설을 설치·운영하는 법인·단체 중 대통령령으로 정하는 자</li>
          </ul>
        </SubSection>
        <SubSection title="● 면제 제외 (단서)">
          <p>
            직접 사용 부동산이라도 <strong>수익사업에 사용하는 부분</strong>, <strong>유료로 사용되는 경우</strong>,
            해당 목적에 <strong>직접 사용하지 아니하는 일부 재산</strong>은 면제하지 아니한다(지특법 §22③ 본문 단서).
          </p>
        </SubSection>
        <SubSection title="● 추징">
          <p>
            정당한 사유 없이 취득일부터 <strong>1년 내 미사용</strong>, 또는 직접 사용기간 <strong>2년 미만</strong>{" "}
            매각·전용 시 감면세액을 추징한다(지특법 §178 일반 규정).
          </p>
        </SubSection>
        <Insight>
          §22는 <strong>면제(직접사용)·50%(무료시설)·25%(유료시설)</strong>의 3단 구조다. 어린이집·노인복지시설
          감면(§19·§20)이 시설 유형별 특례라면, §22는 사회복지법인 등 <strong>주체</strong> 기준으로 폭넓게 감면한다.
        </Insight>
      </CalcBox>
    </div>
  );
}

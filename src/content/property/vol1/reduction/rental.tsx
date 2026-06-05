"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 임대주택 전용면적별 재산세 감면 (지특법 §31) */
const rows: [string, string][] = [
  ["전용 60㎡ 이하", "면제 (100%)"],
  ["전용 60㎡ 초과 85㎡ 이하", "50% 경감"],
];

export default function Rental() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        임대사업자(「공공주택 특별법」상 공공주택사업자, 「민간임대주택법」상 임대사업자 등)가 임대 목적으로 보유하는
        공동주택·오피스텔에 대해서는 전용면적에 따라 재산세를 감면한다(지특법 §31). 서민 주거안정 지원이 목적이다.
      </p>

      <CalcBox title="■ 감면 내용 (지특법 §31)">
        <p>
          과세기준일 현재 <strong>2세대 이상</strong>을 임대 목적에 직접 사용하는 공동주택을 기준으로, 전용면적별로
          재산세를 차등 감면한다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "55%" }}>전용면적</th>
              <th style={th}>재산세 감면율</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <td style={{ ...td, fontWeight: "bold" }}>{r[0]}</td>
                <td style={{ ...tdc, color: "#cf1322", fontWeight: "bold" }}>{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 다가구주택은 모든 호의 전용면적이 40㎡ 이하인 경우 등 세부 요건이 있다. 임대 의무기간·세대수 요건과
          적용기한은 해당 연도 지특법을 확인한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 적용 요건">
        <SubSection title="● 공통 요건">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>임대사업자 등록(공공/민간) 후 임대 목적에 <strong>직접 사용</strong></li>
            <li>과세기준일 현재 <strong>2세대 이상</strong> 임대 (공동주택 기준)</li>
            <li>임대 의무기간 준수 — 의무기간 내 매각·전용 시 감면세액 추징</li>
          </ul>
        </SubSection>
        <Insight>
          §31은 <strong>공공·일반 임대주택</strong>에 대한 면적별 차등(60㎡ 이하 면제, 85㎡ 이하 50%) 감면이고,
          장기일반민간임대주택의 <strong>장기 임대 추가 혜택</strong>은 §31의3에서 별도로 규정한다(다음 단원).
        </Insight>
      </CalcBox>
    </div>
  );
}

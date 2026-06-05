"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 장기일반민간임대주택 전용면적별 재산세 감면 (지특법 §31의3) */
const rows: [string, string][] = [
  ["전용 40㎡ 이하", "면제 (100%) — 다가구주택 포함"],
  ["전용 40㎡ 초과 60㎡ 이하", "75% 경감"],
  ["전용 60㎡ 초과 85㎡ 이하", "50% 경감"],
];

export default function LongRental() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        「민간임대주택법」에 따른 장기일반민간임대주택·공공지원민간임대주택을 장기간 임대하는 경우, 일반 임대주택
        감면(§31)보다 폭넓은 재산세 감면을 적용한다(지특법 §31의3). 장기 임대를 유도하기 위한 추가 혜택이다.
      </p>

      <CalcBox title="■ 감면 내용 (지특법 §31의3)">
        <p>
          공시가격이 <strong>수도권 6억원·비수도권 3억원 이하</strong>이고, <strong>2세대 이상</strong>을 임대 목적에
          직접 사용하는 장기임대주택을 기준으로 전용면적별로 감면한다.
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
          ※ 의무임대기간(장기일반: 10년 이상 등)과 공시가격 요건을 충족해야 한다. 적용기한은 지특법 개정에 따라
          달라지므로 해당 연도 법령을 반드시 확인한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 적용 요건 및 추징">
        <SubSection title="● 핵심 요건">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>「민간임대주택법」상 <strong>장기일반민간임대주택 또는 공공지원민간임대주택</strong> 등록</li>
            <li>공시가격: <strong>수도권 6억원 / 비수도권 3억원 이하</strong></li>
            <li>과세기준일 현재 <strong>2세대 이상</strong> 임대 목적 직접 사용</li>
            <li>의무임대기간(통상 10년) 준수</li>
          </ul>
        </SubSection>
        <SubSection title="● 추징">
          <p>
            의무임대기간 내에 임대 외 용도로 사용하거나 매각·증여하는 경우, 등록을 말소하는 경우 등에는 감면받은
            재산세를 추징한다.
          </p>
        </SubSection>
        <Insight>
          §31(일반 임대)과 비교하면 <strong>40㎡ 초과 60㎡ 이하 구간에서 75% 경감</strong>이 추가되어 더 유리하다.
          대신 공시가격 한도와 장기(10년) 의무임대라는 더 엄격한 요건을 요구한다.
        </Insight>
      </CalcBox>
    </div>
  );
}

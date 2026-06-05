"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

export default function Welfare() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        「사회복지사업법」에 따른 사회복지법인 등이 그 고유 업무에 직접 사용하기 위하여 취득하거나 사용하는 부동산에
        대해서는 재산세를 면제한다(지특법 §22).
      </p>

      <CalcBox title="■ 감면 내용 (지특법 §22)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "30%" }}>세목</th>
              <th style={{ ...th, width: "20%" }}>감면율</th>
              <th style={th}>대상</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>취득세</td>
              <td style={{ ...tdc, color: "#1890ff", fontWeight: "bold" }}>면제 (100%)</td>
              <td style={td}>사회복지사업에 직접 사용하기 위하여 취득하는 부동산</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>재산세</td>
              <td style={{ ...tdc, color: "#cf1322", fontWeight: "bold" }}>면제 (100%)</td>
              <td style={td}>과세기준일 현재 사회복지사업에 직접 사용하는 부동산</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 감면율·적용기한은 지특법 개정에 따라 변경될 수 있으므로 해당 연도 법령을 확인한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 대상 주체 및 시설">
        <SubSection title="● 적용 대상">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>「사회복지사업법」에 따른 사회복지법인</li>
            <li>사회복지시설을 설치·운영하는 비영리사업자</li>
            <li>그 밖에 사회복지사업을 목적으로 하는 법인·단체</li>
          </ul>
        </SubSection>
        <SubSection title="● 제외 및 추징">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>수익사업에 사용하는 부분, 목적에 직접 사용하지 않는 부분은 감면 제외</li>
            <li>고급주택·골프장 등 사치성 재산은 감면 대상에서 제외</li>
            <li>취득일부터 정당한 사유 없이 1년 내 미사용, 직접 사용기간 2년 미만 매각·전용 시 추징</li>
          </ul>
        </SubSection>
        <Insight>
          어린이집·노인복지시설 감면(§19·§20)이 시설 유형별 특례라면, §22는 <strong>사회복지법인 등 주체</strong>가
          복지사업에 직접 쓰는 부동산을 폭넓게 면제하는 일반 규정에 가깝다.
        </Insight>
      </CalcBox>
    </div>
  );
}

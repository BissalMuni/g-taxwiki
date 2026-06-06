"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };

export default function ObjectPage() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세 도시지역분의 과세대상은 「재산세 도시지역분 적용대상 지역」 안에 있는 토지·건축물·주택이다. 다만 도시
        계획과 무관하거나 공익적 성격이 강한 일정 토지는 도시지역분 과세대상에서 제외된다(지법 §112①③).
      </p>

      <CalcBox title="■ 과세대상 지역">
        <p>
          「국토의 계획 및 이용에 관한 법률」에 따른 <strong>도시지역</strong> 중, 해당 지방의회의 의결을 거쳐
          <strong> 조례로 고시한 지역</strong>(재산세 도시지역분 적용대상 지역) 안의 재산이 과세대상이다.
        </p>
        <Insight>
          도시지역에 속하더라도 지방자치단체가 조례로 적용대상 지역을 고시하지 않았다면 도시지역분은 부과되지 않는다.
          <strong> 「지역 고시 + 해당 지역 내 물건」</strong> 두 요건을 모두 충족해야 한다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 과세대상 물건">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "26%" }}>구분</th>
              <th style={th}>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>토지</td>
              <td style={td}>적용대상 지역 안의 토지 (단, 아래 제외 토지 해당분은 제외)</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>건축물</td>
              <td style={td}>적용대상 지역 안의 건축물</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>주택</td>
              <td style={td}>적용대상 지역 안의 주택</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 선박·항공기는 도시지역분 과세대상이 아니다(토지·건축물·주택에 한함).
        </p>
      </CalcBox>

      <CalcBox title="■ 과세대상에서 제외되는 토지 (지법 §112③)">
        <p>도시계획사업 수혜와 거리가 멀거나 공익 목적인 다음 토지는 도시지역분 과세에서 제외한다.</p>
        <SubSection title="● 주요 제외 대상">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>전·답·과수원·목장용지·임야 등 농지·임야로서 분리과세대상에 해당하는 토지</li>
            <li>「국토의 계획 및 이용에 관한 법률」에 따른 공공시설을 위한 토지</li>
            <li>그 밖에 도시계획사업의 시행에 따른 수익이 없다고 인정되는 토지로서 조례·시행령으로 정하는 토지</li>
          </ul>
        </SubSection>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 구체적 제외 토지 범위는 지법 §112③ 및 시행령·조례에서 정하므로 해당 연도 규정을 확인한다.
        </p>
      </CalcBox>
    </div>
  );
}

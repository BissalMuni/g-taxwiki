"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

export default function SmallExemption() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        징수할 세액이 너무 적어 징수 비용이 더 큰 경우를 위한 제도다. 고지서 1장당 재산세 2천원 미만이면 징수하지 않는다.
      </p>

      <CalcBox title="■ 소액 징수 면제 (지법 §119)">
        <p>
          고지서 <strong>1장당 재산세로 징수할 세액이 2천원 미만</strong>인 경우에는 해당 재산세를 징수하지 아니한다.
        </p>
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
          <li>소액 징수면제가 되더라도 <strong>부과 자체가 안 되는 것은 아니며</strong>, 부과는 하되 징수를 하지 않는 것임에 유의.</li>
          <li>재산세 <strong>도시지역분을 합산</strong>하여 2천원 미만 여부를 판단한다.</li>
          <li>소방분 지역자원시설세는 소액 징수면제를 <strong>적용</strong>하고, 지방교육세는 적용되지 않는다.</li>
          <li>재산세와 지역자원시설세가 1매 고지될 경우 <strong>각각 구분</strong>하여 소액 징수면제 여부를 판단한다.</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 판단 예시">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>사례</th>
              <th style={th}>처리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>재산세 1만원, 지방교육세 2천원</td>
              <td style={tdc}>모두 고지</td>
            </tr>
            <tr>
              <td style={td}>재산세 3천원, 지역자원시설세 1천원</td>
              <td style={tdc}>재산세만 고지 / 지역자원시설세는 소액징수면제</td>
            </tr>
          </tbody>
        </table>
        <SubSection title="● 주택분 분할부과 시">
          <p>
            주택분 재산세(도시지역분 포함)·소방분 지역자원시설세는 7월·9월로 세액의 1/2씩 부과·징수하므로,
            <strong> 각각의 고지서 1매</strong>를 기준으로 소액 징수면제를 판단한다.
          </p>
        </SubSection>
        <Insight>
          「2천원 미만」은 재산세 고지서상에 병기고지된 세액(지방교육세 등)을 제외한 <strong>재산세만</strong>을 지칭한다
          (운영예규 법119-1, 지방세운영과-1879).
        </Insight>
      </CalcBox>
    </div>
  );
}

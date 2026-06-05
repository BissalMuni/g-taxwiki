"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

export default function Childcare() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        「영유아보육법」에 따른 어린이집과 「유아교육법」에 따른 유치원으로 직접 사용하는 부동산에 대해서는 재산세를
        면제한다(지특법 §19). 운영 주체(국공립·법인·개인)와 무관하게 적용된다.
      </p>

      <CalcBox title="■ 감면 내용 (지특법 §19)">
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
              <td style={td}>어린이집·유치원을 설치·운영하기 위하여 취득하는 부동산</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>재산세</td>
              <td style={{ ...tdc, color: "#cf1322", fontWeight: "bold" }}>면제 (100%)</td>
              <td style={td}>과세기준일 현재 어린이집·유치원에 직접 사용하는 부동산(부속토지 포함)</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 적용기한은 지특법 개정에 따라 연장·변경될 수 있으므로 해당 연도 법령을 확인한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 추징 사유">
        <p>다음에 해당하면 감면된 세액을 추징한다.</p>
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li>정당한 사유 없이 취득일부터 <strong>1년이 경과할 때까지</strong> 해당 용도로 직접 사용하지 않는 경우</li>
          <li>해당 용도로 <strong>직접 사용한 기간이 2년 미만</strong>인 상태에서 매각·증여하거나 다른 용도로 사용하는 경우</li>
          <li>수익사업에 사용하는 경우 — 그 부분</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 적용 시 유의사항">
        <SubSection title="● 직접 사용 판단">
          <p>
            「직접 사용」은 보육·교육이라는 본래 목적에 실제로 제공되는 것을 의미한다. 과세기준일(6/1) 현재 직접
            사용 여부로 판단하며, 일부만 직접 사용하는 경우 그 부분만 감면한다.
          </p>
        </SubSection>
        <Insight>
          유치원·어린이집 감면은 취득세와 재산세 모두 「면제(100%)」로 폭이 크다. 다만 최소납부세제(지특법 §177의2)가
          적용되어, 100% 면제라도 산출세액이 일정 금액을 초과하면 <strong>15%는 납부</strong>해야 할 수 있다.
        </Insight>
      </CalcBox>
    </div>
  );
}

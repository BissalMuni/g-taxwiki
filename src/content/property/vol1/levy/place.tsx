"use client";

import { CalcBox, SubSection } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };

export default function Place() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세 납세지는 과세물건의 소재지를 기준으로 한다. 부동산은 소재지 지자체이며, 선박·항공기는 선적항·정치장
        등으로 정한다.
      </p>

      <CalcBox title="■ 과세대상별 납세지">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "22%" }}>과세대상</th>
              <th style={th}>납세지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>토지·건축물·주택</td>
              <td style={td}>해당 과세물건 소재지를 관할하는 지방자치단체</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>선박</td>
              <td style={td}>
                「선박법」상 <strong>선적항의 소재지</strong>. 다만 동력수상레저기구는 「수상레저기구의 등록 및 검사에 관한
                법률」 §6③에 따른 등록지, 선적항이 없는 선박은 정계장 소재지(정계장이 일정하지 아니하면 선박 소유자의
                주소지).
              </td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>항공기</td>
              <td style={td}>「항공안전법」상 등록원부에 기재된 <strong>정치장의 소재지</strong>(미등록 시 소유자의 주소지).</td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 참고 — 선적항·정계장">
        <SubSection title="● 선적항">
          <p>
            선박소유자가 선박법 또는 소형선박의 선적 등에 관한 규정에 따라 20톤 이상의 선박을 해운관청에 등록하거나
            20톤 미만 선박의 선적증서를 교부받을 때 정한 장소. 일반적으로 선박소유자의 주소지 시·읍·면이 되나, 주소지에
            선박이 항행할 수 있는 수면이 없는 경우 등은 해운관청의 인가를 받아 다른 장소를 선적항으로 할 수 있다.
          </p>
        </SubSection>
        <SubSection title="● 정계장">
          <p>
            선박증서 교부대상이 아닌 소형선박(총톤수 5톤 미만의 범선, 군·경찰용 선박, 단주·노도만으로 운항하는 배 등)을
            계류하는 장소. 법령으로 정해진 장소가 아니라 실제로 당해 선박이 운항하지 않을 때 머물러 있는 장소를 말한다.
          </p>
        </SubSection>
      </CalcBox>
    </div>
  );
}

"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 종합합산과세대상 토지 유형 (가~자, 책 p98~99) */
const typeRows: [string, string, string][] = [
  ["가", "공장용 건축물 부속토지 중 '용도지역별 적용배율' 초과 토지", "영 §101①"],
  ["나", "공장용 건축물 부속토지 중 '공장입지기준면적' 초과 토지(읍·면·산업단지·공업지역, 규칙 별표6). 건축 중 포함하되 정당한 사유 없이 6개월 이상 중단 시 제외", "영 §102①1"],
  ["다", "분리과세대상에 해당하지 않는 농지 — 개인 소유 도시지역(개발제한·녹지 외) 농지, 분리 요건 못 갖춘 법인·단체 농지", "영 §102①2"],
  ["라", "분리과세 목장용지 중 기준면적 초과분(도시지역 안·밖)", "영 §102①2나"],
  ["마", "분리과세 대상 이외의 임야(영 §102② 분리 임야 제외)", "영 §102②"],
  ["바", "별도합산 일반 건축물 부속토지 중 기준면적 초과분(주거용·분리지역 공장·골프장·고급오락장 제외). 규칙 §65 지상정착물 초과분 포함", "영 §101①"],
  ["사", "지상정착물이 없는 나대지 — 분리·별도가 아닌 토지(시가표준액 2% 미달 건축물 부지·무허가 부지 포함)", "영 §101①2나·단서"],
  ["아", "잡종지 — 갈대밭·물웅덩이·채석장·토취장·노천시장·비행장·공동우물 등(분리·비과세·감면 제외)", "—"],
  ["자", "경계 불분명 주택 부속토지 — 주택 바닥면적 10배 초과분", "영 §105"],
];

export default function GeneralAggregate() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        종합합산과세는 토지 재산세의 <strong>원칙적 과세방식</strong>이다(지방세법 제106조제1항제1호). 납세의무자가
        소유한 토지 중 법령에 열거된 <strong>별도합산·분리과세 대상을 제외한 모든 토지</strong>가 종합합산 대상이며,
        별도합산 기준면적 초과분·분리 요건을 갖추지 못한 토지가 여기로 흡수된다.
      </p>

      <CalcBox title="■ 종합합산과세대상 토지 개요 (지방세법 제106조제1항제1호)">
        <p>
          과세기준일 현재 납세의무자가 소유하고 있는 토지 중 별도합산과세대상 토지와 분리과세대상 토지를 제외한 토지.
          토지 재산세는 원칙적으로 종합합산 대상이며, 법령에 열거된 경우에 한하여 별도합산·분리과세가 적용된다.
          따라서 당해 토지가 별도합산·분리에 해당하지 않는 이상 종합합산과세대상이다.
        </p>
        <Insight>
          판단 순서 — ① 분리과세 해당? ② 별도합산 해당(기준면적 이내)? 둘 다 아니거나 기준면적 초과분이면 종합합산.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 종합합산과세대상 토지의 유형 (가~자)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "6%" }}>구분</th>
              <th style={th}>토지 유형</th>
              <th style={{ ...th, width: "16%" }}>근거</th>
            </tr>
          </thead>
          <tbody>
            {typeRows.map((r) => (
              <tr key={r[0]}>
                <td style={tdc}>{r[0]}</td>
                <td style={td}>{r[1]}</td>
                <td style={tdc}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 나대지로 보아 종합합산하는 경우 (사목 보충)">
        <SubSection title="● 시가표준액 2% 미달 건축물 부지 (영 §101①2나목)">
          <p>
            건축물 시가표준액이 부속토지 시가표준액의 <strong>100분의 2(2%)에 미달</strong>하면 바닥면적만큼만 별도합산
            토지로 인정하고, 나머지 부속토지는 용도지역별 적용배율을 곱한 면적을 종합합산한다.
          </p>
        </SubSection>
        <SubSection title="● 무허가·미사용승인 건축물 부지 (영 §101① 단서)">
          <p>
            「건축법」 등 관계법령상 허가를 받지 아니한 건축물, 사용승인(임시사용승인 포함)을 받지 아니하고 사용 중인
            건축물의 부속토지는 별도합산에서 제외되어 <strong>부속토지 전체가 종합합산</strong>이 된다. 다만 주거용
            건축물의 부속토지는 건물과 합산하여 주택분 재산세로 과세한다.
          </p>
        </SubSection>
        <SubSection title="● 경계 불분명 주택 부속토지 (영 §105)">
          <p>
            주택 부속토지의 경계가 명백하지 않으면 주택 바닥면적의 <strong>10배</strong>를 부속토지로 보며, 10배를
            초과하는 토지는 종합합산과세대상이다.
          </p>
        </SubSection>
        <p style={{ fontSize: "12px", color: "#888" }}>
          관련 사례: 국토 2012부22713·2007두7741(시가표준액 2% 미달 → 이용현황 불문 종합합산), 부동산세제과-1332(2023,
          대중 미개방 체육시설 → 종합합산), 부동산세제과-515(2024, 멸실 6개월 별도합산 규정 폐지 → 종합합산).
        </p>
      </CalcBox>
    </div>
  );
}

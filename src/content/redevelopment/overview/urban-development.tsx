"use client";

import { CalcBox, SubSection } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function OverviewUrbanDevelopment() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        도시개발사업은 계획적인 도시개발이 필요한 지역에 주거·상업·산업·유통 등 기능이 있는 단지·시가지를
        조성하는 사업으로, <strong>「도시개발법」</strong>(’00.7.~)에 따른다. 취득세는 정비사업과 달리
        <strong> 지목변경 취득(2%)</strong>이 중심이 된다.
      </p>

      <CalcBox title="■ 연혁과 감면">
        <p>
          종전 「도시계획법」의 도시개발사업부문(주택지조성·공업용지조성·대지조성사업)과
          「토지구획정리사업법」을 통합하여 2000년 7월 「도시개발법」을 제정·도입하였다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>현행 사업명</th>
              <th style={th}>종전 사업명</th>
              <th style={th}>사업주체</th>
              <th style={th}>근거 법률 (현행/종전)</th>
              <th style={th}>감면</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>도시개발사업</td>
              <td style={td}>주택지조성·공업용지조성·대지조성사업, 토지구획정리사업</td>
              <td style={td}>시장·군수, LH, 조합 등</td>
              <td style={td}>도시개발법 / 도시계획법·토지구획정리사업법</td>
              <td style={td}>감면 有</td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 사업방식별 절차">
        <SubSection title="● 환지방식">
          <p className="text-muted" style={{ fontSize: "12.5px" }}>
            구역지정 → 조합설립인가 → 실시계획인가 → 환지계획인가 → 환지예정지 지정 → 착공 → 준공 → 환지처분공고
          </p>
        </SubSection>
        <SubSection title="● 수용방식">
          <p className="text-muted" style={{ fontSize: "12.5px" }}>
            구역지정 → 사업시행자 지정 → 실시계획인가 → 수용권 부여 → 착공 → 준공(공사완료)
          </p>
        </SubSection>
        <p style={{ fontSize: "12.5px" }}>
          환지방식 도시개발사업의 체비지·보류지는 환지처분공고일 다음날 무상승계(3.5%)로 취득하며,
          지목변경 취득가액을 공제한다. (상세는 「4장 주요 현안」 참조)
        </p>
      </CalcBox>
    </div>
  );
}

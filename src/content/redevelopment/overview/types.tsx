"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };

export default function OverviewTypes() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        정비사업은 도시기능을 회복하기 위하여 정비구역에서 정비기반시설을 정비하거나 주택 등
        건축물을 개량·건설하는 <strong>「도시 및 주거환경정비법」</strong>에 따른 사업이다.
        취득세 과세 구조가 사업 유형별로 다르므로, 먼저 사업의 종류와 연혁을 구분한다.
      </p>

      <CalcBox title="■ 개요 — 정비사업과 개발사업">
        <p>
          <strong>정비사업</strong>: 정비구역에서 정비기반시설을 정비하거나 주택 등 건축물을
          개량·건설하는 「도시정비법」상 사업. 주거환경개선사업, 재개발사업, 재건축사업 등이 있다.
        </p>
        <p>
          <strong>개발사업</strong>: 국가·지방자치단체로부터 인가·허가·면허 등을 받거나 신고하고
          시행하는 사업. 택지 및 주택개발사업, 공장용지개발사업, 도시개발사업 등이 있다.
        </p>
      </CalcBox>

      <CalcBox title="■ 정비사업의 종류">
        <table style={tbl}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ ...th, width: "22%" }}>사업</th>
              <th style={th}>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>재건축사업</td>
              <td style={td}>정비기반시설은 양호하나 노후·불량건축물에 해당하는 공동주택이 밀집한 지역에서 주거환경을 개선하기 위한 사업</td>
            </tr>
            <tr>
              <td style={tdHead}>재개발사업</td>
              <td style={td}>정비기반시설이 열악하고 노후·불량건축물이 밀집한 지역에서 주거환경을 개선하거나, 상업·공업지역 등에서 도시기능의 회복 및 상권활성화 등을 위하여 도시환경을 개선하기 위한 사업</td>
            </tr>
            <tr>
              <td style={tdHead}>주거환경개선사업</td>
              <td style={td}>도시저소득 주민이 집단거주하는 지역으로서 정비기반시설이 극히 열악하고 노후·불량건축물이 과도하게 밀집한 지역의 주거환경을 개선하거나, 단독·다세대주택이 밀집한 지역에서 정비기반시설과 공동이용시설 확충을 통해 주거환경을 보전·정비·개량하기 위한 사업</td>
            </tr>
            <tr>
              <td style={tdHead}>도시개발사업</td>
              <td style={td}>계획적인 도시개발이 필요한 지역에 주거·상업·산업·유통·정보통신·생태·문화·보건·복지 등의 기능이 있는 단지 또는 시가지를 조성하기 위해 시행하는 사업</td>
            </tr>
          </tbody>
        </table>
        <p className="text-muted" style={{ fontSize: "12px" }}>
          ※ (도시개발법) 도시개발사업, (주택법) 지역주택조합
        </p>
      </CalcBox>

      <CalcBox title="■ 사업 명칭 변천 (근거 법률별)">
        <table style={tbl}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={th}>~ 2003. 6. 30.</th>
              <th style={th}>~ 2018. 2. 8.</th>
              <th style={th}>2018. 2. 9. ~</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>
                <strong>도시재개발법</strong><br />· 주택재개발사업<br />· 도시환경정비사업
              </td>
              <td style={td}>
                <strong>도시 및 주거환경정비법</strong><br />· 주택재개발사업 · 도시환경정비사업<br />· 주택재건축사업 · 가로주택정비사업<br />· 주거환경개선사업 · 주거환경관리사업
              </td>
              <td style={td}>
                <strong>도시 및 주거환경정비법</strong><br />· 재개발사업<br />· 재건축사업<br />· 주거환경개선사업
              </td>
            </tr>
            <tr>
              <td style={td}>
                <strong>주택건설촉진법</strong><br />· 주택재건축사업
              </td>
              <td style={td}>
                <strong>빈집 및 소규모주택 정비에 관한 특별법</strong><br />· 자율주택정비사업 · 가로주택정비사업<br />· 소규모재건축사업 · 소규모재개발사업*
              </td>
              <td style={td}>
                <strong>빈집 및 소규모주택 정비에 관한 특별법</strong><br />(소규모정비사업 — 별도)
              </td>
            </tr>
            <tr>
              <td style={td}>
                <strong>도시저소득주민의 주거환경 개선을 위한 임시조치법</strong><br />· 주거환경관리사업
              </td>
              <td style={td}></td>
              <td style={td}></td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 통·폐합 연혁">
        <p><strong>2018. 2. 9. 이후</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>주택재개발사업(주거지역) + 도시환경정비사업(상업·공업지역) ⇨ <strong>재개발사업</strong></li>
          <li>주택재건축사업 ⇨ <strong>재건축사업</strong>(도정법) + 소규모재건축사업(빈집정비법)</li>
          <li>주거환경개선사업 + 주거환경관리사업 ⇨ <strong>주거환경개선사업</strong></li>
          <li>가로주택정비사업 ⇨ 가로주택정비사업(빈집정비법)</li>
        </ul>
        <p className="mt-3"><strong>2021. 9. 21. 이후</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>재개발사업 ⇨ 재개발사업(도정법) + <strong>소규모재개발사업</strong>(빈집정비법)</li>
        </ul>
        <Insight>
          취득세 적용 법령(도정법·빈집정비법·도시개발법·주택법)에 따라 감면 근거와 과세체계가 갈리므로,
          사업이 어느 법률에 따른 것인지 먼저 확정해야 한다.
        </Insight>
      </CalcBox>
    </div>
  );
}

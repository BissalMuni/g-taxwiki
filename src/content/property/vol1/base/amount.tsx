"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 산정식 박스 스타일 */
const formula = {
  border: "1px solid #d9d9d9",
  background: "#fafafa",
  borderRadius: "8px",
  padding: "12px 14px",
  margin: "8px 0",
  fontSize: "var(--content-font-size, 13px)",
  lineHeight: 1.7,
};

/** 용도별 건물신축가격기준액 (행안부 고시, 원/㎡) — 책 p125 */
const buildBasePrice: [string, string, string, string, string][] = [
  ["1", "주거용 건물", "820,000", "840,000", "860,000"],
  ["2", "상업용 건물", "810,000", "830,000", "860,000"],
  ["3", "공업용 건물", "800,000", "830,000", "840,000"],
  ["4", "농수산용 건물", "610,000", "630,000", "640,000"],
  ["5", "문화·체육·교육용 건물", "820,000", "840,000", "860,000"],
  ["6", "공공용 건물", "810,000", "830,000", "850,000"],
];

export default function BaseAmount() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        과세대상별 과세표준액은 토지·건축물·주택·선박·항공기 각각의 시가표준액 산정방식에 따라 구해진다. 토지는
        개별공시지가, 건축물은 원가방식 산정식, 주택은 통합 공시가격, 선박·항공기는 톤수·제원 기준가격을 사용한다.
      </p>

      <CalcBox title="■ 토지 (지법 §106①, §113)">
        <p>
          토지분 재산세의 과세표준은 토지의 가액으로 하되, <strong>종합합산·별도합산·분리과세</strong>로 분류된다.
        </p>
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
          <li>종합합산대상 토지: 시·군·구 관내 소유토지를 인별로 <strong>종합합산</strong>하여 계산</li>
          <li>별도합산대상 토지: 종합합산과는 별도로 인별로 <strong>합산</strong>하여 계산</li>
          <li>분리과세대상 토지: 합산하지 않고 토지별로 <strong>분리</strong>하여 계산</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 건축물 (지법 §104 2호, §6 4호)">
        <p>
          「건축물」이란 「건축법」 §2①2호에 따른 건축물(이와 유사한 형태의 건축물 포함)과 토지에 정착하거나 지하·다른
          구조물에 설치하는 레저시설·저장시설·도크(dock)·접안·도관·급수배수·에너지 공급시설 등으로서 대통령령으로 정하는
          것을 말한다.
        </p>

        <SubSection title="● 시가표준액 산정방식">
          <p>
            건축물 시가표준액은 <strong>원가방식</strong>으로 위치지수·가감산특례 등을 통해 시가를 일부 반영한다. 유형별
            신축단가에 구조·용도·위치별 가중치를 반영한다.
          </p>
          <div style={formula}>
            <strong>건축물 시가표준액</strong> = 건물신축가격기준액 × 구조지수 × 용도지수 × 위치지수
            <br />
            &nbsp;&nbsp;&nbsp;× 경과연수별잔존가치율 × 면적(㎡) × 가감산율
          </div>
        </SubSection>

        <SubSection title="● 건물신축가격기준액">
          <p>
            '22년부터 국세청에서 고시한 단일 건물신축가격기준액을 활용하였고, <strong>'23년부터는 행정안전부장관</strong>이
            고시하는 가격을 활용한다. 건축물을 신축하기 위한 단위면적당 건축비용으로, 유형별 ㎡당 가격으로 고시한다.
          </p>
          <table style={tbl}>
            <thead>
              <tr>
                <th style={{ ...th, width: "8%" }}>번호</th>
                <th style={th}>용도별 건물신축가격기준액</th>
                <th style={th}>2024년</th>
                <th style={th}>2025년</th>
                <th style={th}>2026년</th>
              </tr>
            </thead>
            <tbody>
              {buildBasePrice.map((r) => (
                <tr key={r[0]}>
                  <td style={tdc}>{r[0]}</td>
                  <td style={{ ...td, fontWeight: "bold" }}>{r[1]}</td>
                  <td style={tdc}>{r[2]}원/㎡</td>
                  <td style={tdc}>{r[3]}원/㎡</td>
                  <td style={tdc}>{r[4]}원/㎡</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SubSection>

        <SubSection title="● 산정기준 (지수·잔가율·가감산율)">
          <p className="text-muted">
            지수·경과연수별 잔가율·가감산율은 「지방세 시가표준액 조사·산정 기준」의 별표를 적용한다.
          </p>
          <ol style={{ margin: "6px 0", paddingLeft: "1.3em", lineHeight: 1.7 }}>
            <li>
              <strong>구조지수</strong>: 주된 재료를 기준으로 지수 적용. 공부상 구조와 현황상 구조가 다른 경우 세무공무원이
              조사한 사용현황 기준으로 적용 가능.
            </li>
            <li>
              <strong>용도지수</strong>: 1구 또는 1동을 1 이상의 용도에 사용하면 각 용도대로 구분. 공용부분은 전유면적
              비율로 안분하되, 구분 불가한 부분은 사용현황이 가장 큰 용도에 부속된 것으로 본다.
            </li>
            <li>
              <strong>위치지수</strong>: 납세의무 성립일 현재의 개별공시지가를 기준으로 한다.
            </li>
            <li>
              <strong>경과연수별 잔가율</strong>: 건축물의 구조를 기준으로 내용연수·경과연수를 수치로 표시한 비율.
            </li>
            <li>
              <strong>가감산율</strong>: 둘 이상의 항목에 해당하면 각각의 가산율·감산율을 더하여 적용한다.
            </li>
          </ol>
        </SubSection>

        <SubSection title="● 참고 — 시가표준 개선 (행안부 부동산세제과-1448, 2023.12.26.)">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
            <li>
              <strong>구조·용도</strong>: 구조지수·용도지수를 세부분류에 맞게 재분류, 일부 용도 세분화(근린생활시설 1·2동
              구분 등).
            </li>
            <li>
              <strong>경과연수별 잔가율</strong>: 철근콘크리트 등 내용연수(40년) 초과 사용 건축물의 최종연도 잔가율을 낮춤
              (<strong>15% → 10%</strong>).
            </li>
          </ul>
          <p style={{ marginTop: "8px" }}>① <strong>초고층 건축물</strong> — 단일 가산율(0.06)을 3단계로 차등:</p>
          <table style={tbl}>
            <thead>
              <tr>
                <th style={th}>50층 이하</th>
                <th style={th}>60층~79층</th>
                <th style={th}>80층 이상</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdc}>0.06</td>
                <td style={tdc}>0.07</td>
                <td style={tdc}>0.08</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: "8px" }}>
            ② <strong>분양형 호텔 등</strong> — 일반상가와 달리 분양원가가 낮음에도 1구 2층 가산을 적용하던 것을
            <strong>폐지</strong>. (기타) 지하상가 시 「부속 주차시설 포함」 문구 삭제.
          </p>
        </SubSection>

        <SubSection title="● 오피스텔 — 표준가격기준액 방식 (2022~)">
          <p>
            2022년부터 오피스텔 시가표준액은 거래사례 등을 반영한 <strong>표준가격기준액</strong>을 기준으로 호별 산정한다.
            오피스텔은 실질 사용에 따라 주택법·건축법의 적용을 받으며, 주거용으로 사용하는 경우 주택법 §2상
            <strong>준주택</strong>으로 본다(기숙사·다중생활시설·노인복지주택 등 포함).
          </p>
          <div style={formula}>
            <strong>오피스텔 시가표준액</strong> = 표준가격기준액 × 각종 지수(용도·위치·구조) × 층지수 × 면적(㎡) × 가감산율
          </div>
          <Insight>
            2026년 고시 오피스텔 표준가격기준액은 <strong>850,000원/㎡</strong>.
          </Insight>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 주택">
        <SubSection title="● 공동주택 및 단독주택">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
            <li>
              <strong>공동주택</strong>: 「부동산가격공시법」 §17에 따라 공시된 <strong>공동주택가격</strong> × 공정시장가액비율
            </li>
            <li>
              <strong>단독주택</strong>: 「부동산가격공시법」 §16에 따라 공시된 <strong>개별주택가격</strong> × 공정시장가액비율
            </li>
          </ul>
        </SubSection>

        <SubSection title="● 주택가격이 미공시된 경우">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
            <li>
              <strong>공동주택 미공시</strong>: 행정안전부장관이 정하는 기준에 따라 시·군·구청장이 산정한 가액 ×
              공정시장가액비율
            </li>
            <li>
              <strong>단독주택 미공시</strong>: 시·군·구청장이 <strong>주택가격비준표</strong>를 사용하여 산정한 가액 ×
              공정시장가액비율
            </li>
          </ul>
        </SubSection>

        <SubSection title="● 무허가 주택">
          <p>
            「부동산가격공시법」상 주택가격 공시대상이 아니지만 과세표준에는 포함된다. 국토교통부장관이 제공하는
            주택가격비준표(토지×주택)를 사용하여 산정한 가액 × 공정시장가액비율.
          </p>
        </SubSection>

        <SubSection title="● 건물과 부속토지의 소유자가 다른 경우">
          <p>
            주택 공시가격 × 공정시장가액비율을 과세표준으로 하여 산출한 세액을, <strong>건물과 토지분 시가표준액의 비율</strong>로
            안분하여 각각의 소유자에게 부과한다.
          </p>
        </SubSection>

        <SubSection title="● 주거 / 주거외 용도 겸용 시 구분방법">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
            <li>1동(棟) 겸용: 주거 사용면적이 전체의 <strong>100분의 50 이상</strong>이면 주택으로 본다.</li>
            <li>1구(具) 겸용: 주거 사용면적이 전체의 <strong>100분의 50 이상</strong>이면 주택으로 본다.</li>
            <li>동·구의 경계가 명백하지 아니하면 주택 바닥면적의 <strong>10배</strong>에 해당하는 토지를 부속토지로 본다.</li>
          </ul>
          <Insight>
            <strong>1구의 주택</strong>(운영예규 법111-시행령112-1) — 소유 기준이 아니라 <strong>점유상 독립성</strong> 기준.
            합숙소·기숙사는 1동을 1구 주택으로 보며, 다가구주택은 칸막이·부엌·출입문이 독립되어야 1구의 주택으로 본다.
          </Insight>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 선박 및 항공기 (지법 §4②)">
        <SubSection title="● 선박 (영 §4①2호)">
          <p>
            선박의 종류·용도·건조가격을 고려하여 톤수 간 차등을 둔 단계별 기준가격에, 경과연수별 잔존가치율·급랭사실 등에
            따른 가감산율을 적용한다.
          </p>
          <div style={formula}>
            <strong>선박 시가표준액</strong> = 기준가격 × 경과연수별 잔존가치율 × 급랭사실 등에 따른 가감산율
          </div>
        </SubSection>

        <SubSection title="● 항공기 (영 §4①6호)">
          <p>
            항공기의 종류별·형식별·제작회사별·정원별·최대이륙중량별·제조연도별 제조가격 및 거래가격(수입 시 수입가격)을
            고려하여 정한 기준가격에 경과연수별 잔존가치율을 적용한다.
          </p>
          <div style={formula}>
            <strong>항공기 시가표준액</strong> = 기준가격 × 경과연수별 잔존가치율
          </div>
        </SubSection>

        <SubSection title="● 기타물건">
          <p>
            차량·기계장비 등 10개 유형의 물건은 행안부 고시 기준가격에 경과연수별 잔가율을 적용하여 산정한다.
          </p>
          <div style={formula}>
            <strong>기타물건 시가표준액</strong> = 각 물건별 기준가격 × 경과연수별 잔가율 등
          </div>
        </SubSection>
      </CalcBox>
    </div>
  );
}

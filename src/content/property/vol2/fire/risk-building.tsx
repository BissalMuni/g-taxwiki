"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };
const red = { color: "#cf1322", fontWeight: "bold" as const };

export default function RiskBuilding() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        화재위험이 높은 건축물은 소방분 표준세율의 <strong>2배(200%)</strong>, 대형 화재위험 건축물은 <strong>3배(300%)</strong>로
        중과한다(지법 §146③2호·2의2호). 구체적 범위는 시행령 §138에서 정한다.
      </p>

      <CalcBox title="■ 중과 체계 (지법 §146③2호·2의2호)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "30%" }}>구분</th>
              <th style={{ ...th, width: "18%" }}>중과배율</th>
              <th style={th}>근거</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...tdHead, color: "#cf1322" }}>화재위험 건축물</td>
              <td style={{ ...tdc, ...red }}>표준세율 × 200%</td>
              <td style={td}>지법 §146③2호 · 영§138①</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, color: "#cf1322" }}>대형 화재위험 건축물</td>
              <td style={{ ...tdc, ...red }}>표준세율 × 300%</td>
              <td style={td}>지법 §146③2의2호 · 영§138②</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <a href="https://www.law.go.kr/법령/지방세법/제146조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 §146③</a>
        </p>
      </CalcBox>

      <CalcBox title="■ 2배 중과 — 화재위험 건축물 (영§138①)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "30%" }}>유형</th>
              <th style={th}>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>저유장</td>
              <td style={td}>「위험물안전관리법」에 따른 위험물(유류 등)의 저장·취급 시설</td>
            </tr>
            <tr>
              <td style={tdHead}>주유소</td>
              <td style={td}>주유소 및 충전소</td>
            </tr>
            <tr>
              <td style={tdHead}>유흥장</td>
              <td style={td}>「식품위생법」에 따른 유흥주점영업 장소</td>
            </tr>
            <tr>
              <td style={tdHead}>극장</td>
              <td style={td}>「영화 및 비디오물의 진흥에 관한 법률」에 따른 영화상영관</td>
            </tr>
            <tr>
              <td style={tdHead}>중층 건축물</td>
              <td style={td}><strong>4층 이상 10층 이하</strong>의 건축물</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <a href="https://www.law.go.kr/법령/지방세법시행령/제138조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 시행령 §138①</a>
        </p>
      </CalcBox>

      <CalcBox title="■ 3배 중과 — 대형 화재위험 건축물 (영§138②)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "30%" }}>유형</th>
              <th style={th}>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>대규모점포</td>
              <td style={td}>「유통산업발전법」에 따른 대형마트 · 백화점 · 쇼핑센터 · 복합쇼핑몰 등</td>
            </tr>
            <tr>
              <td style={tdHead}>복합영상관</td>
              <td style={td}>「영화 및 비디오물의 진흥에 관한 법률」에 따른 복합영상관(상영관 여러 개)</td>
            </tr>
            <tr>
              <td style={tdHead}>호텔</td>
              <td style={td}>「관광진흥법」에 따른 관광숙박업용 건축물 등</td>
            </tr>
            <tr>
              <td style={tdHead}>고층 건축물</td>
              <td style={td}><strong>11층 이상</strong>의 건축물</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <a href="https://www.law.go.kr/법령/지방세법시행령/제138조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 시행령 §138②</a>
        </p>
        <Insight>
          유형이 2배와 3배에 <strong>중복 해당</strong>할 때는 더 높은 배율(3배)을 적용한다. 예: 12층 백화점은 대규모점포(3배)이자
          11층 이상(3배) → 3배.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 적용 방식">
        <SubSection title="● 일부 시설 시 적용">
          <p>
            저유장·주유소·유흥장·극장 등 <strong>용도로 정한 시설</strong>이 건축물의 일부에만 있는 경우, 원칙적으로
            <strong> 해당 용도로 사용되는 부분</strong>에 대해 중과한다. 반면 <strong>층수(4층 이상 / 11층 이상)</strong> 기준은
            건축물 전체의 규모로 판정한다.
          </p>
        </SubSection>
        <SubSection title="● 판정 기준일">
          <p>
            중과 해당 여부는 <strong>과세기준일(6월 1일)</strong> 현재의 사용 현황·구조를 기준으로 판정한다.
            허가·등록 내용이 아니라 실제 사용 실태가 기준이다.
          </p>
        </SubSection>
        <Insight>
          중과세액 = 「소방 누진」 단원의 표준세액 산출 후 해당 배율(200% 또는 300%)을 곱한다.
        </Insight>
      </CalcBox>
    </div>
  );
}

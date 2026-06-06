"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };
const red = { color: "#cf1322", fontWeight: "bold" as const };

export default function BaseRate() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        소방분 과세표준은 건축물·선박의 <strong>시가표준액(가액)</strong>이며, 여기에 <strong>6단계 초과누진세율</strong>
        (0.04%~0.12%)을 적용한다(지법 §146③). 화재위험 건축물은 표준세율의 2배·3배로 중과된다.
      </p>

      <CalcBox title="■ 과세표준 (지법 §146③)">
        <p>
          소방분의 과세표준은 과세대상 <strong>건축물 또는 선박의 가액 또는 시가표준액</strong>이다. 재산세 과세표준 산정의
          기준이 되는 시가표준액을 그대로 사용한다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "26%" }}>대상</th>
              <th style={th}>과세표준</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>건축물</td>
              <td style={td}>건축물의 <strong>시가표준액</strong> (주택은 건축물 부분에 해당하는 가액)</td>
            </tr>
            <tr>
              <td style={tdHead}>선박</td>
              <td style={td}>선박의 <strong>시가표준액</strong></td>
            </tr>
          </tbody>
        </table>
        <Insight>
          재산세 건축물 과세표준은 시가표준액 × <strong>공정시장가액비율(70%)</strong>이지만, 소방분은 공정시장가액비율을
          거치지 않고 <strong>시가표준액 자체</strong>를 과세표준으로 한다는 점에 유의한다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 표준세율 — 6단계 초과누진 (지법 §146③1호)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "44%" }}>과세표준</th>
              <th style={th}>세율</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>600만원 이하</td>
              <td style={tdc}>1만분의 4 (0.04%)</td>
            </tr>
            <tr>
              <td style={td}>600만원 초과 ~ 1,300만원 이하</td>
              <td style={tdc}>2,400원 + (600만원 초과금액 × 1만분의 5)</td>
            </tr>
            <tr>
              <td style={td}>1,300만원 초과 ~ 2,600만원 이하</td>
              <td style={tdc}>5,900원 + (1,300만원 초과금액 × 1만분의 6)</td>
            </tr>
            <tr>
              <td style={td}>2,600만원 초과 ~ 3,900만원 이하</td>
              <td style={tdc}>13,700원 + (2,600만원 초과금액 × 1만분의 8)</td>
            </tr>
            <tr>
              <td style={td}>3,900만원 초과 ~ 6,400만원 이하</td>
              <td style={tdc}>24,100원 + (3,900만원 초과금액 × 1만분의 10)</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>6,400만원 초과</td>
              <td style={{ ...tdc, fontWeight: "bold" }}>49,100원 + (6,400만원 초과금액 × 1만분의 12)</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <a href="https://www.law.go.kr/법령/지방세법/제146조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 §146③</a>
        </p>
        <p className="mt-1 text-muted">
          단계별 누진 계산 방법과 예시는 <strong>「소방 누진」</strong> 단원 참조.
        </p>
      </CalcBox>

      <CalcBox title="■ 세율 구조 — 표준 / 중과 (2배·3배)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "34%" }}>구분</th>
              <th style={{ ...th, width: "20%" }}>세율</th>
              <th style={th}>대상</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>표준세율</td>
              <td style={tdc}>0.04%~0.12% 누진</td>
              <td style={td}>일반 건축물·선박</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, color: "#cf1322" }}>화재위험 건축물</td>
              <td style={{ ...tdc, ...red }}>표준세율 × 200%</td>
              <td style={td}>저유장·주유소·유흥장·극장, 4층 이상 10층 이하 건축물 등 (영§138)</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, color: "#cf1322" }}>대형 화재위험 건축물</td>
              <td style={{ ...tdc, ...red }}>표준세율 × 300%</td>
              <td style={td}>대형마트·복합상영관·백화점·호텔, 11층 이상 건축물 등 (영§138)</td>
            </tr>
          </tbody>
        </table>
        <Insight>
          중과 대상 건축물의 구체적 범위와 적용 방법은 <strong>「화재위험 건축물 등」</strong> 단원에서 다룬다.
        </Insight>
      </CalcBox>
    </div>
  );
}

"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };

export default function Purpose() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        소방분 지역자원시설세는 <strong>소방시설로 이익을 받는 자</strong>(건축물·선박 소유자)에게 그 비용을 분담시키는
        <strong> 목적세</strong>다. 재산세와 같은 과세기준일(6월 1일)에 건축물·선박에 부과된다.
      </p>

      <CalcBox title="■ 과세목적 (지법 §141)">
        <p>
          지역자원시설세는 지역의 균형개발·수자원 보호·소방시설 등 공공시설에 필요한 재원을 확보하기 위한
          <strong> 목적세</strong>다. 그중 <strong>소방분</strong>은 소방시설의 설치·운영에 드는 비용을 그 시설로
          이익을 받는 건축물·선박의 소유자에게 분담시키는 데 목적이 있다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "26%" }}>구분</th>
              <th style={th}>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>세목 성격</td>
              <td style={td}>지방세 중 <strong>목적세</strong> (사용 용도가 특정됨)</td>
            </tr>
            <tr>
              <td style={tdHead}>재원 용도</td>
              <td style={td}>소방시설 · 오물처리시설 · 수리시설 등 공공시설 비용 충당</td>
            </tr>
            <tr>
              <td style={tdHead}>부담 원리</td>
              <td style={td}><strong>응익(應益)과세</strong> — 소방시설의 혜택을 받는 자가 비용을 분담</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <a href="https://www.law.go.kr/법령/지방세법/제141조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 §141</a>
        </p>
      </CalcBox>

      <CalcBox title="■ 지역자원시설세의 세 갈래">
        <p>지역자원시설세는 과세대상에 따라 세 가지로 나뉜다(지법 §142①). 소방분은 그중 하나다.</p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "22%" }}>구분</th>
              <th style={{ ...th, width: "38%" }}>과세대상</th>
              <th style={th}>예</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>특정자원분</td>
              <td style={td}>발전용수 · 지하수 · 지하자원</td>
              <td style={td}>수력발전, 먹는샘물, 광물 채취</td>
            </tr>
            <tr>
              <td style={tdHead}>특정시설분</td>
              <td style={td}>컨테이너 · 원자력발전 · 화력발전</td>
              <td style={td}>항만 컨테이너, 발전소</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, color: "#cf1322" }}>소방분</td>
              <td style={td}>소방시설로 이익을 받는 자의 <strong>건축물 및 선박</strong></td>
              <td style={td}>일반 건축물, 선박</td>
            </tr>
          </tbody>
        </table>
        <Insight>
          이 단원이 다루는 것은 <strong>소방분</strong>이다. 재산세 과세대상인 건축물·선박에 재산세와 함께
          부과되므로 실무상 재산세와 한 묶음으로 처리된다.
        </Insight>
      </CalcBox>
    </div>
  );
}

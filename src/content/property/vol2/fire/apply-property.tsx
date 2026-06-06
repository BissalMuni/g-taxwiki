"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };

export default function ApplyProperty() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        소방분 지역자원시설세의 부과·징수는 <strong>재산세 규정을 준용</strong>한다(지법 §147). 과세기준일·납기·고지·물납·분납
        등이 재산세와 동일하며, 실무상 재산세 고지서에 <strong>병기</strong>되어 함께 부과된다.
      </p>

      <CalcBox title="■ 재산세 준용 (지법 §147)">
        <p>
          지역자원시설세의 부과·징수에 필요한 사항은 성질에 반하지 않는 한 <strong>재산세의 부과·징수 규정</strong>을
          준용한다. 소방분 건축물·선박은 재산세 건축물·선박분과 같은 절차로 처리된다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "26%" }}>항목</th>
              <th style={th}>준용 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>과세기준일</td>
              <td style={td}>매년 <strong>6월 1일</strong> (재산세와 동일)</td>
            </tr>
            <tr>
              <td style={tdHead}>부과 방식</td>
              <td style={td}><strong>보통징수</strong> — 과세관청이 세액을 산정하여 고지</td>
            </tr>
            <tr>
              <td style={tdHead}>고지</td>
              <td style={td}>재산세 고지서에 <strong>병기</strong>하여 함께 고지</td>
            </tr>
            <tr>
              <td style={tdHead}>납기</td>
              <td style={td}>건축물·선박분 재산세 납기와 동일 (건축물·선박: <strong>7월 16일~31일</strong>)</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <a href="https://www.law.go.kr/법령/지방세법/제147조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 §147</a>
        </p>
      </CalcBox>

      <CalcBox title="■ 납기 — 재산세 건축물·선박분과 일치">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "40%" }}>대상</th>
              <th style={th}>납기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>건축물 (소방분)</td>
              <td style={tdc}>7월 16일 ~ 7월 31일</td>
            </tr>
            <tr>
              <td style={tdHead}>선박 (소방분)</td>
              <td style={tdc}>7월 16일 ~ 7월 31일</td>
            </tr>
          </tbody>
        </table>
        <Insight>
          주택의 건축물 부분에 대한 소방분도 <strong>건축물 납기(7월)</strong>에 따른다. 재산세 주택분이 7월·9월로
          분할 고지되는 것과 달리, 소방분은 건축물 기준으로 한 번에 부과된다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 준용되는 그 밖의 규정">
        <SubSection title="● 물납·분할납부">
          <p>재산세의 물납(부동산) 및 분할납부 규정이 준용될 수 있다. 다만 소방분 단독으로는 금액이 작아 실무 적용은 제한적이다.</p>
        </SubSection>
        <SubSection title="● 소액 징수면제">
          <p>고지할 세액이 <strong>일정 금액 미만</strong>이면 재산세 소액 징수면제 규정에 준하여 징수하지 않는다.</p>
        </SubSection>
        <SubSection title="● 납세의무·비과세 등">
          <p>납세의무 성립·확정, 비과세, 부과제척기간 등 일반 사항도 재산세 및 지방세기본법의 규정을 따른다.</p>
        </SubSection>
      </CalcBox>
    </div>
  );
}

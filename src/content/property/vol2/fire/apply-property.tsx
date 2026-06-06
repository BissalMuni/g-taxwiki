"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };
const red = { color: "#cf1322", fontWeight: "bold" as const };

export default function ApplyProperty() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        소방분 지역자원시설세는 재산세 규정 중 <strong>제114조(과세기준일)·제115조(납기)·제122조(세부담의 상한)</strong>의
        각 호 외의 부분 본문을 준용한다. 실무상 재산세 고지서에 <strong>병기</strong>되어 함께 부과된다.
      </p>

      <CalcBox title="■ 준용되는 재산세 규정 (§114·§115·§122)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "30%" }}>준용 규정</th>
              <th style={th}>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>§114 과세기준일</td>
              <td style={td}>매년 <strong>6월 1일</strong> (재산세와 동일)</td>
            </tr>
            <tr>
              <td style={tdHead}>§115 납기</td>
              <td style={td}>건축물·선박분 재산세 납기와 동일 (건축물·선박: <strong>7월 16일~31일</strong>)</td>
            </tr>
            <tr>
              <td style={tdHead}>§122 세부담의 상한</td>
              <td style={td}>
                소방분 세부담 상한율은 <strong>일반건축물과 같이 <span style={red}>150%</span></strong>
                (직전 연도 세액 상당액의 150%)
              </td>
            </tr>
          </tbody>
        </table>
        <Insight>
          준용 범위는 위 <strong>3개 조문의 각 호 외의 부분 본문</strong>으로 한정된다. 부과 방식은 재산세와 같이
          과세관청이 세액을 산정·고지하는 <strong>보통징수</strong>이며, 재산세 고지서에 병기된다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 세부담 상한 — 일반건축물과 동일 150% (§122 준용)">
        <p>
          소방분 지역자원시설세도 직전 연도 세액 상당액 대비 당해 연도 세액의 증가를 제한한다. 상한율은
          <strong> 일반건축물 재산세와 동일한 150%</strong>로, 직전 연도 세액 상당액의 150%를 초과하는 부분은 과세하지
          않는다.
        </p>
        <table style={tbl}>
          <tbody>
            <tr>
              <td style={{ ...td, fontWeight: "bold", width: "46%" }}>세부담 상한액</td>
              <td style={tdc}>직전 연도 세액 상당액 × <strong>150%</strong></td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold", background: "#fff7e6" }}>결정세액</td>
              <td style={{ ...tdc, fontWeight: "bold", background: "#fff7e6", color: "#cf1322" }}>
                MIN(당해 연도 산출세액, 세부담 상한액)
              </td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 납기 — 재산세 건축물·선박분과 일치 (§115 준용)">
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
        <SubSection title="● 병기 고지">
          <p>
            소방분은 건축물·선박분 재산세 고지서에 <strong>병기</strong>되어 한 번에 부과된다. 재산세 주택분이 7월·9월로
            분할 고지되는 것과 달리, 소방분(건축물)은 건축물 납기(7월) 기준으로 부과된다.
          </p>
        </SubSection>
      </CalcBox>
    </div>
  );
}

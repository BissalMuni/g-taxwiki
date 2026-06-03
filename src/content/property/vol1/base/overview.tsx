"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 연도별 과세표준액 적용비율 (2005~2008) — 책 p123 */
const oldRatio: [string, string, string, string, string][] = [
  ["토지 및 건축물", "100분의 65", "100분의 60", "100분의 55", "100분의 50"],
  ["주택", "100분의 55", "100분의 50", "100분의 50", "100분의 50"],
];

export default function BaseOverview() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세의 과세표준은 원칙적으로 <strong>시가표준액</strong>을 적용한다. 다만 급격한 세부담의 급등을 방지하기 위하여
        시가표준액에 일정비율(<strong>공정시장가액비율</strong>)을 적용하여 재산세 과세표준을 산정한다(지법 §110).
      </p>

      <CalcBox title="■ 과세대상별 과세표준">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "22%" }}>과세대상</th>
              <th style={th}>과세표준 산정</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...tdc, fontWeight: "bold", backgroundColor: "#fafafa" }}>건축물(일반분)·사무실 등</td>
              <td style={td}>신축건물기준가액에 각종 지수를 적용하여 산출한 가액을 시가표준액으로 한다.</td>
            </tr>
            <tr>
              <td style={{ ...tdc, fontWeight: "bold", backgroundColor: "#fafafa" }}>주택</td>
              <td style={td}>
                건물과 토지를 통합하여 공시한 <strong>주택가격</strong>을 시가표준액으로 하여 공정시장가액비율을 곱한 값을
                과세표준으로 한다.
              </td>
            </tr>
            <tr>
              <td style={{ ...tdc, fontWeight: "bold", backgroundColor: "#fafafa" }}>토지</td>
              <td style={td}>
                <strong>개별공시지가</strong>를 적용한 토지가액에 공정시장가액비율을 적용하며, 시·군·구 관내에 소재한 토지를
                <strong>인별로 합산</strong>하여 과세한다.
              </td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 공정시장가액비율">
        <p>
          「공정시장가액비율」은 <strong>부동산시장 동향과 지방재정여건</strong>을 고려하여 법 제110조에서 정한 범위 내에서
          대통령령으로 정하는 과표적용 비율이다.
        </p>

        <SubSection title="● 연도별 과세표준액 적용비율 (2005~2008)">
          <table style={tbl}>
            <thead>
              <tr>
                <th style={{ ...th, width: "28%" }}>구분</th>
                <th style={th}>2008*</th>
                <th style={th}>2007</th>
                <th style={th}>2006</th>
                <th style={th}>2005</th>
              </tr>
            </thead>
            <tbody>
              {oldRatio.map((r) => (
                <tr key={r[0]}>
                  <td style={{ ...td, fontWeight: "bold" }}>{r[0]}</td>
                  <td style={tdc}>{r[1]}</td>
                  <td style={tdc}>{r[2]}</td>
                  <td style={tdc}>{r[3]}</td>
                  <td style={tdc}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SubSection>

        <SubSection title="● 연도별 공정시장가액비율 (2009~현재)">
          <table style={tbl}>
            <thead>
              <tr>
                <th style={{ ...th, width: "20%" }}>구분</th>
                <th style={th}>2008*</th>
                <th style={th}>2009~2021</th>
                <th style={th}>2022</th>
                <th style={th}>2023~</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...td, fontWeight: "bold" }}>토지 및 건축물</td>
                <td style={tdc}>−</td>
                <td style={tdc}>70%</td>
                <td style={tdc}>70%</td>
                <td style={tdc}>70%</td>
              </tr>
              <tr>
                <td style={{ ...td, fontWeight: "bold" }}>주택</td>
                <td style={tdc}>50%</td>
                <td style={tdc}>60%</td>
                <td style={td}>
                  1주택 <strong>45%</strong>
                  <br />
                  다주택 60%
                </td>
                <td style={td}>
                  1주택: 3억 이하 <strong>43%</strong> · 3억~6억 <strong>44%</strong> · 6억 초과 <strong>45%</strong>
                  <br />
                  다주택 60%
                </td>
              </tr>
            </tbody>
          </table>
          <Insight>
            <strong>2008* 소급적용</strong> — 공정시장가액비율은 2009.2.6. 지방세법 일부개정(법률 제9422호)으로 지방세에
            처음 도입되었으며, 2008년도 재산세(주택)분부터 소급 적용하도록 하였다(행정안전부 지방세운영과-172호,
            2009.1.13.).
          </Insight>
        </SubSection>
      </CalcBox>
    </div>
  );
}

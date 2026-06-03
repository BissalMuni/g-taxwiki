"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 주택의 과세대상 구분 — 법 §106 (책 p116) */
const rules: [string, string][] = [
  ["법 §106①1호", "1동(棟)의 건물이 주거·주거 외 용도로 함께 사용되면 주거용 부분만 주택으로 본다. 부속토지는 면적비율로 안분하여 주택/건축물 부속토지로 구분."],
  ["법 §106②1호", "1주택이 2개 이상 시·군에 걸치면 주거용 면적이 가장 큰 시·군에 있는 것으로 본다."],
  ["법 §106②2호", "허가 등이나 사용승인 없이 건축한 부분 면적이 전체의 100분의 50 이상이면 건축물 전체를 주택으로 보지 아니한다(→ 부속토지는 §106①1호 토지)."],
  ["법 §106③", "주택 부속토지의 경계가 명백하지 아니한 경우 범위 산정은 대통령령으로 정한다(영 §105: 바닥면적의 10배)."],
];

/** 건축법 시행령 §2 별표1 주택의 종류 (책 p117~119) */
const single: [string, string][] = [
  ["단독주택", "1세대가 독립 주거하는 일반 단독주택"],
  ["다중주택", "여러 사람이 장기 거주, 독립 주거형태 미갖춤(취사시설 ✗) / 바닥면적 합계 660㎡ 이하·주택 층수 3개 층 이하"],
  ["다가구주택", "주택 층수 3개 층 이하 / 바닥면적 합계 660㎡ 이하 / 19세대 이하 거주(공동주택 ✗)"],
  ["공관(公館)", "공적 용도의 주택"],
];
const multi: [string, string][] = [
  ["아파트", "주택으로 쓰는 층수 5개 층 이상"],
  ["연립주택", "1개 동 바닥면적 합계 660㎡ 초과 + 층수 4개 층 이하"],
  ["다세대주택", "1개 동 바닥면적 합계 660㎡ 이하 + 층수 4개 층 이하"],
  ["기숙사", "일반기숙사·임대형기숙사 (※재산세 주택에서는 제외 — 준주택·건축물로 과세)"],
];

export default function House() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        「주택」이란 「주택법」 §2 1호의 주택을 말한다(법 §104 3호). 주택은 <strong>건물 + 부속토지</strong>를 통합하여
        하나의 「재산세 주택」으로 7월·9월에 1/2씩 과세한다. 건물분은 건축물에서, 토지분은 부속토지에서 제외하여 이중과세를
        법으로 금지한다.
      </p>

      <CalcBox title="■ 정의 (법 §104 3호 / 주택법 §2 1호)">
        <p>
          「주택」이란 세대원이 장기간 독립된 주거생활을 할 수 있는 구조로 된 건축물의 전부 또는 일부 및 그 부속토지를
          말하며, <strong>단독주택</strong>과 <strong>공동주택</strong>으로 구분한다. 토지와 건축물의 범위에서 주택은 제외한다.
        </p>
        <Insight>
          별장·펜션 등은 그 구조 요건의 적합성에 불구하고 영업·숙박 목적이면 주택으로 보지 않는다 — 사실상 현황으로 판단.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 주택의 과세대상 구분 (법 §106)">
        <p className="text-muted">
          주택 재산세는 각 물건 단위별로 과세하므로 주택을 어떻게 구분하느냐에 따라 세부담이 달라진다. 다가구주택은
          1가구가 독립 구분사용하는 부분을 1구의 주택으로 보고, 부속토지는 건물 면적비율로 안분한다(영 §112).
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "20%" }}>근거</th>
              <th style={th}>내용</th>
            </tr>
          </thead>
          <tbody>
            {rules.map((r) => (
              <tr key={r[0]}>
                <td style={{ ...tdc, fontWeight: "bold", backgroundColor: "#fafafa" }}>{r[0]}</td>
                <td style={td}>{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "12px", color: "#888" }}>
          ※ 영 §105: 부속토지 경계가 명백하지 아니하면 주택 바닥면적의 10배를 부속토지로 한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 주택의 종류 (건축법 시행령 §2 별표1)">
        <SubSection title="● 단독주택">
          <table style={tbl}>
            <thead>
              <tr>
                <th style={{ ...th, width: "22%" }}>종류</th>
                <th style={th}>요건</th>
              </tr>
            </thead>
            <tbody>
              {single.map((r) => (
                <tr key={r[0]}>
                  <td style={{ ...td, fontWeight: "bold" }}>{r[0]}</td>
                  <td style={td}>{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SubSection>

        <SubSection title="● 공동주택">
          <table style={tbl}>
            <thead>
              <tr>
                <th style={{ ...th, width: "22%" }}>종류</th>
                <th style={th}>요건</th>
              </tr>
            </thead>
            <tbody>
              {multi.map((r) => (
                <tr key={r[0]}>
                  <td style={{ ...td, fontWeight: "bold" }}>{r[0]}</td>
                  <td style={td}>{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Insight>
            「주택법」상 공동주택에서 <strong>기숙사는 제외</strong>(지특법 §2 3호). 따라서 기숙사는 재산세 주택이 아닌
            준주택·건축물로 과세한다. 1층 전부를 필로티 구조 주차장으로 쓰면 그 층은 층수 산정에서 제외한다.
          </Insight>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 주요 사례 — 현황과세 원칙">
        <SubSection title="● 오피스텔의 「주택」해당 여부 (대법 2023두47435, 2023.11.16.)">
          <p>
            재산세 과세대상 물건이 공부상 현황과 사실상 현황이 다르면 <strong>사실상 현황</strong>에 따라 부과한다. 주택
            해당 여부는 공부상 용도와 관계없이 <strong>주거 용도로 사실상 사용</strong>되는지를 기준으로 판단한다.
          </p>
        </SubSection>
        <SubSection title="● 공부상 다가구주택을 펜션(숙박시설)으로 이용 (부동산세제과-1331, 2023.12.12.)">
          <p>
            숙박업 손님이 자고 머무를 수 있도록 서비스를 제공하는 형태를 계속하여 영리를 목적으로 사용하면, 주택이 아닌
            숙박시설로 보아 재산세를 과세한다(법 §106③, 사실상 현황 기준).
          </p>
        </SubSection>
      </CalcBox>
    </div>
  );
}

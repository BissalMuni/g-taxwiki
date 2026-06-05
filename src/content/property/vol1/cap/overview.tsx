"use client";

import { CalcBox, Insight } from "@/components/content/shared";

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
  lineHeight: 1.8,
};

/** 과세대상별 세부담 상한율 (지법 §122) */
const caps: [string, string, string][] = [
  ["토지", "150%", "직전 연도 세액 상당액의 150%"],
  ["건축물", "150%", "직전 연도 세액 상당액의 150%"],
  ["주택 (공시가격 3억원 이하)", "105%", "경과조치 — '24~'28년 한시"],
  ["주택 (3억원 초과 6억원 이하)", "110%", "경과조치 — '24~'28년 한시"],
  ["주택 (6억원 초과)", "130%", "경과조치 — '24~'28년 한시"],
];

export default function Overview() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        공시가격 급등으로 재산세가 급증하는 것을 막기 위해, 해당 연도 산출세액이 직전 연도 세액의 일정 비율을 넘지
        못하도록 제한하는 제도가 <strong>세부담의 상한</strong>이다(지법 §122, 영 §118). 토지·건축물은 현행 제도로
        유지되고, 주택은 <strong>2024년 과세표준 상한제로 전환</strong>되면서 세부담상한제는 폐지되었으나 5년간 한시
        운영된다.
      </p>

      <CalcBox title="■ 제도의 취지">
        <p>
          재산세 과세표준은 시가표준액(공시가격)에 연동되므로, 부동산 가격이 급등하면 보유 재산의 변동이 없어도
          세액이 크게 늘어난다. 이러한 급격한 세부담 증가로부터 납세자를 보호하기 위해, 직전 연도 세액을 기준으로
          금년 세액의 <strong>증가 한도(상한)</strong>를 설정한다.
        </p>
        <div style={formula}>
          <strong>결정세액</strong> = MIN(
          <br />
          &nbsp;&nbsp;&nbsp;① 해당 연도 산출세액,
          <br />
          &nbsp;&nbsp;&nbsp;② 직전 연도 해당 재산 세액 상당액 × 세부담 상한율
          <br />
          )
        </div>
        <p>
          즉, 금년에 정상적으로 계산한 산출세액(①)이 「직전 연도 세액 × 상한율」(②)을 초과하면, 그 초과분은 잘라내고
          <strong> ②를 결정세액</strong>으로 한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 과세대상별 세부담 상한율">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "44%" }}>과세대상</th>
              <th style={{ ...th, width: "16%" }}>상한율</th>
              <th style={th}>비고</th>
            </tr>
          </thead>
          <tbody>
            {caps.map((r) => (
              <tr key={r[0]}>
                <td style={{ ...td, fontWeight: "bold" }}>{r[0]}</td>
                <td style={tdc}>{r[1]}</td>
                <td style={td}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 주택의 상한율은 폐지 전 종전 규정(지법 §122 개정 전)에 따른 공시가격 구간별 비율로, 경과조치 기간 동안
          적용된다.
        </p>
      </CalcBox>

      <CalcBox title="■ 주택 — 과세표준 상한제로 전환 (2024년~)">
        <p>
          주택 재산세 세부담상한제는 <strong>과세표준 상한제</strong>(지법 §110③) 도입과 함께 폐지되었다. 다만 급격한
          세부담 증가를 방지하기 위해 <strong>5년간('24년~'28년) 한시 운영</strong>한다(부칙 법률 제19230호 §15).
        </p>
        <Insight>
          전환의 핵심: 세부담상한제는 「산출세액」을 사후적으로 제한하는 제도이고, 과표상한제는 「과세표준」 단계에서
          증가를 직접 제한하는 제도다. 경과조치 기간에는 <strong>두 제도를 모두 계산해 더 낮은 세액</strong>을 적용한다.
        </Insight>
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li>
            토지·건축물: 세부담상한제 <strong>현행 유지</strong>(150%).
          </li>
          <li>
            주택: '28년까지 세부담상한제 한시 적용 + 과표상한제 병행 → <strong>둘 중 작은 세액</strong>.
          </li>
          <li>
            <strong>새로 취득한 주택</strong>은 직전 연도 세액 상당액이 없거나 비교 실익이 작아 과표상한제만 적용한다.
          </li>
        </ul>
      </CalcBox>

      <Insight>
        세부담 상한은 「세율을 적용해 산출한 세액」 다음 단계에서 작동하는 <strong>세액 조정 장치</strong>다. 따라서 비
        과세·감면·도시지역분 등과의 적용 순서를 정확히 이해해야 결정세액이 맞는다(구체적 계산은 다음 단원 참조).
      </Insight>
    </div>
  );
}

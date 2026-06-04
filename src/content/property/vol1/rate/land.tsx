"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 종합합산 누진세율 (책 p131) */
const general: [string, string, string][] = [
  ["5천만원 이하", "1,000분의 2", "과세표준액 × 0.2%"],
  ["5천만원 초과 1억원 이하", "10만원 + 5천만원 초과금액의 1,000분의 3", "과세표준액 × 0.3% − 50,000원"],
  ["1억원 초과", "25만원 + 1억원 초과금액의 1,000분의 5", "과세표준액 × 0.5% − 250,000원"],
];

/** 별도합산 누진세율 (책 p131) */
const special: [string, string, string][] = [
  ["2억원 이하", "1,000분의 2", "과세표준액 × 0.2%"],
  ["2억원 초과 10억원 이하", "40만원 + 2억원 초과금액의 1,000분의 3", "과세표준액 × 0.3% − 200,000원"],
  ["10억원 초과", "2백80만원 + 10억원 초과금액의 1,000분의 4", "과세표준액 × 0.4% − 1,200,000원"],
];

/** 분리과세 비례세율 (책 p132) */
const separate: [string, string][] = [
  ["전·답·과수원·목장용지·임야", "과세표준액 × 0.07%"],
  ["회원제골프장 및 고급오락장용 토지", "과세표준액 × 4%"],
  ["이외의 기타 토지", "과세표준액 × 0.2%"],
];

function ProgressiveTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <table style={tbl}>
      <thead>
        <tr>
          <th style={{ ...th, width: "28%" }} rowSpan={2}>과세표준</th>
          <th style={th} colSpan={2}>세 율</th>
        </tr>
        <tr>
          <th style={th}>표준</th>
          <th style={{ ...th, width: "30%" }}>간이</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r[0]}>
            <td style={{ ...td, fontWeight: "bold" }}>{r[0]}</td>
            <td style={td}>{r[1]}</td>
            <td style={tdc}>{r[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function RateLand() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        토지분 재산세는 과세대상 분류(종합합산·별도합산·분리과세)에 따라 세율 체계가 다르다. 합산과세 대상은
        <strong> 3단계 초과누진세율</strong>, 분리과세 대상은 <strong>단일 비례세율</strong>을 적용한다.
      </p>

      <CalcBox title="■ 종합합산 과세대상 — 3단계 초과누진">
        <p className="text-muted">
          시·군·구 관할구역 안에 소재하는 토지를 소유자별로 합산한 가액에 적용한다.
        </p>
        <ProgressiveTable rows={general} />
      </CalcBox>

      <CalcBox title="■ 별도합산 과세대상 — 3단계 초과누진">
        <p className="text-muted">
          시·군·구 관할구역 안에 소재하는 토지를 소유자별로 합산한 가액에 적용한다.
        </p>
        <ProgressiveTable rows={special} />
      </CalcBox>

      <CalcBox title="■ 분리과세대상 토지 — 단일 비례세율">
        <p className="text-muted">
          분리과세대상 토지의 가액을 과세표준으로 하여 과세구분에 맞는 해당 세율을 적용한다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>과세구분</th>
              <th style={{ ...th, width: "32%" }}>세율</th>
            </tr>
          </thead>
          <tbody>
            {separate.map((r) => (
              <tr key={r[0]}>
                <td style={{ ...td, fontWeight: "bold" }}>{r[0]}</td>
                <td style={tdc}>{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Insight>
          분리과세 저율(0.07%)은 농지·목장·임야 등, 고율(4%)은 회원제골프장·고급오락장용 토지, 나머지 일반 분리과세
          토지는 0.2%가 적용된다.
        </Insight>
      </CalcBox>

      <SubSection title="● 간이세율 = 누진공제 방식">
        <p>
          「간이세율」은 누진세율을 단일 계산식으로 변환한 것이다. 예컨대 종합합산 1억원 초과는 「과세표준액 × 0.5% −
          250,000원」으로, 표준 누진식 「25만원 + 1억원 초과금액 × 0.5%」와 동일한 결과를 준다.
        </p>
      </SubSection>
    </div>
  );
}

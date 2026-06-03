"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "middle" as const };
const tdc = { ...td, textAlign: "center" as const };
const rate = { color: "#1890ff", fontWeight: "bold" as const };

/** 누진 3단 표: 과세표준 | 표준(또는 특례) | 간이 */
type Bracket = { base: string; std: string; simple: string };
function BracketTable({ rows, stdLabel = "표준" }: { rows: Bracket[]; stdLabel?: string }) {
  return (
    <table style={tbl}>
      <thead>
        <tr>
          <th style={{ ...th, width: "28%" }} rowSpan={2}>과세표준</th>
          <th style={th} colSpan={2}>세율</th>
        </tr>
        <tr>
          <th style={{ ...th, width: "40%" }}>{stdLabel}</th>
          <th style={{ ...th, width: "32%" }}>간이</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.base}>
            <td style={tdc}>{r.base}</td>
            <td style={td}>{r.std}</td>
            <td style={td}>{r.simple}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** 2단 표: 과세구분 | 세율 */
type Pair = { kind: string; rate: string };
function PairTable({ rows }: { rows: Pair[] }) {
  return (
    <table style={tbl}>
      <thead>
        <tr>
          <th style={{ ...th, width: "60%" }}>과세구분</th>
          <th style={th}>세율</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.kind}>
            <td style={td}>{r.kind}</td>
            <td style={tdc}><span style={rate}>{r.rate}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const landGeneral: Bracket[] = [
  { base: "5천만원 이하", std: "1,000분의 2", simple: "과세표준액 × 0.2%" },
  { base: "5천만원 초과 1억원 이하", std: "10만원 + 5천만원 초과금액의 1,000분의 3", simple: "과세표준액 × 0.3% − 50,000원" },
  { base: "1억원 초과", std: "25만원 + 1억원 초과금액의 1,000분의 5", simple: "과세표준액 × 0.5% − 250,000원" },
];
const landSpecial: Bracket[] = [
  { base: "2억원 이하", std: "1,000분의 2", simple: "과세표준액 × 0.2%" },
  { base: "2억원 초과 10억원 이하", std: "40만원 + 2억원 초과금액의 1,000분의 3", simple: "과세표준액 × 0.3% − 200,000원" },
  { base: "10억원 초과", std: "280만원 + 10억원 초과금액의 1,000분의 4", simple: "과세표준액 × 0.4% − 1,200,000원" },
];
const landSeparate: Pair[] = [
  { kind: "전·답·과수원·목장용지·임야", rate: "0.07%" },
  { kind: "회원제골프장·고급오락장용 토지", rate: "4%" },
  { kind: "이외의 기타 토지", rate: "0.2%" },
];
const building: Pair[] = [
  { kind: "고급오락장용 건축물", rate: "4%" },
  { kind: "시(주거·상업·녹지지역) 내 공장 건축물", rate: "0.5%" },
  { kind: "과밀억제권역 내 공장용 건축물", rate: "1.25%" },
  { kind: "그 밖의 건축물", rate: "0.25%" },
];
const house: Bracket[] = [
  { base: "6천만원 이하", std: "1,000분의 1", simple: "과세표준액 × 0.1%" },
  { base: "6천만원 초과 1.5억원 이하", std: "6만원 + 6천만원 초과금액의 1,000분의 1.5", simple: "과세표준액 × 0.15% − 30,000원" },
  { base: "1.5억원 초과 3억원 이하", std: "19만5천원 + 1.5억원 초과금액의 1,000분의 2.5", simple: "과세표준액 × 0.25% − 180,000원" },
  { base: "3억원 초과", std: "57만원 + 3억원 초과금액의 1,000분의 4", simple: "과세표준액 × 0.4% − 630,000원" },
];
const houseSpecial: Bracket[] = [
  { base: "6천만원 이하", std: "1,000분의 0.5", simple: "과세표준액 × 0.05%" },
  { base: "6천만원 초과 1.5억원 이하", std: "3만원 + 6천만원 초과금액의 1,000분의 1", simple: "과세표준액 × 0.1% − 30,000원" },
  { base: "1.5억원 초과 3억원 이하", std: "12만원 + 1.5억원 초과금액의 1,000분의 2", simple: "과세표준액 × 0.2% − 180,000원" },
  { base: "3억원 초과", std: "42만원 + 3억원 초과금액의 1,000분의 3.5", simple: "과세표준액 × 0.35% − 630,000원" },
];
const fire: Bracket[] = [
  { base: "600만원 이하", std: "10,000분의 4", simple: "과세표준액 × 0.04%" },
  { base: "600만원 초과 1,300만원 이하", std: "2,400원 + 600만원 초과금액 × 5/10,000", simple: "과세표준액 × 0.05% − 600원" },
  { base: "1,300만원 초과 2,600만원 이하", std: "5,900원 + 1,300만원 초과금액 × 6/10,000", simple: "과세표준액 × 0.06% − 1,900원" },
  { base: "2,600만원 초과 3,900만원 이하", std: "13,700원 + 2,600만원 초과금액 × 8/10,000", simple: "과세표준액 × 0.08% − 7,100원" },
  { base: "3,900만원 초과 6,400만원 이하", std: "24,100원 + 3,900만원 초과금액 × 10/10,000", simple: "과세표준액 × 0.1% − 14,900원" },
  { base: "6,400만원 초과", std: "49,100원 + 6,400만원 초과금액 × 12/10,000", simple: "과세표준액 × 0.12% − 27,700원" },
];

export default function RateTable() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세 과세대상별 세율 일람. 누진세율은 <strong>표준식</strong>(구간 누적)과 그와 동일한 <strong>간이식</strong>(누진공제)으로
        함께 표기한다.
      </p>

      <CalcBox title="■ 1. 재산세(토지)">
        <SubSection title="● 1) 종합합산 과세대상">
          <BracketTable rows={landGeneral} />
        </SubSection>
        <SubSection title="● 2) 별도합산 과세대상">
          <BracketTable rows={landSpecial} />
        </SubSection>
        <SubSection title="● 3) 분리과세대상">
          <PairTable rows={landSeparate} />
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 2. 재산세(건축물)">
        <PairTable rows={building} />
      </CalcBox>

      <CalcBox title="■ 3. 재산세(주택) — 지방세법 제111조 제1항 제3호">
        <BracketTable rows={house} />
      </CalcBox>

      <CalcBox title="■ 4. 1세대1주택자(9억원 이하) 특례세율 — 지방세법 제111조의2">
        <BracketTable rows={houseSpecial} stdLabel="특례" />
        <Insight>표준 주택세율(0.1~0.4%)보다 각 구간 세율을 낮춘 특례. 공시가격 9억원 이하 1세대 1주택에 적용된다.</Insight>
      </CalcBox>

      <CalcBox title="■ 5. 소방분 지역자원시설세">
        <BracketTable rows={fire} />
      </CalcBox>

      <CalcBox title="■ 6. 재산세 도시지역분">
        <p>
          과세표준액 × <span style={rate}>0.14%</span>
        </p>
      </CalcBox>
    </div>
  );
}

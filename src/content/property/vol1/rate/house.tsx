"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 일반 주택 누진세율 (책 p133) */
const standard: [string, string, string][] = [
  ["6천만원 이하", "1,000분의 1", "과세표준액 × 0.1%"],
  ["6천만원 초과 1.5억원 이하", "6만원 + 6천만원 초과금액의 1,000분의 1.5", "과세표준액 × 0.15% − 30,000원"],
  ["1.5억원 초과 3억원 이하", "19만5천원 + 1.5억원 초과금액의 1,000분의 2.5", "과세표준액 × 0.25% − 180,000원"],
  ["3억원 초과", "57만원 + 3억원 초과금액의 1,000분의 4", "과세표준액 × 0.4% − 630,000원"],
];

/** 1세대 1주택 특례세율 (책 p133) */
const special: [string, string, string][] = [
  ["6천만원 이하", "1,000분의 0.5", "과세표준액 × 0.05%"],
  ["6천만원 초과 1.5억원 이하", "3만원 + 6천만원 초과금액의 1,000분의 1", "과세표준액 × 0.1% − 30,000원"],
  ["1.5억원 초과 3억원 이하", "12만원 + 1.5억원 초과금액의 1,000분의 2", "과세표준액 × 0.2% − 180,000원"],
  ["3억원 초과", "42만원 + 3억원 초과금액의 1,000분의 3.5", "과세표준액 × 0.35% − 630,000원"],
];

function RateTable({ rows, head }: { rows: [string, string, string][]; head: string }) {
  return (
    <table style={tbl}>
      <thead>
        <tr>
          <th style={{ ...th, width: "28%" }} rowSpan={2}>과세표준</th>
          <th style={th} colSpan={2}>{head}</th>
        </tr>
        <tr>
          <th style={th}>세율</th>
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

const lnk = { color: "#1890ff", textDecoration: "none" as const };

export default function RateHouse() {
  return (
    <div className="space-y-8">
      <CalcBox title="■ 일반 주택 — 4단계 초과누진">
        <p className="text-muted">
          주택별로 아래 세율을 적용한다. 2인 이상 공동소유이거나 토지·건물 소유자가 다른 경우, 토지·건물 가액을 합산한
          과세표준에 「그 밖의 주택」 세율(
          <a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noreferrer" style={lnk}>§111①3호 나목</a>)을 적용한다.
        </p>
        <RateTable rows={standard} head="세 율" />
      </CalcBox>

      {/* 특례세율표 + 요건을 하나의 CalcBox로 통합 */}
      <CalcBox title="■ 1세대 1주택 세율특례 (지법 §111의2, 영 §110의2)">
        <SubSection title="● 특례세율 (공시가격 9억원 이하)">
          <RateTable rows={special} head="특례세율" />
          <Insight>
            전 구간 표준세율 대비 <strong>0.05%p 인하</strong>. 서민 주거안정을 위해 적용기간을{" "}
            <strong>'26년까지 연장</strong>(부칙 법률 제17769호, 시행일부터 6년간).
          </Insight>
        </SubSection>

        <SubSection title="● 1세대의 범위 (영 §110의2①)">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>「주민등록법」상 같은 주소에서 생계를 같이하는 자의 집단</li>
            <li>배우자·19세 미만 미혼자녀 → 주소를 달리해도 <strong>같은 세대</strong></li>
            <li>형식적 세대분리를 통한 편법 1주택 보유자 → 특례 <strong>제외</strong></li>
            <li>65세 이상 직계존속 봉양 합가 → <strong>독립 세대</strong> 인정</li>
            <li>국외이주 후 친지 세대에 형식상 주소를 둔 경우 → <strong>독립 세대</strong> 인정</li>
          </ul>
        </SubSection>

        <SubSection title="● 주택 수 산정 — 제외 대상 (영 §110의2②③)">
          <p>각 세대원 소유 주택 수를 합산하되(지분·부속토지만 소유해도 1주택), 아래는 <strong>제외</strong>한다.</p>
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>상속주택: 상속개시일부터 <strong>5년</strong> (이후 주된 상속인 지분 기준)</li>
            <li>사원주택·가정어린이집·문화재주택·임대등록주택 (사업용·투기 무관)</li>
            <li>혼인 전 소유 주택: 혼인일부터 <strong>5년</strong></li>
            <li>권원 없는 자가 무단건축하여 사용하는 주택</li>
            <li>인구감소지역 소재 시가표준액 <strong>4억원 이하</strong> 주택 ('24.1.4.∼'26.12.31. 유상취득)</li>
          </ul>
        </SubSection>

        <SubSection title="● 인구감소지역의 범위">
          <p>
            「<a href="https://www.law.go.kr/법령/인구감소지역지원특별법" target="_blank" rel="noreferrer" style={lnk}>인구감소지역 지원 특별법</a>」
            {" "}§2② 및 행정안전부 고시에 따라 지정한다.
            다음 지역은 <strong>인구감소지역에서 제외</strong>되므로 주택 수 산정 혜택이 적용되지 않는다
            (<a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noreferrer" style={lnk}>지법 §111의2③</a> 2의2호):
          </p>
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>수도권 전역 — 서울특별시·인천광역시·경기도 (<a href="https://www.law.go.kr/법령/수도권정비계획법" target="_blank" rel="noreferrer" style={lnk}>수도권정비계획법 §2①</a>)</li>
            <li>특례시 — 수원·고양·용인·창원 등 인구 100만 이상 도시 (<a href="https://www.law.go.kr/법령/지방자치법" target="_blank" rel="noreferrer" style={lnk}>지방자치법 §198</a>)</li>
            <li>광역시 소속 구(區) 지역 <span style={{ fontSize: "12px", color: "#888" }}>(단, 광역시 소속 군(郡)은 포함됨)</span></li>
          </ul>
          <p style={{ fontSize: "12px", color: "#888", marginTop: "6px" }}>
            ※ 구체적인 지정 시·군 목록은 행정안전부 고시(인구감소지역 지정·고시) 참조.
            2023년 기준 89개 시·군 지정 (강원·경북·전남·전북·경남 내륙·농촌 지역 중심).
          </p>
        </SubSection>

        <SubSection title="● 주택 수 제외 시 1세대 1주택 판단">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>문화재주택·상속주택·혼인 전 주택·인구감소지역 주택이 포함된 경우:
              {" "}<strong>시가표준액이 높은 주택</strong>을 1세대 1주택으로 보아 특례세율 적용</li>
            <li>제외 대상 주택만 여러 개인 경우 → 특례 적용 대상 없음</li>
          </ul>
          <p style={{ fontSize: "12px", color: "#888" }}>
            ※ 무허가 주택 부속토지 관련 1세대 특례 적용 질의회신 (행정자치부 부동산세제과-3654, 2024.10.24.)
          </p>
        </SubSection>
      </CalcBox>
    </div>
  );
}

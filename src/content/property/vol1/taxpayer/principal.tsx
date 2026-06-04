"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", textAlign: "center" as const };

/** '26년 용도별 건물신축가격기준액 (원/㎡) */
const buildPrice: [string, string, string, string, string][] = [
  ["1", "주거용 건물", "820,000", "840,000", "860,000"],
  ["2", "상업용 건물", "810,000", "830,000", "860,000"],
  ["3", "공업용 건물", "800,000", "820,000", "840,000"],
  ["4", "농수산용 건물", "610,000", "630,000", "640,000"],
  ["5", "문화·복지·교육용 건물", "820,000", "840,000", "860,000"],
  ["6", "공공용 건물", "810,000", "830,000", "850,000"],
  ["7", "그 외 건물", "(삭제)", "(삭제)", "(삭제)"],
];

/** 사례·판례 */
type Case = { title: string; cite: string; gist: string };
const cases: Case[] = [
  { title: "임시사용 승인된 미준공 아파트의 재산세 납세의무자", cite: "행안부 부동산세제과-1808, 2021.7.5.", gist: "미준공이라도 과세기준일 전 임시사용승인을 받아 사실상 소유·사용·수익하면 재산세 납세의무가 있다." },
  { title: "아파트 분양계약자가 잔금 미지급한 경우", cite: "행안부 부동산세제과-1277, 2019.12.19.", gist: "잔금 미지급이라도 과세기준일 현재 사실상 소유 여부로 판단한다." },
  { title: "점유취득시효 완성에 따른 재산세 납세의무", cite: "서울시 세제과-11802, 2019.8.21.", gist: "점유취득시효 완성(2002.7.1.)을 원인으로 토지를 취득한 사실이 확인되면, 그 토지를 점유취득한 자가 사실상 소유자이다." },
  { title: "진정명의 회복 이행 과정에서의 납세의무자·부과취소", cite: "행안부 부동산세제과-1278, 2019.12.19.", gist: "재산세는 매년 독립적으로 납세의무가 발생하므로, 사실상 소유권 이전 시점·등기 여부와 증거자료로 판단한다." },
  { title: "재개발구역 내 조합원이 공동주택 분양계약 체결 시 부과 기준", cite: "행안부 부동산세제과-1386, 2021.5.25.", gist: "관리처분계획에 따라 조합원이 분양계약을 체결한 경우, 부과 기준은 종전 토지(권리가액)이다." },
  { title: "합유자 사망에 따른 재산세 납세의무 승계 여부", cite: "행안부 지방세운영과-2111, 2019.7.12.", gist: "합유는 특별한 약정이 없으면 잔존 합유자에게 귀속되므로, 사망 합유자 지분의 재산세 납세의무는 상속인에게 승계되지 않는다." },
  { title: "분양금 잔액 은행융자 대환 전 입주, 과세기준일 현재 대환 미완료 시", cite: "대법 93누22043, 1994.11.11.", gist: "입주·사용수익 등 사실상 소유 여부를 기준으로 납세의무자를 판단한다." },
  { title: "경매목적물로 평가되지 않은 증축부분의 납세의무자", cite: "행안부 지방세운영과-4638, 2011.9.30.", gist: "증축분이 경매 평가에서 제외(불법증축)되어 낙찰자가 취득하지 못했어도 과세기준일 현재 사실상 소유 여부로 판단한다." },
  { title: "공유물분할 판결 관련 납세의무자", cite: "행안부 부동산세제과-3362, 2020.12.2.", gist: "판결 확정 전에는 분할 등기가 이행되지 않아 소유권 변동이 없으므로 공부상 소유자(등기) 기준이다." },
  { title: "소유권 이전 법원 결정은 과세기준일 이전 확정, 등기는 이후인 경우", cite: "감심 2011-36, 2011.3.3.", gist: "결정 확정으로 사실상 소유권이 이전되므로, 과세기준일 이전 결정이 확정된 자가 납세의무자이다." },
  { title: "임시사용승인된 미준공 아파트 — 입주금 90% 납부·사용수익", cite: "행안부 부동산세제과-2015, 2024.6.17.", gist: "입주금의 90%를 납부·사용수익하더라도 일반분양자가 아니라 조합이 납세의무자이다." },
];

export default function Principal() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세 과세기준일(6.1) 현재 재산을 <strong>사실상 소유하고 있는 자</strong>가 납세의무자다. 공부상 등재 여부와
        무관하게 실질적 소유권을 기준으로 판단한다.
      </p>

      <CalcBox title="■ 1. 관련규정 (지방세법 제107조제1항)">
        <SubSection title="● 가. 사실상 소유자">
          <p>
            공부상 소유·등재 여부를 <strong>불문</strong>하고 해당 재산에 대한 실질적 소유권을 가진 자를 말한다
            (대판 2006.3.23. 2005두15045). 매매대금을 완납하고 소유권이전등기를 하지 않은 경우, 증여계약을 체결하고
            이전등기를 하지 않은 경우 등도 포함한다.
          </p>
          <p>
            2004.12.31.까지는 과세대장에 등재된 자에게 부담시키는 것이 원칙이었으나, 2005.1.5. 보유세제 전면 개정 시{" "}
            <strong>과세대장 등재 명의에 불구하고 사실상 소유자</strong>에게 납세의무가 있는 것으로 변경되었다.
          </p>
          <Insight>
            ※ <strong>과세기준일 현재</strong>는 과세기준일 오전 0시부터로 본다. 0시~24시에 소유권이 변경되면 당해
            과세물건의 <strong>양수인</strong>이 납세의무자다.
          </Insight>
        </SubSection>

        <SubSection title="● 나. 공유재산의 납세의무자">
          <p>
            과세기준일 현재 재산을 사실상 공유하는 경우 그 지분에 해당하는 부분에 대해 <strong>지분권자</strong>를
            납세의무자로 본다. 지분 표시가 없으면 지분이 <strong>균등</strong>한 것으로 본다.
          </p>
          <p>
            주택의 건물과 부속토지의 소유자가 다른 경우, 주택 산출세액을 지방세법 제4조 제1·2항에 따른 건축물·부속토지의{" "}
            <strong>시가표준액 비율로 안분</strong>한 부분에 대해 각 소유자를 납세의무자로 본다.
          </p>
        </SubSection>

        <SubSection title="● 시가표준액 산정과 건물신축가격기준액">
          <p>
            토지 시가표준액 = <strong>면적 × 개별공시지가</strong>, 건물 시가표준액 ={" "}
            <strong>건물신축가격 기준액 × 구조·용도·위치 × 잔존가치율 × 가감산율</strong>.
          </p>
          <table style={tbl}>
            <thead>
              <tr>
                <th style={{ ...th, width: "8%" }}>번호</th>
                <th style={{ ...th, textAlign: "left", width: "40%" }}>용도별 건물</th>
                <th style={th}>2024년</th>
                <th style={th}>2025년</th>
                <th style={th}>2026년</th>
              </tr>
            </thead>
            <tbody>
              {buildPrice.map((r) => (
                <tr key={r[0]}>
                  <td style={td}>{r[0]}</td>
                  <td style={{ ...td, textAlign: "left" }}>{r[1]}</td>
                  <td style={td}>{r[2]}</td>
                  <td style={td}>{r[3]}</td>
                  <td style={td}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: "12px", color: "#888" }}>※ 단위: 원/㎡. 건물신축가격 기준액 추이 '18년 698,000 → '23년 810,000.</p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 2. 사례 및 판례">
        <p className="text-muted">사실상 소유자 판단이 문제된 주요 유권해석·판례. 결론 위주.</p>
        <div className="space-y-3">
          {cases.map((c, i) => (
            <div key={i} style={{ borderLeft: "3px solid #1890ff", paddingLeft: "10px" }}>
              <p style={{ margin: "0 0 2px", fontWeight: "bold" }}>
                {c.title} <span style={{ fontWeight: "normal", fontSize: "12px", color: "#888" }}>({c.cite})</span>
              </p>
              <p style={{ margin: 0 }}>{c.gist}</p>
            </div>
          ))}
        </div>
      </CalcBox>
    </div>
  );
}

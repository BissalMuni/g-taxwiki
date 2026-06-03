"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const, whiteSpace: "nowrap" as const };

/** §107② 각 호 */
const clauses: [string, string, string][] = [
  ["제1호", "공부상 소유자가 매매 등으로 소유권이 변동됐는데 신고하지 않아 사실상 소유자를 알 수 없을 때", "공부상 소유자"],
  ["제2호", "상속 개시 재산으로 상속등기가 안 됐고 사실상 소유자 신고도 없을 때", "주된 상속자"],
  ["제3호", "공부상 개인 명의의 사실상 종중재산을 종중소유로 신고하지 않았을 때", "공부상 소유자"],
  ["제4호", "국가·지자체·지자체조합이 연부(年賦) 매매계약하고 사용권을 무상으로 받은 경우", "매수계약자"],
  ["제5호", "「신탁법」에 따라 수탁자 명의로 등기·등록된 신탁재산", "위탁자"],
  ["제6호", "도시개발(환지방식)·정비사업에서 체비지·보류지로 정한 재산", "사업시행자"],
  ["제7호", "외국인 소유 항공기·선박을 임차하여 수입하는 경우 (2019.1.1. 신설)", "수입하는 자"],
  ["제8호", "파산선고 후 종결 결정 시까지 파산재단에 속하는 재산", "공부상 소유자"],
];

/** 판례·사례 */
type Case = { title: string; cite: string; gist: string };
const cases: Case[] = [
  { title: "환지 예정지로 지정된 토지의 재산세 납세의무자", cite: "행안부 부동산세제과-872, 2020.4.21.", gist: "환지처분 전 환지 예정지는 종전 토지 소유자가 납세의무자다." },
  { title: "과세기준일 미등기 상속물건의 주된 상속인 납세의무 여부", cite: "감사원 2022-심사-377, 2022.10.17.", gist: "상속등기·사실상 소유자 신고가 없으면 주된 상속자에게 부과함이 적법하다." },
  { title: "사실상의 소유자 범위", cite: "대법원 2005두14493, 2006.5.25.", gist: "매매로 사실상 소유권을 취득한 자가 납세의무자다." },
  { title: "무상 사용승낙을 받았으나 독자적 사용·수익 권리가 없는 경우", cite: "대법원 2013두15675, 2014.4.24.", gist: "독자적 사용·수익 권리가 없으면 납세의무자로 볼 수 없다." },
  { title: "상속재산의 재산세 납세의무자", cite: "대법원 2012두12226, 2014.3.27.", gist: "상속 개시 후 사실상 소유자(주된 상속자 등) 기준으로 판단한다." },
  { title: "체비지와 보류지의 구분", cite: "헌법재판소 2005헌바82, 2006.5.25.", gist: "보류지에는 공공시설 토지도 포함되는 것으로 본다." },
  { title: "한정승인 후 사실상 소유자로 보아 부과한 재산세의 당부", cite: "조심 2013, 2013.11.11.", gist: "한정승인이라도 사실상 소유자로 보아 부과함이 적법하다." },
  { title: "매입액 미지급 환지예정 초과토지에 대한 재산세 납세의무", cite: "조심 2015지1775, 2016.1.27.", gist: "환지예정 초과토지의 매입액 미지급 시 납세의무 귀속을 사실상 소유로 판단한다." },
  { title: "상속 개시된 재산의 재산세 납세의무자", cite: "행안부 부동산세제과-1211, 2020.6.1.", gist: "상속등기 전이라도 주된 상속자 등 사실상 소유자에게 부과한다." },
  { title: "환지예정지로 지정된 토지건물 멸실과 별도합산 대상인지 여부", cite: "대법원 2023두30529, 2023.4.27.", gist: "환지예정지 지정·멸실 사정을 과세기준일 현황으로 판단한다." },
  { title: "연부취득 재산의 실제 사용여부에 따른 재산세 납세의무", cite: "지방세운영과-4633, 2010.10.1.", gist: "무상 사용권을 부여받았더라도 실제 사용 여부로 납세의무를 판단한다." },
  { title: "환지지분 공고 전 체비지 납세의무자", cite: "법제처 08-0413, 2009.1.28.", gist: "환지처분 공고 전이면 종전 토지 소유자가 납세의무자다." },
];

export default function Exceptional() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        납세의무자는 원칙적으로 <strong>사실상 소유자</strong>(§107①)이나, 사실상 소유자를 알 수 없는 등 일정한 경우에는
        지방세법 제107조제2항 각 호의 자를 납세의무자로 본다.
      </p>

      <CalcBox title="■ 1. 관계법령 (지방세법 제107조제2항)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "12%" }}>호</th>
              <th style={th}>경우</th>
              <th style={{ ...th, width: "20%" }}>납세의무자</th>
            </tr>
          </thead>
          <tbody>
            {clauses.map((c) => (
              <tr key={c[0]}>
                <td style={tdc}>{c[0]}</td>
                <td style={td}>{c[1]}</td>
                <td style={{ ...tdc, color: "#1890ff", fontWeight: "bold" }}>{c[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <SubSection title="● 주된 상속자(제2호) — 판단 기준">
          <p>
            ① 「민법」상 상속지분이 가장 높은 사람, ② 그가 둘 이상이면 그 중 <strong>나이가 가장 많은 사람</strong>(시칙 §53).
            상속등기 전 상속자가 지분에 따라 신고하면 그 신고가 우선한다(운영예규 §107-7).
          </p>
          <p style={{ color: "#595959" }}>
            ※ 「민법」 §1000 상속 순위: ①직계비속 ②직계존속 ③형제자매 ④4촌 이내 방계혈족 / §1003 배우자는 1·2순위와 동순위
            공동상속(없으면 단독상속).
          </p>
        </SubSection>

        <SubSection title="● 신탁재산(제5호) — 위탁자가 납세의무자">
          <p>
            「신탁법」 §2에 따라 수탁자 명의로 등기·등록된 신탁재산은 제1항에도 불구하고 <strong>위탁자</strong>가 납세의무자다
            (위탁자가 신탁재산을 소유한 것으로 봄). 지역·직장주택조합이 조합원 납부 금전으로 매수·소유한 신탁재산은 해당 조합을
            위탁자로 본다.
          </p>
        </SubSection>

        <SubSection title="● 체비지·보류지(제6호) — 사업시행자">
          <p>
            도시개발법 환지방식 사업·정비사업에서 일정 토지를 환지로 정하지 않고 <strong>체비지·보류지</strong>로 정한 경우
            사업시행자가 납세의무를 진다. 체비지·보류지는 사업경비 충당 등을 위해 환지로 정하지 않고 시행자가 매각처분할 수
            있도록 남겨둔 토지다(도시개발법 §32·§42·§44 등).
          </p>
          <Insight>제6호 정비사업 범위에서 주거환경개선사업·주택재건축사업은 제외됨에 유의한다.</Insight>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 2. 주요 판례·사례">
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

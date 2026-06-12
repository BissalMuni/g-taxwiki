"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };

/** 대표 표본 (종로구 일부) */
const SAMPLE: string[][] = [
  ["1", "종로구", "재개발(도시정비형)", "돈의문1구역 도시환경정비사업조합", "교남동 62-1", "조합해산", "운영"],
  ["4", "종로구", "재개발(도시정비형)", "사직제2구역 도시환경정비사업 조합", "사직동 311-10", "사업시행인가", "운영"],
  ["5", "종로구", "가로주택정비", "숭인동 61번지 일대 가로주택정비사업", "숭인동 61-103", "조합설립인가", "운영"],
  ["7", "종로구", "재개발(주택정비형)", "신영제1구역 주택재개발정비사업조합", "신영동 158-2", "철거", "운영"],
  ["8", "종로구", "재개발(주택정비형)", "창신동 23일대 주택정비형 재개발구역", "창신동 23-2", "정비구역지정", "운영"],
  ["12", "종로구", "재건축", "금강하이츠빌라 주택재건축사업", "평창동 64-3", "안전진단", "운영"],
];

export default function ReferenceSeoulStatus() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        서울특별시 정비사업 현황 데이터(자치구별 사업장 목록)이다. 원본 책자는 약 1,000여 개 사업장을
        연번·자치구·사업구분·사업장명·대표지번·진행단계·운영구분으로 수록한다. 사업장 목록은 수시로 변동되므로
        <strong> 실시간 데이터는 아래 출처</strong>에서 확인한다.
      </p>

      <CalcBox title="■ 데이터 항목(컬럼)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>컬럼</th>
              <th style={th}>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={td}>연번 / 자치구</td><td style={td}>일련번호, 사업장 소재 자치구</td></tr>
            <tr><td style={td}>사업구분</td><td style={td}>재개발(도시정비형·주택정비형) / 재건축 / 소규모재건축 / 가로주택정비 등</td></tr>
            <tr><td style={td}>사업장명 / 대표지번</td><td style={td}>조합·구역 명칭, 대표 지번</td></tr>
            <tr><td style={td}>진행단계</td><td style={td}>정비구역지정 → 추진위원회승인 → 조합설립인가 → 사업시행인가 → 관리처분인가 → 착공·철거 → 준공 → 조합청산·해산</td></tr>
            <tr><td style={td}>운영구분</td><td style={td}>운영 / 일시중단 등</td></tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 대표 표본 (종로구 일부)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>연번</th><th style={th}>자치구</th><th style={th}>사업구분</th>
              <th style={th}>사업장명</th><th style={th}>대표지번</th><th style={th}>진행단계</th><th style={th}>운영</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE.map((r) => (
              <tr key={r[0]}>
                {r.map((c, i) => <td key={i} style={td}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-muted" style={{ fontSize: "12px" }}>※ 전체 목록은 책자(약 1,000여 건) 및 아래 출처 참조. 위는 형식 이해를 위한 발췌이다.</p>
      </CalcBox>

      <Insight>
        실시간·전체 현황:{" "}
        <a href="https://cleanup.seoul.go.kr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
          서울시 정비사업 정보몽땅 (cleanup.seoul.go.kr)
        </a>
        에서 자치구·진행단계별로 조회할 수 있다.
      </Insight>
    </div>
  );
}

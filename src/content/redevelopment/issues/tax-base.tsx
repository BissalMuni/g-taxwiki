"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };

const incl = { color: "#1890ff", fontWeight: "bold" as const };
const excl = { color: "#cf1322", fontWeight: "bold" as const };
const recheck = { color: "#fa8c16", fontWeight: "bold" as const };

function Tag({ v }: { v: string }) {
  if (v === "포함") return <span style={incl}>포함</span>;
  if (v === "제외") return <span style={excl}>제외</span>;
  return <span style={recheck}>재조사</span>;
}

/** (쟁점1) 사례별 과세표준 포함/제외/재조사 */
const ROWS: [string, string, string][] = [
  ["감정평가수수료", "포함", "조심2021지0750"],
  ["조합운영비", "포함", "조심2021지0750"],
  ["세무회계비", "포함", "조심2021지0750"],
  ["금융비용(현금청산비용·공원조성비·에코브릿지 용역비)", "재조사", "조심2021지0750"],
  ["학교 신·개축비용", "제외", "조심2021지1985 (대법원2009두22034)"],
  ["단지 내 포장공사비·조경공사비", "제외", "조심2021지2392 (지목변경)"],
  ["미술작품 설치", "포함", "조심2021지2392"],
  ["커뮤니티시설 운동기구 구입비", "제외", "조심2021지2392"],
  ["모델하우스 공사비·분양광고·분양수수료", "제외", "조심2021지2392"],
  ["외부 조성 후 기부채납한 도시계획시설 공사비", "제외", "조심2021지2392·2023지3779"],
  ["종전부동산 취득비용(명도소송비·지분조사비·매도청구소송비·멸실등기비)", "포함", "조심2023지3779"],
  ["보존등기 법무사 수수료", "제외", "조심2023지3779"],
  ["토지 취득 대출금 발생이자", "제외", "조심2023지3779"],
  ["교회보상비·이사비", "제외", "조심2019지2048"],
  ["신탁등기비(토지비용)", "제외", "조심2019지2048"],
  ["법인세", "제외", "조심2019지2048"],
  ["감정평가비", "포함", "조심2019지2048"],
  ["종전자산 멸실 법무사 수수료", "포함", "조심2023지1658"],
  ["조합운영비·조합운영 관련 법률자문료", "포함", "조심2023지1658"],
  ["종전·종후자산 감정평가수수료", "포함", "조심2023지1658"],
  ["예비비", "재조사", "조심2023지1658"],
  ["학교용지부담금", "포함", "조심2022지0526"],
  ["통신·전기시설 이설 및 상수도 인입공사비", "포함", "조심2022지0526"],
  ["도시가스 시설분담금", "제외", "조심2022지0526"],
  ["분양가 산정용역비", "포함", "조심2022지0526"],
  ["단지 외부도로 조성공사비", "제외", "조심2022지0526"],
  ["금융자문수수료(사업부지 취득 후 발생)", "포함", "조심2022지0906"],
  ["합의금", "포함", "조심2022지0906"],
  ["학교신축비용", "포함", "조심2022지0906 (조심2017지545)"],
  ["분양 위탁관리보수(자산관리회사 지급)", "포함", "조심2022지0906"],
  ["일반관리비 등(타당성검토·자문·소송·세무회계·자금관리 위탁비용)", "포함", "조심2022지0906"],
  ["모델하우스(전기안전관리대행수수료·상하수도 요금)", "재조사", "조심2022지0906"],
  ["모델하우스(유지·관리 비용)", "제외", "조심2022지0906"],
  ["건축물 임대용 임대차계약 자문 비용", "제외", "조심2022지0906"],
  ["비상근 임원 등기비용", "제외", "조심2022지0906"],
  ["천장형 시스템에어컨·빌트인 가전·현관중문·붙박이장", "제외", "대법원2025두34033 (’26년 제도개선 검토)"],
];

export default function IssuesTaxBase() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        정비사업 취득세 <strong>과세표준 포함 여부</strong>를 항목별 심판·판례로 정리한다.
        (사례별 원문 확인 후 적용) — <span style={incl}>포함</span> / <span style={excl}>제외</span> /
        <span style={recheck}> 재조사</span>.
      </p>

      <CalcBox title="■ 과세표준 포함 여부 사례 (쟁점별)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "58%" }}>항목</th>
              <th style={{ ...th, width: "12%" }}>과세표준</th>
              <th style={th}>사건번호</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([item, tag, caseno]) => (
              <tr key={item + caseno}>
                <td style={td}>{item}</td>
                <td style={{ ...td, textAlign: "center" }}><Tag v={tag} /></td>
                <td style={td}>{caseno}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Insight>
          대체로 <strong>사업 수행·분양을 위한 직·간접비용</strong>은 포함, <strong>기부채납·외부시설·금융이자·법인세</strong>
          등은 제외 경향. 단 학교신축비용은 인허가 조건부 부담 여부에 따라 판단이 갈린다(3장 포함여부 표 참조).
          빌트인 가전 등은 대법원2025두34033 이후 ’26년 제도개선 검토 대상이다.
        </Insight>
      </CalcBox>
    </div>
  );
}

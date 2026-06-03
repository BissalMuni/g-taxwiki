"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, color: "#fff" };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };

/** 조문 항목: 삭제된 조문은 deleted 표시 */
type Article = { no: string; deleted?: boolean };
/** 절(節) 그룹: 제목 + 조문 목록 */
type SectionGroup = { sec: string | null; items: Article[] };

const a = (no: string): Article => ({ no });

/** 「지방세법」 제9장 재산세 (제104조~제123조) */
const lawCol: SectionGroup[] = [
  {
    sec: "제1절 통칙",
    items: [
      a("제104조 정의"),
      a("제105조 과세대상"),
      a("제106조 과세대상 구분 등"),
      a("제106조의2 분리과세대상 토지 타당성 평가 등"),
      a("제107조 납세의무자"),
      a("제108조 납세지"),
      a("제109조 비과세"),
    ],
  },
  {
    sec: "제2절 과세표준과 세율",
    items: [
      a("제110조 과세표준"),
      a("제111조 세율"),
      a("제111조의2 1세대1주택 세율 특례"),
      a("제112조 재산세 도시지역분"),
      a("제113조 세율적용"),
    ],
  },
  {
    sec: "제3절 부과·징수",
    items: [
      a("제114조 과세기준일"),
      a("제115조 납기"),
      a("제116조 징수방법 등"),
      a("제117조 물납"),
      a("제118조 분할납부"),
      a("제118조의2 납부유예"),
      a("제119조 소액 징수면제"),
      a("제119조의2 신탁재산 수탁자의 물적납세의무"),
      a("제119조의3 향교 및 종교단체에 대한 특례"),
      a("제120조 신고의무"),
      a("제121조 재산세과세대장의 비치 등"),
      a("제122조 세 부담의 상한"),
      a("제123조 부동산 과세자료분석 전담기구의 설치 등"),
    ],
  },
];

/** 「지방세법 시행령」 제9장 재산세 (제101조~제119조의3) */
const enforceCol: SectionGroup[] = [
  {
    sec: "제1절 통칙",
    items: [
      a("제101조 별도합산과세 대상 토지의 범위"),
      a("제102조 분리과세대상 토지의 범위"),
      a("제103조 건축물의 범위 등"),
      a("제103조의2 철거·멸실된 건축물 또는 주택의 범위"),
      a("제104조 도시지역"),
      a("제105조 주택 부속토지의 범위 선정"),
      a("제105조의2 공장용 동력원동기에 따른 부과"),
      a("제105조의3 분리과세대상 토지 타당성 평가 등"),
      a("제106조 납세의무자의 범위"),
      a("제107조 수익사업의 범위"),
      a("제108조 비과세"),
    ],
  },
  {
    sec: "제2절 과세표준과 세율",
    items: [
      a("제109조 공정시장가액비율"),
      a("제109조의2 과세표준상한액"),
      a("제110조 공장용 건축물"),
      a("제110조의2 재산세 세율특례 대상 1세대1주택의 범위"),
      a("제111조 토지 등의 범위"),
      a("제112조 주택의 구분"),
    ],
  },
  {
    sec: "제3절 부과·징수",
    items: [
      a("제113조 물납의 신청 및 허가"),
      a("제114조 관리·처분이 부적당한 부동산의 처리"),
      a("제115조 물납허가 부동산의 평가"),
      a("제116조 분할납부세액의 기준 및 분할납부 신청"),
      a("제116조의2 물납하는 부동산의 납부유예"),
      a("제116조의3 신탁재산 수탁자의 물적납세의무"),
      a("제116조의4 향교 및 종교단체에 대한 재산세 특례 대상 및 신청 등"),
      a("제117조 과세대장 등재통지"),
      a("제118조 세 부담 상한의 계산방법"),
      { no: "제119조 재산세의 현황부과 〈삭제 2021.12.31.〉", deleted: true },
      a("제119조의2 부동산 과세자료분석 전담기구의 조직·운영 및 자료통보 등"),
      a("제119조의3 종합부동산세 과세자료 관련 정보시스템"),
    ],
  },
];

/** 「지방세법 시행규칙」 제9장 재산세 (제49조~제64조의2, 절 구분 없음) */
const ruleCol: SectionGroup[] = [
  {
    sec: null,
    items: [
      a("제49조 건축물 시가표준액의 기준"),
      a("제50조 공장입지기준면적의 범위"),
      a("제50조의2 분리과세대상 토지 적용의 신청"),
      a("제51조 지상정착물의 범위"),
      a("제52조 공장용 건축물의 범위 (영§103②)"),
      a("제53조 주된 상속자의 기준"),
      a("제54조 납세의무 통지"),
      a("제55조 공장용 건축물의 범위 (영§110)"),
      a("제56조 공장의 범위와 적용기준"),
      a("제56조의2 재산세 세율 특례 대상 1세대1주택의 범위"),
      a("제57조 재산세 도시지역분 과세대상 토지의 범위"),
      a("제58조 재산세의 합산 및 세액산정 등"),
      a("제59조 재산세의 물납 절차 등"),
      a("제60조 시가로 인정되는 부동산가액"),
      a("제61조 분할납부 신청"),
      a("제61조의2 신탁재산 물적납세의무 납부방식"),
      a("제61조의3 향교 및 종교단체에 대한 재산세 특례신청"),
      a("제61조의4 주택 재산세액의 납부유예"),
      a("제62조 재산세 납세의무자의 신고 등"),
      a("제63조 과세대장 직권등재"),
      a("제64조 과세대장 비치"),
      a("제64조의2 직전 연도의 재산세액 상당액 계산식"),
    ],
  },
];

/** 한 열(법령 단계)의 절 그룹 목록 렌더 */
function ColumnCell({ groups }: { groups: SectionGroup[] }) {
  return (
    <td style={td}>
      {groups.map((g) => (
        <div key={g.sec ?? "flat"} style={{ marginBottom: "8px" }}>
          {g.sec && <p style={{ fontWeight: "bold", margin: "4px 0", color: "#595959" }}>{g.sec}</p>}
          <ul style={{ margin: 0, paddingLeft: "1.1em", lineHeight: 1.7 }}>
            {g.items.map((it) => (
              <li key={it.no} style={it.deleted ? { color: "#bfbfbf", textDecoration: "line-through" } : undefined}>
                {it.no}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </td>
  );
}

export default function Statute() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세는{" "}
        <a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          <strong>「지방세법」 제9장</strong>
        </a>
        (제104조~제123조)에 규정되어 있으며, <strong>제1절 통칙 · 제2절 과세표준과 세율 · 제3절 부과·징수</strong>의 3개 절로
        구성된다. 같은 체계가 시행령·시행규칙으로 이어진다.
      </p>

      <CalcBox title="■ 재산세 법령 체계 (지방세법 제9장)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "34%", backgroundColor: "#1890ff" }}>「지방세법」</th>
              <th style={{ ...th, width: "33%", backgroundColor: "#52c41a" }}>「지방세법 시행령」</th>
              <th style={{ ...th, width: "33%", backgroundColor: "#fa8c16" }}>「지방세법 시행규칙」</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <ColumnCell groups={lawCol} />
              <ColumnCell groups={enforceCol} />
              <ColumnCell groups={ruleCol} />
            </tr>
          </tbody>
        </table>

        <Insight>
          법·시행령은 <strong>통칙 → 과세표준·세율 → 부과·징수</strong>의 동일한 3절 구조를 따른다. 시행규칙은 절 구분 없이
          시가표준액·공장·물납·과세대장 등 <strong>집행 절차</strong>를 조문 순으로 규정한다. (제119조 현황부과는 2021.12.31. 삭제)
        </Insight>
      </CalcBox>
    </div>
  );
}

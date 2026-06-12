"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function IssuesNonMemberLandTiming() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재건축조합이 취득하는 <strong>비조합원용 토지의 취득시기</strong>를 <strong>신탁시점</strong>으로 볼지
        <strong> 소유권이전고시일 다음날</strong>로 볼지에 대한 다툼이다. 취득시기에 따라 과세표준·세율과
        농특세 비과세·주택 중과 적용이 달라진다.
      </p>

      <CalcBox title="■ 쟁점 — 취득시기 두 견해">
        <table style={tbl}>
          <thead>
            <tr><th style={th}>구분</th><th style={th}>갑설 (신탁시점)</th><th style={th}>을설 (소유권이전고시일 익일)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>취득시기</td>
              <td style={td}>신탁등기 경료 시점 (일반토지)</td>
              <td style={td}>소유권이전고시일 다음날 (주택 부속토지)</td>
            </tr>
            <tr>
              <td style={tdHead}>농특세</td>
              <td style={td}>비과세 적용 불가 (일반토지)</td>
              <td style={td}>주택 부속토지 → 비과세</td>
            </tr>
            <tr>
              <td style={tdHead}>과세표준·세율</td>
              <td style={td}>신탁등기 당시 기준</td>
              <td style={td}>이전고시 당시 현황 기준</td>
            </tr>
            <tr>
              <td style={tdHead}>심판례</td>
              <td style={td}>조심2020지0624 (2023.2.1.)</td>
              <td style={td}>조심2024지0265 (인용 후 조정계류)</td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 검토 의견 — 소유권이전고시일 다음날 (일반토지 취득)">
        <SubSection title="● 근거">
          <p>
            지방세법 시행령 §20⑦은 비조합원용 토지 취득시기를 <strong>‘소유권이전고시 다음 날’</strong>로 명문 규정하고,
            이와 달리 규율하는 특별규정은 없다. 조세법규는 법문대로 해석해야 하며 확장·유추해석은 불허된다.
            ’09년 명문화 이후 <strong>16년간 일관된 과세관행</strong>이 유지되어 왔다.
          </p>
          <p>
            신탁등기 시점에는 일반분양분과 조합원분양분 토지가 명확히 구분되지 않고, 신탁등기가 필요적 절차도 아니며
            전 세대 동시 경료도 아니어서 <strong>취득대상·취득자가 확정되지 않은 상태</strong>이다.
          </p>
        </SubSection>
        <SubSection title="● 토지 취득의 성격 — 사업에 공여된 일반토지">
          <p>① (1안) 이전고시 후에야 사업시행자의 소유권 취득이 확정되며, 비조합원용 토지는 건물 완공으로 취득하는 토지가 아니므로 <strong>농특세 비과세 대상 아님</strong>. 건축물 신축에 수반된 주택 부속토지 취득이 아니므로 <strong>주택 중과 대상으로 볼 여지 없음</strong>.</p>
          <p>② (2안) 설령 주택 부속토지로 보아 농특세 비과세를 적용하더라도, 주택 중과 입법취지를 고려해 <strong>중과제외 입법 보완(소급)</strong>으로 중과 논란 치유 가능.</p>
          <Insight>
            신탁시를 취득일로 보면 신고납부 누락 가산세(~80%), 토지면적 수시 변경에 따른 수정신고·경정청구 등
            <strong> 전국적 세정혼란</strong>을 초래한다. 지법 §9③ 단서는 취득시기 규정이 아니라 비조합원용 토지가
            과세대상임을 명시한 조항(대법원 패소 후 명문화)이다.
          </Insight>
        </SubSection>
      </CalcBox>
    </div>
  );
}

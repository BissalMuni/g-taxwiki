"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function IssuesMemberShareIncrease() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        도시개발·정비사업에서 환지·관리처분으로 토지를 받을 때 <strong>기존 보유면적을 초과하는 부분</strong>은
        새로 취득한 자산으로 보아 과세한다. 「지방세법」 §7⑯ 신설로 명확해졌다.
      </p>

      <CalcBox title="■ 개요 — 토지지분 증가분 과세">
        <p>
          추가로 확보한 면적은 새로 취득한 자산으로 간주된다. 지법 §7⑯ 신설로 명확화되었으며,
          <strong> 2023.1.1. 이후 환지계획·관리처분계획인가를 받은 사업</strong>부터, 그리고 그 사업으로
          <strong> 2023.1.1. 이후 납세의무가 성립</strong>하는 경우에 한해 과세된다.
        </p>
        <p className="text-muted" style={{ fontSize: "12px" }}>
          ※ 「지방세법」 부칙(법률 제19230호, 2023.3.14.) 및 「지특법」 부칙(법률 제19232호, 2023.3.14.) 적용
        </p>
      </CalcBox>

      <CalcBox title="■ 과세요건">
        <table style={tbl}>
          <tbody>
            <tr><td style={tdHead}>납세의무자</td><td style={td}>해당 사업의 대상이 되는 부동산의 소유자</td></tr>
            <tr><td style={tdHead}>과세대상</td><td style={td}>당초 소유한 면적을 초과하여 받는 토지 면적</td></tr>
            <tr><td style={tdHead}>취득시기</td><td style={td}>초과 면적에 한정하여, 사업으로 공급받는 부동산의 취득시기에 승계취득한 것으로 봄</td></tr>
            <tr><td style={tdHead}>과세표준</td><td style={td}>「지방세법 시행령」 §18의4①4호 나목에 따라 산출한 가액</td></tr>
            <tr><td style={tdHead}>세율</td><td style={td}>4%</td></tr>
          </tbody>
        </table>
        <SubSection title="● 관리처분(환지)계획인가 시점별 적용 법령">
          <table style={tbl}>
            <thead>
              <tr><th style={th}>2023.1.1. 前 인가</th><th style={th}>2023.1.1. 이후 인가</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>「지특법」 부칙(법률 제19232호) §11에 따라 종전 §74①·②로 면제·부과</td>
                <td style={td}>「지방세법 시행령」 §18의4①4호 나목에 따라 부과</td>
              </tr>
            </tbody>
          </table>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 유권해석·질의회신">
        <SubSection title="● 분양계약 체결 시 재산세 부과 기준 (부동산세제과-1386, 2021.5.25.)">
          <p>
            집합건물의 대지사용권은 건축물 취득이 전제되어 사용승인일 또는 사실상 사용일 중 빠른 날에 함께 취득된다.
            그 이전에는 대지사용권이 인정되기 어려워 <strong>종전 토지를 기준</strong>으로 재산세를 부과하며, 분양계약만으로
            환지예정지처럼 보아 과세하기는 어렵다.
          </p>
        </SubSection>
        <SubSection title="● 승계조합원 프리미엄 과세표준 포함 (지방세운영과-2203, 2019.7.22.)">
          <p>
            승계조합원이 환지계획 등으로 취득한 부동산 가액이 종전 부동산 가액을 초과하면 그 초과분에 과세하며,
            과세표준은 실제 지급한 직접비용 합계인 사실상 취득가격을 기준으로 한다. 따라서 승계조합원이 원조합원에게
            지급한 <strong>프리미엄도 과세표준에 포함</strong>(기존 행정해석·심판례와 일관).
          </p>
        </SubSection>
        <Insight>
          이 쟁점은 「2장 개정법령 · 2025년」의 과세표준 경과조치(공시지가와 분양가액 중 적은 가액)와 직접 연결된다.
        </Insight>
      </CalcBox>
    </div>
  );
}

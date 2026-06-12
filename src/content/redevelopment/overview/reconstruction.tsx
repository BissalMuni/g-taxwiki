"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "middle" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", textAlign: "center" as const };
const rate = { color: "#1890ff", fontWeight: "bold" as const };

export default function OverviewReconstruction() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재건축사업은 정비기반시설은 양호하나 노후·불량건축물에 해당하는 공동주택이 밀집한 지역에서
        주거환경을 개선하기 위한 사업이다. 재개발과 달리 <strong>제3자 매입토지(미동의자·비조합원)</strong>의
        취득(유상 4%)이 함께 발생하는 점이 특징이다.
      </p>

      <CalcBox title="■ 시행자와 추진절차">
        <p>
          사업주체: 토지 등 소유자(직접·조합방식), 공공시행자(LH·SH 등), 지정개발자(신탁 등).
          신탁방식은 조합 유무에 따라 <strong>사업시행자 방식(조합×)</strong>·<strong>사업대행자 방식(조합○)</strong>으로
          나뉘며, 신탁사 역할에 따라 차입형·관리형·책임준공형으로 구분한다.
        </p>
        <table style={tbl}>
          <thead>
            <tr><th style={th}>단계</th><th style={th}>추진절차</th></tr>
          </thead>
          <tbody>
            <tr><td style={tdHead}>구역지정 단계</td><td style={td}>안전진단</td></tr>
            <tr><td style={tdHead}>사업시행 단계</td><td style={td}>(추진위) 조합설립인가</td></tr>
            <tr><td style={tdHead}>관리처분 단계</td><td style={td}>관리처분계획인가</td></tr>
            <tr><td style={tdHead}>사업완료 단계</td><td style={td}>준공</td></tr>
          </tbody>
        </table>
        <p className="text-muted" style={{ fontSize: "12px" }}>※ 도정법 개정(’25.6.4.): 안전진단 → 재건축진단</p>
      </CalcBox>

      <CalcBox title="■ 단계별 과세방안">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>구분</th>
              <th style={th}>취득일</th>
              <th style={th}>과세표준</th>
              <th style={th}>세율</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead} rowSpan={3}>건축물</td>
              <td style={td}>일반분양 — 준공인가일·임시사용승인일</td>
              <td style={td}>공사비</td><td style={td}><span style={rate}>2.8%</span></td>
            </tr>
            <tr><td style={td}>상가 — 준공인가일·임시사용승인일</td><td style={td}>공사비</td><td style={td}><span style={rate}>2.8%</span></td></tr>
            <tr><td style={td}>임대주택 — 준공인가일·임시사용승인일</td><td style={td}>공사비</td><td style={td}><span style={rate}>2.8%</span></td></tr>
            <tr>
              <td style={tdHead} rowSpan={3}>토지</td>
              <td style={td}>제3자 매입토지(미동의자·비조합원) — 잔금일·등기일</td>
              <td style={td}>사실상 취득가액</td><td style={td}><span style={rate}>4%</span></td>
            </tr>
            <tr><td style={td}>제3자 매입토지(매도청구) — 판결·등기일</td><td style={td}>보상금액</td><td style={td}><span style={rate}>4%</span></td></tr>
            <tr><td style={td}>일반분양 — 소유권이전고시일 익일</td><td style={td}>영 계산식</td><td style={td}><span style={rate}>3.5%</span></td></tr>
            <tr>
              <td style={tdHead}>기부채납</td>
              <td style={td}>공공청사·정비기반시설(단지 내·외) — 준공인가일·임시사용승인일</td>
              <td style={td}>공사비</td><td style={td}><span style={rate}>2.8%</span></td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: "12.5px" }}>
          · 조합원의 신축주택 토지면적 &gt; 종전주택 토지면적인 경우, 초과분은 잔금지급일에 승계취득한 것으로 봄 (지법 §7⑯)
        </p>
      </CalcBox>

      <CalcBox title="■ 준공 전·후 취득 구분">
        <SubSection title="● 준공 이전">
          <p>① (조합) 사업지구 내 조합원 토지 신탁 취득, 조합원 외 토지 취득</p>
          <p>② (조합원) 철거 전 주택, 철거 후 토지, 착공 이후 토지 승계취득</p>
          <Insight>
            현금청산 대상 부동산이 기부채납 대상에 포함되는지가 분명하지 않으면 기부채납 비과세 대상으로
            보기 어렵다 (조심2021지2029).
          </Insight>
        </SubSection>
        <SubSection title="● 준공 이후">
          <p>① (조합) 일반분양분 건축물 원시취득, 용도폐지 정비기반시설 취득, 비조합원용 토지 취득
            <span className="text-muted"> (대법원2017두66824·2019두43900, 2019두53075, 헌재2011헌바355 참조)</span></p>
          <p>② (조합원) 신축 건축물 원시취득, 부속토지 승계취득</p>
          <p className="text-muted" style={{ fontSize: "12px" }}>※ 용도폐지 정비기반시설이 신설 정비기반시설로 재편입되는 경우 별도 검토.</p>
        </SubSection>
      </CalcBox>
    </div>
  );
}

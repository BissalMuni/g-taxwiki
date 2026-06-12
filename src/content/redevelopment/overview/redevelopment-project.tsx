"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "middle" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", textAlign: "center" as const };
const rate = { color: "#1890ff", fontWeight: "bold" as const };

export default function OverviewRedevelopmentProject() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재개발사업은 정비기반시설이 열악하고 노후·불량건축물이 밀집한 지역에서 주거환경을 개선하거나,
        상업·공업지역 등에서 도시기능 회복·상권활성화를 위하여 도시환경을 개선하기 위한 사업이다.
        취득세는 <strong>건축물(원시취득 2.8%)</strong>과 <strong>토지(무상승계 3.5%)</strong>를 구분하여 과세한다.
      </p>

      <CalcBox title="■ 유형과 추진절차">
        <SubSection title="● 유형">
          <p>① <strong>주택정비형</strong>: 민간(신속통합기획·재정비촉진사업) 재개발, 공공재개발</p>
          <p>② <strong>도시정비형</strong>: 역세권 장기전세주택사업, 역세권 활성화사업</p>
        </SubSection>
        <SubSection title="● 추진절차">
          <table style={tbl}>
            <thead>
              <tr><th style={th}>단계</th><th style={th}>추진절차</th></tr>
            </thead>
            <tbody>
              <tr><td style={tdHead}>계획수립 단계</td><td style={td}>사전검토</td></tr>
              <tr><td style={tdHead}>사업시행 단계</td><td style={td}>(추진위) 조합설립인가</td></tr>
              <tr><td style={tdHead}>관리처분 단계</td><td style={td}>관리처분계획인가</td></tr>
              <tr><td style={tdHead}>사업완료 단계</td><td style={td}>준공(입주)</td></tr>
            </tbody>
          </table>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            진행: 구역지정 → 조합설립 → 사업시행인가 → 조합원분양신청 → 관리처분 → 철거·착공·분양 → 준공 → 이전고시
          </p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 단계별 과세방안">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>구분</th>
              <th style={th}>취득일</th>
              <th style={th}>과세표준</th>
              <th style={th}>세율</th>
              <th style={th}>감면</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead} rowSpan={3}>건축물</td>
              <td style={td}>일반분양 — 준공인가일·임시사용승인일</td>
              <td style={td}>공사비</td>
              <td style={td}><span style={rate}>2.8%</span></td>
              <td style={td}>체비지·보류지 감면 (’20년~ 최소납부세제 15%)</td>
            </tr>
            <tr>
              <td style={td}>상가 — 준공인가일·임시사용승인일</td>
              <td style={td}>공사비</td>
              <td style={td}><span style={rate}>2.8%</span></td>
              <td style={td}>체비지·보류지 감면 (’20년~ 최소납부세제 15%)</td>
            </tr>
            <tr>
              <td style={td}>임대주택 — 준공인가일·임시사용승인일</td>
              <td style={td}>공사비</td>
              <td style={td}><span style={rate}>2.8%</span></td>
              <td style={td}>관리처분계획 주택 75%</td>
            </tr>
            <tr>
              <td style={tdHead} rowSpan={5}>토지</td>
              <td style={td}>일반분양 — 소유권이전고시일 익일</td>
              <td style={td}>영 계산식</td>
              <td style={td}><span style={rate}>3.5%</span></td>
              <td style={td}>체비지·보류지 감면 (’20년~ 최소납부세제 15%)</td>
            </tr>
            <tr>
              <td style={td}>상가 — 소유권이전고시일 익일</td>
              <td style={td}>영 계산식</td>
              <td style={td}><span style={rate}>3.5%</span></td>
              <td style={td}>체비지·보류지 감면 (’20년~ 최소납부세제 15%)</td>
            </tr>
            <tr>
              <td style={td}>무상양여(사업부지) — 준공인가일</td>
              <td style={td}>시가인정액</td>
              <td style={td}><span style={rate}>3.5%</span></td>
              <td style={td}>대지조성 부동산 75%</td>
            </tr>
            <tr>
              <td style={td}>무상양여(신설 정비기반시설) — 준공인가일</td>
              <td style={td}>시가인정액</td>
              <td style={td}><span style={rate}>3.5%</span></td>
              <td style={td}>지특법 §73의2 (조심 비과세)</td>
            </tr>
            <tr>
              <td style={td}>임대주택 — 소유권이전고시일 익일</td>
              <td style={td}>영 계산식</td>
              <td style={td}><span style={rate}>3.5%</span></td>
              <td style={td}>관리처분계획 주택 75% (의무임대: 매수, 용적률초과분: 기부채납)</td>
            </tr>
            <tr>
              <td style={tdHead}>기부채납</td>
              <td style={td}>공공청사·정비기반시설(단지 내·외) — 준공인가일·임시사용승인일</td>
              <td style={td}>공사비</td>
              <td style={td}><span style={rate}>2.8%</span></td>
              <td style={td}>지특법 §73의2</td>
            </tr>
          </tbody>
        </table>
        <Insight>
          ’19.5.31. 「지방세법 시행령」 §20⑥ 개정으로 재개발 신축건물 취득시기를
          (소유권이전고시일 익일 → 준공인가일 또는 사실상 사용일 중 빠른 날)로 바꾸어 재건축과 일치시켰다.
        </Insight>
        <p style={{ fontSize: "12.5px" }}>
          · 조합원 1가구1주택(일시적 2주택 포함) 감면: 지특법 §74⑤3호<br />
          · 조합원의 신축주택 토지면적 &gt; 종전주택 토지면적인 경우, 초과분은 잔금지급일에 승계취득한 것으로 봄 (지법 §7⑯)
        </p>
      </CalcBox>

      <CalcBox title="■ 최소납부세제 연혁">
        <table style={tbl}>
          <thead>
            <tr><th style={th}>구분</th><th style={th}>내용</th><th style={th}>시행</th></tr>
          </thead>
          <tbody>
            <tr><td style={tdHead}>신설</td><td style={td}>최소납부세제 신설(지특법 §177조의2) — §74 적용 제외</td><td style={td}>2015.</td></tr>
            <tr><td style={tdHead}>§74 포함</td><td style={td}>§74 적용대상에 포함 (단, §74①·②는 2020.1.1.부터 적용, 부칙 §5 3호)</td><td style={td}>2016.</td></tr>
            <tr><td style={tdHead}>§74① 개정·§74③ 신설</td><td style={td}>도시개발사업 시행자 체비지 §74①→③ 이관(면제→75% 감면), 주택개발사업 시행자 감면 삭제, §74① 최소납부세제 시행</td><td style={td}>2020.</td></tr>
            <tr><td style={tdHead}>§74① 제외</td><td style={td}>조합원 등 환지처분 대상자 취득세 면제 시 최소납부세제 제외</td><td style={td}>2022.</td></tr>
          </tbody>
        </table>
        <p className="text-muted" style={{ fontSize: "12px" }}>※ 연도별 개정 상세는 「2장 개정법령 적용요령」 참조.</p>
      </CalcBox>

      <CalcBox title="■ 조합원 지위 승계와 입주권 전매">
        <SubSection title="● 입주권의 개념">
          <p>도정법 §74 관리처분계획 인가로 신축주택 입주자로 선정된 지위.</p>
          <p>· (소득세법) 관리처분계획에 따라 입주자로 선정된 지위 — 주택 수 포함(소법 §88)</p>
          <p>· (지방세법) 관리처분계획에 따라 입주자로 선정된 지위. 다만 <strong>건축물 멸실 이후</strong>부터 조합원입주권을 소유한 것으로 봄 (부동산세제과-2469, 2020.9.17.)</p>
        </SubSection>
        <SubSection title="● 입주권 전매 시 취득 구분">
          <table style={tbl}>
            <thead>
              <tr><th style={th}>시점</th><th style={th}>대상</th><th style={th}>취득일</th><th style={th}>취득원인</th><th style={th}>과세표준</th></tr>
            </thead>
            <tbody>
              <tr><td style={tdHead}>철거 전</td><td style={td}>종전부동산</td><td style={td}>잔금지급일</td><td style={td}>유상승계</td><td style={td}>매매금액</td></tr>
              <tr><td style={tdHead}>철거 후~준공 전</td><td style={td}>토지</td><td style={td}>잔금지급일</td><td style={td}>유상승계</td><td style={td}>매매금액</td></tr>
              <tr><td style={tdHead}>준공 후~이전고시 전</td><td style={td}>주택</td><td style={td}>소유권보존</td><td style={td}>유상승계</td><td style={td}>매매금액</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: "12.5px" }}>
            · (청산금 지급) 입주권 매매대금 = 분양금액(권리가액 + 지급한 청산금) + P<br />
            · (청산금 수령) 입주권 매매대금 = 분양금액(권리가액 − 지급받은 청산금) + P
          </p>
          <Insight>
            (준공인가 후 이전고시 전) 조합원 지위 유상승계 시 — 원조합원은 <strong>원시취득</strong>,
            승계조합원은 신축주택 <strong>유상승계취득</strong>으로 과세. 무상승계는 과세체계 동일,
            세율만 무상승계 세율 적용.
          </Insight>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 준공 시 조합원 건축물 과세표준 (관리처분 시점별)">
        <table style={tbl}>
          <thead>
            <tr><th style={th}>구분</th><th style={th}>’22.12.31. 이전 관리처분</th><th style={th}>’23.1.1. 이후 관리처분</th></tr>
          </thead>
          <tbody>
            <tr><td style={tdHead}>원조합원</td><td style={td}>건축물·토지 구분 없이 면제 (단, 청산금 과세)</td><td style={td}>총공사비 × 분양건축물면적 ÷ 총건축물면적</td></tr>
            <tr><td style={tdHead}>승계조합원</td><td style={td}>승계취득 가액 제외하고 과세</td><td style={td}>좌동</td></tr>
          </tbody>
        </table>
      </CalcBox>
    </div>
  );
}

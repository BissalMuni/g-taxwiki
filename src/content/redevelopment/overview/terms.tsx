"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function OverviewTerms() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        정비사업 취득세 판단에 반복적으로 쓰이는 핵심 용어를 정리한다. 특히 <strong>조합원 구분</strong>,
        <strong> 관리처분계획·이전고시</strong>, <strong>종전·종후자산과 비례율·청산금</strong>은
        과세표준·취득시기 판정의 기초가 된다.
      </p>

      <CalcBox title="■ 사업 주체 관련">
        <table style={tbl}>
          <tbody>
            <tr>
              <td style={tdHead}>사업시행자</td>
              <td style={td}>정비사업을 시행하는 자</td>
            </tr>
            <tr>
              <td style={tdHead}>사업주체</td>
              <td style={td}>토지 등 소유자(직접방식·조합방식), 공공시행자(시장·구청장·LH·SH 등), 지정개발자(신탁 등)</td>
            </tr>
            <tr>
              <td style={tdHead}>조합원</td>
              <td style={td}>토지 또는 건물, 지상권자 등 소유자 (재건축은 토지 + 건물을 소유하면서 조합설립에 동의한 자). 여러 명 공유 또는 여러 명이 1세대에 속하는 때 등은 대표 1인을 조합원으로 본다.</td>
            </tr>
          </tbody>
        </table>
        <SubSection title="● 원조합원과 승계조합원">
          <p>① <strong>원조합원</strong>: 정비구역 지정 이전부터 토지 등을 소유한 자(동의한 자)</p>
          <p>② <strong>승계조합원</strong>: 사업시행기간(정비구역 지정 ~ 준공인가) 동안 조합원의 권리·의무를 이어받은 자</p>
          <Insight>원조합원/승계조합원 구분은 「지방세특례제한법」 제74조 재개발 감면 적용 여부에 직결된다.</Insight>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 계획·처분 관련">
        <table style={tbl}>
          <tbody>
            <tr>
              <td style={tdHead}>관리처분계획</td>
              <td style={td}>종전 토지 등 소유권과 소유권 외 권리(지상권·전세권·임차권·저당권 등)를 조성된 토지와 건축시설에 관한 권리로 변환시켜 배분하는 계획</td>
            </tr>
            <tr>
              <td style={tdHead}>이전고시</td>
              <td style={td}>관리처분계획 승인 이후 건축공사를 완료하고 준공검사를 받아 대지 확정측량을 실시한 뒤, 관리처분계획 내용대로 조합 및 조합원에게 신축건물과 토지의 소유권을 귀속시키는 행정처분</td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 자산 평가·정산 관련">
        <table style={tbl}>
          <tbody>
            <tr>
              <td style={tdHead}>종전자산 평가액</td>
              <td style={td}>보유하고 있던 물건의 현재가치를 감정하여 평가한 금액 <span className="text-muted">(※ 기준일: 사업시행인가 고시일)</span></td>
            </tr>
            <tr>
              <td style={tdHead}>종후자산 평가액</td>
              <td style={td}>사업 완료 후 전체 자산 평가액 = 조합원 주택 + 일반분양분 주택 + 상가 및 부속토지 등 <span className="text-muted">(※ 기준일: 분양신청기간 만료일)</span></td>
            </tr>
            <tr>
              <td style={tdHead}>비례율</td>
              <td style={td}>종전 부동산의 사업 이후 가치 상승 비율 (재건축사업의 수익성 지표)</td>
            </tr>
            <tr>
              <td style={tdHead}>조합원분양가</td>
              <td style={td}>조합에서 정한 조합원 분양가 (일반분양가의 80~90% 수준)</td>
            </tr>
            <tr>
              <td style={tdHead}>권리가액</td>
              <td style={td}>조합원 자산 최종 가치 = 종전자산 평가액 × 비례율</td>
            </tr>
            <tr>
              <td style={tdHead}>분담금·청산금</td>
              <td style={td}>종전 보유 자산과 사업 후 취득자산 평가 차액 상당액 = 조합원분양가 − 권리가액<br />· <strong>징수청산금(분담금)</strong>: 조합원분양가 &gt; 종전부동산 권리가액<br />· <strong>교부청산금</strong>: 조합원분양가 &lt; 종전부동산 권리가액 (… 양도소득세 대상)</td>
            </tr>
          </tbody>
        </table>
        <SubSection title="● 비례율 산식">
          <table style={tbl}>
            <tbody>
              <tr>
                <td style={{ ...tdHead, width: "18%", textAlign: "center" as const }}>비례율 =</td>
                <td style={{ ...td, textAlign: "center" as const }}>
                  <div style={{ borderBottom: "1px solid #555", paddingBottom: "4px" }}>
                    종후자산 평가액(총 분양수익금) − 총사업비(공사비·조합운영비 등 경비)
                  </div>
                  <div style={{ paddingTop: "4px" }}>종전자산 평가액(전체 조합원)</div>
                </td>
                <td style={{ ...tdHead, width: "12%", textAlign: "center" as const }}>× 100</td>
              </tr>
            </tbody>
          </table>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 체비지·보류지 (법률별 정의)">
        <table style={tbl}>
          <tbody>
            <tr>
              <td style={tdHead}>개념</td>
              <td style={td}><strong>보류지</strong>: 경비충당·사업목적을 위해 지정 / <strong>체비지</strong>: 사업경비 충당</td>
            </tr>
            <tr>
              <td style={tdHead}>도시개발법</td>
              <td style={td}>보류지 = 체비지 + 공공시설 용지</td>
            </tr>
            <tr>
              <td style={tdHead}>도시정비법</td>
              <td style={td}>보류지 = 일반분양분·임대주택·공공임대주택·부대복리시설을 조합원 선분양 후 잔여분으로 사업목적을 위해 지정</td>
            </tr>
            <tr>
              <td style={tdHead}>소득세법</td>
              <td style={td}>보류지 = 공공용지, 체비지 = 사업비용 부담</td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 서울시 정비모델 관련">
        <table style={tbl}>
          <tbody>
            <tr>
              <td style={tdHead}>모아타운·모아주택</td>
              <td style={td}><strong>모아타운</strong>은 대규모 재개발이 어려운 노후 저층주거지의 새로운 정비모델인 <strong>모아주택</strong>을 블록 단위로 모아 단지화한 개념의 서울형 저층주거지 정비사업(자율주택형·가로주택형·소규모 재개발형·소규모 재건축형 등). <strong>모아주택</strong>은 개별 필지를 모아 블록 단위로 양질의 주택을 공동 개발하는 정비사업이다.</td>
            </tr>
            <tr>
              <td style={tdHead}>신속통합기획</td>
              <td style={td}>정비사업 초기단계에서 서울시가 공공성과 사업성의 균형을 이룬 가이드라인을 제시하고 신속한 사업 추진을 지원하는 제도</td>
            </tr>
          </tbody>
        </table>
        <p className="text-muted" style={{ fontSize: "12px" }}>
          [출처: 정비사업 정보몽땅 <a href="https://cleanup.seoul.go.kr/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">cleanup.seoul.go.kr</a>]
        </p>
      </CalcBox>
    </div>
  );
}

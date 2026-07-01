"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

export default function SigaInjeongAek() {
  return (
    <div className="space-y-8">
      <CalcBox title="■ 무상취득의 과세표준과 시가인정액">
        <SubSection title="● 원칙 - 시가인정액">
          <p>무상취득의 취득당시가액은 <strong>시가인정액</strong>(매매사례가액·감정가액·공매가액 등)을 원칙으로 한다.</p>
          <p>&ldquo;시가인정액&rdquo;이란 취득시기 현재 불특정 다수인 사이에 자유롭게 거래되어 통상적으로 성립된다고 인정되는 가액을 말한다.</p>
          <p className="text-sm text-muted">법 §10의2①</p>
        </SubSection>

        <SubSection title="● 취득 유형별 과세표준">
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)'}}>
          <thead>
          <tr style={{backgroundColor: '#f0f0f0'}}>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '30%'}}>구분</th>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '35%'}}>취득당시가액</th>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>근거</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', backgroundColor: '#fafafa'}}>상속</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>시가표준액</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법 §10의2②1호</td>
          </tr>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', backgroundColor: '#fafafa'}}>시가표준액 1억원 이하 부동산등의 무상취득<br/>(상속 제외)</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>시가인정액 또는 시가표준액 중 납세자가 선택</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법 §10의2②2호</td>
          </tr>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', backgroundColor: '#fafafa'}}>그 밖의 무상취득<br/>(증여 등)</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>시가인정액<br/>(산정 곤란 시 시가표준액)</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법 §10의2②3호</td>
          </tr>
          </tbody>
          </table>

          <Insight>
          <ul className="list-disc pl-6 my-4 space-y-1">
            <li>상속은 <strong>무조건 시가표준액</strong> → 상속인은 별도 시가인정액 산정이 불필요하다.</li>
            <li>1억원 이하 소액 부동산은 납세자가 <strong>유리한 것을 선택</strong>할 수 있다.</li>
          </ul>
          </Insight>
        </SubSection>

        <SubSection title="● 평가기간 구분">
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)'}}>
          <thead>
          <tr style={{backgroundColor: '#f0f0f0'}}>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '15%'}}>구분</th>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '30%'}}>대상</th>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>평가기간</th>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '15%'}}>근거</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', backgroundColor: '#fafafa'}}>당해부동산</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>취득 부동산 자체</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322', fontWeight: 'bold'}}>취득일 전 6개월 ~ 취득일 후 3개월</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>영 §14①</td>
          </tr>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', backgroundColor: '#fafafa'}}>유사부동산</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>면적·위치·종류·용도·시가표준액이 동일·유사한 다른 부동산</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322', fontWeight: 'bold'}}>취득일 전 1년 ~ 신고·납부기한 만료일<br/>(기한 내 신고 시 신고일까지)</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>영 §14⑤</td>
          </tr>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', backgroundColor: '#fafafa'}}>심의요청<br/>(예외)</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>당해·유사 모두</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322', fontWeight: 'bold'}}>취득일 전 2년 ~ 신고·납부기한 만료일</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>영 §14③⑥</td>
          </tr>
          </tbody>
          </table>
        </SubSection>

        <SubSection title="● 매매사례가액 기준일">
          <ul className="list-disc pl-6 my-4 space-y-1">
            <li><strong>매매</strong>: 매매계약일 (등기일 아님)</li>
            <li><strong>감정</strong>: 가격산정기준일 및 감정가액평가서 작성일</li>
            <li><strong>경매·공매</strong>: 가액이 결정된 날</li>
          </ul>
          <p className="text-sm text-muted">영 §14②</p>
        </SubSection>

        <SubSection title="● 시가인정액이 여러 개인 경우 (당해부동산)">
          <ul className="list-disc pl-6 my-4 space-y-1">
            <li><strong>원칙</strong>: 취득일 전후로 가장 가까운 날의 가액 적용</li>
            <li><strong>동순위</strong>(가장 가까운 날이 복수인 경우): 그 가액들의 평균액 적용</li>
          </ul>
          <p className="text-sm text-muted">영 §14② 후단</p>
        </SubSection>

        <SubSection title="● 유사부동산 선정기준 (공동주택)">
          <p><strong>3가지 요건 모두 충족</strong>이 필요하다.</p>
          <ul className="list-disc pl-6 my-4 space-y-1">
            <li>동일한 공동주택단지 내</li>
            <li>주거전용면적 차이 <strong>±5% 이내</strong></li>
            <li>공동주택가격 차이 <strong>±5% 이내</strong></li>
          </ul>
          <p>요건 충족 물건이 둘 이상인 경우 → <strong>공동주택가격 차이가 가장 적은 물건</strong>을 선정한다 (날짜 근접성은 기준 아님).</p>
          <p className="text-sm text-muted">규칙 §4의3④1호</p>

          <Insight>
          <ul className="list-disc pl-6 my-4 space-y-1">
            <li>유사부동산은 &ldquo;가장 가까운 날&rdquo;이 아니라 <strong>&ldquo;공동주택가격 차이 최소&rdquo;</strong>가 우열 기준임을 유의한다.</li>
            <li>증여 취득 시 신고를 기한 내에 하면 유사부동산 평가기간의 종기가 <strong>신고일로 단축</strong>된다 → 신고 이후 발생한 유사부동산 매매사례는 배제 (2024.12.31. 개정)</li>
            <li>매매사례 검토 시 반드시 <strong>등기일이 아닌 실제 계약일</strong> 기준으로 판단하고, 해제(취소)된 거래는 후보에서 배제한다.</li>
          </ul>
          </Insight>
        </SubSection>

        <SubSection title="● 감정가액 신고 요건">
          <ul className="list-disc pl-6 my-4 space-y-1">
            <li><strong>원칙</strong>: 둘 이상의 감정기관에 감정 의뢰 후 결과 첨부</li>
            <li><strong>예외</strong>: 시가표준액 10억원 이하 부동산은 하나의 감정기관도 가능</li>
          </ul>
          <p className="text-sm text-muted">법 §10의2③</p>
        </SubSection>

        <SubSection title="● 시가불인정 감정기관">
          <ul className="list-disc pl-6 my-4 space-y-1">
            <li><strong>지정 사유</strong>: 감정가액이 다른 감정기관 감정가액의 80%에 미달하는 등</li>
            <li><strong>지정 효과</strong>: 1년의 범위에서 시가불인정 감정기관으로 지정</li>
            <li>지정 기간 중 해당 감정기관의 감정가액은 <strong>시가인정액으로 보지 않는다</strong>.</li>
          </ul>
          <p className="text-sm text-muted">법 §10의2④⑤</p>

          <Insight>
          <p>두 감정기관 감정가액 중 낮은 값이 높은 값의 <strong>80%에 미달</strong>하면 저평가 감정기관으로 지정될 수 있으므로 감정평가 시 유의한다.</p>
          </Insight>
        </SubSection>

        <SubSection title="● 부담부증여의 과세표준 분리">
          <p>증여자의 채무를 인수하는 부담부증여의 경우, 하나의 취득행위를 두 부분으로 나누어 각각 과세한다.</p>

          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)'}}>
          <thead>
          <tr style={{backgroundColor: '#f0f0f0'}}>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '35%'}}>구분</th>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '35%'}}>과세표준</th>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>적용 조문</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', backgroundColor: '#fafafa'}}>채무부담액 (유상 취득)</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유상승계취득 과세표준</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법 §10의3</td>
          </tr>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', backgroundColor: '#fafafa'}}>시가인정액 - 채무부담액 (무상 취득)</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>무상취득 과세표준</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법 §10의2</td>
          </tr>
          </tbody>
          </table>
          <p className="text-sm text-muted">법 §10의2⑥, §7⑪⑫</p>

          <Insight>
          <p>부담부증여는 채무액만큼은 매매로, 나머지는 증여로 취급한다 → 세율 및 과세표준 산정 방식이 다르다 (채무부담액에 대해서는 주택 유상거래 세율 등이 적용될 수 있다).</p>
          </Insight>
        </SubSection>
      </CalcBox>
    </div>
  );
}

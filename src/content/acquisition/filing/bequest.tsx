"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/**
 * meta:
 *   title: "유증"
 *   sectionId: "09"
 *   category: "취득세"
 *   subcategory: "신고"
 *   audience: "internal"
 *   source: "acquisitiontax.pdf"
 *   pageRange: [27, 27]
 *   effectiveDate: "2020-01-01"
 *   lastUpdated: "2026-02-08"
 *   status: "draft"
 *   lawReference: "지방세법 §15"
 *   tags: ["유증", "유언공정증서", "상속", "증여", "유언대용신탁"]
 */
export default function BequestV10() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold mb-4">5-1. 유증</h1>

      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 text-gray-600 italic">
        <p>유언공정증서를 작성한 후 사망했을 때의 취득세 신고 안내.</p>
      </blockquote>

      <hr className="my-6" />

      <CalcBox title="■ 유증 시 세율 및 신고기한" id="1.-유증-시-세율-및-신고기한">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>수증자</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>취급</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>세율</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>신고기한</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>1순위 상속자 (배우자 및 직계비속)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#1890ff', fontWeight: 'bold'}}>상속으로 봄</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>2.8%</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속개시일이 속하는 달의 말일부터 6개월 이내</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>1순위 상속자 이외의 자</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322', fontWeight: 'bold'}}>증여로 봄</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>3.5%</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>취득일(피상속인 사망일)이 속하는 달의 말일부터 3개월 이내</td>
      </tr>
      </tbody>
      </table>

      <Insight>

      <ul className="list-disc pl-6 my-4 space-y-1">
        <li><strong>포괄유증</strong>은 상속으로 봄 (<a href="https://www.olta.re.kr/explainInfo/judgeDecisionDetail.do?num=60081231" target="_blank" rel="noopener noreferrer">조심2015지1855</a>)</li>
        <li><strong>유언공정증서</strong>가 상속분할협의서나 증여계약서를 대신함</li>
      </ul>

      </Insight>

      <SubSection title="● 조심2022지0709 (2023.9.5.) — 계모자 관계 포괄유증">
        <p style={{fontWeight: 'bold', marginTop: '12px'}}>① 사실관계</p>
        <ul className="list-disc pl-6 my-2 space-y-1">
          <li>유증자(계모) 2021.3.9. 사망, 청구인 BBB은 계자(민법상 상속인 아님)</li>
          <li>청구인들이 오랜 기간 유증자 부양(생활비·병원비·간병비)</li>
          <li>쟁점부동산 = 유증자 재산의 대부분(삶의 터전)</li>
          <li>교회·시동생 유증분은 유증자가 생전에 이미 이행 완료 → 해당 부분 철회</li>
          <li>코로나·외국 국적 상속인 존재로 유언검인이 2021.9.30.에야 완료</li>
        </ul>
        <p style={{fontWeight: 'bold', marginTop: '12px'}}>② 처분청 주장 (특정유증)</p>
        <ul className="list-disc pl-6 my-2 space-y-1">
          <li>청구인들은 상속인이 아니므로 포괄유증 수유자가 될 수 없다는 주장</li>
          <li>일정 비율로 유증받은 것이 아님</li>
          <li>교회·시동생에게 별도 유증 → 특정유증</li>
          <li>조정대상지역 주택, 시가표준액 3억 이상 → 중과세율(1/1000·120) 적용 주장</li>
        </ul>
        <p style={{fontWeight: 'bold', marginTop: '12px'}}>③ 청구인 주장 (포괄유증)</p>
        <ul className="list-disc pl-6 my-2 space-y-1">
          <li>교회·시동생 유증분은 생전 이행 완료 → 해당 유언 부분 철회</li>
          <li>잔여 유언: 부동산 전부 + &quot;남은 것 있다면 1/2&quot; → 실질 포괄</li>
          <li>상속세·장례비·공과금 전부 청구인들이 부담</li>
          <li>유언검인 지연은 법원 전권사항 → 가산세 면제 정당한 사유</li>
        </ul>
        <p style={{fontWeight: 'bold', marginTop: '12px'}}>④ 조심 판단 → 부과처분 전부 취소</p>
        <ul className="list-disc pl-6 my-2 space-y-1">
          <li>쟁점부동산 = 유증자 재산의 대부분 → 실질적 상속 의사 반영</li>
          <li>금융재산은 상속세·장례비 충당에 쓰였을 가능성 높음</li>
          <li>유언장 전체 표현 + 법정상속인들이 법정에서 이의 없다고 진술</li>
          <li>포괄유증 인정 → 중과세율(1/1000·120) 아닌 상속세율(1/1000·28) 적용</li>
        </ul>
      </SubSection>

      <SubSection title="● 조심2015지1855 (2017.5.2.) — 외국인 사실혼 배우자 포괄유증">
        <p style={{fontWeight: 'bold', marginTop: '12px'}}>① 사실관계</p>
        <ul className="list-disc pl-6 my-2 space-y-1">
          <li>유증자: 한국 국적 상실 후 외국 국적 취득</li>
          <li>청구인: 외국 국적 사실혼 배우자, 두 자녀 공동 출생(민법상 상속인 아님)</li>
          <li>제1부동산 단독 유증 + 제2부동산 4/2 지분 유증</li>
          <li>국내 잔여재산 전부를 청구인에게 유증, 세금·채무·장례비 청구인이 부담</li>
          <li>국제사법 적용 여부가 별도 쟁점으로 추가됨</li>
        </ul>
        <p style={{fontWeight: 'bold', marginTop: '12px'}}>② 처분청 주장 (특정유증)</p>
        <ul className="list-disc pl-6 my-2 space-y-1">
          <li>청구인은 유언장에 &quot;친구&quot; 및 &quot;유언집행자 겸 관리인&quot;으로 표시됨</li>
          <li>국외에 다른 재산 존재 → 포괄유증 해당 불가</li>
          <li>사실혼 배우자는 민법상 상속인 아님 → 국내 강행규정 적용</li>
          <li>조세형평상 외국인에게만 상속세율 적용 불가</li>
        </ul>
        <p style={{fontWeight: 'bold', marginTop: '12px'}}>③ 청구인 주장 (포괄유증)</p>
        <ul className="list-disc pl-6 my-2 space-y-1">
          <li>국내 재산을 청구인·자녀에게 비율로 유증 → 포괄유증</li>
          <li>세금·채무·장례비·유언집행비용 청구인이 전부 부담</li>
          <li>국제사법 §49: 피상속인 본국법 적용 시 사실혼 배우자도 상속인</li>
          <li>유언집행 절차 복잡 → 60일 내 신고 사실상 불가 → 가산세 면제 주장</li>
        </ul>
        <p style={{fontWeight: 'bold', marginTop: '12px'}}>④ 조심 판단 → 경정청구 거부처분 취소</p>
        <ul className="list-disc pl-6 my-2 space-y-1">
          <li>비상속인도 포괄유증이면 상속에 해당(민법 §1078)</li>
          <li>국내 재산 한정하여 비율 유증 구조 인정</li>
          <li>잔여재산 포괄 지정 + 채무 전부 승계 → 포괄유증</li>
          <li>개별 재산 표시만으로 특정유증 단정 불가(대법원 78다1816)</li>
          <li>포괄유증 인정 → 무상취득세율(1/1000·35) 아닌 상속세율(1/1000·28) 적용</li>
        </ul>
      </SubSection>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 유언대용신탁" id="2.-유언대용신탁">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>구분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>내용</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>개념 근거</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>신탁법 §59 (유언대용신탁의 정의·요건)</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>필요서류</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>신탁재산귀속증서, 신탁원부, 가족관계증명서, 기본증명서</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>유언대용신탁 유형</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
        ① 수익자로 지정된 자가 위탁자 <strong>사망 시</strong> 수익권을 취득하는 신탁 (§59①1호)<br/>
        ② 수익자가 위탁자 <strong>사망 이후</strong> 신탁재산에 기한 급부를 받는 신탁 (§59①2호)
      </td>
      </tr>
      </tbody>
      </table>

      <SubSection title="● 수익권 유형별 과세 판단">
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>수익권 내용</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>과세 여부</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>비고</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>신탁 부동산에 대한 <strong>등기청구권</strong> 보유</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322', fontWeight: 'bold'}}>과세 O</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속 취득 해당</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>신탁 부동산 <strong>처분대금</strong>에 대한 금전청구권만 보유</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#1890ff', fontWeight: 'bold'}}>과세 X</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>취득세 과세물건 해당 없음</td>
      </tr>
      </tbody>
      </table>
      </SubSection>

      <SubSection title="● 처분신탁형 유언대용신탁 — 과세 불가 사례">
      <p style={{fontWeight: 'bold', marginTop: '12px'}}>① 사실관계</p>
      <ul className="list-disc pl-6 my-2 space-y-1">
        <li>위탁자 B는 생전에 은행(수탁자)과 아파트에 관한 신탁계약 체결</li>
        <li>신탁계약 내용: B 사망 시 조카 A를 사후 1차 수익자로 지정하되, 수탁자가 아파트를 <strong>처분</strong>하여 그 대금을 A에게 지급하기로 약정 (처분신탁 + 유언대용신탁 결합)</li>
        <li>B 사망 후 수탁자는 아파트를 제3자에게 매각하고 소유권이전등기 완료</li>
        <li>처분청은 A가 B 사망 시 아파트를 상속 취득하였다고 보아 취득세 부과</li>
      </ul>
      <p style={{fontWeight: 'bold', marginTop: '12px'}}>② 쟁점</p>
      <p>사후수익자 A가 위탁자 B의 사망으로 아파트를 취득한 것으로 볼 수 있는지 여부</p>
      <p style={{fontWeight: 'bold', marginTop: '12px'}}>③ 판단</p>
      <ul className="list-disc pl-6 my-2 space-y-1">
        <li>신탁 설정으로 소유권이 수탁자에게 <strong>대내외적으로 완전 이전</strong>되므로 위탁자 사망 시 해당 부동산은 민사법상 상속재산에 해당하지 않음</li>
        <li>A가 취득한 수익권은 아파트 자체가 아닌 <strong>처분대금(금전)에 대한 청구권</strong>에 불과</li>
        <li>금전채권은 취득세 <strong>과세물건에 해당하지 않음</strong></li>
        <li>A가 아파트를 사실상 취득하였다고도 볼 수 없음 → <strong>취득세 부과 불가</strong></li>
      </ul>
      <p style={{fontWeight: 'bold', marginTop: '12px'}}>④ 관련 판례</p>
      <ul className="list-disc pl-6 my-2 space-y-1">
        <li>대법원 2025두33790 (2025. 9. 25. 선고, 상고기각 확정)</li>
        <li>원심: 서울고등법원 2024누68714</li>
      </ul>
      <p style={{fontWeight: 'bold', marginTop: '12px'}}>⑤ 실무 적용</p>
      <ul className="list-disc pl-6 my-2 space-y-1">
        <li>유언대용신탁 과세 시 <strong>신탁원부 내용을 반드시 확인</strong></li>
        <li>수익자가 부동산 자체에 대한 <strong>등기청구권</strong>을 가지는지, <strong>처분대금 청구권</strong>만 가지는지 구분하여 과세 여부 판단</li>
        <li>처분신탁과 결합된 유언대용신탁의 경우 수익권이 금전채권에 불과할 수 있으므로 <strong>신탁계약 내용을 면밀히 검토</strong></li>
      </ul>
      </SubSection>

      <SubSection title="● 취득세 과세 공백 구조">
      <p style={{fontWeight: 'bold', marginTop: '12px'}}>① 거래 단계별 과세 현황</p>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>단계</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>거래 내용</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>과세 여부</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>근거</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>① 신탁 설정</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>위탁자 B → 수탁자 C 은행 소유권 이전</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#1890ff', fontWeight: 'bold'}}>비과세</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>지방세법 §9③1호</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>② B 사망</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>수익권 A에게 귀속</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#1890ff', fontWeight: 'bold'}}>과세 불가</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>금전채권에 불과</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>③ 수탁자 매각</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>C 은행 → 제3자</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>매수인 취득세 납부</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>정상 거래</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>④ 대금 지급</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>C 은행 → A</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#1890ff', fontWeight: 'bold'}}>취득세 없음</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>금전 수령</td>
      </tr>
      </tbody>
      </table>
      <p style={{fontWeight: 'bold', marginTop: '12px'}}>② 핵심 공백</p>
      <ul className="list-disc pl-6 my-2 space-y-1">
        <li>B가 아파트를 A에게 <strong>직접 유증·증여</strong>했다면 → 취득세 <strong>3.5% 과세</strong></li>
        <li>처분신탁형 유언대용신탁을 이용하면 → 취득세 <strong>완전 회피</strong></li>
        <li>동일한 경제적 실질(부의 이전)임에도 법적 형식 차이로 과세 공백 발생</li>
      </ul>
      <p style={{fontWeight: 'bold', marginTop: '12px'}}>③ 타 세목 과세 가능 여부</p>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>세목</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>과세 여부</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>비고</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>취득세</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#1890ff', fontWeight: 'bold'}}>없음</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>위 판례</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속세·증여세</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322', fontWeight: 'bold'}}>과세 가능</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상증세법상 유언대용신탁 포함 (2020. 12. 22. 개정)</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>양도소득세</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>수탁자 매각 시 발생</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>위탁자 또는 수익자 귀속 검토 필요</td>
      </tr>
      </tbody>
      </table>
      <p style={{fontWeight: 'bold', marginTop: '12px'}}>④ 입법적 보완 필요성</p>
      <ul className="list-disc pl-6 my-2 space-y-1">
        <li>현행 지방세법은 부동산의 <strong>물리적 취득 여부</strong>만을 과세 요건으로 규정</li>
        <li>상증세법과 달리 유언대용신탁에 관한 <strong>간주 규정 없음</strong></li>
        <li>처분신탁형 유언대용신탁을 통한 취득세 회피 차단을 위한 <strong>입법적 보완 필요</strong></li>
      </ul>
      </SubSection>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 유류분반환청구소송" id="3.-유류분반환청구소송">

      <Insight>

      <p><strong>유류분</strong>: 법률상 상속받을 수 있는 지분</p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>피상속인의 재산처분 자유에 일정한 비율의 제한을 두어 특정상속인에 대한 최소한의 상속권리를 보장하기 위한 제도</li>
      </ul>

      </Insight>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 관련 법령" id="4.-관련-법령">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>구분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>법령명</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>조항</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>비고</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>근거법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>지방세법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://law.go.kr/법령/지방세법/제15조" target="_blank" rel="noopener noreferrer">§15</a></td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>세율의 특례</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>참조</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>신탁법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://law.go.kr/법령/신탁법/제59조" target="_blank" rel="noopener noreferrer">§59</a></td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유언대용신탁</td>
      </tr>
      </tbody>
      </table>

      </CalcBox>

      <hr className="my-6" />

      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 text-gray-600 italic">
        <p>본 자료는 지방세 정보 안내용이며, 법적 효력이 없습니다. 정확한 내용은 관할 지자체 세무부서에 문의하세요.</p>
      </blockquote>

    </div>
  );
}

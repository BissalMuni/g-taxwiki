"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/**
 * meta:
 *   title: "영유아 보육시설 감면"
 *   sectionId: "15"
 *   category: "취득세"
 *   subcategory: "감면"
 *   audience: "internal"
 *   source: "acquisitiontax.pdf"
 *   pageRange: [38]
 *   effectiveDate: "2020-08-12"
 *   lastUpdated: "2026-06-18"
 *   status: "active"
 *   lawReference: "지특법 §19"
 *   tags: ["영유아", "보육시설", "감면", "어린이집", "유치원", "직장어린이집"]
 */
export default function ChildcareFacilityV10() {
  return (
    <div className="space-y-6">

      <CalcBox title="■ 취득세 면제 (제1항)" id="취득세-면제">
        <Insight>
          취득세 <strong>100% 면제</strong> · 적용 기한: <strong>2027년 12월 31일까지</strong>
        </Insight>

        <p>다음 중 하나에 해당하는 부동산을 취득하는 경우 취득세를 전액 면제합니다.</p>

        <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', margin: '12px 0'}}>
        <thead>
        <tr style={{backgroundColor: '#f0f0f0'}}>
        <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '40px'}}>구분</th>
        <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>대상 부동산</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>①</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
          <a href="https://law.go.kr/법령/영유아보육법" target="_blank" rel="noopener noreferrer">영유아보육법</a>에 따른 어린이집 또는{' '}
          <a href="https://law.go.kr/법령/유아교육법" target="_blank" rel="noopener noreferrer">유아교육법</a>에 따른 유치원으로 직접 사용하기 위하여 취득하는 부동산
        </td>
        </tr>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>②</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
          <a href="https://law.go.kr/법령/영유아보육법/제10조" target="_blank" rel="noopener noreferrer">영유아보육법 §10④</a>에 따른 직장어린이집을 법인·단체·개인에게 위탁 운영하기 위하여 취득하는 부동산
        </td>
        </tr>
        </tbody>
        </table>

        <p style={{fontSize: 'var(--content-font-size, 13px)', color: '#666', marginTop: '8px'}}>
          ※ ②의 "대통령령으로 정하는 사업주"란{' '}
          <a href="https://law.go.kr/법령/영유아보육법시행령/제20조" target="_blank" rel="noopener noreferrer">영유아보육법 시행령 §20⑤</a>에 따른 사업주
          (지특법 시행령 §8의3①)
        </p>
      </CalcBox>

      <CalcBox title="■ 재산세 면제 (제2항)" id="재산세-면제">
        <Insight>
          재산세 <strong>100% 면제</strong> (
          <a href="https://law.go.kr/법령/지방세법/제112조" target="_blank" rel="noopener noreferrer">지방세법 §112</a>{' '}
          부과액, 도시지역분 포함) · 적용 기한: <strong>2027년 12월 31일까지</strong>
        </Insight>

        <SubSection title="● 소유자 = 사용자인 경우 (제1호)">
          <p>과세기준일 현재 부동산 소유자가 어린이집·유치원에 <strong>직접 사용</strong>하는 경우 면제합니다.</p>
          <p style={{fontSize: 'var(--content-font-size, 13px)', color: '#666'}}>
            예: 개인이 본인 명의 건물에서 직접 어린이집 운영 / 학교법인이 본인 소유 건물에서 유치원 운영
          </p>
        </SubSection>

        <SubSection title="● 소유자 ≠ 사용자인 경우 (제2호, 시행령 §8의3②)">
          <p>소유자와 사용자가 다르더라도 아래 4가지 유형에 해당하면 재산세를 면제합니다.</p>

          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', margin: '12px 0'}}>
          <thead>
          <tr style={{backgroundColor: '#f0f0f0'}}>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '100px'}}>유형</th>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>소유자</th>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>사용자</th>
          <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>추가 요건</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>B-1 가족관계형</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>사용자의 배우자 또는 직계혈족</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>가족 구성원</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>소유자가 운영에 <strong>직접 종사</strong></td>
          </tr>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>B-2 공동소유형</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>사용자 + 배우자·직계혈족 공동소유</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>공동소유자 중 1인</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>—</td>
          </tr>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>B-3 종교단체형</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>종교단체</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>그 단체의 대표자 또는 종교법인</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>—</td>
          </tr>
          <tr>
          <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>B-4 위탁운영형</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>사업주 (직장어린이집 설치)</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>위탁받은 법인·단체·개인</td>
          <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>직장어린이집 위탁 운영</td>
          </tr>
          </tbody>
          </table>

          <p style={{fontSize: 'var(--content-font-size, 13px)', color: '#666'}}>
            ※ B-4 해당 직장어린이집:{' '}
            <a href="https://law.go.kr/법령/영유아보육법/제14조" target="_blank" rel="noopener noreferrer">영유아보육법 §14①</a>{' '}
            단서(공동 설치·운영) 및 §14① + 시행령 §20⑤에 따라 설치된 경우
          </p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 취득세 추징 사유 (제3항)" id="취득세-추징">
        <p>감면받은 취득세는 다음 사유 발생 시 해당 부분을 추징합니다.</p>

        <SubSection title="● 어린이집·유치원 직접 사용 목적 취득">
          <ul style={{paddingLeft: '20px', lineHeight: '1.9', margin: '8px 0'}}>
            <li>정당한 사유 없이 <strong>취득일부터 1년 이내</strong> 해당 용도로 직접 사용하지 않은 경우</li>
            <li>직접 사용 기간이 <strong>2년 미만</strong>인 상태에서 매각·증여하거나 다른 용도로 사용한 경우</li>
          </ul>
        </SubSection>

        <SubSection title="● 직장어린이집 위탁 운영 목적 취득">
          <ul style={{paddingLeft: '20px', lineHeight: '1.9', margin: '8px 0'}}>
            <li>정당한 사유 없이 <strong>취득일부터 1년 이내</strong> 해당 용도로 위탁 운영하지 않은 경우</li>
            <li>위탁 운영 기간이 <strong>2년 미만</strong>인 상태에서 매각·증여하거나 다른 용도로 사용한 경우</li>
          </ul>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 구비서류" id="구비서류">
        <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
        <thead>
        <tr style={{backgroundColor: '#f0f0f0'}}>
        <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '50px'}}>순번</th>
        <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>서류</th>
        <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>비고</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>1</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>취득세신고서, 감면신청서</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>-</td>
        </tr>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>2</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>보육시설인가증</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322'}}>
          설치운용자와 부동산소유자 일치<br/>
          <strong>대표자 = 취득자</strong>
        </td>
        </tr>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>3</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>부동산이용계획서</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>도장날인 필수</td>
        </tr>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>4</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>매매계약서 + 신고필증</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>-</td>
        </tr>
        </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 관련 법령" id="관련-법령">
        <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
        <thead>
        <tr style={{backgroundColor: '#f0f0f0'}}>
        <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>구분</th>
        <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>법령명</th>
        <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>조항</th>
        <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>내용</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>근거법</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>지방세특례제한법</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
          <a href="https://law.go.kr/법령/지방세특례제한법/제19조" target="_blank" rel="noopener noreferrer">§19</a>
        </td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>어린이집·유치원 취득세·재산세 면제</td>
        </tr>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>시행령</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>지방세특례제한법 시행령</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
          <a href="https://law.go.kr/법령/지방세특례제한법시행령/제8조의3" target="_blank" rel="noopener noreferrer">§8의3</a>
        </td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>재산세 면제 소유자-사용자 관계 세부 요건</td>
        </tr>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>참조법</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>영유아보육법</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
          <a href="https://law.go.kr/법령/영유아보육법/제10조" target="_blank" rel="noopener noreferrer">§10</a>,{' '}
          <a href="https://law.go.kr/법령/영유아보육법/제14조" target="_blank" rel="noopener noreferrer">§14</a>
        </td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>보육시설 종류, 직장어린이집 설치 의무</td>
        </tr>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>참조령</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>영유아보육법 시행령</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
          <a href="https://law.go.kr/법령/영유아보육법시행령/제20조" target="_blank" rel="noopener noreferrer">§20⑤</a>
        </td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>직장어린이집 설치 의무 사업주 정의</td>
        </tr>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>참조법</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유아교육법</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
          <a href="https://law.go.kr/법령/유아교육법" target="_blank" rel="noopener noreferrer">전문</a>
        </td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유치원 정의</td>
        </tr>
        <tr>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>참조법</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>지방세법</td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
          <a href="https://law.go.kr/법령/지방세법/제112조" target="_blank" rel="noopener noreferrer">§112</a>
        </td>
        <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>재산세 세율·부과 기준 (도시지역분 포함)</td>
        </tr>
        </tbody>
        </table>
      </CalcBox>

    </div>
  );
}

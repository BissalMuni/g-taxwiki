"use client";


import { Insight } from "@/components/content/shared";
/**
 * meta:
 *   title: "임대사업자 감면"
 *   sectionId: "17"
 *   category: "취득세"
 *   subcategory: "감면"
 *   audience: "internal"
 *   source: "법제처 OpenAPI (지특법·지특법 시행령 등 19개 조문)"
 *   pageRange: [40,41,42]
 *   effectiveDate: "2026-03-31"
 *   lastUpdated: "2026-05-21"
 *   status: "draft"
 *   lawReference: "지특법 §31, §31의3 · 지특법 시행령 §13, §13의2, §13의3"
 *   tags: ["임대사업자","감면","공공임대","장기임대","추징","재산세"]
 */
export default function RentalBusinessV10() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold mb-4">12. 임대사업자 감면신청시</h1>

      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 text-gray-600 italic">
        <p>임대사업자 취득세·재산세 감면 요건, 감면율, 추징 요건 및 처리방법 안내. 근거: 지특법 §31(공공임대주택 등) · §31의3(장기일반민간임대주택 등) / 일몰 2027.12.31.</p>
      </blockquote>

      <Insight>
      <p><strong>핵심 정의</strong></p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li><strong>임대형기숙사</strong>: 주택법 §2제4호 준주택 중 임대형기숙사로서 건축법 §38 건축물대장에 호수별 전용면적이 구분 기재된 것 (전용면적 40㎡ 이하인 호수 등 시행령 §13①로 한정)</li>
        <li><strong>공동주택</strong>: 부대시설 및 임대수익금 전액을 임대주택관리비로 충당하는 임대용 복리시설 포함</li>
        <li><strong>오피스텔</strong>: 주택법 §2제4호 준주택 중 오피스텔(부속토지 포함)</li>
        <li><strong>장기임대주택</strong>: 10년 이상 장기임대 목적의 전용면적 60㎡ 초과 85㎡ 이하 임대주택 (20호 이상)</li>
        <li><strong>다가구주택</strong>(§31의3 한정): 모든 호수 전용면적 40㎡ 이하이고 건축물대장에 호수별 면적이 구분 기재된 것 (시행령 §13의2②)</li>
      </ul>
      <p><strong>§31의3 §1 단서 (사업자 정의 제외 대상)</strong></p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>구 민특법(법률 제17482호 개정 전) §5에 따라 등록한 단기민간임대주택을 <strong>2020.7.11. 이후 공공지원민간임대주택으로 변경 신고</strong>한 주택</li>
        <li>2020.7.11. 이후 등록 신청한 장기일반민간임대주택 중 <strong>아파트를 임대하는 민간매입임대주택</strong></li>
        <li>단기민간임대주택을 <strong>2020.7.11. 이후 장기일반민간임대주택으로 변경 신고</strong>한 주택</li>
      </ul>
      </Insight>

      <hr className="my-6" />

      <h2 id="1.-구비서류" className="text-xl font-semibold mt-8 mb-4">1. 구비서류</h2>

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
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>감면신청서 및 취득세신고서</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>지특법 31조, 31조의3</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>2</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>임대사업자등록증</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>주민등록주소지 관청에서 신고 / (선택)접수증</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>3</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>분양계약서</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>검인 또는 신고필증</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>4</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>잔금납부확인서</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>(=분양금 납입내역서) 또는 종합영수증 등</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>5</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>주택취득 상세명세서, 가족관계증명</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322'}}>중과세율 적용 대상</td>
      </tr>
      </tbody>
      </table>

      <hr className="my-6" />

      <h2 id="2.-취득세-감면" className="text-xl font-semibold mt-8 mb-4">2. 취득세 감면</h2>

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}} colSpan={2}>구분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>지특법 §31 (공공임대주택 등)</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', backgroundColor: '#e6f7ff'}}>지특법 §31의3 (장기일반민간임대주택 등)</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}} colSpan={2}>사업자</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: 'var(--content-font-size, 13px)'}}>
      <strong>공공주택사업자</strong> (공공주택특별법 §2)
      </td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: 'var(--content-font-size, 13px)'}}>
      <strong>임대사업자</strong> (민특법 §5 등록)<br/>
      → 공공지원민간임대주택(민특법 §2제4호) 또는 장기일반민간임대주택(§2제5호)
      </td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}} colSpan={2}>등록 기한</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>-</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: 'var(--content-font-size, 13px)'}}>
      · 건축물: <strong>취득일부터 60일 이내</strong> 임대사업자 등록<br/>
      · 토지: <strong>주택법 §15 사업계획승인 또는 건축법 §11 건축허가일부터 60일 이내</strong>이면서 토지 취득일부터 1년 6개월 이내<br/>
      · 임대의무기간 <strong>10년 이상</strong>
      </td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}} colSpan={2}>감면대상</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: 'var(--content-font-size, 13px)'}}>
      <strong>§1 건축 (토지·건물)</strong><br/>
      ① 임대형기숙사 또는 공동주택을 건축하기 위해 취득하는 토지<br/>
      ② 임대 목적으로 건축하여 취득하는 임대형기숙사·공동주택<br/><br/>
      <strong>§2 최초 유상취득</strong><br/>
      ③ 건축주로부터 최초 유상거래로 취득하는 임대형기숙사·공동주택·오피스텔<br/>
      <span style={{color:'#cf1322'}}>※ §10의3 취득 당시 가액 3억(수도권 6억) 초과 공동주택·오피스텔 제외</span>
      </td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: 'var(--content-font-size, 13px)'}}>
      <strong>§1 건축 (토지·건물)</strong><br/>
      ① 임대형기숙사 또는 공동주택을 건축하기 위해 취득하는 토지<br/>
      ② 임대 목적으로 건축하여 취득하는 임대형기숙사·공동주택<br/><br/>
      <strong>§2 최초 유상취득</strong><br/>
      ③ 임대형기숙사·공동주택·오피스텔(최초 유상거래)<br/>
      <span style={{color:'#cf1322'}}>※ §10의3 취득 당시 가액 3억(수도권 6억) 초과 공동주택·오피스텔 제외</span>
      </td>
      </tr>
      <tr style={{backgroundColor: '#f6ffed'}}>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}} rowSpan={2}>감면율</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>60㎡ 이하</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
      - 취득세 면제<br/>
      - 최소납부제 적용으로 <strong>85% 감면</strong><br/>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>농특세 (오피스텔은 감면분만)</li>
      </ul>
      </td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>(좌동)</td>
      </tr>
      <tr style={{backgroundColor: '#fffbe6'}}>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>85~60㎡</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
      - 취득세 <strong>50% 감면</strong><br/>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>농특세 (오피스텔은 감면분만)</li>
      </ul>
      </td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>장기임대 목적 <strong>20호 이상</strong></li>
      </ul>
      </td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', color: '#cf1322'}} colSpan={2}>추징 요건 (§3)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: 'var(--content-font-size, 13px)'}}>
      1. 토지 취득일부터 정당한 사유 없이 <strong>2년 이내 미착공</strong><br/>
      2. <strong>공공주택특별법 §50의2① 임대의무기간</strong>에 임대 외 용도 사용·매각·증여
      </td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: 'var(--content-font-size, 13px)'}}>
      1. 토지 취득일부터 정당한 사유 없이 <strong>2년 이내 미착공</strong><br/>
      2. <strong>민특법 §43① 임대의무기간</strong>에 다음 어느 하나:<br/>
      &nbsp;&nbsp;가. 임대 외 용도 사용·매각·증여<br/>
      &nbsp;&nbsp;나. <strong>민특법 §6 등록 말소</strong>
      </td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', color: '#52c41a'}} colSpan={2}>추징 제외 (시행령 위임)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: 'var(--content-font-size, 13px)'}}>
      지특법 시행령 §13② → <strong>공공주택특별법 시행령 §54②제1·2호</strong>의 경우
      </td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: 'var(--content-font-size, 13px)'}}>
      지특법 시행령 §13의2① → <strong>민특법 §43④</strong>의 경우<br/>
      <span style={{color:'#666'}}>(부도·파산·상속인 지위승계 거부, 강제말소 등 §6①제11호)</span>
      </td>
      </tr>
      </tbody>
      </table>

      <Insight>

      <ul className="list-disc pl-6 my-4 space-y-1">
        <li><strong>전용면적 60㎡ 이하</strong> 부동산 취득세는 100% 감면이나, 취득세액 200만원 초과시 15%가 부과되므로 <strong>최소납부세액</strong> 적용시 15%는 과세됨 (주택 2억원까지 취득세 0원)</li>
        <li>임대사업자가 <strong>다주택자</strong>이면 중과세율 적용 후 감면세율 적용</li>
        <li>건축(건설)임대사업자 감면 - 감면분과 비감면분의 취득가액을 <strong>면적대비로 안분</strong>하여 각각 과세</li>
      </ul>

      </Insight>

      <hr className="my-6" />

      <h2 id="3.-재산세-감면" className="text-xl font-semibold mt-8 mb-4">3. 재산세 감면</h2>

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}} colSpan={2}>구분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}} colSpan={3}>지특법 §31 (공공임대주택 등)</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold', backgroundColor: '#e6f7ff'}} colSpan={3}>지특법 §31의3 (장기일반민간임대주택 등)</th>
      </tr>
      <tr style={{backgroundColor: '#fafafa'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '6px'}} colSpan={2}>감면대상</th>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}} colSpan={3}>
      <p>①임대형기숙사 ②공동주택(2세대↑) ③오피스텔(2세대↑) ④건축중인토지</p>
      </td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}} colSpan={3}>
      <p>①임대형기숙사 ②다가구주택★ ③공동주택(2세대↑) ④오피스텔(2세대↑) ⑤건축중인토지</p>
      </td>
      </tr>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>유형</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>면적</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>재산세</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>도시지역분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>지역자원시설세</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>재산세</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>도시지역분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>지역자원시설세</th>
      </tr>
      </thead>
      <tbody>
      <tr style={{backgroundColor: '#f6ffed'}}>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}} rowSpan={3}>감면구분</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>40㎡ 이하</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', color: '#52c41a', fontWeight: 'bold'}}>100%<br/><span style={{fontSize:'11px',fontWeight:'normal'}}>(임대의무 30년↑<br/>기숙사·공동주택)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', color: '#52c41a', fontWeight: 'bold'}}>100%<br/><span style={{fontSize:'11px',fontWeight:'normal'}}>(§112 포함)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center'}}>과세</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', color: '#52c41a', fontWeight: 'bold'}}>100%<br/><span style={{fontSize:'11px',fontWeight:'normal'}}>(기숙사·다가구는 면적무관)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', color: '#52c41a', fontWeight: 'bold'}}>100%<br/><span style={{fontSize:'11px',fontWeight:'normal'}}>(§112 포함)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center'}}>과세</td>
      </tr>
      <tr style={{backgroundColor: '#fffbe6'}}>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>60㎡ 이하</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', fontWeight: 'bold'}}>50%</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', fontWeight: 'bold'}}>50%<br/><span style={{fontSize:'11px',fontWeight:'normal'}}>(§112 포함)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center'}}>과세</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', fontWeight: 'bold'}}>75%<br/><span style={{fontSize:'11px',fontWeight:'normal'}}>(40㎡ 초과~60㎡)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', fontWeight: 'bold'}}>75%<br/><span style={{fontSize:'11px',fontWeight:'normal'}}>(§112 포함)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center'}}>과세</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>85㎡ 이하</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', fontWeight: 'bold'}}>25%<br/><span style={{fontSize:'11px',fontWeight:'normal'}}>(공동주택·오피스텔)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', color:'#cf1322'}}>과세<br/><span style={{fontSize:'11px'}}>(§112 미포함)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center'}}>과세</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', fontWeight: 'bold'}}>50%<br/><span style={{fontSize:'11px',fontWeight:'normal'}}>(공동주택·오피스텔)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center', color:'#cf1322'}}>과세<br/><span style={{fontSize:'11px'}}>(§112 미포함)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', textAlign: 'center'}}>과세</td>
      </tr>
      <tr style={{backgroundColor: '#fff2f0'}}>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold', color: '#cf1322'}} colSpan={2}>감면제외</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontSize: 'var(--content-font-size, 13px)'}} colSpan={6}>
      - 공동주택: 시가표준액 3억(수도권 6억) 초과 (공공건설임대주택의 경우 9억)<br/>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>오피스텔: 시가표준액 2억(수도권 4억) 초과</li>
      </ul>
      </td>
      </tr>
      </tbody>
      </table>

      <Insight>

      <p><strong>다가구주택 감면 범위</strong> (지특법 §31의3)</p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>모든 호수의 전용면적(40㎡ 이하)이 <strong>건축물대장에 기재</strong>되어 있는 경우만 감면</li>
        <li>소유자 실제 거주 호수는 <strong>제외</strong> (재산세만 감면)</li>
      </ul>

      </Insight>

      <hr className="my-6" />

      <h2 id="4.-임대감면후-매각-또는-말소시-처리방법" className="text-xl font-semibold mt-8 mb-4">4. 임대감면후 매각 또는 말소시 처리방법</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">A. 취득세 추징</h3>

      <Insight>

      <p><strong>이자상당액 추징</strong> (지특법 §178②, 영 §123의2)</p>

      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>2020년 1월 1일 취득분부터는 <strong>60일 이내 신고해도</strong> 이자상당액 발생</li>
        <li><strong>가산기간</strong>: 취득세 납부기한(등기일)의 다음날 ~ 추징사유 발생일</li>
        <li><strong>납부지연가산 이자율</strong>: 1일 10만분의 22 (22.6.7. 이전: 1일 10만분의 25)</li>
      </ul>

      </Insight>

      <p><strong>처리 절차</strong>:</p>
      <p>1. 등기일자를 반드시 입력</p>
      <p>2. 납기일자를 신고기한과 맞춤</p>
      <p>3. 60일 이내 신고시 세액조정 클릭 → 납부가산세를 모두 지워서 <strong>이자상당액만</strong> 표시</p>

      <p>→ 감면추징시 추징사유발생일부터 60일 이내 신고납부 안하면, 무신고 혹은 과소신고 및 납부지연가산세 추가하여 <strong>보통징수</strong></p>

      <h3 className="text-lg font-semibold mt-6 mb-3">B. 재산세 추징 (§31 ⑤ · §31의3 ⑤)</h3>

      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>감면사유 소멸일부터 <strong>소급하여 5년 이내</strong>의 감면된 재산세 추징</li>
        <li>추징 트리거:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>주택법 §49 사용검사 / 건축법 §22 사용승인</strong>(임시사용승인 포함) 받기 전에 건축 중 토지를 매각·증여한 경우</li>
            <li>임대의무기간(공공: 공공주택특별법 §50의2① / 민간: 민특법 §43①) 중 매각·증여</li>
            <li>§31의3 한정: <strong>민특법 §6에 따라 임대사업자 등록 말소</strong></li>
          </ul>
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-3">C. 추징 제외 — 자진말소·자동말소 예외</h3>

      <Insight>

      <p><strong>§31의3 ⑤ 단서</strong>: 민특법 §43①에 따른 <strong>임대의무기간 경과 후 등록 말소</strong>, 그 밖에 <strong>대통령령으로 정하는 경우</strong>(지특법 시행령 §13의2③ → 민특법 §43④ 사유로 등록 말소) → 재산세 추징 제외</p>

      <p><strong>지특법 시행령 §13의2</strong> 위임 매핑 (시행 2026.2.27.):</p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>① 법 §31의3③제2호의 "대통령령으로 정하는 경우" → 민특법 §43④의 경우 (취득세 추징 예외)</li>
        <li>② 법 §31의3④의 "대통령령으로 정하는 다가구주택" → 모든 호수 전용면적 40㎡ 이하 + 건축물대장에 호수별 면적이 구분 기재된 다가구주택 (민특법 시행령 §2의2의 일부 임대 다가구주택은 임대 부분만)</li>
        <li>③ 법 §31의3⑤의 "대통령령으로 정하는 경우" → 민특법 §43④ 사유로 등록 말소된 경우 (재산세 추징 예외)</li>
      </ul>

      <p>단기임대(4년)와 장기임대 중 아파트매입임대와 같이 <strong>폐지유형</strong>으로 등록하였다가 임대의무기간 종료 전 <strong>자진말소</strong>하는 경우 취득세·재산세 감면혜택 유지하고 <strong>추징하지 않음</strong> ('20.8.18. 신설시행)</p>

      </Insight>

      <h3 className="text-lg font-semibold mt-6 mb-3">D. §31 추가 감면 — 공공주택사업자 외</h3>

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '90px'}}>조항</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>주체·대상</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>감면율</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>추징</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>§31 ⑥</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><strong>한국토지주택공사</strong>(한국토지주택공사법) 또는 <strong>지방공사</strong>(지방공기업법 §49)가 <strong>공공주택특별법 §43①</strong>에 따라 매입·공급하는 주택·건축물 (시행령 §13③: 단독·다중·다가구·국민주택규모 이하 아파트·연립·다세대·기숙사(85㎡↓)·오피스텔)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>취득세 <strong style={{color:'#1890ff'}}>25%</strong><br/>재산세 <strong style={{color:'#52c41a'}}>50%</strong></td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize:'12px'}}>1. 정당한 사유 없이 매입일부터 1년 경과 후 미사용<br/>2. 직접 사용 2년 미만에 매각·증여·용도변경</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>§31 ⑦</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}} colSpan={3}>§6에 따른 재산세 경감 대상에 <strong>한국토지주택공사가 §43①에 따라 매입하여 세대수·구조 등을 변경하거나 철거 후 신축하여 공급</strong>하는 주택·건축물 포함</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>§31 ⑧</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>공공주택사업자가 취득한 주택을 <strong>지분적립형 분양주택</strong>(공공주택특별법 §2제1호의4)으로 최초 공급, <strong>2025.1.1.~2026.12.31.</strong> 기간 동안 소유권 공유 (공공주택사업자 지분에 한정)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>재산세 <strong>25%</strong><br/><span style={{fontSize:'11px'}}>(납세의무 최초 성립일부터 3년간)</span></td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize:'12px'}}>과세기준일 현재 지분적립형주택에 해당하지 않으면 적용 제외</td>
      </tr>
      </tbody>
      </table>

      <hr className="my-6" />

      <h2 id="5.-(구)임대등록주택-제도-개편-현황" className="text-xl font-semibold mt-8 mb-4">5. (구)임대등록주택 제도 개편 현황</h2>

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}} colSpan={2}>주택 구분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}} colSpan={2}>신규등록 가능여부</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}} rowSpan={2}>말소로 인한 추징시</th>
      </tr>
      <tr style={{backgroundColor: '#fafafa'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px'}} colSpan={2}></th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px'}}>매입임대</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px'}}>건설임대</th>
      </tr>
      </thead>
      <tbody>
      <tr style={{backgroundColor: '#fff2f0'}}>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>단기임대</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>단기(4년)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', color: '#cf1322', fontWeight: 'bold'}}>폐지</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', color: '#cf1322', fontWeight: 'bold'}}>폐지</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#52c41a'}} rowSpan={3}>
      <strong>취득세·재산세 감면 혜택 유지</strong><br/>
      <p>(추징사유에 해당하지 않음)</p>
      </td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}} rowSpan={2}>장기임대</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>장기일반(8년)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>허용<br/>(다만, <strong style={{color: '#cf1322'}}>아파트 불가</strong>)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>허용</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>공공지원(8년)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>허용</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>허용</td>
      </tr>
      </tbody>
      </table>

      <Insight>

      <p><strong>도시형생활주택 원룸형</strong> (5층 이상)</p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>아파트 폐지유형에 속하여 <strong>세금추징대상이 아님</strong></li>
        <li>자동말소(직권말소): 2021.3.16.부터 자동말소대상에서 제외</li>
        <li>자진말소: 2021.5.17.부터 자진말소대상에서 제외</li>
      </ul>

      </Insight>

      <hr className="my-6" />

      <h2 id="6.-추징대상-확인방법" className="text-xl font-semibold mt-8 mb-4">6. 추징대상 확인방법</h2>

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>방법</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>내용</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>취득세 신고내역 조회</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>매도인 주민번호로 당초 취득세 신고내역을 끌어와서 비과세 감면내역에 <strong>사후관리 기간</strong> 확인</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>렌트홈 홈페이지</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>등록사항 변경현황 상세내역 확인</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>임대의무기간표</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>주택유형별 임대의무기간표(주택과에서 보내준 것) 참고</td>
      </tr>
      </tbody>
      </table>

      <h3 className="text-lg font-semibold mt-6 mb-3">타시도 등록자 확인방법</h3>

      <p>렌트홈 홈페이지 → 임대사업자 민원처리 → 전국임대사업자 조회 → 화면 아래쪽 <strong>등록대장 버튼</strong> 클릭 → 이력조회</p>

      <hr className="my-6" />

      <h2 id="7.-임대주택-관련법-연혁" className="text-xl font-semibold mt-8 mb-4">7. 임대주택 관련법 연혁</h2>

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>구분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>~2013.12.04</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>2013.12.05~<br/>2015.12.28</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}} colSpan={2}>2015.12.29~<br/>2018.07.17</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}} colSpan={2}>2018.07.18~<br/>2020.08.17</th>
      <th style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold', backgroundColor: '#e6f7ff'}}>2020.08.18~</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>관련법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>임대주택법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>임대주택법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}} colSpan={2}>민간임대주택에 관한 특별법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}} colSpan={2}>민간임대주택에 관한 특별법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>민간임대주택에 관한 특별법</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>명칭</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>일반</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>일반 / 준공공</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>단기</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>준공공</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>단기민간</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>장기일반민간</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>장기일반민간</td>
      </tr>
      <tr style={{backgroundColor: '#fffbe6'}}>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold'}}>의무 임대기간</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>5년 이상</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>5년 이상 / 10년 이상</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>4년 이상</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>8년 이상</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>4년 이상</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px'}}>8년 이상</td>
      <td style={{border: '1px solid #d9d9d9', padding: '6px', fontWeight: 'bold', color: '#1890ff'}}>10년 이상</td>
      </tr>
      </tbody>
      </table>

      <hr className="my-6" />

      <h2 id="8.-관련-법령" className="text-xl font-semibold mt-8 mb-4">8. 관련 법령</h2>

      <p style={{fontSize:'12px',color:'#666'}}>지특법 §31·§31의3에서 직접·간접 인용하는 외부 조문 및 시행령 위임 조문 일람 (법제처 OpenAPI 기준, 시행일 2026.3.31.).</p>

      <h3 className="text-lg font-semibold mt-6 mb-3">A. 근거법 (지방세특례제한법)</h3>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width:'80px'}}>구분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>법령명</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>조항</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>역할</th>
      </tr>
      </thead>
      <tbody>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>본조</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지방세특례제한법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/지방세특례제한법/제31조" target="_blank" rel="noopener noreferrer">§31</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>공공임대주택 등에 대한 감면 (7개 항)</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>본조</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지방세특례제한법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/지방세특례제한법/제31조의3" target="_blank" rel="noopener noreferrer">§31의3</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>장기일반민간임대주택 등에 대한 감면 (5개 항)</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>추징·이자</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지방세특례제한법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/지방세특례제한법/제178조" target="_blank" rel="noopener noreferrer">§178②</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>이자상당액 가산</td></tr>
      <tr style={{backgroundColor:'#f6ffed'}}><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>시행령</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지특법 시행령</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/지방세특례제한법시행령/제13조" target="_blank" rel="noopener noreferrer">§13</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>임대형기숙사 범위(①), 추징 예외(②), 매입공급 주택·건축물 범위(③)</td></tr>
      <tr style={{backgroundColor:'#f6ffed'}}><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>시행령</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지특법 시행령</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/지방세특례제한법시행령/제13조의2" target="_blank" rel="noopener noreferrer">§13의2</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>다가구주택 범위(②), 취득세·재산세 추징 예외(①·③)</td></tr>
      <tr style={{backgroundColor:'#f6ffed'}}><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>시행령</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지특법 시행령</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/지방세특례제한법시행령/제13조의3" target="_blank" rel="noopener noreferrer">§13의3</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>공공주택사업자 임대 주택·건축물 범위 (§31의5 위임)</td></tr>
      </tbody>
      </table>

      <h3 className="text-lg font-semibold mt-6 mb-3">B. 공통 피참조 조문 (§31·§31의3 양쪽 인용)</h3>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead><tr style={{backgroundColor:'#f0f0f0'}}><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>법령</th><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>조문</th><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>역할</th><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>인용 항</th></tr></thead>
      <tbody>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지방세법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/지방세법/제4조" target="_blank" rel="noopener noreferrer">§4</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>시가표준액·공시가액 (재산세 가액기준)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ④ / §31의3 ④</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지방세법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/지방세법/제10조의3" target="_blank" rel="noopener noreferrer">§10의3</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>취득 당시 가액 (취득세 가액기준)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ② / §31의3 ②</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지방세법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/지방세법/제112조" target="_blank" rel="noopener noreferrer">§112</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>재산세 도시지역분</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ④ / §31의3 ④</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>주택법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/주택법/제2조" target="_blank" rel="noopener noreferrer">§2제4호</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>준주택 정의 (임대형기숙사·오피스텔)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ① (정의 공유)</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>주택법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/주택법/제49조" target="_blank" rel="noopener noreferrer">§49</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>사용검사 (재산세 추징 트리거)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ⑤ / §31의3 ⑤</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>건축법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/건축법/제22조" target="_blank" rel="noopener noreferrer">§22</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>사용승인·임시사용승인 (재산세 추징 트리거)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ⑤ / §31의3 ⑤</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>건축법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/건축법/제38조" target="_blank" rel="noopener noreferrer">§38</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>건축물대장 (호수별 전용면적 구분 기재 요건)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ① / §31의3 ④</td></tr>
      </tbody>
      </table>

      <h3 className="text-lg font-semibold mt-6 mb-3">C. §31 전용 — 공공주택 특별법 계열</h3>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead><tr style={{backgroundColor:'#f0f0f0'}}><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>법령</th><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>조문</th><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>역할</th><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>인용 항</th></tr></thead>
      <tbody>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>공공주택 특별법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/공공주택특별법/제2조" target="_blank" rel="noopener noreferrer">§2</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>공공주택사업자·임대유형·공공건설임대주택·지분적립형 정의</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§1·②·④·⑧</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>공공주택 특별법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/공공주택특별법/제43조" target="_blank" rel="noopener noreferrer">§43①</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>매입 공급</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ⑥·⑦</td></tr>
      <tr style={{backgroundColor:'#fff2f0'}}><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>공공주택 특별법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/공공주택특별법/제50조의2" target="_blank" rel="noopener noreferrer">§50의2①</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px',color:'#cf1322'}}><strong>임대의무기간 (추징 트리거 허브 · §31에서 3회 인용)</strong></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ③·④·⑤</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>한국토지주택공사법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>전부</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>LH 설립근거 (주체 자격)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ⑥</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지방공기업법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§49</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>지방공사 설립근거 (주체 자격)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31 ⑥</td></tr>
      </tbody>
      </table>

      <h3 className="text-lg font-semibold mt-6 mb-3">D. §31의3 전용 — 민간임대주택에 관한 특별법 계열</h3>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead><tr style={{backgroundColor:'#f0f0f0'}}><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>법령</th><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>조문</th><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>역할</th><th style={{border:'1px solid #d9d9d9',padding:'8px'}}>인용 항</th></tr></thead>
      <tbody>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>민간임대주택에 관한 특별법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/민간임대주택에관한특별법/제2조" target="_blank" rel="noopener noreferrer">§2</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>임대유형 정의 (공공지원·장기일반·민간건설임대 등)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31의3 ①·②·④</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>민간임대주택에 관한 특별법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/민간임대주택에관한특별법/제5조" target="_blank" rel="noopener noreferrer">§5</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>임대사업자 등록 (구 법률 17482호 개정 전 단서 포함)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31의3 ①</td></tr>
      <tr style={{backgroundColor:'#fff2f0'}}><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>민간임대주택에 관한 특별법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/민간임대주택에관한특별법/제6조" target="_blank" rel="noopener noreferrer">§6</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px',color:'#cf1322'}}><strong>등록 말소 (추징 트리거)</strong></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31의3 ③·⑤</td></tr>
      <tr style={{backgroundColor:'#fff2f0'}}><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>민간임대주택에 관한 특별법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/민간임대주택에관한특별법/제43조" target="_blank" rel="noopener noreferrer">§43①</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px',color:'#cf1322'}}><strong>임대의무기간 (추징 트리거 + 예외)</strong></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31의3 ③·⑤</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>민간임대주택에 관한 특별법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§43④</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>추징 예외 사유 (자진·자동말소 등) — 시행령 §13의2 위임</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31의3 ③·⑤</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>주택법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/주택법/제15조" target="_blank" rel="noopener noreferrer">§15</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>사업계획승인 (감면 60일 기산점)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31의3 ①</td></tr>
      <tr><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>건축법</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}><a href="https://law.go.kr/법령/건축법/제11조" target="_blank" rel="noopener noreferrer">§11</a></td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>건축허가 (감면 60일 기산점)</td><td style={{border:'1px solid #d9d9d9',padding:'8px'}}>§31의3 ①</td></tr>
      </tbody>
      </table>

      <hr className="my-6" />

      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 text-gray-600 italic">
        <p>본 자료는 지방세 정보 안내용이며, 법적 효력이 없습니다. 정확한 내용은 관할 지자체 세무부서에 문의하세요.</p>
      </blockquote>

    </div>
  );
}

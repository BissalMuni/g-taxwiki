"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/**
 * meta:
 *   title: "상속 신고시"
 *   sectionId: "08"
 *   category: "취득세"
 *   subcategory: "신고"
 *   audience: "internal"
 *   source: "acquisitiontax.pdf"
 *   pageRange: [23, 26]
 *   effectiveDate: "2020-08-12"
 *   lastUpdated: "2026-05-27"
 *   status: "draft"
 *   lawReference: "지방세법 §15, 시행령 §29, 주민등록법 §6"
 *   tags: ["상속", "세율특례", "1가구1주택", "법정지분", "대습상속", "재협의분할", "외국인", "재외국민", "유권해석"]
 */
export default function InheritanceFilingV10() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold mb-4">5. 상속 신고시</h1>

      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 text-gray-600 italic">
        <p>상속 취득 시 세율특례, 구비서류, 1가구1주택 감면, 법정지분 계산 등 상속신고 전반 안내. 지방세법 제15조(세율의 특례).</p>
      </blockquote>

      <hr className="my-6" />

      <CalcBox title="■ 상속·증여 세율" id="1.-상속·증여-세율">

      <Insight>

      <p>상속·증여 취득은 <strong>다주택이라도 별도의 세율체계 적용</strong></p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li><strong>상속</strong>: 2.8%</li>
        <li><strong>그 외(증여 포함)</strong>: 3.5%</li>
      </ul>

      </Insight>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 일반 상속신고 구비서류" id="2.-일반-상속신고-구비서류">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '180px'}}>서류</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>비고</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>상속재산분할협의서</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: '12px'}}>
      • 검인 불필요<br/>
      • 상속대상자 전원 기재, 도장 또는 서명 확인<br/>
      • 상속인 사망한 경우 <strong>대습상속</strong> 여부 확인<br/>
      • 미성년자 협의여부 (특별대리인 선임 필요)<br/>
      • 양식 → <a href="https://www.iros.go.kr/index.jsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">대법원 인터넷등기소</a> [고객센터] 탭 → [첨부서면예시] → 협의서로 검색
      </td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>법정지분 신고시</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: '12px'}}>
      상속자가 단독이거나 재산분할협의가 안되면 <strong>법정상속지분</strong>으로 취득신고 가능<br/>
      → 상속재산분할협의서 필요없음<br/>
      <a href="https://law.go.kr/법령/민법/제1009조" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"><strong>법정지분율</strong></a>: 배우자 1.5 : 자녀 1
      </td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>가족관계증명서<br/>(망자=피상속인)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: '12px'}}>
      • 07.12.31 이전 사망자는 망자의 <strong>제적등본</strong><br/>
      • 상속인 확인용도<br/>
      • 상속인 중 사망자 있으면 대습상속 발생 → 해당 상속인의 가족관계증명서도 필요
      </td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>기본증명서(망자)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>사망일 확인가능</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>취득세신고서</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontSize: '12px'}}>
      <p>대위등기시: 대위등기 신청서 사본, 가압류가처분 결정서, 금전채권증서</p>
      </td>
      </tr>
      </tbody>
      </table>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 1가구1주택 상속감면" id="3.-1가구1주택-상속감면">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>구분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>세율</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>비고</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>일반과세</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>2.8%</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>-</td>
      </tr>
      <tr style={{backgroundColor: '#e6f7ff'}}>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>1가구1주택 상속감면</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', color: '#52c41a'}}>0.8%</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>취득분 2% 감면, 농특세 비과세(<a href="https://law.go.kr/법령/농어촌특별세법/제4조" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">농특세법 §4</a>)</td>
      </tr>
      </tbody>
      </table>

      <SubSection title="● 1가구1주택 상속감면 추가서류">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>서류</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>용도</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>가족관계증명서(상속인)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>직계존비속 확인 (2008년 이전 사망은 제적등본)</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>1가구1주택상속 감면 신청서</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>농비 (다가구 85㎡ 초과일 때도 농특세 비과세)</td>
      </tr>
      </tbody>
      </table>

      <Insight>

      <ul className="list-disc pl-6 my-4 space-y-1">
        <li><strong>재외국민</strong>은 상속 세율특례 적용 <strong>불가</strong> (외국인 배우자는 가능) - <a href="https://law.go.kr/법령/지방세법/제15조" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">지방세법 §15①②가목</a></li>
        <li><strong>고급주택</strong>은 감면대상에서 <strong>제외</strong></li>
        <li><strong>상속인 기준</strong>에서만 결정 / 피상속인 주택수 관계없이</li>
      </ul>

      </Insight>

      </SubSection>

      <SubSection title="● 1가구1주택의 범위">

      <p>"세대별주민등록표"에 기재되어 있는 <strong>상속인과 그 가족</strong>으로 구성된 1가구</p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>상속인의 배우자</li>
        <li>상속인의 미혼인 30세 미만의 직계비속</li>
        <li>상속인이 미혼이고 30세 미만인 경우 그 부모</li>
      </ul>

      <p>→ 각각 상속인과 같은 세대별 주민등록표에 기재되어 있지 않아도 <strong>포함하여 판단</strong></p>
      <p>→ <strong>동거인은 제외</strong></p>

      </SubSection>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 외국인·재외국민의 1가구1주택 특례 판정" id="3a.-외국인-재외국민-1가구1주택-특례">

      <Insight>

      <p><strong>결론</strong>: 외국인은 특례 <strong>제외 대상이 아니다</strong>. 요건을 충족하면 오히려 특례세율(저율) 적용 대상이 된다.</p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li><a href="https://law.go.kr/법령/지방세법시행령/제29조" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">시행령 §29①</a>이 명시적으로 제외하는 것은 <strong>"재외국민"뿐</strong> (<a href="https://law.go.kr/법령/주민등록법/제6조" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">주민등록법 §6①3호</a>)</li>
        <li>"재외국민이 빠지니 외국인도 당연히 빠진다"는 추론은 <strong>성립하지 않는다</strong> — 두 지위는 법적으로 다르다</li>
        <li>근거: 행정안전부 <a href="https://www.olta.re.kr/explainInfo/authoInterpretationDetail.do?num=60087345" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"><strong>부동산세제과-871호(2021.3.26.)</strong></a> 유권해석</li>
      </ul>

      </Insight>

      <SubSection title="● 무엇이 제외되는가">

      <p><a href="https://law.go.kr/법령/지방세법시행령/제29조" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">지방세법 시행령 §29①</a>은 1가구 판정의 상속인 범위에서 <strong>재외국민만</strong> 명시 제외한다.</p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li><strong>외국인</strong>은 이 제외 문구에 등장하지 않는다.</li>
        <li><strong>재외국민</strong> = 한국 국적자(외국 거주). 그대로 두면 재외국민용 주민등록으로 특례에 포섭되므로 정책적으로 명시 배제한 것.</li>
      </ul>

      </SubSection>

      <SubSection title="● 외국인이 1가구 판정에 들어오는 경로">

      <p><a href="https://law.go.kr/법령/주민등록법/제6조" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">주민등록법 §6</a>의 등록 대상은 거주자·거주불명자·재외국민이며, <strong>외국인은 원칙적으로 예외</strong>(주민등록 대상 아님)다. 다만 <a href="https://law.go.kr/법령/주민등록법 시행령/제6조의2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">주민등록법 시행령 §6의2</a>에 따라 아래 요건을 갖추고 신청하면 <strong>세대별 주민등록표에 "기록"</strong>될 수 있다.</p>

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '80px'}}>요건</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>내용</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', textAlign: 'center'}}>①</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>외국인의 체류지가 <strong>세대주의 주민등록지와 일치</strong>할 것</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', textAlign: 'center'}}>②</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>세대주·세대원의 <strong>가족(배우자, 직계혈족)</strong>에 해당할 것</td>
      </tr>
      </tbody>
      </table>

      </SubSection>

      <SubSection title="● 특례 적용 결론 (유권해석 요지)">

      <p>외국인이 피상속인의 <strong>배우자 또는 직계혈족으로서 상속인</strong>에 해당하고, 그 외국인이 <strong>세대별 주민등록표에 함께 기재된 가족</strong>으로 구성된 1가구가 상속대상 주택을 제외하고 주택을 소유하지 않으면 <strong>특례세율 적용이 타당</strong>하다.</p>

      <p className="text-sm text-gray-600">입법 취지 — 상속주택 1가구1주택 특례는 가구원 전체가 무주택인 상태에서 가족 사망으로 불가피하게 주택을 취득하는 경우 생계유지를 지원하려는 것이며, 이 취지는 가구원의 국적(한국인/외국인)과 무관하게 작동한다.</p>

      </SubSection>

      <SubSection title="● 재외국민 제외의 정확한 구조">

      <p>재외국민 제외는 "외국에 생활근거를 둔 한국인이 취득했으니 빼겠다"는 <strong>취득자 직접 배제가 아니라</strong>, <strong>1가구 판정 단계에서 빠지는 구조</strong>다.</p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li><a href="https://law.go.kr/법령/지방세법시행령/제29조" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">시행령 §29①</a>이 제외하는 대상은 정확히 <strong>"상속인 중 재외국민"</strong> — 즉 재외국민은 이 특례의 1가구를 구성하는 상속인 자체로 인정하지 않는다.</li>
        <li>재외국민이 상속으로 주택을 취득하면 처음부터 상속인 범위에서 빠지므로, 특례세율(중과기준세율을 뺀 세율)을 적용받지 못하고 <strong>일반 상속 취득세율</strong>이 적용된다.</li>
      </ul>

      </SubSection>

      <SubSection title="● 진짜 기준선 — 국적이 아니라 국내 가구 형성">

      <p>보호 기준은 국적이 아니라 <strong>"국내에서 실제로 한 가구를 이루어 생활하는가"</strong>이다.</p>

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>지위</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>1가구 포섭</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>설명</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>한국인 (재외국민)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', color: '#cf1322', fontWeight: 'bold'}}>제외</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>같은 국적이라도 해외에 생활근거를 둔 재외국민은 빠진다</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>외국인 (국내 세대원)</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', color: '#52c41a', fontWeight: 'bold'}}>포함</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>한국인 배우자와 국내에서 한 가구를 이루고 세대별 주민등록표에 등록되어 있으면 들어온다</td>
      </tr>
      </tbody>
      </table>

      </SubSection>

      <SubSection title="● 실무 확인 사항">

      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>그 외국인이 실제로 <a href="https://law.go.kr/법령/주민등록법 시행령/제6조의2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">시행령 §6의2</a>에 따라 <strong>세대별 주민등록표에 "기록"</strong>되어 있는지 확인할 것. <span className="text-gray-600">(단순 외국인등록·국내거소신고만으로는 부족, 세대표 기록 필요)</span></li>
        <li><strong>재외국민의 의미</strong>: <a href="https://law.go.kr/법령/주민등록법/제6조" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">주민등록법 §6①3호</a>에 따라 <strong>재외국민으로 주민등록된(그 지위에 있는) 사람</strong>. 단순히 해외에 오래 체류 중인 일반 국민과는 구별되므로, 상속인이 법적으로 재외국민 지위인지 주민등록 상태로 확인해야 한다.</li>
        <li><strong>유권해석 마항</strong>: 질의 당시 사실관계 기준 해석이며, 최종적으로는 과세권자가 면밀한 조사를 통해 결정할 사안이다.</li>
      </ul>

      <Insight>

      <p><strong>남는 비대칭 (검토 여지)</strong> — 동일하게 무주택으로 국내 가구를 이루다 배우자 사망으로 상속받더라도, 상속인이 <strong>재외국민이면 빠지고 외국인이면 들어올 수 있다</strong>. 입법정책적으로 비판·토론의 여지가 있는 지점이다.</p>

      </Insight>

      </SubSection>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 상속신고납부기한" id="4.-상속신고납부기한">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>구분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>기한</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>일반</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>사망한 달의 말일로부터 <strong>6개월 이내</strong></td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>해외 주소 상속인 있는 경우</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><strong>9개월 이내</strong><br/><span style={{fontSize: '12px', color: '#666'}}>외국인 상속인 포함 시 <strong>아포스티유</strong> 첨부 필요 (등기 시)</span></td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>실종의 경우</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>실종선고일이 속하는 달의 말일부터 <strong>6개월 이내</strong></td>
      </tr>
      </tbody>
      </table>

      <SubSection title="● 아포스티유(Apostille) 안내">

      <p><strong>아포스티유(프: Apostille)</strong>는 해외 영사관 등 권한 당국에서 발급하는 문서 공증·인증 확인서로, 헤이그 협약(1961) 가입국 간 공문서의 해외 사용을 위한 국제 인증 절차입니다.</p>

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px', marginTop: '8px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '120px'}}>항목</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>내용</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>개념</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>외국에서 발급된 공문서가 진정한 문서임을 발급국 당국이 확인해 주는 인증 절차. 별도 영사 인증 없이 가입국 간 공식 효력 인정.</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>발급처</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>해당 문서 발급국의 권한 있는 당국 (예: 한국 문서의 경우 외교부 또는 시·도지사)</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>상속 실무</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>외국인 상속인의 본국 발급 신분서류(출생증명서, 혼인증명서 등)를 국내 등기·취득세 신고에 사용할 때 아포스티유 첨부 필요</td>
      </tr>
      </tbody>
      </table>

      </SubSection>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 취득세 상속순위 (1가구1주택 판단)" id="5.-취득세-상속순위-(1가구1주택-판단)">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>순위</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>기준</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>1순위</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>지분이 가장 큰 자</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>2순위</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속주택 거주자</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>3순위</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>연장자</td>
      </tr>
      </tbody>
      </table>

      <p>→ 1주택을 여러 사람이 공동상속 받는 경우 <strong>1순위 주택상속자 한 사람의 소유주택</strong>으로 1가구1주택 판단</p>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 재협의분할로 상속인 변경 시" id="6.-재협의분할로-상속인-변경-시">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>구분</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>상속기간내 변경</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>상속기간경과후 변경</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>등기전 재협의</td>
      <td colSpan={2} style={{border: '1px solid #d9d9d9', padding: '8px'}}>취득세 다시 낼 필요없이 법정신고당시 취등록세 납부고지서를 등기소에 제출</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>등기후 재협의</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속기한 남아있으면 증여로 보지않고 <strong>등록면허세만</strong> 내고 변경</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322'}}><strong>증여</strong>에 의한 취득세 발생 (<a href="https://law.go.kr/법령/지방세법/제7조" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">지방세법 §7⑬</a>)<br/>※예외조항 있음</td>
      </tr>
      </tbody>
      </table>

      <Insight>

      <p>법정지분으로 특례감면받은 후 재협의분할로 상속인 변경시 <strong>과소신고가산세</strong> 적용됨에 유의</p>

      </Insight>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 민법상 상속순위" id="7.-민법상-상속순위">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>순위</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>피상속인과의 관계</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>상속인 해당 여부</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>1순위</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>직계비속과 배우자</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>항상 상속인이 된다</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>2순위</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>직계존속과 배우자</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>직계비속이 없는 경우</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>3순위</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>형제자매</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>1,2순위가 없는 경우</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>4순위</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>4촌 이내의 방계혈족</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>1,2,3순위가 없는 경우</td>
      </tr>
      </tbody>
      </table>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 법정상속시 지분계산법 예시" id="8.-법정상속시-지분계산법-예시">

      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '16px'}}>
      <thead>
      <tr style={{backgroundColor: '#f0f0f0'}}>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>경우</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>상속인</th>
      <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>비율</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td rowSpan={2} style={{border: '1px solid #d9d9d9', padding: '8px'}}>장남과 배우자만 있는 경우</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>장남 1</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>2/5</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>배우자 1.5</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>3/5</td>
      </tr>
      <tr>
      <td rowSpan={3} style={{border: '1px solid #d9d9d9', padding: '8px'}}>장남,장녀,배우자만 있는 경우</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>장남 1</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>2/7</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>장녀 1</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>2/7</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>배우자 1.5</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>3/7</td>
      </tr>
      </tbody>
      </table>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 무허가건축물과 일반주택 상속" id="9.-무허가건축물과-일반주택-상속">

      <Insight>

      <p><strong>무허가건축물(주택)</strong>과 <strong>일반주택</strong>을 상속받는 경우:</p>
      <ul className="list-disc pl-6 my-4 space-y-1">
        <li>무허가건축물은 일반세율(4.6%) 적용대상 → 주택으로 보지 않음</li>
        <li>상속인과 그 세대원(1가구)이 다른 주택을 소유하고 있지 않은 경우 → <strong>1가구1주택 세율특례 대상</strong></li>
        <li>무허가건축물: <strong>2.8%</strong>, 일반주택: <strong>0.8%</strong></li>
        <li>무허가주택, 오피스텔은 1가구1주택 산입 <strong>적용배제</strong></li>
      </ul>

      </Insight>

      </CalcBox>

      <hr className="my-6" />

      <CalcBox title="■ 관련 법령" id="10.-관련-법령">

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
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>시행령</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>지방세법 시행령</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://law.go.kr/법령/지방세법시행령/제29조" target="_blank" rel="noopener noreferrer">§29</a></td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속순위</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>참조</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>민법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://law.go.kr/법령/민법/제1000조" target="_blank" rel="noopener noreferrer">§1000</a>, <a href="https://law.go.kr/법령/민법/제1001조" target="_blank" rel="noopener noreferrer">§1001</a></td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속순위, 대습상속</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>참조</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>민법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://law.go.kr/법령/민법/제779조" target="_blank" rel="noopener noreferrer">§779</a></td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>가족의 범위</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>참조</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>주민등록법</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://law.go.kr/법령/주민등록법/제6조" target="_blank" rel="noopener noreferrer">§6</a></td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>등록 대상(재외국민 정의 §6①3호)</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>참조</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>주민등록법 시행령</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://law.go.kr/법령/주민등록법 시행령/제6조의2" target="_blank" rel="noopener noreferrer">§6의2</a></td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>외국인의 세대별 주민등록표 기록</td>
      </tr>
      <tr>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유권해석</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>행정안전부</td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://www.olta.re.kr/explainInfo/authoInterpretationDetail.do?num=60087345" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">부동산세제과-871</a></td>
      <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>외국인 1가구1주택 특례(2021.3.26.)</td>
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

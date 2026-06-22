"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

export default function Yuryubun() {
  return (
    <div className="space-y-8">
      <p className="text-muted">유류분반환청구소송의 확정판결·조정에 따라 상속재산을 이전받는 경우의 신고 절차, 적용 세율 및 제출서류 안내.</p>
      <p className="text-muted text-sm">근거: <a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">지방세법 §7⑬, §20①</a>, 행안부 도세과-115(2008.3.20), 행안부 지방세운영과-364(2015.2.1)</p>

      <CalcBox title="■ 취득유형 및 적용세율">
        <SubSection title="● 상속 의제 대상">
          <ul className="list-disc pl-6 space-y-1">
            <li>대상: 유류분반환청구소송 판결·조정으로 당초 상속인 → 다른 상속인에게 이전되는 부동산</li>
            <li>원칙은 증여에 의한 취득이나, <a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">지방세법 §7⑬</a> 제2호에 해당하여 상속에 의한 취득으로 의제</li>
            <li>취득시기: 상속개시일 (피상속인 사망일) — 확정판결일 아님</li>
          </ul>
        </SubSection>

        <SubSection title="● 세율 비교">
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '12px'}}>
            <thead>
              <tr style={{backgroundColor: '#f0f0f0'}}>
                <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>세목</th>
                <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>증여 세율</th>
                <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>상속 세율 (적용)</th>
                <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>근거</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>취득세</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>3.5%</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#52c41a', fontWeight: 'bold'}}>2.8% ✅</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">지방세법 §11①7호</a> (상속)</td>
              </tr>
              <tr>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>등록면허세</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>—</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#52c41a', fontWeight: 'bold'}}>0.8% ✅</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">지방세법 §28①1호 나목</a></td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-muted">* 행안부 도세과-115 (2008.3.20) — 유류분 반환 소유권이전등기 시 등록면허세도 상속 세율 적용</p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 상속 의제 요건">
        <SubSection title="● 지방세법 §7⑬ 각 호">
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '12px'}}>
            <thead>
              <tr style={{backgroundColor: '#f0f0f0'}}>
                <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '40px'}}>호</th>
                <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>유형</th>
                <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '80px'}}>상속 의제</th>
                <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>요건 / 근거</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>1호</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>취득세 신고·납부기한 내 재분할에 의한 취득과 등기 완료</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', color: '#52c41a', fontWeight: 'bold'}}>✅ O</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속개시일이 속하는 달의 말일부터 6월(외국 9월) 내 등기</td>
              </tr>
              <tr>
                <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>2호</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속회복청구의 소에 의한 법원 확정판결로 상속인 및 상속재산에 변동</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', color: '#52c41a', fontWeight: 'bold'}}>✅ O</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유류분반환청구소송 포함 (대법원 2001다6947, 2001.11.30)</td>
              </tr>
              <tr>
                <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center'}}>3호</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>채권자대위권 행사로 법정상속분 등기 후 협의분할 재분할</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px', textAlign: 'center', color: '#52c41a', fontWeight: 'bold'}}>✅ O</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://www.law.go.kr/법령/민법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">민법 §404</a>에 따른 채권자대위권 행사</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-muted">* 위 각 호 외의 사유로 재분할 시: 당초 상속인 → 다른 상속인으로의 증여로 의제</p>
        </SubSection>

        <Insight>
          <ul className="list-disc pl-6 space-y-1">
            <li><a href="https://www.law.go.kr/법령/민사소송법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">민사소송법 §220</a>에 따른 법원 조정조서도 확정판결과 동일한 효력 → 상속으로 봄</li>
            <li>유류분권자 입장: 피상속인이 아니라 당초 상속인으로부터 취득하는 형식이나, <a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">§7⑬</a> 2호에 의해 상속에 의한 취득으로 의제</li>
          </ul>
        </Insight>
      </CalcBox>

      <CalcBox title="■ 기본 제출서류">
        <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '12px'}}>
          <thead>
            <tr style={{backgroundColor: '#f0f0f0'}}>
              <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '220px'}}>서류</th>
              <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>취득세신고서</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>취득원인란에 "상속" 기재 / 주택의 경우 취득상세내역서 첨부</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>법원 확정판결문 또는 조정조서</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유류분반환청구소송 결과 입증서류 (필수)</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>가족관계증명서 · 기본증명서</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>피상속인 사망사실 및 상속관계 확인</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>당초 상속인의 취득세 납부영수증</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>이전등기 시 첨부 / 기납부세 환급청구 근거자료</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>부동산 등기부등본</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>대상물건 특정 및 지분 확인</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-muted">* 주택이고 계약일(판결확정일) 2019.12.4. 이후면 1세대4주택 확인용 가족관계증명서 별도 제출</p>
      </CalcBox>

      <CalcBox title="■ 신고기한 및 가산세">
        <SubSection title="● 신고·납부기한">
          <ul className="list-disc pl-6 space-y-1">
            <li>기산일: 상속개시일이 속하는 달의 말일</li>
            <li>기한: 기산일로부터 6개월 (외국 주소를 둔 상속인이 있는 경우 9개월) — <a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">지방세법 §20①</a></li>
          </ul>
        </SubSection>

        <SubSection title="● 무신고가산세 면제 (정당한 사유)">
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '12px'}}>
            <thead>
              <tr style={{backgroundColor: '#f0f0f0'}}>
                <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>상황</th>
                <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>판단</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>확정판결이 상속개시 후 6개월 이내</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>원칙대로 상속개시일 기준 6개월 내 신고·납부</td>
              </tr>
              <tr>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>확정판결이 상속개시 후 6개월 경과</td>
                <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>정당한 사유 인정 — 가산세 면제 (조심2012지783, 2012.12.11)</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-muted">* 확정판결(조정) 이전까지는 사실상 본인 소유로 볼 수 없어 신고가 현실적으로 어려움</p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 당초 상속인의 기납부세 환급">
        <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '12px'}}>
          <thead>
            <tr style={{backgroundColor: '#f0f0f0'}}>
              <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>세목</th>
              <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>환급 여부</th>
              <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>근거 및 사유</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>취득세 (반환분 상당액)</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#52c41a', fontWeight: 'bold'}}>✅ O 환급</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유류분 반환으로 당초 취득행위 소멸 → 과세근거 없음 (행안부 지방세운영과-846, 2009.2.25)</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>등록면허세</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322', fontWeight: 'bold'}}>❌ X 환급불가</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>등기 시점에 이미 납세의무 성립, 소급 소멸 불가 (재결청 2000-0727, 2000.10.31)</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>재산세 (당초 수증자 납부분)</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px', color: '#cf1322', fontWeight: 'bold'}}>❌ X 환급불가</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>과세기준일 현재 소유자 기준 — 유류분 반환과 무관</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-muted">* 1개 물건에 2 이상의 취득행위 인정 불가 → 새 취득인(유류분권자)이 상속세율로 납부 시 당초 취득세는 환급</p>

        <Insight>
          <ul className="list-disc pl-6 space-y-1">
            <li>유류분 반환분에 대한 취득세는 환급 대상, 등록면허세는 환급 대상 아님 — 세목별로 처리 다름에 유의</li>
            <li>환급가산금: 당초 납부일부터 기산 (단, 시효 5년 경과분은 지급 제한 가능)</li>
            <li>실무: 유류분권자 신고·납부 → 당초 상속인의 환급청구를 별도 진행</li>
          </ul>
        </Insight>
      </CalcBox>

      <CalcBox title="■ 참고 법령·판례·해석례">
        <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 'var(--content-font-size, 13px)', marginBottom: '12px'}}>
          <thead>
            <tr style={{backgroundColor: '#f0f0f0'}}>
              <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold', width: '60px'}}>구분</th>
              <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>출처</th>
              <th style={{border: '1px solid #d9d9d9', padding: '8px', fontWeight: 'bold'}}>요지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법령</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">지방세법 §7⑬</a></td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속 의제 3가지 사유 (재분할·상속회복청구·채권자대위)</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법령</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">지방세법 §20①</a></td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속취득 신고기한 6개월(외국 9월)</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법령</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">지방세법 §11①7호</a></td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속 취득세율 2.8%</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법령</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">지방세법 §28①1호 나목</a></td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>상속 등록면허세율 0.8%</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법령</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://www.law.go.kr/법령/민법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">민법 §404</a></td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>채권자대위권</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>법령</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}><a href="https://www.law.go.kr/법령/민법" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">민법 §1112조</a></td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유류분 비율</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>판례</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>대법원 2001다6947 (2001.11.30)</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유류분반환청구는 상속회복청구에 해당</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>해석</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>행안부 도세과-115 (2008.3.20)</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>유류분 반환 시 등록면허세도 상속 세율 적용</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>해석</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>행안부 지방세운영과-364 (2015.2.1)</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>조정조서도 확정판결 효력 → 상속으로 봄</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>해석</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>행안부 지방세운영과-846 (2009.2.25)</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>당초 상속인 기납부 취득세는 환급 대상</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>심판례</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>조심2012지783 (2012.12.11)</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>확정판결 전 신고 불가 → 가산세 정당한 사유 인정</td>
            </tr>
            <tr>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>심판례</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>재결청 2000-0727 (2000.10.31)</td>
              <td style={{border: '1px solid #d9d9d9', padding: '8px'}}>등록세는 환급 대상 아님</td>
            </tr>
          </tbody>
        </table>
      </CalcBox>
    </div>
  );
}

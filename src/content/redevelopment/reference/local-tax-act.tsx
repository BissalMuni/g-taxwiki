"use client";

import { CalcBox, SubSection } from "@/components/content/shared";

/** 조문 인용 박스 */
function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: "3px solid #1890ff", background: "#f8fafc", padding: "10px 14px", margin: "8px 0", fontSize: "13px", lineHeight: 1.7 }}>
      <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{title}</div>
      {children}
    </div>
  );
}

export default function ReferenceLocalTaxAct() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        정비사업 취득세 판단의 근거가 되는 <strong>「지방세법」 및 시행령</strong> 핵심 조문 발췌. 전문은{" "}
        <a href="https://www.law.go.kr/법령/지방세법" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">법제처 국가법령정보센터</a> 참조.
      </p>

      <CalcBox title="■ 법 제7조 (납세의무자 등)">
        <Article title="제7조 ⑧ — 주택조합등의 조합주택용 부동산">
          「주택법」 §11 주택조합과 「도시정비법」 §35③·「빈집정비법」 §23 재건축조합·소규모재건축조합(이하 “주택조합등”)이
          해당 조합원용으로 취득하는 조합주택용 부동산(공동주택·부대·복리시설 및 그 부속토지)은 <strong>그 조합원이 취득한 것으로 본다.</strong>
          다만, 조합원에게 귀속되지 아니하는 부동산(<strong>비조합원용 부동산</strong>)은 제외한다.
        </Article>
        <Article title="제7조 ④ 후단 — 도시개발 환지 지목변경 (2023.3.14. 신설)">
          토지의 지목을 사실상 변경하면 취득으로 본다. 이 경우 「도시개발법」 도시개발사업(환지방식)의 시행으로 지목이 사실상 변경된 때에는
          그 환지계획에 따라 공급되는 환지는 <strong>조합원이</strong>, 체비지·보류지는 <strong>사업시행자가</strong> 각각 취득한 것으로 본다.
        </Article>
        <Article title="제7조 ⑯ — 정비사업 건축물·토지 취득 의제 (2023.3.14. 신설)">
          도시개발사업·정비사업의 시행으로 부동산 소유자(상속인 포함)가 환지·관리처분계획에 따라 공급받거나 토지상환채권으로 상환받는
          <strong> 건축물은 원시취득</strong>, <strong>토지는 승계취득</strong>한 것으로 본다. 이 경우 토지는 당초 소유 면적을 초과하는 경우로서
          <strong> 그 초과 면적에 해당하는 부분에 한정</strong>하여 취득한 것으로 본다.
        </Article>
      </CalcBox>

      <CalcBox title="■ 법 제10조의5 (과세표준 특례) ③">
        <p>제10조의2~10조의4에도 불구하고 다음의 취득당시가액 산정은 대통령령으로 정한다.</p>
        <ul className="list-disc pl-6 space-y-1" style={{ fontSize: "13px" }}>
          <li>1호: 대물변제·교환·양도담보 등 유상거래 취득</li>
          <li>2호: 법인의 합병·분할·조직변경 취득</li>
          <li>3호: 도정법 사업시행자·빈집정비법 사업시행자·주택법 주택조합이 취득하는 경우</li>
          <li>4호: 그 밖에 1~3호에 준하는 대통령령으로 정하는 취득</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 영 제18조 (사실상취득가격의 범위)">
        <SubSection title="● ① 포함되는 간접비용">
          <p style={{ fontSize: "13px", lineHeight: 1.8 }}>
            1. 건설자금 차입금 이자 등 금융비용 / 2. 할부·연부 이자상당액·연체료 / 3. 농지보전부담금·미술작품 설치·문화예술진흥기금 출연·대체산림자원조성비 등 의무 부담비용 /
            4. 취득 용역비·수수료(신탁수수료 포함) / 5. 약정에 따른 취득자 조건 부담액·채무인수액 / 6. 국민주택채권 매각차손 / 7. 공인중개사 중개보수 /
            8. 붙박이 가구·가전 등 건축물에 부착·일체화되어 효용을 유지·증대시키는 설비 설치비용 / 9. 정원·부속시설물 조성·설치비용 / 10. 1~9호에 준하는 비용
          </p>
          <p className="text-muted" style={{ fontSize: "12px" }}>※ 법인이 아닌 자는 1·2·7호(금융비용·이자·중개보수)를 제외한 금액으로 한다.</p>
        </SubSection>
        <SubSection title="● ② 포함되지 않는 비용">
          <p style={{ fontSize: "13px", lineHeight: 1.8 }}>
            1. 판매를 위한 광고선전비 등 판매비용 / 2. 전기·가스·열 이용자가 분담하는 비용 / 3. 이주비·지장물 보상금 등 취득물건과 별개 권리에 관한 보상 성격 비용 /
            4. 부가가치세 / 5. 1~4호에 준하는 비용
          </p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 영 제18조의4 (과세표준 특례 산식)">
        <Article title="① 3호 — 사업시행자·주택조합의 비조합원용 부동산·체비지·보류지">
          가액 = A × [B − (C × B ÷ D)] · A: ㎡당 분양가액, B: 토지 면적, C: 사업 진행 중 취득한 토지면적(조합원 신탁토지 제외), D: 사업대상 토지 전체 면적
        </Article>
        <Article title="② 4호 가목 — 도시개발 환지 체비지·보류지 (지목변경 공제)">
          가액 = A × [B − (C × B ÷ D)] − E · E: 법 §7④후단 지목변경에 따른 취득가액
        </Article>
        <Article title="② 4호 나목 — 조합원 토지 (초과면적, 지목변경 공제)">
          가액 = (A × B) − C · A: ㎡당 분양가액, B: 토지 면적, C: 지목변경에 따른 취득가액
        </Article>
        <p style={{ fontSize: "12.5px" }}>② “대통령령으로 정하는 취득”: 1. 도시개발사업 사업시행자의 체비지·보류지 취득, 2. 법 §7⑯ 후단 조합원의 토지 취득</p>
      </CalcBox>

      <CalcBox title="■ 영 제20조 (취득의 시기)">
        <Article title="⑥ 건축물 신축·개수 취득시기 (2019.5.31. 개정)">
          사용승인서(도시개발법 준공검사증명서·도정법 준공인가증 등 포함)를 내주는 날(임시사용승인 시 그 임시사용승인일, 받을 수 없는 경우 사실상 사용 가능한 날)과
          <strong> 사실상의 사용일 중 빠른 날</strong>을 취득일로 본다.
        </Article>
        <Article title="⑦ 비조합원용 토지 취득시기">
          주택법 주택조합이 취득하는 비조합원 귀속 토지는 <strong>사용검사일</strong>, 도정법 재건축조합·빈집정비법 소규모재건축조합이 취득하는 비조합원 귀속 토지는
          <strong> 소유권이전 고시일의 다음 날</strong>에 취득한 것으로 본다.
        </Article>
      </CalcBox>
    </div>
  );
}

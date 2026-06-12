"use client";

import { CalcBox, SubSection } from "@/components/content/shared";

/** 조문 인용 박스 */
function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: "3px solid #52c41a", background: "#f6fbf6", padding: "10px 14px", margin: "8px 0", fontSize: "13px", lineHeight: 1.7 }}>
      <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{title}</div>
      {children}
    </div>
  );
}

export default function ReferenceLocalTaxSpecialAct() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        정비사업 감면의 근거 <strong>「지방세특례제한법」 제74조</strong>(도시개발사업 등에 대한 감면) 및 관련 조문 발췌.
        전문은{" "}
        <a href="https://www.law.go.kr/법령/지방세특례제한법/제74조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">법제처 국가법령정보센터</a> 참조.
      </p>

      <CalcBox title="■ 제74조 (도시개발사업 등에 대한 감면)">
        <Article title="① · ② — 삭제 (2023.3.14.)">
          종전 환지·관리처분에 따른 취득부동산 면제 규정. 2023.3.14. 과세체계가 「지방세법」으로 이관되며 삭제.
          (단, 부칙 §11 경과조치로 ’23.1.1. 前 인가분은 종전 §74①·② 적용)
        </Article>
        <Article title="③ 도시개발사업 시행자 — 체비지·보류지">
          도시개발사업 사업시행자가 취득하는 체비지·보류지: 취득세의 <strong>100분의 75를 2028.12.31.까지 경감</strong>.
          (개정 2020.1.15., 2023.3.14., 2025.12.31.)
        </Article>
        <Article title="④ 주거환경개선사업 — 주택 (2028.12.31.까지)">
          1. 시행자 대지조성용 주택: <strong>75% 경감</strong> / 2. 시행자 체비지·보류지: <strong>75% 경감</strong> /
          3. 소유자(상속인 포함)가 스스로 개량하거나 시행으로 취득하는 85㎡ 이하 주택: <strong>면제</strong>.
          (취득일부터 5년 내 §13⑤ 사치성재산 등 또는 위반건축 시 추징)
        </Article>
        <Article title="⑤ 재개발사업 — 부동산 (2028.12.31.까지)">
          1. 시행자 대지조성용 부동산: <strong>50% 경감</strong> / 2. 시행자 관리처분계획 취득 주택: <strong>50% 경감</strong> /
          3. 소유자(상속인 포함)가 시행으로 주택을 취득해 1가구 1주택(일시적 2주택 포함)이 되는 경우 — 가. 60㎡ 이하 <strong>75% 경감</strong>, 나. 60~85㎡ <strong>50% 경감</strong>.
          (일시적 2주택자가 3년 내 1가구 1주택이 되지 않으면 추징)
        </Article>
      </CalcBox>

      <CalcBox title="■ 제177조의2 (지방세 감면 특례의 제한 — 최소납부세제)">
        <p style={{ fontSize: "13px", lineHeight: 1.7 }}>
          취득세·재산세가 면제(세액감면율 100% 또는 세율 전부 감면)되는 경우, 면제규정에도 불구하고 <strong>100분의 85에 해당하는 감면율</strong>을 적용
          (즉 <strong>최소 15% 납부</strong>). 다만 다음은 예외:
        </p>
        <ul className="list-disc pl-6 space-y-1" style={{ fontSize: "13px" }}>
          <li>1호: 산출 취득세 <strong>200만원 이하</strong> / 재산세 <strong>50만원 이하</strong>(면세점)</li>
          <li>2호: §74의2① 등 열거된 감면(취약계층·서민지원 등). ※ §74(정비사업 감면)는 최소납부세제 적용대상</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 영 제35조 / 부칙 — 1가구 1주택·경과조치">
        <SubSection title="● 영 §35③④⑤ (2020.1.15. 신설)">
          <p>③ <strong>일시적 2주택자</strong>: 취득일 현재 §74⑤3호 재개발 취득 주택을 포함해 2개 주택 소유자(부속토지만 소유도 주택 소유로 봄, 상속 공유지분은 미산입).</p>
          <p>④ <strong>1가구 1주택</strong>: 세대별 주민등록표상 가족(배우자·미혼 30세 미만 직계비속 포함)으로 구성된 1가구가 국내 1주택을 소유하고, 그 주택이 재개발사업으로 취득한 주택일 것.</p>
        </SubSection>
        <SubSection title="● 부칙 §11 (법률 제19232호, 2023.3.14.) 경과조치">
          <p>① ’23.1.1. 前 환지·관리처분계획인가를 받은 도시개발·재개발사업 부동산 소유자가 ’23.1.1. 이후 취득하는 부동산은 <strong>종전 §74①·②로 면제·부과</strong> (본문 “2022.12.31.”을 “2028.12.31.”로 봄).</p>
          <p>② ①에 따라 부과되는 자는 종전 §74⑤3호로 2025.12.31.까지 경감.</p>
        </SubSection>
        <SubSection title="● 부칙 §5 (법률 제16865호, 2020.1.15.) 적용례">
          <p>§74①·③ 개정규정은 ’20.1.1. 이후 도시개발 실시계획인가·재개발 사업시행계획인가분부터, §74④1·3호·⑤ 개정규정은 ’20.1.1. 이후 사업시행계획인가분부터 적용.</p>
        </SubSection>
      </CalcBox>
    </div>
  );
}

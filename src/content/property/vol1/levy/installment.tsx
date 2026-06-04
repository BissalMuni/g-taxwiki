"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

export default function Installment() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        분할납부는 납부세액이 250만원을 초과하는 경우 일부를 납기 후 2개월 이내에 나누어 낼 수 있도록 하는 제도다.
      </p>

      <CalcBox title="■ 신청 요건 (지법 §118)">
        <p>
          지방자치단체의 장은 재산세의 납부세액이 <strong>250만원을 초과</strong>하는 경우 분할납부하게 할 수 있다.
        </p>
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
          <li>동일 시·군·구별로 납세자가 납부할 재산세액이 250만원을 초과하는지 여부로 판단.</li>
          <li>초과 여부는 <strong>재산세액(도시지역분 포함)만</strong>을 기준으로 하고, 병기 고지되는 지역자원시설세·지방교육세는 제외하고 판단.</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 분납 기준">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "30%" }}>구분</th>
              <th style={th}>납기 내 납부</th>
              <th style={th}>분납 (2개월 이내)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>재산세 500만원 이하</td>
              <td style={tdc}>250만원</td>
              <td style={tdc}>나머지 세액</td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>재산세 500만원 초과</td>
              <td style={tdc}>부과액의 50%</td>
              <td style={tdc}>나머지 50%</td>
            </tr>
          </tbody>
        </table>
        <ul style={{ margin: "10px 0 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
          <li>(분납 여부) 재산세(도시지역분 포함) 부과액을 기준으로 판단.</li>
          <li>(납입기한 기산일) 공시송달 등으로 납부기한이 연장된 경우, 연장된 납부기한일로부터 <strong>3월 내</strong> 분할납부.</li>
        </ul>
      </CalcBox>

      <CalcBox title="■ 신청 방법 및 처리">
        <SubSection title="● 신청">
          <p>신청기간은 <strong>납부기한 내</strong>, 분납신청서[별지 제63호 서식]를 구비하여 신청한다.</p>
        </SubSection>
        <SubSection title="● 처리방법">
          <ol style={{ margin: "6px 0", paddingLeft: "1.3em", lineHeight: 1.7 }}>
            <li>이미 고지한 납세고지서를 회수하고, 기 부과결정을 조정(감액)결정.</li>
            <li>「납기 내 납부할 납세고지서」와 「분납기간 내 납부할 납세고지서」를 구분하여 수정 고지.</li>
            <li>분납기한 내 납부할 세액을 그 기간 내에 납부할 경우 가산금이 가산되지 않음.</li>
          </ol>
        </SubSection>
        <Insight>
          분납 판단·물납 판단 기준이 다르다 — <strong>분납은 250만원 초과</strong>, <strong>물납은 1천만원 초과</strong>.
          분납 시 분납기한 내 납부하면 가산금이 붙지 않는다.
        </Insight>
      </CalcBox>
    </div>
  );
}

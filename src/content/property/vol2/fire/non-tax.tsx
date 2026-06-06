"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };

export default function NonTax() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        소방분 지역자원시설세의 비과세는 <strong>재산세 비과세 규정(§109)을 준용</strong>한다(지법 §145). 즉 재산세가
        비과세되는 건축물·선박은 소방분도 비과세된다.
      </p>

      <CalcBox title="■ 비과세 (지법 §145)">
        <p>
          다음에 해당하는 건축물·선박에 대해서는 소방분 지역자원시설세를 부과하지 않는다. 기본적으로
          <strong> 재산세 비과세 대상(지법 §109)</strong>과 같다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "30%" }}>구분</th>
              <th style={th}>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>국가·지방자치단체 등</td>
              <td style={td}>국가·지방자치단체·지방자치단체조합·외국정부·주한국제기구 소유 건축물·선박 (재산세 §109① 준용)</td>
            </tr>
            <tr>
              <td style={tdHead}>국가 등 사용 재산</td>
              <td style={td}>국가 등이 1년 이상 공용·공공용으로 사용하는 건축물·선박 (유료 사용 등 예외 있음)</td>
            </tr>
            <tr>
              <td style={tdHead}>기타 재산세 비과세 대상</td>
              <td style={td}>재산세 §109에서 비과세하는 건축물·선박에 준하여 비과세</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <a href="https://www.law.go.kr/법령/지방세법/제145조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 §145</a>
          {" · "}
          <a href="https://www.law.go.kr/법령/지방세법/제109조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">§109(재산세 비과세)</a>
        </p>
      </CalcBox>

      <CalcBox title="■ 소방분 고유의 비과세">
        <SubSection title="● 소방시설 혜택이 미치지 않는 경우">
          <p>
            소방분은 <strong>소방시설로 이익을 받는</strong> 건축물·선박을 전제로 하므로, 소방시설의 혜택이
            객관적으로 미치지 않는 지역의 건축물·선박은 과세 대상에서 제외될 수 있다. 구체적 범위는
            대통령령(시행령 §137)으로 정한다.
          </p>
        </SubSection>
        <Insight>
          비과세 판정은 재산세 비과세 대상 여부를 먼저 확인한 뒤, 소방분 고유의 제외 사유를 추가로 점검하는
          순서로 한다. 재산세가 과세되는데 소방분만 비과세되는 경우는 제한적이다.
        </Insight>
      </CalcBox>
    </div>
  );
}

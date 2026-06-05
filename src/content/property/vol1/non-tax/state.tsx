"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };

export default function State() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        국가·지방자치단체 등이 소유하거나 공용·공공용으로 사용하는 재산은 재산세를 비과세한다(지법 §109①②). 다만
        외국정부의 상호주의, 유료 사용, 취득 전 사용 등 일정한 경우에는 비과세에서 제외하여 과세한다.
      </p>

      <CalcBox title="■ 소유 주체에 의한 비과세 (지법 §109①)">
        <p>
          다음 주체의 <strong>소유</strong>에 속하는 재산에 대해서는 재산세를 부과하지 아니한다.
        </p>
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li>국가, 지방자치단체, 지방자치단체조합</li>
          <li>외국정부 및 주한국제기구</li>
        </ul>
        <SubSection title="● 단서 — 상호주의 (외국정부)">
          <p>
            대한민국 정부기관의 재산에 대하여 재산세를 과세하는 외국정부의 재산에 대해서는, 우리도
            <strong> 과세</strong>한다(상호주의).
          </p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 공용·공공용 사용에 의한 비과세 (지법 §109②)">
        <p>
          국가·지방자치단체·지방자치단체조합이 <strong>1년 이상 공용 또는 공공용</strong>으로 사용하는 재산(소유 주체와
          무관)에 대해서는 재산세를 부과하지 아니한다.
        </p>
        <SubSection title="● 과세하는 경우 (비과세 제외)">
          <table style={tbl}>
            <thead>
              <tr>
                <th style={{ ...th, width: "40%" }}>구분</th>
                <th style={th}>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...td, fontWeight: "bold" }}>유료 사용</td>
                <td style={td}>해당 재산을 유료로 사용하는 경우 (사용료·대가 수반)</td>
              </tr>
              <tr>
                <td style={{ ...td, fontWeight: "bold" }}>취득 전 사용</td>
                <td style={td}>소유권의 유상이전을 약정한 경우로서, 그 재산을 취득하기 전에 미리 사용하는 경우</td>
              </tr>
            </tbody>
          </table>
        </SubSection>
        <Insight>
          「소유」 비과세(①)는 국가 등이 가진 재산 자체를 보고, 「공용·공공용」 비과세(②)는 누가 소유하든
          <strong> 1년 이상 공적 용도로 쓰는지</strong>를 본다. 유료로 쓰면 공적 용도라도 과세 대상이 된다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 과세기준일 판단">
        <p>
          비과세 여부는 <strong>과세기준일(매년 6월 1일) 현재</strong>의 소유·사용 상태를 기준으로 판단한다. 과세기준일
          이후의 사정 변경은 해당 연도 과세에 영향을 주지 않는다(다음 연도분부터 반영).
        </p>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 「1년 이상 사용」은 과세기준일 현재 사용 기간이 1년 이상이거나, 1년 이상 사용할 것이 객관적으로 인정되는
          경우를 포함한다(사실관계로 판단).
        </p>
      </CalcBox>
    </div>
  );
}

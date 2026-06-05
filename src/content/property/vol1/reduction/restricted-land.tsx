"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

export default function RestrictedLand() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        공익적 목적으로 소유권 행사(사권)가 제한되는 토지는 정상적인 수익이 곤란하므로, 그 부담을 덜어주기 위하여
        재산세를 경감한다(지특법 §84). 도로로 무상 제공되는 토지, 도시·군계획시설로 묶인 미집행 토지 등이 해당한다.
      </p>

      <CalcBox title="■ 감면 취지">
        <p>
          토지가 도로·공공시설 예정지 등으로 지정되면 건축·개발이 제한되어 소유자가 실질적으로 사용·수익할 수 없게
          된다. 그럼에도 시가표준액 기준으로 재산세가 부과되면 형평에 어긋나므로, <strong>사권이 제한된 정도</strong>를
          고려하여 재산세를 경감한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 주요 대상 (지특법 §84)">
        <SubSection title="● 도로 등으로 무상 사용되는 토지">
          <p>
            「도로법」·「사도법」 등에 따라 일반인의 통행에 무상으로 제공되는 토지 중, 재산세 비과세(지법 §109③) 대상에
            해당하지 않는 사권 제한 토지 등.
          </p>
        </SubSection>
        <SubSection title="● 도시·군계획시설 예정지 등">
          <p>
            「국토의 계획 및 이용에 관한 법률」에 따라 공공시설용으로 결정·고시되었으나 사업이 시행되지 않아 개발이
            제한된 토지 등.
          </p>
        </SubSection>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 구체적 대상·경감률(예: 재산세 50% 경감 등)과 적용기한은 지특법 §84 및 그 개정 내용에 따라 달라지므로,
          반드시 해당 연도 법령을 확인하여 적용한다.
        </p>
      </CalcBox>

      <CalcBox title="■ 적용 시 유의사항">
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li>비과세(지법 §109)와 감면(지특법 §84)은 별개다 — 비과세 도로가 아니면 감면 규정으로 검토한다.</li>
          <li>사권 제한이 해소되거나(사업 시행·지정 해제 등) 토지를 다른 용도로 사용하면 감면이 종료된다.</li>
          <li>토지의 일부만 제한되는 경우 그 부분에 안분하여 적용한다.</li>
        </ul>
        <Insight>
          판단 순서: ① 지법 §109③ <strong>비과세 도로</strong>에 해당하는가 → ② 아니라면 지특법 §84
          <strong> 사권 제한 토지 감면</strong> 대상인가. 비과세가 우선 검토되고, 그 다음 감면을 본다.
        </Insight>
      </CalcBox>
    </div>
  );
}

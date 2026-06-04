"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 건축물 세율 (책 p132) */
const rates: [string, string][] = [
  ["고급오락장용 건축물", "과세표준액 × 4%"],
  ["시(주거·상업·녹지)지역 내 공장 건축물", "과세표준액 × 0.5%"],
  ["그 밖의 건축물", "과세표준액 × 0.25%"],
];

export default function RateBuilding() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        건축물분 재산세는 단일 비례세율 체계다. 그 밖의 건축물은 0.25% 기본세율, 시 지역 내 공장용 건축물은 0.5%,
        고급오락장용 건축물은 4%가 적용된다.
      </p>

      <CalcBox title="■ 건축물 세율표">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>과세구분</th>
              <th style={{ ...th, width: "32%" }}>세율</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((r) => (
              <tr key={r[0]}>
                <td style={{ ...td, fontWeight: "bold" }}>{r[0]}</td>
                <td style={tdc}>{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 골프장·고급오락장용 건축물 (4% 중과)">
        <p>
          골프장·고급오락장 건축물에 대하여는 4%의 높은 세율이 적용된다(지법 §111①2호 가목). 골프장 중에서
          <strong> 구분등록대상이 되지 않는 부분</strong>은 일반과세가 되며, 고급오락장이 설치된 건축물도
          <strong> 설치된 부분만</strong> 중과세된다.
        </p>
        <p>
          고급오락장이 있는 경우 일반건축물과 고급오락장용 부분의 면적에 따라 <strong>안분계산한 면적</strong>만 중과세
          세율이 적용된다.
        </p>
        <Insight>
          <strong>공용면적 안분</strong> — 해당 공용면적이 고급오락장과 기타 부분으로 사용이 확연히 구분되는 것은 비록
          공용면적이라도 각각 해당 용도의 전용면적으로 산입한다(대판 93누74, 1993.4.27.). 나머지 공용면적만 고급오락장과
          기타 부분으로 안분한다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 공장용 건축물 — 0.5% / 1.25%">
        <SubSection title="● 시 지역 내 공장 — 0.5% (지법 §111①2호 나목)">
          <p>
            특별시·광역시(군 지역 제외)·시지역(읍·면 지역 제외) 내의 <strong>주거·상업·녹지지역</strong>에 소재하는
            공장용 건축물: <strong>0.5%</strong>(표준세율 0.25% × 2배).
          </p>
        </SubSection>
        <SubSection title="● 과밀억제권역 내 신·증설 공장 — 5년간 1.25%">
          <p>
            「수도권정비계획법」 §6에 따른 <strong>과밀억제권역</strong>(산업단지·유치지역, 도시계획법 적용 공업지역 제외)
            안에서 공장을 신설·증설할 경우 이에 수반된 공장용 건축물: <strong>5년간 1.25%</strong>(표준세율 0.25% × 5배)
            중과세(지법 §111①2호 나목).
          </p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 기타 건축물 — 0.25%">
        <p>
          주택·공장·골프장용·고급오락장용 건축물을 제외한 기타의 비주거용 건축물에 대하여는 <strong>0.25%</strong>의
          단일비례세율이 적용된다(지법 §111①2호 다목). 사무용 빌딩 등 주거 이외로 사용되는 건축물이 모두 포함된다.
        </p>
      </CalcBox>
    </div>
  );
}

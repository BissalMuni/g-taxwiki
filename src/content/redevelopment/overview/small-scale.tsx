"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 12.5px)" };
const th = { border: "1px solid #d9d9d9", padding: "6px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0" };
const td = { border: "1px solid #d9d9d9", padding: "6px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa", whiteSpace: "nowrap" as const };

export default function OverviewSmallScale() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        소규모주택정비사업은 <strong>「빈집 및 소규모주택 정비에 관한 특별법」</strong>(빈집정비법, ’18.2.9.~)에
        따른 사업으로, 자율주택·가로주택·소규모재개발·소규모재건축으로 구분된다. 서울시 <strong>모아주택·모아타운</strong>이
        이 유형을 블록 단위로 묶은 정비모델이다.
      </p>

      <CalcBox title="■ 소규모주택 사업 유형 (빈집정비법)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={th}>사업명</th>
              <th style={th}>구역요건</th>
              <th style={th}>사업면적</th>
              <th style={th}>기존세대수</th>
              <th style={th}>노후·불량 건축물</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>자율주택정비사업</td>
              <td style={td}>기준없음</td>
              <td style={td}>기준없음</td>
              <td style={td}>단독 18호 미만 / 다세대·연립 36세대 미만 / 혼합 36채 미만</td>
              <td style={td} rowSpan={2}>전체 건축물의 60% 이상</td>
            </tr>
            <tr>
              <td style={tdHead}>가로주택정비사업</td>
              <td style={td}>가로구역 면적 1만3천㎡ 미만</td>
              <td style={td}>1만㎡ 미만</td>
              <td style={td}>단독 10호 이상 / 다세대·연립 20세대 이상 / 혼합 20채 이상</td>
            </tr>
            <tr>
              <td style={tdHead}>소규모 재개발사업</td>
              <td style={td}>역세권 또는 준공업지역</td>
              <td style={td}>5천㎡ 미만</td>
              <td style={td}>기준없음</td>
              <td style={td}>—</td>
            </tr>
            <tr>
              <td style={tdHead}>소규모 재건축사업</td>
              <td style={td}>주택단지일 것</td>
              <td style={td}>1만㎡ 미만</td>
              <td style={td}>200세대 미만</td>
              <td style={td}>—</td>
            </tr>
          </tbody>
        </table>
        <Insight>
          소규모재개발사업은 ’21.9.21. 빈집정비법 개정으로 신설되었다. 취득세 감면·과세체계는
          도정법 정비사업에 준하되, 적용 근거 법령이 빈집정비법인 점을 확인해야 한다.
        </Insight>
      </CalcBox>
    </div>
  );
}

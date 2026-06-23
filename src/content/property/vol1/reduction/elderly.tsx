"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

export default function Elderly() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        <a href="https://www.law.go.kr/법령/노인복지법" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">「노인복지법」 제31조</a>에
        따른 노인복지시설로 직접 사용하는 부동산에 대해서는 시설 종류에 따라 재산세를 차등 감면한다(
        <a href="https://www.law.go.kr/법령/지방세특례제한법" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">지특법 §20</a>).
        경로당은 면제, 무료 노인복지시설(제1호)은 50% 경감, 그 밖의 노인복지시설(제2호)은 25% 경감한다.
      </p>

      <CalcBox title="■ 감면 내용 (지특법 §20①, 시행령 §8조의4)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "28%" }}>운영 형태</th>
              <th style={{ ...th, width: "18%" }}>재산세 감면율</th>
              <th style={th}>해당 시설 및 요건</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>경로당</td>
              <td style={{ ...tdc, color: "#cf1322", fontWeight: "bold" }}>면제 (100%)</td>
              <td style={td}>
                노인의 여가선용 목적(
                <a href="https://www.law.go.kr/법령/노인복지법" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">노인복지법 §36①2호</a>
                ) — 재산세·도시지역분·지역자원시설세 모두 면제 (부대시설 포함)
              </td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>
                제1호 시설
                <br />
                <span style={{ fontWeight: "normal", fontSize: "12px" }}>(무료 노인복지시설)</span>
              </td>
              <td style={{ ...tdc, color: "#cf1322", fontWeight: "bold" }}>50% 경감</td>
              <td style={td}>
                노인여가복지시설·노인보호전문기관·노인일자리지원기관·노인주거복지시설·노인의료복지시설·재가노인복지시설 중
                다음 어느 하나에 해당하는 시설
                <ul style={{ marginTop: "6px", paddingLeft: "1.2em", lineHeight: 1.8 }}>
                  <li>① 입소(이용)비용을 국가 또는 지방자치단체가 <strong>전액 부담</strong>하는 시설</li>
                  <li>
                    ② 노인장기요양 재가·시설급여 수급자 + 기초생활보장 수급자(
                    <a href="https://www.law.go.kr/법령/국민기초생활보장법" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">법 §7①1~3호</a>
                    )가 연평균 입소인원의 <strong>80% 이상</strong>인 시설
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ ...td, fontWeight: "bold" }}>
                제2호 시설
                <br />
                <span style={{ fontWeight: "normal", fontSize: "12px" }}>(그 밖의 노인복지시설)</span>
              </td>
              <td style={{ ...tdc, color: "#cf1322", fontWeight: "bold" }}>25% 경감</td>
              <td style={td}>제1호 외의 노인복지시설</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 종교단체가 부동산 소유자가 아닌 그 대표자 또는 종교법인이 노인복지시설로 사용하는 경우도 직접 사용으로 본다.
        </p>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
          ※ 감면 적용기한은 2026.12.31.까지이며, 최소납부세제는 해당 없음.
        </p>
      </CalcBox>

      <CalcBox title="■ 추징 및 제외 (지특법 §20②)">
        <div style={{ background: "#fffbe6", border: "1px solid #ffe58f", borderRadius: "6px", padding: "10px 14px", marginBottom: "12px", fontSize: "13px" }}>
          ⚠️ 아래 추징 규정은 <strong>취득세 감면을 받은 경우</strong>에 적용된다.
          재산세는 매년 과세기준일(6.1.) 현재의 직접 사용 여부에 따라 판단한다.
        </div>
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
          <li>
            정당한 사유 없이 부동산 취득일부터 <strong>1년</strong>(신축·증축·대수선의 경우 그 토지에 대해서는 <strong>3년</strong>)이
            경과할 때까지 해당 용도로 직접 사용하지 않는 경우
          </li>
          <li>
            해당 용도로 직접 사용한 기간이 <strong>2년 미만</strong>인 상태에서 부동산을 매각·증여하거나 다른 용도로 사용하는 경우
          </li>
          <li>수익사업에 사용하는 부분이나 해당 목적에 직접 사용하지 않는 부분은 감면 제외</li>
        </ul>
        <Insight>
          감면율은 시설 분류에서 갈린다 — ① 경로당은 100% 면제(도시지역분·지역자원시설세 포함),
          ② 제1호(무료) 시설은 국가·지자체가 입소비용을 전액 부담하거나 장기요양·기초생활 수급자가 연평균 입소인원의 80% 이상인 경우 50% 경감,
          ③ 그 외 제2호 시설은 25% 경감. 특히 &ldquo;80%&rdquo;는 비용부담 비율이 아니라 <strong>수급자 입소인원 비율</strong>임에 주의.
        </Insight>
      </CalcBox>
    </div>
  );
}

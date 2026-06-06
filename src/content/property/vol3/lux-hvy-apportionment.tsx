"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };
const red = { color: "#cf1322", fontWeight: "bold" as const };

/** 산정식 박스 스타일 */
const formula = {
  border: "1px solid #d9d9d9",
  background: "#fafafa",
  borderRadius: "8px",
  padding: "12px 14px",
  margin: "8px 0",
  fontSize: "var(--content-font-size, 13px)",
  lineHeight: 1.8,
};

export default function LuxHvyApportionment() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        고급오락장이 건축물의 <strong>일부에만</strong> 있는 경우, 중과(1천분의 40)는 <strong>고급오락장용 부분</strong>에만
        적용한다. 건축물은 면적 기준, 부속토지는 <strong>연면적 비율</strong>로 안분한다(시행령 §28⑤ 후단).
      </p>

      <CalcBox title="■ 안분이 필요한 경우">
        <p>
          하나의 건축물 전부가 고급오락장이면 안분이 필요 없다. 그러나 다음과 같이 <strong>일부만</strong> 고급오락장으로
          쓰는 경우, 그 부분과 나머지 부분을 분리해 각각 세율을 적용해야 한다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "30%" }}>구분</th>
              <th style={th}>처리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>고급오락장 부분</td>
              <td style={td}>건축물·부속토지 모두 <span style={red}>1천분의 40(4%)</span> 중과</td>
            </tr>
            <tr>
              <td style={tdHead}>그 밖의 부분</td>
              <td style={td}>일반 건축물 1천분의 2.5, 해당 토지 종별 세율 적용</td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 건축물 안분 — 면적 기준">
        <SubSection title="● 안분 방법">
          <p>
            건축물은 <strong>고급오락장용으로 사용하는 면적(공용면적 포함)</strong>을 직접 산정해 그 부분의 시가표준액에
            중과세율을 적용한다. 나머지 면적은 일반세율로 과세한다.
          </p>
          <div style={formula}>
            고급오락장용 건축물 과세표준 = 건축물 시가표준액 × (고급오락장용 연면적 ÷ 건축물 전체 연면적)
          </div>
        </SubSection>
        <SubSection title="● 공용면적 처리">
          <Insight>
            복도·계단·화장실 등 <strong>공용면적</strong>은 고급오락장 전용면적 비율에 따라 안분하여 고급오락장용 면적에
            포함한다. 영업장 면적 100㎡ 초과 판정에서도 공용면적을 포함한다(<a href="https://www.law.go.kr/법령/지방세법시행령/제28조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">§28⑤4호</a>).
          </Insight>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 부속토지 안분 — 연면적 비율 (§28⑤ 후단)">
        <p>
          고급오락장이 건축물 일부에 시설된 경우, 부속토지 중 <strong>건축물 전체 연면적에 대한 고급오락장용 연면적
          비율</strong>에 해당하는 토지를 고급오락장의 부속토지로 본다.
        </p>
        <div style={formula}>
          고급오락장 부속토지 = 건축물 부속토지 × (고급오락장용 연면적 ÷ 건축물 전체 연면적)
        </div>
        <Insight>
          부속토지 <strong>경계가 명확하지 않을 때</strong>는 그 건축물 <strong>바닥면적의 10배</strong>에 해당하는 토지를
          부속토지로 본다(<a href="https://www.law.go.kr/법령/지방세법/제13조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">법 §13⑤ 본문</a>). 안분된 부속토지는 분리과세대상으로 동일하게 4% 중과된다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 종합 계산 예시">
        <p>건물 일부(지하 1층)만 유흥주점으로 사용하는 경우의 안분 및 세액 산출.</p>
        <SubSection title="● 전제">
          <table style={tbl}>
            <thead>
              <tr>
                <th style={{ ...th, width: "60%" }}>항목</th>
                <th style={th}>값</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={td}>건축물 전체 연면적</td><td style={tdc}>1,000㎡</td></tr>
              <tr><td style={td}>고급오락장용 면적(공용 포함, 100㎡ 초과)</td><td style={tdc}>300㎡</td></tr>
              <tr><td style={td}>건축물 시가표준액</td><td style={tdc}>10억원</td></tr>
              <tr><td style={td}>건축물 부속토지</td><td style={tdc}>800㎡</td></tr>
              <tr><td style={td}>부속토지 시가표준액(전체)</td><td style={tdc}>8억원</td></tr>
            </tbody>
          </table>
        </SubSection>

        <SubSection title="● 안분 계산">
          <table style={tbl}>
            <thead>
              <tr>
                <th style={{ ...th, width: "40%" }}>구분</th>
                <th style={{ ...th, width: "32%" }}>안분 계산</th>
                <th style={th}>고급오락장분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdHead}>안분 비율</td>
                <td style={tdc}>300 ÷ 1,000</td>
                <td style={{ ...tdc, fontWeight: "bold" }}>30%</td>
              </tr>
              <tr>
                <td style={tdHead}>건축물 과세표준</td>
                <td style={tdc}>10억 × 30%</td>
                <td style={tdc}>3억원</td>
              </tr>
              <tr>
                <td style={tdHead}>부속토지 면적</td>
                <td style={tdc}>800㎡ × 30%</td>
                <td style={tdc}>240㎡</td>
              </tr>
              <tr>
                <td style={tdHead}>부속토지 과세표준</td>
                <td style={tdc}>8억 × 30%</td>
                <td style={tdc}>2.4억원</td>
              </tr>
            </tbody>
          </table>
        </SubSection>

        <SubSection title="● 세액 (중과분 1천분의 40)">
          <table style={tbl}>
            <thead>
              <tr>
                <th style={{ ...th, width: "40%" }}>구분</th>
                <th style={{ ...th, width: "32%" }}>과세표준 × 4%</th>
                <th style={th}>세액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdHead}>고급오락장 건축물</td>
                <td style={tdc}>3억 × 40/1,000</td>
                <td style={{ ...tdc, ...red }}>12,000,000원</td>
              </tr>
              <tr>
                <td style={tdHead}>고급오락장 부속토지</td>
                <td style={tdc}>2.4억 × 40/1,000</td>
                <td style={{ ...tdc, ...red }}>9,600,000원</td>
              </tr>
              <tr>
                <td style={tdHead}>중과 세액 합계</td>
                <td style={tdc}>—</td>
                <td style={{ ...tdc, ...red }}>21,600,000원</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-muted">
            → 나머지 건축물 700㎡(시가표준액 7억)·부속토지 560㎡(5.6억)는 일반세율로 별도 과세한다.
          </p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 실무 체크리스트">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "8%" }}>단계</th>
              <th style={th}>확인 사항</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tdc}>1</td><td style={td}>고급오락장용 면적을 <strong>공용면적 포함</strong>으로 산정했는가?</td></tr>
            <tr><td style={tdc}>2</td><td style={td}>건축물 과세표준을 <strong>연면적 비율</strong>로 안분했는가?</td></tr>
            <tr><td style={tdc}>3</td><td style={td}>부속토지를 <strong>연면적 비율</strong>로 안분했는가? (§28⑤ 후단)</td></tr>
            <tr><td style={tdc}>4</td><td style={td}>경계 불명확 시 <strong>바닥면적 10배</strong>를 부속토지로 적용했는가? (§13⑤ 본문)</td></tr>
            <tr><td style={tdc}>5</td><td style={td}>안분된 건축물·부속토지에 각각 <strong>1천분의 40</strong>을 적용했는가?</td></tr>
            <tr><td style={tdc}>6</td><td style={td}>나머지 부분에 일반세율을 적용해 합산 고지했는가?</td></tr>
          </tbody>
        </table>
        <Insight>안분의 기준은 영업 허가내용이 아니라 <strong>과세기준일 현재 실제 사용 현황</strong>이다.</Insight>
      </CalcBox>
    </div>
  );
}

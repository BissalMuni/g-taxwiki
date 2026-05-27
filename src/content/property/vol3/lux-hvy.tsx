"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px" };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };
const red = { color: "#cf1322", fontWeight: "bold" as const };

export default function LuxHvy() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세 고급오락장 중과는 취득세와 동일하게 <strong>「지방세법 시행령」 제28조 제5항 제4호</strong>의
        유흥주점영업 기준으로 판정한다. 본 단원은 제공된 법령 중 <strong>고급오락장(유흥주점)</strong> 관련 부분만 추려
        실무 판정·과세표준 산정 절차로 정리한 것이다.
      </p>

      <CalcBox title="■ 중과 판정 기준 (시행령 §28 ⑤ 4호)">
        <p>
          「식품위생법」 제37조에 따른 허가 대상 <strong>유흥주점영업</strong>으로서, 아래 <strong>전제</strong>를 충족하고
          <strong> 가목 또는 나목</strong> 중 하나에 해당하면 고급오락장으로 본다.
        </p>

        <SubSection title="● 전제 — 영업장 면적(공용 포함) 100㎡ 초과">
          <p>① 「식품위생법」 §37 허가 대상 <strong>유흥주점영업</strong>일 것</p>
          <p>
            ② <strong>공용면적을 포함</strong>한 영업장의 면적이 <span style={red}>100㎡ 초과</span>일 것
            (100㎡ 이하이면 가목·나목에 해당해도 중과 대상에서 제외)
          </p>
        </SubSection>

        <SubSection title="● 가목 — 무도장 설치">
          <table style={tbl}>
            <tbody>
              <tr>
                <td style={{ ...tdHead, width: "20%" }}>요건</td>
                <td style={td}>손님이 춤을 출 수 있도록 <strong>객석과 구분된 무도장</strong>을 설치한 영업장소</td>
              </tr>
              <tr>
                <td style={tdHead}>예시 업종</td>
                <td style={td}>카바레 · 나이트클럽 · 디스코클럽 등</td>
              </tr>
            </tbody>
          </table>
          <Insight>무도장이 설치되어 있으면 객실·유흥접객원 요건과 무관하게 <strong>가목</strong>으로 중과된다.</Insight>
        </SubSection>

        <SubSection title="● 나목 — 유흥접객원 + 객실 요건">
          <p>아래 <strong>두 요건을 모두</strong> 충족해야 한다.</p>
          <table style={tbl}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={{ ...th, width: "25%" }}>요건</th>
                <th style={th}>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdHead}>① 유흥접객원</td>
                <td style={td}>유흥접객원을 두는 경우 (<strong>남녀 불문, 임시로 고용된 사람 포함</strong>)</td>
              </tr>
              <tr>
                <td style={tdHead}>② 객실 요건</td>
                <td style={td}>
                  별도로 <strong>반영구적으로 구획된 객실</strong>이 다음 중 하나에 해당<br />
                  • 객실 면적이 영업장 전용면적의 <span style={red}>100분의 50 이상</span>, 또는<br />
                  • 객실 수가 <span style={red}>5개 이상</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-muted">예시 업종: 룸살롱 · 요정 등</p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 사전 서류 확인">
        <SubSection title="● 위생대장 (영업허가면적)">
          <p>
            식품위생법상 유흥주점영업 허가 내용과 <strong>영업장 면적(공용 포함)</strong>을 확인한다.
            허가면적이 <strong>100㎡ 초과</strong> 여부 판정의 출발점이다.
          </p>
        </SubSection>
        <SubSection title="● 재산세대장 대조">
          <p>
            위생대장상 영업장 면적·용도를 <strong>재산세 과세대장(건축물)</strong>의 면적·용도와 대조하여
            차이 또는 누락 여부를 확인한다.
          </p>
        </SubSection>
        <SubSection title="● 직전 출장 복명서">
          <p>직전 현장조사 복명서로 무도장·객실 현황 및 그 변동 여부를 사전 파악한다.</p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 현장 확인">
        <table style={tbl}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ ...th, width: "30%" }}>확인 항목</th>
              <th style={th}>판정 근거</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>● 룸 개수 확인 (사진·비상대피도)</td>
              <td style={td}>객실 수 <strong>5개 이상</strong> 여부 — 나목 ②. 사진·비상대피도로 객실 수·배치 확인</td>
            </tr>
            <tr>
              <td style={tdHead}>● 무도장 확인</td>
              <td style={td}>객석과 구분된 <strong>무도장</strong> 설치 여부 — 가목</td>
            </tr>
            <tr>
              <td style={tdHead}>● 룸 면적 실측</td>
              <td style={td}>반영구 구획 객실 면적 / 영업장 전용면적 <strong>≥ 50%</strong> 여부 — 나목 ②</td>
            </tr>
            <tr>
              <td style={tdHead}>● 유흥접객원 운영 여부</td>
              <td style={td}>접객원 고용·운영 여부 — 나목 ① (임시 고용 포함)</td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 과세표준 산정">
        <SubSection title="● 유흥허가면적 산정">
          <p>
            <strong>공용면적을 포함</strong>한 영업장 면적을 산정한다. 건축물의 일부만 유흥주점으로 사용하는 경우
            해당 <strong>고급오락장용 건축물의 연면적</strong>을 따로 산정한다.
          </p>
        </SubSection>

        <SubSection title="● 부속토지 안분 (§28 ⑤ 후단)">
          <p>고급오락장이 건축물의 <strong>일부에 시설</strong>된 경우, 부속토지를 연면적 비율로 안분한다.</p>
          <p className="my-3 rounded-lg border border-sidebar-border bg-sidebar-bg px-4 py-3 text-center font-mono">
            고급오락장 부속토지 = 건축물 부속토지 × (고급오락장용 연면적 ÷ 건축물 전체 연면적)
          </p>
          <Insight>
            부속토지의 <strong>경계가 명확하지 않을 때</strong>는 (법 §13⑤ 본문) 그 건축물
            <strong> 바닥면적의 10배</strong>에 해당하는 토지를 부속토지로 본다.
          </Insight>
        </SubSection>

        <SubSection title="● 사례 — 지하 일부 유흥">
          <p>건물 일부(지하 1층)만 유흥주점으로 사용하는 경우의 안분 예시.</p>
          <table style={tbl}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={{ ...th, width: "55%" }}>항목</th>
                <th style={th}>값</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>건축물 전체 연면적</td>
                <td style={td}>1,000㎡</td>
              </tr>
              <tr>
                <td style={td}>지하 1층 유흥주점 면적(공용 포함, 100㎡ 초과)</td>
                <td style={td}>300㎡</td>
              </tr>
              <tr>
                <td style={td}>건축물 부속토지</td>
                <td style={td}>800㎡</td>
              </tr>
              <tr>
                <td style={tdHead}>고급오락장 부속토지 = 800 × (300 ÷ 1,000)</td>
                <td style={{ ...tdHead, ...red }}>240㎡</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-muted">
            → 유흥용 건물 300㎡ + 안분 부속토지 240㎡가 재산세 중과(1천분의 40, 4%) 대상이 된다.
          </p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 관련 규정">
        <SubSection title="● 지방세법 제13조 제5항 제4호 — 취득세 중과">
          <p>
            고급오락장: 도박장 · 유흥주점영업장 · 특수목욕장 등 중 대통령령으로 정하는 건축물과 그 부속토지에 대해
            표준세율 + 중과기준세율의 <strong>400%</strong>를 합한 세율로 중과.
            취득일부터 60일(상속·실종은 6개월, 외국 주소는 9개월) 이내 용도변경 시 제외.&nbsp;
            <a href="https://www.law.go.kr/법령/지방세법/제13조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 §13⑤4호</a>
          </p>
        </SubSection>
        <SubSection title="● 지방세법 제111조 제1항 — 재산세 세율">
          <p>
            고급오락장은 <strong>건축물</strong>과 그 <strong>부속토지</strong> 모두 재산세 과세표준의
            <span style={red}> 1,000분의 40 (4%)</span>로 중과된다. 안분된 부속토지는 분리과세대상으로 동일 세율이 적용된다.
          </p>
          <table style={tbl}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={{ ...th, width: "30%" }}>구분</th>
                <th style={{ ...th, width: "20%" }}>고급오락장</th>
                <th style={th}>비교 (일반)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdHead}>건축물 (§111①2호 가목)</td>
                <td style={{ ...td, ...red, textAlign: "center" }}>1천분의 40</td>
                <td style={td}>그 밖의 건축물 1천분의 2.5 → <strong>16배</strong></td>
              </tr>
              <tr>
                <td style={tdHead}>부속토지 (§111①1호 다목 2))</td>
                <td style={{ ...td, ...red, textAlign: "center" }}>1천분의 40</td>
                <td style={td}>분리과세대상 고급오락장용 토지</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2">
            <a href="https://www.law.go.kr/법령/지방세법/제111조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 §111①</a>
          </p>
        </SubSection>
        <SubSection title="● 시행령 제28조 제1항 — 구분취득 시 중과">
          <p>
            고급오락장 등을 구분하여 일부를 취득하는 경우란, <strong>2명 이상이 구분하여</strong> 취득하거나
            <strong> 1명 또는 여러 명이 시차를 두고 구분하여</strong> 취득하는 경우를 말한다.&nbsp;
            <a href="https://www.law.go.kr/법령/지방세법시행령/제28조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">시행령 §28①</a>
          </p>
        </SubSection>
        <SubSection title="● 시행령 제28조 제5항 — 고급오락장의 범위">
          <p>
            제4호: 「식품위생법」 §37 허가 대상 유흥주점영업으로서 <strong>공용면적 포함 영업장 100㎡ 초과</strong>인
            <strong> 가목(무도장)</strong> 또는 <strong>나목(유흥접객원 + 객실 50% 이상 또는 5개 이상)</strong> 영업장소.&nbsp;
            <a href="https://www.law.go.kr/법령/지방세법시행령/제28조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">시행령 §28⑤4호</a>
          </p>
        </SubSection>
        <SubSection title="● 시행령 제28조 제5항 후단 — 부속토지 안분">
          <p>
            고급오락장이 건축물의 일부에 시설된 경우, 부속토지 중 <strong>건축물 연면적에 대한 고급오락장용 연면적 비율</strong>에
            해당하는 토지를 고급오락장의 부속토지로 본다.&nbsp;
            <a href="https://www.law.go.kr/법령/지방세법시행령/제28조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">시행령 §28⑤ 후단</a>
          </p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 실무 체크리스트">
        <table style={tbl}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ ...th, width: "8%" }}>단계</th>
              <th style={th}>확인 사항</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...tdHead, textAlign: "center" }}>1</td>
              <td style={td}>「식품위생법」 §37 <strong>유흥주점영업 허가</strong> 대상인가?</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, textAlign: "center" }}>2</td>
              <td style={td}>공용면적 포함 영업장 면적이 <strong>100㎡ 초과</strong>인가? (전제)</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, textAlign: "center" }}>3</td>
              <td style={td}>객석과 구분된 <strong>무도장</strong>이 있는가? (가목 → 해당 시 중과 확정)</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, textAlign: "center" }}>4</td>
              <td style={td}><strong>유흥접객원</strong>을 두는가? (나목 ①)</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, textAlign: "center" }}>5</td>
              <td style={td}>반영구 구획 객실이 <strong>전용면적 50% 이상 또는 5개 이상</strong>인가? (나목 ②)</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, textAlign: "center" }}>6</td>
              <td style={td}>건물 일부 사용 시 <strong>연면적 비율로 부속토지 안분</strong>했는가? (§28⑤ 후단)</td>
            </tr>
            <tr>
              <td style={{ ...tdHead, textAlign: "center" }}>7</td>
              <td style={td}>경계 불명확 시 <strong>바닥면적 10배</strong>를 부속토지로 적용했는가? (§13⑤ 본문)</td>
            </tr>
          </tbody>
        </table>
        <Insight>판정은 영업 허가·신고 내용이 아니라 <strong>실제 사용 현황</strong>을 기준으로 한다.</Insight>
      </CalcBox>
    </div>
  );
}

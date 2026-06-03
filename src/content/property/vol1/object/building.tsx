"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 영 §5 시설물(구축물)의 범위 — 대분류 / 중분류 (책 p107) */
const facilities: [string, string[]][] = [
  ["레저시설", ["풀장(수영장)", "스케이트장", "골프연습장", "전망대", "옥외스탠드", "유원지의 옥외오락시설"]],
  ["옥외저장시설", ["수조", "저유조", "저장창고", "저장조"]],
  ["독시설 및 접안시설", ["독(dock)", "조선대(造船臺)"]],
  ["도관시설(연결시설 포함)", ["송유관", "가스관", "열수송관"]],
  ["급수·배수시설(연결시설 포함)", ["송수관", "급·배수시설", "복개설비"]],
  ["에너지 공급시설", ["주유시설", "가스충전시설", "환경친화적 자동차 충전시설", "송전철탑"]],
  ["기타시설", ["잔교(棧橋)", "기계식·철골조립식 주차장", "차량·기계장비 자동 세차·세척시설", "방송중계탑", "무선통신기지국용 철탑"]],
];

/** 건축물 종류별 세율 (책 p108~) */
const kinds: [string, string, string][] = [
  ["일반 건물", "0.25% (2.5/1000)", "주택·중과대상(골프장·고급오락장·공장)을 제외한 건축물"],
  ["골프장용 건축물", "4% (40/1000)", "회원제골프장용 부동산으로 구분등록 대상이 되는 건축물"],
  ["고급오락장용 건축물", "4% (40/1000)", "도박장·유흥주점영업·특수목욕장 등 사치성 건축물"],
  ["시(주거·상업·녹지) 내 공장", "0.5% (5/1000)", "특별시·광역시·시 주거·상업·녹지지역 내 공장용 건축물"],
  ["과밀억제권역 내 신·증설 공장", "1.25% (12.5/1000)", "신설·증설일부터 5년간 5배 중과"],
];

export default function Building() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        재산세 과세대상이 되는 건축물의 범위는 「건축물과 시설물」이다. 모든 시설물이 과세대상에 해당하는 것은 아니고
        지방세법시행령 제5조·제6조에서 열거한 것만 과세대상에 포함된다. 「지붕·기둥·벽」의 구조형태가 판단 기준이다.
      </p>

      <CalcBox title="■ 관계법령 (지방세법 §104 2호 → §6 4호 → §2①6호)">
        <table style={tbl}>
          <tbody>
            <tr>
              <td style={{ ...tdc, width: "22%", fontWeight: "bold", backgroundColor: "#fafafa" }}>법 §104 2호</td>
              <td style={td}>「건축물」이란 지방세법 제6조제4호에 따른 건축물을 말한다.</td>
            </tr>
            <tr>
              <td style={{ ...tdc, fontWeight: "bold", backgroundColor: "#fafafa" }}>법 §6 4호</td>
              <td style={td}>
                「건축법」 §2①2호에 따른 건축물(이와 유사한 형태의 건축물 포함)과 토지에 정착하거나 지하·다른 구조물에
                설치하는 레저시설, 저장시설, 도크(dock)시설, 접안시설, 도관시설, 급수·배수시설, 에너지 공급시설 및 그 밖에
                이와 유사한 시설(딸린 시설 포함)로서 대통령령으로 정하는 것.
              </td>
            </tr>
            <tr>
              <td style={{ ...tdc, fontWeight: "bold", backgroundColor: "#fafafa" }}>법 §2①6호</td>
              <td style={td}>
                토지에 정착하는 공작물 중 <strong>지붕과 기둥 또는 벽</strong>이 있는 것과 이에 딸린 시설물, 지하·고가
                공작물에 설치하는 사무소·공연장·점포·차고·창고 등 대통령령으로 정하는 것.
              </td>
            </tr>
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 개념 — 지붕 + 기둥/벽 구조형태">
        <p>
          「건축법」 §2①2호의 정의에 비추어, 재산세 과세대상이 되는 건물은 우선 <strong>지붕</strong>이 있어야 하고
          벽 또는 기둥을 갖춘 것이어야 한다. 즉 <strong>구조형태</strong>를 기준으로 과세대상 여부를 판단한다.
        </p>
        <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.8 }}>
          <li>① 지붕과 기둥이 있는 것 + 부수 시설물</li>
          <li>② 지붕과 벽이 있는 것 + 부수 시설물</li>
          <li>③ 지붕과 기둥·벽이 있는 것 + 부수 시설물</li>
        </ul>
        <Insight>
          지붕이 없으면 건물로 볼 수 없다 — 「지붕」은 건물 판단의 필수조건. 무허가·미등기 건물이라도 구조 요건을
          갖추면 건물로서 과세대상이 된다.
        </Insight>
      </CalcBox>

      <CalcBox title="■ 시설물(구축물)의 범위 (영 §5)">
        <p className="text-muted">
          실무상 「독립시설물·구축물」이라고도 한다. 명칭보다 <strong>기능</strong>을 기준으로 열거주의에 따라 판단하며,
          시설로서의 기능에 공여되면 과세대상이 된다. 주택은 토지·건축물을 합쳐 과세하므로, 주택에 부속된 급수·배수시설
          등은 별도 과세대상이 아니다(법 §104 3호).
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "26%" }}>대분류</th>
              <th style={th}>중분류</th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((f) => (
              <tr key={f[0]}>
                <td style={{ ...td, fontWeight: "bold" }}>{f[0]}</td>
                <td style={td}>{f[1].join(" · ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 부수시설물의 범위 (영 §6) — 독립 과세대상 ✗">
        <p>
          건축물의 부수시설물은 <strong>독립적인 과세객체가 되지 아니하고</strong>, 건축물에 대한 시가표준액을 산정할 때
          가산하여 적용한다(영 §6에 종류·범위 열거).
        </p>
        <p>
          2000년까지는 특수부대설비를 별도 설치하면 재산세 과세대상이 되었으나, 지방세법 개정(2000.12.29.)으로
          2001년부터는 건축물의 개념에서 부수시설물을 제외하였다 → 부수시설물은 독립 과세대상이 될 수 없다. 다만 별도
          설치 시 취득세는 개수(改修)로 과세한다(법 §6 6호).
        </p>
        <p style={{ fontSize: "12px", color: "#888" }}>
          ※ 특수부대설비의 재산세 과세대상 제외 (행자부 세정13430-471, 2001.4.30.)
        </p>
      </CalcBox>

      <CalcBox title="■ 건축물의 종류와 세율">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "24%" }}>종류</th>
              <th style={{ ...th, width: "20%" }}>세율</th>
              <th style={th}>대상</th>
            </tr>
          </thead>
          <tbody>
            {kinds.map((k) => (
              <tr key={k[0]}>
                <td style={{ ...td, fontWeight: "bold" }}>{k[0]}</td>
                <td style={tdc}>{k[1]}</td>
                <td style={td}>{k[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <SubSection title="● 일반 건물 (법 §111①2호 다목)">
          <p>주택·골프장·고급오락장·공장용 건축물을 제외한 건물. 과세표준 × 0.25%.</p>
        </SubSection>

        <SubSection title="● 골프장용 건축물 (법 §111①2호 가목)">
          <p>
            「체육시설의 설치·이용에 관한 법률」상 <strong>회원제골프장</strong>용 부동산으로 구분등록 대상이 되는 토지·건축물
            (법 §13⑤2호). 시행령 §20의 「구분등록대상」이 되는 모든 건축물은 실제 구분등록 여부와 관계없이 4% 중과된다.
          </p>
          <p>
            사우나·휴게실·매점·창고 등 골프장 안의 모든 건축물을 포함하되, <strong>수영장·테니스장·골프연습장·연수시설·
            오수처리시설 및 대중제 골프장</strong>의 부속 건축물은 제외(→ 일반건축물 0.25%).
          </p>
        </SubSection>

        <SubSection title="● 고급오락장용 건축물 (법 §111①2호 가목, 영 §28⑤)">
          <p>
            도박장·유흥주점영업·특수목욕장 등 대통령령으로 정하는 건축물과 그 부속토지(법 §13⑤4호). 건축물 일부에 시설된
            경우 연면적 비율에 해당하는 토지를 부속토지로 본다(영 §28⑥).
          </p>
          <ol style={{ margin: "6px 0", paddingLeft: "1.3em", lineHeight: 1.7 }}>
            <li>카지노장 (관광진흥법상 외국인전용 카지노장 제외)</li>
            <li>자동도박기(파친코·슬롯머신·아케이드 이퀴프먼트 등) 설치 장소</li>
            <li>미용시설 외 욕실 등을 부설하고 요금을 받는 미용실</li>
            <li>식품위생법상 유흥주점영업(공용 포함 영업장 100㎡ 초과)</li>
          </ol>
          <Insight>
            무허가·무단 업태변경으로 고급오락장이 된 경우도 중과. 공용면적이 고급오락장에 일부 사용되면 「전용면적 +
            공용면적 × (전용면적 ÷ (건물전체면적 − 공용면적))」으로 안분 산출한다.
          </Insight>
        </SubSection>

        <SubSection title="● 공장용 건축물 — 0.5% / 1.25%">
          <p>
            <strong>건물분</strong> 재산세의 공장은 <strong>토지분</strong> 재산세의 공장과 범위가 다르다. 건물분(규칙 §55→§7)은
            「도시형공장」을 제외하나, 토지분(규칙 §50②)은 도시형공장도 포함한다.
          </p>
          <table style={tbl}>
            <thead>
              <tr>
                <th style={th}>구분</th>
                <th style={{ ...th, width: "16%" }}>세율</th>
                <th style={th}>범위</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdc}>① 주거·상업·녹지지역 내</td>
                <td style={tdc}>0.5%</td>
                <td style={td}>
                  특별시·광역시(군 제외)·시(읍·면 제외)의 주거·상업·녹지지역. 규칙 §55 별표2 업종으로 생산설비를 갖춘
                  연면적 500㎡ 이상 공장(도시형공장 제외).
                </td>
              </tr>
              <tr>
                <td style={tdc}>② 과밀억제권역 내 신·증설</td>
                <td style={tdc}>1.25% (5년)</td>
                <td style={td}>
                  「수도권정비계획법」 §6 과밀억제권역(산업단지·유치지역·공업지역 제외). 신설·증설일부터 5년간 5배 중과
                  (규칙 §68→§7 준용).
                </td>
              </tr>
            </tbody>
          </table>
          <Insight>
            과밀억제권역 중과(1.25%)는 신설·증설 후 5년에 한정. 주거지역 내 공장(0.5%)은 과세기준일 현재 존재하는 한
            계속 적용된다.
          </Insight>
        </SubSection>
      </CalcBox>
    </div>
  );
}

"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 용도구분 비과세 대상 (지법 §109③ 각 호) */
const items: [string, string, string][] = [
  ["1호", "도로·하천·제방·구거·유지·묘지", "대통령령으로 정하는 것 (영 §108)"],
  ["2호", "산림보호구역 등 토지", "「산림보호법」 산림보호구역, 그 밖에 공익상 비과세할 타당한 이유가 있는 토지"],
  ["3호", "통제보호구역 토지", "군사기지·군사시설 보호구역 중 통제보호구역 토지 (전·답·과수원·대지는 제외)"],
  ["4호", "임시 건축물", "임시로 사용하기 위해 건축된 건축물로서 과세기준일 현재 1년 미만의 것"],
  ["5호", "특수용도 선박", "비상재해구조용·무료도선용·선교 구성용·본선에 속하는 traffic용 등 선박"],
  ["6호", "철거명령 건축물 등", "철거명령을 받는 등 과세가 부적절한 건축물 (부속토지는 과세)"],
];

/** 영 §108 도로·하천 등의 범위 */
const scope: [string, string][] = [
  ["도로", "「도로법」상 도로 + 일반인의 자유로운 통행을 위해 개설한 사도(私道). 단, 「건축법 시행령」 §80의2 대지 안의 공지는 제외"],
  ["하천", "「하천법」상 하천 + 「소하천정비법」상 소하천"],
  ["제방", "공간정보관리법상 제방. 단, 특정인이 전용하는 제방은 제외"],
  ["구거", "농업용 구거 + 자연유수의 배수처리에 제공하는 구거"],
  ["유지", "농업용·발전용 댐·저수지·소류지 + 자연적으로 형성된 호수·늪"],
  ["묘지", "무덤과 부속시설물 부지로서 지적공부상 지목이 「묘지」인 토지"],
];

export default function Use() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        공익적 성격이 강하거나 과세 실익이 적은 재산은 그 <strong>용도</strong>에 따라 재산세를 비과세한다(지법 §109③,
        영 §108). 다만 사치성 재산은 제외되며, 수익사업·유료 사용·목적 외 사용분에 대해서는 비과세에서 배제하여 과세한다.
      </p>

      <CalcBox title="■ 용도구분 비과세 대상 (지법 §109③)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "10%" }}>구분</th>
              <th style={{ ...th, width: "28%" }}>대상</th>
              <th style={th}>내용</th>
            </tr>
          </thead>
          <tbody>
            {items.map((r) => (
              <tr key={r[0]}>
                <td style={tdc}>{r[0]}</td>
                <td style={{ ...td, fontWeight: "bold" }}>{r[1]}</td>
                <td style={td}>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
          ※ 사치성 재산(지법 §13⑤ — 골프장·고급오락장용 토지·건축물 등)은 용도구분 비과세 대상에서 제외된다.
        </p>
      </CalcBox>

      <CalcBox title="■ 도로·하천·제방·구거·유지·묘지의 범위 (영 §108)">
        <p>1호의 비과세 대상은 시행령에서 다음과 같이 구체적으로 정한다.</p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "14%" }}>대상</th>
              <th style={th}>범위</th>
            </tr>
          </thead>
          <tbody>
            {scope.map((r) => (
              <tr key={r[0]}>
                <td style={{ ...td, fontWeight: "bold", textAlign: "center" }}>{r[0]}</td>
                <td style={td}>{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CalcBox>

      <CalcBox title="■ 비과세에서 제외되어 과세하는 경우 (§109③ 단서)">
        <p>용도구분 비과세 대상이라도 다음에 해당하면 그 부분에 대해서는 재산세를 부과한다.</p>
        <SubSection title="● 과세 전환 사유">
          <ul style={{ margin: "6px 0", paddingLeft: "1.2em", lineHeight: 1.9 }}>
            <li>
              대통령령으로 정하는 <strong>수익사업</strong>에 사용하는 경우 — 그 재산
            </li>
            <li>
              해당 재산이 <strong>유료로 사용</strong>되는 경우 — 그 재산
            </li>
            <li>
              해당 재산의 일부가 그 <strong>목적에 직접 사용되지 아니하는</strong> 경우 — 그 일부 재산
            </li>
          </ul>
        </SubSection>
        <Insight>
          비과세는 「용도에 직접·전용으로 쓰일 것」을 전제로 한다. 따라서 같은 토지·건축물이라도 일부를 다른 용도로
          쓰거나 유료로 임대하면, <strong>그 부분만 안분하여 과세</strong>한다. 6호 철거명령 건축물도 건물은 비과세하되
          <strong> 부속토지는 과세</strong>하는 점을 주의한다.
        </Insight>
      </CalcBox>
    </div>
  );
}

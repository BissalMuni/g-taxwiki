"use client";

import { CalcBox, SubSection, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdc = { ...td, textAlign: "center" as const };

/** 선박 종류 (법 §6 10호) */
const ships: [string, string][] = [
  ["기선(汽船)", "발동기관의 추진력으로 운항하는 배"],
  ["범선(帆船)", "돛을 이용한 배"],
  ["부선(艀船)", "동력 설비가 없어 짐을 싣고 다른 배에 끌려 다니는 배"],
];

export default function AircraftShip() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        항공기·선박은 지방세법이 항공법·선박법 등에서 차용하지 않고 <strong>고유하게 정의</strong>한다. 따라서 등록 여부와
        무관하게 과세대상이 되며, 사람의 탑승·조종(항공기), 부양성·적재성·이동성(선박) 같은 실질 요건으로 판단한다.
      </p>

      <CalcBox title="■ 항공기 (법 §104 4호 / §6 9호)">
        <p>
          「항공기」란 사람이 탑승·조종하여 항공에 사용하는 <strong>비행기·비행선·활공기(글라이더)·회전익항공기(헬리콥터)</strong>
          및 그 밖에 이와 유사한 비행기구로서 대통령령으로 정하는 것을 말한다.
        </p>
        <Insight>
          <strong>반드시 사람이 탑승·조종</strong>해야 한다 — 광고풍선·무인비행선처럼 탑승·조종하지 않는 항공기는 과세대상이
          아니다. 현행 지방세법에 대통령령으로 정한 추가 항공기는 없어, 법에 열거된 비행기·비행선·글라이더·헬리콥터만
          과세대상이 된다.
        </Insight>
        <p>
          재산세 항공기 개념은 취득세의 것을 준용하나, 취득세와 달리 원시취득 제외 규정이 없다. 따라서 과세기준일 현재
          시·군·구 내에서 항공기를 취득·보유하고 있으면 <strong>취득 형태와 무관히</strong> 과세대상이 된다.
        </p>
      </CalcBox>

      <CalcBox title="■ 선박 (법 §104 5호 / §6 10호)">
        <p>
          「선박」이란 기선·범선·부선 및 그 밖의 명칭에 관계없이 <strong>모든 배</strong>를 말한다. 선박은
          <strong> 부양성·적재성·이동성</strong>을 모두 갖춘 구조물이어야 하며, 어느 하나라도 갖추지 못하면 과세대상
          선박이 아니다.
        </p>
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "20%" }}>종류</th>
              <th style={th}>정의</th>
            </tr>
          </thead>
          <tbody>
            {ships.map((s) => (
              <tr key={s[0]}>
                <td style={{ ...td, fontWeight: "bold" }}>{s[0]}</td>
                <td style={td}>{s[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          선박을 과세대상으로 하려면 원칙적으로 시·군에 <strong>선적항(船籍港)이나 정계장(碇繫場)</strong>을 두어야 한다.
          이것이 없거나 일정하지 아니하면 선박 소유자의 주소지 시·군을 납세지로 한다. 상품으로 제조·건조하는 선박은
          취득세 납세의무가 없으나, 승계취득하거나 과세기준일 현재 사용을 위해 선적·정계장을 둔 경우 재산세 과세대상이 된다.
        </p>

        <SubSection title="● 선적항·정계장">
          <p>
            <strong>선적항</strong>은 선박소유자가 선적 등록·신고를 행한 곳으로, 일반적으로 소유자 주소지 시·읍·면이 되나
            항행 수면이 없는 경우 등은 해당관청 인가로 다른 장소를 선적항으로 할 수 있다(20톤 이상 등록 선박).
          </p>
          <p>
            <strong>정계장</strong>은 등록 대상이 아닌 소형선박(총톤수 5톤 미만)·군관경찰용 선박·단주·노도 운항 배 등을
            계류하는 장소로, 행정관청이 정한 곳이 아니라 실제로 선박이 운항하지 않을 때 머무는 장소를 말한다.
          </p>
        </SubSection>

        <SubSection title="● 고급선박 (법 §13⑤5호, 영 §28⑥) — 5% 중과">
          <p>
            「고급선박」이란 비업무용 자가용 선박으로서 <strong>시가표준액 3억원을 초과</strong>하는 선박을 말한다(실험·실습
            등 용도 취득은 제외). 고급선박에 대한 재산세는 과세표준의 <strong>1천분의 50(5%)</strong>이 적용된다.
          </p>
        </SubSection>
      </CalcBox>
    </div>
  );
}

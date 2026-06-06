"use client";

import { CalcBox, Insight } from "@/components/content/shared";

/** 표 공통 스타일 */
const tbl = { width: "100%", borderCollapse: "collapse" as const, fontSize: "var(--content-font-size, 13px)" };
const th = { border: "1px solid #d9d9d9", padding: "8px", fontWeight: "bold" as const, backgroundColor: "#f0f0f0", textAlign: "center" as const };
const td = { border: "1px solid #d9d9d9", padding: "8px", verticalAlign: "top" as const };
const tdHead = { ...td, fontWeight: "bold" as const, backgroundColor: "#fafafa" };

export default function Place() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        소방분 지역자원시설세의 납세지는 <strong>건축물의 소재지</strong>, 선박은 <strong>선적항 소재지</strong>다(지법 §144).
      </p>

      <CalcBox title="■ 납세지 (지법 §144)">
        <table style={tbl}>
          <thead>
            <tr>
              <th style={{ ...th, width: "26%" }}>대상</th>
              <th style={th}>납세지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdHead}>건축물</td>
              <td style={td}>건축물의 <strong>소재지</strong>를 관할하는 지방자치단체</td>
            </tr>
            <tr>
              <td style={tdHead}>선박</td>
              <td style={td}>
                「선박법」에 따른 <strong>선적항(船籍港)의 소재지</strong>. 선적항이 없는 선박은 정계장(定繫場) 소재지,
                정계장도 없으면 선박 소유자의 주소지 등 재산세 선박 납세지 기준을 준용한다.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          <a href="https://www.law.go.kr/법령/지방세법/제144조" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">지방세법 §144</a>
        </p>
      </CalcBox>

      <CalcBox title="■ 실무 처리">
        <Insight>
          소방분은 재산세 건축물·선박분과 <strong>동일한 과세관청</strong>에서 함께 부과·고지된다. 건축물이 소재한
          시·군·구가 재산세와 소방분을 한 장의 고지서에 병기하여 부과하는 것이 일반적이다.
        </Insight>
      </CalcBox>
    </div>
  );
}

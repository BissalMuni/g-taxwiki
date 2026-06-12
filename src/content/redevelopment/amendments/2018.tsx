"use client";

import { CalcBox } from "@/components/content/shared";

export default function Amendments2018() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        도시개발사업 등 감면대상자에 <strong>상속인 포함</strong>을 명확화(지특법 §74). 입법취지를 명확히 한 사항으로
        종전과 동일하게 적용.
      </p>

      <CalcBox title="■ 개정내용 (지특법 §74)">
        <p>
          종전에는 §74①(환지·관리처분에 따른 취득부동산)에서만 “상속인을 포함”하여 감면하고, §74③4·5호
          (사업시행자로부터 취득하는 85㎡ 이하 주택 등)에는 상속인 포함 규정이 없어 <strong>불형평</strong>이 발생했다.
        </p>
        <p>
          주택재개발사업 등에서 <strong>조합원 외 감면대상 부동산 소유자의 범위에 상속인을 포함</strong>하도록 개정하여,
          §74① 단서의 “(상속인을 포함한다)”를 §74 전체에 적용(“이하 이 조에서 같다”)하고, §74③4·5호의 문구를
          “부동산을 소유한 자” → “부동산의 소유자”로 정비.
        </p>
      </CalcBox>

      <CalcBox title="■ 개정이유">
        <p>
          유사 주택개발사업 감면임에도 §74①에만 상속인을 포함하여 감면하던 불형평을 해소.
          (행안부 유권해석 지방세운영과-2224, ’13.9.6.: §74③의 경우도 상속인 포함하여 감면)
        </p>
        <p className="text-muted" style={{ fontSize: "12px" }}>적용요령: 입법취지 명확화 사항이므로 종전과 동일하게 적용.</p>
      </CalcBox>
    </div>
  );
}

"use client";

import { CalcBox, SubSection } from "@/components/content/shared";

export default function Religion() {
  return (
    <div className="space-y-8">
      <p className="text-muted">
        향교·종교단체가 향교재단등 명의로 등기한 토지를 개별단체별로 합산 과세하도록 신청할 수 있는 특례다
        (지법 §119의3, 2019.12. 신설).
      </p>

      <CalcBox title="■ 대상 / 물건 / 과세표준">
        <SubSection title="● 대상 — 향교 또는 개별 종교단체(개별단체)">
          <p>
            「부동산 실권리자명의 등기에 관한 법률 시행령」 §5①3호에 따른 개별 향교 또는 같은 항 제2호에 따른 소속
            종교단체.
          </p>
        </SubSection>
        <SubSection title="● 물건 — 향교재단등 명의로 등기된 토지">
          <p>
            개별단체가 소유한 토지로서 향교재단등의 명의로 등기된 토지(조세 포탈을 목적으로 하지 않고 등기한 토지).
            「향교재단등」은 개별단체가 속하는 「향교재산법」상 향교재단 또는 위 시행령 §5①1호에 따른 종단을 말한다.
          </p>
        </SubSection>
        <SubSection title="● 과세표준 — 개별단체별 합산">
          <p>
            법 §113①에도 불구하고 <strong>개별단체별로 합산된 토지의 가액</strong>을 과세표준으로 하여 토지에 대한
            재산세를 과세할 수 있다.
          </p>
        </SubSection>
      </CalcBox>

      <CalcBox title="■ 신청 방법 — 납기개시 20일 전까지">
        <p>
          개별단체별로 합산하여 납부하려는 경우, 토지분 재산세 납기 배제 신청서[별지 제63호의2 서식]에 다음 서류를
          첨부하여 <strong>토지분 재산세 납기개시 20일 전까지</strong> 해당 토지 소재지 관할 지방자치단체장에게 제출한다.
        </p>
        <ol style={{ margin: "6px 0", paddingLeft: "1.3em", lineHeight: 1.7 }}>
          <li>향교재단등의 정관(정관 변경 시 「민법」 §45③에 따른 주무관청의 정관 변경허가서 포함)</li>
          <li>향교재단등의 이사회 회의록</li>
          <li>대상토지의 사실상 소유자가 개별 향교 또는 소속 종교단체임을 입증할 수 있는 서류</li>
        </ol>
      </CalcBox>

      <CalcBox title="■ 결과통지">
        <p>
          신청을 받은 지방자치단체의 장은 개별단체별 합산 여부를 결정하여, 신청 내용이 사실과 다를 경우 세액이 추징될
          수 있다는 내용과 함께 결과를 서면[별지 제63호의3 서식]으로 통지한다(요청 시 전자적 방법 가능). 합산 납부한
          경우 다음 연도부터 소유관계가 변동하기 전까지는 <strong>재신청을 하지 않아도 된다</strong>.
        </p>
      </CalcBox>
    </div>
  );
}

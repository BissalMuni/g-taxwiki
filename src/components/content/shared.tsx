"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/** 준비 중 페이지 */
export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="py-16 text-center text-muted">
      <p className="text-4xl mb-4">🚧</p>
      <p className="font-medium">{title}</p>
      <p className="text-sm mt-2">준비 중입니다</p>
    </div>
  );
}

/** 단계 번호 뱃지 */
export function Step({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white text-sm font-bold shrink-0">
        {n}
      </span>
      <span className="font-semibold">{label}</span>
    </div>
  );
}

/** 행렬/벡터 시각화 */
export function Matrix({
  data,
  label,
  color = "default",
}: {
  data: (number | string)[][];
  label?: string;
  color?: "default" | "blue" | "green" | "orange" | "purple";
}) {
  const colors = {
    default: "border-sidebar-border bg-sidebar-bg",
    blue:    "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-950",
    green:   "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950",
    orange:  "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-950",
    purple:  "border-purple-300 bg-purple-50 dark:border-purple-700 dark:bg-purple-950",
  };

  return (
    <div className="inline-flex flex-col items-center gap-1">
      {label && <span className="text-xs text-muted font-mono">{label}</span>}
      <div className={`rounded-lg border p-3 font-mono text-sm ${colors[color]}`}>
        {data.map((row, i) => (
          <div key={i} className="flex gap-2">
            {row.map((cell, j) => (
              <span key={j} className="w-12 text-right">
                {typeof cell === "number" ? cell.toFixed(2) : cell}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** 화살표 연산자 */
export function Arrow({ op }: { op?: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-2 text-muted">
      {op && <span className="text-xs mb-1">{op}</span>}
      <span className="text-lg">→</span>
    </div>
  );
}

/** 대목차(CalcBox) 전체화면 팝업 모달
 *  - 외부 클릭 / X 버튼 / ESC 로 닫힘
 *  - document.body 로 portal → 콘텐츠 컨테이너(AutoSectionComment 감지 영역) 바깥에서 렌더
 *  - .topic-content 클래스를 부여해 모바일 표 스크롤 등 콘텐츠 스코프 스타일 상속 */
function SectionModal({
  title,
  onClose,
  children,
}: {
  title?: string;
  onClose: () => void;
  children?: React.ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // 배경 스크롤 잠금
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-2 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="topic-content relative flex h-full w-full max-w-6xl flex-col rounded-xl border border-sidebar-border shadow-2xl"
        style={{ backgroundColor: "var(--bg-color)", maxHeight: "96vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 — 제목 + 닫기 */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between gap-3 rounded-t-xl border-b border-sidebar-border px-5 py-3"
          style={{ backgroundColor: "var(--bg-color)" }}
        >
          {title && <h2 className="text-xl font-semibold text-accent">{title}</h2>}
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="shrink-0 rounded-md p-1.5 text-2xl leading-none text-muted transition-colors hover:bg-sidebar-bg hover:text-foreground"
          >
            ✕
          </button>
        </div>
        {/* 본문 */}
        <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

/** 계산 단계 박스
 *  AutoSectionComment가 <section><h2> 패턴을 찾아 의견 버튼을 주입하므로
 *  CalcBox는 의도적으로 section + h2로 마크업한다.
 *  h2 기본 폰트 크기를 무력화하기 위해 text-base를 명시.
 *  id prop은 SectionNav 등 페이지 내 앵커 스크롤용.
 *  "크게보기" 버튼 → 해당 대목차만 전체화면 팝업으로 표시. */
export function CalcBox({ children, title, id }: { children?: React.ReactNode; title?: string; id?: string }) {
  const [enlarged, setEnlarged] = useState(false);

  return (
    <section id={id} className="rounded-xl border border-sidebar-border bg-sidebar-bg p-5 mb-6">
      {title && (
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 className="text-2xl font-semibold text-accent">{title}</h2>
          <button
            type="button"
            onClick={() => setEnlarged(true)}
            className="mt-1 inline-flex shrink-0 items-center gap-1 rounded-md border border-sidebar-border bg-sidebar-bg px-2 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label={`${title} 크게보기`}
            title="크게보기"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 3h6v6" />
              <path d="M9 21H3v-6" />
              <path d="M21 3l-7 7" />
              <path d="M3 21l7-7" />
            </svg>
            크게보기
          </button>
        </div>
      )}
      {children}
      {enlarged && (
        <SectionModal title={title} onClose={() => setEnlarged(false)}>
          {children}
        </SectionModal>
      )}
    </section>
  );
}

/** CalcBox 내부 소소목차
 *  AutoSectionComment가 <h3> 도 감지해 의견 버튼을 주입한다.
 *  CalcBox(h2) 안에서 세부 주제를 나눌 때 사용. */
export function SubSection({ children, title }: { children?: React.ReactNode; title: string }) {
  return (
    <div className="mt-10 first:mt-0">
      <h3 className="text-[1.3125rem] font-semibold mb-3 text-emerald-600 dark:text-emerald-400">{title}</h3>
      {children}
    </div>
  );
}

/** 인사이트 박스 */
export function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-accent bg-accent-light px-5 py-4 mb-6 text-sm leading-relaxed">
      💡 {children}
    </div>
  );
}

"use client";

import { Suspense, useRef } from "react";
import Link from "next/link";
import { AutoSectionComment } from "@/components/feedback/auto-section-comment";
import { SectionComment } from "@/components/feedback/section-comment";
import { RecordView } from "@/components/content/record-view";
import { FloatingSectionNav } from "@/components/mdx/FloatingSectionNav";
import { getContentComponent } from "@/map";
import type { Book, TreeNode } from "@/book";

/** 목차 경로 항목 */
interface Crumb {
  title: string;
  href: string;
}

/** 소단원 콘텐츠 표시 + 모든 section h2/h3 옆에 의견 버튼 자동 주입 */
export function TopicContent({
  node,
  contentPath,
  book,
  breadcrumb = [],
}: {
  node: TreeNode;
  contentPath: string;
  book: Book;
  breadcrumb?: Crumb[];
}) {
  const Content = getContentComponent(book, node);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* 조회수 기록 (통계용) */}
      <RecordView path={contentPath} bookId={book.id} title={node.title} />

      <div className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold">
            {node.title}
            {/* 소목차 전체에 대한 의견 버튼 */}
            <span className="ml-2 align-middle">
              <SectionComment sectionSlug={node.id} sectionTitle={node.title} level="minor" />
            </span>
          </h1>
        </div>

        {/* 목차 경로 (breadcrumb) */}
        {breadcrumb.length > 0 && (
          <nav
            aria-label="목차 경로"
            className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-gray-500 dark:text-gray-400"
          >
            {breadcrumb.map((crumb, i) => {
              const isLast = i === breadcrumb.length - 1;
              return (
                <span key={crumb.href} className="flex items-center gap-x-1.5">
                  {i > 0 && <span className="text-gray-300 dark:text-gray-600">/</span>}
                  {isLast ? (
                    <span className="text-gray-700 dark:text-gray-300">{crumb.title}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-blue-600 hover:underline">
                      {crumb.title}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        )}
      </div>

      <div ref={containerRef} className="topic-content">
        {Content ? (
          <Suspense fallback={<p className="text-muted">콘텐츠를 불러오는 중...</p>}>
            <Content />
            {/* 모든 <section><h2> 옆에 의견 버튼 자동 주입.
                lazy Content 하이드레이션이 끝난 뒤에만 useEffect 가 실행되도록
                Suspense 내부에 둔다 (밖에 두면 h2 에 span 을 먼저 끼워넣어
                하이드레이션 미스매치 발생). */}
            <AutoSectionComment containerRef={containerRef} />
          </Suspense>
        ) : (
          <p className="text-muted italic">이 단원의 콘텐츠가 준비 중입니다.</p>
        )}
      </div>

      {/* 스크롤 중에만 보이는 플로팅 섹션 네비 (페이지당 1개) */}
      <FloatingSectionNav />
    </>
  );
}

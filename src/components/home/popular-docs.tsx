import Link from "next/link";
import { allBooks } from "@/book";
import { getPopularContent } from "@/lib/supabase/views";

/** 자주 보는 문서 Top N — 최근 30일 누적 조회수 기준 (서버 컴포넌트) */
export async function PopularDocs() {
  let items;
  try {
    items = await getPopularContent(30, 8);
  } catch {
    // 통계 테이블 미설정 등 — 조용히 숨김
    return null;
  }
  if (!items || items.length === 0) return null;

  const bookTitle = (id: string) =>
    allBooks.find((b) => b.id === id)?.title ?? id;

  return (
    <section className="mt-16">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <span>🔥</span>
        <span>자주 보는 문서</span>
        <span className="text-sm font-normal text-gray-400">최근 30일</span>
      </h2>
      <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-700">
        {items.map((item, i) => (
          <li key={item.contentPath}>
            <Link
              href={item.contentPath}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span className="w-5 shrink-0 text-center text-sm font-bold text-blue-500">
                {i + 1}
              </span>
              <span className="flex-1 truncate text-sm font-medium text-gray-900 dark:text-gray-100">
                {item.title}
              </span>
              <span className="shrink-0 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500 dark:bg-gray-700 dark:text-gray-300">
                {bookTitle(item.bookId)}
              </span>
              <span className="w-16 shrink-0 text-right text-xs tabular-nums text-gray-400">
                {item.total.toLocaleString()}회
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

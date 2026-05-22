import { getSupabase } from './server';

/** 인기 문서 집계 결과 */
export interface PopularContent {
  /** URL 경로 (예: /property/vol3/lux-hvy) */
  contentPath: string;
  /** 소속 책 ID */
  bookId: string;
  /** 문서 제목 */
  title: string;
  /** 집계 기간 내 누적 조회수 */
  total: number;
}

/** 콘텐츠 열람 1회 기록 (일별 누적, RPC upsert) */
export async function recordView(
  path: string,
  bookId: string,
  title: string,
): Promise<void> {
  const supabase = getSupabase();
  const { error } = await supabase.rpc('increment_content_view', {
    p_path: path,
    p_book: bookId,
    p_title: title,
  });
  if (error) throw error;
}

/** 최근 N일 인기 문서 Top K 조회 */
export async function getPopularContent(
  days = 30,
  limit = 8,
): Promise<PopularContent[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase.rpc('popular_content', {
    p_days: days,
    p_limit: limit,
  });
  if (error) throw error;
  return (data ?? []).map(
    (r: { content_path: string; book_id: string; title: string; total: number }) => ({
      contentPath: r.content_path,
      bookId: r.book_id,
      title: r.title,
      total: Number(r.total),
    }),
  );
}

/**
 * 검색 (클라이언트용 로더)
 *
 * 검색 인덱스는 빌드 타임에 생성된 정적 산출물 `/search-index.json` 에서
 * 가져온다 (scripts/build-search-index.ts 참조).
 * 콘텐츠 본문·태그까지 인덱싱되어 있어 키워드 검색이 가능하다.
 *
 * 인덱스는 검색이 처음 실행될 때 한 번만 fetch 하여 모듈 캐시에 보관한다.
 * 서버(API 라우트)는 fs 로 직접 읽으므로 이 모듈을 사용하지 않는다.
 */

import { runSearch, type IndexEntry, type SearchResult } from './scoring';

export type { SearchResult } from './scoring';

/** 캐시된 인덱스 로드 Promise (중복 fetch 방지) */
let indexPromise: Promise<IndexEntry[]> | null = null;

/** 검색 인덱스를 한 번만 fetch 하여 캐시한다. */
function loadIndex(): Promise<IndexEntry[]> {
  if (!indexPromise) {
    indexPromise = fetch('/search-index.json')
      .then((res) => (res.ok ? (res.json() as Promise<IndexEntry[]>) : []))
      .catch(() => []);
  }
  return indexPromise;
}

/**
 * 인덱스를 미리 받아둔다 (검색창 열기 직전 호출하면 첫 검색 지연을 줄인다).
 */
export function preloadSearchIndex(): void {
  void loadIndex();
}

/**
 * 검색 쿼리로 콘텐츠를 검색한다.
 * @param query - 검색어
 * @param limit - 최대 결과 수 (기본 20)
 */
export async function searchContent(
  query: string,
  limit = 20,
): Promise<SearchResult[]> {
  if (!query.trim()) return [];
  const index = await loadIndex();
  return runSearch(index, query, limit);
}

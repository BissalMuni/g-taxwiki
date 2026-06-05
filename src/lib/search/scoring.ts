/**
 * 검색 스코어링 (순수 함수 — IO 없음)
 *
 * 클라이언트(fetch 로더)와 서버(fs 로더)가 동일한 로직을 공유하기 위해
 * 인덱스 입출력과 점수 계산을 분리한다.
 */

/** 검색 결과 타입 */
export interface SearchResult {
  id: string;
  title: string;
  category: string;
  path: string;
  snippet: string;
  score: number;
}

/** 검색 인덱스 항목 (빌드 산출물 public/search-index.json 의 한 항목) */
export interface IndexEntry {
  id: string;
  title: string;
  /** 소속 책 제목 (카테고리) */
  category: string;
  /** URL 경로 */
  path: string;
  /** 상위 노드 제목 경로 (breadcrumb) */
  breadcrumb: string;
  /** 메타 주석에서 추출한 태그 */
  tags: string[];
  /** 콘텐츠 본문 텍스트 (JSX 제거 후) */
  body: string;
}

/**
 * 인덱스 항목과 검색어의 매칭 점수를 계산한다.
 * 제목 > 태그 > breadcrumb > 본문 순으로 가중치를 둔다.
 * @param q - 이미 소문자/trim 처리된 검색어
 */
function computeScore(entry: IndexEntry, q: string): number {
  const title = entry.title.toLowerCase();
  const breadcrumb = entry.breadcrumb.toLowerCase();
  const tags = entry.tags.map((t) => t.toLowerCase());
  const body = entry.body.toLowerCase();

  let score = 0;

  // 제목
  if (title === q) score = Math.max(score, 100);
  else if (title.startsWith(q)) score = Math.max(score, 85);
  else if (title.includes(q)) score = Math.max(score, 70);

  // 태그
  if (tags.some((t) => t === q)) score = Math.max(score, 65);
  else if (tags.some((t) => t.includes(q))) score = Math.max(score, 50);

  // breadcrumb
  if (breadcrumb.includes(q)) score = Math.max(score, 35);

  // 본문
  if (body.includes(q)) score = Math.max(score, 25);

  // 다중 토큰 매칭 (공백 분할)
  const tokens = q.split(/\s+/).filter(Boolean);
  if (tokens.length > 1) {
    let tokenScore = 0;
    for (const tok of tokens) {
      if (title.includes(tok)) tokenScore += 20;
      else if (tags.some((x) => x.includes(tok))) tokenScore += 14;
      else if (breadcrumb.includes(tok)) tokenScore += 8;
      else if (body.includes(tok)) tokenScore += 5;
    }
    score = Math.max(score, tokenScore);
  }

  return score;
}

/**
 * 본문에서 검색어 주변을 잘라 스니펫을 만든다.
 * 본문에 매칭이 없으면 breadcrumb 를 반환한다.
 * @param q - 이미 소문자/trim 처리된 검색어
 */
function makeSnippet(entry: IndexEntry, q: string): string {
  const body = entry.body;
  if (body) {
    const lower = body.toLowerCase();
    let pos = lower.indexOf(q);
    if (pos < 0) {
      // 토큰 단위로 첫 매칭 위치 탐색
      for (const tok of q.split(/\s+/).filter(Boolean)) {
        const i = lower.indexOf(tok);
        if (i >= 0) {
          pos = i;
          break;
        }
      }
    }
    if (pos >= 0) {
      const start = Math.max(0, pos - 30);
      const end = Math.min(body.length, pos + 70);
      let s = body.slice(start, end).trim();
      if (start > 0) s = `… ${s}`;
      if (end < body.length) s = `${s} …`;
      return s;
    }
  }
  return entry.breadcrumb;
}

/**
 * 인덱스 전체에 대해 검색을 수행한다.
 * @param index - 검색 인덱스
 * @param query - 검색어 (원본)
 * @param limit - 최대 결과 수
 */
export function runSearch(
  index: IndexEntry[],
  query: string,
  limit = 20,
): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return index
    .map((entry) => ({ entry, score: computeScore(entry, q) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry, score }) => ({
      id: entry.id,
      title: entry.title,
      category: entry.category,
      path: entry.path,
      snippet: makeSnippet(entry, q),
      score,
    }));
}

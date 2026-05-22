-- 콘텐츠 조회수 통계 (문서·날짜별 누적)
CREATE TABLE tax.content_views (
  content_path TEXT NOT NULL,        -- URL 경로 (예: /property/vol3/lux-hvy)
  book_id      TEXT NOT NULL,        -- 소속 책 ID
  title        TEXT NOT NULL,        -- 표시용 제목 (비정규화)
  view_date    DATE NOT NULL DEFAULT current_date,
  views        INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (content_path, view_date)
);

CREATE INDEX idx_content_views_date ON tax.content_views (view_date);

-- 조회 1회 기록 (당일 row upsert)
CREATE OR REPLACE FUNCTION tax.increment_content_view(
  p_path TEXT,
  p_book TEXT,
  p_title TEXT
) RETURNS void
LANGUAGE sql
AS $$
  INSERT INTO tax.content_views (content_path, book_id, title, view_date, views)
  VALUES (p_path, p_book, p_title, current_date, 1)
  ON CONFLICT (content_path, view_date)
  DO UPDATE SET
    views   = tax.content_views.views + 1,
    title   = EXCLUDED.title,
    book_id = EXCLUDED.book_id;
$$;

-- 최근 N일 인기 문서 Top K
CREATE OR REPLACE FUNCTION tax.popular_content(
  p_days INTEGER,
  p_limit INTEGER
) RETURNS TABLE (
  content_path TEXT,
  book_id TEXT,
  title TEXT,
  total BIGINT
)
LANGUAGE sql
STABLE
AS $$
  SELECT
    content_path,
    max(book_id) AS book_id,
    max(title)   AS title,
    sum(views)   AS total
  FROM tax.content_views
  WHERE view_date >= current_date - (p_days - 1)
  GROUP BY content_path
  ORDER BY total DESC
  LIMIT p_limit;
$$;

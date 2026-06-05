/**
 * 검색 인덱스 빌드 스크립트
 *
 * src/book/data/*.json (트리 메타) + src/content/**.tsx (본문) 를 읽어
 * public/search-index.json 을 생성한다.
 *
 * - 트리의 leaf 노드만 인덱싱 (title, breadcrumb, URL 경로)
 * - 각 leaf 에 대응하는 콘텐츠 TSX 파일에서 태그와 본문 텍스트를 추출해 결합
 *
 * 실행: pnpm search:index  (dev/build 시 자동 실행)
 */

import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const BOOK_DATA_DIR = path.join(ROOT, 'src', 'book', 'data');
const CONTENT_DIR = path.join(ROOT, 'src', 'content');
const OUTPUT = path.join(ROOT, 'public', 'search-index.json');

/** 본문 1개당 인덱싱할 최대 길이 (인덱스 크기 제한) */
const MAX_BODY_LENGTH = 3000;

interface TreeNode {
  id: string;
  slug: string;
  title: string;
  children?: TreeNode[];
}

interface Book {
  id: string;
  basePath: string;
  title: string;
  description?: string;
  children: TreeNode[];
}

interface IndexEntry {
  id: string;
  title: string;
  category: string;
  path: string;
  breadcrumb: string;
  tags: string[];
  body: string;
}

/** TSX 소스에서 메타 주석의 tags 배열을 추출한다. */
function extractTags(src: string): string[] {
  const match = src.match(/tags:\s*\[([^\]]*)\]/);
  if (!match) return [];
  return [...match[1].matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);
}

/** TSX 소스에서 JSX 텍스트 노드(>...<)만 추출해 본문 텍스트를 만든다. */
function extractBody(src: string): string {
  const texts: string[] = [];
  for (const m of src.matchAll(/>([^<]+)</g)) {
    let t = m[1];
    // JSX 표현식 { ... } 제거
    t = t.replace(/\{[^{}]*\}/g, ' ');
    // HTML 엔티티 디코드 (자주 쓰이는 것만)
    t = t
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, ' ');
    t = t.replace(/\s+/g, ' ').trim();
    if (t) texts.push(t);
  }
  const body = texts.join(' ').replace(/\s+/g, ' ').trim();
  return body.length > MAX_BODY_LENGTH ? body.slice(0, MAX_BODY_LENGTH) : body;
}

/** 콘텐츠 TSX 파일에서 태그·본문을 읽는다. 파일이 없으면 빈 값. */
function readContent(contentRelPath: string): { tags: string[]; body: string } {
  const filePath = path.join(CONTENT_DIR, `${contentRelPath}.tsx`);
  if (!fs.existsSync(filePath)) return { tags: [], body: '' };
  const src = fs.readFileSync(filePath, 'utf-8');
  return { tags: extractTags(src), body: extractBody(src) };
}

/** 책 트리를 재귀 순회하며 leaf 노드를 인덱스 항목으로 수집한다. */
function collectLeaves(
  nodes: TreeNode[],
  book: Book,
  slugPath: string[],
  titlePath: string[],
): IndexEntry[] {
  const entries: IndexEntry[] = [];

  for (const node of nodes) {
    const currentSlugs = [...slugPath, node.slug];
    const currentTitles = [...titlePath, node.title];

    if (!node.children || node.children.length === 0) {
      const contentRelPath = `${book.basePath}/${currentSlugs.join('/')}`;
      const { tags, body } = readContent(contentRelPath);
      entries.push({
        id: node.id,
        title: node.title,
        category: book.title,
        path: `/${contentRelPath}`,
        breadcrumb: currentTitles.join(' > '),
        tags,
        body,
      });
    } else {
      entries.push(
        ...collectLeaves(node.children, book, currentSlugs, currentTitles),
      );
    }
  }

  return entries;
}

function main(): void {
  const bookFiles = fs
    .readdirSync(BOOK_DATA_DIR)
    .filter((f) => f.endsWith('.json'));

  const entries: IndexEntry[] = [];
  for (const file of bookFiles) {
    const raw = fs.readFileSync(path.join(BOOK_DATA_DIR, file), 'utf-8');
    const book = JSON.parse(raw) as Book;
    entries.push(...collectLeaves(book.children, book, [], [book.title]));
  }

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(entries), 'utf-8');

  const withBody = entries.filter((e) => e.body.length > 0).length;
  const sizeKb = Math.round(Buffer.byteLength(JSON.stringify(entries)) / 1024);
  console.log(
    `[search-index] ${entries.length}개 항목 생성 (본문 포함 ${withBody}개, ${sizeKb}KB) → public/search-index.json`,
  );
}

main();

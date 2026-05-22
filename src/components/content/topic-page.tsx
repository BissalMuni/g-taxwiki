import { TopicContent } from "@/components/content/topic-content";
import { SectionsProvider } from "@/lib/context/sections-context";
import { findNodePath, getFirstLeafPath, isLeafNode, type TreeNode, type Book } from "@/book";
import Link from "next/link";

/** 소단원(leaf) 콘텐츠 페이지 또는 중간 노드 목록 */
export function TopicPage({
  node,
  slugs,
  basePath,
  book,
}: {
  node: TreeNode;
  slugs: string[];
  basePath: string;
  book: Book;
}) {
  const contentPath = `/${basePath}/${slugs.join("/")}`;

  // 목차 경로(breadcrumb) — 책 제목 + 현재 노드까지의 조상 노드들
  const nodePath = findNodePath(book.children, node.id) ?? [];
  const bookFirstLeaf = getFirstLeafPath(book.children);
  const breadcrumb = [
    {
      title: book.title,
      href:
        bookFirstLeaf.length > 0
          ? `/${basePath}/${bookFirstLeaf.join("/")}`
          : `/${basePath}`,
    },
    ...nodePath.map((n, i) => ({
      title: n.title,
      href: `/${basePath}/${nodePath
        .slice(0, i + 1)
        .map((p) => p.slug)
        .join("/")}`,
    })),
  ];

  // leaf 노드 → 콘텐츠 표시
  if (isLeafNode(node)) {
    return (
      <SectionsProvider initialContentPath={contentPath}>
        <div className="max-w-4xl mx-auto px-6 py-12 lg:pl-8">
          <TopicContent
            node={node}
            contentPath={contentPath}
            book={book}
            breadcrumb={breadcrumb}
          />
        </div>
      </SectionsProvider>
    );
  }

  // 중간 노드 → 하위 목록 표시
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:pl-8">
      <h1 className="text-2xl font-bold mb-6">{node.title}</h1>
      {node.children && (
        <div className="space-y-2">
          {node.children.map((child) => {
            const childPath = `/${basePath}/${[...slugs, child.slug].join("/")}`;
            return (
              <Link
                key={child.id}
                href={childPath}
                className="block rounded-lg border border-gray-200 p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors"
              >
                <span className="font-medium">{child.title}</span>
                {child.children && (
                  <span className="ml-2 text-xs text-gray-500">
                    ({child.children.length}개 하위 항목)
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

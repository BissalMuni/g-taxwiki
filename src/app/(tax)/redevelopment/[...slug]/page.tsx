import { notFound } from 'next/navigation';
import { redevelopment } from '@/book/redevelopment';
import { findNodeBySlugs } from '@/book';
import { TopicPage } from '@/components/content/topic-page';

export default async function RedevelopmentCatchAll({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const node = findNodeBySlugs(redevelopment.children, slug);
  if (!node) notFound();

  return <TopicPage node={node} slugs={slug} basePath="redevelopment" book={redevelopment} />;
}

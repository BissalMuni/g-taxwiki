import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { runSearch, type IndexEntry } from '@/lib/search/scoring';

/** 서버 측 인덱스 캐시 (public/search-index.json 을 fs 로 읽음) */
let cachedIndex: IndexEntry[] | null = null;

function loadIndex(): IndexEntry[] {
  if (!cachedIndex) {
    const filePath = path.join(process.cwd(), 'public', 'search-index.json');
    try {
      cachedIndex = JSON.parse(
        fs.readFileSync(filePath, 'utf-8'),
      ) as IndexEntry[];
    } catch {
      cachedIndex = [];
    }
  }
  return cachedIndex;
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') || '';
  const limitParam = request.nextUrl.searchParams.get('limit');
  const limit = limitParam ? Math.min(parseInt(limitParam, 10) || 20, 50) : 20;

  if (!query.trim()) {
    return NextResponse.json({ results: [] });
  }

  const results = runSearch(loadIndex(), query, limit);
  return NextResponse.json({ results });
}

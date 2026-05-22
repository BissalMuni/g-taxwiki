import { NextRequest, NextResponse } from 'next/server';
import { recordView } from '@/lib/supabase/views';

/** 콘텐츠 열람 기록 — 비로그인 포함 누구나 호출 (인증 불필요, proxy matcher 제외) */
export async function POST(request: NextRequest) {
  try {
    const { path, bookId, title } = await request.json();
    if (!path || !bookId || !title) {
      return NextResponse.json({ error: '필수 값 누락' }, { status: 400 });
    }
    await recordView(path, bookId, title);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: '기록 실패' }, { status: 500 });
  }
}

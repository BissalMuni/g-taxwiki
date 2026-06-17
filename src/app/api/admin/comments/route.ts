import { NextRequest, NextResponse } from 'next/server';
import { getAllComments } from '@/lib/supabase/comments';
import { requirePermission } from '@/lib/auth/require-role';
import type { FeedbackType, FeedbackLevel } from '@/lib/types';

const VALID_TYPES: FeedbackType[] = ['content', 'structure'];
const VALID_LEVELS: FeedbackLevel[] = ['major', 'medium', 'minor', 'section'];

/** GET: 전체 의견 통합 조회 (필터·페이지네이션) — admin 이상 */
export async function GET(request: NextRequest) {
  const denied = requirePermission(request, 'view_audit');
  if (denied) return denied;

  const { searchParams } = request.nextUrl;
  const limit = Number(searchParams.get('limit') ?? '50');
  const offset = Number(searchParams.get('offset') ?? '0');

  const typeParam = searchParams.get('feedback_type');
  const levelParam = searchParams.get('level');

  try {
    const data = await getAllComments({
      contentPath: searchParams.get('content_path') ?? undefined,
      author: searchParams.get('author') ?? undefined,
      feedbackType: VALID_TYPES.includes(typeParam as FeedbackType)
        ? (typeParam as FeedbackType)
        : undefined,
      level: VALID_LEVELS.includes(levelParam as FeedbackLevel)
        ? (levelParam as FeedbackLevel)
        : undefined,
      bodyQuery: searchParams.get('q') ?? undefined,
      flaggedOnly: searchParams.get('flagged') === 'true',
      limit: Number.isFinite(limit) ? limit : 50,
      offset: Number.isFinite(offset) ? offset : 0,
    });
    return NextResponse.json(data);
  } catch (err) {
    console.error('[api/admin/comments GET] failed:', err);
    return NextResponse.json({ error: '의견 조회 실패' }, { status: 500 });
  }
}

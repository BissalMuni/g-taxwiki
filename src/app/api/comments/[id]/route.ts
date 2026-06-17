import { NextRequest, NextResponse } from 'next/server';
import { deleteComment, updateComment } from '@/lib/supabase/comments';
import { requirePermission } from '@/lib/auth/require-role';
import { sanitizeCommentBody } from '@/lib/security/comment-sanitizer';
import type { FeedbackType, FeedbackLevel } from '@/lib/types';

const VALID_TYPES: FeedbackType[] = ['content', 'structure'];
const VALID_LEVELS: FeedbackLevel[] = ['major', 'medium', 'minor', 'section'];

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  // 댓글 삭제는 admin 이상만 (rollback 권한과 동급)
  const denied = requirePermission(request, 'rollback');
  if (denied) return denied;

  const { id } = await params;

  try {
    const result = await deleteComment(id);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: '삭제 실패' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  // 댓글 수정도 admin 이상만 (삭제와 동급)
  const denied = requirePermission(request, 'rollback');
  if (denied) return denied;

  const { id } = await params;

  let body: {
    body?: string;
    section_title?: string | null;
    feedback_type?: string;
    level?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: '잘못된 요청' }, { status: 400 });
  }

  const patch: {
    body?: string;
    sectionTitle?: string | null;
    feedbackType?: FeedbackType;
    level?: FeedbackLevel;
  } = {};

  // 본문 — sanitize 후 반영 (빈 본문은 거부)
  if (body.body !== undefined) {
    const { body: sanitized } = sanitizeCommentBody(body.body);
    if (!sanitized) {
      return NextResponse.json({ error: '내용이 비어있습니다' }, { status: 400 });
    }
    patch.body = sanitized;
  }

  if (body.section_title !== undefined) {
    const trimmed = body.section_title?.trim();
    patch.sectionTitle = trimmed ? trimmed : null;
  }

  if (body.feedback_type !== undefined) {
    if (!VALID_TYPES.includes(body.feedback_type as FeedbackType)) {
      return NextResponse.json({ error: '잘못된 편집 종류' }, { status: 400 });
    }
    patch.feedbackType = body.feedback_type as FeedbackType;
  }

  if (body.level !== undefined) {
    if (!VALID_LEVELS.includes(body.level as FeedbackLevel)) {
      return NextResponse.json({ error: '잘못된 목차 레벨' }, { status: 400 });
    }
    patch.level = body.level as FeedbackLevel;
  }

  try {
    const result = await updateComment(id, patch);
    if (!result.success) {
      const status = result.error === '의견을 찾을 수 없습니다' ? 404 : 400;
      return NextResponse.json({ error: result.error }, { status });
    }
    return NextResponse.json({ data: result.data });
  } catch {
    return NextResponse.json({ error: '수정 실패' }, { status: 500 });
  }
}

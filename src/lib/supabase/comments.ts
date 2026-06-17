import { getSupabase } from './server';
import type { Comment, FeedbackType, FeedbackLevel } from '@/lib/types';

/** 해당 경로의 의견 목록 조회 */
export async function getComments(contentPath: string): Promise<Comment[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('content_path', contentPath)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return (data || []) as Comment[];
}

export interface CreateCommentInput {
  contentPath: string;
  author: string;
  body: string;
  sectionTitle?: string;
  feedbackType?: FeedbackType;
  level?: FeedbackLevel;
  /** sanitizer 가 의심 패턴 감지 시 true (자동화 제외) */
  flagged?: boolean;
  /** 플래그 사유 (예: "이전 지시 무시 명령(en) (ignore-previous-en)") */
  flagReason?: string;
}

/** 의견 등록 */
export async function createComment(input: CreateCommentInput): Promise<Comment> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('comments')
    .insert({
      content_path: input.contentPath,
      author: input.author,
      body: input.body,
      section_title: input.sectionTitle ?? null,
      feedback_type: input.feedbackType ?? 'content',
      level: input.level ?? 'section',
      flagged: input.flagged ?? false,
      flag_reason: input.flagReason ?? null,
    })
    .select()
    .single();

  if (error) throw error;
  return data as Comment;
}

/** 전체 의견 조회 필터 (관리자 통합 조회) */
export interface AdminCommentFilters {
  contentPath?: string;
  author?: string;
  feedbackType?: FeedbackType;
  level?: FeedbackLevel;
  /** 본문 포함 검색어 */
  bodyQuery?: string;
  /** 플래그된 댓글만 (sanitizer 의심 패턴) */
  flaggedOnly?: boolean;
  limit?: number;
  offset?: number;
}

export interface AdminCommentList {
  rows: Comment[];
  total: number;
}

/** 모든 의견 통합 조회 (필터·페이지네이션) — admin 관리 화면용 */
export async function getAllComments(
  filters: AdminCommentFilters = {},
): Promise<AdminCommentList> {
  const supabase = getSupabase();
  const {
    contentPath,
    author,
    feedbackType,
    level,
    bodyQuery,
    flaggedOnly,
    limit = 50,
    offset = 0,
  } = filters;

  let query = supabase
    .from('comments')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false });

  if (contentPath) query = query.ilike('content_path', `%${contentPath}%`);
  if (author) query = query.ilike('author', `%${author}%`);
  if (feedbackType) query = query.eq('feedback_type', feedbackType);
  if (level) query = query.eq('level', level);
  if (bodyQuery) query = query.ilike('body', `%${bodyQuery}%`);
  if (flaggedOnly) query = query.eq('flagged', true);

  query = query.range(offset, offset + limit - 1);

  const { data, error, count } = await query;
  if (error) throw error;

  const rows = (data || []) as Comment[];
  return { rows, total: count ?? rows.length };
}

/** 의견 수정 가능 필드 */
export interface UpdateCommentInput {
  body?: string;
  sectionTitle?: string | null;
  feedbackType?: FeedbackType;
  level?: FeedbackLevel;
}

/** 의견 수정 (admin 이상) */
export async function updateComment(
  id: string,
  input: UpdateCommentInput,
): Promise<{ success: boolean; data?: Comment; error?: string }> {
  const supabase = getSupabase();

  // 수정할 필드만 동적으로 구성
  const patch: Record<string, unknown> = {};
  if (input.body !== undefined) patch.body = input.body;
  if (input.sectionTitle !== undefined) patch.section_title = input.sectionTitle;
  if (input.feedbackType !== undefined) patch.feedback_type = input.feedbackType;
  if (input.level !== undefined) patch.level = input.level;

  if (Object.keys(patch).length === 0) {
    return { success: false, error: '수정할 내용이 없습니다' };
  }

  const { data, error } = await supabase
    .from('comments')
    .update(patch)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return { success: false, error: '의견을 찾을 수 없습니다' };
    }
    throw error;
  }
  return { success: true, data: data as Comment };
}

/** 의견 삭제 (admin 이상 권한으로 무조건 삭제) */
export async function deleteComment(
  id: string,
): Promise<{ success: boolean; error?: string }> {
  const supabase = getSupabase();

  const { data: existing, error: fetchError } = await supabase
    .from('comments')
    .select('id')
    .eq('id', id)
    .single();

  if (fetchError || !existing) return { success: false, error: '의견을 찾을 수 없습니다' };

  const { error } = await supabase.from('comments').delete().eq('id', id);
  if (error) throw error;
  return { success: true };
}

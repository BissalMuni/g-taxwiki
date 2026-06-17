"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Comment, FeedbackType, FeedbackLevel } from "@/lib/types";

interface Filters {
  contentPath: string;
  author: string;
  feedbackType: "" | FeedbackType;
  level: "" | FeedbackLevel;
  q: string;
  flaggedOnly: boolean;
}

const EMPTY_FILTERS: Filters = {
  contentPath: "",
  author: "",
  feedbackType: "",
  level: "",
  q: "",
  flaggedOnly: false,
};

const PAGE_SIZE = 50;

const TYPE_OPTIONS: { label: string; value: "" | FeedbackType }[] = [
  { label: "전체", value: "" },
  { label: "내용", value: "content" },
  { label: "구조", value: "structure" },
];

const LEVEL_OPTIONS: { label: string; value: "" | FeedbackLevel }[] = [
  { label: "전체", value: "" },
  { label: "대목차", value: "major" },
  { label: "중목차", value: "medium" },
  { label: "소목차", value: "minor" },
  { label: "섹션", value: "section" },
];

const TYPE_LABEL: Record<FeedbackType, string> = {
  content: "내용",
  structure: "구조",
};

const LEVEL_LABEL: Record<FeedbackLevel, string> = {
  major: "대목차",
  medium: "중목차",
  minor: "소목차",
  section: "섹션",
};

export function AdminCommentsClient() {
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  // 적용된 필터 (검색 버튼 후 반영)
  const [applied, setApplied] = useState<Filters>(EMPTY_FILTERS);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState<Comment[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<Comment | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (applied.contentPath) params.set("content_path", applied.contentPath);
      if (applied.author) params.set("author", applied.author);
      if (applied.feedbackType) params.set("feedback_type", applied.feedbackType);
      if (applied.level) params.set("level", applied.level);
      if (applied.q) params.set("q", applied.q);
      if (applied.flaggedOnly) params.set("flagged", "true");
      params.set("limit", String(PAGE_SIZE));
      params.set("offset", String(page * PAGE_SIZE));

      const res = await fetch(`/api/admin/comments?${params.toString()}`);
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `조회 실패 (${res.status})`);
      }
      const json = (await res.json()) as { rows: Comment[]; total: number };
      setRows(json.rows);
      setTotal(json.total);
    } catch (e) {
      setError(e instanceof Error ? e.message : "조회 실패");
      setRows([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [applied, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleApply = () => {
    setPage(0);
    setApplied(filters);
  };

  const handleReset = () => {
    setFilters(EMPTY_FILTERS);
    setApplied(EMPTY_FILTERS);
    setPage(0);
  };

  const handleDelete = async (c: Comment) => {
    if (!window.confirm("이 댓글을 삭제하시겠습니까?")) return;
    try {
      const res = await fetch(`/api/comments/${c.id}`, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setToast({ type: "error", text: body?.error ?? "삭제 실패" });
        return;
      }
      setToast({ type: "success", text: "삭제되었습니다." });
      fetchData();
    } catch {
      setToast({ type: "error", text: "삭제 실패" });
    }
  };

  const handleSaved = (updated: Comment) => {
    setRows((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
    setEditing(null);
    setToast({ type: "success", text: "수정되었습니다." });
  };

  const lastPage = Math.max(0, Math.ceil(total / PAGE_SIZE) - 1);
  const fromCount = total === 0 ? 0 : page * PAGE_SIZE + 1;
  const toCount = Math.min(total, (page + 1) * PAGE_SIZE);

  const filterChips = useMemo(() => {
    const items: { key: string; label: string }[] = [];
    if (applied.contentPath) items.push({ key: "contentPath", label: `경로: ${applied.contentPath}` });
    if (applied.author) items.push({ key: "author", label: `작성자: ${applied.author}` });
    if (applied.feedbackType)
      items.push({ key: "feedbackType", label: `종류: ${TYPE_LABEL[applied.feedbackType]}` });
    if (applied.level) items.push({ key: "level", label: `레벨: ${LEVEL_LABEL[applied.level]}` });
    if (applied.q) items.push({ key: "q", label: `내용: ${applied.q}` });
    if (applied.flaggedOnly) items.push({ key: "flaggedOnly", label: "플래그됨만" });
    return items;
  }, [applied]);

  return (
    <div className="space-y-4">
      {/* 필터 바 */}
      <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <label className="flex flex-col gap-1 text-xs text-gray-600 dark:text-gray-300">
            경로 (content_path)
            <input
              type="text"
              value={filters.contentPath}
              onChange={(e) => setFilters((f) => ({ ...f, contentPath: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && handleApply()}
              placeholder="/acquisition/..."
              className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-900"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-gray-600 dark:text-gray-300">
            작성자
            <input
              type="text"
              value={filters.author}
              onChange={(e) => setFilters((f) => ({ ...f, author: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && handleApply()}
              placeholder="예: 편집자"
              className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-900"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-gray-600 dark:text-gray-300">
            내용 검색
            <input
              type="text"
              value={filters.q}
              onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && handleApply()}
              placeholder="본문 포함 단어"
              className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-900"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-gray-600 dark:text-gray-300">
            편집 종류
            <select
              value={filters.feedbackType}
              onChange={(e) =>
                setFilters((f) => ({ ...f, feedbackType: e.target.value as "" | FeedbackType }))
              }
              className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-900"
            >
              {TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-gray-600 dark:text-gray-300">
            목차 레벨
            <select
              value={filters.level}
              onChange={(e) =>
                setFilters((f) => ({ ...f, level: e.target.value as "" | FeedbackLevel }))
              }
              className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-900"
            >
              {LEVEL_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 self-end pb-1 text-xs text-gray-600 dark:text-gray-300">
            <input
              type="checkbox"
              checked={filters.flaggedOnly}
              onChange={(e) => setFilters((f) => ({ ...f, flaggedOnly: e.target.checked }))}
              className="h-4 w-4"
            />
            플래그된 댓글만 보기
          </label>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={handleApply}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700"
          >
            필터 적용
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            초기화
          </button>
          {filterChips.length > 0 && (
            <div className="ml-2 flex flex-wrap gap-1">
              {filterChips.map((c) => (
                <span
                  key={c.key}
                  className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {c.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 결과 메타 */}
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>{loading ? "조회 중..." : `${total}건 중 ${fromCount}–${toCount}`}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0 || loading}
            className="rounded border border-gray-300 px-2 py-1 text-xs disabled:opacity-40 dark:border-gray-600"
          >
            이전
          </button>
          <span className="text-xs">
            {page + 1} / {lastPage + 1}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
            disabled={page >= lastPage || loading}
            className="rounded border border-gray-300 px-2 py-1 text-xs disabled:opacity-40 dark:border-gray-600"
          >
            다음
          </button>
        </div>
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase text-gray-500 dark:bg-gray-700/50 dark:text-gray-400">
            <tr>
              <th className="px-3 py-2">내용</th>
              <th className="px-3 py-2">경로 / 섹션</th>
              <th className="px-3 py-2">종류·레벨</th>
              <th className="px-3 py-2">작성자</th>
              <th className="px-3 py-2">작성일</th>
              <th className="px-3 py-2 text-right">작업</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {error && (
              <tr>
                <td colSpan={6} className="px-3 py-6 text-center text-red-500">
                  {error}
                </td>
              </tr>
            )}
            {!error && !loading && rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-3 py-10 text-center text-gray-400">
                  조회된 댓글이 없습니다
                </td>
              </tr>
            )}
            {rows.map((row) => (
              <tr key={row.id} className="align-top hover:bg-gray-50 dark:hover:bg-gray-700/40">
                <td className="max-w-md px-3 py-2 text-gray-900 dark:text-gray-100">
                  <div className="whitespace-pre-wrap break-words">{row.body}</div>
                  {row.flagged && (
                    <span className="mt-1 inline-block rounded bg-red-50 px-1.5 py-0.5 text-xs text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      ⚠ 플래그됨{row.flag_reason ? `: ${row.flag_reason}` : ""}
                    </span>
                  )}
                </td>
                <td className="px-3 py-2">
                  <a
                    href={row.content_path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {row.content_path}
                  </a>
                  {row.section_title && (
                    <div className="text-xs text-gray-500">§ {row.section_title}</div>
                  )}
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-600 dark:text-gray-300">
                  <div>{TYPE_LABEL[row.feedback_type]}</div>
                  <div className="text-gray-400">{LEVEL_LABEL[row.level]}</div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-gray-600 dark:text-gray-300">
                  {row.author}
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">
                  {new Date(row.created_at).toLocaleString("ko-KR")}
                </td>
                <td className="px-3 py-2">
                  <div className="flex justify-end gap-1">
                    <button
                      type="button"
                      onClick={() => setEditing(row)}
                      className="rounded border border-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      수정
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(row)}
                      className="rounded border border-red-200 px-2 py-1 text-xs text-red-600 hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-900/30"
                    >
                      삭제
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 수정 모달 */}
      {editing && (
        <EditCommentModal
          comment={editing}
          onClose={() => setEditing(null)}
          onSaved={handleSaved}
          onError={(text) => setToast({ type: "error", text })}
        />
      )}

      {/* 토스트 */}
      {toast && (
        <div
          className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-lg px-4 py-2 text-sm text-white shadow-lg ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.text}
        </div>
      )}
    </div>
  );
}

interface EditModalProps {
  comment: Comment;
  onClose: () => void;
  onSaved: (updated: Comment) => void;
  onError: (text: string) => void;
}

function EditCommentModal({ comment, onClose, onSaved, onError }: EditModalProps) {
  const [body, setBody] = useState(comment.body);
  const [sectionTitle, setSectionTitle] = useState(comment.section_title ?? "");
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(comment.feedback_type);
  const [level, setLevel] = useState<FeedbackLevel>(comment.level);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!body.trim()) {
      onError("내용을 입력하세요.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`/api/comments/${comment.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body,
          section_title: sectionTitle,
          feedback_type: feedbackType,
          level,
        }),
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        onError(b?.error ?? "수정 실패");
        return;
      }
      const json = (await res.json()) as { data: Comment };
      onSaved(json.data);
    } catch {
      onError("수정 실패");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
          <div className="font-medium">댓글 수정</div>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-auto p-4">
          <div className="truncate text-xs text-gray-500">{comment.content_path}</div>

          <label className="flex flex-col gap-1 text-xs text-gray-600 dark:text-gray-300">
            내용
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={6}
              className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-900"
            />
          </label>

          <label className="flex flex-col gap-1 text-xs text-gray-600 dark:text-gray-300">
            섹션 제목
            <input
              type="text"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              placeholder="(선택)"
              className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-900"
            />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="flex flex-col gap-1 text-xs text-gray-600 dark:text-gray-300">
              편집 종류
              <select
                value={feedbackType}
                onChange={(e) => setFeedbackType(e.target.value as FeedbackType)}
                className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-900"
              >
                <option value="content">내용</option>
                <option value="structure">구조</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs text-gray-600 dark:text-gray-300">
              목차 레벨
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as FeedbackLevel)}
                className="rounded border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-900"
              >
                <option value="major">대목차</option>
                <option value="medium">중목차</option>
                <option value="minor">소목차</option>
                <option value="section">섹션</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-gray-200 px-4 py-3 dark:border-gray-700">
          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? "저장 중..." : "저장"}
          </button>
        </div>
      </div>
    </div>
  );
}

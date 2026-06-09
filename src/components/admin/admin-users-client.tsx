"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ROLES, ROLE_LABELS, type Role } from "@/lib/auth/constants";

interface UserProfile {
  id: string;
  username: string | null;
  display_name: string | null;
  role: Role;
  created_at: string;
}

interface Props {
  /** 현재 로그인한 관리자 본인 ID — 자기 역할 변경 방지 */
  currentUserId: string;
  /** 현재 로그인한 관리자 역할 — 자기보다 높은 역할은 부여 불가 */
  currentUserRole: Role;
}

/** 역할 뱃지 색상 */
const ROLE_BADGE: Record<Role, string> = {
  reader:
    "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
  editor:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  subadmin:
    "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  admin:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  superadmin:
    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
};

function roleRank(role: Role): number {
  return ROLES.indexOf(role);
}

export function AdminUsersClient({ currentUserId, currentUserRole }: Props) {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  /** 사용자별 진행/결과 상태 */
  const [pending, setPending] = useState<Record<string, boolean>>({});
  const [feedback, setFeedback] = useState<
    Record<string, { type: "ok" | "err"; msg: string }>
  >({});

  const myRank = roleRank(currentUserRole);

  /** 관리자가 부여할 수 있는 역할 목록 (자기 역할 이하만) */
  const assignableRoles = useMemo(
    () => ROLES.filter((r) => roleRank(r) <= myRank),
    [myRank]
  );

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/users");
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `조회 실패 (${res.status})`);
      }
      const json = (await res.json()) as UserProfile[];
      setUsers(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : "조회 실패");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleChangeRole = useCallback(
    async (user: UserProfile, newRole: Role) => {
      if (newRole === user.role) return;
      setPending((p) => ({ ...p, [user.id]: true }));
      setFeedback((f) => {
        const next = { ...f };
        delete next[user.id];
        return next;
      });
      try {
        const res = await fetch(`/api/admin/users/${user.id}/role`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role: newRole }),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.error ?? `변경 실패 (${res.status})`);
        }
        // 로컬 상태 즉시 갱신
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, role: newRole } : u))
        );
        setFeedback((f) => ({
          ...f,
          [user.id]: {
            type: "ok",
            msg: `${ROLE_LABELS[newRole]}(으)로 변경됨`,
          },
        }));
      } catch (e) {
        setFeedback((f) => ({
          ...f,
          [user.id]: {
            type: "err",
            msg: e instanceof Error ? e.message : "변경 실패",
          },
        }));
      } finally {
        setPending((p) => {
          const next = { ...p };
          delete next[user.id];
          return next;
        });
      }
    },
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        (u.username ?? "").toLowerCase().includes(q) ||
        (u.display_name ?? "").toLowerCase().includes(q)
    );
  }, [users, query]);

  return (
    <div className="space-y-4">
      {/* 검색 + 새로고침 */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="사용자명·표시이름 검색"
          className="w-full max-w-xs rounded border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-900"
        />
        <button
          type="button"
          onClick={fetchUsers}
          disabled={loading}
          className="rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          새로고침
        </button>
        <span className="ml-auto text-xs text-gray-500 dark:text-gray-400">
          {loading ? "조회 중..." : `총 ${users.length}명`}
        </span>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300">
          {error}
        </div>
      )}

      {/* 사용자 테이블 */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
              <th className="px-4 py-3 font-medium">사용자</th>
              <th className="px-4 py-3 font-medium">현재 역할</th>
              <th className="px-4 py-3 font-medium">가입일</th>
              <th className="px-4 py-3 font-medium">권한 변경</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {!loading && filtered.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-10 text-center text-gray-400"
                >
                  사용자가 없습니다
                </td>
              </tr>
            )}
            {filtered.map((u) => {
              const isSelf = u.id === currentUserId;
              // 본인이거나, 자기보다 높은 역할의 사용자는 변경 불가
              const outranks = roleRank(u.role) > myRank;
              const locked = isSelf || outranks;
              const fb = feedback[u.id];
              return (
                <tr
                  key={u.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/40"
                >
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {u.display_name || u.username || "(이름 없음)"}
                      {isSelf && (
                        <span className="ml-1.5 text-xs text-gray-400">
                          (나)
                        </span>
                      )}
                    </div>
                    {u.username && u.display_name && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        @{u.username}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${ROLE_BADGE[u.role]}`}
                    >
                      {ROLE_LABELS[u.role]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                    {new Date(u.created_at).toLocaleDateString("ko-KR")}
                  </td>
                  <td className="px-4 py-3">
                    {locked ? (
                      <span className="text-xs text-gray-400">
                        {isSelf
                          ? "본인은 변경 불가"
                          : "상위 권한자는 변경 불가"}
                      </span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <select
                          value={u.role}
                          disabled={pending[u.id]}
                          onChange={(e) =>
                            handleChangeRole(u, e.target.value as Role)
                          }
                          className="rounded border border-gray-300 bg-white px-2 py-1 text-sm disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900"
                        >
                          {assignableRoles.map((r) => (
                            <option key={r} value={r}>
                              {ROLE_LABELS[r]}
                            </option>
                          ))}
                        </select>
                        {pending[u.id] && (
                          <span className="text-xs text-gray-400">
                            저장 중...
                          </span>
                        )}
                        {fb && (
                          <span
                            className={`text-xs ${fb.type === "ok" ? "text-green-600 dark:text-green-400" : "text-red-500"}`}
                          >
                            {fb.msg}
                          </span>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400">
        역할 변경은 즉시 저장되며, 해당 사용자는 다음 로그인(토큰 갱신) 시점부터
        새 권한이 적용됩니다.
      </p>
    </div>
  );
}

import { getSessionFromCookies } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/constants";
import { redirect } from "next/navigation";
import Link from "next/link";
import { AdminUsersClient } from "@/components/admin/admin-users-client";

/** 가입 승인 — 최고관리자(manage_books 권한) 전용 */
export default async function SignupApprovalPage() {
  const session = await getSessionFromCookies();
  if (!session) redirect("/login");

  // 최고관리자만 접근 가능
  if (!hasPermission(session.role, "manage_books")) {
    redirect("/admin");
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <div className="flex items-center gap-2">
          <Link
            href="/admin"
            className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            ← 대시보드
          </Link>
        </div>
        <h1 className="mt-2 text-2xl font-bold">가입 승인 · 권한 관리</h1>
        <p className="mt-1 text-sm text-gray-500">
          신규 가입자는 <b>승인 대기</b> 상태로 시작하며 읽기 권한이 없습니다.
          역할을 선택해 승인하면 해당 권한이 부여됩니다. 기존 사용자의 역할도
          여기서 조정할 수 있습니다.
        </p>
      </div>

      <AdminUsersClient
        currentUserId={session.userId}
        currentUserRole={session.role}
      />
    </div>
  );
}

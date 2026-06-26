import { getSessionFromCookies } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/constants";
import { redirect } from "next/navigation";
import { AdminUsersClient } from "@/components/admin/admin-users-client";

export default async function AdminUsersPage() {
  const session = await getSessionFromCookies();
  if (!session) redirect("/login");

  // admin 이상만 (view_audit 권한) 사용자 권한 관리 가능
  if (!hasPermission(session.role, "view_audit")) {
    redirect("/admin");
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">사용자 권한 관리</h1>
        <p className="mt-1 text-sm text-gray-500">
          신규 가입자는 &quot;승인 대기&quot; 상태로 시작하며 읽기 권한이
          없습니다. 여기서 승인(역할 부여)하거나 역할을 조정할 수 있습니다.
        </p>
      </div>

      <AdminUsersClient
        currentUserId={session.userId}
        currentUserRole={session.role}
      />
    </div>
  );
}

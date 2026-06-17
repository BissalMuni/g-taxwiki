import { getSessionFromCookies } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/constants";
import { redirect } from "next/navigation";
import { AdminCommentsClient } from "@/components/admin/admin-comments-client";

export default async function AdminCommentsPage() {
  const session = await getSessionFromCookies();
  if (!session) redirect("/login");

  // admin 이상만 댓글 통합 관리 가능 (조회 + 타인 댓글 수정·삭제 권한)
  if (!hasPermission(session.role, "view_audit")) {
    redirect("/admin");
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">댓글 관리</h1>
        <p className="mt-1 text-sm text-gray-500">
          전체 댓글(의견) 조회·필터·수정·삭제. 본인이 작성하지 않은 댓글도 수정·삭제할 수 있습니다.
        </p>
      </div>

      <AdminCommentsClient />
    </div>
  );
}

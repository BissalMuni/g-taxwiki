import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { requirePermission, getRoleFromRequest } from "@/lib/auth/require-role";
import { ROLES, type Role } from "@/lib/auth/constants";

function roleRank(role: Role): number {
  return ROLES.indexOf(role);
}

/** 사용자 역할 변경 — admin 이상만 가능 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // view_audit 권한이 있는 admin 이상만 역할 변경 가능
  const denied = requirePermission(request, "view_audit");
  if (denied) return denied;

  const actorRole = getRoleFromRequest(request);
  const actorId = request.headers.get("x-user-id");
  if (!actorRole || !actorId) {
    return NextResponse.json({ error: "인증 필요" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const newRole = body.role as Role;

  if (!newRole || !ROLES.includes(newRole)) {
    return NextResponse.json(
      { error: "유효하지 않은 역할" },
      { status: 400 }
    );
  }

  // 자기 역할은 변경 불가 (실수로 권한 박탈/상승 방지)
  if (id === actorId) {
    return NextResponse.json(
      { error: "본인 역할은 변경할 수 없습니다" },
      { status: 403 }
    );
  }

  // 자기보다 높은 역할은 부여 불가 (권한 상승 방지)
  if (roleRank(newRole) > roleRank(actorRole)) {
    return NextResponse.json(
      { error: "본인보다 높은 역할은 부여할 수 없습니다" },
      { status: 403 }
    );
  }

  // service role 키로 직접 프로필 업데이트
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // 대상의 현재 역할 확인 — 자기보다 높은 역할의 사용자는 변경 불가
  const { data: target, error: fetchError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", id)
    .single();

  if (fetchError || !target) {
    return NextResponse.json(
      { error: "사용자를 찾을 수 없습니다" },
      { status: 404 }
    );
  }

  if (roleRank(target.role as Role) > roleRank(actorRole)) {
    return NextResponse.json(
      { error: "상위 권한자의 역할은 변경할 수 없습니다" },
      { status: 403 }
    );
  }

  const { error } = await supabase
    .from("profiles")
    .update({ role: newRole })
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, role: newRole });
}

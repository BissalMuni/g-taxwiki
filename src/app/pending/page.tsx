import Link from "next/link";

/**
 * 승인 대기 안내 페이지.
 * 가입은 되었으나 아직 관리자 승인을 받지 못해 읽기 권한이 없는 사용자가
 * 콘텐츠에 접근하면 proxy가 이 페이지로 보낸다.
 */
export default function PendingPage() {
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-2xl dark:bg-amber-900/30">
          ⏳
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">승인 대기 중입니다</h1>
          <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            가입이 정상적으로 완료되었습니다.
            <br />
            관리자가 읽기 권한을 승인하면 콘텐츠를 이용할 수 있습니다.
            <br />
            승인 후 다시 로그인하면 적용됩니다.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            홈으로
          </Link>
          <Link
            href="/login"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            로그인 페이지
          </Link>
        </div>
      </div>
    </div>
  );
}

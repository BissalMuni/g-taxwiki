"use client";

import { useEffect } from "react";

/** 콘텐츠 열람 기록 — 마운트 시 1회 POST. 세션당 문서별 1회만 (새로고침 중복 방지). */
export function RecordView({
  path,
  bookId,
  title,
}: {
  path: string;
  bookId: string;
  title: string;
}) {
  useEffect(() => {
    const key = `viewed:${path}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    fetch("/api/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path, bookId, title }),
    }).catch(() => {
      // 기록 실패는 무시 — 통계용 비핵심 요청
    });
  }, [path, bookId, title]);

  return null;
}

"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { searchContent, type SearchResult } from "@/lib/search";

/** 홈 화면 검색창 — 책 선택 박스 아래에 표시되는 인라인 검색 */
export function HomeSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  /** 비동기 검색 응답 순서 보장용 요청 ID */
  const reqId = useRef(0);

  const handleSearch = useCallback(async (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const id = ++reqId.current;
    const found = await searchContent(value);
    // 최신 요청만 반영
    if (id === reqId.current) setResults(found);
  }, []);

  return (
    <div className="mb-16">
      {/* 검색 입력 */}
      <div className="flex items-center rounded-lg border border-gray-300 bg-white px-4 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-600 dark:bg-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => void handleSearch(e.target.value)}
          placeholder="단원명이나 키워드로 검색하세요"
          className="flex-1 border-0 bg-transparent px-3 py-3 text-base outline-none placeholder:text-gray-400 dark:text-gray-100"
        />
        {query && (
          <button
            type="button"
            onClick={() => void handleSearch("")}
            className="shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            aria-label="입력 지우기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>

      {/* 결과 목록 */}
      {query && (
        <div className="mt-3 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
          {results.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-gray-500">
              &quot;{query}&quot;에 대한 결과가 없습니다
            </p>
          ) : (
            <ul className="divide-y divide-gray-100 dark:divide-gray-800">
              {results.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item.title}
                      </span>
                      <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        {item.category}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                      {item.snippet}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

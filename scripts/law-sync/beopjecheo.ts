/**
 * 법제처 Open API 공통 유틸 (law-sync 스크립트 공유)
 * 접근법: 메모리 beopjecheo-open-api 참조. OC 는 .env.local BEOPJECHEO_OC.
 */
import fs from 'node:fs';
import path from 'node:path';
import dns from 'node:dns';

// GH Actions 러너에서 law.go.kr 의 IPv6/DNS 해석이 불안정 → IPv4 우선 (curl 은 정상)
dns.setDefaultResultOrder('ipv4first');

export const norm = (s: string) => s.replace(/\s+/g, '');

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** .env.local 로더 (tsx 는 자동 로드 안 함) */
export function loadEnv(): Record<string, string> {
  const p = path.join(process.cwd(), '.env.local');
  const env: Record<string, string> = {};
  if (!fs.existsSync(p)) return env;
  for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2];
  }
  return env;
}

export function getOC(): string {
  const env = loadEnv();
  const oc = env.BEOPJECHEO_OC || process.env.BEOPJECHEO_OC || '';
  if (!oc) throw new Error('BEOPJECHEO_OC 가 .env.local 에 없습니다');
  return oc;
}

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

/** UA 헤더 + 지연 재시도 포함 JSON GET (GH Actions DNS 불안정 대응) */
async function fetchJson(url: string, tries = 5): Promise<any> {
  let lastErr: unknown;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': UA, Accept: 'application/json,*/*', 'Accept-Language': 'ko' },
        signal: AbortSignal.timeout(30_000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (e) {
      lastErr = e;
      if (i < tries - 1) await sleep(2000); // DNS/연결 flaky → 지연 후 재시도
    }
  }
  throw lastErr instanceof Error ? lastErr : new Error(String(lastErr));
}

export interface LawRecord {
  법령ID: string;
  mst: string;
  공포번호: string;
  공포일자: string;
  시행일자: string;
  제개정구분: string;
  조회명: string;
}

/** 법령명으로 현행 법령 레코드 조회 (공백 무시 정확 일치 우선) */
export async function lookupLaw(oc: string, name: string): Promise<LawRecord | null> {
  const url = `https://www.law.go.kr/DRF/lawSearch.do?OC=${encodeURIComponent(
    oc,
  )}&target=law&type=JSON&display=100&query=${encodeURIComponent(name)}`;
  const j: any = await fetchJson(url);
  const rows: any[] = j?.LawSearch?.law ? [].concat(j.LawSearch.law) : [];
  const exact = rows.find((r) => norm(r.법령명한글) === norm(name));
  const pick = exact ?? rows[0];
  if (!pick) return null;
  return {
    법령ID: pick.법령ID,
    mst: pick.법령일련번호,
    공포번호: String(pick.공포번호 ?? ''),
    공포일자: String(pick.공포일자 ?? ''),
    시행일자: String(pick.시행일자 ?? ''),
    제개정구분: pick.제개정구분명 ?? '',
    조회명: pick.법령명한글,
  };
}

/** 객체 트리에서 모든 문자열을 순서대로 수집 */
function pullStrings(o: unknown): string[] {
  if (o == null) return [];
  if (typeof o === 'string') return [o];
  if (Array.isArray(o)) return o.flatMap(pullStrings);
  if (typeof o === 'object') return Object.values(o as Record<string, unknown>).flatMap(pullStrings);
  return [];
}

/** MST 로 제개정이유 원문 조회 (target=law 응답의 제개정이유 필드) */
export async function fetchAmendReason(oc: string, mst: string): Promise<string> {
  const url = `https://www.law.go.kr/DRF/lawService.do?OC=${encodeURIComponent(
    oc,
  )}&target=law&MST=${encodeURIComponent(mst)}&type=JSON`;
  const j: any = await fetchJson(url);
  const lines = pullStrings(j?.법령?.제개정이유).filter((s) => s && s.trim());
  return lines.join('\n').trim();
}

/** MST + 조문번호(6자리)로 조문 원문 조회 */
export async function fetchArticle(oc: string, mst: string, jo: string): Promise<string> {
  const url = `https://www.law.go.kr/DRF/lawService.do?OC=${encodeURIComponent(
    oc,
  )}&target=law&MST=${encodeURIComponent(mst)}&JO=${encodeURIComponent(jo)}&type=JSON`;
  const j: any = await fetchJson(url);
  let u = j?.법령?.조문?.조문단위;
  u = u ? [].concat(u) : [];
  return pullStrings(u).filter((s) => s && s.trim()).join('\n').trim();
}

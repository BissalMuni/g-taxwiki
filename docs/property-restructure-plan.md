# 재산세 책 전체 재구성 — 「2026년 재산세 운용실무」 기준 (작업 핸드오프)

> 상태: **1차 실행 시작 직후 중단** (파싱 텍스트 추출 실패 발견 → OCR 경로 확정).
> 원본 PDF `2026_silmu.pdf`(서울시 세무과, 582p)는 로컬 전용(gitignore). 파싱 산출물 `silmu/`도 gitignore(재생성 가능).
> 자세한 설계 근거는 로컬 plan: `~/.claude/plans/distributed-gliding-phoenix.md`.

## 배경

`2026_silmu.pdf` = 현 재산세 책(`property`)의 사실상 원본. 목차가 기존 트리와 제1·2편이 1:1 일치. 그런데 현 재산세 책은 **트리 골격만 있고 leaf 47개 중 46개가 13줄 "준비 중" 스켈레톤**, 실제 콘텐츠는 `src/content/property/vol3/lux-hvy.tsx`(유흥 중과, 330줄) 하나뿐. → 이 책자를 단일 원본으로 트리 재배치 + 콘텐츠 작성.

## 확정된 리프 입도 규칙 (제1·2편)

1. **기본: 네모숫자 항목(①②③) = 리프.** 내부 `□` 항목은 한 리프 TSX 안 `■` CalcBox 섹션.
2. **`절` 층은 트리에 두지 않음.** 책자에서 절이 있는 건 제1편 제4장뿐 → **`4-1장 과세표준` / `4-2장 세율`로 분리**. 트리가 `편 > 장 > 네모숫자 리프`로 균일.
3. **네모숫자 없는 장은 `□`가 리프.** 예: `4-2장 세율` = `□ 재산세(토지)/(건축물)/(주택)/선박/항공기/탄력세율` 각각 리프.
4. **단일 깊이 예외 — 제3장 과세대상 `①토지`(p36~102, ~67p):** 토지는 노드, **1-1 분리 / 1-2 별도 / 1-3 종합을 리프**로. `□`(저율/일반/고율 등)는 각 리프 안 `■` 섹션. 깊이 정확히 5.

> 깊이 5 한도: 토지만 5층, 나머지 제1·2편은 4층(`편>장>네모숫자 리프`). 제2편은 분량 작아 표준 규칙으로 무난.

### 제안 트리 골격 (property.json, 제1·2편)

- **제1편 재산세** (`vol1`)
  - 1장 재산세 개요 — ①법조문 구성 ②재산세 개관 ③입법 연혁 ④세율표
  - 2장 납세의무자 — ①원칙적 ②예외적 ③소유권 귀속 불분명
  - 3장 과세대상 — Ⅰ.토지(노드→분리/별도/종합 3리프) + ②건축물 ③주택 ④항공기·선박
  - 4-1장 과세표준 — ①개요 ②과세표준액 ③과표상한
  - 4-2장 세율 — □ 재산세(토지)/(건축물)/(주택)/선박/항공기/탄력세율
  - 5장 부과 징수 — ①과세기준일·납기 ②납세지 ③징수방법 ④물납 ⑤분할납부 ⑥소액징수면제 ⑦신탁재산 물적납세 ⑧향교·종교단체 특례 ⑨신고의무 ⑩납세관리인 지정신고
  - 6장 세부담의 상한 — ①개요 ②세부담 상한 계산방법 (〈참고:세액계산 사례〉는 ② 내부 섹션 또는 별도 리프)
  - 7장 비과세 — ①국가 등 비과세 ②용도구분 비과세
  - 8장 재산세 감면 — ①어린이집·유치원 ②노인복지 ③사회복지 ④공공임대 ⑤장기일반민간임대 ⑥사권제한 토지
- **제2편 도시지역분 및 지역자원시설세** (`vol2`)
  - 1장 재산세 도시지역분 — ①개요 ②과세대상 ③과세표준·세율 ④부과징수 관계 ⑤기준금액 판단
  - 2장 소방분 지역자원시설세 — ①과세목적 ②과세대상 ③납세의무자 ④납세지 ⑤비과세 ⑥과세표준·세율 ⑦화재위험 건축물 ⑧재산세 준용 ⑨소방 누진

## 보류 항목 (제1·2편 완료 후 재결정)

- **제3편 부록**: 리프 규칙 미정. (관찰: 장 아래 로마자 Ⅰ/Ⅱ/Ⅲ = 절을 로마자로 표현, 그 아래 네모숫자 개정항목 ~40개. 입도 별도 결정 필요.)
- **유흥 실무**(유흥 중과/안분): 새 위치 미정(제4편 실무 신설 등). 부록이 `vol3` 차지하면 현 `vol3/lux-hvy.tsx` 이동 대상.

## ⚠️ 파싱 발견사항 (핵심)

**이 PDF는 텍스트 레이어가 깨져 있음** — CID-keyed 폰트(ToUnicode 매핑 없음). OpenDataLoader 일반 모드(`format=markdown`) 결과: 582p에서 **추출 한글 단 2줄**, 나머지 전부 이미지 참조 + 빈 표. → law-ebansimsa의 "라인맵→텍스트 슬라이싱" 방식은 **이 PDF엔 적용 불가**(자를 텍스트가 없음).

단, Read 도구로 PDF 페이지를 이미지로 렌더해 읽으면(비전) 한글이 정확히 보임 (1~10p 확인 완료).

### 확정 경로: **OCR 초안 + 비전 교정** (사용자 결정)

1. `opendataloader-pdf[hybrid]` 설치 후 docling-fast OCR로 재변환 → 텍스트 md 초안 확보.
2. TSX 작성 시 Read 비전으로 세율 숫자·법조문(조/항/호)·금액 교정.

## 작업 환경 (설치 완료)

- Python 3.13.5, Java 17 (`C:\Program Files\Microsoft\jdk-17.0.18.8-hotspot`)
- `opendataloader-pdf 2.4.7` 설치됨 (hybrid extras는 **미설치** — 다음에 설치 필요)
- 스테이징 폴더 `silmu/` 생성됨 (PDF 복사본 + 실패한 md + `silmu/2026_silmu_images/` 195개 이미지)

## 다음 단계 (집에서 이어서)

```bash
# 1) 하이브리드 OCR 설치
python -m pip install -U "opendataloader-pdf[hybrid]"

# 2) docling-fast OCR로 재변환 (Java 17 PATH 필요, 582p라 수십 분)
#    Python API의 hybrid 파라미터 확인 후, 예:
JAVA_HOME="/c/Program Files/Microsoft/jdk-17.0.18.8-hotspot" \
PATH="/c/Program Files/Microsoft/jdk-17.0.18.8-hotspot/bin:$PATH" \
python -c "import opendataloader_pdf; opendataloader_pdf.convert(input_path='silmu/2026_silmu.pdf', output_dir='silmu', format='markdown', markdown_page_separator='<!-- PAGE_BREAK -->', hybrid='docling-fast')"
#    ※ CLI 대안: opendataloader-pdf silmu/2026_silmu.pdf --hybrid docling-fast
```

그 다음 파이프라인 (제1·2편만):

| 단계 | 산출물 | 담당 |
|---|---|---|
| [2] 원본 목차 | `silmu/wiki/0.2.1-목차.md` | LLM |
| [2.5] 코드목차 (위 규칙 적용) | `silmu/wiki/0.2.2-목차_코드.md` | LLM ★승인 |
| [2.6] 라인맵 초안 | `silmu/wiki/0.2.3-라인맵.md` | 스크립트 |
| [2.7] 라인맵 검증·보정 | `silmu/wiki/0.2.4-라인맵_검증.md` | 스크립트+LLM ★승인 |
| [3] 섹션별 md 슬라이싱 | `silmu/wiki/<코드>-<제목>.md` | 스크립트 |
| [4] property.json 재작성 (제1·2편 + slug) | `src/book/data/property.json` | LLM, 커밋 |
| [5] 섹션 md → TSX (비전 교정) | `src/content/property/...` | LLM, 커밋 |

> OCR 품질이 나쁘면 [2.6][2.7][3] 텍스트 슬라이싱을 건너뛰고, Read 비전으로 페이지 직독→TSX 작성으로 전환.

## 슬러그·파일 이동 주의

`src/map/index.ts`의 `derivePath`가 **slug 체인으로 콘텐츠 경로 자동 도출**(`src/content/{basePath}/{slug들}.tsx`). 트리 노드 이동/리네임 시 **TSX 파일도 같은 경로로 이동·재명명 필수.** 토지처럼 깊어진 가지는 새 폴더(예 `vol1/object/land/분리.tsx`) 생성.

## 콘텐츠 작성 레시피 ([5]단계)

`CONVENTION_CONTENT.md` + 예시 `src/content/property/vol3/lux-hvy.tsx`:
- `"use client";` + `import { CalcBox, SubSection, Insight } from "@/components/content/shared";`
- 최상위 `<div className="space-y-8">`. h1/h2/h3/`<section>` 직접 금지 — 섹션은 `<CalcBox title="■ …">`, 하위 `<SubSection title="● …">`, 3단계 `①②③` 본문.
- 표: 마크다운 금지, 인라인 스타일 JSX 테이블 (`tbl/th/td/tdHead` 상수는 lux-hvy.tsx:5-9 패턴 재사용).
- 세율표 컬럼 헤더 색상: 합계 `#cf1322`, 취득세 `#1890ff`, 지방교육세 `#52c41a`, 농특세 `#fa8c16`.
- `□` 항목 → `CalcBox(■)` 섹션 매핑.

## 검증

- `silmu/wiki/` 산출물은 ★승인 게이트 통과 후 다음 단계.
- 트리 변경 후 `pnpm dev`(3001) → 각 leaf URL 접속해 "준비 중" 아닌 실제 콘텐츠 렌더 확인.
- `pnpm lint` + `pnpm build` (TS strict, no `any`).

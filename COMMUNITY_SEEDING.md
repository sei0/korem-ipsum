# 커뮤니티 시딩 전략 (Community Seeding Plan)

Korem Ipsum 방문자 확보를 위한 한국 디자인/개발 커뮤니티 홍보 전략.

---

## 타겟 커뮤니티

### Tier 1 — 높은 전환율 (디자이너 중심)

| 커뮤니티 | URL | 특징 | 게시 형태 |
|---------|-----|------|----------|
| **Disquiet** | disquiet.io | 한국 프로덕트/사이드 프로젝트 커뮤니티 | 프로덕트 등록 + 메이커로그 |
| **리메인** | remain.co.kr | 디자인 리소스 공유 커뮤니티 | 도구 소개 글 |
| **GDSC / 디자인 학교 커뮤니티** | 각 대학별 | 디자인 전공 학생 | 유용한 도구 추천 |

### Tier 2 — 중간 전환율 (개발자 + 디자이너 혼합)

| 커뮤니티 | URL | 특징 | 게시 형태 |
|---------|-----|------|----------|
| **GeekNews (긱뉴스)** | news.hada.io | 한국 해커뉴스, 개발자 중심 | Show 게시글 |
| **velog** | velog.io | 개발자 블로그 플랫폼 | 기술 블로그 포스트 |
| **brunch** | brunch.co.kr | 크리에이터 글쓰기 플랫폼 | 사이드 프로젝트 에세이 |

### Tier 3 — 넓은 도달 (일반 커뮤니티)

| 커뮤니티 | URL | 특징 | 게시 형태 |
|---------|-----|------|----------|
| **X (Twitter)** | twitter.com | 한국 디자인/개발 트위터 | 쓰레드 |
| **Reddit r/hangul, r/korea** | reddit.com | 해외 한국어 학습자 + 한인 | 도구 소개 |
| **ProductHunt** | producthunt.com | 글로벌 프로덕트 런칭 | Launch |

---

## 게시 전략

### 1. Disquiet — 프로덕트 등록 (최우선)

**형태**: 프로덕트 페이지 등록 + 메이커로그

**제목**: `Korem Ipsum — 자연스러운 한글 더미 텍스트 생성기`

**핵심 메시지**:
- 영문 Lorem Ipsum은 한글 프로젝트에 맞지 않는 문제를 해결
- 실제 한국어 빈도 분석 기반 알고리즘
- 웹 + Figma 플러그인 지원
- 100% 무료, 오픈소스

**메이커로그 포인트**:
- 왜 만들었는지 (한글 디자인할 때 영문 Lorem Ipsum의 한계)
- 기술적으로 어떻게 자연스러운 한글을 생성하는지
- Figma 플러그인까지 만든 이유

---

### 2. GeekNews — Show 게시글

**제목**: `Show: 한글 더미 텍스트 생성기 Korem Ipsum (오픈소스)`

**본문 구조**:
```
한글 프로젝트에서 영문 Lorem Ipsum 대신 사용할 수 있는 한글 더미 텍스트 생성기입니다.

주요 특징:
- 한국어 음절 빈도 기반 자연스러운 텍스트 생성
- 합니다체/해요체/한다체 3가지 말투 지원
- 10~10,000자 범위 설정
- Figma 플러그인 제공
- 글자수 세기 도구 포함

기술 스택: 순수 HTML/CSS/JS, GitHub Pages 호스팅
라이선스: MIT

데모: https://sei0.github.io/korem-ipsum/
GitHub: https://github.com/sei0/korem-ipsum
```

---

### 3. velog — 기술 블로그 포스트

**제목**: `한국어 더미 텍스트 생성 알고리즘 구현기`

**내용 방향**:
- 한글 초성/중성/종성 빈도 분석 데이터
- 가중치 기반 랜덤 생성 알고리즘 설명
- 조사 처리 (은/는, 이/가, 을/를) 로직
- 부자연스러운 조합 필터링 규칙
- Figma 플러그인 API 연동 경험

**태그**: `#사이드프로젝트` `#한글` `#오픈소스` `#JavaScript` `#Figma`

---

### 4. X (Twitter) — 쓰레드

**쓰레드 구조** (5-6개 트윗):

1. "한글 프로젝트 하면서 영문 Lorem Ipsum 쓰고 있다면, 한글 더미 텍스트 생성기 만들었습니다 🇰🇷"
2. 왜 한글과 영문 더미 텍스트가 다른지 (글자 폭, 줄바꿈 차이)
3. 주요 기능 소개 (스크린샷 첨부)
4. Figma 플러그인 소개
5. 기술적 특이점 (빈도 기반 알고리즘)
6. 링크 + GitHub star 요청

**해시태그**: `#사이드프로젝트` `#디자인도구` `#한글` `#오픈소스` `#Figma`

---

### 5. brunch — 사이드 프로젝트 에세이

**제목**: `영문 Lorem Ipsum이 한글 디자인을 망치는 이유`

**톤**: 에세이 스타일, 문제 제기 → 해결 과정 → 결과

**구조**:
1. 한글 UI를 디자인하면서 영문 더미 텍스트를 쓰면 생기는 문제들
2. 한글과 영문의 타이포그래피 차이 (네모꼴 vs 가변폭)
3. 직접 한글 더미 텍스트 생성기를 만들기로 한 계기
4. 알고리즘 설계 과정 (비개발자도 이해할 수 있게)
5. 결과물 소개 및 사용법

---

### 6. ProductHunt — 글로벌 런칭

**Tagline**: `Korean Lorem Ipsum — Natural Korean dummy text generator`

**Description**:
```
Korem Ipsum generates natural-sounding Korean dummy text for designers 
and developers. Unlike Latin Lorem Ipsum, it uses frequency analysis of 
actual Korean syllable patterns to produce realistic placeholder text.

Features:
- Frequency-based Korean text generation algorithm
- 3 speech styles (formal, casual, plain)
- 10 to 10,000 characters
- Figma plugin included
- Character counter tool
- 100% free and open source
```

**타이밍**: 화요일~목요일 PST 00:01 런칭 (한국 시간 수요일~금요일 17:01)

---

## 게시 일정

| 주차 | 월 | 화 | 수 | 목 | 금 |
|------|---|---|---|---|---|
| **1주차** | Disquiet 등록 | GeekNews Show | velog 포스트 | X 쓰레드 | - |
| **2주차** | brunch 에세이 | Reddit 게시 | ProductHunt 런칭 | 반응 모니터링 | 후속 댓글 대응 |

---

## 각 채널별 KPI

| 채널 | 목표 지표 | 기대치 |
|------|----------|--------|
| Disquiet | 프로덕트 좋아요 | 30+ |
| GeekNews | 포인트(upvotes) | 10+ |
| velog | 조회수 | 500+ |
| X | 임프레션 | 5,000+ |
| brunch | 조회수 | 300+ |
| ProductHunt | upvotes | 30+ |

---

## 주의사항

- **스팸처럼 보이지 않게**: 각 커뮤니티의 톤앤매너에 맞춰 글을 작성
- **가치 먼저**: 도구 홍보보다 "왜 한글 더미 텍스트가 필요한가"라는 인사이트를 먼저 전달
- **피드백 수용**: 댓글에 적극 응답하고, 기능 제안은 GitHub Issues로 안내
- **자연스러운 간격**: 모든 채널에 같은 날 게시하지 않고, 1-2일 간격으로 분산
- **커뮤니티 참여 이력**: 처음 가입해서 바로 홍보글만 올리지 말고, 다른 글에도 먼저 참여

---

## 블로그 글 활용

이미 작성된 10편의 SEO 블로그 글을 커뮤니티 게시물의 참고 자료로 활용:

- velog/brunch 포스트에서 관련 블로그 글 링크 (내부 링크 효과)
- 댓글 답변 시 관련 블로그 글 URL 공유
- X 쓰레드에서 개별 블로그 글을 추가 콘텐츠로 공유

**블로그 URL 목록**:
- https://sei0.github.io/korem-ipsum/blog-dummy-text-guide.html
- https://sei0.github.io/korem-ipsum/blog-designer-dummy-text.html
- https://sei0.github.io/korem-ipsum/blog-why-dummy-text.html
- https://sei0.github.io/korem-ipsum/blog-korean-vs-english.html
- https://sei0.github.io/korem-ipsum/blog-figma-dummy-text.html
- https://sei0.github.io/korem-ipsum/blog-prototyping-tips.html
- https://sei0.github.io/korem-ipsum/blog-korean-typography.html
- https://sei0.github.io/korem-ipsum/blog-generator-comparison.html
- https://sei0.github.io/korem-ipsum/blog-developer-test-text.html
- https://sei0.github.io/korem-ipsum/blog-character-count.html

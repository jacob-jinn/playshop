# 교환권선포비팀 PlayShop 2025 초대장

회사 플레이샵 초대장 웹사이트 템플릿입니다. 결혼식 청첩장 같은 모던하고 깜찍한 디자인으로 제작되었습니다.

## 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **TailwindCSS** - 스타일링
- **React Hook Form** - 폼 관리
- **Zod** - 스키마 검증
- **Lucide React** - 아이콘

## 주요 기능

### 섹션 구성

- **Hero Card** - 행사명, 날짜/장소, RSVP 버튼
- **Intro Section** - 초대 메시지 및 Play/Shop 카드
- **Details Section** - 일정 타임라인, 드레스 코드, FAQ
- **Location Card** - 장소 안내 및 지도 (카카오/구글/네이버 선택)
- **Gallery** - 이미지 그리드 및 라이트박스
- **RSVP Form** - 참석 신청 폼 (검증 포함)
- **Action Bar** - 캘린더 추가, 공유하기

### 디자인 특징

- 파스텔 컬러 팔레트 (핑크, 하늘색, 크림)
- 부드러운 애니메이션 (페이드, 슬라이드, 호버 효과)
- 배경 컨페티 애니메이션
- 완전 반응형 디자인 (모바일/태블릿/데스크톱)
- 접근성 고려 (ARIA 레이블, 키보드 포커스)

### 기능

- ICS 파일 생성 (캘린더 추가)
- Web Share API (공유하기)
- 폼 검증 (Zod)
- 스크롤 네비게이션
- 라이트박스 갤러리

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:5173 열기

### 3. 프로덕션 빌드

```bash
npm run build
```

### 4. 빌드 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
playshop/
├── src/
│   ├── components/        # UI 컴포넌트
│   │   ├── HeroCard.tsx
│   │   ├── IntroSection.tsx
│   │   ├── DetailsSection.tsx
│   │   ├── LocationCard.tsx
│   │   ├── Gallery.tsx
│   │   ├── RSVPForm.tsx
│   │   ├── ActionBar.tsx
│   │   ├── Timeline.tsx
│   │   ├── Accordion.tsx
│   │   └── Footer.tsx
│   ├── pages/            # 페이지
│   │   └── Home.tsx
│   ├── hooks/            # 커스텀 훅
│   │   └── useConfetti.ts
│   ├── lib/              # 라이브러리 설정
│   │   └── form.ts
│   ├── utils/            # 유틸리티 함수
│   │   ├── ics.ts
│   │   └── sharing.ts
│   ├── App.tsx           # 메인 앱
│   ├── main.tsx          # 엔트리 포인트
│   └── index.css         # 글로벌 스타일
├── public/               # 정적 파일
├── index.html            # HTML 템플릿
├── tailwind.config.ts    # Tailwind 설정
├── vite.config.ts        # Vite 설정
└── package.json          # 의존성

```

## 커스터마이징

### 행사 정보 수정

행사 정보는 다음 파일에서 수정할 수 있습니다:

- `src/components/HeroCard.tsx` - 제목, 날짜, 장소
- `src/components/ActionBar.tsx` - 캘린더 이벤트 정보
- `src/components/DetailsSection.tsx` - 일정, FAQ

### 색상 변경

`tailwind.config.ts` 파일에서 커스텀 색상을 수정할 수 있습니다:

```typescript
colors: {
  pink: { pastel: '#FFCFEF' },
  sky: { pastel: '#C6E6FF' },
  cream: { pastel: '#FFF6D6' },
}
```

### 갤러리 이미지

`src/components/Gallery.tsx`에서 이미지 배열을 실제 이미지로 교체하세요.

### 폰트 변경

`index.html`에서 Google Fonts 링크를 변경하고, `tailwind.config.ts`에서 fontFamily를 업데이트하세요.

## 반응형 브레이크포인트

- **sm**: 640px - 모바일
- **md**: 768px - 태블릿
- **lg**: 1024px - 데스크톱
- **xl**: 1280px - 대형 화면

## 접근성

- ARIA 레이블 사용
- 키보드 네비게이션 지원
- 적절한 색상 대비
- 의미 있는 HTML 구조

## 성능 최적화

- 경량 컨페티 애니메이션 (30개 파티클)
- 이미지 레이지 로딩 준비
- 최소한의 의존성
- Vite 기반 빠른 빌드

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이선스

MIT License

## 문의

playshop@kakao.com

---

Made with Claude Code

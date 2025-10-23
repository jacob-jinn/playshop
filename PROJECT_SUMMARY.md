# 프로젝트 요약

## Kakao PlayShop 2025 초대장

### 프로젝트 개요
결혼식 청첩장 같은 모던하고 깜찍한 디자인의 회사 플레이샵 초대장 웹사이트입니다.

### 구현된 주요 기능

#### 1. Hero Section
- 메인 비주얼 카드 (파스텔 그라데이션 배경)
- 행사명: "Kakao PlayShop 2025"
- 날짜/장소 정보 표시
- RSVP 버튼 (스크롤 네비게이션)
- 플로팅 애니메이션 이모지 장식

#### 2. Intro Section
- 초대 메시지
- Play/Shop 듀얼 카드
- 각 카드별 아이콘 및 설명

#### 3. Details Section
- 타임라인 컴포넌트 (6개 일정 항목)
- 드레스 코드 안내
- 준비물 안내
- FAQ 아코디언 (4개 질문)

#### 4. Location Section
- 장소 정보 (판교 알파돔시티)
- 지도 플레이스홀더
- 교통편 안내 (지하철/자가용)
- 지도 선택 드롭다운 (카카오/구글/네이버)
- 길 안내 버튼

#### 5. Gallery Section
- 6개 이미지 그리드
- 라이트박스 기능
- 반응형 레이아웃 (2열 → 3열)

#### 6. RSVP Form
- React Hook Form + Zod 검증
- 필드: 이름(필수), 팀, 참석여부(필수), 동반인원, 메모
- 로딩 상태 표시
- 성공 메시지 표시
- 더미 API 제출 (1.5초 딜레이)

#### 7. Action Bar
- 캘린더에 추가 (ICS 파일 다운로드)
- 공유하기 (Web Share API + 폴백)

#### 8. Background Effects
- Canvas 기반 컨페티 애니메이션
- 20개 파티클 플로팅
- 성능 최적화 (requestAnimationFrame)

### 기술 구현 세부사항

#### 디자인 시스템
- **컬러 팔레트**:
  - Pink Pastel: #FFCFEF
  - Sky Pastel: #C6E6FF
  - Cream Pastel: #FFF6D6
  - Text Primary: #222222

- **타이포그래피**:
  - Heading: DM Serif Display
  - Body: Inter

- **애니메이션**:
  - fade-in (0.6s)
  - slide-up (0.8s)
  - bounce-subtle (0.3s)
  - float (3s infinite)

#### 유틸리티 함수
1. **ICS Generator** (`src/utils/ics.ts`)
   - iCalendar 포맷 생성
   - Blob 다운로드

2. **Share Function** (`src/utils/sharing.ts`)
   - Web Share API 감지
   - Clipboard 폴백
   - 날짜 포맷팅

3. **Form Validation** (`src/lib/form.ts`)
   - Zod 스키마 정의
   - 더미 API 제출 함수

#### 컴포넌트 구조
```
Home (pages/Home.tsx)
├── Confetti Background (useConfetti hook)
├── HeroCard
├── IntroSection
├── DetailsSection
│   ├── Timeline
│   └── Accordion
├── LocationCard
├── Gallery (with Lightbox)
├── ActionBar
├── RSVPForm
└── Footer
```

### 반응형 디자인
- **Mobile (< 640px)**: 단일 열, 세로 스택
- **Tablet (640-1024px)**: 2열 그리드
- **Desktop (> 1024px)**: 최대 너비 제한, 3열 그리드

### 접근성
- ARIA 레이블 적용
- 키보드 네비게이션 지원
- 적절한 색상 대비
- 포커스 스타일
- 의미 있는 HTML 구조

### 성능
- **번들 크기**:
  - CSS: 18.69 kB (gzip: 4.13 kB)
  - JS: 249.49 kB (gzip: 76.42 kB)
- Vite 기반 빠른 HMR
- 경량 컨페티 애니메이션
- 이미지 최적화 준비

### 사용 방법

#### 개발
```bash
npm install
npm run dev
```
→ http://localhost:5173

#### 빌드
```bash
npm run build
npm run preview
```

### 커스터마이징 가이드

1. **행사 정보 변경**
   - `src/components/HeroCard.tsx` - 제목, 날짜, 장소
   - `src/components/ActionBar.tsx` - 이벤트 데이터

2. **일정 변경**
   - `src/components/DetailsSection.tsx` - scheduleItems 배열

3. **FAQ 변경**
   - `src/components/DetailsSection.tsx` - faqItems 배열

4. **갤러리 이미지 교체**
   - `src/components/Gallery.tsx` - images 배열

5. **색상 테마 변경**
   - `tailwind.config.ts` - colors 섹션

### 브라우저 지원
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 향후 개선 가능 항목
- [ ] 실제 지도 API 연동 (Kakao Map API)
- [ ] 백엔드 API 연동
- [ ] 다크모드 지원
- [ ] PWA 구현 (manifest + service worker)
- [ ] 이미지 최적화 (WebP, lazy loading)
- [ ] 다국어 지원 (i18n)
- [ ] 구글 애널리틱스 추가
- [ ] SEO 최적화

### 의존성
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-hook-form": "^7.49.2",
  "zod": "^3.22.4",
  "@hookform/resolvers": "^3.3.3",
  "lucide-react": "^0.303.0"
}
```

### 파일 통계
- 총 컴포넌트: 11개
- 총 유틸리티: 3개
- 총 훅: 1개
- 총 라인 수: ~1,500 LOC

---

프로젝트가 성공적으로 생성되었습니다!

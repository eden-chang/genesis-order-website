> Original planning document written before development (November 2025). It is kept for reference; the shipped site differs (light theme, content authored directly in page components instead of Markdown). See the root README for the current state.

# 세계관 문서 웹사이트 프로젝트

## 📋 프로젝트 개요

깔끔하고 읽기 쉬운 세계관 설명 문서를 위한 정적 웹사이트입니다. 복잡한 키워드나 용어에 마우스를 올리면 설명이 팝오버로 나타나고, 모바일에서는 터치 시 팝업으로 표시됩니다.
사용할 도메인: genesis-order.site

## 🎯 주요 목표

- **깔끔한 문서 디자인**: 읽기 쉽고 전문적인 문서 레이아웃
- **인터랙티브 각주**: 호버/터치 시 설명 표시
- **완벽한 반응형**: PC와 모바일 모두에서 최적화된 경험
- **한국어 폰트 지원**: 다양한 한글 폰트 사용 가능
- **커스텀 도메인**: 원하는 URL로 배포

## 🛠 기술 스택

### Frontend
- **Next.js 14**: React 기반 풀스택 프레임워크 (App Router 사용)
- **TypeScript**: 타입 안정성을 위한 언어
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **Framer Motion**: 부드러운 애니메이션 라이브러리

### 배포 & 호스팅
- **Vercel**: 자동 배포 및 호스팅
- **커스텀 도메인**: DNS 연결로 원하는 도메인 사용

### 폰트
- **Google Fonts**: 한글 폰트 (Noto Sans KR, Gowun Dodum 등)
- **웹폰트 최적화**: 폰트 로딩 성능 최적화

## 📱 주요 기능

### 1. 반응형 각주 시스템
- **데스크톱**: 마우스 호버 시 팝오버로 설명 표시
- **모바일**: 터치 시 팝업으로 설명 표시, 외부 터치로 닫기
- **애니메이션**: 부드러운 fade in/out 효과

### 2. 콘텐츠 관리
- **마크다운 기반**: 쉬운 콘텐츠 작성 및 수정
- **각주 문법**: `[용어]{설명 내용}` 형태로 간단하게 작성
- **타이포그래피**: 전문적인 문서 스타일링

### 3. 성능 최적화
- **정적 생성**: 빠른 로딩 속도
- **이미지 최적화**: Next.js Image 컴포넌트 활용
- **SEO 최적화**: 메타 태그 및 구조화된 데이터

## 📁 프로젝트 구조

```
worldview-docs/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 메인 페이지
├── components/
│   ├── Footnote.tsx         # 각주 컴포넌트
│   ├── DocumentLayout.tsx   # 문서 레이아웃
│   └── Typography.tsx       # 타이포그래피 컴포넌트
├── content/
│   └── documents/           # 마크다운 문서들
├── lib/
│   └── markdown.ts          # 마크다운 파싱 유틸리티
├── public/
│   └── fonts/              # 로컬 폰트 파일들
├── styles/
│   └── typography.css      # 커스텀 타이포그래피
└── types/
    └── index.ts            # TypeScript 타입 정의
```

## 🎨 디자인 컨셉

### 색상 팔레트
- **배경**: 다크 테마 (`bg-gray-900`)
- **텍스트**: 밝은 회색 (`text-gray-100`)
- **강조**: 노란색 (`text-yellow-400`)
- **각주**: 어두운 반투명 배경

### 타이포그래피
- **제목**: 큰 폰트 사이즈, 볼드
- **본문**: 읽기 쉬운 라인 높이 (1.7)
- **각주**: 작은 폰트, 적당한 패딩

## 📋 개발 단계

### Phase 1: 기본 설정
1. Next.js 프로젝트 초기화
2. Tailwind CSS 설정
3. 기본 레이아웃 구성
4. 타이포그래피 스타일링

### Phase 2: 각주 시스템
1. Footnote 컴포넌트 개발
2. 모바일/데스크톱 분기 처리
3. Framer Motion 애니메이션 적용
4. 마크다운 파싱 로직

### Phase 3: 콘텐츠 & 최적화
1. 실제 콘텐츠 마이그레이션
2. 폰트 최적화
3. SEO 설정
4. 성능 튜닝

### Phase 4: 배포
1. Vercel 배포 설정
2. 커스텀 도메인 연결
3. 최종 테스트

## 📚 참고 자료

### 기술 문서
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### 디자인 영감
- 학술 논문 레이아웃
- Medium 아티클 스타일
- GitHub Wiki 형태

## 🚀 시작하기

```bash
# 프로젝트 클론
git clone [repository-url]

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 📝 콘텐츠 작성 가이드

### 기본 마크다운
```markdown
# 제목
## 소제목

일반 텍스트입니다.
```

### 각주 사용법
```markdown
이것은 [창세교]{종교적 신념 체계를 의미합니다}라는 용어입니다.
```

### 이미지 삽입
```markdown
![이미지 설명](./images/example.jpg)
```

---

**개발 시작 전 체크리스트:**
- [ ] Node.js 설치 확인
- [ ] Git 설정 완료
- [ ] 에디터 준비 (VS Code 권장)
- [ ] 기본 React/TypeScript 지식 확인
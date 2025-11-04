# Genesis Order - 창세의 질서

Genesis Order 세계관 문서 웹사이트입니다.

## 🎯 프로젝트 개요

인터랙티브 각주 기능이 있는 세계관 설명 문서 웹사이트입니다. 호버/터치 시 용어 설명이 표시되며, 깔끔한 다크 테마로 제작되었습니다.

## 🛠 기술 스택

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## 📁 프로젝트 구조

```
genesis-webpage/
├── app/                    # Next.js App Router 페이지
│   ├── layout.tsx         # 루트 레이아웃 (폰트 설정)
│   ├── page.tsx           # 홈 (통합 네비게이션)
│   ├── announcements/     # 공지사항
│   ├── worldview/         # 세계관
│   ├── characters/        # 캐릭터 가이드
│   ├── application/       # 신청서 양식
│   └── system/            # 시스템
│
├── components/            # 재사용 가능한 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   ├── content/          # 콘텐츠 컴포넌트
│   └── forms/            # 폼 컴포넌트
│
├── features/             # Feature-based 모듈
│   ├── announcements/
│   ├── worldview/
│   ├── characters/
│   ├── application/
│   └── system/
│
├── lib/                  # 유틸리티 & 헬퍼
│   ├── markdown/         # 마크다운 처리
│   ├── hooks/            # 커스텀 훅
│   └── utils/            # 유틸리티 함수
│
├── content/              # 마크다운 콘텐츠
├── types/                # TypeScript 타입 정의
├── styles/               # 커스텀 스타일
├── config/               # 설정 파일
└── public/               # 정적 자산
```

## 🎨 폰트 설정

- **기본 폰트**: Noto Sans KR (본문)
- **섹션 제목**: Diphylleia (제목)

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 빌드

```bash
npm run build
```

### 4. 프로덕션 실행

```bash
npm start
```

## 📝 콘텐츠 작성

### 마크다운 각주 문법

```markdown
[용어]{설명 내용}
```

### 예시

```markdown
[창세교]{종교적 신념 체계를 의미합니다}는 이 세계의 근간을 이루는 믿음입니다.
```

## 🌐 배포

Vercel을 사용하여 배포할 수 있습니다.

```bash
vercel deploy
```

## 📄 라이선스

이 프로젝트는 개인 프로젝트입니다.

"use client";

import { Noto_Sans_KR, Noto_Serif_KR, EB_Garamond, Baskervville } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";
import { AudioProvider } from "@/context/AudioContext";
import BGMController from "@/components/ui/BGMController";

// 기본 폰트: Noto Sans KR
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

// 나눔명조 대체: Noto Serif Korean
const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-kr",
  display: "swap",
});

// 한글 제목 폰트: Pretendard Medium (로컬 파일)
const pretendardMedium = localFont({
  src: "../public/fonts/Pretendard-Medium.ttf",
  variable: "--font-pretendard-medium",
  display: "swap",
});

// 영어 제목 폰트: EB Garamond
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
  display: "swap",
});

// 세미 헤더 영어 폰트: Baskervville
const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-baskervville",
  display: "swap",
});

// 페이지 제목 폰트: Proxima Nova Black (로컬 파일)
const proximanovaBlack = localFont({
  src: "../public/fonts/proximanova_black.ttf",
  variable: "--font-proximanova-black",
  display: "swap",
});

// 네비게이션 폰트: Pretendard SemiBold (로컬 파일)
const pretendardSemiBold = localFont({
  src: "../public/fonts/Pretendard-SemiBold.ttf",
  variable: "--font-pretendard-semibold",
  display: "swap",
});

// Pretendard Bold (로컬 파일)
const pretendardBold = localFont({
  src: "../public/fonts/Pretendard-Bold.ttf",
  variable: "--font-pretendard-bold",
  display: "swap",
});

// 푸터 폰트: Pretendard Regular (로컬 파일)
const pretendardRegular = localFont({
  src: "../public/fonts/Pretendard-Regular.ttf",
  variable: "--font-pretendard-regular",
  display: "swap",
});

// 푸터 저작권 폰트: Pretendard Light (로컬 파일)
const pretendardLight = localFont({
  src: "../public/fonts/Pretendard-Light.ttf",
  variable: "--font-pretendard-light",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // 우클릭 방지
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 복사 방지
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // 잘라내기 방지
    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // 키보드 단축키 복사 방지 (Ctrl+C, Ctrl+X, Ctrl+A)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'a')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <html lang="ko" className={`${notoSansKR.variable} ${notoSerifKR.variable} ${pretendardMedium.variable} ${ebGaramond.variable} ${baskervville.variable} ${proximanovaBlack.variable} ${pretendardSemiBold.variable} ${pretendardBold.variable} ${pretendardRegular.variable} ${pretendardLight.variable}`}>
      <head>
        <title>Genesis Order - 창세의 질서</title>
        <meta name="description" content="Genesis Order 세계관 문서" />
        <meta name="keywords" content="Genesis Order, 창세의 질서, 세계관, TRPG" />
      </head>
      <body className="font-sans antialiased text-[#2f2c31]">
        <AudioProvider>
          {children}
          <BGMController />
        </AudioProvider>
      </body>
    </html>
  );
}

"use client";

import { Noto_Sans_KR, EB_Garamond, Baskervville, Nanum_Myeongjo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";

// 기본 폰트: Noto Sans KR
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

// 나눔명조
const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nanum-myeongjo",
  display: "swap",
});

// 한글 제목 폰트: Diphylleia (로컬 파일)
const diphylleia = localFont({
  src: "../public/fonts/Diphylleia-Regular.ttf",
  variable: "--font-diphylleia",
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
    <html lang="ko" className={`${notoSansKR.variable} ${nanumMyeongjo.variable} ${diphylleia.variable} ${ebGaramond.variable} ${baskervville.variable}`}>
      <head>
        <title>Genesis Order - 창세의 질서</title>
        <meta name="description" content="Genesis Order 세계관 문서" />
        <meta name="keywords" content="Genesis Order, 창세의 질서, 세계관, TRPG" />
      </head>
      <body className="font-sans antialiased bg-white text-[#3d2200]">
        {children}
      </body>
    </html>
  );
}

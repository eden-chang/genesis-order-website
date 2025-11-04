import type { Metadata } from "next";
import { Noto_Sans_KR, EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// 기본 폰트: Noto Sans KR
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
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

export const metadata: Metadata = {
  title: "Genesis Order - 창세의 질서",
  description: "Genesis Order 세계관 문서",
  keywords: ["Genesis Order", "창세의 질서", "세계관", "TRPG"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${diphylleia.variable} ${ebGaramond.variable}`}>
      <body className="font-sans antialiased bg-white text-[#0b0b0b]">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Noto_Sans_KR, Diphylleia } from "next/font/google";
import "./globals.css";

// 기본 폰트: Noto Sans KR
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

// 섹션 제목 폰트: Diphylleia
const diphylleia = Diphylleia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-diphylleia",
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
    <html lang="ko" className={`${notoSansKR.variable} ${diphylleia.variable}`}>
      <body className="font-sans antialiased bg-gray-900 text-gray-100">
        {children}
      </body>
    </html>
  );
}

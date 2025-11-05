"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 bg-white border-t border-[#f2f2f2]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative w-[100px] h-[53px] mx-auto mb-4">
          <Image
            src="/images/logo.png"
            alt="Genesis Order Logo"
            fill
            className="object-contain"
          />
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
          <Link href="/notice" className="text-sm text-[#655e69] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-regular)' }}>공지</Link>
          <Link href="/world" className="text-sm text-[#655e69] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-regular)' }}>세계관</Link>
          <Link href="/system" className="text-sm text-[#655e69] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-regular)' }}>시스템</Link>
          <Link href="/character" className="text-sm text-[#655e69] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-regular)' }}>가이드</Link>
          <Link href="/application" className="text-sm text-[#655e69] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-regular)' }}>신청서</Link>
        </nav>
        <div className="pt-4 border-t border-[#f2f2f2]">
          <p className="text-xs text-[#655e69] text-center" style={{ fontFamily: 'var(--font-pretendard-light)' }}>© 2025 Genesis Order</p>
        </div>
      </div>
    </footer>
  );
}

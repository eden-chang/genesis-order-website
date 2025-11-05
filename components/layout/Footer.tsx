"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 bg-white border-t border-[#f2f2f2]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative w-[100px] h-[53px] mx-auto mb-4">
          <Image
            src="/logo.png"
            alt="Genesis Order Logo"
            fill
            className="object-contain"
          />
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
          <Link href="/notice" className="font-heading text-sm text-[#0b0b0b] hover:text-[#e4a408] transition-colors">공지</Link>
          <Link href="/world" className="font-heading text-sm text-[#0b0b0b] hover:text-[#e4a408] transition-colors">세계관</Link>
          <Link href="/system" className="font-heading text-sm text-[#0b0b0b] hover:text-[#e4a408] transition-colors">시스템</Link>
          <Link href="/character" className="font-heading text-sm text-[#0b0b0b] hover:text-[#e4a408] transition-colors">가이드</Link>
          <Link href="/application" className="font-heading text-sm text-[#0b0b0b] hover:text-[#e4a408] transition-colors">신청서</Link>
        </nav>
        <div className="pt-4 border-t border-[#f2f2f2]">
          <p className="font-sans text-xs text-[#0b0b0b] text-center">© 2025 Genesis Order</p>
        </div>
      </div>
    </footer>
  );
}

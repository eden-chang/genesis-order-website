"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full h-[56px] z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? '0 2px 8px rgba(228, 164, 8, 0.08)' : 'none'
        }}
      >
        <nav className="max-w-3xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <Link href="/" className="relative w-[68px] h-[36px]">
            <Image
              src="/logo.png"
              alt="Genesis Order Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* PC 네비게이션 */}
          <ul className="hidden md:flex gap-6">
            <li><Link href="/notice" className="font-heading text-base text-[#844a00] hover:text-[#e4a408] transition-colors">공지</Link></li>
            <li><Link href="/world" className="font-heading text-base text-[#844a00] hover:text-[#e4a408] transition-colors">세계관</Link></li>
            <li><Link href="/system" className="font-heading text-base text-[#844a00] hover:text-[#e4a408] transition-colors">시스템</Link></li>
            <li><Link href="/character" className="font-heading text-base text-[#844a00] hover:text-[#e4a408] transition-colors">캐릭터</Link></li>
            <li><Link href="/application" className="font-heading text-base text-[#844a00] hover:text-[#e4a408] transition-colors">신청서</Link></li>
            <li><Link href="/questions" className="font-heading text-base text-[#844a00] hover:text-[#e4a408] transition-colors">QNA</Link></li>
          </ul>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="md:hidden w-7 h-7 flex items-center justify-center relative z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="6.5"
                x2="24"
                y2="6.5"
                stroke="#e4a408"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="4"
                y1="14"
                x2="24"
                y2="14"
                stroke="#e4a408"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="4"
                y1="21.5"
                x2="24"
                y2="21.5"
                stroke="#e4a408"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* 모바일 메뉴 - 별도 컴포넌트 */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

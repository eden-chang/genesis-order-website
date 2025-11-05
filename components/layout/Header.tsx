"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  // 모바일 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
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
          <li><Link href="/notice" className="font-heading text-base text-[#0b0b0b] hover:text-[#e4a408] transition-colors">공지</Link></li>
          <li><Link href="/world" className="font-heading text-base text-[#0b0b0b] hover:text-[#e4a408] transition-colors">세계관</Link></li>
          <li><Link href="/system" className="font-heading text-base text-[#0b0b0b] hover:text-[#e4a408] transition-colors">시스템</Link></li>
          <li><Link href="/character" className="font-heading text-base text-[#0b0b0b] hover:text-[#e4a408] transition-colors">캐릭터</Link></li>
          <li><Link href="/application" className="font-heading text-base text-[#0b0b0b] hover:text-[#e4a408] transition-colors">신청서</Link></li>
          <li><Link href="/questions" className="font-heading text-base text-[#0b0b0b] hover:text-[#e4a408] transition-colors">QNA</Link></li>
        </ul>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴"
        >
          <span
            className={`w-6 h-0.5 bg-[#e4a408] transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#e4a408] transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#e4a408] transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* 모바일 메뉴 백드롭 */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 모바일 메뉴 패널 */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="pt-20 px-6">
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/notice"
                className="font-heading text-lg text-[#0b0b0b] hover:text-[#e4a408] transition-colors block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                공지
              </Link>
            </li>
            <li>
              <Link
                href="/world"
                className="font-heading text-lg text-[#0b0b0b] hover:text-[#e4a408] transition-colors block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                세계관
              </Link>
            </li>
            <li>
              <Link
                href="/system"
                className="font-heading text-lg text-[#0b0b0b] hover:text-[#e4a408] transition-colors block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                시스템
              </Link>
            </li>
            <li>
              <Link
                href="/character"
                className="font-heading text-lg text-[#0b0b0b] hover:text-[#e4a408] transition-colors block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                캐릭터
              </Link>
            </li>
            <li>
              <Link
                href="/application"
                className="font-heading text-lg text-[#0b0b0b] hover:text-[#e4a408] transition-colors block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                신청서
              </Link>
            </li>
            <li>
              <Link
                href="/questions"
                className="font-heading text-lg text-[#0b0b0b] hover:text-[#e4a408] transition-colors block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                QNA
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

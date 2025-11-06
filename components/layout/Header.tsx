"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsNavbarVisible(true); // 스크롤 시 navbar 표시
      } else {
        setIsScrolled(false);
        setIsNavbarVisible(false); // 맨 위에서 navbar 숨김
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
          backgroundColor: isMobile ? 'rgba(255, 255, 255, 1)' : (isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 1)'),
          backdropFilter: isMobile ? 'none' : (isScrolled ? 'blur(10px)' : 'none'),
          WebkitBackdropFilter: isMobile ? 'none' : (isScrolled ? 'blur(10px)' : 'none'),
          boxShadow: isMobile ? '0 2px 8px rgba(0, 0, 0, 0.08)' : (isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none'),
          transform: isMobile && !isNavbarVisible ? 'translateY(-100%)' : 'translateY(0)'
        }}
      >
        <nav className="max-w-3xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <Link href="/" className="relative w-[68px] h-[36px]">
            <Image
              src="/images/logo.png"
              alt="Genesis Order Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* PC 네비게이션 */}
          <ul className="hidden md:flex gap-6">
            <li><Link href="/notice" className="text-base text-[#39313F] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-semibold)' }}>공지</Link></li>
            <li><Link href="/world" className="text-base text-[#39313F] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-semibold)' }}>세계관</Link></li>
            <li><Link href="/system" className="text-base text-[#39313F] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-semibold)' }}>시스템</Link></li>
            <li><Link href="/character" className="text-base text-[#39313F] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-semibold)' }}>캐릭터</Link></li>
            <li><Link href="/application" className="text-base text-[#39313F] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-semibold)' }}>신청서</Link></li>
            <li><Link href="/questions" className="text-base text-[#39313F] hover:text-[#89818e] transition-colors" style={{ fontFamily: 'var(--font-pretendard-semibold)' }}>QNA</Link></li>
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
                stroke="#39313F"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="4"
                y1="14"
                x2="24"
                y2="14"
                stroke="#39313F"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="4"
                y1="21.5"
                x2="24"
                y2="21.5"
                stroke="#39313F"
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

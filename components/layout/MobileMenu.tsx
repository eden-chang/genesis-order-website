"use client";

import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // 모바일 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* 백드롭 - 회색 반투명 레이어 */}
      <div
        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[40]"
        onClick={onClose}
      />

      {/* 슬라이드 메뉴 패널 - 흰색 불투명 */}
      <div
        className="md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-[55] transform transition-transform duration-300 ease-in-out"
      >
        {/* X 닫기 버튼 - 살짝 작게, 위쪽, 오른쪽 */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 w-10 h-10 flex items-center justify-center text-[#e4a408] hover:text-[#d4990a] transition-colors z-[100]"
          aria-label="메뉴 닫기"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* 네비게이션 링크 */}
        <nav className="pt-20 px-6 relative z-10">
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/notice"
                className="font-heading text-lg text-[#844a00] hover:text-[#e4a408] transition-colors block"
                onClick={onClose}
              >
                공지
              </Link>
            </li>
            <li>
              <Link
                href="/world"
                className="font-heading text-lg text-[#844a00] hover:text-[#e4a408] transition-colors block"
                onClick={onClose}
              >
                세계관
              </Link>
            </li>
            <li>
              <Link
                href="/system"
                className="font-heading text-lg text-[#844a00] hover:text-[#e4a408] transition-colors block"
                onClick={onClose}
              >
                시스템
              </Link>
            </li>
            <li>
              <Link
                href="/character"
                className="font-heading text-lg text-[#844a00] hover:text-[#e4a408] transition-colors block"
                onClick={onClose}
              >
                캐릭터
              </Link>
            </li>
            <li>
              <Link
                href="/application"
                className="font-heading text-lg text-[#844a00] hover:text-[#e4a408] transition-colors block"
                onClick={onClose}
              >
                신청서
              </Link>
            </li>
            <li>
              <Link
                href="/questions"
                className="font-heading text-lg text-[#844a00] hover:text-[#e4a408] transition-colors block"
                onClick={onClose}
              >
                QNA
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

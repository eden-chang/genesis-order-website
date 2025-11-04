'use client';

import { useState, useEffect, useRef } from 'react';

interface FootnoteProps {
  term: string;
  definition: string;
  id: string;
}

export default function Footnote({ term, definition, id }: FootnoteProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const footnoteRef = useRef<HTMLSpanElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        isMobileOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        footnoteRef.current &&
        !footnoteRef.current.contains(event.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    }

    if (isMobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <span
        ref={footnoteRef}
        className="relative group cursor-help border-b border-dotted border-[#d4990a] text-[#d4990a] font-bold"
        onClick={(e) => {
          e.stopPropagation();
          // 모바일에서만 클릭 이벤트 처리
          if (isMobile) {
            setIsMobileOpen(true);
          }
        }}
      >
        {term}
        {/* 데스크톱 hover 툴팁 */}
        <span className="invisible group-hover:visible absolute left-0 top-full md:left-0 mt-2 w-[calc(100vw-20px)] max-w-96 p-4 bg-[#fffdf6] border-2 border-[#e4a408] rounded-lg shadow-lg text-xs md:text-sm text-[#0b0b0b] font-normal z-10 hidden md:block indent-0">
          {definition}
        </span>
      </span>

      {/* 모바일 모달 */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center md:hidden">
          {/* 배경 오버레이 */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMobileOpen(false)}
          />
          {/* 각주 박스 */}
          <div
            ref={modalRef}
            className="relative w-[calc(100vw-20px)] max-w-sm mx-auto p-4 bg-[#fffdf6] border-2 border-[#e4a408] rounded-lg shadow-lg text-[10.5pt] text-[#0b0b0b] font-normal z-10 indent-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-bold text-[rgb(212,153,10)] mb-2">{term}</div>
            <div>{definition}</div>
          </div>
        </div>
      )}
    </>
  );
}

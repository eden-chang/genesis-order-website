'use client';

import { useState, useEffect } from 'react';

export default function ScrollDownButton() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 상단 100px 이내에 있으면 버튼 표시
      setIsAtTop(window.scrollY < 100);
    };

    // 초기 상태 설정
    handleScroll();

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 클린업
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    // 현재 뷰포트 높이만큼 스크롤 (히어로 섹션을 지나 다음 섹션으로)
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (!isAtTop) return null;

  return (
    <button
      onClick={scrollToBottom}
      className="flex fixed bottom-12 left-1/2 -translate-x-1/2 z-40 items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-transparent transition-all duration-300 hover:scale-110"
      aria-label="Scroll to bottom"
    >
      <svg
        className="w-6 h-6 md:w-8 md:h-8 text-white transition-colors"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';

interface FootnoteProps {
  term: string;
  definition: string;
  id: string;
}

export default function Footnote({ term, definition, id }: FootnoteProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState<'left' | 'right' | 'center'>('left');
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // 터치 기기 및 화면 크기 감지
  useEffect(() => {
    const checkDevice = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 768;
      setIsTouchDevice(isTouch);
      setIsMobile(isSmallScreen);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // 팝오버 위치 계산
  const calculatePopoverPosition = () => {
    if (!footnoteRef.current) return;

    const rect = footnoteRef.current.getBoundingClientRect();
    const popoverWidth = 384; // max-w-96 = 24rem = 384px
    const margin = 20;

    const spaceOnRight = window.innerWidth - rect.right;
    const spaceOnLeft = rect.left;

    // 오른쪽 공간이 충분한 경우
    if (spaceOnRight >= popoverWidth + margin) {
      setPopoverPosition('left');
    }
    // 왼쪽 공간이 충분한 경우
    else if (spaceOnLeft >= popoverWidth + margin) {
      setPopoverPosition('right');
    }
    // 양쪽 다 부족한 경우 중앙 정렬
    else {
      setPopoverPosition('center');
    }
  };

  // 리사이즈 시 위치 재계산
  useEffect(() => {
    calculatePopoverPosition();
    window.addEventListener('resize', calculatePopoverPosition);
    return () => window.removeEventListener('resize', calculatePopoverPosition);
  }, []);

  // 모달을 사용할지 팝오버를 사용할지 결정
  const shouldUseModal = isMobile || isTouchDevice;

  return (
    <>
      <span
        ref={footnoteRef}
        className="relative group cursor-help border-b border-dotted border-[#d4990a] text-[#d4990a] font-bold"
        onClick={(e) => {
          e.stopPropagation();
          // 터치 기기이거나 작은 화면에서만 클릭 이벤트 처리
          if (shouldUseModal) {
            setIsMobileOpen(true);
          }
        }}
        onMouseEnter={calculatePopoverPosition}
      >
        {term}
        {/* 데스크톱 hover 팝오버 - 터치 기기가 아닌 경우에만 표시 */}
        {!shouldUseModal && (
          <span
            className={`
              invisible group-hover:visible absolute top-full mt-2
              w-[calc(100vw-40px)] max-w-96 p-4
              bg-[#fffdf6] border-2 border-[#e4a408] rounded-lg shadow-lg
              text-xs md:text-sm text-[#2f2c31] font-normal z-10 indent-0
              tracking-[-0.03em] md:tracking-normal
              ${popoverPosition === 'left' ? 'left-0' : ''}
              ${popoverPosition === 'right' ? 'right-0' : ''}
              ${popoverPosition === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
            `}
            style={{ wordBreak: 'keep-all' }}
          >
            {definition}
          </span>
        )}
      </span>

      {/* 모바일/터치 기기 모달 */}
      {isMobileOpen && shouldUseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 배경 오버레이 */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMobileOpen(false)}
          />
          {/* 각주 박스 */}
          <div
            ref={modalRef}
            className="relative w-[calc(100vw-40px)] max-w-sm mx-auto p-4 bg-[#fffdf6] border-2 border-[#e4a408] rounded-lg shadow-lg text-[10.5pt] text-[#2f2c31] font-normal z-10 indent-0"
            onClick={(e) => e.stopPropagation()}
            style={{ wordBreak: 'keep-all' }}
          >
            <div className="font-bold text-[rgb(212,153,10)] mb-2 tracking-[-0.03em]">{term}</div>
            <div className="tracking-[-0.03em]">{definition}</div>
          </div>
        </div>
      )}
    </>
  );
}

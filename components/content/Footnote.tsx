'use client';

import { useState, useEffect, useRef } from 'react';

interface FootnoteProps {
  term: string;
  definition: string;
  id: string;
}

export default function Footnote({ term, definition, id }: FootnoteProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
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

  // 마우스 위치 기반 팝오버 위치 계산
  const calculatePopoverPosition = (mouseX: number, mouseY: number) => {
    const popoverWidth = 384; // max-w-96 = 24rem = 384px
    const popoverHeight = 200; // 대략적인 팝오버 높이 (실제로는 내용에 따라 다름)
    const offset = 10; // 커서로부터의 거리
    const margin = 20; // 화면 가장자리 마진

    let left = mouseX + offset;
    let top = mouseY + offset;

    // 오른쪽 경계 체크
    if (left + popoverWidth + margin > window.innerWidth) {
      left = mouseX - popoverWidth - offset; // 왼쪽에 표시
    }

    // 왼쪽 경계 체크
    if (left < margin) {
      left = margin;
    }

    // 하단 경계 체크
    if (top + popoverHeight + margin > window.innerHeight) {
      top = mouseY - popoverHeight - offset; // 위쪽에 표시
    }

    // 상단 경계 체크
    if (top < margin) {
      top = margin;
    }

    setPopoverPosition({ top, left });
  };

  // 마우스 진입 시 위치 저장 (한 번만)
  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!mousePosition) {
      setMousePosition({ x: e.clientX, y: e.clientY });
      calculatePopoverPosition(e.clientX, e.clientY);
    }
  };

  // 마우스 이탈 시 위치 리셋
  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  // 모달을 사용할지 팝오버를 사용할지 결정
  const shouldUseModal = isMobile || isTouchDevice;

  return (
    <>
      <span
        ref={footnoteRef}
        className="relative group cursor-help bg-[#fff89f] text-[#000000] font-bold"
        onClick={(e) => {
          e.stopPropagation();
          // 터치 기기이거나 작은 화면에서만 클릭 이벤트 처리
          if (shouldUseModal) {
            setIsMobileOpen(true);
          }
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {term}
        {/* 데스크톱 hover 팝오버 - 터치 기기가 아닌 경우에만 표시 */}
        {!shouldUseModal && mousePosition && (
          <span
            className="fixed w-[calc(100vw-40px)] max-w-96 p-4 bg-[#ffffff] border-2 border-[#2f2c31] rounded-lg shadow-lg text-xs md:text-sm text-[#232224] font-normal z-50 indent-0 tracking-[-0.03em] md:tracking-normal"
            style={{
              wordBreak: 'keep-all',
              top: `${popoverPosition.top}px`,
              left: `${popoverPosition.left}px`,
            }}
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
            className="relative w-[calc(100vw-40px)] max-w-sm mx-auto p-4 bg-[#ffffff] border-2 border-[#2f2c31] rounded-lg shadow-lg text-[10.5pt] text-[#232224] font-normal z-10 indent-0"
            onClick={(e) => e.stopPropagation()}
            style={{ wordBreak: 'keep-all' }}
          >
            <div className="font-bold text-[#232224] mb-2 tracking-[-0.03em]">{term}</div>
            <div className="tracking-[-0.03em]">{definition}</div>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';

interface HierarchyLevel {
  name: string;
  hanja: string;
  hanjaDescription: string;
  english: string;
  description: string;
  color: string;
  hoverColor: string;
}

const hierarchyData: HierarchyLevel[] = [
  {
    name: '성좌',
    hanja: '聖座',
    hanjaDescription: '성스러울 聖 자리 座',
    english: 'Constellarch',
    description: '신의 유일한 사자이자 창세교 최고 지도자. 그의 이름은커녕 성별, 연령대조차 아는 이가 없으며, 성좌를 알현하는 은혜를 입은 자들은 극소수에 불과하다.',
    color: '#181619',
    hoverColor: '#362f13'
  },
  {
    name: '영사',
    hanja: '靈師',
    hanjaDescription: '영혼 靈 스승 師',
    english: 'Magistrate',
    description: '신앙과 경제력을 갖춘 지배 계층. 자본과 교리를 함께 다루며 사회를 통제한다.',
    color: '#333035',
    hoverColor: '#524b26'
  },
  {
    name: '제소',
    hanja: '濟素',
    hanjaDescription: '건널 濟 본디 素',
    english: 'Tribune',
    description: '군인과 학자 등이 속한 실무 지식 계층. 성좌의 명령을 실행하고 체제를 유지한다.',
    color: '#58535b',
    hoverColor: '#69612f'
  },
  {
    name: '신도',
    hanja: '信徒',
    hanjaDescription: '믿을 信 무리 徒',
    english: 'Devotee',
    description: '창세교의 절대적 신앙 아래 복종하며 살아가는 일반 시민 계층.',
    color: '#807b82',
    hoverColor: '#8a803f'
  }
];

export default function PowerPyramid() {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const [clickedLevel, setClickedLevel] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [popoverCoords, setPopoverCoords] = useState<{ top: number; left: number } | null>(null);
  const [isHoveringPyramid, setIsHoveringPyramid] = useState(false);
  const [isHoveringPopover, setIsHoveringPopover] = useState(false);

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

  // 팝오버 위치 계산 - viewport 기준
  const calculatePopoverPosition = (element: SVGGElement) => {
    const rect = element.getBoundingClientRect();
    const popoverWidth = 330;
    const popoverHeight = 150; // 대략적인 높이
    const margin = 20;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let left = rect.right + margin; // 기본: 요소 오른쪽에 배치
    let top = rect.top + rect.height / 2; // 수직 중앙 정렬

    // 오른쪽 공간이 부족하면 왼쪽에 배치
    if (left + popoverWidth > windowWidth - margin) {
      left = rect.left - popoverWidth - margin;
    }

    // 왼쪽도 부족하면 중앙 배치
    if (left < margin) {
      left = (windowWidth - popoverWidth) / 2;
    }

    // 수직 위치 조정 (화면 밖으로 나가지 않도록)
    if (top + popoverHeight / 2 > windowHeight - margin) {
      top = windowHeight - popoverHeight / 2 - margin;
    }
    if (top - popoverHeight / 2 < margin) {
      top = popoverHeight / 2 + margin;
    }

    setPopoverCoords({ top, left });
  };

  // 모달을 사용할지 팝오버를 사용할지 결정
  const shouldUseModal = isMobile || isTouchDevice;

  // hover 상태 관리 - 둘 다 false일 때만 정리
  useEffect(() => {
    if (!isHoveringPyramid && !isHoveringPopover) {
      const timer = setTimeout(() => {
        setHoveredLevel(null);
        setPopoverCoords(null);
      }, 50); // 약간의 딜레이로 안정성 확보
      return () => clearTimeout(timer);
    }
  }, [isHoveringPyramid, isHoveringPopover]);

  // 모바일/터치 기기 모달 외부 클릭 감지
  useEffect(() => {
    if (clickedLevel !== null && shouldUseModal) {
      const handleClickOutside = () => {
        setClickedLevel(null);
      };
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.body.style.overflow = 'unset';
      };
    }
  }, [clickedLevel, shouldUseModal]);

  return (
    <div className="w-full max-w-xl mx-auto pt-4 pb-12 relative px-4 md:px-0">
      <div className="relative overflow-x-hidden flex justify-center -mx-4 md:mx-0">
        <svg
          viewBox="0 0 400 320"
          className="w-[110%] md:w-[90%] h-auto mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
        {/* 정의: 그라데이션 */}
        <defs>
          {hierarchyData.map((level, index) => (
            <linearGradient key={`gradient-${index}`} id={`levelGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={level.color} stopOpacity="1" />
              <stop offset="50%" stopColor={level.color} stopOpacity="1" />
              <stop offset="100%" stopColor={level.color} stopOpacity="1" />
            </linearGradient>
          ))}
        </defs>

        {/* 전체 삼각형 외곽선 (정삼각형) */}
        <path
          d="M 200 30 L 50 290 L 350 290 Z"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />

        {/* 1층: 성좌 (최상단) */}
        <g
          onMouseEnter={(e) => {
            if (!shouldUseModal) {
              calculatePopoverPosition(e.currentTarget);
              setHoveredLevel(0);
              setIsHoveringPyramid(true);
            }
          }}
          onMouseLeave={() => {
            if (!shouldUseModal) {
              setIsHoveringPyramid(false);
            }
          }}
          onClick={(e) => {
            if (shouldUseModal) {
              e.stopPropagation();
              setClickedLevel(0);
            }
          }}
          className="cursor-help transition-all duration-300"
        >
          <path
            d="M 200 30 L 162.5 95 L 237.5 95 Z"
            fill={hoveredLevel === 0 ? hierarchyData[0].hoverColor : hierarchyData[0].color}
            className="transition-all duration-300"
          />
          <line x1="162.5" y1="95" x2="237.5" y2="95" stroke="white" strokeWidth="6" />
          <text
            x="200"
            y="73"
            textAnchor="middle"
            className="text-[11px] fill-[#fff136] select-none"
            style={{ fontFamily: 'var(--font-pretendard-semibold)' }}
          >
            {hierarchyData[0].name}
          </text>
        </g>

        {/* 2층: 영사 */}
        <g
          onMouseEnter={(e) => {
            if (!shouldUseModal) {
              calculatePopoverPosition(e.currentTarget);
              setHoveredLevel(1);
              setIsHoveringPyramid(true);
            }
          }}
          onMouseLeave={() => {
            if (!shouldUseModal) {
              setIsHoveringPyramid(false);
            }
          }}
          onClick={(e) => {
            if (shouldUseModal) {
              e.stopPropagation();
              setClickedLevel(1);
            }
          }}
          className="cursor-help transition-all duration-300"
        >
          <path
            d="M 162.5 95 L 125 160 L 275 160 L 237.5 95 Z"
            fill={hoveredLevel === 1 ? hierarchyData[1].hoverColor : hierarchyData[1].color}
            className="transition-all duration-300"
          />
          <line x1="125" y1="160" x2="275" y2="160" stroke="white" strokeWidth="6" />
          <text
            x="200"
            y="130"
            textAnchor="middle"
            className="text-[11px] fill-[#fff136] select-none"
            style={{ fontFamily: 'var(--font-pretendard-semibold)' }}
          >
            {hierarchyData[1].name}
          </text>
        </g>

        {/* 3층: 제소 */}
        <g
          onMouseEnter={(e) => {
            if (!shouldUseModal) {
              calculatePopoverPosition(e.currentTarget);
              setHoveredLevel(2);
              setIsHoveringPyramid(true);
            }
          }}
          onMouseLeave={() => {
            if (!shouldUseModal) {
              setIsHoveringPyramid(false);
            }
          }}
          onClick={(e) => {
            if (shouldUseModal) {
              e.stopPropagation();
              setClickedLevel(2);
            }
          }}
          className="cursor-help transition-all duration-300"
        >
          <path
            d="M 125 160 L 87.5 225 L 312.5 225 L 275 160 Z"
            fill={hoveredLevel === 2 ? hierarchyData[2].hoverColor : hierarchyData[2].color}
            className="transition-all duration-300"
          />
          <line x1="87.5" y1="225" x2="312.5" y2="225" stroke="white" strokeWidth="6" />
          <text
            x="200"
            y="195"
            textAnchor="middle"
            className="text-[11px] fill-[#fff136] select-none"
            style={{ fontFamily: 'var(--font-pretendard-semibold)' }}
          >
            {hierarchyData[2].name}
          </text>
        </g>

        {/* 4층: 신도 (최하단) */}
        <g
          onMouseEnter={(e) => {
            if (!shouldUseModal) {
              calculatePopoverPosition(e.currentTarget);
              setHoveredLevel(3);
              setIsHoveringPyramid(true);
            }
          }}
          onMouseLeave={() => {
            if (!shouldUseModal) {
              setIsHoveringPyramid(false);
            }
          }}
          onClick={(e) => {
            if (shouldUseModal) {
              e.stopPropagation();
              setClickedLevel(3);
            }
          }}
          className="cursor-help transition-all duration-300"
        >
          <path
            d="M 87.5 225 L 50 290 L 350 290 L 312.5 225 Z"
            fill={hoveredLevel === 3 ? hierarchyData[3].hoverColor : hierarchyData[3].color}
            className="transition-all duration-300"
          />
          <text
            x="200"
            y="261"
            textAnchor="middle"
            className="text-[11px] fill-[#fff136] select-none"
            style={{ fontFamily: 'var(--font-pretendard-semibold)' }}
          >
            {hierarchyData[3].name}
          </text>
        </g>
        </svg>

        {/* 데스크톱 호버 팝오버 - 터치 기기가 아닌 경우에만 표시 */}
        {hoveredLevel !== null && !shouldUseModal && popoverCoords && (
          <div
            className="fixed p-4 rounded-lg border-2 border-[#2f2c31] bg-[#ffffff] shadow-lg z-50"
            style={{
              width: '330px',
              left: `${popoverCoords.left}px`,
              top: `${popoverCoords.top}px`,
              transform: 'translateY(-50%)',
              wordBreak: 'keep-all'
            }}
            onMouseEnter={() => setIsHoveringPopover(true)}
            onMouseLeave={() => setIsHoveringPopover(false)}
          >
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-bold text-lg text-[#232224]">
                  {hierarchyData[hoveredLevel].name}
                </span>
                <span className="font-baskervville text-sm text-[#232224]">
                  {hierarchyData[hoveredLevel].english}
                </span>
              </div>

              <p className="text-xs text-[#232224] tracking-[-0.03em] md:tracking-normal">
                {hierarchyData[hoveredLevel].hanjaDescription}
              </p>

              <p className="text-sm text-[#232224] leading-relaxed pt-1 tracking-[-0.03em] md:tracking-normal">
                {hierarchyData[hoveredLevel].description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 모바일/터치 기기 중앙 모달 */}
      {clickedLevel !== null && shouldUseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* 배경 오버레이 */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setClickedLevel(null)}
          />
          {/* 각주 박스 */}
          <div
            className="relative w-[calc(100vw-40px)] max-w-sm mx-auto p-4 bg-[#ffffff] border-2 border-[#2f2c31] rounded-lg shadow-lg z-10"
            onClick={(e) => e.stopPropagation()}
            style={{ wordBreak: 'keep-all' }}
          >
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-bold text-lg text-[#232224]">
                  {hierarchyData[clickedLevel].name}
                </span>
                <span className="font-baskervville text-sm text-[#232224]">
                  {hierarchyData[clickedLevel].english}
                </span>
              </div>

              <p className="text-xs text-[#232224] tracking-[-0.03em]">
                {hierarchyData[clickedLevel].hanjaDescription}
              </p>

              <p className="text-sm text-[#232224] leading-relaxed pt-1 tracking-[-0.03em]">
                {hierarchyData[clickedLevel].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

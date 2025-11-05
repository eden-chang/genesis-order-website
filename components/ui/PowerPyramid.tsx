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
    color: '#d68c15',
    hoverColor: '#e69c25'
  },
  {
    name: '영사',
    hanja: '靈師',
    hanjaDescription: '영혼 靈 스승 師',
    english: 'Magistrate',
    description: '신앙과 경제력을 갖춘 지배 계층. 자본과 교리를 함께 다루며 사회를 통제한다.',
    color: '#e5a733',
    hoverColor: '#f5b743'
  },
  {
    name: '제소',
    hanja: '濟素',
    hanjaDescription: '건널 濟 본디 素',
    english: 'Tribune',
    description: '군인과 학자 등이 속한 실무 지식 계층. 성좌의 명령을 실행하고 체제를 유지한다.',
    color: '#f5bf48',
    hoverColor: '#ffcf58'
  },
  {
    name: '신도',
    hanja: '信徒',
    hanjaDescription: '믿을 信 무리 徒',
    english: 'Devotee',
    description: '창세교의 절대적 신앙 아래 복종하며 살아가는 일반 시민 계층.',
    color: '#f9d06d',
    hoverColor: '#ffe07d'
  }
];

export default function PowerPyramid() {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const [clickedLevel, setClickedLevel] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState<'left' | 'right' | 'center'>('left');

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
    const popoverWidth = 330; // 팝오버 너비
    const margin = 20;
    const windowWidth = window.innerWidth;

    // SVG 컨테이너의 대략적인 중앙 위치 (65% 지점)
    const popoverLeft = windowWidth * 0.65;
    const spaceOnRight = windowWidth - popoverLeft;

    // 오른쪽 공간이 충분한 경우
    if (spaceOnRight >= popoverWidth + margin) {
      setPopoverPosition('left');
    }
    // 왼쪽으로 배치
    else if (popoverLeft >= popoverWidth + margin) {
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
    <div className="w-full max-w-xl mx-auto py-12 relative px-4 md:px-0">
      <h2 className="text-xl font-bold mb-8 text-center">
        <span className="text-[#e5a918] bg-[#fff2cc] px-2 py-1 rounded inline-block">
          <span className="font-heading">권력 구조</span>
        </span>
      </h2>

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
              <stop offset="0%" stopColor={level.color} stopOpacity="0.9" />
              <stop offset="50%" stopColor={level.hoverColor} stopOpacity="0.95" />
              <stop offset="100%" stopColor={level.color} stopOpacity="0.9" />
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
          onMouseEnter={() => {
            if (!shouldUseModal) {
              calculatePopoverPosition();
              setHoveredLevel(0);
            }
          }}
          onMouseLeave={() => !shouldUseModal && setHoveredLevel(null)}
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
            fill={hoveredLevel === 0 ? hierarchyData[0].hoverColor : `url(#levelGradient-0)`}
            className="transition-all duration-300"
            opacity={hoveredLevel === 0 ? 1 : 0.9}
          />
          <line x1="162.5" y1="95" x2="237.5" y2="95" stroke="white" strokeWidth="6" />
          <text
            x="200"
            y="73"
            textAnchor="middle"
            className="font-heading font-bold text-[11px] fill-[#5a3200] select-none"
          >
            {hierarchyData[0].name}
          </text>
          {/* 점선 밑줄 */}
          <line
            x1="189"
            y1="75"
            x2="211"
            y2="75"
            stroke="#5a3200"
            strokeWidth="0.5"
            strokeDasharray="1,1.5"
          />
        </g>

        {/* 2층: 영사 */}
        <g
          onMouseEnter={() => {
            if (!shouldUseModal) {
              calculatePopoverPosition();
              setHoveredLevel(1);
            }
          }}
          onMouseLeave={() => !shouldUseModal && setHoveredLevel(null)}
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
            fill={hoveredLevel === 1 ? hierarchyData[1].hoverColor : `url(#levelGradient-1)`}
            className="transition-all duration-300"
            opacity={hoveredLevel === 1 ? 1 : 0.9}
          />
          <line x1="125" y1="160" x2="275" y2="160" stroke="white" strokeWidth="6" />
          <text
            x="200"
            y="130"
            textAnchor="middle"
            className="font-heading font-bold text-[11px] fill-[#5a3200] select-none"
          >
            {hierarchyData[1].name}
          </text>
          {/* 점선 밑줄 */}
          <line
            x1="189"
            y1="132"
            x2="211"
            y2="132"
            stroke="#5a3200"
            strokeWidth="0.5"
            strokeDasharray="1,1.5"
          />
        </g>

        {/* 3층: 제소 */}
        <g
          onMouseEnter={() => {
            if (!shouldUseModal) {
              calculatePopoverPosition();
              setHoveredLevel(2);
            }
          }}
          onMouseLeave={() => !shouldUseModal && setHoveredLevel(null)}
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
            fill={hoveredLevel === 2 ? hierarchyData[2].hoverColor : `url(#levelGradient-2)`}
            className="transition-all duration-300"
            opacity={hoveredLevel === 2 ? 1 : 0.9}
          />
          <line x1="87.5" y1="225" x2="312.5" y2="225" stroke="white" strokeWidth="6" />
          <text
            x="200"
            y="195"
            textAnchor="middle"
            className="font-heading font-bold text-[11px] fill-[#5a3200] select-none"
          >
            {hierarchyData[2].name}
          </text>
          {/* 점선 밑줄 */}
          <line
            x1="189"
            y1="197"
            x2="211"
            y2="197"
            stroke="#5a3200"
            strokeWidth="0.5"
            strokeDasharray="1,1.5"
          />
        </g>

        {/* 4층: 신도 (최하단) */}
        <g
          onMouseEnter={() => {
            if (!shouldUseModal) {
              calculatePopoverPosition();
              setHoveredLevel(3);
            }
          }}
          onMouseLeave={() => !shouldUseModal && setHoveredLevel(null)}
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
            fill={hoveredLevel === 3 ? hierarchyData[3].hoverColor : `url(#levelGradient-3)`}
            className="transition-all duration-300"
            opacity={hoveredLevel === 3 ? 1 : 0.9}
          />
          <text
            x="200"
            y="261"
            textAnchor="middle"
            className="font-heading font-bold text-[11px] fill-[#5a3200] select-none"
          >
            {hierarchyData[3].name}
          </text>
          {/* 점선 밑줄 */}
          <line
            x1="189"
            y1="263"
            x2="211"
            y2="263"
            stroke="#5a3200"
            strokeWidth="0.5"
            strokeDasharray="1,1.5"
          />
        </g>
        </svg>

        {/* 데스크톱 호버 팝오버 - 터치 기기가 아닌 경우에만 표시 */}
        {hoveredLevel !== null && !shouldUseModal && (
          <div
            className="absolute p-4 rounded-lg border-2 border-[#e4a408] bg-[#fffdf6] shadow-lg z-50"
            style={{
              width: '330px',
              left: popoverPosition === 'left' ? '65%' :
                    popoverPosition === 'right' ? 'auto' :
                    '50%',
              right: popoverPosition === 'right' ? '5%' : 'auto',
              top: hoveredLevel === 0 ? 'calc(73 / 320 * 100%)' :
                   hoveredLevel === 1 ? 'calc(130 / 320 * 100%)' :
                   hoveredLevel === 2 ? 'calc(195 / 320 * 100%)' :
                   'calc(261 / 320 * 100%)',
              transform: popoverPosition === 'center' ? 'translate(-50%, -50%)' : 'translateY(-50%)',
              wordBreak: 'keep-all'
            }}
          >
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-bold text-lg text-[#d4990a]">
                  {hierarchyData[hoveredLevel].name}
                </span>
                <span className="font-baskervville text-sm text-[#e4a408]">
                  {hierarchyData[hoveredLevel].english}
                </span>
              </div>

              <p className="text-xs text-[#c1a777] tracking-[-0.03em] md:tracking-normal">
                {hierarchyData[hoveredLevel].hanjaDescription}
              </p>

              <p className="text-sm text-[#2f2c31] leading-relaxed pt-1 tracking-[-0.03em] md:tracking-normal">
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
            className="relative w-[calc(100vw-40px)] max-w-sm mx-auto p-4 bg-[#fffdf6] border-2 border-[#e4a408] rounded-lg shadow-lg z-10"
            onClick={(e) => e.stopPropagation()}
            style={{ wordBreak: 'keep-all' }}
          >
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-bold text-lg text-[#d4990a]">
                  {hierarchyData[clickedLevel].name}
                </span>
                <span className="font-baskervville text-sm text-[#e4a408]">
                  {hierarchyData[clickedLevel].english}
                </span>
              </div>

              <p className="text-xs text-[#c1a777] tracking-[-0.03em]">
                {hierarchyData[clickedLevel].hanjaDescription}
              </p>

              <p className="text-sm text-[#2f2c31] leading-relaxed pt-1 tracking-[-0.03em]">
                {hierarchyData[clickedLevel].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

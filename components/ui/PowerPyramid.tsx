'use client';

import { useState } from 'react';

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

  return (
    <div className="w-full max-w-xl mx-auto py-12 relative">
      <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">
        <span className="text-[#e5a918] bg-[#fff2cc] px-2 py-1 rounded inline-block">
          <span className="font-heading">권력 구조</span>
        </span>
      </h2>

      <div className="relative">
        <svg
          viewBox="0 0 400 320"
          className="w-[90%] h-auto mx-auto"
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
          onMouseEnter={() => setHoveredLevel(0)}
          onMouseLeave={() => setHoveredLevel(null)}
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
        </g>

        {/* 2층: 영사 */}
        <g
          onMouseEnter={() => setHoveredLevel(1)}
          onMouseLeave={() => setHoveredLevel(null)}
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
        </g>

        {/* 3층: 제소 */}
        <g
          onMouseEnter={() => setHoveredLevel(2)}
          onMouseLeave={() => setHoveredLevel(null)}
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
        </g>

        {/* 4층: 신도 (최하단) */}
        <g
          onMouseEnter={() => setHoveredLevel(3)}
          onMouseLeave={() => setHoveredLevel(null)}
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
        </g>
        </svg>

        {/* 호버 팝오버 */}
        {hoveredLevel !== null && (
          <div
            className="absolute p-4 rounded-lg border-2 border-[#e4a408] bg-[#fffdf6] shadow-lg z-50"
            style={{
              width: '330px',
              left: '65%',
              top: hoveredLevel === 0 ? 'calc(73 / 320 * 100%)' :
                   hoveredLevel === 1 ? 'calc(130 / 320 * 100%)' :
                   hoveredLevel === 2 ? 'calc(195 / 320 * 100%)' :
                   'calc(261 / 320 * 100%)',
              transform: 'translateY(-50%)'
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

              <p className="text-xs text-[#c1a777]">
                {hierarchyData[hoveredLevel].hanjaDescription}
              </p>

              <p className="text-sm text-[#0b0b0b] leading-relaxed pt-1">
                {hierarchyData[hoveredLevel].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

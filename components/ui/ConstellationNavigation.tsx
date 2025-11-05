'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';

interface Page {
  title: string;
  subtitle: string;
  href: string;
  category: string;
}

interface StarPosition {
  x: number;
  y: number;
}

interface ConstellationNavigationProps {
  pages: Page[];
}

interface Connection {
  from: number;
  to: number;
}

export default function ConstellationNavigation({ pages }: ConstellationNavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 데스크톱용 별 위치 (큰곰자리 느낌의 자연스러운 배치)
  const desktopPositions: StarPosition[] = [
    { x: 120, y: 100 },  // Notice (왼쪽 위)
    { x: 280, y: 150 },  // World (중앙 위)
    { x: 480, y: 120 },  // System (오른쪽 위)
    { x: 620, y: 260 },  // Character (오른쪽 아래)
    { x: 400, y: 240 },  // Application (중앙 아래)
    { x: 150, y: 300 },  // Questions (왼쪽 아래)
  ];

  // 모바일용 별 위치 (화면 크기에 맞게 조정)
  const mobilePositions: StarPosition[] = [
    { x: 60, y: 70 },    // Notice
    { x: 180, y: 100 },  // World
    { x: 300, y: 80 },   // System
    { x: 360, y: 180 },  // Character
    { x: 240, y: 120 },  // Application
    { x: 80, y: 200 },   // Questions
  ];

  const starPositions = isMobile ? mobilePositions : desktopPositions;
  const viewBox = isMobile ? "0 0 450 320" : "0 0 800 500";

  // 유클리드 거리 계산
  const calculateDistance = (pos1: StarPosition, pos2: StarPosition): number => {
    const dx = pos2.x - pos1.x;
    const dy = pos2.y - pos1.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // 가까운 별끼리 연결하는 로직
  const connections = useMemo<Connection[]>(() => {
    const maxDistance = isMobile ? 120 : 200; // 연결 임계값
    const conns: Connection[] = [];
    const added = new Set<string>();

    for (let i = 0; i < starPositions.length; i++) {
      for (let j = i + 1; j < starPositions.length; j++) {
        const distance = calculateDistance(starPositions[i], starPositions[j]);
        if (distance <= maxDistance) {
          const key = `${i}-${j}`;
          if (!added.has(key)) {
            conns.push({ from: i, to: j });
            added.add(key);
          }
        }
      }
    }

    return conns;
  }, [starPositions, isMobile]);

  // 라벨 위치 계산 (별 위쪽에 표시, 화면 밖으로 나가지 않도록)
  const getLabelPosition = (index: number): { 
    x: number; 
    y: number; 
    anchor: 'start' | 'middle' | 'end';
    width: number;
  } => {
    const pos = starPositions[index];
    const page = pages[index];
    const labelY = pos.y - 35;
    
    // 텍스트 길이에 따른 너비 추정 (대략적으로)
    const titleWidth = page.title.length * (isMobile ? 6 : 7);
    const subtitleWidth = page.subtitle.length * (isMobile ? 5 : 6);
    const estimatedWidth = Math.max(titleWidth, subtitleWidth) + 20;
    
    // 화면 경계 확인
    const viewBoxWidth = isMobile ? 450 : 800;
    const margin = 10;
    
    if (pos.x < estimatedWidth / 2 + margin) {
      return { x: pos.x, y: labelY, anchor: 'start', width: estimatedWidth };
    } else if (pos.x > viewBoxWidth - estimatedWidth / 2 - margin) {
      return { x: pos.x, y: labelY, anchor: 'end', width: estimatedWidth };
    }
    return { x: pos.x, y: labelY, anchor: 'middle', width: estimatedWidth };
  };

  return (
    <div className="relative w-full flex justify-center">
      <svg
        viewBox={viewBox}
        className="w-full h-auto max-h-[500px] md:max-h-[600px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 연결선 렌더링 */}
        {connections.map((conn, idx) => {
          const from = starPositions[conn.from];
          const to = starPositions[conn.to];
          return (
            <line
              key={`conn-${idx}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#e5a918"
              strokeWidth={isMobile ? 1 : 1.5}
              strokeOpacity="0.3"
              className="animate-fade-in"
            />
          );
        })}

        {/* 별(원) 요소 렌더링 */}
        {pages.map((page, index) => {
          const pos = starPositions[index];
          const labelPos = getLabelPosition(index);
          const isHovered = hoveredIndex === index;

          return (
            <g key={page.href}>
              {/* 클릭 가능한 영역 (터치 최적화를 위해 별보다 크게) */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isMobile ? 20 : 18}
                fill="transparent"
                className="cursor-pointer"
                onClick={() => router.push(page.href)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              
              {/* 별 (원) */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isMobile ? 6 : 8}
                fill="#e5a918"
                stroke="white"
                strokeWidth={isMobile ? 1.5 : 2}
                className="cursor-pointer transition-all duration-200"
                style={{ fill: isHovered ? '#f5b743' : '#e5a918' }}
              />

              {/* 호버 시 라벨 표시 */}
              {isHovered && (
                <g className="animate-fade-in" pointerEvents="none">
                  {/* 라벨 배경 */}
                  <rect
                    x={labelPos.x - (labelPos.anchor === 'middle' ? labelPos.width / 2 : labelPos.anchor === 'end' ? labelPos.width : 0)}
                    y={labelPos.y - 18}
                    width={labelPos.width}
                    height={36}
                    rx={8}
                    fill="rgba(255, 255, 255, 0.95)"
                    stroke="rgba(229, 169, 24, 0.2)"
                    strokeWidth={1}
                    className="drop-shadow-lg"
                  />
                  
                  {/* 라벨 텍스트 */}
                  <text
                    x={labelPos.x}
                    y={labelPos.y - 2}
                    textAnchor={labelPos.anchor}
                    fontSize={isMobile ? 12 : 14}
                    fontWeight="bold"
                    fill="#2f2c31"
                    style={{ fontFamily: 'var(--font-noto-serif-kr)' }}
                  >
                    {page.title}
                  </text>
                  <text
                    x={labelPos.x}
                    y={labelPos.y + 12}
                    textAnchor={labelPos.anchor}
                    fontSize={isMobile ? 10 : 12}
                    fill="#55534c"
                    style={{ fontFamily: 'var(--font-noto-serif-kr)' }}
                  >
                    {page.subtitle}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}


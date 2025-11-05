'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';

interface Page {
  title: string;
  subtitle: string;
  href: string;
  category: string;
}

interface Point {
  x: number;
  y: number;
}

interface ConstellationNavigationProps {
  pages: Page[];
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

  // 페이지 순서 재정렬 (시계 방향: 12시부터)
  // NOTICE(12시), SYSTEM(2시), QNA(4시), APPLY(6시), CHARACTER(8시), WORLD(10시)
  const orderedPages = useMemo(() => {
    const pageMap = new Map(pages.map(p => [p.title, p]));
    return [
      pageMap.get('Notice') || pages[0],      // 12시
      pageMap.get('System') || pages[2],     // 2시
      pageMap.get('Questions') || pages[5],  // 4시
      pageMap.get('Application') || pages[4], // 6시
      pageMap.get('Character') || pages[3],  // 8시
      pageMap.get('World') || pages[1],      // 10시
    ];
  }, [pages]);

  // 정삼각형 좌표 계산 함수
  const calculateTrianglePoints = useMemo(() => {
    // 데스크톱/모바일에 따른 설정
    const centerX = isMobile ? 225 : 400;
    const centerY = isMobile ? 250 : 350;
    const outerRadius = isMobile ? 140 : 220; // 바깥 삼각형 반지름
    
    // 정삼각형 각도 계산
    // 상단 꼭짓점: NOTICE (-90도)
    // 하단 좌측: CHARACTER (150도)
    // 하단 우측: QUESTIONS (30도)
    const noticeAngle = -Math.PI / 2; // 12시 (상단)
    const characterAngle = 5 * Math.PI / 6; // 150도 (하단 좌측)
    const questionsAngle = Math.PI / 6; // 30도 (하단 우측)
    
    // 바깥 정삼각형의 세 꼭짓점
    const notice: Point = {
      x: centerX + outerRadius * Math.cos(noticeAngle),
      y: centerY + outerRadius * Math.sin(noticeAngle)
    };
    const character: Point = {
      x: centerX + outerRadius * Math.cos(characterAngle),
      y: centerY + outerRadius * Math.sin(characterAngle)
    };
    const questions: Point = {
      x: centerX + outerRadius * Math.cos(questionsAngle),
      y: centerY + outerRadius * Math.sin(questionsAngle)
    };
    
    const outerTriangle: Point[] = [notice, character, questions];
    
    // 안쪽 뒤집어진 정삼각형의 꼭짓점 (바깥 삼각형의 변 중점)
    const world: Point = {
      x: (notice.x + character.x) / 2,
      y: (notice.y + character.y) / 2
    };
    const system: Point = {
      x: (notice.x + questions.x) / 2,
      y: (notice.y + questions.y) / 2
    };
    const application: Point = {
      x: (character.x + questions.x) / 2,
      y: (character.y + questions.y) / 2
    };
    
    const innerTriangle: Point[] = [world, system, application];
    
    // 페이지 위치 배열 (orderedPages 순서대로)
    // NOTICE, SYSTEM, QNA, APPLY, CHARACTER, WORLD
    const pagePositions: Point[] = [
      notice,      // NOTICE (0)
      system,      // SYSTEM (1)
      questions,   // QNA (2)
      application, // APPLY (3)
      character,   // CHARACTER (4)
      world,       // WORLD (5)
    ];
    
    return {
      outerTriangle,
      innerTriangle,
      pagePositions,
      viewBox: isMobile ? "0 0 450 500" : "0 0 800 700"
    };
  }, [isMobile]);

  // 라벨 위치 계산
  const getLabelPosition = (index: number): { 
    x: number; 
    y: number; 
    textAnchor: 'start' | 'middle' | 'end';
  } => {
    const pos = calculateTrianglePoints.pagePositions[index];
    const textOffset = isMobile ? 30 : 40;
    
    // 각 페이지 위치에 따른 텍스트 위치
    const labelPositions = [
      { offsetX: 0, offsetY: -textOffset, textAnchor: 'middle' as const }, // NOTICE (상단)
      { offsetX: textOffset, offsetY: 0, textAnchor: 'start' as const }, // SYSTEM (우측)
      { offsetX: textOffset, offsetY: 0, textAnchor: 'start' as const }, // QNA (우측)
      { offsetX: 0, offsetY: textOffset, textAnchor: 'middle' as const }, // APPLY (하단)
      { offsetX: -textOffset, offsetY: 0, textAnchor: 'end' as const }, // CHARACTER (좌측)
      { offsetX: -textOffset, offsetY: 0, textAnchor: 'end' as const }, // WORLD (좌측)
    ];
    
    const position = labelPositions[index];
    
    return {
      x: pos.x + position.offsetX,
      y: pos.y + position.offsetY,
      textAnchor: position.textAnchor,
    };
  };

  return (
    <div className="relative w-full flex justify-center">
      <svg
        viewBox={calculateTrianglePoints.viewBox}
        className="w-full h-auto max-h-[500px] md:max-h-[600px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 바깥 정삼각형 (밑변이 아래) */}
        <path
          d={`M ${calculateTrianglePoints.outerTriangle[0].x} ${calculateTrianglePoints.outerTriangle[0].y} 
              L ${calculateTrianglePoints.outerTriangle[1].x} ${calculateTrianglePoints.outerTriangle[1].y} 
              L ${calculateTrianglePoints.outerTriangle[2].x} ${calculateTrianglePoints.outerTriangle[2].y} Z`}
          fill="none"
          stroke="#e5a918"
          strokeWidth={isMobile ? 1.5 : 2}
          strokeOpacity="0.3"
        />

        {/* 안쪽 뒤집어진 정삼각형 (밑변이 위) */}
        <path
          d={`M ${calculateTrianglePoints.innerTriangle[0].x} ${calculateTrianglePoints.innerTriangle[0].y} 
              L ${calculateTrianglePoints.innerTriangle[1].x} ${calculateTrianglePoints.innerTriangle[1].y} 
              L ${calculateTrianglePoints.innerTriangle[2].x} ${calculateTrianglePoints.innerTriangle[2].y} Z`}
          fill="none"
          stroke="#e5a918"
          strokeWidth={isMobile ? 1.5 : 2}
          strokeOpacity="0.3"
        />

        {/* 페이지 점(원) 및 텍스트 렌더링 */}
        {orderedPages.map((page, index) => {
          const pos = calculateTrianglePoints.pagePositions[index];
          const labelPos = getLabelPosition(index);
          const isHovered = hoveredIndex === index;

          return (
            <g key={page.href}>
              {/* 클릭 가능한 영역 (터치 최적화를 위해 점보다 크게) */}
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
              
              {/* 점 (원) */}
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

              {/* 텍스트 (항상 표시) */}
              <g pointerEvents="none">
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor={labelPos.textAnchor}
                  fontSize={isMobile ? 12 : 14}
                  fontWeight="bold"
                  fill="#2f2c31"
                  className="cursor-pointer transition-all duration-200"
                  style={{ 
                    fontFamily: 'var(--font-noto-serif-kr)',
                    fill: isHovered ? '#e5a918' : '#2f2c31'
                  }}
                >
                  {page.title.toUpperCase()}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}


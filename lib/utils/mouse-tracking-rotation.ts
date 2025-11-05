/**
 * 마우스 커서 위치에 따라 이미지를 회전시키는 로직
 * 나중에 눈동자가 커서를 따라가는 효과에 사용할 수 있음
 */

import { useEffect, RefObject } from 'react';

export interface MouseTrackingRotationConfig {
  isMobile: boolean;
  heroSectionRef: RefObject<HTMLElement>;
  imageRef: RefObject<HTMLDivElement>;
  setRotation: (rotation: number) => void;
}

export function useMouseTrackingRotation({
  isMobile,
  heroSectionRef,
  imageRef,
  setRotation,
}: MouseTrackingRotationConfig) {
  // 마우스 위치에 따른 이미지 회전 (PC만)
  useEffect(() => {
    if (isMobile || !heroSectionRef.current || !imageRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const image = imageRef.current;
      if (!image) return;

      const imageRect = image.getBoundingClientRect();
      
      // 이미지의 실제 중앙점 계산
      const centerX = imageRect.left + imageRect.width / 2;
      const centerY = imageRect.top + imageRect.height / 2;
      
      // 마우스 위치
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // 각도 계산 (라디안)
      const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
      
      // 도(degree)로 변환
      const degrees = (angle * 180) / Math.PI;
      
      setRotation(degrees);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, heroSectionRef, imageRef, setRotation]);
}

/**
 * 사용 예시:
 * 
 * const [rotation, setRotation] = useState(0);
 * const heroSectionRef = useRef<HTMLElement>(null);
 * const imageRef = useRef<HTMLDivElement>(null);
 * const [isMobile, setIsMobile] = useState(false);
 * 
 * useMouseTrackingRotation({
 *   isMobile,
 *   heroSectionRef,
 *   imageRef,
 *   setRotation,
 * });
 * 
 * // 이미지에 적용
 * <div style={{ transform: `rotate(${rotation}deg)` }}>
 *   ...
 * </div>
 */


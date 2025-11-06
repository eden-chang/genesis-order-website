'use client';

import { useEffect, useState } from 'react';
import { useAudio } from '@/context/AudioContext';

export default function BGMController() {
  const { isPlaying, togglePlay, initAudio, isReady } = useAudio();
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // 사용자의 첫 클릭/터치 감지
    const handleFirstInteraction = () => {
      if (!hasInteracted && isReady) {
        initAudio();
        setHasInteracted(true);
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted, isReady, initAudio]);

  if (!isReady) return null;

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#e4a408] hover:bg-[#c28e00] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
      aria-label={isPlaying ? 'BGM 정지' : 'BGM 재생'}
    >
      {isPlaying ? (
        // 정지 아이콘
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
      ) : (
        // 재생 아이콘
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6 ml-1"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}

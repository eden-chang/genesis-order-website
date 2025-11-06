'use client';

import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  initAudio: () => void;
  isReady: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 오디오 인스턴스 생성
    const audio = new Audio('/audio/bgm.mp3');
    audio.loop = true;
    audio.volume = 0.3; // 기본 볼륨 30%
    audioRef.current = audio;

    // 오디오 로드 완료 시
    audio.addEventListener('canplay', () => {
      setIsReady(true);
    });

    // 에러 처리
    audio.addEventListener('error', (e) => {
      console.error('BGM 로드 실패:', e);
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const initAudio = async () => {
    // 브라우저 자동재생 정책 대응 - 사용자 상호작용 후 호출
    if (audioRef.current && !isPlaying) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('BGM 재생 실패:', error);
      }
    }
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('BGM 재생/정지 실패:', error);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, initAudio, isReady }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}

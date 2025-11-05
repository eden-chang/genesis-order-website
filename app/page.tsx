'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollDownButton from "@/components/ui/ScrollDownButton";
import ConstellationNavigation from "@/components/ui/ConstellationNavigation";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pages = [
    {
      title: "Notice",
      subtitle: "공지사항",
      href: "/notice",
      category: "Announcements"
    },
    {
      title: "World",
      subtitle: "세계관",
      href: "/world",
      category: "Lore"
    },
    {
      title: "System",
      subtitle: "시스템",
      href: "/system",
      category: "Mechanics"
    },
    {
      title: "Character",
      subtitle: "캐릭터 가이드",
      href: "/character",
      category: "Guide"
    },
    {
      title: "Application",
      subtitle: "신청서 양식",
      href: "/application",
      category: "Form"
    },
    {
      title: "Questions",
      subtitle: "질의응답",
      href: "/questions",
      category: "Q&A"
    },
  ];

  return (
    <>
      <Header />

      <main className="mt-[56px]">
        {/* Hero Section */}
        <section 
          className="relative h-[calc(100vh-56px)] min-h-[600px] w-full overflow-hidden" 
          style={{ backgroundColor: '#fff136' }}
        >
          {/* PC Layer - hero_beta_circle (중앙 배치, 자동 회전) */}
          <div 
            className="absolute left-1/2 hidden md:block"
            style={{
              transform: 'translateX(-50%) translateY(-40px) scale(0.4)',
              transformOrigin: 'center center',
              top: '70px',
              width: '100%',
              height: 'calc(100vh - 56px - 70px)',
              maxWidth: '100vw',
            }}
          >
            <div
              className="relative w-full h-full"
              style={{
                animation: 'rotateCounterClockwise 20s linear infinite',
                transformOrigin: 'center center',
              }}
            >
              <Image
                src="/images/hero_beta_circle.png"
                alt="Genesis Order Hero Beta Circle"
                fill
                className="object-contain"
                priority
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

          {/* Mobile Layer - hero_beta_circle (폭 맞춤, 자동 회전) */}
          <div 
            className="absolute left-1/2 top-1/2 md:hidden"
            style={{
              transform: 'translateX(-50%) translateY(calc(-50% - 10px)) scale(0.572)',
              transformOrigin: 'center center',
              width: '100%',
              height: 'calc(100vh - 56px)',
              maxWidth: '100vw',
            }}
          >
            <div
              className="relative w-full h-full"
              style={{
                animation: 'rotateCounterClockwise 20s linear infinite',
                transformOrigin: 'center center',
              }}
            >
              <Image
                src="/images/hero_beta_circle_mobile.png"
                alt="Genesis Order Hero Beta Circle Mobile"
                fill
                className="object-contain"
                priority
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

        </section>

        {/* Spacing Section */}
        <div className="h-[120px]"></div>

        {/* Story Section */}
        <section className="py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-2 text-[#2f2c31] leading-normal tracking-[-0.03em] md:tracking-[-0.01em]" style={{ fontFamily: 'var(--font-noto-serif-kr)', wordBreak: 'keep-all' }}>
              <p>제정일치 국가 &apos;길리아드&apos;가 되어 세계를 삼킨 미국과 소련을 비롯한 공산주의 진영 간의 냉전이 진행되는 시대</p>
              <br />
              <p>1965년, 알래스카 지역을 관리하는 어느 영사가 정화 축일을 기념하여 자선 음악회를 개최한다</p>
              <p>이곳에 모여든 이들은 약속의 땅을 비롯한 창세교 신도와 소련 및 공산주의 진영의 인물, 그리고 중립적인 북유럽까지</p>
              <p>모두가 한데 어울려 즐기고 있던 중 저택에서 살인 사건이 발생한다</p>
              <br />
              <p>범인은 누구인가?</p>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <div className="h-[120px]"></div>

        {/* Wordmark Section */}
        <section className="px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative w-full max-w-md mx-auto mb-8">
              <Image
                src="/images/short_wordmark.png"
                alt="Genesis Order Wordmark"
                width={600}
                height={200}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
            {/* 짧은 설명 섹션 */}
            <div className="space-y-0 text-[#2f2c31] tracking-[-0.03em] md:tracking-[-0.01em]" style={{ fontFamily: 'var(--font-noto-serif-kr)', wordBreak: 'keep-all', whiteSpace: 'pre-wrap', lineHeight: '1.3' }}>
              <p className="text-sm md:text-base">마스토돈 자체서버   성인   4444   15D</p>
              <p className="text-sm md:text-base">ALL GC   로그 금지   명화 인장   조사, 추리</p>
              <p className="text-sm md:text-base">창작 냉전   대체 역사   제정일치 미국과 공산주의 소련</p>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <div className="h-[120px]"></div>

        {/* Schedule Timeline */}
        <section className="py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative py-4">
              {/* 타임라인 세로선 - 모바일: 왼쪽, 데스크톱: 중앙 */}
              <div className="absolute left-4 md:left-1/2 -top-[35px] -bottom-[35px] w-0.5 opacity-40 md:-translate-x-1/2" style={{ background: 'linear-gradient(to bottom, white 0%, #e5a918 10%, #e5a918 90%, white 100%)' }}></div>

              <div className="space-y-[64px]">
                {[
                  { date: "12/11(목) 00:00", text: "가산점 신청서 접수 시작" },
                  { date: "12/13(토) 23:59", text: "가산점 신청서 접수 마감" },
                  { date: "12/14(일) 00:00", text: "일반 신청서 접수 시작" },
                  { date: "12/18(목) 23:59", text: "일반 신청서 접수 마감" },
                  { date: "12/20(토) 22:00", text: "개장 및 인트로" },
                  { date: "01/03(금) 22:00", text: "아웃트로" },
                ].map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div key={index} className="relative flex items-center justify-center group">
                      {/* 타임라인 마커 - 모바일: 왼쪽, 데스크톱: 중앙 */}
                      <div className="absolute left-[11px] md:left-1/2 flex items-center justify-center w-3 md:w-3 md:h-3 md:-translate-x-1/2 pointer-events-none">
                        <div className="relative w-3 h-3 rounded-full bg-[#e5a918] border-2 border-white group-hover:drop-shadow-[0_0_4px_rgba(229,169,24,0.6)] transition-all duration-200"></div>
                      </div>

                      {/* 카드 스타일 컨텐츠 - 모바일: 오른쪽 고정, 데스크톱: 좌우 교차 */}
                      <div className={`absolute bg-transparent border border-transparent rounded-lg transition-all duration-200 w-[calc(100%-4rem)] md:w-[200px] left-4 pl-8 pr-4 pt-4 pb-4 ${isLeft ? 'md:right-1/2 md:left-auto md:text-right md:pr-4 md:pl-4 md:mr-[5px]' : 'md:left-1/2 md:pl-4 md:pr-4 md:ml-[5px]'}`}>
                        <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                          <div className="font-bold text-[#e5a918] text-xs transition-all duration-200 group-hover:drop-shadow-[0_0_4px_rgba(229,169,24,0.6)]">
                            {item.date}
                          </div>
                        </div>
                        <div className="text-[#2f2c31] leading-normal transition-all duration-200 group-hover:drop-shadow-[0_0_4px_rgba(229,169,24,0.6)] tracking-[-0.03em] md:tracking-normal" style={{ wordBreak: 'keep-all' }}>
                          {item.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <div className="h-[40px]"></div>

        {/* Info Section */}
        <section className="py-16 md:py-28 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="section-title mb-4">Explore</h2>
              <p className="text-lg text-[#423e43]" style={{ fontFamily: 'var(--font-noto-serif-kr)' }}>통합 문서</p>
            </div>

            {/* Constellation Navigation */}
            <ConstellationNavigation pages={pages} />
          </div>
        </section>
      </main>

      <Footer />
      <ScrollDownButton />
    </>
  );
}

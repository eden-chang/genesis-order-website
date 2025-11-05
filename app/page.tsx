'use client';

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollDownButton from "@/components/ui/ScrollDownButton";

export default function Home() {
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
        <section className="relative h-[calc(100vh-56px)] min-h-[600px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-image.png"
              alt="Genesis Order Hero"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-[30px] text-white drop-shadow-2xl" style={{
              fontFamily: 'var(--font-eb-garamond)'
            }}>
              Genesis Order
            </h1>
            <p className="text-xs md:text-sm italic mb-1 font-baskervville text-white drop-shadow-lg">
              Let the return to our Origin be our sacred hymn.
            </p>
            <p className="text-xs md:text-sm italic font-baskervville text-white drop-shadow-lg">
              In Eden shall we dwell as one.
            </p>
          </div>
        </section>

        {/* Spacing Section */}
        <div className="h-[120px] bg-white"></div>

        {/* Story Section */}
        <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-2 text-[#3d2200] leading-normal tracking-[-0.03em] md:tracking-[-0.01em]" style={{ fontFamily: 'var(--font-nanum-myeongjo)', wordBreak: 'keep-all' }}>
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
        <div className="h-[70px] bg-white"></div>

        {/* Info Section */}
        <section className="py-16 md:py-28 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="section-title mb-4">Explore</h2>
              <p className="text-lg text-[rgb(215,145,24)] font-heading">통합 문서</p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group block bg-white rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-[#f2f2f2]"
                >
                  <div className="relative w-full h-[120px] bg-gradient-to-br from-[#fff2cc] to-[#ffe599]"></div>
                  <div className="p-4 bg-white text-left">
                    <h3 className="font-heading text-lg mb-2 text-[#3d2200]">{page.title}</h3>
                    <p className="text-xs text-[#55534c] font-sans">{page.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollDownButton />
    </>
  );
}

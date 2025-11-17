'use client';

import { useState } from 'react';
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function QnAPage() {
  // Character section Q&A states
  const [charQ1Open, setCharQ1Open] = useState(false);
  const [charQ2Open, setCharQ2Open] = useState(false);

  // World section Q&A states
  const [worldQ1Open, setWorldQ1Open] = useState(false);
  const [worldQ2Open, setWorldQ2Open] = useState(false);

  // Notice section Q&A states
  const [noticeQ1Open, setNoticeQ1Open] = useState(false);
  const [noticeQ2Open, setNoticeQ2Open] = useState(false);

  // System section Q&A states
  const [systemQ1Open, setSystemQ1Open] = useState(false);
  const [systemQ2Open, setSystemQ2Open] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen px-4 pt-[84px] pb-12">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <div className="text-center my-12">
            <h1 className="section-title mb-4">Q&A</h1>
            <p className="text-lg text-[#423e43]" style={{ fontFamily: 'var(--font-pretendard-medium)' }}>질의응답</p>
          </div>

          {/* Info Box */}
          <section className="mb-16">
            <div className="bg-transparent rounded-lg p-6">
              <div className="flex justify-center">
                <div className="space-y-3 text-[#2f2c31] w-full max-w-xs">
                  {/* 3x3 Table for first 3 rows */}
                  <div className="flex items-center">
                    <span className="font-bold flex-[10] text-left" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>마지막 갱신</span>
                    <span className="flex-[3] text-right">12.10</span>
                    <span className="flex-[3] text-right">12:25</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold flex-[10] text-left" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>Q&A 마감</span>
                    <span className="flex-[3] text-right">12.18</span>
                    <span className="flex-[3] text-right">14:00</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold flex-[10] text-left" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>신청서 접수 마감</span>
                    <span className="flex-[3] text-right">12.18</span>
                    <span className="flex-[3] text-right">23:59</span>
                  </div>
                  {/* Last row - different layout */}
                  <div className="flex items-center justify-between">
                    <span className="font-bold" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>질문 창구</span>
                    <a href="mailto:mail@genesis-order.site" className="hover:text-[#594c65] transition-colors">
                      mail@genesis-order.site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CHARACTER Section */}
          <section className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-10">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                CHARACTER
              </span>
            </h2>

            <div className="space-y-4">
              {/* Q1 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setCharQ1Open(!charQ1Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>예시 질문입니다.</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{charQ1Open ? '−' : '+'}</span>
                </button>
                {charQ1Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">예시 답변입니다.</p>
                  </div>
                )}
              </div>

              {/* Q2 */}
              {/* <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setCharQ2Open(!charQ2Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>예시 질문입니다.</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{charQ2Open ? '−' : '+'}</span>
                </button>
                {charQ2Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">예시 답변입니다.</p>
                  </div>
                )}
              </div> */}
            </div>
          </section>

          {/* WORLD Section */}
          <section className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-10">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                WORLD
              </span>
            </h2>

            <div className="space-y-4">
              {/* Q1 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setWorldQ1Open(!worldQ1Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>예시 질문입니다.</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{worldQ1Open ? '−' : '+'}</span>
                </button>
                {worldQ1Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">예시 답변입니다.</p>
                  </div>
                )}
              </div>

              {/* Q2 */}
              {/* <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setWorldQ2Open(!worldQ2Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>예시 질문입니다.</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{worldQ2Open ? '−' : '+'}</span>
                </button>
                {worldQ2Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">예시 답변입니다.</p>
                  </div>
                )}
              </div> */}
            </div>
          </section>

          {/* NOTICE Section */}
          <section className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-10">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                NOTICE
              </span>
            </h2>

            <div className="space-y-4">
              {/* Q1 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setNoticeQ1Open(!noticeQ1Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>역극 관련 호불호를 공개란에 작성해도 되나요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{noticeQ1Open ? '−' : '+'}</span>
                </button>
                {noticeQ1Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">타 러너가 참고해야 하는 역극 조율 사항은 추후 합격자 가이드를 통해 기재 방법을 안내할 예정입니다. 따라서 신청서 공개란에는 기재를 삼가 주시길 당부드립니다. 만약 합격자 선정 과정에서 운영진이 참고해야 하는 사항이 있다면 비고란에 기재 바랍니다.</p>
                  </div>
                )}
              </div>

              {/* Q2 */}
              {/* <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setNoticeQ2Open(!noticeQ2Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>예시 질문입니다.</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{noticeQ2Open ? '−' : '+'}</span>
                </button>
                {noticeQ2Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">예시 답변입니다.</p>
                  </div>
                )}
              </div> */}
            </div>
          </section>

          {/* SYSTEM Section */}
          <section className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-10">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                SYSTEM
              </span>
            </h2>

            <div className="space-y-4">
              {/* Q1 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setSystemQ1Open(!systemQ1Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>예시 질문입니다.</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{systemQ1Open ? '−' : '+'}</span>
                </button>
                {systemQ1Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">예시 답변입니다.</p>
                  </div>
                )}
              </div>

              {/* Q2 */}
              {/* <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setSystemQ2Open(!systemQ2Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>예시 질문입니다.</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{systemQ2Open ? '−' : '+'}</span>
                </button>
                {systemQ2Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">예시 답변입니다.</p>
                  </div>
                )}
              </div> */}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function QnAPage() {
  // Character section Q&A states
  const [charQ1Open, setCharQ1Open] = useState(false);
  const [charQ2Open, setCharQ2Open] = useState(false);
  const [charQ3Open, setCharQ3Open] = useState(false);

  // World section Q&A states
  const [worldQ1Open, setWorldQ1Open] = useState(false);
  const [worldQ2Open, setWorldQ2Open] = useState(false);
  const [worldQ3Open, setWorldQ3Open] = useState(false);
  const [worldQ4Open, setWorldQ4Open] = useState(false);
  const [worldQ5Open, setWorldQ5Open] = useState(false);
  const [worldQ6Open, setWorldQ6Open] = useState(false);
  const [worldQ7Open, setWorldQ7Open] = useState(false);
  const [worldQ8Open, setWorldQ8Open] = useState(false);

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
                    <span className="flex-[3] text-right">12.15</span>
                    <span className="flex-[3] text-right">11:00</span>
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
                  <span>세계관 문서에 따르면 영사가 치장 비용을 제공했다고 하는데, 특별히 정해진 드레스코드나 복식이 있을까요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{charQ1Open ? '−' : '+'}</span>
                </button>
                {charQ1Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">&apos;에덴의 만찬&apos;은 연회이기에 참석자는 정장, 드레스, 연미복을 착용해야 한다고 고지받았습니다. 참석자가 아닌 경우(근로자, 연주자 등)에는 적절한 의상을 착용하면 됩니다. 더불어 길리아드에서는 승전기념일과 같은 의미 있는 행사에는 무채색을 입는 것이 관례입니다.</p>
                  </div>
                )}
              </div>

              {/* Q2 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setCharQ2Open(!charQ2Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>북유럽 외 국적을 가진 중립 진영 캐릭터를 내도 될까요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{charQ2Open ? '−' : '+'}</span>
                </button>
                {charQ2Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">네, 가능합니다. 특정 국가가 중립 국가라는 설정은 별도의 검토 없이 사용하셔도 되나, 충분한 설명을 덧붙여 주세요.</p>
                  </div>
                )}
              </div>

              {/* Q3 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setCharQ3Open(!charQ3Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>소비에트 연방 외의 공산권 국가(동유럽 등)을 국적으로 하는 캐릭터를 내도 될까요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{charQ3Open ? '−' : '+'}</span>
                </button>
                {charQ3Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">네, 가능합니다. 마찬가지로 특정 국가가 공산주의 국가라는 설정은 별도의 검토 없이 사용하실 수 있습니다.</p>
                  </div>
                )}
              </div>
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
                  <span>길리아드와 약속의 땅은 중립국 출신이라도 외국인의 입국이 엄격한가요? 외교관이 아닌 일개 사업가, 여행객, 이민 희망자의 입국도 허용하는 편인지 궁금합니다.</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{worldQ1Open ? '−' : '+'}</span>
                </button>
                {worldQ1Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">외국인의 입국은 그 목적에 따라 입국 심사 절차가 다릅니다. 길리아드와 약속의 땅은 여행 등 민간인의 출입에는 개방적이나, 타 진영의 공적인 목적은 심사 절차가 보다 엄격합니다.</p>
                  </div>
                )}
              </div>

              {/* Q2 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setWorldQ2Open(!worldQ2Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>세계관 내 제2차 세계대전이 존재하지 않는 것으로 이해했는데, 그럼에도 불구하고 제1차의 명칭이 유지되나요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{worldQ2Open ? '−' : '+'}</span>
                </button>
                {worldQ2Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">아니요, &apos;세계 대전&apos;이라고 통칭합니다.</p>
                  </div>
                )}
              </div>

              {/* Q3 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setWorldQ3Open(!worldQ3Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>중립 진영 캐릭터를 준비중인데, 기존 역사에서 제2차 세계대전의 영향으로 발생한 사건들을 개조해서 사용해도 될까요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{worldQ3Open ? '−' : '+'}</span>
                </button>
                {worldQ3Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">네, 가능합니다.</p>
                  </div>
                )}
              </div>

              {/* Q4 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setWorldQ4Open(!worldQ4Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>개장 후 시점은 이미 저택 내 살인 사건이 일어난 후인가요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{worldQ4Open ? '−' : '+'}</span>
                </button>
                {worldQ4Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">아니요, 아직 일어나지 않았습니다.</p>
                  </div>
                )}
              </div>

              {/* Q5 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setWorldQ5Open(!worldQ5Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>저택에 고립되었다면 외부와 소통할 수 있는 수단이 아예 단절되나요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{worldQ5Open ? '−' : '+'}</span>
                </button>
                {worldQ5Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">네, 전부 단절됩니다.</p>
                  </div>
                )}
              </div>

              {/* Q6 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setWorldQ6Open(!worldQ6Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>창세교의 상징은 무엇인가요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{worldQ6Open ? '−' : '+'}</span>
                </button>
                {worldQ6Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">삼각형, 원, 그리고 삼각형 안에 원이 포함된 기호가 창세교의 상징입니다.</p>
                  </div>
                )}
              </div>

              {/* Q7 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setWorldQ7Open(!worldQ7Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>캐릭터들은 이 저택이 연회 기간 고립될 예정이라는 걸 알고 만찬에 참여한 것일까요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{worldQ7Open ? '−' : '+'}</span>
                </button>
                {worldQ7Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">저택이 고립된 이유는 폭설이며, 모든 참석자는 이 사실을 예상하지 못했습니다.</p>
                  </div>
                )}
              </div>

              {/* Q8 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setWorldQ8Open(!worldQ8Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>창세교의 계급이 정해지는 방식이 궁금합니다.</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{worldQ8Open ? '−' : '+'}</span>
                </button>
                {worldQ8Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31] space-y-4">
                    <p className="leading-relaxed">창세교는 표면적으로 &quot;신이 점지한 계급&quot;을 따른다고 주장하지만, 실제 작동 방식은 길리아드 정부가 관직을 수여하는 형태에 가깝습니다. 다만 이 과정을 종교적 언어로 포장한다고 보시면 됩니다.</p>
                    <p className="leading-relaxed">길리아드 창설 당시 미국 시절의 자본가 상당수가 영사 계급으로 편입되었습니다. 창세교가 자본에 의한 계급 차이를 정당화해주었기 때문에 기존 지배층 입장에서도 이를 받아들일 이유가 충분했습니다. 제소 계급 역시 비슷하게, 미국 내에서 군인, 학자 등 전문직에 종사하던 신도들이 제소로 편입되었습니다.</p>
                    <p className="leading-relaxed">중세 봉건제의 작위 체계를 떠올리시면 이해가 쉬울 것 같습니다. 기본적으로는 세습되지만 왕이나 황제가 새로운 작위를 임명하거나 박탈할 수 있었던 것처럼, 창세교 역시 성좌의 권한 아래 계급이 부여되고 조정됩니다.</p>
                    <p className="leading-relaxed">물론 소련을 비롯한 무신론 진영에서는 이를 &quot;신이 점지한 계급&quot;이란 결국 부와 지위의 불평등을 합리화하기 위한 수사에 불과하다며 비판합니다. 그러나 계급을 정하는 과정에서 정말로 신의 뜻이 개입하는지, 아니면 순전히 인간의 정치적 결정인지는 소수만 알고 있습니다.</p>
                  </div>
                )}
              </div>
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
                    <p className="leading-relaxed">타 러너가 참고해야 하는 역극 조율 사항은 추후 합격자 가이드를 통해 작성 방식을 안내할 예정입니다. 따라서 신청서 공개란에는 기재를 삼가 주시길 당부드립니다. 만약 합격자 선정 과정에서 운영진이 참고해야 하는 사항이 있다면 비고란을 이용해 주세요.</p>
                  </div>
                )}
              </div>

              {/* Q2 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setNoticeQ2Open(!noticeQ2Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>트위터 오류로 인해 DM 알림을 받지 못하는 경우가 종종 발생합니다. 빠른 연락을 위해, 계정 란에 타 연락처(오픈채팅 링크 등)를 추가로 첨부해도 괜찮을까요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{noticeQ2Open ? '−' : '+'}</span>
                </button>
                {noticeQ2Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">네, 가능합니다. 트위터 계정 아이디 아래에 추가 연락처를 자유롭게 기재해 주시기 바랍니다.</p>
                  </div>
                )}
              </div>
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
                  <span>추적시 발견 가능한 소지품은 몇 개까지 적을 수 있나요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{systemQ1Open ? '−' : '+'}</span>
                </button>
                {systemQ1Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">최대 개수 제한은 없습니다. 여러 개를 적어주시면 운영진이 가장 적절한 항목을 몇 가지 선정하거나 조합하여 정보를 제공합니다.</p>
                  </div>
                )}
              </div>

              {/* Q2 */}
              <div className="border border-[#BDB7BD] rounded-lg overflow-hidden">
                <button
                  onClick={() => setSystemQ2Open(!systemQ2Open)}
                  onBlur={(e) => e.currentTarget.classList.remove('active')}
                  className="w-full px-4 py-3 bg-transparent md:hover:bg-[#fff136] active:bg-transparent transition-colors flex items-center justify-between text-left"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>추적 시 발견 가능한 소지품 중에서 금지되는 유형이 있을까요?</span>
                  <span className="text-xl flex-shrink-0 ml-4 text-[#BDB7BD]">{systemQ2Open ? '−' : '+'}</span>
                </button>
                {systemQ2Open && (
                  <div className="p-4 border-t border-[#BDB7BD] text-[#2f2c31]">
                    <p className="leading-relaxed">무기를 포함하여 소지품으로 금지되는 물품은 없으나, 세계관 설정과 미세하게 어긋나는 물품일 경우 조율 기간에 약간의 조정을 요청드릴 수 있습니다.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}

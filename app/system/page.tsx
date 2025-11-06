'use client';

import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SystemPage() {
  const [exampleClueOpen, setExampleClueOpen] = useState(false);
  const [exampleInvestigationOpen, setExampleInvestigationOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen px-4 pt-[84px] pb-12">
        <div className="max-w-3xl mx-auto">

          {/* Page Title */}
          <div className="text-center my-12">
            <h1 className="section-title mb-4">SYSTEM</h1>
            <p className="text-lg text-[#423e43]" style={{ fontFamily: 'var(--font-noto-serif-kr)' }}>시스템</p>
          </div>

          {/* Table of Contents */}
          <section className="mb-16">
            <div className="relative border-2 border-[#2f2c31] overflow-hidden p-6 rounded-lg bg-transparent">
              <div className="relative z-10">
                <h2 className="text-base text-[#2f2c31] mb-4 text-center" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                  목차
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
                  {[
                    { id: 'notice', label: 'NOTICE' },
                    { id: 'setting', label: 'SETTING' },
                    { id: 'suspect', label: 'SUSPECT' },
                    { id: 'condition', label: 'CONDITION' },
                    { id: 'ability', label: 'ABILITY' },
                    { id: 'investigation', label: 'INVESTIGATION' },
                    { id: 'trailing', label: 'TRAILING' },
                    { id: 'ekle', label: 'EKLE' },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-[#2f2c31] hover:bg-[#fff136] px-3 py-2 rounded transition-colors"
                      style={{ fontFamily: 'var(--font-proximanova-black)' }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* NOTICE Section */}
          <section id="notice" className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-6">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                NOTICE
              </span>
            </h2>
            <div className="space-y-3 text-[#2f2c31] font-sans tracking-[-0.03em] md:tracking-normal">
              {[
                <span key="1">본 커뮤니티는 <strong>성인가 수위 프리 커뮤니티</strong>로, <strong>폭력, 상해, 살해</strong>와 관련된 내용을 다룹니다. 운영진은 이와 같은 비윤리적 행위를 옹호하지 않습니다.</span>,
                "모든 스토리 진행은 오후 10시에 시작합니다.",
              ].map((text, index) => (
                <div key={index} className="flex items-start leading-normal md:leading-relaxed">
                  <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                    ⦿
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SETTING Section */}
          <section id="setting" className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-6">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                SETTING
              </span>
            </h2>
            <div className="space-y-3 text-[#2f2c31] font-sans leading-normal md:leading-relaxed tracking-[-0.03em] md:tracking-normal">
              <p>본 커뮤니티는 '에덴의 만찬'을 주최한 영사, <strong>빅터 K. 할덴 소유의 대저택</strong>을 배경으로 합니다. 이 대저택은 눈이 쌓인 알래스카 산지 한복판에 위치하여 축일 기간에는 마을로 이동할 수 없습니다.</p>
              <p>모든 캐릭터는 10일간 진행되는 연회를 즐기기 위해, 혹은 그밖의 여러 이유로 만찬에 참석했습니다.</p>
              <p>그러나 모두가 잠든 어느 날 새벽, <strong>살인 사건</strong>이 발생합니다. 이들은 고립된 커다란 저택에서 무사히 탈출하기 위해 사건을 조사하고 전말을 파헤칩니다. 동시에, 돌아오는 의심을 피하기 위해 노력하게 됩니다.</p>
            </div>
          </section>

          {/* SUSPECT Section */}
          <section id="suspect" className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-6">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                SUSPECT
              </span>
            </h2>
            <div className="space-y-3 text-[#2f2c31] font-sans leading-normal md:leading-relaxed tracking-[-0.03em] md:tracking-normal">
              <p>공개된 NMPC 2인 외에도 <strong>비공개 NMPC</strong>가 러너 캐릭터 사이에 숨어 있습니다. 이들은 살인 사건의 잠재적 <strong>피해자이자 용의자</strong>입니다. 여러분은 조사를 통해 용의자를 식별하고 <strong>범인</strong>을 찾아내야 합니다.</p>
              <p>세계관 외적 요소를 이유로 누가 NMPC인지 캐릭터의 입을 빌려 발설하는 행위는 메타 발언으로 간주, 불허합니다. 조사 내용을 근거로 용의자를 특정하는 건 가능합니다.</p>
              <p>캐릭터 간의 대립은 원활한 롤플레잉과 몰입을 위한 요소로, 커뮤니티 내에서 발생하는 모든 사건은 허구입니다. 허구의 사건이 오너 간의 갈등으로 번지지 않도록 주의 바랍니다. 러닝 도중 커뮤니티와 현실이 혼동될 시 운영진에게 알린 후 하차하시기를 권고합니다.</p>
            </div>
          </section>

          {/* CONDITION Section */}
          <section id="condition" className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-6">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                CONDITION
              </span>
            </h2>
            <div className="space-y-4 text-[#2f2c31] font-sans tracking-[-0.03em] md:tracking-normal">
              <p className="leading-normal md:leading-relaxed">모든 캐릭터는 <strong>[상태]</strong>를 지닙니다. 상태는 일종의 자원으로, 캐릭터의 행동에 영향을 미칩니다.</p>
              <p className="leading-normal md:leading-relaxed">상태는 조사, 스토리 진행, 아이템 사용을 통해 바꿀 수 있습니다.</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#2f2c31]">
                  <thead>
                    <tr className="bg-[#fff136]">
                      <th className="border border-[#2f2c31] px-4 py-3 text-left" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        상태
                      </th>
                      <th className="border border-[#2f2c31] px-4 py-3 text-left" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        설명
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#2f2c31] px-4 py-3" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        기운
                      </td>
                      <td className="border border-[#2f2c31] px-4 py-3">
                        매일 0시, 1점으로 초기화. 조사 1회당 1점을 소모합니다.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#2f2c31] px-4 py-3" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        행운
                      </td>
                      <td className="border border-[#2f2c31] px-4 py-3">
                        매일 0시, 0점으로 초기화. 조사 시 추가 보정치로 작용합니다.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#2f2c31] px-4 py-3" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        이성
                      </td>
                      <td className="border border-[#2f2c31] px-4 py-3">
                        최대 10점, 최소 0점. 일정 수치 이하로 낮아질 경우 불리점이 주어집니다.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ABILITY Section */}
          <section id="ability" className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-6">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                ABILITY
              </span>
            </h2>
            <div className="space-y-4 text-[#2f2c31] font-sans tracking-[-0.03em] md:tracking-normal">
              <p className="leading-normal md:leading-relaxed">캐릭터는 네 가지 <strong>[능력]</strong>을 가집니다. 신청서 작성 시 총 6점을 자유롭게 배분할 수 있습니다. (각 능력치마다 최소 0점, 최대 5점)</p>
              <p className="leading-normal md:leading-relaxed">배분한 능력치는 조사 시 주사위 보정치로 작용합니다.</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#2f2c31]">
                  <thead>
                    <tr className="bg-[#fff136]">
                      <th className="border border-[#2f2c31] px-4 py-3 text-left" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        능력
                      </th>
                      <th className="border border-[#2f2c31] px-4 py-3 text-left" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        설명
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#2f2c31] px-4 py-3" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        행동
                      </td>
                      <td className="border border-[#2f2c31] px-4 py-3">
                        몸을 움직이고 물리적 변화를 만들어 냅니다.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#2f2c31] px-4 py-3" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        논리
                      </td>
                      <td className="border border-[#2f2c31] px-4 py-3">
                        정보에서 통찰을 얻거나 뛰어난 말솜씨로 타인을 설득합니다.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#2f2c31] px-4 py-3" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        관찰
                      </td>
                      <td className="border border-[#2f2c31] px-4 py-3">
                        주변을 세밀히 살피고, 대화에 귀 기울여 단서를 찾아냅니다.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#2f2c31] px-4 py-3" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                        직감
                      </td>
                      <td className="border border-[#2f2c31] px-4 py-3">
                        본능과 감각으로 숨겨진 의미를 포착합니다.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* INVESTIGATION Section */}
          <section id="investigation" className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-6">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                INVESTIGATION
              </span>
            </h2>
            <div className="space-y-4 text-[#2f2c31] font-sans tracking-[-0.03em] md:tracking-normal">
              <p className="leading-normal md:leading-relaxed"><strong>[조사]</strong>는 마스토돈 자동봇을 사용해 정해진 시간 없이 진행합니다.</p>
              <p className="leading-normal md:leading-relaxed">정해진 일차의 0시에 <strong>[단서 목록]</strong>이 공개됩니다. <strong>[단서]</strong>를 조사하여 살인 사건 및 커뮤니티의 진상과 관련된 정보를 얻을 수 있습니다.</p>
              <p className="leading-normal md:leading-relaxed"><strong>[조사]</strong>를 시도하면 <strong>10면체 주사위</strong>를 굴립니다. 주사위 굴림값과 요구 능력치 1점당 +1을 합산하여 주사위 결과를 계산합니다.</p>
              <p className="leading-normal md:leading-relaxed">각 단서는 목표치를 가지며, 주사위 결과가 목표치 이상이면 조사에 성공합니다. 조사 결과는 실패 시에도 제공되나, 성공 시에는 더욱 상세한 정보를 얻을 수 있습니다.</p>
              <p className="leading-normal md:leading-relaxed">일부 단서는 여러 능력을 사용하여 조사할 수 있으나 얻는 정보량은 비슷합니다.</p>

              {/* 예시 단서 목록 - Collapsible */}
              <div className="mt-6 border border-[#2f2c31] rounded-lg overflow-hidden">
                <button
                  onClick={() => setExampleClueOpen(!exampleClueOpen)}
                  className="w-full px-4 py-3 bg-transparent hover:bg-[#fff136] transition-colors flex items-center justify-between"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>예시 단서 목록</span>
                  <span className="text-xl">{exampleClueOpen ? '−' : '+'}</span>
                </button>
                {exampleClueOpen && (
                  <div className="p-4 border-t border-[#2f2c31]">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-[#2f2c31]">
                        <thead>
                          <tr className="bg-[#fff136]">
                            <th className="border border-[#2f2c31] px-4 py-3 text-left text-sm" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                              단서
                            </th>
                            <th className="border border-[#2f2c31] px-4 py-3 text-left text-sm" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                              능력
                            </th>
                            <th className="border border-[#2f2c31] px-4 py-3 text-left text-sm" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                              목표치
                            </th>
                            <th className="border border-[#2f2c31] px-4 py-3 text-left text-sm" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                              설명
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              창고 바닥
                            </td>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              관찰
                            </td>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              3
                            </td>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              분명 어제 청소한 창고 바닥이 끈적거린다. 한번 살펴볼까?
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              하녀
                            </td>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              논리
                            </td>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              5
                            </td>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              창고 문 앞에 서 있는 하녀. 어딘가 불안해 보인다. 상황을 설명하라고 설득할 수 있을 것 같다.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              하녀
                            </td>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              직감
                            </td>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              8
                            </td>
                            <td className="border border-[#2f2c31] px-4 py-3">
                              창고 문 앞에 서 있는 하녀. 어딘가 불안해 보인다. 왜인지 차를 한 잔 가져다주고 싶어졌다.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* 예시 조사 - Collapsible */}
              <div className="mt-4 border border-[#2f2c31] rounded-lg overflow-hidden">
                <button
                  onClick={() => setExampleInvestigationOpen(!exampleInvestigationOpen)}
                  className="w-full px-4 py-3 bg-transparent hover:bg-[#fff136] transition-colors flex items-center justify-between"
                  style={{ fontFamily: 'var(--font-pretendard-bold)' }}
                >
                  <span>예시 조사</span>
                  <span className="text-xl">{exampleInvestigationOpen ? '−' : '+'}</span>
                </button>
                {exampleInvestigationOpen && (
                  <div className="p-4 border-t border-[#2f2c31] space-y-3 text-sm">
                    <div>
                      <p className="mb-2"><strong>논리 능력치가 2인 캐릭터의 명령어 사용:</strong></p>
                      <div className="bg-[#f5f5f5] px-3 py-2 rounded">
                        [조사/하녀/논리]
                      </div>
                    </div>
                    <div>
                      <p className="mb-2"><strong>결과 문구:</strong></p>
                      <div className="bg-[#f5f5f5] px-3 py-2 rounded">
                        주사위 값 3 + 논리 보정 2 = 5. 조사 성공
                      </div>
                    </div>
                    <div>
                      <p className="mb-2"><strong>조사 결과:</strong></p>
                      <div className="bg-[#f5f5f5] px-3 py-2 rounded">
                        하녀를 어쩌고저쩌고 설득하자 그녀가 사실을 털어놓았다.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* TRAILING Section */}
          <section id="trailing" className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-6">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                TRAILING
              </span>
            </h2>
            <div className="space-y-3 text-[#2f2c31] font-sans leading-normal md:leading-relaxed tracking-[-0.03em] md:tracking-normal">
              <p>범인을 찾아내기 위해서는 용의자를 면밀히 관찰해야 합니다.</p>
              <p>모든 캐릭터는 하루 1회, 범인이라고 의심하는 한 명의 캐릭터를 <strong>[추적]</strong>할 수 있습니다. 추적은 기운을 소모하지 않습니다.</p>
              <p>추적한 캐릭터가 용의자일 경우 스토리와 관련된 정보를, 용의자가 아닐 경우 비밀 설정과 관련된 정보를 얻게 됩니다.</p>
            </div>
          </section>

          {/* EKLE Section */}
          <section id="ekle" className="mb-16 scroll-mt-24">
            <h2 className="semi-header mb-6">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                EKLE
              </span>
            </h2>
            <div className="space-y-4 text-[#2f2c31] font-sans tracking-[-0.03em] md:tracking-normal">
              <p className="leading-normal md:leading-relaxed">길리아드는 <strong>에클(Ekle)</strong>을 화폐로 사용합니다. 모든 캐릭터는 1에클을 보유한 채 시작합니다.</p>

              <div>
                <p className="mb-3 leading-normal md:leading-relaxed" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>에클의 획득처는 다음과 같습니다.</p>
                <div className="space-y-2">
                  {[
                    <span key="1"><strong>[기도]</strong> 명령어 사용 시 매일 1E 지급 (출석)</span>,
                    "50툿 당 1E 지급",
                    "조사 중 획득",
                    "선물 혹은 양도",
                  ].map((text, index) => (
                    <div key={index} className="flex items-start leading-normal md:leading-relaxed">
                      <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                        ⦿
                      </span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 leading-normal md:leading-relaxed" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>에클의 사용처는 다음과 같습니다.</p>
                <div className="space-y-2">
                  {[
                    "상점",
                    "은총의 제단 (도박 시스템)",
                    "계시의 함 (뽑기 시스템)",
                    "선물 혹은 양도",
                  ].map((text, index) => (
                    <div key={index} className="flex items-start leading-normal md:leading-relaxed">
                      <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                        ⦿
                      </span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#2f2c31]/20">
                <p className="leading-normal md:leading-relaxed">더욱 자세한 사항은 개장 후 시스템 문서를 통해 공개됩니다.</p>
                <p className="leading-normal md:leading-relaxed">캐릭터 설정과 관련한 정보는 캐릭터 가이드 문서에서 확인 바랍니다.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CharactersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 pt-[84px] pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center my-12">
            <h1 className="section-title mb-4">CHARACTER GUIDE</h1>
            <p className="text-lg text-[#423e43]" style={{ fontFamily: 'var(--font-pretendard-medium)' }}>캐릭터 가이드</p>
          </div>
          {/* NOTICE Section */}
          <section id="notice" className="mb-16">
            <h2 className="semi-header mb-10">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                NOTICE
              </span>
            </h2>
            <div className="space-y-3 text-[#2f2c31] font-sans tracking-[-0.01em] md:tracking-normal">
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>본 커뮤니티는 1965년 12월 20일, 알래스카의 영사 대저택을 배경으로 합니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>머리와 눈 색은 자유롭게 설정할 수 있으나, 염색 또는 렌즈를 사용했다는 서술을 넣어주세요. 비현실적인 투톤, 특이동공 등의 외관은 불합격의 원인이 될 수 있습니다. 백발 또한 노화, 백색증 등의 서술을 적어주세요.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>모든 캐릭터는 길리아드 내 공용어인 <strong>영어</strong>를 구사할 줄 알아야 합니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>모든 캐릭터는 <strong>만 18세 이상, 만 70세 이하</strong>입니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>본 커뮤니티는 다양한 설정을 환영하나, 기초적인 설정 오류는 합격에 영향을 미칠 수 있습니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>소비에트 연방 출신 캐릭터의 성명 오류는 오류 신청서로 분류합니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>본 커뮤니티의 신청서 양식에는 <strong>조율 희망 여부</strong>란이 존재합니다. 만약 소수 합격 요소나 중복 설정으로 인해 아쉽게 합격권에 들지 못하셨을 경우, 운영진이 12월 19일 오전 10시에 오너 계정의 DM을 통해 설정 변경을 요청드릴 수 있습니다.</span>
              </div>

              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>소수 합격 요소는 다음과 같습니다.</span>
              </div>
              <div className="ml-8 space-y-2">
                {[
                  "영사 (1)",
                  "저택 사용인 (3)",
                  "공개 NMPC와 아는 사이 (2)",
                  "유명인 (3)",
                  "정치인 (2)",
                ].map((text, index) => (
                  <div key={index} className="flex items-start leading-normal md:leading-relaxed">
                    <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                      ○
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-start leading-normal md:leading-relaxed mt-6">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>불합격 요소는 다음과 같습니다.</span>
              </div>
              <div className="ml-8 space-y-2">
                {[
                  "성좌",
                  "커뮤니티를 러닝할 수 없을 정도로 반사회적인 캐릭터",
                  "세계관에 맞지 않는 캐릭터",
                  "창세교 신도가 아닌 길리아드 출신자",
                ].map((text, index) => (
                  <div key={index} className="flex items-start leading-normal md:leading-relaxed">
                    <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                      ○
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SIDE Section */}
          <section id="side" className="mb-16">
            <h2 className="semi-header mb-10">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                SIDE
              </span>
            </h2>
            <div className="space-y-3 text-[#2f2c31] font-sans tracking-[-0.01em] md:tracking-normal">
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>본 커뮤니티는 <strong>길리아드, 공산권, 중립</strong>의 3가지 진영으로 나뉘는 약대립 커뮤니티입니다. 진영 비율은 2:2:1을 지향합니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>진영 대립은 캐릭터 어필과 역극 소재를 위한 장치일 뿐, 시스템 혹은 결말에 영향을 미치지 않습니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>길리아드의 교리하에 살인은 엄중한 범죄입니다. 살인범은 어떤 상황에서든 반드시 살인 후 10일 이내에 처형됩니다. 축일 기간 동안 살인자를 찾아내지 못할 경우, 저택에서 살인을 방조한 캐릭터는 전부 심문과 처벌을 면치 못하게 될 겁니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>따라서 모든 캐릭터의 궁극적인 목표는 사건의 <strong>범인을 찾아내고 고발하는 것</strong>입니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>모든 캐릭터는 용의자가 될 수도, 피해자가 될 수도 있습니다. 타인을 의심하되, 본인이 처형당하지 않도록 주의하세요.</span>
              </div>
            </div>
          </section>

          {/* PROFILE Section */}
          <section id="profile" className="mb-16">
            <h2 className="semi-header mb-10">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded" style={{ fontFamily: 'var(--font-proximanova-black)' }}>
                PROFILE
              </span>
            </h2>
            <div className="space-y-3 text-[#2f2c31] font-sans tracking-[-0.01em] md:tracking-normal">
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>모든 캐릭터는 정화 축일 기간, 영사 대저택에 머물러야 합니다. 머무르는 이유는 다양합니다. 캐릭터는 &apos;에덴의 만찬&apos; 참석자, 저택의 사용인, 만찬을 준비하는 요리사, 혹은 연주회를 위해 불려 온 연주자일지도 모릅니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>&apos;에덴의 만찬&apos;은 약 서른 명이 참석하는 행사입니다. 영사가 직접 초청한 일부를 제외하고, 초대장은 전 세계에 배포되어 여러 사람의 손을 거쳤습니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>초대장에 적힌 주소로 간결한 자기소개가 적힌 편지를 보내면 영사가 그중에서 직접 참석자를 골랐습니다. 조건에 계급, 신분, 출신은 포함되지 않았습니다. 이렇게 선정된 모든 참석자는 여비뿐만 아니라 치장을 위한 거금을 제공받았습니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>왜 이런 일을 벌였을까요. 글쎄요, 호기심? 할덴 영사는 눈 속에 고립된 저택에서 사는 것을 무척 따분히 여겼습니다. 다양한 사람을 만나 다양한 이야기를 듣고 싶었나 봅니다. 어쩌면 정화 축일 기간, 서민에게 자신의 부를 나누어 더 많은 은총을 받고 싶었을지도 모릅니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>금빛 음각이 새겨진 초대장이 당신에게 묻습니다. 당신은 누구입니까?</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

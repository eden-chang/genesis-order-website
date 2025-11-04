import Link from "next/link";
import PageNavigation from "@/components/layout/PageNavigation";

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* 상단 네비게이션 */}
        <PageNavigation currentPath="/notice" position="top" />

        <div className="text-center my-12">
          <h1 className="section-title mb-4">Notice</h1>
          <p className="text-xl text-[#0b0b0b] font-heading">공지사항</p>
        </div>

        {/* Content Warning */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#0b0b0b]" style={{ fontFamily: "var(--font-eb-garamond)" }}>
            Content Warning
          </h2>
          <div className="space-y-2 text-[#0b0b0b] leading-relaxed">
            <p>본 커뮤니티는 부상, 상해, 살해, 사망, 폭력 등의 요소를 포함하고 있습니다.</p>
            <p>운영진은 위와 같은 비윤리적 행위를 옹호하지 않으며, 모든 사건과 인물, 배경은 허구입니다.</p>
            <p>러닝 도중 커뮤니티와 현실이 혼동될 시 운영진에게 알린 후 하차하시기를 권고합니다.</p>
          </div>
        </section>

        {/* Schedule */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#0b0b0b]" style={{ fontFamily: "var(--font-eb-garamond)" }}>
            Schedule
          </h2>
          <div className="relative border-l-2 border-gray-300 pl-8 space-y-8">
            {[
              { date: "12/11 00:00", text: "가산점 신청서 접수 시작" },
              { date: "12/13 23:59", text: "가산점 신청서 접수 마감" },
              { date: "12/13 00:00", text: "일반 신청서 접수 시작" },
              { date: "12/18 23:59", text: "일반 신청서 접수 마감" },
              { date: "12/20 22:00", text: "개장 및 인트로" },
              { date: "01/03 22:00", text: "아웃트로" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[37px] w-4 h-4 rounded-full bg-[#e5a918] border-2 border-white"></div>
                <div className="mb-1">
                  <span className="text-[#e5a918] font-semibold mr-2" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                    ✶
                  </span>
                  <span className="font-bold text-[#0b0b0b]">{item.date}</span>
                </div>
                <div className="text-gray-700">{item.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Notice */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#0b0b0b]" style={{ fontFamily: "var(--font-eb-garamond)" }}>
            Notice
          </h2>
          <div className="space-y-3 text-[#0b0b0b]">
            {[
              "본 문서는 자캐 커뮤니티〈Genesis Order〉의 공지사항 문서입니다.",
              "본 커뮤니티는 성인 연령가입니다. 06년생 이상만 신청서를 제출할 수 있습니다.",
              "방송통신심의위원회 SafeNet 등급 기준 노출 4등급, 성행위 4등급, 폭력 4등급, 언어 4등급의 수위를 따릅니다. 오너 간 합의 하에 이루어지는 모든 행위를 허용합니다.",
              "첫커, 첫 시리커 러닝이 불가합니다.",
              "본 커뮤니티는 마스토돈 자체서버를 이용한 커뮤니티입니다. 첫 마스토돈 커뮤 러닝을 허용하며, 합격자 발표 이후 플랫폼 가이드를 제공할 예정입니다.",
              "본 커뮤니티는 명화 인장만을 허용합니다.",
              "모든 종류의 로그 업로드를 금지합니다.",
              "본 커뮤니티의 러닝 기간은 14일입니다. 단기 커뮤니티인 만큼 하차와 잠수를 지양하며, 커뮤니티 기간에 원활한 러닝이 불가능하다면 신청서 제출을 재고해 주세요.",
              "본 커뮤니티는 개장일과 폐장일을 포함하여 오후 10시에 스토리를 진행합니다.",
              "36시간 이상 통보 없는 미접속 시 경고 없이 제명됩니다. 제명을 피하기 위한 퍼블릭 툿 및 단발성 멘션은 유효하지 않습니다.",
              "타 커뮤니티에서 활동했거나 관계가 없는 캐릭터의 재활용이 가능합니다. (1캐 N커, 1커 N캐 불가.)",
              "비밀 MPC를 포함하여 러닝 최소 인원은 20명, 최대 인원은 30명입니다. 성비는 극단적으로 치우치지 않는 한 크게 고려하지 않습니다. 합격 인원이 부족할 시, 본 커뮤니티는 동결에 들어갑니다.",
              "연락처 교환을 위한 최소 툿은 300툿입니다.",
              "운영진은 공지 미숙지로 인해 발생하는 일에 책임을 지지 않습니다.",
            ].map((text, index) => (
              <div key={index} className="flex items-start leading-relaxed">
                <span className="text-[#e5a918] mr-3 flex-shrink-0 font-semibold" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ✶
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Rules */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#0b0b0b]" style={{ fontFamily: "var(--font-eb-garamond)" }}>
            Rules
          </h2>
          <div className="space-y-3 text-[#0b0b0b]">
            <div className="flex items-start leading-relaxed">
              <span className="text-[#e5a918] mr-3 flex-shrink-0 font-semibold" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                ✶
              </span>
              <span>본 커뮤니티는 경고 제도를 사용합니다. 경고 3회 누적 시 제명됩니다.</span>
            </div>
            <div className="flex items-start leading-relaxed">
              <span className="text-[#e5a918] mr-3 flex-shrink-0 font-semibold" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                ✶
              </span>
              <span>제명된 캐릭터는 커뮤니티 내에서 처음부터 존재하지 않았던 인물이 됩니다.</span>
            </div>
            <div className="flex items-start leading-relaxed">
              <span className="text-[#e5a918] mr-3 flex-shrink-0 font-semibold" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                ✶
              </span>
              <span>본 커뮤니티는 시리어스 커뮤니티이나, 어느 정도의 개그 멘트를 허용합니다. 다만 스토리 진행 시에는 개그 분위기가 형성되지 않도록 주의 부탁드립니다.</span>
            </div>

            <div className="flex items-start leading-relaxed mt-4">
              <span className="text-[#e5a918] mr-3 flex-shrink-0 font-semibold" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                ✶
              </span>
              <span className="font-semibold">경고 사항은 다음과 같습니다.</span>
            </div>
            <div className="ml-8 space-y-2">
              {[
                "48시간 내 10개 이하의 멘션",
                "모든 종류의 편파 및 차별",
                "공개된 장소에서 러닝 타래 작성, 스토리, 조사 유출",
                "분위기를 해치는 메타 발언, 잦은 개그, 이모티콘 및 초성 사용",
                "1시간 이상 이어지는 타임라인 대화",
                "운영진의 판단하에 경고가 필요한 사항",
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-red-500 mr-3 flex-shrink-0">✕</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start leading-relaxed mt-6">
              <span className="text-[#e5a918] mr-3 flex-shrink-0 font-semibold" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                ✶
              </span>
              <span className="font-semibold">제명 사항은 다음과 같습니다.</span>
            </div>
            <div className="ml-8 space-y-2">
              {[
                "경고 3회 누적",
                "36시간 이상 무통보 잠수",
                "나이 속임 적발",
                "총괄계를 포함하지 않은 러너 사이의 1:1 대화",
                "운영진과 러너를 향한 악의적인 발언",
                "러닝 중 고백",
                "러닝 중 합의되지 않은 자살, 살해",
                "엔딩 전 개인적인 연락처 교환",
                "운영진의 판단하에 제명이 필요한 사항",
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-red-500 mr-3 flex-shrink-0">✕</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 페이지 네비게이션 */}
        <PageNavigation currentPath="/notice" />
      </div>
    </main>
  );
}

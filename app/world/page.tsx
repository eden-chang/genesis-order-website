import Link from "next/link";
import PageNavigation from "@/components/layout/PageNavigation";

export default function WorldviewPage() {
  return (
    <main className="min-h-screen px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* 상단 네비게이션 */}
        <PageNavigation currentPath="/world" position="top" />

        <div className="text-center my-12">
          <h1 className="section-title mb-4">World</h1>
          <p className="text-xl text-[#0b0b0b] font-heading">세계관</p>
        </div>

        {/* Notice */}
        <section className="mb-16 p-6 bg-transparent rounded-lg border-2 border-[#e4a408]">
          <div className="space-y-3 text-[#0b0b0b] leading-relaxed">
            <p>본 커뮤니티의 세계관은 현실의 종교적 요소에서 일부 모티브를 얻은 창작물입니다. 운영진은 실존하는 어떠한 종교, 교단, 신앙 체계도 옹호하거나 비난하지 않으며, 모든 설정은 가상의 세계관 내 서사적 장치로만 사용됩니다.</p>
            <p className="mt-6">본 커뮤니티의 세계관은 다음 작품들로부터 영감을 받았습니다.</p>
            <div className="ml-4 space-y-1">
              <div className="flex items-start">
                <span className="text-[#e5a918] mr-3 flex-shrink-0 font-semibold" style={{ fontFamily: "var(--font-eb-garamond)" }}>✶</span>
                <span>구약 성경</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#e5a918] mr-3 flex-shrink-0 font-semibold" style={{ fontFamily: "var(--font-eb-garamond)" }}>✶</span>
                <span>시녀 이야기 (마거릿 애트우드 저)</span>
              </div>
            </div>
          </div>
        </section>

        {/* I. 창세교의 씨앗 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#0b0b0b]">
            <span className="font-heading-en">I.</span>{" "}
            <span className="font-heading">창세교의 씨앗</span>
          </h2>
          <div className="space-y-4 text-[#0b0b0b] leading-relaxed">
            <p>1929년 일어난 대공황은 미국 사회를 나락으로 밀어 넣었다. 치솟는 실업률과 끝없는 불황 속에서 사람들은 자본주의의 실패를 처절하게 맛보았다. 물질적 풍요를 주창하던 기존의 질서는 신뢰를 잃었으며, 대중의 마음속에는 깊은 불안이 자리 잡았다. 바로 이 시기, 미 동부에서 <span className="relative group cursor-help border-b border-dotted border-gray-400">창세교(Genesis Order)<span className="invisible group-hover:visible absolute left-0 top-full mt-2 w-96 p-4 bg-[#fffdf6] border-2 border-[#e4a408] rounded-lg shadow-lg text-sm z-10">대공황을 기점으로 미 동부에서 부흥한 신흥 종교. "신의 뜻은 곧 원점으로의 회귀"라는 교리를 설파한다. 광란의 20년대를 인류의 타락으로 규정하며 몸집을 불렸으며, 이는 미국 동서 전쟁(정화전淨化戰)의 계기가 되었다.</span></span>라는 새로운 불길이 피어올랐다.</p>
            <p>창세교는 1920년경 발원하여 대공황을 기점으로 세력을 불렸다. 이들은 구약과 신약을 재해석해 "신의 뜻은 곧 원점으로의 회귀"라는 교리를 설파했다. 부흥을 맛보았던 광란의 20년대는 곧 인류의 타락이요, 현재의 불황은 신의 뜻을 헤아리지 못한 이기심의 말로라고 일컬었다.</p>
            <p>신께서는 태초부터 타인을 짓밟거나 부를 탐하지 말라 가르치셨다. 그러나, 자본주의를 지탱하는 정치인, 기업가는 연이은 부흥과 공황 속에서도 대중의 고혈을 빨아 제 배를 불리는 데 급급했다. 이는 여호와를 모독한 바리사이나 세리와 다를 바 없다.</p>
            <p>이처럼 파격적인 주장을 중심으로, 창세교는 신의 섭리를 따르는 자들만이 진정한 행복과 구원을 얻을 수 있다고 역설했다. 자본주의에 의해 착취당하던 서민층은 끝없는 가난이 곧 신의 뜻을 배반한 사회 때문이었다는 주장에 호응했다. 결국 창세교는 대공황의 절망을 비옥한 토양 삼아 폭발적으로 부흥했다.</p>
          </div>
        </section>

        {/* II. 신의 승리 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#0b0b0b]">
            <span className="font-heading-en">II.</span>{" "}
            <span className="font-heading">신의 승리</span>
          </h2>
          <div className="space-y-4 text-[#0b0b0b] leading-relaxed">
            <p>창세교의 세력이 걷잡을 수 없이 팽창하자, 미국 서부에서는 이들을 '사이비'로 규정하고 척결해야 한다는 주장이 힘을 얻기 시작했다. 결국 1933년 12월, 자본주의를 주시하는 미 서부와 창세교를 따르는 미 동부 간의 이념 전쟁, 즉 정화전(淨化戰, The Purgation)이 발발했다.</p>
            <p>전쟁은 4년간의 치열한 사투 끝에 1937년 12월 25일, 오랜 내전으로 지지 기반을 잃어버린 미국 대통령 프랭클린 D. 루스벨트가 실각하며 동부 창세교 세력의 승리로 종결되었다. 승리에 도취한 창세교 신도들은 미국 민주주의의 상징인 백악관을 허물고, 그 터 위에 장엄한 대성당을 세웠다. 성좌는 이날을 창세교의 승리를 기념하고 '원점으로의 회귀'를 천명하는 정화 축일(Yom Genesis)로 선포하였다.</p>
          </div>
        </section>

        {/* III. 길리아드 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#0b0b0b]">
            <span className="font-heading-en">III.</span>{" "}
            <span className="font-heading">길리아드</span>
          </h2>
          <div className="space-y-4 text-[#0b0b0b] leading-relaxed">
            <p>정화 이후 옛 미합중국은 종교 국가 길리아드(Gilead)로 재탄생했다. 자본주의를 대표하던 뉴욕은 '제네시스'라는 명칭으로 길리아드의 수도가 되었으며, 종교적 권위와 정치권력을 '성좌'가 독점하는 제정일치 사회가 도래했다.</p>
            <p>초기 길리아드는 미국 영토의 7할을 차지하면서도 세력 확장을 멈추지 않았다. 옛 미국의 지리적 위치를 그대로 답습한 길리아드는, 압도적인 군사력과 경제력으로 수많은 국가에 반강제적인 영향력을 행사했다.</p>
            <p>끝없는 정복과 전도를 통해 차례차례 병합된 국가들은 '약속의 땅(Promised Lands)'이라 불리며 길리아드의 질서를 따르게 되었다. 그리고 1965년 현재, 세계의 절반 이상이 길리아드의 지배 아래에 있다.</p>
          </div>
        </section>

        {/* IV. 또 다른 세계 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#0b0b0b]">
            <span className="font-heading-en">IV.</span>{" "}
            <span className="font-heading">또 다른 세계</span>
          </h2>
          <div className="space-y-4 text-[#0b0b0b] leading-relaxed">
            <p>대공황의 상처를 종교로 승화한 미국과 달리, 소비에트 연방은 자본주의를 폐기하고 공산주의를 채택하며 모든 인민의 평등을 주장했다. 소비에트 연방은 '신이 점지한 계급과 섭리를 따라야 한다'라는 창세교의 이상을 중세 봉건제로의 역행이라 냉소하며, 길리아드의 종교적 계급은 자본가의 독재와 다르지 않다고 주장한다. 공산주의 진영—이하 '소련'으로 지칭—은 주변 국가가 하나둘씩 창세교에 복속될 때도 꿋꿋이 별개의 체제를 유지했다.</p>
          </div>
        </section>

        {/* V. 정화된 평화 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#0b0b0b]">
            <span className="font-heading-en">V.</span>{" "}
            <span className="font-heading">정화된 평화</span>
          </h2>
          <div className="space-y-4 text-[#0b0b0b] leading-relaxed">
            <p>길리아드와 소련은 극명하게 대립하면서도 직접적으로 충돌하지는 않았다. 길리아드는 정화전 승리 후 북미와 남미를 통합하고 통치 체제를 확립하는 데 집중하였으며, 소련 역시 제1차 세계대전의 피해를 수습하고 혁명의 결실을 다지는 데 전력을 쏟았다. 외세에 집중할 여력이 없다는 이해관계가 맞물리면서 두 세력은 표면상으로는 평화를 유지했다. 그러나 국가의 기틀이 안정되어 갈 수록, 서로를 '신성모독자', '봉건적 기만 세력'이라 부르며 체제 우위를 주장하는 냉정한 대립 구도가 형성되었는데, 이것이 곧 냉전의 서막이었다.</p>
          </div>
        </section>

        {/* VI. 물밑의 전쟁 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#0b0b0b]">
            <span className="font-heading-en">VI.</span>{" "}
            <span className="font-heading">물밑의 전쟁</span>
          </h2>
          <div className="space-y-4 text-[#0b0b0b] leading-relaxed">
            <p>길리아드와 소련은 표면적으로 평화를 고수하면서도 물밑에서는 끊임없이 서로를 배격하기 시작했다.</p>
            <p>길리아드는 평등이라는 개념이 신의 섭리를 거스르는 허상이라 믿으며, 소련 인민들을 구원할 종교적 의무가 있다고 주장했다. 반면 소련은 창세교가 인민을 기만하고 착취하는 자본가들의 도구일 뿐이며, 종교적 계급은 봉건제로의 역행이라고 비난했다.</p>
            <p>이러한 이념적 대립은 경제적인 이해관계와도 맞물려 상충했다. 자본주의 국가인 길리아드는 공급 과잉 해소를 위해 새로운 수출 시장 개척을 원했지만, 공산주의 진영인 소련은 외화 자본을 거부하며 폐쇄적인 무역 정책을 고수했기 때문이다.</p>
            <p>이념적, 경제적 대립이 극심해질수록 공표되지 못한 군사적 비밀 결사 활동이 활발해졌다. 길리아드는 소련의 군사 기술을, 소련은 길리아드의 정치 동향을 파악하기 위해 끊임없는 스파이 활동을 벌였다. 첨예한 대립이 이어지면서 냉전의 긴장감은 최고조에 달하기 시작한다. 언제 전면전이 일어나도 이상하지 않을 만큼.</p>
          </div>
        </section>

        {/* VII. 현재 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#0b0b0b]">
            <span className="font-heading-en">VII.</span>{" "}
            <span className="font-heading">현재</span>
          </h2>
          <div className="space-y-4 text-[#0b0b0b] leading-relaxed">
            <p>현재로 돌아와 1965년 12월, 길리아드의 영사(Magistrate)중 한 명인 빅터 K. 할덴(Victor K. Halden)을 조명한다. 그는 알래스카 지역의 석유 산업을 총괄하는 거대 자본가이며, 자선활동의 일환으로 음악 신학교를 후원하고 있다. 17년 전 아내와 사별했으며, 그의 유일한 가족은 아들인 데이비드다.</p>
            <p>할덴 영사는 곧 다가올 정화 축일을 기념하여 특별한 교류회를 주최했다. '에덴의 만찬'이라 이름 붙인 이 모임은 동서 화합과 친목, 음악회를 겸한 장이었다. 알래스카의 호화로운 대저택에 30여 명의 참가자들이 초청되었다. 참가자는 길리아드와 다른 약속의 땅 출신뿐만 아니라, 적대적인 공산주의 진영과 중립적인 북유럽 지역의 인물까지 포함되었다. 계층에 구애받지 않은 다양한 배경의 사람들이 모여 일주일간 즐거운 시간을 보낼 예정이었다.</p>
            <p>이 저택에서 살인 사건이 벌어지기 전까지는 말이다.</p>
          </div>
        </section>

        <PageNavigation currentPath="/world" />
      </div>
    </main>
  );
}

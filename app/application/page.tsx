import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ApplicationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 pt-[84px] pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center my-12">
            <h1 className="section-title mb-4">APPLICATION FORM</h1>
            <p className="text-lg text-[#423e43]" style={{ fontFamily: 'var(--font-pretendard-medium)' }}>신청서 양식</p>
          </div>
          <div className="document-content prose prose-sm max-w-none">

            <br/>

            <div className="space-y-3 text-[#2f2c31]">
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>신청서는 <strong>구글 문서</strong>로 작성해야 합니다. 본 페이지의 내용은 열람용이며, 하단의 버튼을 통해 복사한 문서 사본을 편집하세요.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>수정 신청서는 수정 신청서 폼을 통해 재접수할 수 있습니다. (최대 2회) 신청서 제목 끝에 [+n차 수정]을 붙여, 수정 내용과 함께 제출 바랍니다. 수정 신청서 마감은 동일하게 18일 23시 59분입니다.</span>
              </div>
              <div className="flex items-start leading-normal md:leading-relaxed">
                <span className="text-[#594c65] mr-3 flex-shrink-0" style={{ fontFamily: "var(--font-eb-garamond)" }}>
                  ⦿
                </span>
                <span>△ 혹은 ✕ 를 받은 신청서는 메일을 통해 제출을 철회할 수 있습니다. [신청서 철회/캐릭터 이름/현황 닉네임]을 제목으로 한 메일을 mail@genesis-order.site로 전송합니다.</span>
              </div>
            </div>

            <br/>
            <div className="text-center my-6">
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://docs.google.com/document/d/19KDkytgYC-Q-lzsSNTSz-2-bWqE-hLyVXagyDW0Defc/copy?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#2f2c31] px-6 py-2 rounded-lg hover:bg-[#fff136] transition-colors max-w-[140px] w-[calc(50%-6px)] sm:w-[140px] border border-gray-300"
                  style={{ fontFamily: 'var(--font-pretendard-semibold)' }}
                >
                  사본 만들기
                </a>
                  <a
                  href="https://docs.google.com/spreadsheets/d/1xuPOQR5hKNfOoUl_5b55GbASovKsXnXWgK_-IC0h0Gs/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#2f2c31] px-6 py-2 rounded-lg hover:bg-[#fff136] transition-colors max-w-[140px] w-[calc(50%-6px)] sm:w-[140px] border border-gray-300"
                  style={{ fontFamily: 'var(--font-pretendard-semibold)' }}
                >
                  접수 현황
                </a>
              {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#2f2c31] px-6 py-2 rounded-lg hover:bg-[#fff136] transition-colors max-w-[140px] w-[calc(50%-6px)] sm:w-[140px] border border-gray-300"
                  style={{ fontFamily: 'var(--font-pretendard-semibold)' }}
                >
                  제출 폼
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#2f2c31] px-6 py-2 rounded-lg hover:bg-[#fff136] transition-colors max-w-[140px] w-[calc(50%-6px)] sm:w-[140px] border border-gray-300"
                  style={{ fontFamily: 'var(--font-pretendard-semibold)' }}
                >
                  수정 폼
                </a> */}
              </div>
            </div>
            <br/>
            <hr className="my-6 border-t border-gray-300" />
            <br/>
            <p className="text-[#9e9e9e]">본 커뮤니티는 신청서 현황에 캐릭터의 이름이 표기되지 않으며, 나이 또한 10대 후반~60대 후반으로 표기됩니다. 이름 대신 비고란에 작성하시는 <strong>현황 닉네임</strong>으로 합불합을 확인하실 수 있습니다.</p>
            <br/>

            <p className="text-[#9e9e9e]">본 커뮤니티의 신청서 양식에는 <strong>조율 희망 여부</strong>란이 존재합니다. 만약 소수 합격 요소나 중복 설정으로 인해 아쉽게 합격권에 들지 못하셨을 경우, 운영진이 12월 19일 오전 10시에 오너 계정의 DM을 통해 설정 변경을 요청드릴 수 있습니다.</p>
            <br/>

            <p className="text-[#9e9e9e]">본 커뮤니티는 <strong>준 실시간 합격자 발표제</strong>를 시행합니다.</p>
            <p className="text-[#9e9e9e]">신청서 접수 24시간 이내에 합격 가능성이 ● ◐ ○ △ ✕ 의 5가지 기호로 현황 시트에 표기됩니다. 가능성은 더 많은 신청서가 접수됨에 따라 실시간으로 변동합니다.</p>
            <br/>

            <p className="text-[#9e9e9e]"><strong>마감 1시간 이내</strong>에 접수된 신청서는 실시간 합발제를 적용하지 않습니다.</p>
            <p className="text-[#9e9e9e]">일괄 심사 후, 12월 19일에 전체 합격자 목록을 통해 발표합니다.</p>
            <br/>

            <p className="text-[#9e9e9e]">공개란의 모든 항목에는 거짓을 작성할 수 있습니다. 이 경우 진실은 비공개란에 기재합니다.</p>
            <br/>

            <p className="text-[#9e9e9e]">신청서 내 회색 안내 사항은 모두 지워주세요. 최상단에 기재된 커뮤 이름 삭제 여부는 자유입니다. 신청서 작성 전 모든 문서 및 공지 사항을 다시 한번 확인해 주시기를 바랍니다.</p>
            <br/>

            <p className="text-[#9e9e9e]">신청서의 길이는 합발에 영향을 미치지 않으나 캐릭터성을 알 수 없을 만큼 내용이 부족할 경우 합발에 불이익이 존재할 수 있습니다.</p>
            <br/>

            <p className="text-[#9e9e9e]">신청서를 제출함으로써 본 커뮤니티의 모든 문서를 숙지 및 동의하신 것으로 간주합니다.</p>

            <br/>
            <hr className="my-6 border-t border-gray-300" />
            <br/>
            <h2 className="mb-10">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded text-[16pt]" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                공개란
              </span>
            </h2>
            <p className="text-[12pt]">캐치프레이즈</p>
            <br/>
            <br/>
            <p className="text-[14pt]">&quot; <strong>캐릭터 한마디</strong> &quot;</p>
            <br/>
            <br/>

            <p><strong>〈 인장 〉</strong></p>
            <br/>
            <div className="my-4">
              <Image src="/images/profile.png" alt="인장" width={300} height={300} />
            </div>
            <br/>
            <p>출처 : Luigi Loir, The Champs Élysées, Paris</p>
            <br/>
            <p className="text-[#9e9e9e]">본 커뮤니티는 artvee 등에서 발견 가능한, 저작권이 만료된 명화 인장만을 허용합니다. 출처 미기재 시 오류 신청서로 분류합니다.</p>
            <br/>
            <br/>

            <p><strong>〈 외형 〉</strong></p>
            <br/>
            <div className="my-4">
              <Image src="/images/nanagom.png" alt="외형" width={300} height={300} />
            </div>
            <br/>
            <p>출처 : @NUEH_NANA 님 픽크루</p>
            <p>다운로드 링크 : 링크 첨부</p>
            <br/>
            <p className="text-[#9e9e9e]">본 커뮤니티는 원활한 캐릭터 외형 파악을 위해, 배경 투명화된 나나곰 픽크루 이미지 첨부를 요청합니다. 해당 픽크루는 2차 가공을 허용하므로 참고 바랍니다.</p>
            <p className="text-[#9e9e9e]">제작한 캐릭터 외관 픽크루로 위 기본 이미지를 교체하시고, 배경 투명화된 이미지 파일을 다운로드할 수 있는 링크를 기재해 주세요.</p>
            <p className="text-[#9e9e9e]">반드시 3줄 이상의 묘사가 필요합니다. 본 커뮤니티는 현실에 존재하는 외관을 지향합니다.</p>
            <br/>
            <br/>

            <p><strong>〈 이름 〉</strong></p>
            <br/>
            <p>한글 / 원어</p>
            <br/>
            <br/>

            <p><strong>〈 나이 〉</strong></p>
            <br/>
            <p>만 18세 이상 만 70세 이하</p>
            <br/>
            <br/>

            <p><strong>〈 키/몸무게 〉</strong></p>
            <br/>
            <p>키 / 몸무게</p>
            <br/>
            <br/>

            <p><strong>〈 진영 〉</strong></p>
            <br/>
            <p>길리아드 / 공산권 / 중립</p>
            <br/>
            <br/>

            <p><strong>〈 국적 〉</strong></p>
            <br/>
            <p>국가명</p>
            <br/>
            <br/>

            <p><strong>〈 직업 〉</strong></p>
            <br/>
            <p>공란 불가</p>
            <br/>
            <br/>

            <p><strong>〈 성격 〉</strong></p>
            <br/>
            <p className="text-[#9e9e9e]">키워드 3개 이상 필수</p>
            <p className="text-[#9e9e9e]">각 키워드 별로 2줄 이상의 서술 필수</p>
            <br/>
            <br/>

            <p><strong>〈 기타 〉</strong></p>
            <br/>
            <p className="text-[#9e9e9e]">캐릭터의 생년월일, 성별, 직업 및 분야, 평판, 특징, 개인사, 호불호, 취미 및 습관 등</p>
            <p className="text-[#9e9e9e]">추가로 서술하고 싶은 사항을 적어주세요.</p>
            <br/>
            <br/>

            <hr className="my-6 border-t border-gray-300" />
            <br/>

            <h2 className="mb-10">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded text-[16pt]" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                비공개란
              </span>
            </h2>

            <p className="text-[#9e9e9e]">공개 프로필과 동일한 정보를 공유하는 항목은 작성하지 않고 삭제합니다.</p>
            <br/>

            <p><strong>〈 이름 〉</strong></p>
            <br/>
            <p>한글 / 원어</p>
            <br/>
            <br/>

            <p><strong>〈 나이 〉</strong></p>
            <br/>
            <p>만 18세 이상 만 70세 이하</p>
            <br/>
            <br/>

            <p><strong>〈 진영 〉</strong></p>
            <br/>
            <p>길리아드 / 공산권 / 중립</p>
            <br/>
            <br/>

            <p><strong>〈 국적 〉</strong></p>
            <br/>
            <p>국가명</p>
            <br/>
            <br/>

            <p><strong>〈 직업 〉</strong></p>
            <br/>
            <p className="text-[#9e9e9e]">공란 불가</p>
            <br/>
            <br/>

            <p><strong>〈 비밀 설정 〉</strong></p>
            <br/>
            <p className="text-[#9e9e9e]">공란 불가</p>
            <p className="text-[#9e9e9e]">캐릭터의 과거사, 성격, 신념, 사상, 원하는 것 등</p>
            <p className="text-[#9e9e9e]">공개 프로필에 게시할 수 없는 정보를 자유롭게 작성해주시기 바랍니다.</p>
            <p className="text-[#9e9e9e]">캐릭터 스스로도 모르고 있거나 공개하고 싶지 않은 비밀 설정은</p>
            <p className="text-[#9e9e9e]">비고란의 〈추가 비밀 설정〉란에 작성 바랍니다.</p>
            <br/>
            <br/>

            <p><strong>〈 추적 시 발견할 수 있는 소지품 〉</strong></p>
            <br/>
            <table className="w-full max-w-[600px] border-collapse border border-[#2f2c31]">
              <thead>
                <tr style={{ backgroundColor: '#fff682' }}>
                  <th className="border border-[#2f2c31] px-4 py-2 text-left w-[105px] font-normal">소지품</th>
                  <th className="border border-[#2f2c31] px-4 py-2 text-left font-normal">설명</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[#9e9e9e]">
                  <td className="border border-[#2f2c31] px-4 py-2 w-[105px]">낡은 펜던트</td>
                  <td className="border border-[#2f2c31] px-4 py-2">펜던트를 열어보면 빛이 바랜 여자의 사진이 나온다. 어두운 머리색을 한 여자는 보자기에 싸인 아이를 바라보고 있다. 이 여성은 캐릭터의 아내로, 죽은 아내를 그리워하며 항상 지니고 다니는 물품이다. 방의 책상 위에서 발견할 수 있다.</td>
                </tr>
                <tr className="text-white">
                  <td className="border border-[#2f2c31] px-4 py-2 w-[105px]">-</td>
                  <td className="border border-[#2f2c31] px-4 py-2">-</td>
                </tr>
                <tr className="text-white">
                  <td className="border border-[#2f2c31] px-4 py-2 w-[105px]">-</td>
                  <td className="border border-[#2f2c31] px-4 py-2">-</td>
                </tr>
                <tr className="text-white">
                  <td className="border border-[#2f2c31] px-4 py-2 w-[105px]">-</td>
                  <td className="border border-[#2f2c31] px-4 py-2">-</td>
                </tr>
              </tbody>
            </table>
            <br/>
            <p className="text-[#9e9e9e]">캐릭터가 머무는 방에서 발견할 수 있는 소지품을 기재합니다.</p>
            <p className="text-[#9e9e9e]">캐릭터의 비밀 설정과 관련된 물품이거나 용의자로 의심받을 만한 물건이면 더욱 좋습니다.</p>
            <p className="text-[#9e9e9e]">꼭 방이 아니라 특정 장소에 남긴 흔적도 가능합니다.</p>
            <p className="text-[#9e9e9e]">(예: 캐릭터가 나왔던 화장실에 들어가자 빨간 립스틱으로 X자를 그은 흔적을 발견 가능)</p>
            <br/>
            <br/>

            <p><strong>〈 추적 시 알아낼 수 있는 정보 〉</strong></p>
            <br/>
            <table className="w-full max-w-[600px] border-collapse border border-[#2f2c31]">
              <thead>
                <tr style={{ backgroundColor: '#fff682' }}>
                  <th className="border border-[#2f2c31] px-4 py-2 text-left font-normal">정보</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[#9e9e9e]">
                  <td className="border border-[#2f2c31] px-4 py-2">캐릭터는 어느 날 3시부터 4시까지 연회장에서 사라진다. 그렇게 돌아온 캐릭터는 피곤한 기색을 감추지 못하는 얼굴을 하고 있다. 이는 그가 주기적으로 바깥 공기를 마셔야 한다는 비밀 설정을 반영한 것으로, 만약 다음 날 이 시간에 캐릭터를 쫓는다면 급한 얼굴로 창문을 찾아 복도를 돌아다니는 모습을 볼 수 있다.</td>
                </tr>
                <tr className="text-white">
                  <td className="border border-[#2f2c31] px-4 py-2">-</td>
                </tr>
                <tr className="text-white">
                  <td className="border border-[#2f2c31] px-4 py-2">-</td>
                </tr>
              </tbody>
            </table>
            <br/>
            <p className="text-[#9e9e9e]">[추적]을 통해 다른 캐릭터가 이 캐릭터로부터 얻어낼 수 있는 정보를 기재합니다.</p>
            <p className="text-[#9e9e9e]">반드시 두 가지 이상, 각 항목은 3줄 이상 작성합니다.</p>
            <p className="text-[#9e9e9e]">다른 캐릭터는 이 정보를 통해 이 캐릭터를 용의선상에 포함시키거나 제외합니다.</p>
            <p className="text-[#9e9e9e]">비밀 설정, 또는 범인 블러핑을 위한 내용을 적을 수 있습니다.</p>
            <br/>
            <br/>

            <p><strong>〈 어쩌다가 저택에 머물게 되셨나요? 〉</strong></p>
            <br/>
            <p className="text-[#9e9e9e]">캐릭터의 말투를 사용한 대화체가 주가 되어야 합니다.</p>
            <p className="text-[#9e9e9e]">공백 포함 20자 이상, 700자 이하로 답합니다.</p>
            <br/>
            <br/>

            <hr className="my-6 border-t border-gray-300" />
            <br/>

            <h2 className="mb-10">
              <span className="text-[#2f2c31] bg-[#fff136] px-2 py-1 rounded text-[16pt]" style={{ fontFamily: 'var(--font-pretendard-bold)' }}>
                비고란
              </span>
            </h2>

            <p><strong>〈 현황 닉네임 〉</strong></p>
            <br/>
            <p className="text-[#9e9e9e]">신청서 접수 현황에 표시할 닉네임을 기재합니다.</p>
            <p className="text-[#9e9e9e]">공백 미포함 2글자에서 7글자 사이여야 합니다.</p>
            <p className="text-[#9e9e9e]">캐릭터 및 오너와 무관한 단어를 사용하세요.</p>
            <br/>
            <br/>

            <p><strong>〈 능력 〉</strong></p>
            <br/>
            <table className="border-collapse border border-[#2f2c31] max-w-md">
              <tbody>
                <tr>
                  <td className="border border-[#2f2c31] px-4 py-2" style={{ backgroundColor: '#fff682' }}>행동</td>
                  <td className="border border-[#2f2c31] px-4 py-2">●●●○○</td>
                </tr>
                <tr>
                  <td className="border border-[#2f2c31] px-4 py-2" style={{ backgroundColor: '#fff682' }}>논리</td>
                  <td className="border border-[#2f2c31] px-4 py-2">●●○○○</td>
                </tr>
                <tr>
                  <td className="border border-[#2f2c31] px-4 py-2" style={{ backgroundColor: '#fff682' }}>관찰</td>
                  <td className="border border-[#2f2c31] px-4 py-2">●○○○○</td>
                </tr>
                <tr>
                  <td className="border border-[#2f2c31] px-4 py-2" style={{ backgroundColor: '#fff682' }}>직감</td>
                  <td className="border border-[#2f2c31] px-4 py-2">○○○○○</td>
                </tr>
              </tbody>
            </table>
            <br/>
            <p className="text-[#9e9e9e]">6점의 능력치를 적절히 배분합니다.</p>
            <p className="text-[#9e9e9e]">각 능력에는 최소 0점, 최대 5점을 배분할 수 있습니다.</p>
            <p className="text-[#9e9e9e]">배분한 점수는 ●로 표시합니다.</p>
            <br/>
            <br/>

            <p><strong>〈 추가 비밀 설정 〉</strong></p>
            <br/>
            <p className="text-[#9e9e9e]">공란 가능</p>
            <p className="text-[#9e9e9e]">비공개란의 〈비밀 설정〉 항목에 작성하지 못한 내용을 기재 바랍니다.</p>
            <br/>
            <br/>

            <p><strong>〈 러닝 IF 〉</strong></p>
            <br/>
            <p className="text-[#9e9e9e]">공란 가능</p>
            <p className="text-[#9e9e9e]">오너 성향 및 러닝 목표, 캐릭터의 목표 등을 간단히 적어주세요.</p>
            <br/>
            <br/>

            <p><strong>〈 조율 희망 여부 〉</strong></p>
            <br/>
            <p>예 / 아니오</p>
            <p className="text-[#9e9e9e]">12월 19일 오전 10시에 기재한 오너 계정 DM을 통해 총괄진 측이 희망하는 조율 사항을 말씀드립니다.</p>
            <p className="text-[#9e9e9e]">조율을 수락하실 경우 설정 변경 후에 합격하실 수 있습니다. 이를 희망하신다면 &apos;예&apos;를 선택해 주세요.</p>
            <p className="text-[#9e9e9e]">조율 DM이 발송되지 않았음이 불합격을 의미하지 않습니다.</p>
            <br/>
            <br/>

            <p><strong>〈 조율 혹은 경고가 필요한 요소 〉</strong></p>
            <br/>
            <p className="text-[#9e9e9e]">컨텐츠 워닝이 필요하거나 스토리 진행 중 피해야 하는 요소를 기재 바랍니다.</p>
            <p className="text-[#9e9e9e]">경우에 따라 반영하지 못할 수 있으나, 최대한 불편함 없는 러닝이 되실 수 있도록 노력하겠습니다.</p>
            <br/>
            <br/>

            <p><strong>〈 역극 첨부 〉</strong></p>
            <br/>
            <p className="text-[#9e9e9e]">본 커뮤니티가 첫커가 아님을 확인하기 위해 역극 캡처본을 확인하고 있습니다.</p>
            <p className="text-[#9e9e9e]">멘션 2개 이상(상대 멘션 카운트 X)의 역극 캡처본을 첨부해 주세요.</p>
            <p className="text-[#9e9e9e]">상대 캐릭터의 역극, 캐릭터명과 아이디는 가릴 수 있습니다.</p>
            <p className="text-[#9e9e9e]">역극 캡처본이 없을 경우, 공백 포함 500자 이상의 글로그 캡처본을 첨부해주시기 바랍니다.</p>
            <br/>
            <br/>

            <p><strong>〈 트위터 계정 〉</strong></p>
            <br/>
            <p>@아이디</p>
            <p className="text-[#9e9e9e]">빠르게 연락을 받을 수 있는 본계정으로 기재 바랍니다.</p>
            <p className="text-[#9e9e9e]">팔로잉/팔로워 한자릿수의 접수용 계정 및 부계 기재는 불합격의 원인이 될 수 있습니다.</p>
            <br/>
            <br/>

            <p><strong>〈 성인인증 〉</strong></p>
            <br/>
            <p>0000</p>
            <p className="text-[#9e9e9e]">ISBN 숫자 뒷자리 4개를 기재하세요.</p>
            <br/>
          </div>

          <div className="text-center my-6">
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://docs.google.com/document/d/19KDkytgYC-Q-lzsSNTSz-2-bWqE-hLyVXagyDW0Defc/copy?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#2f2c31] px-6 py-2 rounded-lg hover:bg-[#fff136] transition-colors max-w-[140px] w-[calc(50%-6px)] sm:w-[140px] border border-gray-300"
                style={{ fontFamily: 'var(--font-pretendard-semibold)' }}
              >
                사본 만들기
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

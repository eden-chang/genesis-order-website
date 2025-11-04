import Link from "next/link";

export default function Home() {
  const pages = [
    {
      title: "공지사항",
      href: "/notice",
      description: "중요한 공지사항과 업데이트 내용",
    },
    {
      title: "세계관",
      href: "/world",
      description: "Genesis Order의 세계관과 역사",
    },
    {
      title: "시스템",
      href: "/system",
      description: "게임 시스템 및 규칙",
    },
    {
      title: "캐릭터 가이드",
      href: "/character",
      description: "캐릭터 생성 및 운영 가이드",
    },
    {
      title: "신청서 양식",
      href: "/application",
      description: "캐릭터 신청서 작성",
    },
    {
      title: "질의응답",
      href: "/questions",
      description: "자주 묻는 질문과 답변",
    },
  ];

  return (
    <main className="min-h-screen px-4 pt-4 pb-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="section-title mb-4">Genesis Order</h1>
          <p className="text-xl text-[#0b0b0b] font-heading">창세의 질서</p>
        </header>

        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block p-6 bg-white rounded-lg border-2 border-gray-300 hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                {page.title}
              </h2>
              <p className="text-gray-600">
                {page.description}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}

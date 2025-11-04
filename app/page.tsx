import Link from "next/link";

export default function Home() {
  const pages = [
    {
      title: "공지사항",
      href: "/announcements",
      description: "중요한 공지사항과 업데이트 내용",
      icon: "📢",
    },
    {
      title: "세계관",
      href: "/worldview",
      description: "Genesis Order의 세계관과 역사",
      icon: "🌍",
    },
    {
      title: "캐릭터 가이드",
      href: "/characters",
      description: "캐릭터 생성 및 운영 가이드",
      icon: "👤",
    },
    {
      title: "신청서 양식",
      href: "/application",
      description: "캐릭터 신청서 작성",
      icon: "📝",
    },
    {
      title: "시스템",
      href: "/system",
      description: "게임 시스템 및 규칙",
      icon: "⚙️",
    },
  ];

  return (
    <main className="min-h-screen px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="section-title mb-4">Genesis Order</h1>
          <p className="text-xl text-gray-300">창세의 질서</p>
        </header>

        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              <div className="text-4xl mb-4">{page.icon}</div>
              <h2 className="text-2xl font-heading font-bold text-yellow-400 mb-2 group-hover:text-yellow-300">
                {page.title}
              </h2>
              <p className="text-gray-400 group-hover:text-gray-300">
                {page.description}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}

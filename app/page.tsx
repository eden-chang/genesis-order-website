import Link from "next/link";

export default function Home() {
  const pages = [
    {
      title: "공지사항",
      href: "/notice",
    },
    {
      title: "세계관",
      href: "/world",
    },
    {
      title: "시스템",
      href: "/system",
    },
    {
      title: "캐릭터 가이드",
      href: "/character",
    },
    {
      title: "신청서 양식",
      href: "/application",
    },
    {
      title: "질의응답",
      href: "/questions",
    },
  ];

  return (
    <main className="min-h-screen px-4 pt-12 pb-16 bg-white">
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
              <h2 className="text-2xl font-heading font-bold text-primary">
                {page.title}
              </h2>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}

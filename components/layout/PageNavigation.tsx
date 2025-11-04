import Link from "next/link";

const pages = [
  { title: "공지사항", href: "/notice" },
  { title: "세계관", href: "/world" },
  { title: "시스템", href: "/system" },
  { title: "캐릭터 가이드", href: "/character" },
  { title: "신청서 양식", href: "/application" },
  { title: "질의응답", href: "/questions" },
];

interface PageNavigationProps {
  currentPath: string;
  position?: "top" | "bottom";
}

export default function PageNavigation({ currentPath, position = "bottom" }: PageNavigationProps) {
  const currentIndex = pages.findIndex((page) => page.href === currentPath);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;
  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex === pages.length - 1;

  // 상단은 아래쪽 구분선만, 하단은 위쪽 구분선만
  const borderClass = position === "top" ? "border-b-2" : "border-t-2";

  // 첫 페이지: 왼쪽에 "이전 / < 목록"
  if (isFirstPage) {
    return (
      <div className={`${borderClass} border-[#e4a408] py-5 ${position === "top" ? "mt-4 mb-12" : "mt-12 mb-4"}`}>
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <Link
              href="/"
              className="inline-flex items-center text-gray-500 hover:opacity-70 transition-opacity text-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <div>
                <div className="text-xs text-gray-600">이전</div>
                <div className="font-medium">목록</div>
              </div>
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            {nextPage && (
              <Link
                href={nextPage.href}
                className="inline-flex items-center text-gray-500 hover:opacity-70 transition-opacity text-sm"
              >
                <div className="text-right">
                  <div className="text-xs text-gray-600">다음</div>
                  <div className="font-medium">{nextPage.title}</div>
                </div>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 마지막 페이지: 오른쪽에 "다음 / 목록 >"
  if (isLastPage) {
    return (
      <div className={`${borderClass} border-[#e4a408] py-5 ${position === "top" ? "mt-4 mb-12" : "mt-12 mb-4"}`}>
        <div className="flex justify-between items-center">
          <div className="flex-1">
            {prevPage && (
              <Link
                href={prevPage.href}
                className="inline-flex items-center text-gray-500 hover:opacity-70 transition-opacity text-sm"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <div>
                  <div className="text-xs text-gray-600">이전</div>
                  <div className="font-medium">{prevPage.title}</div>
                </div>
              </Link>
            )}
          </div>

          <div className="flex-1 flex justify-end">
            <Link
              href="/"
              className="inline-flex items-center text-gray-500 hover:opacity-70 transition-opacity text-sm"
            >
              <div className="text-right">
                <div className="text-xs text-gray-600">다음</div>
                <div className="font-medium">목록</div>
              </div>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 중간 페이지들: 기존 디자인 유지
  return (
    <div className={`${borderClass} border-[#e4a408] py-5 ${position === "top" ? "mt-4 mb-12" : "mt-12 mb-4"}`}>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          {prevPage && (
            <Link
              href={prevPage.href}
              className="inline-flex items-center text-gray-500 hover:opacity-70 transition-opacity text-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <div>
                <div className="text-xs text-gray-600">이전</div>
                <div className="font-medium">{prevPage.title}</div>
              </div>
            </Link>
          )}
        </div>

        <Link
          href="/"
          className="px-5 py-2 text-gray-500 hover:opacity-70 transition-opacity font-medium text-sm"
        >
          목록으로
        </Link>

        <div className="flex-1 flex justify-end">
          {nextPage && (
            <Link
              href={nextPage.href}
              className="inline-flex items-center text-gray-500 hover:opacity-70 transition-opacity text-sm"
            >
              <div className="text-right">
                <div className="text-xs text-gray-600">다음</div>
                <div className="font-medium">{nextPage.title}</div>
              </div>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

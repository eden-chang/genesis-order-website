import Link from "next/link";
import PageNavigation from "@/components/layout/PageNavigation";

export default function QnAPage() {
  return (
    <main className="min-h-screen px-4 pt-2 pb-16 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* 상단 네비게이션 */}
        <PageNavigation currentPath="/questions" position="top" />

        <div className="text-center my-12">
          <h1 className="section-title mb-4">Q&A</h1>
          <p className="text-xl text-[#0b0b0b] font-heading">질의응답</p>
        </div>
        <div className="document-content">
          <p className="text-gray-600">질의응답 내용이 여기에 표시됩니다.</p>
        </div>

        <PageNavigation currentPath="/questions" />
      </div>
    </main>
  );
}

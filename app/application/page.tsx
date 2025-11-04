import Link from "next/link";
import PageNavigation from "@/components/layout/PageNavigation";

export default function ApplicationPage() {
  return (
    <main className="min-h-screen px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* 상단 네비게이션 */}
        <PageNavigation currentPath="/application" position="top" />

        <div className="text-center my-12">
          <h1 className="section-title mb-4">Application Form</h1>
          <p className="text-xl text-[#0b0b0b] font-heading">신청서 양식</p>
        </div>
        <div className="document-content">
          <p className="text-gray-600">신청서 양식이 여기에 표시됩니다.</p>
        </div>

        <PageNavigation currentPath="/application" />
      </div>
    </main>
  );
}

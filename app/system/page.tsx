import Link from "next/link";
import PageNavigation from "@/components/layout/PageNavigation";

export default function SystemPage() {
  return (
    <main className="min-h-screen px-4 pt-2 pb-16 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* 상단 네비게이션 */}
        <PageNavigation currentPath="/system" position="top" />

        <div className="text-center my-12">
          <h1 className="section-title mb-4">System</h1>
          <p className="text-xl text-[#0b0b0b] font-heading">시스템</p>
        </div>
        <div className="document-content">
          <p className="text-gray-600">시스템 내용이 여기에 표시됩니다.</p>
        </div>

        <PageNavigation currentPath="/system" />
      </div>
    </main>
  );
}

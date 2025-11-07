import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function QnAPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 pt-[84px] pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center my-12">
            <h1 className="section-title mb-4">Q&A</h1>
            <p className="text-lg text-[#423e43]" style={{ fontFamily: 'var(--font-pretendard-medium)' }}>질의응답</p>
          </div>
          <div className="document-content">
            <p className="text-gray-600">질의응답 내용이 여기에 표시됩니다.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

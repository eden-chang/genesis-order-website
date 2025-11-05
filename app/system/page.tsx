import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SystemPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 pt-[84px] pb-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center my-12">
            <h1 className="section-title mb-4">System</h1>
            <p className="text-xl text-[rgb(215,145,24)] font-heading">시스템</p>
          </div>
          <div className="document-content">
            <p className="text-gray-600">시스템 내용이 여기에 표시됩니다.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ApplicationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 pt-[84px] pb-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center my-12">
            <h1 className="section-title mb-4">Application Form</h1>
            <p className="text-xl text-[rgb(215,145,24)] font-heading">신청서 양식</p>
          </div>
          <div className="document-content">
            <p className="text-gray-600">신청서 양식이 여기에 표시됩니다.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

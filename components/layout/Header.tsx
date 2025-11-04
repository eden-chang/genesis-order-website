import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link href="/" className="text-2xl font-heading-en font-bold text-primary hover:opacity-80">
          Genesis Order
        </Link>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link href="/" className="text-2xl font-heading font-bold text-yellow-400 hover:text-yellow-300">
          Genesis Order
        </Link>
      </div>
    </header>
  );
}

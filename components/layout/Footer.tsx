export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Genesis Order. All rights reserved.</p>
      </div>
    </footer>
  );
}

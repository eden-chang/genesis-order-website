export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Genesis Order. All rights reserved.</p>
      </div>
    </footer>
  );
}

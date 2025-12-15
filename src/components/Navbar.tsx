import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-lg">A</span>
            </div>
            <span className="text-xl font-black text-gray-900 group-hover:text-orange-500 transition-colors">
              Axiomaths
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <Link href="/college">
              <button className="px-5 py-2 rounded-lg font-semibold text-sm text-gray-700 hover:bg-gray-100 transition-all">
                Collège
              </button>
            </Link>
            <Link href="/lycee">
              <button className="px-5 py-2 rounded-lg font-semibold text-sm bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                Lycée
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
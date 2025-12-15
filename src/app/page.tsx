import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Plateforme éducative tunisienne
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
            Axiomaths
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-serif">
            Maîtrisez les mathématiques avec des milliers d'exercices pour collège et lycée
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <Link href="/college" className="group block">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-200 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-white text-2xl font-black">C</span>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h2 className="text-3xl font-black mb-3 text-gray-900 group-hover:text-orange-500 transition-colors">
                Collège
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Programmes de 7ème, 8ème et 9ème année
              </p>
              <div className="flex gap-2 text-sm text-gray-500">
                <span className="px-3 py-1 rounded-full bg-gray-100">7ème</span>
                <span className="px-3 py-1 rounded-full bg-gray-100">8ème</span>
                <span className="px-3 py-1 rounded-full bg-gray-100">9ème</span>
              </div>
            </div>
          </Link>

          <Link href="/lycee" className="group block">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-200 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <span className="text-white text-2xl font-black">L</span>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h2 className="text-3xl font-black mb-3 text-gray-900 group-hover:text-orange-500 transition-colors">
                Lycée
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Programmes de 1ère, 2ème, 3ème et 4ème année
              </p>
              <div className="flex gap-2 text-sm text-gray-500">
                <span className="px-3 py-1 rounded-full bg-gray-100">1ère</span>
                <span className="px-3 py-1 rounded-full bg-gray-100">2ème</span>
                <span className="px-3 py-1 rounded-full bg-gray-100">3ème</span>
                <span className="px-3 py-1 rounded-full bg-gray-100">4ème</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <div className="text-sm text-gray-600 font-semibold">Exercices</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">
              7
            </div>
            <div className="text-sm text-gray-600 font-semibold">Niveaux</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-br from-green-500 to-green-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-gray-600 font-semibold">Gratuit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';

const levels = [
  { id: '7eme', name: '7ème Année', description: 'Première année du collège' },
  { id: '8eme', name: '8ème Année', description: 'Deuxième année du collège' },
  { id: '9eme', name: '9ème Année', description: 'Troisième année du collège' },
];

export default function CollegePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-orange-50 dark:bg-orange-900/30 border-2 border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-orange-500 animate-pulse inline-block mr-2"></span>
            Enseignement de base
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent leading-tight">
            Collège
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-serif">
            Programmes de 7ème, 8ème et 9ème année
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((level) => (
            <Link key={level.id} href={`/college/${level.id}`} className="group block">
              <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-xl hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-200">
                <h2 className="text-5xl font-black mb-3 text-orange-500 group-hover:text-orange-600 transition-colors">
                  {level.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {level.description}
                </p>
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold">
                  ACCÉDER
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';

const levels = [
  { id: '1ere', name: '1ère Année', description: 'Tronc commun' },
  { id: '2eme', name: '2ème Année', description: '5 sections' },
  { id: '3eme', name: '3ème Année', description: '7 sections' },
  { id: '4eme', name: '4ème Année', description: '7 sections' },
];

export default function LyceePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-blue-500 animate-pulse inline-block mr-2"></span>
            Enseignement secondaire
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent leading-tight">
            Lycée
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-serif">
            Programmes de 1ère, 2ème, 3ème et 4ème année
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {levels.map((level) => (
            <Link key={level.id} href={`/lycee/${level.id}`} className="group block">
              <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200">
                <h2 className="text-5xl font-black mb-3 text-orange-500 group-hover:text-blue-500 transition-colors">
                  {level.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {level.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
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
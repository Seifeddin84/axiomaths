import Link from 'next/link';

const LEVEL_COLORS: Record<string, { from: string; to: string; border: string }> = {
  '7eme': { from: 'from-blue-500', to: 'to-indigo-600', border: 'border-blue-700' },
  '8eme': { from: 'from-green-500', to: 'to-emerald-600', border: 'border-green-700' },
  '9eme': { from: 'from-purple-500', to: 'to-pink-600', border: 'border-purple-700' },
};

export default function CollegePage() {
  const levels = [
    { id: '7eme', name: '7ème Année' },
    { id: '8eme', name: '8ème Année' },
    { id: '9eme', name: '9ème Année' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black mb-4 leading-none">
            COLLÈGE
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-300 font-light">
            Choisissez votre année
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Level Cards */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level) => {
              const colors = LEVEL_COLORS[level.id];
              
              return (
                <Link
                  key={level.id}
                  href={`/college/${level.id}`}
                  className="group block relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.from} ${colors.to} transform group-hover:scale-105 transition-transform duration-300`}></div>
                  <div className={`relative p-8 border-4 ${colors.border}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-4xl font-black text-white leading-tight">
                        {level.name}
                      </h2>
                      <svg className="w-10 h-10 text-white transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    
                    <div className="h-1 w-20 bg-white"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
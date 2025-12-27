import Link from 'next/link';
import { getMathematiciansGroupedByLetter } from '@/lib/mathematicianReader';

export default async function MathematiciansPage() {
  const groupedMathematicians = getMathematiciansGroupedByLetter();
  const letters = Object.keys(groupedMathematicians).sort();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-6xl sm:text-7xl font-black mb-4 leading-tight">
            MATHÉMATICIENS
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-2xl">
            Index alphabétique des grands mathématiciens qui ont marqué l'histoire
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Alphabetical Index */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {letters.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-16 text-center">
              <div className="text-6xl mb-6">🧮</div>
              <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Aucun mathématicien disponible</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Les profils seront bientôt ajoutés.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {letters.map((letter) => (
                <div key={letter}>
                  {/* Letter Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                      <span className="text-3xl font-black text-white">{letter}</span>
                    </div>
                    <div className="flex-1 h-1 bg-gradient-to-r from-purple-200 to-transparent dark:from-purple-800"></div>
                  </div>

                  {/* Mathematicians Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupedMathematicians[letter].map((mathematician) => (
                      <Link
                        key={mathematician.slug}
                        href={`/resources/mathematicians/${mathematician.slug}`}
                        className="group block"
                      >
                        <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 h-full hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                                {mathematician.name}
                              </h3>
                              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {mathematician.birth}–{mathematician.death || 'présent'}
                              </div>
                              {mathematician.nationality && (
                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                  {mathematician.nationality}
                                </div>
                              )}
                              {mathematician.fields && mathematician.fields.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {mathematician.fields.slice(0, 2).map((field, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold"
                                    >
                                      {field}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
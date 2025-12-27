import Link from 'next/link';
import { getMathematiciansGroupedByLetter } from '@/lib/mathematicianReader';

export default function MathematiciansPage() {
  const groupedMathematicians = getMathematiciansGroupedByLetter();
  const letters = Object.keys(groupedMathematicians).sort();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-900/30 border-2 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-purple-500 animate-pulse inline-block mr-2"></span>
            Ressources
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent leading-tight">
            Grands Mathématiciens
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-serif">
            Index alphabétique des mathématiciens qui ont marqué l'histoire
          </p>
        </div>

        {/* Alphabetical Index */}
        {letters.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-12 text-center">
            <h2 className="text-2xl font-black text-gray-600 dark:text-gray-400 mb-2">
              Aucun mathématicien disponible
            </h2>
            <p className="text-gray-500 dark:text-gray-500">
              Les profils seront bientôt ajoutés.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {letters.map(letter => (
              <div key={letter} id={letter}>
                {/* Letter Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <span className="text-4xl font-black text-white">{letter}</span>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-purple-200 to-transparent dark:from-purple-800"></div>
                </div>

                {/* Mathematicians in this letter */}
                <div className="space-y-4">
                  {groupedMathematicians[letter].map(mathematician => (
                    <Link
                      key={mathematician.slug}
                      href={`/resources/mathematicians/${mathematician.slug}`}
                      className="group block"
                    >
                      <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-500 transition-all">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                              {mathematician.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              {mathematician.birth} - {mathematician.death} • {mathematician.nationality}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {mathematician.fields.map(field => (
                                <span
                                  key={field}
                                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-black"
                                >
                                  {field}
                                </span>
                              ))}
                            </div>
                          </div>
                          <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Quick Jump Navigation */}
        {letters.length > 0 && (
          <div className="mt-12 p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-black mb-4 text-gray-900 dark:text-white">Navigation rapide</h3>
            <div className="flex flex-wrap gap-2">
              {letters.map(letter => (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="w-10 h-10 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-black hover:bg-purple-500 hover:text-white transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
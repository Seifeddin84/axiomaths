import Link from 'next/link';

export default function CollegePage() {
  const levels = [
    {
      id: '7eme',
      title: '7ème Année',
      description: 'Exercices de mathématiques pour la 7ème année du collège',
      chapters: ['Géométrie', 'Algèbre', 'Calcul numérique'],
    },
    {
      id: '8eme',
      title: '8ème Année',
      description: 'Exercices de mathématiques pour la 8ème année du collège',
      chapters: ['Équations', 'Géométrie dans l\'espace', 'Statistiques'],
    },
    {
      id: '9eme',
      title: '9ème Année',
      description: 'Exercices de mathématiques pour la 9ème année du collège',
      chapters: ['Calcul littéral', 'Théorème de Pythagore', 'Trigonométrie'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
          Collège
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">
          Exercices de mathématiques pour le collège tunisien : 7ème, 8ème et 9ème année
        </p>
      </div>

      {/* Level Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <Link
            key={level.id}
            href={`/college/${level.id}`}
            className="group p-6 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent-500 dark:hover:border-primary-500 hover:shadow-lg transition-all"
          >
            {/* Title */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors">
                {level.title}
              </h2>
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-accent-500 dark:group-hover:text-primary-500 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 font-semibold mb-4">
              {level.description}
            </p>

            {/* Chapters */}
            <div className="space-y-2">
              {level.chapters.map((chapter) => (
                <div
                  key={chapter}
                  className="flex items-center text-sm text-gray-500 dark:text-gray-500"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {chapter}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Info Box */}
      <div className="mt-12 p-6 bg-accent-50 dark:bg-primary-900/20 border-l-4 border-accent-500 dark:border-primary-500 rounded-lg">
        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
          À propos du collège
        </h3>
        <p className="text-gray-700 dark:text-gray-300 font-semibold">
          Les exercices du collège couvrent les trois années (7ème, 8ème et 9ème) avec des chapitres adaptés au programme tunisien. Chaque exercice est corrigé et classé par difficulté.
        </p>
      </div>
    </div>
  );
}
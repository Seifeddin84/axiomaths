import Link from 'next/link';

export default async function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-6xl font-black text-gray-900 dark:text-white mb-6">
          Maîtrisez les mathématiques
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 font-semibold">
          Une collection complète d'exercices de mathématiques pour le collège et le lycée tunisien
        </p>
        
        {/* FIXED: Better button colors! */}
        <div className="flex items-center justify-center gap-4">
          {/* Primary button - Colored background */}
          <Link
            href="/recherche"
            className="px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 active:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
          >
            Rechercher des exercices
          </Link>
          
          {/* Secondary buttons - Orange in light, Teal in dark */}
          <Link
            href="/lycee"
            className="px-6 py-3 border-2 border-accent-500 dark:border-primary-500 text-accent-600 dark:text-primary-400 font-bold rounded-lg hover:bg-accent-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors"
          >
            Lycée
          </Link>
          <Link
            href="/college"
            className="px-6 py-3 border-2 border-accent-500 dark:border-primary-500 text-accent-600 dark:text-primary-400 font-bold rounded-lg hover:bg-accent-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors"
          >
            Collège
          </Link>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Lycée */}
        <Link
          href="/lycee"
          className="group p-8 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent-500 dark:hover:border-primary-500 hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors">
              Lycée
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
          <p className="text-gray-600 dark:text-gray-400 font-semibold">
            Exercices pour les 4 années du lycée : 1ère, 2ème, 3ème et 4ème année
          </p>
        </Link>

        {/* Collège */}
        <Link
          href="/college"
          className="group p-8 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent-500 dark:hover:border-primary-500 hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors">
              Collège
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
          <p className="text-gray-600 dark:text-gray-400 font-semibold">
            Exercices pour le collège : 7ème, 8ème et 9ème année
          </p>
        </Link>

        {/* Devoirs */}
        <Link
          href="/devoirs"
          className="group p-8 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent-500 dark:hover:border-primary-500 hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors">
              Devoirs
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
          <p className="text-gray-600 dark:text-gray-400 font-semibold">
            Sujets de devoirs et examens pour s'entraîner
          </p>
        </Link>

        {/* Blog */}
        <Link
          href="/blog"
          className="group p-8 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent-500 dark:hover:border-primary-500 hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors">
              Blog
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
          <p className="text-gray-600 dark:text-gray-400 font-semibold">
            Articles et ressources sur les mathématiques
          </p>
        </Link>
      </div>
    </div>
  );
}
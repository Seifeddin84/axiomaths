import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';
import { getAllBlogPosts } from '@/lib/blogReader';

export default function Home() {
  const exercises = getAllExercises();
  const totalExercises = exercises.length;
  const posts = getAllBlogPosts();
  const latestPost = posts[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-16">
            {/* Title and Description - LEFT SIDE */}
            <div className="flex-1">
              <h1 className="text-6xl sm:text-7xl font-black mb-6 leading-tight">
                AXIOMATHS
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl">
                Maîtrisez les mathématiques avec des milliers d'exercices pour collège et lycée
              </p>
            </div>
            
            {/* Exercise Count - RIGHT SIDE */}
            <div className="flex-shrink-0 text-right">
              <div className="text-8xl sm:text-9xl font-black text-orange-500 leading-none mb-3">
                {totalExercises}
              </div>
              <div className="text-lg text-gray-400 font-medium">
                exercices disponibles
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Main Navigation Cards */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collège Card */}
            <Link
              href="/college"
              className="group block relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-8 border-4 border-blue-700">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-4xl font-black text-white leading-tight">
                    COLLÈGE
                  </h2>
                  <svg className="w-10 h-10 text-white transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                
                <div className="h-1 w-20 bg-white mb-6"></div>
                
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Exercices pour 7ème, 8ème et 9ème année
                </p>
                
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-blue-900 text-white text-sm font-black">
                    7ÈME
                  </span>
                  <span className="px-4 py-2 bg-blue-900 text-white text-sm font-black">
                    8ÈME
                  </span>
                  <span className="px-4 py-2 bg-blue-900 text-white text-sm font-black">
                    9ÈME
                  </span>
                </div>
              </div>
            </Link>

            {/* Lycée Card */}
            <Link
              href="/lycee"
              className="group block relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-8 border-4 border-orange-700">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-4xl font-black text-white leading-tight">
                    LYCÉE
                  </h2>
                  <svg className="w-10 h-10 text-white transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                
                <div className="h-1 w-20 bg-white mb-6"></div>
                
                <p className="text-orange-100 text-lg leading-relaxed mb-6">
                  Exercices pour 1ère, 2ème, 3ème et 4ème année
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  <span className="px-3 py-2 bg-orange-900 text-white text-sm font-black text-center">
                    1ÈRE
                  </span>
                  <span className="px-3 py-2 bg-orange-900 text-white text-sm font-black text-center">
                    2ÈME
                  </span>
                  <span className="px-3 py-2 bg-orange-900 text-white text-sm font-black text-center">
                    3ÈME
                  </span>
                  <span className="px-3 py-2 bg-orange-900 text-white text-sm font-black text-center">
                    4ÈME
                  </span>
                </div>
              </div>
            </Link>

            {/* Latest Blog Post Card */}
            {latestPost && (
              <Link
                href={`/blog/${latestPost.slug}`}
                className="group block relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-8 border-4 border-pink-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-xs font-black text-pink-200 mb-2 uppercase tracking-wide">DERNIER ARTICLE</div>
                      <h3 className="text-2xl font-black text-white leading-tight">
                        {latestPost.title}
                      </h3>
                    </div>
                    <svg className="w-8 h-8 text-white transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="h-1 w-16 bg-white mb-4"></div>
                  <div className="text-sm text-pink-200">
                    {new Date(latestPost.date).toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </Link>
            )}

            {/* Liens Utiles Card */}
            <Link
              href="/resources/useful-links"
              className="group block relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-8 border-4 border-teal-700">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-black text-white leading-tight">
                    LIENS UTILES
                  </h3>
                  <svg className="w-8 h-8 text-white transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-teal-100 text-lg leading-relaxed mb-6">
                  Ressources mathématiques externes, outils en ligne et sites recommandés
                </p>
                <div className="h-1 w-16 bg-white"></div>
              </div>
            </Link>

            {/* Mathématiciens Card */}
            <Link
              href="/resources/mathematicians"
              className="group block relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative p-8 border-4 border-purple-700">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-black text-white leading-tight">
                    MATHÉMATICIENS
                  </h3>
                  <svg className="w-8 h-8 text-white transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-purple-100 text-lg leading-relaxed mb-6">
                  Index alphabétique des grands mathématiciens qui ont marqué l'histoire
                </p>
                <div className="h-1 w-16 bg-white"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">
            POURQUOI AXIOMATHS ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                Contenu Tunisien
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Exercices adaptés au programme tunisien du collège et du lycée
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                Mobile-First
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Interface optimisée pour les smartphones et tablettes
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                LaTeX Intégré
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Rendu mathématique professionnel avec notation LaTeX
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
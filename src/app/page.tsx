import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';
import { getAllBlogPosts } from '@/lib/blogReader';
import HomeSearchBar from '@/components/HomeSearchBar';

export default function Home() {
  const exercises = getAllExercises();
  const totalExercises = exercises.length;
  const posts = getAllBlogPosts();
  const latestPost = posts[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-3 leading-tight">
                AXIOMATHS
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed font-light max-w-2xl">
                Maîtrisez les mathématiques avec des milliers d'exercices pour collège et lycée
              </p>
            </div>
            <div className="text-right">
              <div className="text-7xl md:text-8xl font-black text-orange-500 leading-none mb-2">
                {totalExercises}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                exercices disponibles
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mt-6">
            <HomeSearchBar />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Navigation Cards */}
          <div className="lg:col-span-1 space-y-5">
            {/* Collège Card */}
            <Link href="/college" className="block group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6 border-4 border-blue-700">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-black text-white">COLLÈGE</h2>
                    <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="h-0.5 w-12 bg-white mb-4"></div>
                  <p className="text-blue-100 text-sm mb-3">7ème, 8ème et 9ème</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-900 text-white text-xs font-bold">7ÈME</span>
                    <span className="px-2 py-1 bg-blue-900 text-white text-xs font-bold">8ÈME</span>
                    <span className="px-2 py-1 bg-blue-900 text-white text-xs font-bold">9ÈME</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Lycée Card */}
            <Link href="/lycee" className="block group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6 border-4 border-orange-700">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-black text-white">LYCÉE</h2>
                    <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="h-0.5 w-12 bg-white mb-4"></div>
                  <p className="text-orange-100 text-sm mb-3">1ère, 2ème, 3ème et 4ème</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    <span className="px-2 py-1 bg-orange-900 text-white text-xs font-bold text-center">1ÈRE</span>
                    <span className="px-2 py-1 bg-orange-900 text-white text-xs font-bold text-center">2ÈME</span>
                    <span className="px-2 py-1 bg-orange-900 text-white text-xs font-bold text-center">3ÈME</span>
                    <span className="px-2 py-1 bg-orange-900 text-white text-xs font-bold text-center">4ÈME</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Devoirs Card */}
            <Link href="/devoirs" className="block group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6 border-4 border-pink-700">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-black text-white">DEVOIRS</h2>
                    <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="h-0.5 w-12 bg-white mb-4"></div>
                  <p className="text-pink-100 text-sm">Contrôle & Synthèse</p>
                </div>
              </div>
            </Link>

            {/* Liens Utiles Card */}
            <Link href="/resources/useful-links" className="block group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6 border-4 border-teal-700">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-black text-white">LIENS UTILES</h2>
                    <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="h-0.5 w-12 bg-white mb-2"></div>
                  <p className="text-teal-100 text-sm">Ressources externes</p>
                </div>
              </div>
            </Link>

            {/* Mathématiciens Card */}
            <Link href="/resources/mathematicians" className="block group">
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6 border-4 border-purple-700">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-black text-white">MATHÉMATICIENS</h2>
                    <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="h-0.5 w-12 bg-white mb-2"></div>
                  <p className="text-purple-100 text-sm">Index alphabétique</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* What is Axiomaths? */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">📚</div>
                <div>
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Qu'est-ce qu'Axiomaths ?</h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Axiomaths est votre plateforme gratuite d'exercices de mathématiques pour le système éducatif tunisien. 
                    Que vous soyez au collège ou au lycée, trouvez des milliers d'exercices classés par niveau, chapitre et difficulté.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800/50">
                  <div className="text-orange-500 text-2xl font-black">✓</div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white mb-1">Contenu Tunisien</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Adapté au programme du collège et lycée</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/50">
                  <div className="text-blue-500 text-2xl font-black">✓</div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white mb-1">Devoirs Corrigés</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Contrôle et synthèse des années précédentes</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800/50">
                  <div className="text-green-500 text-2xl font-black">✓</div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white mb-1">LaTeX Intégré</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Rendu mathématique professionnel</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800/50">
                  <div className="text-purple-500 text-2xl font-black">✓</div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white mb-1">100% Gratuit</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Sans publicité, accessible à tous</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Article */}
            {latestPost && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-pink-50 to-white dark:from-pink-900/20 dark:to-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">📰</div>
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white">Dernier Article</h2>
                  </div>
                </div>
                
                <Link href={`/blog/${latestPost.slug}`}>
                  <div className="p-8 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                      {latestPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                      {latestPost.excerpt || 'Découvrez notre dernier article sur les mathématiques...'}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(latestPost.date).toLocaleDateString('fr-FR', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="text-orange-500 font-bold flex items-center gap-2 group">
                        Lire l'article
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* View All Articles */}
                <div className="border-t border-gray-200 dark:border-gray-700 px-8 py-4 bg-gray-50 dark:bg-gray-800/50">
                  <Link href="/blog" className="text-orange-500 dark:text-orange-400 font-semibold hover:text-orange-600 dark:hover:text-orange-300 transition-colors flex items-center gap-2 group">
                    <span>Voir tous les articles</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
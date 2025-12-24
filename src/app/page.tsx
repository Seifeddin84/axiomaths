import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';
import { getLatestBlogPost } from '@/lib/blogReader';
import BlogMarkdownRenderer from '@/components/BlogMarkdownRenderer';

export default function HomePage() {
  const exercises = getAllExercises();
  const exerciseCount = exercises.length;
  const latestPost = getLatestBlogPost();

  // Get first 2-3 paragraphs for preview
  const getPreview = (content: string) => {
    const paragraphs = content.split('\n\n').filter(p => p.trim() && !p.startsWith('#') && !p.startsWith('$$'));
    return paragraphs.slice(0, 3).join('\n\n');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/30 border-2 border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-orange-500 animate-pulse"></span>
            Encyclopédie des Exercices de Mathématiques
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent leading-tight">
            Axiomaths
          </h1>
          
          <div className="flex justify-center mb-6">
            <div className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-xl border-4 border-orange-700 shadow-xl">
              {exerciseCount} EXERCICES
            </div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-serif">
            Maîtrisez les mathématiques avec des milliers d'exercices pour collège et lycée
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Sidebar - Cards */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/college" className="group block">
              <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-xl hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    Collège
                  </h2>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  7ème, 8ème et 9ème année
                </p>
              </div>
            </Link>

            <Link href="/lycee" className="group block">
              <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-xl hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    Lycée
                  </h2>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  1ère, 2ème, 3ème et 4ème année
                </p>
              </div>
            </Link>

            <Link href="/blog" className="group block">
              <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">
                    Blog
                  </h2>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Tous les articles
                </p>
              </div>
            </Link>
          </div>

          {/* Main Content - Latest Blog Post */}
          <div className="lg:col-span-2">
            {latestPost ? (
              <article className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 border-b-4 border-purple-700">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-white text-purple-600 text-xs font-black">
                      DERNIER ARTICLE
                    </span>
                    <span className="text-sm text-purple-100">
                      {new Date(latestPost.date).toLocaleDateString('fr-FR', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                    {latestPost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-purple-100">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {latestPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {latestPost.readTime} min
                    </span>
                  </div>
                </div>

                {/* Content Preview */}
                <div className="p-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
                    <BlogMarkdownRenderer content={getPreview(latestPost.content)} />
                  </div>

                  {/* Continue Reading Button */}
                  <Link 
                    href={`/blog/${latestPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-black hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    Continuer la lecture
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t-2 border-gray-200 dark:border-gray-700">
                    {latestPost.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ) : (
              <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-12 text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-black text-gray-600 dark:text-gray-400 mb-2">
                  Aucun article pour le moment
                </h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Revenez bientôt pour découvrir nos articles sur les mathématiques !
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
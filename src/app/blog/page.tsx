import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blogReader';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-6xl sm:text-7xl font-black mb-4 leading-tight">
            BLOG
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-2xl">
            Articles, curiosités mathématiques et histoires fascinantes
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Blog Posts */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-16 text-center">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Aucun article disponible</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Les articles seront bientôt publiés.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8 hover:border-pink-500 dark:hover:border-pink-500 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors mb-3 leading-tight">
                          {post.title}
                        </h2>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('fr-FR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                          {post.author && (
                            <>
                              <span>•</span>
                              <span>{post.author}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
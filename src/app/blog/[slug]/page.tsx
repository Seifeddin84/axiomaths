import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blogReader';
import BlogMarkdownRenderer from '@/components/BlogMarkdownRenderer';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <Link href="/blog" className="text-orange-400 hover:text-orange-300 font-semibold text-sm uppercase tracking-wide">
              ← Retour au Blog
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-300">
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
                <span>Par {post.author}</span>
              </>
            )}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose-exercise prose-lg max-w-none">
          <BlogMarkdownRenderer content={post.content} />
        </div>
      </article>

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-black hover:shadow-lg hover:shadow-pink-500/50 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Tous les articles
        </Link>
      </div>
    </div>
  );
}
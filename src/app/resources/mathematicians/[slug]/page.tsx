import { getMathematicianBySlug, getAllMathematicians } from '@/lib/mathematicianReader';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';
import MathematicianPortrait from '@/components/MathematicianPortrait';

export async function generateStaticParams() {
  const mathematicians = getAllMathematicians();
  return mathematicians.map((mathematician) => ({
    slug: mathematician.slug,
  }));
}

export default async function MathematicianPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mathematician = getMathematicianBySlug(slug);

  if (!mathematician) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Portrait */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 py-16">
          <div className="mb-6">
            <Link href="/resources/mathematicians" className="text-orange-400 hover:text-orange-300 font-semibold text-sm uppercase tracking-wide">
              ← Retour aux Mathématiciens
            </Link>
          </div>
          
          <div className="flex items-center gap-12">
            {/* Left: Title and Info */}
            <div className="flex-1">
              <h1 className="text-5xl sm:text-6xl font-black mb-4 leading-tight">
                {mathematician.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-lg mb-6">
                <span className="text-gray-300">
                  {mathematician.birth}–{mathematician.death || 'présent'}
                </span>
                {mathematician.nationality && (
                  <>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300">{mathematician.nationality}</span>
                  </>
                )}
              </div>

              {mathematician.fields && mathematician.fields.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {mathematician.fields.map((field, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Portrait */}
            {mathematician.portrait && (
              <div className="flex-shrink-0">
                <MathematicianPortrait
                  src={mathematician.portrait}
                  alt={mathematician.name}
                  className="w-64 h-80 object-cover rounded-lg shadow-2xl border-4 border-gray-200 dark:border-gray-700"
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Biography */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose-exercise prose-lg max-w-none font-serif">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-black mb-6 mt-12 font-sans">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-black mb-5 mt-10 font-sans">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold mb-4 mt-8 font-sans">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-6 leading-relaxed text-lg text-gray-800 dark:text-gray-200">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-8 mb-6 space-y-3 text-lg text-gray-800 dark:text-gray-200">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-8 mb-6 space-y-3 text-lg text-gray-800 dark:text-gray-200">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-purple-500 pl-6 my-6 italic text-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 py-4">
                  {children}
                </blockquote>
              ),
            }}
          >
            {mathematician.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Back to Index */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <Link
          href="/resources/mathematicians"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Tous les mathématiciens
        </Link>
      </div>
    </div>
  );
}
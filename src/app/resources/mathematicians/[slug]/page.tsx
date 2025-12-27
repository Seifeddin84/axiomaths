import Link from 'next/link';
import { getMathematicianBySlug } from '@/lib/mathematicianReader';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

export default async function MathematicianProfilePage({
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-3 text-sm uppercase tracking-wider font-semibold flex-wrap">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">Accueil</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <Link href="/resources/mathematicians" className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">Mathématiciens</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <span className="text-purple-500 dark:text-purple-400">{mathematician.name}</span>
        </nav>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-8 border-b-4 border-purple-700">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-white text-purple-600 text-xs font-black">
                {mathematician.letter}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
              {mathematician.name}
            </h1>
            <div className="flex items-center gap-4 text-sm text-purple-100">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {mathematician.birth} - {mathematician.death}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {mathematician.nationality}
              </span>
            </div>
          </div>

          {/* Fields */}
          <div className="p-6">
            <h3 className="text-sm font-black text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wider">
              Domaines de recherche
            </h3>
            <div className="flex flex-wrap gap-2">
              {mathematician.fields.map(field => (
                <span
                  key={field}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-black"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
              rehypePlugins={[rehypeKatex]}
            >
              {mathematician.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Back Link */}
        <div className="mt-8">
          <Link
            href="/resources/mathematicians"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-black hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l'index
          </Link>
        </div>
      </div>
    </div>
  );
}
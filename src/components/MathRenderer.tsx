'use client';

import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  content: string;
}

export default function MathRenderer({ content }: MathRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-black mb-3 mt-6 text-gray-900 dark:text-white">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-black mb-2 mt-4 text-gray-900 dark:text-white">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="mb-4 leading-relaxed text-gray-800 dark:text-gray-200">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside mb-4 space-y-2 text-gray-800 dark:text-gray-200">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-800 dark:text-gray-200">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="ml-4">{children}</li>
        ),
        strong: ({ children }) => (
          <strong className="font-black text-gray-900 dark:text-white">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-gray-800 dark:text-gray-200">{children}</em>
        ),
        code: ({ children, className }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 text-orange-600 dark:text-orange-400 font-mono text-sm">
                {children}
              </code>
            );
          }
          return (
            <code className={`${className} block p-4 bg-gray-100 dark:bg-gray-800 overflow-x-auto font-mono text-sm`}>
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="mb-4 overflow-x-auto">{children}</pre>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-orange-500 pl-4 my-4 italic text-gray-700 dark:text-gray-300">
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
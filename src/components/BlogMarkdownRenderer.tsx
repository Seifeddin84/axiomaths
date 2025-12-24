'use client';

import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';

interface BlogMarkdownRendererProps {
  content: string;
}

export default function BlogMarkdownRenderer({ content }: BlogMarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-5xl md:text-6xl font-black mb-8 text-gray-900 dark:text-white leading-tight">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-4xl md:text-5xl font-black mb-6 mt-12 text-gray-900 dark:text-white border-b-4 border-orange-500 pb-3">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-3xl md:text-4xl font-black mb-4 mt-10 text-gray-900 dark:text-white">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="mb-6 leading-relaxed text-xl text-gray-700 dark:text-gray-300">{children}</p>
        ),
        img: ({ src, alt, width, style, ...props }) => {
          const hasCustomWidth = width || (style && typeof style === 'object' && 'width' in style);
          
          return (
            <div className="my-12 flex flex-col items-center">
              <img 
                src={src || ''} 
                alt={alt || ''} 
                width={width}
                style={style}
                {...props}
                className={`h-auto border-4 border-gray-200 dark:border-gray-700 shadow-lg ${
                  hasCustomWidth ? '' : 'max-w-full'
                } ${props.className || ''}`}
              />
              {alt && (
                <p className="text-center text-base text-gray-600 dark:text-gray-400 mt-4 italic max-w-2xl">
                  {alt}
                </p>
              )}
            </div>
          );
        },
        ul: ({ children }) => (
          <ul className="list-disc list-inside mb-6 space-y-3 text-xl text-gray-700 dark:text-gray-300">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside mb-6 space-y-3 text-xl text-gray-700 dark:text-gray-300">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="ml-6">{children}</li>
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
              <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-orange-600 dark:text-orange-400 font-mono text-lg">
                {children}
              </code>
            );
          }
          return (
            <code className={`${className} block p-6 bg-gray-100 dark:bg-gray-800 overflow-x-auto font-mono text-base`}>
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="mb-6 overflow-x-auto">{children}</pre>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-orange-500 pl-6 my-6 italic text-xl text-gray-700 dark:text-gray-300">
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
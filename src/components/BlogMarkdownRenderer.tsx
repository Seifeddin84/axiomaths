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
    <div className="font-serif">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={{
          // Headings - sans-serif for contrast
          h1: ({ children }) => (
            <h1 className="text-4xl font-black mb-6 mt-12 text-gray-900 dark:text-white leading-tight font-sans">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-black mb-5 mt-10 text-gray-900 dark:text-white leading-tight font-sans border-b-2 border-pink-500 pb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-white font-sans">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-white font-sans">{children}</h4>
          ),
          // Paragraphs - serif for readability
          p: ({ children }) => (
            <p className="mb-6 leading-relaxed text-lg text-gray-800 dark:text-gray-200">{children}</p>
          ),
          // Images
          img: ({ src, alt, width, style, ...props }) => {
            const hasCustomWidth = width || (style && typeof style === 'object' && 'width' in style);
            
            return (
              <div className="my-8 flex flex-col items-center">
                <img 
                  src={src || ''} 
                  alt={alt || ''} 
                  width={width}
                  style={style}
                  {...props}
                  className={`h-auto rounded-lg shadow-lg ${
                    hasCustomWidth ? '' : 'max-w-full'
                  } ${props.className || ''}`}
                />
                {alt && (
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic max-w-2xl">
                    {alt}
                  </p>
                )}
              </div>
            );
          },
          // Lists
          ul: ({ children }) => (
            <ul className="list-disc pl-8 mb-6 space-y-3 text-lg text-gray-800 dark:text-gray-200">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-8 mb-6 space-y-3 text-lg text-gray-800 dark:text-gray-200">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          // Text formatting
          strong: ({ children }) => (
            <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic">{children}</em>
          ),
          // Code
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 font-mono text-base rounded">
                  {children}
                </code>
              );
            }
            return (
              <code className={`${className} block p-4 bg-gray-900 text-gray-100 overflow-x-auto font-mono text-sm rounded-lg my-6`}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto">{children}</pre>
          ),
          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-pink-500 pl-6 my-6 italic text-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 py-4">
              {children}
            </blockquote>
          ),
          // Links
          a: ({ children, href, ...props }) => (
            <a 
              href={href} 
              className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 underline font-semibold"
              {...props}
            >
              {children}
            </a>
          ),
          // Horizontal rule
          hr: ({ ...props }) => (
            <hr className="my-8 border-t-2 border-gray-200 dark:border-gray-700" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
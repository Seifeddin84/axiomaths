import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  content: string;
}

function isArabic(text: string): boolean {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(text);
}

export default function MathRenderer({ content }: MathRendererProps) {
  const rtl = isArabic(content);

  return (
    // IMPORTANT: dir="rtl" goes on THIS div, which also has exercise-content class.
    // CSS selector [dir="rtl"].exercise-content (no space) matches an element
    // that has BOTH — so RTL list overrides work correctly.
    <div
      className={`prose-exercise exercise-content max-w-none`}
      dir={rtl ? 'rtl' : 'ltr'}
    >
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          div: ({ node, className, children, ...props }) => {
            if (className === 'math math-display') {
              return (
                <div className="math-display text-center" dir="ltr" {...props}>
                  {children}
                </div>
              );
            }
            return <div className={className} {...props}>{children}</div>;
          },
          span: ({ node, className, children, ...props }) => {
            if (className === 'math math-inline') {
              return (
                <span className="math-inline" dir="ltr" style={{ unicodeBidi: 'isolate' }} {...props}>
                  {children}
                </span>
              );
            }
            return <span className={className} {...props}>{children}</span>;
          },
          p: ({ node, children, ...props }) => (
            <p className="mb-4 leading-relaxed font-serif" {...props}>{children}</p>
          ),
          ol: ({ node, children, ...props }) => (
            <ol className="exercise-list font-serif" {...props}>{children}</ol>
          ),
          li: ({ node, children, ...props }) => (
            <li className="exercise-list-item font-serif" {...props}>{children}</li>
          ),
          ul: ({ node, children, ...props }) => (
            <ul className="my-6 space-y-3 font-serif" {...props}>{children}</ul>
          ),
          h1: ({ node, children, ...props }) => (
            <h1 className="text-3xl font-bold mb-4 mt-8" {...props}>{children}</h1>
          ),
          h2: ({ node, children, ...props }) => (
            <h2 className="text-2xl font-bold mb-3 mt-6" {...props}>{children}</h2>
          ),
          h3: ({ node, children, ...props }) => (
            <h3 className="text-xl font-semibold mb-3 mt-6" {...props}>{children}</h3>
          ),
          h4: ({ node, children, ...props }) => (
            <h4 className="text-lg font-semibold mb-2 mt-4" {...props}>{children}</h4>
          ),
          blockquote: ({ node, children, ...props }) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic font-serif text-gray-700 dark:text-gray-300" {...props}>
              {children}
            </blockquote>
          ),
          code: ({ node, className, children, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              );
            }
            return <code className={className} {...props}>{children}</code>;
          },
          strong: ({ node, children, ...props }) => (
            <strong className="font-semibold" {...props}>{children}</strong>
          ),
          em: ({ node, children, ...props }) => (
            <em className="italic" {...props}>{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
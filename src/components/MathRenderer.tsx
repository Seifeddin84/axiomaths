import React from 'react';
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
    <div className="prose-exercise max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={{
          // Display math blocks ($$...$$)
          div: ({ node, className, children, ...props }) => {
            if (className === 'math math-display') {
              return (
                <div className="math-display text-center" {...props}>
                  {children}
                </div>
              );
            }
            return <div className={className} {...props}>{children}</div>;
          },
          // Inline math ($...$)
          span: ({ node, className, children, ...props }) => {
            if (className === 'math math-inline') {
              return (
                <span className="math-inline" {...props}>
                  {children}
                </span>
              );
            }
            return <span className={className} {...props}>{children}</span>;
          },
          // Paragraphs - serif with relaxed line height
          p: ({ node, children, ...props }) => (
            <p className="mb-4 leading-relaxed font-serif" {...props}>
              {children}
            </p>
          ),
          // Ordered lists - exercise lists
          ol: ({ node, children, ...props }) => (
            <ol className="exercise-list font-serif" {...props}>
              {children}
            </ol>
          ),
          // List items
          li: ({ node, children, ...props }) => (
            <li className="exercise-list-item font-serif" {...props}>
              {children}
            </li>
          ),
          // Unordered lists
          ul: ({ node, children, ...props }) => (
            <ul className="my-6 pl-8 space-y-3 font-serif" {...props}>
              {children}
            </ul>
          ),
          // Headings inside exercises (keep sans-serif for contrast)
          h1: ({ node, children, ...props }) => (
            <h1 className="text-3xl font-bold mb-4 mt-8" {...props}>
              {children}
            </h1>
          ),
          h2: ({ node, children, ...props }) => (
            <h2 className="text-2xl font-bold mb-3 mt-6" {...props}>
              {children}
            </h2>
          ),
          h3: ({ node, children, ...props }) => (
            <h3 className="text-xl font-semibold mb-3 mt-6" {...props}>
              {children}
            </h3>
          ),
          h4: ({ node, children, ...props }) => (
            <h4 className="text-lg font-semibold mb-2 mt-4" {...props}>
              {children}
            </h4>
          ),
          // Blockquotes
          blockquote: ({ node, children, ...props }) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic font-serif text-gray-700 dark:text-gray-300" {...props}>
              {children}
            </blockquote>
          ),
          // Code blocks
          code: ({ node, className, children, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          // Strong/bold
          strong: ({ node, children, ...props }) => (
            <strong className="font-semibold" {...props}>
              {children}
            </strong>
          ),
          // Emphasis/italic
          em: ({ node, children, ...props }) => (
            <em className="italic" {...props}>
              {children}
            </em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
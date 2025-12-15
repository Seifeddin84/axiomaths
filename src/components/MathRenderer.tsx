'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  content: string;
}

export default function MathRenderer({ content }: MathRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let processedContent = content;

    // Replace inline math $...$ with KaTeX rendering
    processedContent = processedContent.replace(/\$([^\$]+)\$/g, (match, math) => {
      try {
        return katex.renderToString(math, { throwOnError: false, displayMode: false });
      } catch (e) {
        return match;
      }
    });

    // Replace display math $$...$$ with KaTeX rendering
    processedContent = processedContent.replace(/\$\$([^\$]+)\$\$/g, (match, math) => {
      try {
        return katex.renderToString(math, { throwOnError: false, displayMode: true });
      } catch (e) {
        return match;
      }
    });

    // Convert markdown-style line breaks to <br>
    processedContent = processedContent.replace(/\n\n/g, '<br><br>');
    processedContent = processedContent.replace(/\n/g, '<br>');

    container.innerHTML = processedContent;
  }, [content]);

  return (
    <div 
      ref={containerRef} 
      className="prose prose-lg max-w-none"
      style={{ lineHeight: '1.8' }}
    />
  );
}
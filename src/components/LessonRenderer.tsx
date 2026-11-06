import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkLessonBlocks from '@/lib/remarkLessonBlocks';

/**
 * Server component: the lesson is turned into HTML (KaTeX included) at build
 * time, so the reader never waits for the maths to render.
 */
export default function LessonRenderer({ content }: { content: string }) {
  return (
    <div className="lesson-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath, remarkDirective, remarkLessonBlocks]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={{
          h2: ({ children, id }) => (
            <h2 id={id} className="lesson-h2 group">
              <a href={`#${id}`} className="lesson-anchor" aria-hidden="true">#</a>
              {children}
            </h2>
          ),
          h3: ({ children, id }) => (
            <h3 id={id} className="lesson-h3 group">
              <a href={`#${id}`} className="lesson-anchor" aria-hidden="true">#</a>
              {children}
            </h3>
          ),
          // a paragraph holding only an image becomes a bare <figure> (no <p><figure> nesting)
          p: ({ node, children }) => {
            const kids = (node?.children ?? []).filter(
              c => !(c.type === 'text' && !c.value.trim())
            );
            if (kids.length === 1 && kids[0].type === 'element' && kids[0].tagName === 'img') {
              return <>{children}</>;
            }
            return <p>{children}</p>;
          },
          img: ({ src, alt, title }) => (
            <figure className="lesson-figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={typeof src === 'string' ? src : ''} alt={alt ?? ''} loading="lazy" />
              {(title || alt) && <figcaption>{title ?? alt}</figcaption>}
            </figure>
          ),
          table: ({ children }) => (
            <div className="lesson-table-wrap">
              <table>{children}</table>
            </div>
          ),
          a: ({ children, href }) => {
            const external = !!href && /^https?:\/\//.test(href);
            return (
              <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

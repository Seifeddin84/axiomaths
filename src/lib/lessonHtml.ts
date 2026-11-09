import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import type { Element, ElementContent, Root } from 'hast';
import remarkLessonBlocks from '@/lib/remarkLessonBlocks';

const isElement = (n: unknown): n is Element =>
  !!n && typeof n === 'object' && (n as { type?: string }).type === 'element';

const el = (
  tagName: string,
  properties: Element['properties'],
  children: ElementContent[] = []
): Element => ({ type: 'element', tagName, properties, children });

/**
 * Small touches on the generated HTML: anchors on h2/h3, figures for images,
 * scrollable tables, external links in a new tab.
 */
function decorate(node: Root | Element): void {
  node.children = (node.children as ElementContent[]).map(child => {
    if (!isElement(child)) return child;
    decorate(child);

    switch (child.tagName) {
      case 'h2':
      case 'h3': {
        const id = String(child.properties?.id ?? '');
        child.properties = { ...child.properties, className: [`lesson-${child.tagName}`, 'group'] };
        child.children.unshift(
          el('a', { href: `#${id}`, className: ['lesson-anchor'], ariaHidden: 'true' }, [
            { type: 'text', value: '#' },
          ])
        );
        return child;
      }
      case 'img': {
        const caption = String(child.properties?.title ?? child.properties?.alt ?? '');
        return el('figure', { className: ['lesson-figure'] }, [
          el('img', { ...child.properties, loading: 'lazy' }),
          ...(caption ? [el('figcaption', {}, [{ type: 'text', value: caption } as ElementContent])] : []),
        ]);
      }
      case 'p': {
        // a paragraph holding only a figure becomes the bare figure (no <p><figure> nesting)
        const kids = child.children.filter(c => !(c.type === 'text' && !c.value.trim()));
        if (kids.length === 1 && isElement(kids[0]) && kids[0].tagName === 'figure') return kids[0];
        return child;
      }
      case 'table':
        return el('div', { className: ['lesson-table-wrap'] }, [child]);
      case 'a': {
        const href = String(child.properties?.href ?? '');
        if (/^https?:\/\//.test(href)) {
          child.properties = { ...child.properties, target: '_blank', rel: 'noopener noreferrer' };
        }
        return child;
      }
      default:
        return child;
    }
  });
}

const rehypeLessonDecorations = () => (tree: Root) => decorate(tree);

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkDirective)
  .use(remarkLessonBlocks)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeKatex)
  .use(rehypeLessonDecorations)
  .use(rehypeStringify);

/** Markdown lesson → HTML fragment (KaTeX already rendered). */
export async function renderLessonHtml(markdown: string): Promise<string> {
  return String(await processor.process(markdown));
}

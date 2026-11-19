/* eslint-disable @typescript-eslint/no-explicit-any */
import { visit } from 'unist-util-visit';
import { BLOCKS, BLOCKS_AR } from '@/lib/remarkLessonBlocks';

/**
 * remark plugin for exercise solutions: a reminder written as a quote
 *
 *   > **Produit nul.** Un produit de facteurs est nul si et seulement si …
 *
 * becomes the same coloured box as `:::property[Produit nul] … :::`. About forty solutions were written
 * with quotes before the boxes existed; this gives them the boxes without touching the files.
 * The kind of box is guessed from the title (Définition, Théorème / Thalès, Méthode, Piège, Remarque…);
 * anything else is a « Propriété ». A quote that does not start with a bold title stays a plain quote.
 */

type Kind = keyof typeof BLOCKS;

const KIND_RULES: [RegExp, Kind][] = [
  [/^(définition|تعريف)/i, 'definition'],
  [/(théorème|thalès|pythagore|papillon|مبرهنة|نظرية|طالس|فيثاغور)/i, 'theorem'],
  [/^(méthode|outils?|technique|طريقة)/i, 'method'],
  [/^(piège|فخ)/i, 'trap'],
  [/^(attention|تنبيه)/i, 'warning'],
  [/^(remarque|ملاحظة)/i, 'remark'],
  [/^(l'idée|idée|الفكرة)/i, 'intuition'],
  [/^(exemple|مثال)/i, 'example'],
];

/** a title that only names the kind of box ("Rappel.", "Définition.") is shown alone, without a kind label */
const GENERIC_TITLE =
  /^(définitions?|rappels?|remarques?|méthodes?|outils?|piège|attention|idée|exemples?|propriétés?|théorèmes?|تعريف|تذكير|ملاحظة|طريقة|خاصية|مبرهنة)$/i;
/** a title that already starts with the kind word ("Théorème de Thalès") does not repeat it either */
const STARTS_WITH_KIND = /^(définition|théorème|propriété|méthode|remarque|تعريف|مبرهنة|خاصية|طريقة)\b/i;

const plain = (nodes: any[]): string =>
  nodes.map(n => (n.type === 'text' ? n.value : n.children ? plain(n.children) : '')).join('').trim();

const el = (tagName: string, className: string, children: any[]) => ({
  type: 'paragraph', // any mdast node works: hName decides the html tag
  data: { hName: tagName, hProperties: { className: [className] } },
  children,
});

export default function remarkReminderBoxes(options: { lang?: 'fr' | 'ar' } = {}) {
  const lang = options.lang === 'ar' ? 'ar' : 'fr';

  return (tree: any) => {
    visit(tree, 'blockquote', (node: any, index: number | undefined, parent: any) => {
      if (!parent || index === undefined) return;
      const first = node.children?.[0];
      const strong = first?.type === 'paragraph' ? first.children?.[0] : null;
      if (strong?.type !== 'strong') return;

      // title = the bold words, without the final "." or ":"
      const titleNodes: any[] = (strong.children ?? []).map((n: any) => ({ ...n }));
      const last = titleNodes[titleNodes.length - 1];
      if (last?.type === 'text') {
        last.value = last.value.replace(/\s*[.:：]\s*$/, '');
        if (!last.value) titleNodes.pop();
      }
      const title = plain(titleNodes);
      if (!title) return;

      // the rest of the first paragraph (a "." or ":" written after the bold words is dropped)
      const rest: any[] = first.children.slice(1);
      if (rest[0]?.type === 'text') {
        const value = rest[0].value.replace(/^\s*[.:]?\s*/, '');
        if (value) rest[0] = { ...rest[0], value };
        else rest.shift();
      }
      if (rest[0]?.type === 'break') rest.shift();
      const body = [...(rest.length ? [{ ...first, children: rest }] : []), ...node.children.slice(1)];

      const kind: Kind = KIND_RULES.find(([re]) => re.test(title))?.[1] ?? 'property';
      const kindLabel = lang === 'ar' ? BLOCKS_AR[kind] ?? BLOCKS[kind].label : BLOCKS[kind].label;
      const titleOnly = GENERIC_TITLE.test(title) || STARTS_WITH_KIND.test(title);

      const header = el('div', 'lesson-box__header', [
        ...(titleOnly ? [] : [el('span', 'lesson-box__kind', [{ type: 'text', value: kindLabel }])]),
        el('span', titleOnly ? 'lesson-box__kind lesson-box__kind--title' : 'lesson-box__title', titleNodes),
      ]);

      parent.children[index] = {
        type: 'reminderBox',
        data: { hName: 'div', hProperties: { className: ['lesson-box', `lesson-box--${kind}`, 'lesson-box--reminder'] } },
        children: [header, el('div', 'lesson-box__body', body)],
      };
    });
  };
}

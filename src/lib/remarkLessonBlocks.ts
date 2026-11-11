/* eslint-disable @typescript-eslint/no-explicit-any */
import { visit } from 'unist-util-visit';
import { createSlugger } from '@/lib/headingSlug';

/**
 * remark plugin for lessons (works together with `remark-directive`).
 *
 *   :::definition[Fonction polynôme]      -> coloured box "Définition 1 — Fonction polynôme"
 *   ...
 *   :::
 *
 *   ::::check                             -> "Vérifie-toi" box, with a hidden answer
 *   Question...
 *   :::answer
 *   Réponse...
 *   :::
 *   ::::
 *
 * It also gives every h2 / h3 an id (same rule as the table of contents).
 */

export const BLOCKS: Record<string, { label: string; numbered: boolean }> = {
  definition: { label: 'Définition', numbered: true },
  theorem:    { label: 'Théorème', numbered: true },
  property:   { label: 'Propriété', numbered: true },
  corollary:  { label: 'Conséquence', numbered: false },
  example:    { label: 'Exemple', numbered: true },
  method:     { label: 'Méthode', numbered: true },
  proof:      { label: 'Démonstration', numbered: false },
  curious:    { label: 'Pour les curieux', numbered: false },
  remark:     { label: 'Remarque', numbered: false },
  warning:    { label: 'Attention', numbered: false },
  intuition:  { label: "L'idée", numbered: false },
  check:      { label: 'Vérifie-toi', numbered: true },
  challenge:  { label: 'Défi', numbered: false },
  tic:        { label: 'Avec un tableur', numbered: false },
  history:    { label: 'Math et culture', numbered: false },
  summary:    { label: 'Synthèse', numbered: false },
};

/** Arabic box labels (same keys as BLOCKS). Numbering uses Western digits, as in the Tunisian textbooks. */
const BLOCKS_AR: Record<string, string> = {
  definition: 'تعريف',
  theorem:    'مبرهنة',
  property:   'خاصية',
  corollary:  'نتيجة',
  example:    'مثال',
  method:     'طريقة',
  proof:      'برهان',
  curious:    'للفضوليين',
  remark:     'ملاحظة',
  warning:    'تنبيه',
  intuition:  'الفكرة',
  check:      'اختبر نفسك',
  challenge:  'تحدٍّ',
  tic:        'مع الحاسوب',
  history:    'رياضيات وثقافة',
  summary:    'خلاصة',
};

const ANSWER_LABEL = { fr: 'Voir la réponse', ar: 'عرض الإجابة' };

export interface LessonBlocksOptions {
  lang?: 'fr' | 'ar';
}

const text = (value: string) => ({ type: 'text', value });

function el(tagName: string, className: string | null, children: any[]) {
  return {
    type: 'paragraph', // any mdast node works: hName decides the html tag
    data: { hName: tagName, hProperties: className ? { className: [className] } : {} },
    children,
  };
}

export default function remarkLessonBlocks(options: LessonBlocksOptions = {}) {
  const lang = options.lang === 'ar' ? 'ar' : 'fr';
  return (tree: any, file: any) => {
    const counters: Record<string, number> = {};
    const slug = createSlugger();
    const source: string = String(file?.value ?? '');

    visit(tree, (node: any, index: number | undefined, parent: any) => {
      // ---- heading ids ---------------------------------------------------
      if (node.type === 'heading' && (node.depth === 2 || node.depth === 3)) {
        const start = node.position?.start?.offset;
        const end = node.position?.end?.offset;
        if (start !== undefined && end !== undefined) {
          const raw = source.slice(start, end).replace(/^#+\s*/, '').replace(/\s*#*\s*$/, '');
          node.data = { ...(node.data ?? {}), hProperties: { ...(node.data?.hProperties ?? {}), id: slug(raw) } };
        }
        return;
      }

      // ---- unknown inline / leaf directives: give the text back ----------
      if (node.type === 'textDirective' || node.type === 'leafDirective') {
        if (parent && index !== undefined) {
          const replacement = [text(`${node.type === 'leafDirective' ? '::' : ':'}${node.name}`), ...(node.children ?? [])];
          parent.children.splice(index, 1, ...replacement);
          return index + replacement.length;
        }
        return;
      }

      if (node.type !== 'containerDirective') return;

      const name: string = node.name;
      const children: any[] = node.children ?? [];
      const labelNode = children[0]?.data?.directiveLabel ? children.shift() : null;
      const labelChildren: any[] = labelNode?.children ?? [];
      const attrs = node.attributes ?? {};

      // ---- hidden answer -------------------------------------------------
      if (name === 'answer') {
        node.data = { hName: 'details', hProperties: { className: ['lesson-answer'] } };
        node.children = [
          el('summary', null, labelChildren.length ? labelChildren : [text(ANSWER_LABEL[lang])]),
          el('div', 'lesson-answer__body', children),
        ];
        return;
      }

      // ---- sign / variation tables ----------------------------------------
      if (name === 'signs') {
        node.data = { hName: 'div', hProperties: { className: ['sign-table'] } };
        node.children = children;
        return;
      }

      // ---- coloured boxes -------------------------------------------------
      const block = BLOCKS[name];
      if (!block) {
        node.data = { hName: 'div', hProperties: { className: [`lesson-${name}`] } };
        return;
      }

      const label = lang === 'ar' ? BLOCKS_AR[name] ?? block.label : block.label;
      let kind = label;
      if (block.numbered) {
        counters[name] = (counters[name] ?? 0) + 1;
        kind = `${label} ${counters[name]}`;
      }

      const header = el('div', 'lesson-box__header', [
        el('span', 'lesson-box__kind', [text(kind)]),
        ...(labelChildren.length ? [el('span', 'lesson-box__title', labelChildren)] : []),
      ]);

      const hProperties: Record<string, unknown> = { className: ['lesson-box', `lesson-box--${name}`] };
      if (attrs.id) hProperties.id = attrs.id;

      // proof of an admitted theorem, beyond the programme: folded by default
      if (name === 'curious') {
        const tag = el('span', 'lesson-box__tag', [text(lang === 'ar' ? 'خارج البرنامج' : 'hors programme')]);
        node.data = { hName: 'details', hProperties };
        node.children = [
          { type: 'curiousSummary', data: { hName: 'summary', hProperties: { className: ['lesson-box__header'] } }, children: [...header.children, tag] },
          el('div', 'lesson-box__body', children),
        ];
        return;
      }

      node.data = { hName: 'div', hProperties };
      node.children = [header, el('div', 'lesson-box__body', children)];
    });
  };
}

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
  remark:     { label: 'Remarque', numbered: false },
  warning:    { label: 'Attention', numbered: false },
  intuition:  { label: "L'idée", numbered: false },
  check:      { label: 'Vérifie-toi', numbered: true },
  challenge:  { label: 'Défi', numbered: false },
  tic:        { label: 'Avec un tableur', numbered: false },
  history:    { label: 'Math et culture', numbered: false },
  summary:    { label: 'Synthèse', numbered: false },
};

const text = (value: string) => ({ type: 'text', value });

function el(tagName: string, className: string | null, children: any[]) {
  return {
    type: 'paragraph', // any mdast node works: hName decides the html tag
    data: { hName: tagName, hProperties: className ? { className: [className] } : {} },
    children,
  };
}

export default function remarkLessonBlocks() {
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
          el('summary', null, labelChildren.length ? labelChildren : [text('Voir la réponse')]),
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

      let kind = block.label;
      if (block.numbered) {
        counters[name] = (counters[name] ?? 0) + 1;
        kind = `${block.label} ${counters[name]}`;
      }

      const header = el('div', 'lesson-box__header', [
        el('span', 'lesson-box__kind', [text(kind)]),
        ...(labelChildren.length ? [el('span', 'lesson-box__title', labelChildren)] : []),
      ]);

      const hProperties: Record<string, unknown> = { className: ['lesson-box', `lesson-box--${name}`] };
      if (attrs.id) hProperties.id = attrs.id;

      node.data = { hName: 'div', hProperties };
      node.children = [header, el('div', 'lesson-box__body', children)];
    });
  };
}

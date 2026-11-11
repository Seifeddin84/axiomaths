import katex from 'katex';
// Reads a bac paper written with latex/axiobac.cls and turns it into data for the site:
// metadata (year, session, sections, …) and one block per exercise / problem part, with its
// statement converted to Markdown + KaTeX (rendered by the lesson renderer).
//
// Only the subset of LaTeX that the class and the papers use is supported: $…$, \[…\],
// itemize/enumerate (nested), \textbf, \emph, \textsuperscript, cases/pmatrix inside maths.
// Anything else is kept as is, so a missing rule shows up on the page instead of vanishing.

export interface BacTexMeta {
  annee: number;
  mois: string;
  session: string;
  epreuve: string;
  sectionbac: string;
  sections: string[];
  duree: string;
  coefficient: string;
  ministere: string;
}

export interface BacTexBlock {
  kind: 'exercice' | 'partie';
  /** « 1er Exercice », « Problème, partie I » */
  label: string;
  points?: number;
  title: string;
  chapitres: string[];
  banque?: string;
  horsProgramme: boolean;
  markdown: string;
}

const arg = (src: string, name: string): string | undefined => {
  const m = new RegExp(`\\\\${name}\\{((?:[^{}]|\\{[^{}]*\\})*)\\}`).exec(src);
  return m ? m[1].trim() : undefined;
};

const stripComments = (s: string) =>
  s
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(line => line.replace(/(^|[^\\])%.*$/, '$1'))
    .join('\n');

/** Split a display formula at its top-level \qquad, so that « A \qquad \text{et} \qquad B »
 *  stacks on a phone instead of overflowing; the PDF keeps the side-by-side layout. */
function splitDisplay(m: string): string {
  const pieces: string[] = [];
  let depth = 0;
  let env = 0;
  let start = 0;
  for (let i = 0; i < m.length; i++) {
    if (m.startsWith('\\begin{', i)) env++;
    else if (m.startsWith('\\end{', i)) env--;
    else if (m[i] === '\\' && (m[i + 1] === '{' || m[i + 1] === '}')) i++;
    else if (m[i] === '{') depth++;
    else if (m[i] === '}') depth--;
    else if (depth === 0 && env === 0 && m.startsWith('\\qquad', i) && !/[a-zA-Z]/.test(m[i + 6] ?? '')) {
      pieces.push(m.slice(start, i));
      start = i + 6;
    }
  }
  pieces.push(m.slice(start));
  return pieces
    .map(p => p.trim())
    .filter(Boolean)
    .map(p => {
      const text = /^\\text\{([^{}]*)\}$/.exec(p);
      return text ? `\n\n${text[1].trim()}\n\n` : `\n\n$$\n${p}\n$$\n\n`;
    })
    .join('');
}

/** LaTeX text (outside the structure commands) → Markdown. */
export function latexToMarkdown(tex: string): string {
  let s = tex;
  // protect maths
  const maths: string[] = [];
  const keep = (m: string) => `\u0000${maths.push(m) - 1}\u0000`;
  s = s.replace(/\\\[([\s\S]*?)\\\]/g, (_, m) => keep(splitDisplay(m.trim())));
  s = s.replace(/\$\$([\s\S]*?)\$\$/g, (_, m) => keep(splitDisplay(m.trim())));
  s = s.replace(/\$([^$]+)\$/g, (_, m) => keep(`$${m}$`));

  // text commands
  s = s
    .replace(/\\textbf\{([^{}]*)\}/g, '**$1**')
    .replace(/\\(?:emph|textit)\{([^{}]*)\}/g, '*$1*')
    .replace(/\\textsuperscript\{([^{}]*)\}/g, '<sup>$1</sup>')
    .replace(/\\(?:vspace|hspace)\*?\{[^{}]*\}/g, '')
    .replace(/\\(?:hrule|noindent|medskip|smallskip|bigskip|newline)\b/g, '')
    .replace(/\\&/g, '&')
    .replace(/~/g, ' ')
    .replace(/\\\\\s*/g, '\n\n');

  // lists: line by line, with a stack of list kinds
  const out: string[] = [];
  const stack: ('ul' | 'ol')[] = [];
  const counters: number[] = [];
  for (const raw of s.split('\n')) {
    let line = raw.trim();
    const begin = /^\\begin\{(itemize|enumerate)\}(\[[^\]]*\])?/.exec(line);
    if (begin) {
      stack.push(begin[1] === 'itemize' ? 'ul' : 'ol');
      counters.push(0);
      // no blank line right after a bare « 2. » : CommonMark would end that empty item there
      // and the sub-questions would leak into the outer list
      if (!/^\s*(?:\d+\.|-)$/.test(out[out.length - 1] ?? '')) out.push('');
      line = line.slice(begin[0].length).trim();
      if (!line) continue;
    }
    if (/^\\end\{(itemize|enumerate)\}/.test(line)) {
      stack.pop();
      counters.pop();
      out.push('');
      continue;
    }
    const indent = '   '.repeat(Math.max(0, stack.length - 1));
    const item = /^\\item\s*(.*)$/.exec(line);
    if (item && stack.length) {
      const top = stack.length - 1;
      counters[top]++;
      const marker = stack[top] === 'ul' ? '-' : `${counters[top]}.`;
      out.push(`${indent}${marker} ${item[1]}`.trimEnd());
      continue;
    }
    out.push(stack.length && line ? `${indent}   ${line}` : line);
  }
  s = out.join('\n');

  // restore maths; a display inside a list item is indented like its line, so the list goes on
  s = s
    .split('\n')
    .map(line => {
      const indent = /^\s*/.exec(line)![0];
      return line.replace(/\u0000(\d+)\u0000/g, (_, i) =>
        maths[Number(i)]
          .split('\n')
          .map((l, k) => (k === 0 ? l : l.trim() ? indent + l.trim() : ''))
          .join('\n')
      );
    })
    .join('\n');
  return s.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

const ordinal = (n: number) => (n === 1 ? '1<sup>er</sup>' : `${n}<sup>ème</sup>`);

export function parseBacTex(source: string): { meta: BacTexMeta; blocks: BacTexBlock[] } {
  const src = stripComments(source);
  const preamble = src.slice(0, src.indexOf('\\begin{document}'));
  const meta: BacTexMeta = {
    annee: Number(arg(preamble, 'annee') ?? 0),
    mois: arg(preamble, 'mois') ?? 'Juin',
    session: arg(preamble, 'session') ?? 'principale',
    epreuve: arg(preamble, 'epreuve') ?? 'Mathématiques',
    sectionbac: (arg(preamble, 'sectionbac') ?? '').replace(/\\&/g, '&'),
    sections: (arg(preamble, 'sections') ?? '').split(',').map(x => x.trim()).filter(Boolean),
    duree: arg(preamble, 'duree') ?? '',
    coefficient: arg(preamble, 'coefficient') ?? '',
    ministere: arg(preamble, 'ministere') ?? "Ministère de l'Éducation",
  };

  const body = src.slice(src.indexOf('\\begin{document}') + '\\begin{document}'.length, src.indexOf('\\end{document}'));
  const blocks: BacTexBlock[] = [];
  const info = (chunk: string) => ({
    title: arg(chunk, 'titre') ?? '',
    chapitres: (arg(chunk, 'chapitres') ?? '').split(',').map(x => x.trim()).filter(Boolean),
    banque: arg(chunk, 'banque'),
    horsProgramme: /\\horsprogramme\b/.test(chunk),
  });
  const clean = (chunk: string) =>
    latexToMarkdown(
      chunk
        .replace(/\\(?:titre|chapitres|banque)\{(?:[^{}]|\{[^{}]*\})*\}/g, '')
        .replace(/\\horsprogramme\b/g, '')
    );

  let exo = 0;
  const env = /\\begin\{(exercice|probleme)\}\{([\d.,]*)\}([\s\S]*?)\\end\{\1\}/g;
  let m: RegExpExecArray | null;
  while ((m = env.exec(body))) {
    const points = m[2] ? Number(m[2].replace(',', '.')) : undefined;
    if (m[1] === 'exercice') {
      exo++;
      blocks.push({ kind: 'exercice', label: `${ordinal(exo)} Exercice`, points, ...info(m[3]), markdown: clean(m[3]) });
      continue;
    }
    // a problem: split on \partie{…}; text before the first part is an introduction
    const parts = m[3].split(/\\partie\{([^{}]*)\}/);
    const intro = parts[0].trim();
    if (parts.length === 1) {
      blocks.push({ kind: 'partie', label: 'Problème', points, ...info(intro), markdown: clean(intro) });
      continue;
    }
    for (let i = 1; i < parts.length; i += 2) {
      const chunk = parts[i + 1];
      blocks.push({
        kind: 'partie',
        label: `Problème, partie ${parts[i]}`,
        points: i === 1 ? points : undefined,
        ...info(chunk),
        markdown: (i === 1 && intro ? clean(intro) + '\n\n' : '') + clean(chunk),
      });
    }
  }
  return { meta, blocks };
}

/** A short title with inline maths (« Étude de $x^2(1-\ln x)$ ») → HTML, maths rendered by KaTeX. */
export function titleHtml(title: string): string {
  const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return title
    .split(/(\$[^$]+\$)/)
    .map(part =>
      part.startsWith('$') && part.endsWith('$') && part.length > 1
        ? katex.renderToString(part.slice(1, -1), { throwOnError: false, output: 'html' })
        : esc(part)
    )
    .join('');
}

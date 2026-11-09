/**
 * Turns the raw markdown text of a heading into a stable anchor id.
 * Used both by the remark plugin (ids in the page) and by the lesson reader
 * (table of contents), so the two always agree.
 */
export function headingSlug(raw: string): string {
  const slug = raw
    .replace(/\\[a-zA-Z]+/g, ' ')          // LaTeX commands: \alpha -> ' '
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')  // Arabic harakat + tatweel
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')       // accents
    .toLowerCase()
    .replace(/[^a-z0-9\u0621-\u064A]+/g, '-')   // keep Arabic letters
    .replace(/^-+|-+$/g, '');
  return slug || 'section';
}

/** Returns a function giving unique ids (appends -2, -3… on collisions). */
export function createSlugger() {
  const seen = new Map<string, number>();
  return (raw: string) => {
    const base = headingSlug(raw);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return count === 0 ? base : `${base}-${count + 1}`;
  };
}

/** Removes markdown emphasis / code markers so the TOC shows clean text. */
export function cleanHeadingText(raw: string): string {
  return raw
    .replace(/\{#[^}]*\}\s*$/, '')
    .replace(/[*_`]/g, '')
    .trim();
}

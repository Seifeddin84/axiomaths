'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { chapterTheme, mainTheme } from '@/lib/theoremThemes';
import Link from 'next/link';
import 'katex/dist/katex.min.css';
import type { ProofStatus, TheoremSummary } from '@/lib/theoremIndex';

const LEVEL_LABEL: Record<string, string> = {
  '7eme': '7ème', '8eme': '8ème', '9eme': '9ème',
  '1ere': '1ère', '2eme': '2ème', '3eme': '3ème', '4eme': '4ème',
};
const LEVEL_ORDER = ['7eme', '8eme', '9eme', '1ere', '2eme', '3eme', '4eme'];

const STATUS: Record<ProofStatus, { label: string; className: string }> = {
  proved: { label: 'Démonstration', className: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300' },
  admitted: { label: 'Admis', className: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
  stated: { label: 'Énoncé', className: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300' },
};

type Fragment = { state: 'loading' } | { state: 'error' } | { state: 'ready'; html: string };

/** Lowercase, no accents: « theoreme de thales » finds « Théorème de Thalès ». */
const fold = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ًͯ-ٟ]/g, '');

export default function TheoremWiki({ entries }: { entries: TheoremSummary[] }) {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<string>('all');
  const [theme, setTheme] = useState<string>('all');
  const [onlyProofs, setOnlyProofs] = useState(false);
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [fragments, setFragments] = useState<Record<string, Fragment>>({});

  const levels = useMemo(
    () => LEVEL_ORDER.filter(l => entries.some(e => e.levels.includes(l))),
    [entries]
  );

  // themes of the theorems of the selected class, with counts (one word each: Suites, Complexes…)
  const themes = useMemo(() => {
    const counts = new Map<string, number>();
    for (const e of entries) {
      if (level !== 'all' && !e.levels.includes(level)) continue;
      for (const t of new Set(e.chapters.map(chapterTheme))) counts.set(t, (counts.get(t) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0], 'fr'));
  }, [entries, level]);

  // a theme that does not exist in the newly selected class is reset
  useEffect(() => {
    if (theme !== 'all' && !themes.some(([t]) => t === theme)) setTheme('all');
  }, [themes, theme]);

  const shown = useMemo(() => {
    const q = fold(query.trim());
    return entries.filter(
      e =>
        (level === 'all' || e.levels.includes(level)) &&
        (theme === 'all' || e.chapters.some(c => chapterTheme(c) === theme)) &&
        (!onlyProofs || e.status === 'proved') &&
        (!q || fold(e.search).includes(q))
    );
  }, [entries, query, level, theme, onlyProofs]);

  const load = useCallback(async (id: string) => {
    setFragments(f => ({ ...f, [id]: { state: 'loading' } }));
    try {
      const res = await fetch(`/api/theoremes/${id}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      setFragments(f => ({ ...f, [id]: { state: 'ready', html } }));
    } catch {
      setFragments(f => ({ ...f, [id]: { state: 'error' } }));
    }
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setOpen(prev => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
      if (!fragments[id] || fragments[id].state === 'error') void load(id);
    },
    [fragments, load]
  );

  // /theoremes#thales-ab12cd opens that entry
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id || !entries.some(e => e.id === id)) return;
    setOpen(new Set([id]));
    void load(id);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
  }, [entries, load]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="flex flex-col gap-3 mb-6">
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Chercher un théorème, un chapitre… (Thalès, dérivée, طالس)"
          aria-label="Chercher un théorème"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-accent-500 dark:focus:border-primary-500"
        />
        <div className="flex flex-wrap items-center gap-2">
          {['all', ...levels].map(l => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              aria-pressed={level === l}
              className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-colors ${
                level === l
                  ? 'bg-accent-500 border-accent-500 text-white dark:bg-primary-500 dark:border-primary-500'
                  : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accent-500 dark:hover:border-primary-500'
              }`}
            >
              {l === 'all' ? 'Tous les niveaux' : LEVEL_LABEL[l]}
            </button>
          ))}
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            <span>Chapitre</span>
            <select
              value={theme}
              onChange={e => setTheme(e.target.value)}
              className="min-h-[36px] px-2 py-1 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold focus:outline-none focus:border-accent-500 dark:focus:border-primary-500"
            >
              <option value="all">Tous</option>
              {themes.map(([t, n]) => (
                <option key={t} value={t}>
                  {t} ({n})
                </option>
              ))}
            </select>
          </label>
          <label className="ml-auto flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 cursor-pointer">
            <input type="checkbox" checked={onlyProofs} onChange={e => setOnlyProofs(e.target.checked)} />
            Avec démonstration
          </label>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400" aria-live="polite">
          {shown.length} {shown.length > 1 ? 'résultats' : 'résultat'}
        </p>
      </div>

      {shown.length === 0 && (
        <p className="py-12 text-center text-gray-500 dark:text-gray-400">Aucun théorème ne correspond à cette recherche.</p>
      )}

      <ul className="space-y-3">
        {shown.map(e => {
          const isOpen = open.has(e.id);
          const fragment = fragments[e.id];
          return (
            <li
              key={e.id}
              id={e.id}
              className="scroll-mt-24 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
            >
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => toggle(e.id)}
                    aria-expanded={isOpen}
                    className="text-left flex-1 min-w-0 group"
                  >
                    <span className="block text-lg font-black text-gray-900 dark:text-white">
                      {mainTheme(e.chapters) && (
                        <>
                          <span className="text-teal-700 dark:text-teal-400">{mainTheme(e.chapters)}</span>
                          <span className="text-gray-400 dark:text-gray-500 font-bold"> – </span>
                        </>
                      )}
                      <span
                        className="group-hover:text-accent-600 dark:group-hover:text-primary-400"
                        dir={e.dir}
                        dangerouslySetInnerHTML={{ __html: e.nameHtml }}
                      />
                    </span>
                    {e.altName && (
                      <span className="block text-sm text-gray-500 dark:text-gray-400" dir="rtl" style={{ textAlign: 'left' }}>
                        {e.altName}
                      </span>
                    )}
                  </button>
                  <span className={`shrink-0 px-2 py-0.5 rounded text-xs font-bold ${STATUS[e.status].className}`}>
                    {STATUS[e.status].label}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {e.links.map(l => (
                    <Link
                      key={l.href}
                      href={l.href}
                      title="Aller au cours de ce chapitre"
                      className="px-2.5 py-1 rounded-full text-sm font-bold border border-accent-500 dark:border-primary-500 text-accent-600 dark:text-primary-400 hover:bg-accent-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <span className="text-sm text-gray-500 dark:text-gray-400" dir="auto">
                    {e.chapters.join(' · ')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => toggle(e.id)}
                  className="mt-3 text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-accent-600 dark:hover:text-primary-400"
                >
                  {isOpen ? '▾ Masquer' : '▸ Lire l’énoncé'}
                  {e.versionCount > 1 ? ` (${e.versionCount} énoncés différents)` : ''}
                </button>
              </div>

              {isOpen && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                  {(!fragment || fragment.state === 'loading') && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">Chargement…</p>
                  )}
                  {fragment?.state === 'error' && (
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Le théorème n’a pas pu être chargé.{' '}
                      <button type="button" className="underline font-bold" onClick={() => void load(e.id)}>
                        Réessayer
                      </button>
                    </p>
                  )}
                  {fragment?.state === 'ready' && (
                    <div className="wiki-fragment" dangerouslySetInnerHTML={{ __html: fragment.html }} />
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

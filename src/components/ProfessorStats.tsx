'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { CreditKind, ProfessorStat } from '@/lib/professorStats';

type Filter = 'all' | CreditKind;
type Sort = 'count' | 'name';

const KIND_LABEL: Record<CreditKind, string> = { prof: 'Professeur', book: 'Auteur de livre', own: 'AxioMath' };

const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ًͯ-ٟ]/g, '');

export default function ProfessorStats({ stats }: { stats: ProfessorStat[] }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<Sort>('count');

  const max = Math.max(1, ...stats.map(s => s.count));
  const counts = useMemo(
    () => ({
      all: stats.length,
      prof: stats.filter(s => s.kind === 'prof').length,
      book: stats.filter(s => s.kind === 'book').length,
      own: stats.filter(s => s.kind === 'own').length,
    }),
    [stats]
  );

  const shown = useMemo(() => {
    const q = fold(query.trim());
    const list = stats.filter(
      s =>
        (filter === 'all' || s.kind === filter) &&
        (!q || fold([s.name, ...s.chapters.map(c => c.name), ...s.sources.map(c => c.name)].join(' ')).includes(q))
    );
    return sort === 'name' ? [...list].sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })) : list;
  }, [stats, query, filter, sort]);

  const tabs: { id: Filter; label: string }[] = [
    { id: 'all', label: `Tous (${counts.all})` },
    { id: 'prof', label: `Professeurs (${counts.prof})` },
    ...(counts.book ? [{ id: 'book' as const, label: `Auteurs de livres (${counts.book})` }] : []),
    ...(counts.own ? [{ id: 'own' as const, label: 'AxioMath' }] : []),
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="flex flex-col gap-3 mb-6">
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Chercher un nom, un chapitre, un lycée…"
          aria-label="Chercher un professeur"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-accent-500 dark:focus:border-primary-500"
        />
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setFilter(t.id)}
              aria-pressed={filter === t.id}
              className={`px-3 py-1.5 rounded-full text-sm font-bold border-2 transition-colors ${
                filter === t.id
                  ? 'bg-accent-500 border-accent-500 text-white dark:bg-primary-500 dark:border-primary-500'
                  : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accent-500 dark:hover:border-primary-500'
              }`}
            >
              {t.label}
            </button>
          ))}
          <label className="ml-auto flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Trier par
            <select
              value={sort}
              onChange={e => setSort(e.target.value as Sort)}
              className="px-2 py-1 rounded border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <option value="count">nombre d’exercices</option>
              <option value="name">nom (A → Z)</option>
            </select>
          </label>
        </div>
      </div>

      {shown.length === 0 && (
        <p className="py-12 text-center text-gray-500 dark:text-gray-400">Personne ne correspond à cette recherche.</p>
      )}

      <ul className="grid md:grid-cols-2 gap-4">
        {shown.map(s => {
          const extraSources = s.sources.length;
          return (
            <li key={s.id} className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="text-lg font-black text-gray-900 dark:text-white" dir="auto">
                    {s.name}
                  </h2>
                  {s.kind !== 'prof' && (
                    <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-xs font-bold bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      {KIND_LABEL[s.kind]}
                    </span>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-black text-accent-600 dark:text-primary-400 leading-none">{s.count}</div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">exercice{s.count > 1 ? 's' : ''}</div>
                </div>
              </div>

              <div className="mt-3 h-1.5 rounded-full bg-gray-100 dark:bg-gray-700" role="presentation">
                <div
                  className="h-1.5 rounded-full bg-accent-500 dark:bg-primary-500"
                  style={{ width: `${Math.max(4, Math.round((s.count / max) * 100))}%` }}
                />
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.levels.map(l => (
                  <span
                    key={l.level}
                    className="px-2 py-0.5 rounded-full text-xs font-bold border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    {l.label} · {l.count}
                  </span>
                ))}
                {s.kind !== 'own' && s.years && (
                  <span className="px-2 py-0.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {s.years[0] === s.years[1] ? s.years[0] : `${s.years[0]}–${s.years[1]}`}
                  </span>
                )}
              </div>

              <dl className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex gap-2">
                  <dt className="font-bold shrink-0">Chapitres</dt>
                  <dd dir="auto" className="min-w-0">
                    {s.chapters.map(c => `${c.name} (${c.count})`).join(' · ')}
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold shrink-0">Sources</dt>
                  <dd dir="auto" className="min-w-0">
                    {s.sources.map(c => c.name).join(' · ')}
                    {extraSources >= 3 && s.count > s.sources.reduce((n, c) => n + c.count, 0) ? ' …' : ''}
                  </dd>
                </div>
              </dl>

              <Link
                href={`/recherche?q=${encodeURIComponent(s.searchQuery)}`}
                className="mt-3 inline-block text-sm font-bold text-accent-600 dark:text-primary-400 hover:underline"
              >
                Voir les exercices →
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';
import { Exercise } from '@/types/exercise';
import ExerciseTable from './ExerciseTable';
import ExerciseTableView from './ExerciseTableView';

interface ExercisesViewProps {
  exercises: Exercise[];
}

const LEVELS = [
  { key: 'facile', label: 'Facile', stars: '⭐', on: 'bg-green-600 border-green-600 text-white', off: 'border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30' },
  { key: 'moyen', label: 'Moyen', stars: '⭐⭐', on: 'bg-amber-500 border-amber-500 text-white', off: 'border-amber-500 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/30' },
  { key: 'difficile', label: 'Difficile', stars: '⭐⭐⭐', on: 'bg-red-600 border-red-600 text-white', off: 'border-red-600 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30' },
] as const;
type Level = (typeof LEVELS)[number]['key'];
const RANK: Record<string, number> = { facile: 1, moyen: 2, difficile: 3 };
const levelOf = (ex: Exercise) => (ex.difficulty ?? '').trim().toLowerCase();

type Order = 'default' | 'easy-first' | 'hard-first';

export default function ExercisesView({ exercises }: ExercisesViewProps) {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [professor, setProfessor] = useState('all');
  const [levels, setLevels] = useState<Level[]>([]); // empty = every difficulty
  const [onlyRecommended, setOnlyRecommended] = useState(false);
  const [order, setOrder] = useState<Order>('default');

  const recommendedCount = useMemo(() => exercises.filter(ex => ex.recommended).length, [exercises]);

  // teacher filter for both views (it used to exist only inside the table view)
  const professors = useMemo(() => {
    const counts = new Map<string, number>();
    for (const ex of exercises) for (const p of ex.professor ?? []) if (p) counts.set(p, (counts.get(p) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [exercises]);

  // difficulty counts follow the teacher and « recommandés » filters, so a chip never promises exercises it can't show
  const levelCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const ex of exercises) {
      if (professor !== 'all' && !ex.professor?.includes(professor)) continue;
      if (onlyRecommended && !ex.recommended) continue;
      counts[levelOf(ex)] = (counts[levelOf(ex)] ?? 0) + 1;
    }
    return counts;
  }, [exercises, professor, onlyRecommended]);

  const shown = useMemo(() => {
    const list = exercises
      .filter(ex => professor === 'all' || ex.professor?.includes(professor))
      .filter(ex => levels.length === 0 || levels.includes(levelOf(ex) as Level))
      .filter(ex => !onlyRecommended || ex.recommended);
    if (order === 'default') return list;
    const sign = order === 'easy-first' ? 1 : -1;
    // stable sort: inside one difficulty the usual order is kept
    return [...list].sort((a, b) => sign * ((RANK[levelOf(a)] ?? 2) - (RANK[levelOf(b)] ?? 2)));
  }, [exercises, professor, levels, onlyRecommended, order]);

  const filtered = professor !== 'all' || levels.length > 0 || onlyRecommended;
  const reset = () => {
    setProfessor('all');
    setLevels([]);
    setOnlyRecommended(false);
  };
  const toggleLevel = (key: Level) =>
    setLevels(current => (current.includes(key) ? current.filter(k => k !== key) : [...current, key]));

  // a link to #ex-0000123 must open the exercise even when the filters hide it
  useEffect(() => {
    const onHash = () => {
      const uid = window.location.hash.match(/^#ex-(\d+)$/)?.[1];
      if (uid && exercises.some(ex => ex.uid === uid) && !shown.some(ex => ex.uid === uid)) reset();
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [exercises, shown]);

  const toggle = (active: boolean) =>
    `px-3 sm:px-4 py-2 font-black flex items-center gap-2 transition-all ${
      active ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
    }`;
  const chip = 'min-h-[40px] px-3 border-2 font-black text-sm flex items-center gap-1.5 transition-colors disabled:opacity-35 disabled:cursor-not-allowed';
  const label = 'text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400';

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 p-4 sm:p-5 space-y-4">
        {/* row 1: difficulty chips */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`${label} w-full sm:w-auto`}>Difficulté</span>
            <button
              onClick={() => setLevels([])}
              aria-pressed={levels.length === 0}
              className={`${chip} ${
                levels.length === 0
                  ? 'bg-gray-800 border-gray-800 text-white dark:bg-gray-100 dark:border-gray-100 dark:text-gray-900'
                  : 'border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Toutes
            </button>
            {LEVELS.map(l => {
              const n = levelCounts[l.key] ?? 0;
              const active = levels.includes(l.key);
              return (
                <button
                  key={l.key}
                  onClick={() => toggleLevel(l.key)}
                  aria-pressed={active}
                  disabled={n === 0 && !active}
                  className={`${chip} ${active ? l.on : l.off}`}
                >
                  <span aria-hidden className="text-xs">{l.stars}</span>
                  {l.label}
                  <span className={`text-xs font-bold ${active ? 'opacity-90' : 'opacity-70'}`}>({n})</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* row 2: teacher, order, recommended, view switch */}
        <div className="flex flex-wrap items-end gap-3">
          {professors.length > 0 && (
            <label className="flex flex-col gap-1 min-w-0">
              <span className={label}>Professeur</span>
              <select
                value={professor}
                onChange={e => setProfessor(e.target.value)}
                className="min-h-[40px] min-w-0 max-w-[16rem] px-3 py-1.5 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold focus:border-orange-500 focus:outline-none"
              >
                <option value="all">Tous ({exercises.length})</option>
                {professors.map(([name, n]) => (
                  <option key={name} value={name}>{name} ({n})</option>
                ))}
              </select>
            </label>
          )}

          <label className="flex flex-col gap-1">
            <span className={label}>Ordre</span>
            <select
              value={order}
              onChange={e => setOrder(e.target.value as Order)}
              className="min-h-[40px] px-3 py-1.5 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold focus:border-orange-500 focus:outline-none"
            >
              <option value="default">Ordre habituel</option>
              <option value="easy-first">Du plus facile au plus difficile</option>
              <option value="hard-first">Du plus difficile au plus facile</option>
            </select>
          </label>

          {recommendedCount > 0 && (
            <button
              onClick={() => setOnlyRecommended(v => !v)}
              aria-pressed={onlyRecommended}
              className={`min-h-[40px] px-3 sm:px-4 font-black border-2 transition-colors ${
                onlyRecommended
                  ? 'bg-teal-600 border-teal-600 text-white'
                  : 'border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30'
              }`}
            >
              ★ Recommandés ({recommendedCount})
            </button>
          )}

          <div className="flex gap-2 ml-auto">
            <button onClick={() => setViewMode('cards')} className={toggle(viewMode === 'cards')} aria-pressed={viewMode === 'cards'}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Cartes
            </button>
            <button onClick={() => setViewMode('table')} className={toggle(viewMode === 'table')} aria-pressed={viewMode === 'table'}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Tableau
            </button>
          </div>
        </div>

        {/* result line */}
        <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-gray-600 dark:text-gray-400">
          <span>
            {shown.length} exercice{shown.length > 1 ? 's' : ''}
            {filtered && ` sur ${exercises.length}`}
          </span>
          {filtered && (
            <button onClick={reset} className="text-orange-600 dark:text-orange-400 underline underline-offset-2 hover:text-orange-700">
              Effacer les filtres
            </button>
          )}
        </div>
      </div>

      {shown.length === 0 ? (
        <div className="p-8 text-center border-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-semibold">
          Aucun exercice ne correspond à ces filtres.{' '}
          <button onClick={reset} className="text-orange-600 dark:text-orange-400 underline font-black">
            Tout afficher
          </button>
        </div>
      ) : viewMode === 'cards' ? (
        <ExerciseTable exercises={shown} />
      ) : (
        <ExerciseTableView exercises={shown} />
      )}
    </div>
  );
}

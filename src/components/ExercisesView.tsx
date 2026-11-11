'use client';

import { useMemo, useState } from 'react';
import { Exercise } from '@/types/exercise';
import ExerciseTable from './ExerciseTable';
import ExerciseTableView from './ExerciseTableView';

interface ExercisesViewProps {
  exercises: Exercise[];
}

export default function ExercisesView({ exercises }: ExercisesViewProps) {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [professor, setProfessor] = useState('all');
  const [onlyRecommended, setOnlyRecommended] = useState(false);
  const recommendedCount = useMemo(() => exercises.filter(ex => ex.recommended).length, [exercises]);

  // teacher filter for both views (it used to exist only inside the table view)
  const professors = useMemo(() => {
    const counts = new Map<string, number>();
    for (const ex of exercises) for (const p of ex.professor ?? []) if (p) counts.set(p, (counts.get(p) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [exercises]);

  const shown = useMemo(
    () =>
      exercises
        .filter(ex => professor === 'all' || ex.professor?.includes(professor))
        .filter(ex => !onlyRecommended || ex.recommended),
    [exercises, professor, onlyRecommended]
  );

  const toggle = (active: boolean) =>
    `px-3 sm:px-4 py-2 font-black flex items-center gap-2 transition-all ${
      active ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
    }`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {professors.length > 0 ? (
          <label className="flex items-center gap-2 min-w-0">
            <span className="text-sm font-bold text-gray-600 dark:text-gray-400">Professeur</span>
            <select
              value={professor}
              onChange={e => setProfessor(e.target.value)}
              className="min-w-0 max-w-[14rem] px-3 py-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold focus:border-orange-500 focus:outline-none"
            >
              <option value="all">Tous ({exercises.length})</option>
              {professors.map(([name, n]) => (
                <option key={name} value={name}>{name} ({n})</option>
              ))}
            </select>
          </label>
        ) : (
          <span />
        )}

        {recommendedCount > 0 && (
          <button
            onClick={() => setOnlyRecommended(v => !v)}
            aria-pressed={onlyRecommended}
            className={`min-h-[44px] px-3 sm:px-4 font-black border-2 transition-colors ${
              onlyRecommended
                ? 'bg-teal-600 border-teal-600 text-white'
                : 'border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30'
            }`}
          >
            ★ Recommandés ({recommendedCount})
          </button>
        )}

        <div className="flex gap-2">
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

      {professor !== 'all' && (
        <p className="text-sm font-bold text-gray-600 dark:text-gray-400">
          {shown.length} exercice{shown.length > 1 ? 's' : ''} de {professor}
        </p>
      )}

      {viewMode === 'cards' ? <ExerciseTable exercises={shown} /> : <ExerciseTableView exercises={shown} />}
    </div>
  );
}

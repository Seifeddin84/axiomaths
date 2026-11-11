'use client';

import Link from 'next/link';
import { useState } from 'react';

// Home page: the student says WHAT they want (exercices, cours, devoirs), then picks their class
// in one shared Collège | Lycée grid. The bac has no grid: it only exists in 4ème.

export type HomeTab = 'exercices' | 'cours' | 'devoirs';

export interface HomeLevel {
  key: string;      // "4eme"
  label: string;    // "4ème"
  school: 'college' | 'lycee';
}

interface Props {
  levels: HomeLevel[];
  counts: Record<HomeTab, Record<string, number>>;
  totals: Record<HomeTab, number>;
  bacCount: number;
}

const TABS: { id: HomeTab; label: string; unit: [string, string] }[] = [
  { id: 'exercices', label: 'Exercices', unit: ['exercice', 'exercices'] },
  { id: 'cours', label: 'Cours', unit: ['cours', 'cours'] },
  { id: 'devoirs', label: 'Devoirs', unit: ['devoir', 'devoirs'] },
];

function hrefFor(tab: HomeTab, level: HomeLevel): string {
  if (tab === 'exercices') return `/recherche?niveau=${level.key}`;
  if (tab === 'devoirs') return `/devoirs?niveau=${level.key}`;
  return `/${level.school}/${level.key}`;
}

const BUTTON =
  'flex flex-col items-center justify-center gap-0.5 min-h-[64px] px-3 py-2 rounded-lg border-2 font-black text-base transition-colors';

export default function HomeTasks({ levels, counts, totals, bacCount }: Props) {
  const [tab, setTab] = useState<HomeTab>('exercices');
  const current = TABS.find(t => t.id === tab)!;

  const column = (school: 'college' | 'lycee', title: string) => (
    <div>
      <h3 className="mb-2 text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">{title}</h3>
      <ul className="space-y-2">
        {levels.filter(l => l.school === school).map(level => {
          const n = counts[tab][level.key] ?? 0;
          const sub = n === 0 ? 'bientôt' : `${n} ${current.unit[n > 1 ? 1 : 0]}`;
          const body = (
            <>
              <span className="text-lg font-black">{level.label}</span>
              <span className="text-xs font-semibold opacity-80">{sub}</span>
            </>
          );
          const cls = 'flex items-center justify-between gap-2 min-h-[48px] px-4 py-2 rounded-lg border-2';
          return (
            <li key={level.key}>
              {n === 0 ? (
                <span className={`${cls} border-dashed border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600`}>
                  {body}
                </span>
              ) : (
                <Link
                  href={hrefFor(tab, level)}
                  className={`${cls} border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-accent-500 dark:hover:border-primary-500 transition-colors`}
                >
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <section aria-label="Que cherches-tu ?">
      <div role="tablist" className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {TABS.map(t => {
          const active = t.id === tab;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t.id)}
              className={`${BUTTON} ${
                active
                  ? 'border-accent-500 bg-accent-500 text-white dark:border-primary-500 dark:bg-primary-500'
                  : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-accent-500 dark:hover:border-primary-500'
              }`}
            >
              {t.label}
              <span className="text-xs font-semibold opacity-80">{totals[t.id]}</span>
            </button>
          );
        })}
        <Link
          href="/recherche?q=bac"
          className={`${BUTTON} border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-accent-500 dark:hover:border-primary-500`}
        >
          Bac →
          <span className="text-xs font-semibold opacity-80">
            {bacCount === 0 ? 'bientôt' : `${bacCount} exercice${bacCount > 1 ? 's' : ''}`}
          </span>
        </Link>
      </div>

      <div role="tabpanel" className="mt-4 p-4 sm:p-6 rounded-lg border-2 border-gray-200 dark:border-gray-800">
        <p className="mb-4 text-sm font-bold text-gray-600 dark:text-gray-400">
          {tab === 'cours' ? 'Choisis ta classe pour voir les chapitres et leurs cours' : `Choisis ta classe : ${current.label.toLowerCase()}`}
        </p>
        <div className="grid grid-cols-2 gap-4 sm:gap-8">
          {column('college', 'Collège')}
          {column('lycee', 'Lycée')}
        </div>
      </div>
    </section>
  );
}

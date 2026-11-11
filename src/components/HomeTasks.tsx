'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';

// Home page: the student says WHAT they want, then picks their class.
//   Cours & exercices → the class page (sections, or chapters directly), like the sidebar links
//   Devoirs           → /devoirs filtered on the class
//   Bac               → the sections of 4ème, then /bac?section=…

export interface HomeLevel {
  key: string;      // "4eme"
  label: string;    // "4ème"
  school: 'college' | 'lycee';
}

export interface HomeLevelCounts {
  cours: number;
  exercices: number;
  devoirs: number;
}

export interface HomeBacSection {
  slug: string;
  label: string;
  count: number;
}

interface Props {
  levels: HomeLevel[];
  counts: Record<string, HomeLevelCounts>;   // by level key
  totals: HomeLevelCounts;
  bacSections: HomeBacSection[];
  bacTotal: number;
}

type TabId = 'classe' | 'devoirs' | 'bac';

const BUTTON =
  'flex flex-col items-center justify-center gap-0.5 min-h-[64px] px-3 py-2 rounded-lg border-2 font-black text-base text-center leading-tight transition-colors';
const ROW = 'flex items-center justify-between gap-2 min-h-[52px] px-4 py-2 rounded-lg border-2';
const ROW_ON = 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-accent-500 dark:hover:border-primary-500 transition-colors';
const ROW_OFF = 'border-dashed border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-500';

const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

export default function HomeTasks({ levels, counts, totals, bacSections, bacTotal }: Props) {
  const [tab, setTab] = useState<TabId>('classe');

  const tabs: { id: TabId; label: string; sub: string }[] = [
    { id: 'classe', label: 'Cours & exercices', sub: `${totals.cours} cours · ${totals.exercices} ex.` },
    { id: 'devoirs', label: 'Devoirs', sub: totals.devoirs === 0 ? 'bientôt' : String(totals.devoirs) },
    { id: 'bac', label: 'Bac', sub: bacTotal === 0 ? 'bientôt' : String(bacTotal) },
  ];

  const levelRow = (level: HomeLevel) => {
    const c = counts[level.key] ?? { cours: 0, exercices: 0, devoirs: 0 };
    let href: string;
    let lines: { key: string; node: ReactNode }[];
    if (tab === 'devoirs') {
      href = `/devoirs?niveau=${level.key}`;
      lines = c.devoirs ? [{ key: 'd', node: plural(c.devoirs, 'devoir', 'devoirs') }] : [];
    } else {
      href = `/${level.school}/${level.key}`;
      lines = [];
      if (c.cours) lines.push({ key: 'c', node: `${c.cours} cours` });
      if (c.exercices)
        lines.push({
          key: 'e',
          node: (
            <>
              {c.exercices} <span className="sm:hidden">ex.</span>
              <span className="hidden sm:inline">{c.exercices > 1 ? 'exercices' : 'exercice'}</span>
            </>
          ),
        });
    }
    const body = (
      <>
        <span className="text-lg font-black">{level.label}</span>
        <span className="text-end text-xs font-semibold leading-tight opacity-80">
          {lines.length === 0 ? 'bientôt' : lines.map(l => <span key={l.key} className="block whitespace-nowrap">{l.node}</span>)}
        </span>
      </>
    );
    return (
      <li key={level.key}>
        {lines.length === 0 ? (
          <span className={`${ROW} ${ROW_OFF}`}>{body}</span>
        ) : (
          <Link href={href} className={`${ROW} ${ROW_ON}`}>{body}</Link>
        )}
      </li>
    );
  };

  const column = (school: 'college' | 'lycee', title: string) => (
    <div>
      <h3 className="mb-2 text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">{title}</h3>
      <ul className="space-y-2">{levels.filter(l => l.school === school).map(levelRow)}</ul>
    </div>
  );

  return (
    <section aria-label="Que cherches-tu ?">
      <div role="tablist" className="grid grid-cols-3 gap-2 sm:gap-3">
        {tabs.map(t => {
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
              <span className="text-xs font-semibold opacity-80">{t.sub}</span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="mt-4 p-4 sm:p-6 rounded-lg border-2 border-gray-200 dark:border-gray-800">
        {tab === 'bac' ? (
          <>
            <p className="mb-4 text-sm font-bold text-gray-600 dark:text-gray-400">Choisis ta section de 4ème</p>
            <ul className="grid grid-cols-2 gap-2 sm:gap-3">
              {bacSections.map(s => (
                <li key={s.slug}>
                  <Link href={`/bac?section=${s.slug}`} className={`${ROW} ${s.count === 0 ? ROW_OFF : ROW_ON}`}>
                    <span className="font-black leading-tight">{s.label}</span>
                    <span className="shrink-0 text-xs font-semibold opacity-80">{s.count === 0 ? 'bientôt' : s.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/bac" className="mt-4 inline-block text-sm font-bold text-accent-600 dark:text-primary-400 hover:underline">
              Tous les sujets du bac →
            </Link>
          </>
        ) : (
          <>
            <p className="mb-4 text-sm font-bold text-gray-600 dark:text-gray-400">
              {tab === 'devoirs' ? 'Choisis ta classe : devoirs de contrôle et de synthèse' : 'Choisis ta classe : chapitres, cours et exercices'}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              {column('college', 'Collège')}
              {column('lycee', 'Lycée')}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

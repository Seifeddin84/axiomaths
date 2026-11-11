'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { NavChapter, NavLevel, NavSection, NavTree } from '@/types/nav';

interface SidebarProps {
  onClose?: () => void;
  tree?: NavTree;
}

interface LevelItem {
  key: string;     // key in the nav tree, e.g. "lycee/2eme"
  title: string;
  path: string;
}

interface NavGroup {
  title: string;
  path?: string;
  levels?: LevelItem[];                    // levels that expand into sections / chapters
  items?: { title: string; path: string }[]; // plain links
}

const NAVIGATION: NavGroup[] = [
  {
    title: 'Lycée',
    levels: [
      { key: 'lycee/1ere', title: '1ère Année', path: '/lycee/1ere' },
      { key: 'lycee/2eme', title: '2ème Année', path: '/lycee/2eme' },
      { key: 'lycee/3eme', title: '3ème Année', path: '/lycee/3eme' },
      { key: 'lycee/4eme', title: '4ème Année', path: '/lycee/4eme' },
    ],
  },
  {
    title: 'Collège',
    levels: [
      { key: 'college/7eme', title: '7ème Année', path: '/college/7eme' },
      { key: 'college/8eme', title: '8ème Année', path: '/college/8eme' },
      { key: 'college/9eme', title: '9ème Année', path: '/college/9eme' },
    ],
  },
  { title: 'Recherche', path: '/recherche' },
  { title: 'Devoirs', path: '/devoirs' },
  { title: 'Bac', path: '/bac' },
  { title: 'Théorèmes', path: '/theoremes' },
  { title: 'Professeurs', path: '/professeurs' },
  { title: 'Blog', path: '/blog' },
  {
    title: 'Ressources',
    items: [
      { title: 'Mathématiciens', path: '/resources/mathematicians' },
      { title: 'Liens Utiles', path: '/resources/useful-links' },
    ],
  },
];

const decode = (s: string) => {
  try { return decodeURIComponent(s); } catch { return s; }
};
const trimSlash = (s: string) => (s.length > 1 ? s.replace(/\/+$/, '') : s);
const isUnder = (pathname: string, base: string) => {
  const p = trimSlash(decode(pathname));
  const b = trimSlash(decode(base));
  return p === b || p.startsWith(b + '/');
};
const isSame = (pathname: string, base: string) => trimSlash(decode(pathname)) === trimSlash(decode(base));

const levelKey = (key: string) => `l:${key}`;
const sectionKey = (key: string, slug: string) => `s:${key}/${decode(slug)}`;

/** Nodes of the tree that must be open to show the current page. */
function openKeysFor(pathname: string): string[] {
  const parts = decode(pathname).split('/').filter(Boolean);
  const keys: string[] = [];
  if (parts[0] !== 'lycee' && parts[0] !== 'college') return keys;
  keys.push(parts[0] === 'lycee' ? 'g:Lycée' : 'g:Collège');
  if (parts[1]) {
    const key = `${parts[0]}/${parts[1]}`;
    keys.push(levelKey(key));
    if (parts[0] === 'lycee' && parts[2] && parts[2] !== 'toutes-sections') keys.push(`s:${key}/${parts[2]}`);
  }
  return keys;
}

const rowActive =
  'text-accent-700 dark:text-primary-300 bg-accent-50 dark:bg-primary-900/20';
const rowIdle =
  'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-primary-400 hover:bg-accent-50 dark:hover:bg-primary-900/10';
// A level / section that contains the current page: coloured text, no tint (the tint is reserved for the page itself).
const rowAncestor =
  'text-accent-700 dark:text-primary-300 hover:bg-accent-50 dark:hover:bg-primary-900/10';
const branchClass = (pathname: string, href: string) =>
  isSame(pathname, href) ? rowActive : isUnder(pathname, href) ? rowAncestor : rowIdle;

function Chevron({ open, className = 'w-4 h-4' }: { open: boolean; className?: string }) {
  return (
    <svg
      className={`${className} flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

/** Small arrow next to an expandable row: opens the page of the level / section (the cards view). */
function OverviewLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex items-center px-2 text-gray-400 hover:text-accent-600 dark:hover:text-primary-400 transition-colors"
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  );
}

function ChapterLink({ chapter, pathname, onClick }: { chapter: NavChapter; pathname: string; onClick: () => void }) {
  const active = isSame(pathname, chapter.href);
  return (
    <Link
      href={chapter.href}
      onClick={onClick}
      dir="auto"
      aria-current={active ? 'page' : undefined}
      className={`flex items-start justify-between gap-2 ps-3 pe-2 py-1.5 text-[13px] leading-snug rounded-md transition-colors ${
        active ? `${rowActive} font-semibold` : `${rowIdle} font-medium`
      }`}
    >
      <span className="flex-1 min-w-0">{chapter.title}</span>
      {chapter.count > 0 && (
        <span
          className="flex-shrink-0 mt-px px-1.5 rounded-full text-[11px] leading-5 tabular-nums bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
          title={`${chapter.count} exercice${chapter.count > 1 ? 's' : ''}`}
        >
          {chapter.count}
        </span>
      )}
    </Link>
  );
}

export default function Sidebar({ onClose, tree }: SidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState<Set<string>>(
    () => new Set(['g:Lycée', 'g:Collège', 'g:Ressources', ...openKeysFor(pathname)])
  );

  // Landing on (or navigating to) a page opens the branch that contains it; nothing is ever closed for you.
  useEffect(() => {
    setOpen(prev => {
      const missing = openKeysFor(pathname).filter(k => !prev.has(k));
      return missing.length ? new Set([...prev, ...missing]) : prev;
    });
  }, [pathname]);

  const toggle = (key: string) =>
    setOpen(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const handleLinkClick = () => onClose?.();

  const isGroupActive = (group: NavGroup) => {
    if (group.path) return isUnder(pathname, group.path);
    return (
      group.levels?.some(l => isUnder(pathname, l.path)) ||
      group.items?.some(i => isUnder(pathname, i.path)) ||
      false
    );
  };

  const groupButtonClass = (group: NavGroup) =>
    `w-full flex items-center justify-between px-3 py-2 text-sm font-bold rounded-lg transition-colors text-accent-600 dark:text-primary-400 ${
      isGroupActive(group)
        ? 'bg-accent-50 dark:bg-primary-900/20'
        : 'hover:bg-accent-50 dark:hover:bg-primary-900/10'
    }`;

  function renderSection(level: LevelItem, node: NavLevel, section: NavSection) {
    const key = sectionKey(node.key, section.slug);
    const isOpen = open.has(key);
    return (
      <div key={section.slug}>
        <div className={`flex items-stretch rounded-md transition-colors ${branchClass(pathname, section.href)}`}>
          <button
            type="button"
            onClick={() => toggle(key)}
            aria-expanded={isOpen}
            className="flex-1 min-w-0 flex items-start gap-1.5 ps-2 pe-1 py-1.5 text-start text-[13px] leading-snug font-semibold"
          >
            <Chevron open={isOpen} className="w-3.5 h-3.5 mt-0.5" />
            <span className="flex-1 min-w-0" dir="auto">{section.title}</span>
          </button>
          <OverviewLink
            href={section.href}
            label={`Ouvrir la page ${section.title}`}
            onClick={handleLinkClick}
          />
        </div>
        {isOpen && (
          <div className="ms-3 mt-0.5 mb-1 space-y-0.5 border-s border-gray-200 dark:border-gray-800">
            {section.chapters.map(chapter => (
              <ChapterLink key={chapter.href} chapter={chapter} pathname={pathname} onClick={handleLinkClick} />
            ))}
          </div>
        )}
      </div>
    );
  }

  function renderLevel(level: LevelItem) {
    const node = tree?.[level.key];
    const hasChildren = Boolean(node && (node.sections.length > 0 || node.chapters.length > 0));

    if (!node || !hasChildren) {
      return (
        <Link
          key={level.key}
          href={level.path}
          onClick={handleLinkClick}
          className={`block ps-4 pe-2 py-2 text-sm font-semibold rounded-md transition-colors ${branchClass(pathname, level.path)}`}
        >
          {level.title}
        </Link>
      );
    }

    const key = levelKey(level.key);
    const isOpen = open.has(key);
    return (
      <div key={level.key}>
        <div className={`flex items-stretch rounded-md transition-colors ${branchClass(pathname, level.path)}`}>
          <button
            type="button"
            onClick={() => toggle(key)}
            aria-expanded={isOpen}
            className="flex-1 min-w-0 flex items-center gap-1.5 ps-2.5 pe-1 py-2 text-start text-sm font-semibold"
          >
            <Chevron open={isOpen} />
            <span>{level.title}</span>
          </button>
          <OverviewLink href={level.path} label={`Ouvrir la page ${level.title}`} onClick={handleLinkClick} />
        </div>
        {isOpen && (
          <div className="ms-3 mt-0.5 mb-1 space-y-0.5 border-s border-gray-200 dark:border-gray-800">
            {node.sections.map(section => renderSection(level, node, section))}
            {node.chapters.map(chapter => (
              <ChapterLink key={chapter.href} chapter={chapter} pathname={pathname} onClick={handleLinkClick} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto flex flex-col">
      {/* Mobile close button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 md:hidden">
        <span className="text-sm font-bold text-gray-900 dark:text-white">Navigation</span>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Fermer le menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-4 flex-1">
        <nav className="space-y-1" aria-label="Navigation principale">
          {NAVIGATION.map(group => {
            if (!group.levels && !group.items) {
              return (
                <Link
                  key={group.title}
                  href={group.path!}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 text-sm font-bold rounded-lg transition-colors text-accent-600 dark:text-primary-400 ${
                    isGroupActive(group)
                      ? 'bg-accent-50 dark:bg-primary-900/20'
                      : 'hover:bg-accent-50 dark:hover:bg-primary-900/10'
                  }`}
                >
                  {group.title}
                </Link>
              );
            }

            const groupKey = `g:${group.title}`;
            const groupOpen = open.has(groupKey);
            return (
              <div key={group.title}>
                <button type="button" onClick={() => toggle(groupKey)} aria-expanded={groupOpen} className={groupButtonClass(group)}>
                  <span>{group.title}</span>
                  <Chevron open={groupOpen} />
                </button>

                {groupOpen && (
                  <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-gray-200 dark:border-gray-800">
                    {group.levels?.map(level => renderLevel(level))}
                    {group.items?.map(item => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`block ps-4 pe-2 py-2 text-sm font-semibold rounded-md transition-colors ${
                          isUnder(pathname, item.path) ? rowActive : rowIdle
                        }`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

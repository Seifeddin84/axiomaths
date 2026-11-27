'use client';

import { useState, useSyncExternalStore } from 'react';
import {
  SITE_THEMES,
  FONT_PACKS,
  loadFonts,
  THEME_STORAGE_KEY,
  FONT_STORAGE_KEY,
  TESTER_STORAGE_KEY,
  type SiteThemeId,
  type FontPackId,
} from '@/lib/siteThemes';

// Small testing tool in the bottom-left corner: colours ("Thème") and fonts ("Police"), chosen independently.
// Shown on Vercel previews and in development; on the live site only after visiting ?themes=on.
// Pupils never see it, and the choice is stored only in this browser.
const ALWAYS_VISIBLE =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' || process.env.NODE_ENV === 'development';

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* private mode: the choice still applies until the page is reloaded */
  }
}

const noop = () => () => {};

const selectClass =
  'min-h-[44px] max-w-[11rem] rounded-md border border-gray-300 bg-white px-1 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100';

export default function ThemeSwitcher() {
  // false on the server and during hydration, then read once from the browser (no setState in an effect).
  const allowed = useSyncExternalStore(
    noop,
    () => ALWAYS_VISIBLE || readStorage(TESTER_STORAGE_KEY) === '1',
    () => false,
  );
  const savedTheme = useSyncExternalStore(
    noop,
    () => {
      const saved = readStorage(THEME_STORAGE_KEY);
      return saved && SITE_THEMES.some((t) => t.id === saved) ? (saved as SiteThemeId) : 'classic';
    },
    () => 'classic' as SiteThemeId,
  );
  const savedFont = useSyncExternalStore(
    noop,
    () => {
      const saved = readStorage(FONT_STORAGE_KEY);
      return saved && FONT_PACKS.some((f) => f.id === saved) ? (saved as FontPackId) : 'theme';
    },
    () => 'theme' as FontPackId,
  );
  const [pickedTheme, setPickedTheme] = useState<SiteThemeId | null>(null);
  const [pickedFont, setPickedFont] = useState<FontPackId | null>(null);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = pickedTheme ?? savedTheme;
  const font = pickedFont ?? savedFont;

  if (!allowed || hidden) return null;

  const root = () => document.documentElement;

  const applyTheme = (id: SiteThemeId) => {
    setPickedTheme(id);
    writeStorage(THEME_STORAGE_KEY, id === 'classic' ? null : id);
    if (font === 'theme') loadFonts(SITE_THEMES.find((t) => t.id === id)?.fonts ?? null);
    if (id === 'classic') root().removeAttribute('data-ax-theme');
    else root().setAttribute('data-ax-theme', id);
  };

  const applyFont = (id: FontPackId) => {
    setPickedFont(id);
    writeStorage(FONT_STORAGE_KEY, id === 'theme' ? null : id);
    if (id === 'theme') {
      loadFonts(SITE_THEMES.find((t) => t.id === theme)?.fonts ?? null);
      root().removeAttribute('data-ax-font');
    } else {
      loadFonts(FONT_PACKS.find((f) => f.id === id)?.fonts ?? null);
      root().setAttribute('data-ax-font', id);
    }
  };

  const hide = () => {
    writeStorage(TESTER_STORAGE_KEY, null);
    setHidden(true);
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Changer le thème (test)"
        className="fixed bottom-3 left-3 z-40 min-h-[44px] rounded-lg border border-gray-200 bg-white/95 px-3 text-sm font-semibold text-gray-700 shadow-md dark:border-gray-800 dark:bg-gray-900/95 dark:text-gray-300"
      >
        Thème
      </button>
    );
  }

  return (
    <div className="fixed bottom-3 left-3 z-40 flex max-w-[calc(100vw-1.5rem)] flex-wrap items-center gap-1 rounded-lg border border-gray-200 bg-white/95 px-2 py-1 text-sm shadow-md dark:border-gray-800 dark:bg-gray-900/95">
      <label className="flex items-center gap-1 font-semibold text-gray-700 dark:text-gray-300">
        Thème
        <select value={theme} onChange={(e) => applyTheme(e.target.value as SiteThemeId)} className={selectClass}>
          {SITE_THEMES.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex items-center gap-1 font-semibold text-gray-700 dark:text-gray-300">
        Police
        <select value={font} onChange={(e) => applyFont(e.target.value as FontPackId)} className={selectClass}>
          {FONT_PACKS.map((f) => (
            <option key={f.id} value={f.id}>
              {f.label}
            </option>
          ))}
        </select>
      </label>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Réduire le sélecteur de thème"
        title="Réduire"
        className="min-h-[44px] min-w-[44px] rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        ▾
      </button>
      <button
        type="button"
        onClick={hide}
        aria-label="Masquer le sélecteur de thème"
        title="Masquer (les choix restent actifs)"
        className="min-h-[44px] min-w-[44px] rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        ×
      </button>
    </div>
  );
}

'use client';

import { useState, useSyncExternalStore } from 'react';
import { SITE_THEMES, THEME_STORAGE_KEY, TESTER_STORAGE_KEY, type SiteThemeId } from '@/lib/siteThemes';

// Small testing tool: a pill in the bottom-left corner to switch the site's colour theme.
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

const noop = () => () => {};

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
  const [picked, setPicked] = useState<SiteThemeId | null>(null);
  const [hidden, setHidden] = useState(false);
  const theme = picked ?? savedTheme;
  const visible = allowed && !hidden;

  if (!visible) return null;

  const apply = (id: SiteThemeId) => {
    setPicked(id);
    try {
      if (id === 'classic') localStorage.removeItem(THEME_STORAGE_KEY);
      else localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {
      /* private mode: the theme still applies until the page is reloaded */
    }
    if (id === 'classic') document.documentElement.removeAttribute('data-ax-theme');
    else document.documentElement.setAttribute('data-ax-theme', id);
  };

  const hide = () => {
    try {
      localStorage.removeItem(TESTER_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setHidden(true);
  };

  return (
    <div className="fixed bottom-3 left-3 z-40 flex items-center gap-1 rounded-lg border border-gray-200 bg-white/95 px-2 py-1 text-sm shadow-md dark:border-gray-800 dark:bg-gray-900/95">
      <label htmlFor="ax-theme-select" className="font-semibold text-gray-700 dark:text-gray-300">
        Thème
      </label>
      <select
        id="ax-theme-select"
        value={theme}
        onChange={(e) => apply(e.target.value as SiteThemeId)}
        className="min-h-[44px] rounded-md border border-gray-300 bg-white px-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      >
        {SITE_THEMES.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={hide}
        aria-label="Masquer le sélecteur de thème"
        title="Masquer (le thème choisi reste actif)"
        className="min-h-[44px] min-w-[44px] rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        ×
      </button>
    </div>
  );
}

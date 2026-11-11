'use client';

import { useEffect, useState, type ReactNode } from 'react';

// Tabs of a bac paper page: the statement online, the original scan, and the PDFs.
export default function BacPaperTabs({ enonce, original, pdf }: { enonce: ReactNode; original: ReactNode; pdf: ReactNode }) {
  const [tab, setTab] = useState<'enonce' | 'original' | 'pdf'>('enonce');

  // a display formula a little wider than a phone is shrunk to fit (never below 70 %), the rest scrolls
  useEffect(() => {
    const fit = () => {
      document.querySelectorAll<HTMLElement>('.bac-paper .katex-display').forEach(d => {
        d.style.fontSize = '';
        const ratio = d.clientWidth / d.scrollWidth;
        if (ratio >= 1) return;
        const px = parseFloat(getComputedStyle(d).fontSize);
        d.style.fontSize = `${px * Math.max(0.7, ratio * 0.98)}px`;
      });
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [tab]);
  const tabs = [
    { id: 'enonce' as const, label: 'Énoncé' },
    { id: 'original' as const, label: 'Original' },
    { id: 'pdf' as const, label: 'PDF' },
  ];
  return (
    <div>
      <div role="tablist" className="sticky top-16 z-10 -mx-4 px-4 py-2 bg-white/95 dark:bg-gray-950/95 backdrop-blur grid grid-cols-3 gap-2">
        {tabs.map(t => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`min-h-[44px] rounded-lg border-2 font-black transition-colors ${
              tab === t.id
                ? 'border-orange-500 bg-orange-500 text-white'
                : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-orange-500'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-4">
        <div hidden={tab !== 'enonce'}>{enonce}</div>
        <div hidden={tab !== 'original'}>{original}</div>
        <div hidden={tab !== 'pdf'}>{pdf}</div>
      </div>
    </div>
  );
}

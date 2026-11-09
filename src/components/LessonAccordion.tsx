'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import 'katex/dist/katex.min.css';
import CloseLessonButton from '@/components/CloseLessonButton';

const STRINGS = {
  fr: {
    badge: 'Cours',
    minutes: (n: number) => `${n} min de lecture`,
    toc: 'Sommaire',
    tocAria: 'Sommaire du cours',
    source: 'Source :',
    close: 'Replier le cours',
    loadError: "Le cours n'a pas pu être chargé.",
    retry: 'Réessayer',
    loading: 'Chargement du cours',
  },
  ar: {
    badge: 'درس',
    minutes: (n: number) => `${n} د للقراءة`,
    toc: 'الفهرس',
    tocAria: 'فهرس الدرس',
    source: 'المصدر :',
    close: 'طيّ الدرس',
    loadError: 'تعذّر تحميل الدرس.',
    retry: 'إعادة المحاولة',
    loading: 'جارٍ تحميل الدرس',
  },
} as const;

interface LessonAccordionProps {
  slug: string;
  title: string;
  summary?: string;
  readTime: number;
  source?: string;
  toc: { id: string; text: string }[];
  lang?: 'fr' | 'ar';
}

/** Headings show `$…$` as plain text in the table of contents. */
function tocText(text: string) {
  return text.replace(/\$([^$]*)\$/g, '$1').replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '');
}

/**
 * The chapter's lesson, as a card that folds and unfolds in place — same look as
 * the exercise cards. The lesson body (maths already rendered) is a static HTML
 * fragment fetched the first time the card is opened, so a chapter page stays
 * light for students who only want the exercises.
 */
export default function LessonAccordion({ slug, title, summary, readTime, source, toc, lang = 'fr' }: LessonAccordionProps) {
  const t = STRINGS[lang];
  const rtl = lang === 'ar';
  const id = `cours-${slug}`;
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const started = useRef(false);
  const [html, setHtml] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  const load = useCallback(async () => {
    if (started.current) return;
    started.current = true;
    setFailed(false);
    try {
      const res = await fetch(`/api/lessons/${slug}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setHtml(await res.text());
    } catch {
      started.current = false; // allow a retry
      setFailed(true);
    }
  }, [slug]);

  // a link such as …/polynômes#cours-<slug> opens the card straight away
  useEffect(() => {
    if (window.location.hash === `#${id}` && detailsRef.current) {
      detailsRef.current.open = true;
      load();
      detailsRef.current.scrollIntoView({ block: 'start' });
    }
  }, [id, load]);

  return (
    <details
      ref={detailsRef}
      id={id}
      lang={lang}
      dir={rtl ? 'rtl' : 'ltr'}
      onToggle={e => {
        if ((e.currentTarget as HTMLDetailsElement).open) load();
      }}
      className="group mb-8 sm:mb-10 scroll-mt-24 bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-lg transition-all open:ring-4 open:ring-orange-500"
    >
      <summary
        onMouseEnter={load}
        onFocus={load}
        className="list-none cursor-pointer select-none p-6 flex items-start gap-4 [&::-webkit-details-marker]:hidden"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-black uppercase tracking-widest lesson-badge">
              {t.badge}
            </span>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{t.minutes(readTime)}</span>
          </div>
          <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">{title}</h2>
          {summary && <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">{summary}</p>}
        </div>
        <div className="text-gray-400 dark:text-gray-500 pt-1" aria-hidden="true">
          <svg
            className="w-6 h-6 transition-transform duration-200 group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </summary>

      <div className="border-t-4 border-gray-300 dark:border-gray-600 px-4 sm:px-8 py-8 sm:py-10">
        <div className="max-w-3xl mx-auto">
          {html === null ? (
            failed ? (
              <div className="text-center py-10">
                <p className="font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  {t.loadError}
                </p>
                <button
                  type="button"
                  onClick={load}
                  className="px-5 py-2 font-black text-white bg-gradient-to-r from-orange-500 to-orange-600"
                >
                  {t.retry}
                </button>
              </div>
            ) : (
              <div className="space-y-3 animate-pulse py-4" role="status" aria-label={t.loading}>
                <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700" />
              </div>
            )
          ) : (
            <>
              {toc.length > 2 && (
                <nav aria-label={t.tocAria} className="mb-10">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3 lesson-badge">
                    {t.toc}
                  </p>
                  <ol className="flex flex-wrap gap-2">
                    {toc.map(h => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="block px-3 py-1.5 text-sm font-bold bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 transition-colors"
                        >
                          {tocText(h.text)}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <div className="lesson-content" lang={lang} dir={rtl ? 'rtl' : 'ltr'} dangerouslySetInnerHTML={{ __html: html }} />

              <div className="mt-12 pt-6 border-t-2 border-gray-200 dark:border-gray-700 flex items-center justify-between gap-4 flex-wrap">
                {source ? (
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{t.source} {source}</p>
                ) : (
                  <span />
                )}
                <CloseLessonButton targetId={id} label={t.close} />
              </div>
            </>
          )}
        </div>
      </div>
    </details>
  );
}

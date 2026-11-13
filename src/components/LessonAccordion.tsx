'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import 'katex/dist/katex.min.css';
import CloseLessonButton from '@/components/CloseLessonButton';

const STRINGS = {
  fr: {
    badge: 'Cours',
    read: 'Lire le cours',
    fold: 'Replier le cours',
    inside: 'Dans ce cours :',
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
    read: 'اقرأ الدرس',
    fold: 'طيّ الدرس',
    inside: 'في هذا الدرس :',
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

/** Same, without the section number (« 3. Degré d'un polynôme » → « Degré d'un polynôme »). */
const tocLabel = (text: string) => tocText(text).replace(/^\s*\d+\s*[.)-]\s*/, '');

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
  const contentRef = useRef<HTMLDivElement>(null);
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

  // In right-to-left text an inline formula is never cut across two lines, so one that is wider than its
  // line would be clipped on a phone. Such a formula becomes a scrollable block of its own instead.
  useEffect(() => {
    if (!rtl || html === null) return;
    const root = contentRef.current;
    if (!root) return;
    const mark = () => {
      root.querySelectorAll<HTMLElement>('.katex').forEach(k => {
        if (k.closest('.katex-display')) return;
        k.classList.remove('katex--wide');
        const host = k.closest<HTMLElement>('td, th, li, p, .lesson-box__body');
        if (!host) return;
        const cs = getComputedStyle(host);
        const available = host.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        if (k.getBoundingClientRect().width > available + 1) k.classList.add('katex--wide');
      });
    };
    mark();
    document.fonts?.ready.then(mark); // widths change once the maths fonts have loaded
    window.addEventListener('resize', mark);
    return () => window.removeEventListener('resize', mark);
  }, [html, rtl]);

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
      className="group mb-8 sm:mb-10 scroll-mt-24 bg-white dark:bg-gray-800 border-2 border-l-8 border-gray-400 border-l-orange-500 dark:border-gray-700 dark:border-l-orange-500 overflow-hidden shadow-md hover:shadow-xl transition-all open:ring-4 open:ring-orange-500"
    >
      <summary
        onMouseEnter={load}
        onFocus={load}
        className="list-none cursor-pointer select-none [&::-webkit-details-marker]:hidden"
      >
        {/* banner: says at a glance that this is the lesson, not an exercise */}
        <div className="flex items-center gap-3 px-5 sm:px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white lesson-badge">
          <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-lg sm:text-xl font-black uppercase tracking-widest">{t.badge}</span>
          <span className="ms-auto text-sm font-bold opacity-90">{t.minutes(readTime)}</span>
        </div>

        <div className="p-5 sm:p-6 bg-orange-50 dark:bg-gray-800">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{title}</h2>
          {summary && <p className="text-base text-gray-700 dark:text-gray-300 font-semibold">{summary}</p>}

          {toc.length > 1 && (
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-semibold group-open:hidden">
              <span className="font-black text-gray-800 dark:text-gray-200">{t.inside}</span>{' '}
              {toc.slice(0, 5).map(h => tocLabel(h.text)).join(' · ')}
              {toc.length > 5 ? ' …' : ''}
            </p>
          )}

          {/* a real button: the whole banner toggles, this shows that it can be opened */}
          <div className="mt-5">
            <span className="inline-flex items-center gap-2 px-6 py-3 text-base font-black text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-md group-hover:shadow-lg group-hover:from-orange-600 group-hover:to-orange-700 transition-all">
              <span className="group-open:hidden">{t.read}</span>
              <span className="hidden group-open:inline">{t.fold}</span>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
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

              <div ref={contentRef} className="lesson-content" lang={lang} dir={rtl ? 'rtl' : 'ltr'} dangerouslySetInnerHTML={{ __html: html }} />

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

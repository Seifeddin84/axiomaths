'use client';

/**
 * A lesson is long: once the reader reaches the bottom, this button folds the
 * card again and scrolls back to its header, so the exercises are right there.
 */
export default function CloseLessonButton({ targetId, label = 'Replier le cours' }: { targetId: string; label?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById(targetId) as HTMLDetailsElement | null;
        if (!el) return;
        el.open = false;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
      className="px-6 py-3 font-black text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
      {label}
    </button>
  );
}

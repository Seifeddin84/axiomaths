import { getAllLessons } from '@/lib/lessonReader';
import { renderLessonHtml } from '@/lib/lessonHtml';

// One static HTML fragment per lesson, produced at build time and served from the
// CDN. The chapter page fetches it the first time the "Cours" card is opened.
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLessons().map(l => ({ slug: l.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getAllLessons().find(l => l.slug === slug);
  if (!lesson) return new Response('Not found', { status: 404 });

  const html = await renderLessonHtml(lesson.content);
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}

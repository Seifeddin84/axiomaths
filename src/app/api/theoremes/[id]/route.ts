import { entryFragmentHtml, getTheoremEntries, getTheoremEntry } from '@/lib/theoremIndex';

// One static HTML fragment per wiki entry (statements + proofs, maths already rendered),
// fetched by the /theoremes page the first time an entry is opened.
export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getTheoremEntries()).map(e => ({ id: e.id }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const entry = await getTheoremEntry(id);
  if (!entry) return new Response('Not found', { status: 404 });

  return new Response(entryFragmentHtml(entry), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}

import { NextResponse } from 'next/server';
import { getAllLessons, normalize } from '@/lib/lessonReader';
import { getNavTree } from '@/lib/navTree';
import { getTheoremSummaries } from '@/lib/theoremIndex';

// Lessons and theorems for the search page, so that a search for "homothétie" also finds the
// course and the theorems, not only the exercises. Built once per deployment.
export const dynamic = 'force-static';

export interface SearchLesson {
  title: string;
  chapter: string;
  level: string;
  levelLabel: string;
  school: string;
  sections: string[];
  summary: string;
  href: string;
  dir: 'ltr' | 'rtl';
  readTime: number;
}

export interface SearchTheorem {
  id: string;
  name: string;
  altName?: string;
  levels: string[];
  chapters: string[];
  href: string;
  dir: 'ltr' | 'rtl';
  search: string;
  /** where the theorem is taught: level + section (section slug from the chapter URL, '' for 1ère / collège) */
  places: { level: string; section: string }[];
}

const LEVEL_LABEL: Record<string, string> = {
  '7eme': '7ème', '8eme': '8ème', '9eme': '9ème',
  '1ere': '1ère', '2eme': '2ème', '3eme': '3ème', '4eme': '4ème',
};

export async function GET() {
  const tree = getNavTree();

  // chapter page of a lesson: first chapter of the nav tree with the same level / section / chapter
  const hrefFor = (school: string, level: string, sections: string[], chapter: string): string | null => {
    const navLevel = tree[`${school}/${level}`];
    if (!navLevel) return null;
    const target = normalize(chapter);
    for (const section of navLevel.sections) {
      if (sections.length > 0 && !sections.some(s => normalize(s) === normalize(section.title))) continue;
      const hit = section.chapters.find(c => normalize(c.title) === target);
      if (hit) return hit.href;
    }
    const direct = navLevel.chapters.find(c => normalize(c.title) === target);
    return direct ? direct.href : null;
  };

  const lessons: SearchLesson[] = getAllLessons()
    .map(l => {
      const href = hrefFor(l.school, l.level, l.sections, l.chapter);
      return href
        ? {
            title: l.title,
            chapter: l.chapter,
            level: l.level,
            levelLabel: LEVEL_LABEL[l.level] ?? l.level,
            school: l.school,
            sections: l.sections,
            summary: l.summary ?? '',
            href,
            dir: l.dir,
            readTime: l.readTime,
          }
        : null;
    })
    .filter((l): l is SearchLesson => l !== null);

  const theorems: SearchTheorem[] = (await getTheoremSummaries())
    .filter(t => t.links.length > 0)
    .map(t => ({
      id: t.id,
      name: t.name,
      altName: t.altName,
      levels: t.levels,
      chapters: t.chapters,
      href: t.links[0].href,
      dir: t.dir,
      search: t.search,
      places: t.links.map(link => {
        const parts = link.href.split('/');   // ['', 'lycee', '4eme', '<section>', '<chapter>']
        const section = parts[1] === 'lycee' && parts.length >= 5 && parts[3] !== 'toutes-sections' ? decodeURIComponent(parts[3]) : '';
        return { level: link.level, section };
      }),
    }));

  return NextResponse.json({ lessons, theorems });
}

import { getAllExercises } from '@/lib/fileReader';
import { getAllLessons, normalize } from '@/lib/lessonReader';
import type { Exercise } from '@/types/exercise';
import type { NavChapter, NavLevel, NavSection, NavTree } from '@/types/nav';

// Same levels as the sidebar. The lists of sections and chapters follow exactly what the
// level and section pages show (including chapters that only have a lesson so far),
// so that every link of the tree leads to a page that exists.
const LYCEE_LEVELS = ['1ere', '2eme', '3eme', '4eme'];
const COLLEGE_LEVELS = ['7eme', '8eme', '9eme'];

function slugify(text: string | undefined | null): string {
  if (!text || typeof text !== 'string') return '';
  return encodeURIComponent(text.toLowerCase().trim().replace(/\s+/g, '-'));
}

function exerciseSections(ex: Exercise): string[] {
  const list = Array.isArray(ex.sections) ? ex.sections : ex.section ? [ex.section] : [];
  return list.filter(s => typeof s === 'string' && s !== 'null' && s.trim() !== '');
}

function inSection(ex: Exercise, section: string): boolean {
  const target = normalize(section);
  return (
    (Array.isArray(ex.sections) && ex.sections.some(s => s && typeof s === 'string' && s !== 'null' && normalize(s) === target)) ||
    Boolean(ex.section && ex.section !== 'null' && normalize(ex.section) === target)
  );
}

function uniqueBySlug(titles: string[]): string[] {
  const seen = new Set<string>();
  return titles.filter(t => {
    const slug = slugify(t);
    if (!slug || seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}

function buildLycee(level: string, exercises: Exercise[], lessons: ReturnType<typeof getAllLessons>): NavLevel {
  const levelExercises = exercises.filter(ex => normalize(ex.level) === normalize(level));
  const levelLessons = lessons.filter(l => normalize(l.level) === normalize(level));

  const exerciseSectionTitles = Array.from(new Set(levelExercises.flatMap(exerciseSections)));
  const lessonSectionTitles = levelLessons
    .flatMap(l => l.sections)
    .filter(s => !exerciseSectionTitles.some(es => normalize(es) === normalize(s)));
  const sectionTitles = uniqueBySlug(Array.from(new Set([...exerciseSectionTitles, ...lessonSectionTitles])).sort());

  if (sectionTitles.length === 0) {
    // Levels without sections (1ère): chapters directly under the level
    const chapters = uniqueBySlug(
      Array.from(new Set(levelExercises.map(ex => ex.chapter).filter((c): c is string => Boolean(c)))).sort()
    ).map<NavChapter>(chapter => ({
      title: chapter,
      href: `/lycee/${level}/toutes-sections/${slugify(chapter)}`,
      count: levelExercises.filter(ex => ex.chapter === chapter).length,
    }));
    return { key: `lycee/${level}`, sections: [], chapters };
  }

  const sections = sectionTitles.map<NavSection>(section => {
    const slug = slugify(section);
    const sectionExercises = levelExercises.filter(ex => inSection(ex, section));
    const exerciseChapters = sectionExercises.map(ex => ex.chapter).filter((c): c is string => Boolean(c));
    const lessonChapters = levelLessons
      .filter(l => l.sections.some(s => normalize(s) === normalize(section)))
      .map(l => l.chapter)
      .filter(c => !exerciseChapters.some(ec => normalize(ec) === normalize(c)));
    const chapters = uniqueBySlug(Array.from(new Set([...exerciseChapters, ...lessonChapters])).sort()).map<NavChapter>(chapter => ({
      title: chapter,
      href: `/lycee/${level}/${slug}/${slugify(chapter)}`,
      count: sectionExercises.filter(ex => ex.chapter === chapter).length,
    }));
    return { title: section, slug, href: `/lycee/${level}/${slug}`, chapters };
  });
  return { key: `lycee/${level}`, sections, chapters: [] };
}

function buildCollege(level: string, exercises: Exercise[]): NavLevel {
  const levelExercises = exercises.filter(ex => normalize(ex.level) === normalize(level));
  const chapters = uniqueBySlug(
    Array.from(new Set(levelExercises.map(ex => ex.chapter).filter((c): c is string => Boolean(c)))).sort()
  ).map<NavChapter>(chapter => ({
    title: chapter,
    href: `/college/${level}/${slugify(chapter)}`,
    count: levelExercises.filter(ex => ex.chapter === chapter).length,
  }));
  return { key: `college/${level}`, sections: [], chapters };
}

let cache: NavTree | null = null;

/** Level -> sections -> chapters, read from the exercises and lessons folders.
 *  Cached in production (one read per build); recomputed on each request in dev so new exercises show up. */
export function getNavTree(): NavTree {
  if (cache && process.env.NODE_ENV === 'production') return cache;

  const exercises = getAllExercises();
  const lessons = getAllLessons();
  const tree: NavTree = {};
  for (const level of LYCEE_LEVELS) tree[`lycee/${level}`] = buildLycee(level, exercises, lessons);
  for (const level of COLLEGE_LEVELS) tree[`college/${level}`] = buildCollege(level, exercises);

  cache = tree;
  return tree;
}

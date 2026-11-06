import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Lesson, LessonHeading } from '@/types/lesson';
import { getAllExercises } from '@/lib/fileReader';
import { createSlugger, cleanHeadingText } from '@/lib/headingSlug';

const LESSONS_DIRECTORY = path.join(process.cwd(), 'lessons');

export const LEVEL_DISPLAY: Record<string, string> = {
  '7eme': '7ème',
  '8eme': '8ème',
  '9eme': '9ème',
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

export function normalize(text: string | undefined | null): string {
  if (!text) return '';
  return String(text)
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

/** Same slug rule as the /lycee pages, so links land on existing routes. */
export function urlSlug(text: string): string {
  return encodeURIComponent(text.toLowerCase().trim().replace(/\s+/g, '-'));
}

function extractHeadings(markdown: string): LessonHeading[] {
  const slug = createSlugger();
  const headings: LessonHeading[] = [];
  let inFence = false;

  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;
    const depth = match[1].length as 2 | 3;
    const raw = match[2];
    headings.push({ depth, text: cleanHeadingText(raw), id: slug(raw) });
  }
  return headings;
}

function parseLesson(filename: string): Lesson {
  const fileContent = fs.readFileSync(path.join(LESSONS_DIRECTORY, filename), 'utf8');
  const { data, content } = matter(fileContent);

  const sections: string[] = Array.isArray(data.sections)
    ? data.sections
    : data.section
      ? [data.section]
      : [];

  const words = content.replace(/\$[^$]*\$/g, ' x ').split(/\s+/).length;

  return {
    slug: data.slug ?? filename.replace(/\.mdx?$/, ''),
    title: data.title ?? data.chapter ?? filename,
    summary: data.summary,
    school: data.school ?? 'lycee',
    level: String(data.level ?? ''),
    sections,
    chapter: data.chapter ?? '',
    order: Number(data.order ?? 0),
    prerequisites: Array.isArray(data.prerequisites) ? data.prerequisites : [],
    source: data.source,
    updated: data.updated ? String(data.updated) : undefined,
    content,
    headings: extractHeadings(content),
    // maths reads slower than prose: ~130 words / minute
    readTime: Math.max(1, Math.round(words / 130)),
  };
}

export function getAllLessons(): Lesson[] {
  if (!fs.existsSync(LESSONS_DIRECTORY)) return [];
  return fs
    .readdirSync(LESSONS_DIRECTORY)
    .filter(f => /\.mdx?$/.test(f) && !f.startsWith('_') && f.toLowerCase() !== 'readme.md')
    .map(parseLesson)
    .sort((a, b) =>
      a.level.localeCompare(b.level) ||
      (a.sections[0] ?? '').localeCompare(b.sections[0] ?? '') ||
      a.order - b.order
    );
}

export function getLessonBySlug(slug: string): Lesson | null {
  return getAllLessons().find(l => l.slug === slug) ?? null;
}

/** Lessons matching a level / section / chapter triple (as used by the /lycee routes). */
export function getLessonsForChapter(level: string, section: string, chapter: string): Lesson[] {
  return getAllLessons().filter(l =>
    normalize(l.level) === normalize(level) &&
    (section === 'toutes-sections' || l.sections.some(s => normalize(s) === normalize(section))) &&
    normalize(l.chapter) === normalize(chapter)
  );
}

export function getLessonsForSection(level: string, section: string): Lesson[] {
  return getAllLessons().filter(l =>
    normalize(l.level) === normalize(level) &&
    l.sections.some(s => normalize(s) === normalize(section))
  );
}

/** Previous / next lesson of the same level and main section, by `order`. */
export function getAdjacentLessons(lesson: Lesson): { prev: Lesson | null; next: Lesson | null } {
  const siblings = getAllLessons()
    .filter(l => l.level === lesson.level && normalize(l.sections[0]) === normalize(lesson.sections[0]))
    .sort((a, b) => a.order - b.order);
  const i = siblings.findIndex(l => l.slug === lesson.slug);
  return {
    prev: i > 0 ? siblings[i - 1] : null,
    next: i >= 0 && i < siblings.length - 1 ? siblings[i + 1] : null,
  };
}

/** Link to the exercise list of the lesson's chapter, plus how many exercises it holds. */
export function getChapterExercisesInfo(lesson: Lesson): { href: string; count: number } {
  const section = lesson.sections[0];
  const count = getAllExercises().filter(ex => {
    const levelMatch = normalize(ex.level) === normalize(lesson.level);
    const sectionMatch =
      (Array.isArray(ex.sections) && ex.sections.some(s => lesson.sections.some(ls => normalize(s) === normalize(ls)))) ||
      (!!ex.section && lesson.sections.some(ls => normalize(ex.section) === normalize(ls)));
    return levelMatch && sectionMatch && normalize(ex.chapter) === normalize(lesson.chapter);
  }).length;

  const href = section
    ? `/${lesson.school}/${lesson.level}/${urlSlug(section)}/${urlSlug(lesson.chapter)}`
    : `/${lesson.school}/${lesson.level}/toutes-sections/${urlSlug(lesson.chapter)}`;

  return { href, count };
}

export function lessonLabel(lesson: Lesson): string {
  const level = LEVEL_DISPLAY[lesson.level] ?? lesson.level;
  return lesson.sections.length ? `${level} ${lesson.sections[0]}` : `${level} année`;
}

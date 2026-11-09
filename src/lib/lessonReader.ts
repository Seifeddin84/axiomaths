import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Lesson, LessonHeading } from '@/types/lesson';
import { createSlugger, cleanHeadingText } from '@/lib/headingSlug';

const LESSONS_DIRECTORY = path.join(process.cwd(), 'lessons');

export function normalize(text: string | undefined | null): string {
  if (!text) return '';
  return String(text)
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]/g, '');
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
      a.chapter.localeCompare(b.chapter)
    );
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

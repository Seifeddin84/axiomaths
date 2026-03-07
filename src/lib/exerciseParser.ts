import { Exercise } from '@/types/exercise';

export function parseExercise(content: string, filename: string): Exercise {
  const { frontmatter, markdownContent } = parseFrontmatter(content);
  
  // Extract solution
  const solutionMatch = markdownContent.match(/##\s*Solution\s*\n([\s\S]*?)(?=\n##|$)/i);
  const exerciseContent = solutionMatch 
    ? markdownContent.substring(0, solutionMatch.index).trim()
    : markdownContent.trim();
  const solutionContent = solutionMatch ? solutionMatch[1].trim() : undefined;

  // Handle both single section and sections array
  let sections: string[] = [];
  let primarySection: string | undefined;

  if (frontmatter.sections) {
    if (Array.isArray(frontmatter.sections)) {
      sections = frontmatter.sections.flatMap((s: any) => {
        if (Array.isArray(s)) {
          return s.filter((item: any) => item && typeof item === 'string').map((item: string) => item.trim());
        }
        if (s && typeof s === 'string') {
          return [s.trim()];
        }
        return [];
      });
    } else if (typeof frontmatter.sections === 'string') {
      if (frontmatter.sections.includes(',')) {
        sections = frontmatter.sections.split(',').map((s: string) => s.trim()).filter(Boolean);
      } else {
        sections = [frontmatter.sections.trim()];
      }
    }
    primarySection = sections.length > 0 ? sections[0] : undefined;
  } else if (frontmatter.section) {
    if (Array.isArray(frontmatter.section)) {
      sections = frontmatter.section.filter((s: any) => s && typeof s === 'string').map((s: string) => s.trim());
      primarySection = sections[0];
    } else if (typeof frontmatter.section === 'string') {
      primarySection = frontmatter.section;
      sections = [frontmatter.section];
    }
  }

  // Normalize professor to string[] — handles both old string and new array format
  let professors: string[] = [];
  if (Array.isArray(frontmatter.professor)) {
    professors = frontmatter.professor
      .map((p: any) => (typeof p === 'string' ? p.trim() : ''))
      .filter(Boolean);
  } else if (typeof frontmatter.professor === 'string' && frontmatter.professor.trim()) {
    professors = frontmatter.professor
      .split(',')
      .map((p: string) => p.trim())
      .filter(Boolean);
  }

  console.log('Parsed sections:', sections);
  console.log('Parsed professors:', professors);

  return {
    uid: frontmatter.uid || filename.replace('.md', ''),
    title: frontmatter.title,
    content: exerciseContent,
    solution: solutionContent,
    school: frontmatter.school,
    level: frontmatter.level,
    section: primarySection,
    sections: sections.length > 0 ? sections : undefined,
    chapter: frontmatter.chapter,
    source: frontmatter.source,
    country: frontmatter.country,
    year: frontmatter.year ? parseInt(frontmatter.year) : undefined,
    professor: professors.length > 0 ? professors : undefined,
    difficulty: frontmatter.difficulty,
    points: frontmatter.points ? parseInt(frontmatter.points) : undefined,
    tags: frontmatter.tags || [],
    schoolType: frontmatter.schoolType,
  };
}

function parseFrontmatter(content: string): { frontmatter: any; markdownContent: string } {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  
  if (!frontmatterMatch) {
    return { frontmatter: {}, markdownContent: content };
  }

  const frontmatterText = frontmatterMatch[1];
  const markdownContent = frontmatterMatch[2];

  const frontmatter: any = {};
  const lines = frontmatterText.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/^(\w+):\s*(.+)$/);
    
    if (match) {
      const key = match[1];
      let value: any = match[2].trim();

      // Handle array format: ["value1", "value2"] or ['value1', 'value2']
      if (value.startsWith('[') && value.endsWith(']')) {
        const arrayContent = value.slice(1, -1);
        value = arrayContent
          .split(',')
          .map((v: string) => v.trim().replace(/^["']|["']$/g, ''))
          .filter(Boolean);
      }
      // Handle quoted strings
      else if ((value.startsWith('"') && value.endsWith('"')) || 
               (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      frontmatter[key] = value;
    }
  }

  console.log('Parsed frontmatter:', frontmatter);

  return { frontmatter, markdownContent };
}

export function getDifficultyStars(difficulty?: string): string {
  switch (difficulty?.toLowerCase()) {
    case 'facile':
      return '⭐';
    case 'moyen':
      return '⭐⭐';
    case 'difficile':
      return '⭐⭐⭐';
    default:
      return '⭐';
  }
}
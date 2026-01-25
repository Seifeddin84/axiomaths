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
    // New format: sections array
    if (Array.isArray(frontmatter.sections)) {
      // FIXED: Flatten nested arrays
      sections = frontmatter.sections.flatMap(s => {
        // If s is an array (nested), flatten it
        if (Array.isArray(s)) {
          return s.filter(item => item && typeof item === 'string').map(item => item.trim());
        }
        // If s is a string, keep it
        if (s && typeof s === 'string') {
          return [s.trim()];
        }
        // Skip invalid items
        return [];
      });
    } else if (typeof frontmatter.sections === 'string') {
      // String format - could be comma-separated or single value
      if (frontmatter.sections.includes(',')) {
        sections = frontmatter.sections.split(',').map(s => s.trim()).filter(Boolean);
      } else {
        sections = [frontmatter.sections.trim()];
      }
    }
    primarySection = sections.length > 0 ? sections[0] : undefined;
    } else if (frontmatter.section) {
    // Handle both single string and array in "section" field
    if (Array.isArray(frontmatter.section)) {
      // Already an array
      sections = frontmatter.section.filter(s => s && typeof s === 'string').map(s => s.trim());
      primarySection = sections[0];
    } else if (typeof frontmatter.section === 'string') {
      // Single string
      primarySection = frontmatter.section;
      sections = [frontmatter.section];
    }
    }

  console.log('Parsed sections:', sections);

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
    professor: frontmatter.professor,
    difficulty: frontmatter.difficulty,
    points: frontmatter.points ? parseInt(frontmatter.points) : undefined,
    tags: frontmatter.tags || [],
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
          .map(v => v.trim().replace(/^["']|["']$/g, ''))
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
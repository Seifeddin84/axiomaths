import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const mathematiciansDirectory = path.join(process.cwd(), 'mathematicians');

export interface Mathematician {
  slug: string;
  name: string;
  birth: number;
  death: number;
  nationality: string;
  letter: string;
  fields: string[];
  portrait?: string;
  content: string;
}

export function getAllMathematicians(): Mathematician[] {
  if (!fs.existsSync(mathematiciansDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(mathematiciansDirectory);
  
  const mathematicians = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(mathematiciansDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        slug: data.slug,
        name: data.name,
        birth: data.birth,
        death: data.death,
        nationality: data.nationality,
        letter: data.letter,
        fields: data.fields || [],
        portrait: data.portrait,
        content,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  
  return mathematicians;
}

export function getMathematicianBySlug(slug: string): Mathematician | null {
  const allMathematicians = getAllMathematicians();
  return allMathematicians.find(m => m.slug === slug) || null;
}

export function getMathematiciansGroupedByLetter(): Record<string, Mathematician[]> {
  const allMathematicians = getAllMathematicians();
  const grouped: Record<string, Mathematician[]> = {};
  
  allMathematicians.forEach(mathematician => {
    const letter = mathematician.letter.toUpperCase();
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(mathematician);
  });
  
  return grouped;
}
export const cheatsheets: Record<string, Record<string, string>> = {
  'lycee': {
    // Format: 'class-section-chapter': 'filename'
    '2eme-sciences-trigonometrie': 'trigonometrie-2eme-sciences.pdf',
    '4eme-maths-maths-similitude': 'similitude-4eme-maths.pdf',
    '1ere-maths-maths-limites': 'limites-1ere-maths.pdf',
    // Add more as you create them
  },
  'college': {
    // Future college cheat sheets
  }
};

// Helper function
export function getCheatSheet(
  level: string,  // 'lycee' or 'college'
  className: string,  // '2eme-sciences', '4eme-maths'
  section: string,  // 'maths'
  chapter: string   // 'trigonometrie', 'similitude'
): string | null {
  const key = `${className}-${section}-${chapter}`;
  return cheatsheets[level]?.[key] || null;
}
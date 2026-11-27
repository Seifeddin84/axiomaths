// Site colour themes, for testing a new look without changing the live site.
// The colours themselves are in src/app/themes.css. "classic" (orange/teal) is the default:
// nobody sees another theme unless they pick one with the switcher or a ?theme= link.

const GF = 'https://fonts.googleapis.com/css2?display=swap&family=';

export const SITE_THEMES = [
  { id: 'classic', label: 'Classique (orange / teal)', fonts: null },
  { id: 'manuel', label: 'Manuel (encre bleue, serif)', fonts: null }, // Crimson Pro is already loaded
  { id: 'vert', label: 'Vert pastel (comme les PDF)', fonts: null },
  {
    id: 'mir',
    label: 'Mir (manuel russe, noir et bleu)',
    fonts: GF + 'PT+Sans:wght@400;700&family=PT+Serif:ital,wght@0,400;0,700;1,400',
  },
  {
    id: 'lebosse',
    label: 'Lebossé (vieux manuel français)',
    fonts: GF + 'EB+Garamond:ital,wght@0,400;0,600;0,700;1,400', // Playfair Display is already loaded
  },
  {
    id: 'lisible',
    label: 'Lisible (Atkinson, indigo)',
    fonts: GF + 'Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400',
  },
] as const;

// Adds the theme's font stylesheet once; nothing is downloaded for themes nobody picked.
export function loadThemeFonts(id: string) {
  const theme = SITE_THEMES.find((t) => t.id === id);
  if (!theme?.fonts || document.getElementById(`ax-fonts-${id}`)) return;
  const link = document.createElement('link');
  link.id = `ax-fonts-${id}`;
  link.rel = 'stylesheet';
  link.href = theme.fonts;
  document.head.appendChild(link);
}

export type SiteThemeId = (typeof SITE_THEMES)[number]['id'];

export const THEME_STORAGE_KEY = 'ax-theme';
export const TESTER_STORAGE_KEY = 'ax-theme-tester';

// Runs in <head> before the first paint, so a chosen theme never flashes the default one.
// - ?theme=<id> picks a theme (and remembers it); ?theme=classic goes back to the default.
// - ?themes=on shows the switcher on the live site (remembered); ?themes=off hides it.
export const THEME_BOOT_SCRIPT = `(function(){try{
var ids=${JSON.stringify(SITE_THEMES.map((t) => t.id))};
var fonts=${JSON.stringify(Object.fromEntries(SITE_THEMES.map((t) => [t.id, t.fonts])))};
var q=new URLSearchParams(location.search),ls=localStorage;
var t=q.get('theme');
if(t&&ids.indexOf(t)>-1){if(t==='classic')ls.removeItem('${THEME_STORAGE_KEY}');else ls.setItem('${THEME_STORAGE_KEY}',t);}
var s=q.get('themes');
if(s==='on')ls.setItem('${TESTER_STORAGE_KEY}','1');else if(s==='off')ls.removeItem('${TESTER_STORAGE_KEY}');
var c=ls.getItem('${THEME_STORAGE_KEY}');
if(c&&c!=='classic'&&ids.indexOf(c)>-1){document.documentElement.setAttribute('data-ax-theme',c);
if(fonts[c]){var l=document.createElement('link');l.id='ax-fonts-'+c;l.rel='stylesheet';l.href=fonts[c];document.head.appendChild(l);}}
}catch(e){}})();`;

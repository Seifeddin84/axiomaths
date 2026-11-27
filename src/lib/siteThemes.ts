// Site themes, for testing a new look without changing the live site.
// Two independent choices, both stored only in the visitor's browser:
//   - colours ("thème"): palette, paper tone, corners, boxes   → data-ax-theme on <html>
//   - fonts  ("police"):  overrides the theme's own fonts       → data-ax-font on <html>
// The CSS is in src/app/themes.css. "classic" + the theme's fonts is the default:
// nobody sees anything else unless they pick it with the switcher or a ?theme= / ?font= link.

const GF = 'https://fonts.googleapis.com/css2?display=swap&family=';
const GARAMOND = GF + 'EB+Garamond:ital,wght@0,400;0,600;0,700;1,400'; // + Playfair Display, already loaded
const PT = GF + 'PT+Sans:wght@400;700&family=PT+Serif:ital,wght@0,400;0,700;1,400';
const ATKINSON = GF + 'Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400';

export const SITE_THEMES = [
  { id: 'classic', label: 'Classique (orange / teal)', fonts: null },
  { id: 'manuel', label: 'Manuel (bleu encre)', fonts: null }, // Crimson Pro is already loaded
  { id: 'vert', label: 'Vert pastel', fonts: null },
  { id: 'mir', label: 'Mir (noir + bleu, russe)', fonts: PT },
  { id: 'lebosse', label: 'Lebossé (noir + brique)', fonts: GARAMOND },
  { id: 'lebosse-vert', label: 'Lebossé vert bouteille', fonts: GARAMOND },
  { id: 'lebosse-bleu', label: 'Lebossé bleu de Prusse', fonts: GARAMOND },
  { id: 'lebosse-noir', label: 'Lebossé noir seul', fonts: GARAMOND },
  { id: 'lisible', label: 'Lisible (indigo)', fonts: ATKINSON },
] as const;

export const FONT_PACKS = [
  { id: 'theme', label: 'Police du thème', fonts: null },
  { id: 'garamond', label: 'Garamond (Lebossé)', fonts: GARAMOND },
  { id: 'pt', label: 'PT Serif (Mir)', fonts: PT },
  { id: 'crimson', label: 'Crimson (Manuel)', fonts: null },
  { id: 'atkinson', label: 'Atkinson (Lisible)', fonts: ATKINSON },
  { id: 'roboto', label: 'Roboto (Classique)', fonts: null },
] as const;

export type SiteThemeId = (typeof SITE_THEMES)[number]['id'];
export type FontPackId = (typeof FONT_PACKS)[number]['id'];

export const THEME_STORAGE_KEY = 'ax-theme';
export const FONT_STORAGE_KEY = 'ax-font';
export const TESTER_STORAGE_KEY = 'ax-theme-tester';

// Adds a font stylesheet once; nothing is downloaded for fonts nobody picked.
export function loadFonts(href: string | null) {
  if (!href || document.querySelector(`link[data-ax-fonts="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.setAttribute('data-ax-fonts', href);
  document.head.appendChild(link);
}

// Runs in <head> before the first paint, so a chosen theme never flashes the default one.
// ?theme=<id> / ?font=<id> pick (and remember) a choice; ?theme=classic and ?font=theme reset them.
// ?themes=on shows the switcher on the live site (remembered); ?themes=off hides it.
export const THEME_BOOT_SCRIPT = `(function(){try{
var T=${JSON.stringify(Object.fromEntries(SITE_THEMES.map((t) => [t.id, t.fonts])))};
var F=${JSON.stringify(Object.fromEntries(FONT_PACKS.map((t) => [t.id, t.fonts])))};
var q=new URLSearchParams(location.search),ls=localStorage,h=document.documentElement;
function load(u){if(!u||document.querySelector('link[data-ax-fonts="'+u+'"]'))return;var l=document.createElement('link');l.rel='stylesheet';l.href=u;l.setAttribute('data-ax-fonts',u);document.head.appendChild(l);}
function pick(param,key,map,dflt){var v=q.get(param);if(v&&map.hasOwnProperty(v)){if(v===dflt)ls.removeItem(key);else ls.setItem(key,v);}
var c=ls.getItem(key);return c&&c!==dflt&&map.hasOwnProperty(c)?c:null;}
var s=q.get('themes');
if(s==='on')ls.setItem('${TESTER_STORAGE_KEY}','1');else if(s==='off')ls.removeItem('${TESTER_STORAGE_KEY}');
var t=pick('theme','${THEME_STORAGE_KEY}',T,'classic');
var f=pick('font','${FONT_STORAGE_KEY}',F,'theme');
if(t){h.setAttribute('data-ax-theme',t);if(!f)load(T[t]);}
if(f){h.setAttribute('data-ax-font',f);load(F[f]);}
}catch(e){}})();`;

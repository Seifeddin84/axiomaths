// Site colour themes, for testing a new look without changing the live site.
// The colours themselves are in src/app/themes.css. "classic" (orange/teal) is the default:
// nobody sees another theme unless they pick one with the switcher or a ?theme= link.

export const SITE_THEMES = [
  { id: 'classic', label: 'Classique (orange / teal)' },
  { id: 'manuel', label: 'Manuel (encre bleue, serif)' },
  { id: 'vert', label: 'Vert pastel (comme les PDF)' },
] as const;

export type SiteThemeId = (typeof SITE_THEMES)[number]['id'];

export const THEME_STORAGE_KEY = 'ax-theme';
export const TESTER_STORAGE_KEY = 'ax-theme-tester';

// Runs in <head> before the first paint, so a chosen theme never flashes the default one.
// - ?theme=<id> picks a theme (and remembers it); ?theme=classic goes back to the default.
// - ?themes=on shows the switcher on the live site (remembered); ?themes=off hides it.
export const THEME_BOOT_SCRIPT = `(function(){try{
var ids=${JSON.stringify(SITE_THEMES.map((t) => t.id))};
var q=new URLSearchParams(location.search),ls=localStorage;
var t=q.get('theme');
if(t&&ids.indexOf(t)>-1){if(t==='classic')ls.removeItem('${THEME_STORAGE_KEY}');else ls.setItem('${THEME_STORAGE_KEY}',t);}
var s=q.get('themes');
if(s==='on')ls.setItem('${TESTER_STORAGE_KEY}','1');else if(s==='off')ls.removeItem('${TESTER_STORAGE_KEY}');
var c=ls.getItem('${THEME_STORAGE_KEY}');
if(c&&c!=='classic'&&ids.indexOf(c)>-1)document.documentElement.setAttribute('data-ax-theme',c);
}catch(e){}})();`;

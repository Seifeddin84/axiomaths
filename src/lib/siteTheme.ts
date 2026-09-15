// Single source of truth for the site color palette.
// Consumed by tailwind.config.js and src/app/globals.css only — no component
// imports this directly (components use Tailwind classes / CSS variables).
//
// accent/primary values below are verified to match the live values in
// tailwind.config.js (accent.600/400/700, primary.500/400/700) and are wired
// into both tailwind.config.js and globals.css.
//
// bg/border/text are NOT currently live anywhere in the codebase — the site
// uses Tailwind's stock gray-* palette directly for backgrounds/borders/text,
// not custom tokens. They are kept here for future consolidation but are
// intentionally NOT wired into tailwind.config.js or globals.css yet, since
// doing so would add new color keys / introduce a visual repaint rather than
// consolidate an existing one.
export const siteTheme = {
  accent: {
    DEFAULT: '#ea580c',   // orange-600 — buttons, CTAs, highlights
    light:   '#fb923c',   // orange-400 — hover states
    dark:    '#c2410c',   // orange-700 — active states
  },
  primary: {
    DEFAULT: '#14b8a6',   // teal-500 — links, nav active, sidebar
    light:   '#2dd4bf',   // teal-400
    dark:    '#0f766e',   // teal-700
  },
  bg: {
    page:    '#0a0a0a',
    card:    '#111111',
    sidebar: '#0d0d0d',
    input:   '#1a1a1a',
  },
  border: {
    DEFAULT: '#222222',
    strong:  '#333333',
  },
  text: {
    primary:   '#f5f5f5',
    secondary: '#a3a3a3',
    muted:     '#525252',
  },
} as const;

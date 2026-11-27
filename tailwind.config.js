const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const ramp = (name) =>
  Object.fromEntries(SHADES.map((s) => [s, `rgb(var(--ax-${name}-${s}) / <alpha-value>)`]));

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme-driven palettes: the values live in src/app/themes.css (CSS variables),
        // so the theme switch can change them. "classic" = the original orange/teal values.
        // `accent` and `orange` share one ramp, `primary` and `teal` share the other.
        primary: ramp('primary'),
        teal: ramp('primary'),
        accent: ramp('accent'),
        orange: ramp('accent'),
      },
      fontFamily: {
        /**
         * SANS — Default UI / Body fonts
         * 
         * OPTIONS:
         * 1. "Optimistic Text" - Clean, modern (needs local files or CDN)
         * 2. "Satoshi" - Clean geometric, premium feel (loaded via Fontshare)
         * 3. System fonts - Fast, native look
         */
        sans: [
          // === CUSTOM FONTS ===
          //'"Optimistic Text"',    // If you have local files in /public/fonts/
          //'Satoshi',              // ✅ Loaded from Fontshare CDN
          
          // === GOOGLE FONTS (comment out if using custom) ===
          // 'Inter',
           'Roboto',
          // 'Montserrat',
          
          // === SYSTEM FONTS (ALWAYS KEEP!) ===
          '-apple-system',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        
        /**
         * SERIF — Editorial / Academic
         */
        serif: [
          'Playfair Display',
          'Lora',
          //'Georgia',
          //'Times New Roman',
          'serif',
        ],
        
        /**
         * MONO — Code, data
         */
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      fontWeight: {
        // Bolder weights for professional look
        normal: '500',
        medium: '600',
        semibold: '700',
        bold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
}
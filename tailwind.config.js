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
        // Primary - Teal/Blue (React docs inspired)
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',  // Main teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // Accent - Orange (for navbar, highlights)
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',  // Main orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
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
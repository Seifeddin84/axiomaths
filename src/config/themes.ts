export type Theme = {
  name: string;
  light: {
    bg: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    colors: {
      primary: string;
      primaryHover: string;
      primaryLight: string;
      secondary: string;
      secondaryHover: string;
      secondaryLight: string;
    };
    border: string;
  };
  dark: {
    bg: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    border: string;
  };
};

// ==================== THEME 1: ORANGE/TEAL (Current) ====================
export const ORANGE_TEAL: Theme = {
  name: 'Orange/Teal',
  light: {
    bg: { primary: '#fafafa', secondary: '#ffffff' },
    text: { primary: '#0a0a0a', secondary: '#666666', muted: '#999999' },
    colors: {
      primary: '#ff6b35',
      primaryHover: '#e55a2b',
      primaryLight: '#fff7ed',
      secondary: '#14b8a6',
      secondaryHover: '#0d9488',
      secondaryLight: '#f0fdfa',
    },
    border: '#e5e7eb',
  },
  dark: {
    bg: { primary: '#0f0f0f', secondary: '#1a1a1a' },
    text: { primary: '#fafafa', secondary: '#b4b4b4', muted: '#6b6b6b' },
    border: '#2a2a2a',
  },
};

// ==================== THEME 2: VERCEL (Black/White) ====================
export const VERCEL: Theme = {
  name: 'Vercel',
  light: {
    bg: { primary: '#ffffff', secondary: '#fafafa' },
    text: { primary: '#000000', secondary: '#666666', muted: '#999999' },
    colors: {
      primary: '#000000',
      primaryHover: '#333333',
      primaryLight: '#f5f5f5',
      secondary: '#0070f3',
      secondaryHover: '#0051cc',
      secondaryLight: '#eef6ff',
    },
    border: '#eaeaea',
  },
  dark: {
    bg: { primary: '#000000', secondary: '#111111' },
    text: { primary: '#ffffff', secondary: '#888888', muted: '#666666' },
    border: '#333333',
  },
};

// ==================== THEME 3: LINEAR (Purple/Violet) ====================
export const LINEAR: Theme = {
  name: 'Linear',
  light: {
    bg: { primary: '#ffffff', secondary: '#f9fafb' },
    text: { primary: '#16171b', secondary: '#6e7079', muted: '#9499a4' },
    colors: {
      primary: '#5e6ad2',
      primaryHover: '#4650b8',
      primaryLight: '#f1f2ff',
      secondary: '#8b5cf6',
      secondaryHover: '#7c3aed',
      secondaryLight: '#f5f3ff',
    },
    border: '#e8eaed',
  },
  dark: {
    bg: { primary: '#16171b', secondary: '#1c1d23' },
    text: { primary: '#ffffff', secondary: '#9499a4', muted: '#6e7079' },
    border: '#2d2e33',
  },
};

// ==================== THEME 4: STRIPE (Indigo/Cyan) ====================
export const STRIPE: Theme = {
  name: 'Stripe',
  light: {
    bg: { primary: '#ffffff', secondary: '#f6f9fc' },
    text: { primary: '#0a2540', secondary: '#425466', muted: '#8898aa' },
    colors: {
      primary: '#635bff',
      primaryHover: '#4f46e5',
      primaryLight: '#f4f4ff',
      secondary: '#00d4ff',
      secondaryHover: '#00b8e6',
      secondaryLight: '#e6f9ff',
    },
    border: '#e3e8ee',
  },
  dark: {
    bg: { primary: '#0a2540', secondary: '#1a1f36' },
    text: { primary: '#ffffff', secondary: '#adbdcc', muted: '#6b7c93' },
    border: '#2d3748',
  },
};

// ==================== THEME 5: GITHUB (Green/Blue) ====================
export const GITHUB: Theme = {
  name: 'GitHub',
  light: {
    bg: { primary: '#ffffff', secondary: '#f6f8fa' },
    text: { primary: '#24292f', secondary: '#57606a', muted: '#8c959f' },
    colors: {
      primary: '#238636',
      primaryHover: '#1a7f37',
      primaryLight: '#dafbe1',
      secondary: '#0969da',
      secondaryHover: '#0550ae',
      secondaryLight: '#ddf4ff',
    },
    border: '#d0d7de',
  },
  dark: {
    bg: { primary: '#0d1117', secondary: '#161b22' },
    text: { primary: '#c9d1d9', secondary: '#8b949e', muted: '#6e7681' },
    border: '#30363d',
  },
};

// ==================== THEME 6: NOTION (Red/Purple) ====================
export const NOTION: Theme = {
  name: 'Notion',
  light: {
    bg: { primary: '#ffffff', secondary: '#f7f6f3' },
    text: { primary: '#37352f', secondary: '#787774', muted: '#9b9a97' },
    colors: {
      primary: '#eb5757',
      primaryHover: '#d63939',
      primaryLight: '#ffeaea',
      secondary: '#9065b0',
      secondaryHover: '#7b4fa3',
      secondaryLight: '#f4effc',
    },
    border: '#e9e9e7',
  },
  dark: {
    bg: { primary: '#191919', secondary: '#2f2f2f' },
    text: { primary: '#ffffff', secondary: '#9b9a97', muted: '#787774' },
    border: '#3f3f3f',
  },
};

// ==================== THEME 7: TAILWIND (Cyan/Blue) ====================
export const TAILWIND: Theme = {
  name: 'Tailwind',
  light: {
    bg: { primary: '#ffffff', secondary: '#f8fafc' },
    text: { primary: '#0f172a', secondary: '#475569', muted: '#94a3b8' },
    colors: {
      primary: '#06b6d4',
      primaryHover: '#0891b2',
      primaryLight: '#ecfeff',
      secondary: '#3b82f6',
      secondaryHover: '#2563eb',
      secondaryLight: '#eff6ff',
    },
    border: '#e2e8f0',
  },
  dark: {
    bg: { primary: '#0f172a', secondary: '#1e293b' },
    text: { primary: '#f1f5f9', secondary: '#cbd5e1', muted: '#64748b' },
    border: '#334155',
  },
};

// ==================== ACTIVE THEME (Change this to switch themes!) ====================
export const ACTIVE_THEME = TAILWIND; // <-- CHANGE THIS LINE TO SWITCH THEMES!
export const theme = {
  // Atos-inspired Professional Color System
  colors: {
    // Professional Dark Brand Colors
    background: '#ffffff',
    foreground: '#0f172a',
    primary: '#1a1a1a',
    secondary: '#374151',
    accent: '#10b981',
    accentPurple: '#8b5cf6',
    accentBlue: '#3b82f6',
    accentOrange: '#f97316',
    enterprise: '#111827',
    darkPrimary: '#ffffff',
    darkSecondary: '#ffffff',
    vibrantGreen: '#22c55e',
    vibrantPurple: '#a855f7',
    vibrantCyan: '#06b6d4',
    
    // Legacy colors for compatibility
    accentCyan: '#0073E6',
    accentTeal: '#00005C',
    accentEmerald: '#FF6B35',
    
    // Professional Gray Scale
    gray50: '#f8fafc',
    gray100: '#f1f5f9',
    gray200: '#e2e8f0',
    gray300: '#cbd5e1',
    gray400: '#94a3b8',
    gray500: '#64748b',
    gray600: '#475569',
    gray700: '#334155',
    gray800: '#1e293b',
    gray900: '#0f172a',
    
    // Vibrant Dark Gradients
    gradientPrimary: 'linear-gradient(135deg, #10b981, #059669)',
    gradientSecondary: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    gradientTechnology: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    gradientHero: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,249,250,0.9), rgba(241,245,249,0.85))',
    gradientSubtle: 'linear-gradient(135deg, rgba(248,250,252,0.8), rgba(241,245,249,0.9))',
    gradientDark: 'linear-gradient(135deg, #f8f9fa, #ffffff, #f8f9fa)',
    gradientVibrant: 'linear-gradient(135deg, #10b981, #8b5cf6, #06b6d4)',
    gradientAccent: 'linear-gradient(135deg, #22c55e, #3b82f6)',
    gradientButton: 'linear-gradient(135deg, #10b981, #059669)',
    gradientHover: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    
    // Professional Text Colors
    white: '#ffffff',
    black: '#0f172a',
    textPrimary: '#0f172a',
    textSecondary: '#475569',
    textLight: '#64748b',
    textMuted: '#94a3b8',
  },
  
  // Professional Typography System
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    secondary: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'SF Mono', Consolas, monospace",
    display: "'Inter Display', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  
  // Professional Font Scale
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  
  // Professional Font Weights
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  
  // Line Heights
  lineHeights: {
    none: '1',
    tight: '1.1',
    snug: '1.2',
    normal: '1.5',
    relaxed: '1.6',
    loose: '2',
  },
  
  // Spacing Scale
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  
  // Border Radius (Connexus system)
  borderRadius: {
    none: '0',
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    full: '9999px',
  },
  
  // Shadows (Light theme optimized)
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  
  // Breakpoints (Connexus responsive system)
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Container Widths
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1200px',
  },
  
  // Z-Index Scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  
  // Animation Durations (Connexus timing)
  durations: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.6s',
    slower: '1s',
  },
  
  // Animation Easings
  easings: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
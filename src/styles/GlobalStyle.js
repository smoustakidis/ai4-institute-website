import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Root Variables - Connexus Design System */
  :root {
    /* Connexus Colors */
    --background: ${props => props.theme.colors.background};
    --foreground: ${props => props.theme.colors.foreground};
    --accent-cyan: ${props => props.theme.colors.accentCyan};
    --accent-teal: ${props => props.theme.colors.accentTeal};
    --accent-emerald: ${props => props.theme.colors.accentEmerald};
    
    /* Gray Scale */
    --gray-50: ${props => props.theme.colors.gray50};
    --gray-100: ${props => props.theme.colors.gray100};
    --gray-200: ${props => props.theme.colors.gray200};
    --gray-300: ${props => props.theme.colors.gray300};
    --gray-400: ${props => props.theme.colors.gray400};
    --gray-500: ${props => props.theme.colors.gray500};
    --gray-600: ${props => props.theme.colors.gray600};
    --gray-700: ${props => props.theme.colors.gray700};
    --gray-800: ${props => props.theme.colors.gray800};
    --gray-900: ${props => props.theme.colors.gray900};
    
    /* Gradients */
    --gradient-primary: ${props => props.theme.colors.gradientPrimary};
    --gradient-technology: ${props => props.theme.colors.gradientTechnology};
  }

  /* HTML & Body - Atos Light Theme */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontSizes.base};
    line-height: ${props => props.theme.lineHeights.normal};
    color: ${props => props.theme.colors.gray100};
    background: #ffffff;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    font-weight: ${props => props.theme.fontWeights.normal};
    letter-spacing: -0.025em;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  
  #root {
    min-height: 100vh;
    background: #ffffff;
  }

  /* Modern Typography System */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.foreground};
    line-height: ${props => props.theme.lineHeights.tight};
    margin-bottom: ${props => props.theme.spacing[4]};
  }

  /* Professional Heading Classes */
  .enterprise-heading {
    font-family: ${props => props.theme.fonts.display};
    font-weight: ${props => props.theme.fontWeights.extraBold};
    font-size: clamp(2.5rem, 8vw, 5rem);
    line-height: 1.05;
    letter-spacing: -0.05em;
    color: ${props => props.theme.colors.foreground};
    margin-bottom: 1.5rem;
  }

  .enterprise-subheading {
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: clamp(1.125rem, 3vw, 1.375rem);
    color: ${props => props.theme.colors.textSecondary};
    line-height: 1.6;
    margin-top: 1.5rem;
    letter-spacing: -0.01em;
  }

  .enterprise-section-title {
    font-family: ${props => props.theme.fonts.display};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: clamp(1.75rem, 5vw, 2.75rem);
    line-height: 1.15;
    letter-spacing: -0.025em;
    color: ${props => props.theme.colors.foreground};
    margin-bottom: 2rem;
  }

  /* Professional heading sizes */
  h1 {
    font-family: ${props => props.theme.fonts.display};
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: ${props => props.theme.fontWeights.extraBold};
    line-height: 1.1;
    letter-spacing: -0.03em;
  }

  h2 {
    font-family: ${props => props.theme.fonts.display};
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: ${props => props.theme.fontWeights.semiBold};
  }

  h4 {
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.semiBold};
  }

  h5 {
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: ${props => props.theme.fontWeights.medium};
  }

  h6 {
    font-size: ${props => props.theme.fontSizes.base};
    font-weight: ${props => props.theme.fontWeights.medium};
  }

  /* Professional paragraphs */
  p {
    margin-bottom: ${props => props.theme.spacing[4]};
    line-height: ${props => props.theme.lineHeights.relaxed};
    color: ${props => props.theme.colors.textSecondary};
    font-size: 1.0625rem;
  }

  /* Links */
  a {
    color: ${props => props.theme.colors.accentCyan};
    text-decoration: none;
    transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  }

  a:hover {
    color: ${props => props.theme.colors.accentTeal};
  }

  /* Lists */
  ul, ol {
    list-style: none;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Buttons */
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  }

  button:focus {
    outline: 2px solid ${props => props.theme.colors.accentCyan};
    outline-offset: 2px;
  }

  /* Form Elements */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background: ${props => props.theme.colors.gray200};
    color: ${props => props.theme.colors.foreground};
    border: 1px solid ${props => props.theme.colors.gray300};
  }

  input:focus, textarea:focus, select:focus {
    outline: 2px solid ${props => props.theme.colors.accentCyan};
    outline-offset: 2px;
    border-color: ${props => props.theme.colors.accentCyan};
  }

  /* Professional Utility Classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .text-gradient {
    background: ${props => props.theme.colors.gradientVibrant};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 300% 300%;
    animation: gradientShift 4s ease-in-out infinite;
  }
  
  .text-gradient-hover {
    background: ${props => props.theme.colors.gradientPrimary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${props => props.theme.colors.gradientHover};
      animation: gradientShift 2s ease-in-out infinite;
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out;
  }
  
  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-glow {
    animation: glow 3s ease-in-out infinite;
  }
  
  .hover-lift {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
  }

  /* Professional Background Patterns */
  .bg-dot-pattern {
    background-image: radial-gradient(circle at 1px 1px, rgba(6,182,212,0.2) 1px, transparent 0);
    background-size: 40px 40px;
  }

  .bg-grid-pattern {
    background-image: 
      linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(147,51,234,0.1) 1px, transparent 1px);
    background-size: 120px 120px;
  }

  .bg-conic-pattern {
    background-image: conic-gradient(
      from 0deg,
      rgba(6,182,212,0.1),
      transparent,
      rgba(99,102,241,0.1),
      transparent,
      rgba(6,182,212,0.1)
    );
    background-size: 200px 200px;
  }

  /* Enhanced Animations */
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    25% { background-position: 100% 0%; }
    50% { background-position: 50% 100%; }
    75% { background-position: 0% 100%; }
  }

  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes typewriter {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }

  @keyframes fadeInUp {
    from { 
      opacity: 0; 
      transform: translateY(30px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }
  
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(139, 92, 246, 0.5);
    }
  }

  @keyframes scrollBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(8px); }
    60% { transform: translateY(4px); }
  }

  /* Scroll Bar Styling - Light Theme */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.gray100};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.accentCyan};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.accentTeal};
  }

  /* Selection Styling */
  ::selection {
    background-color: ${props => props.theme.colors.accentCyan};
    color: ${props => props.theme.colors.background};
  }

  ::-moz-selection {
    background-color: ${props => props.theme.colors.accentCyan};
    color: ${props => props.theme.colors.background};
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    html {
      scroll-behavior: auto;
    }
  }

  /* Focus Visible */
  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }

  /* High Contrast Mode Support */
  @media (prefers-contrast: high) {
    .text-gradient {
      background: none;
      -webkit-background-clip: unset;
      -webkit-text-fill-color: currentColor;
      background-clip: unset;
      color: ${props => props.theme.colors.accentCyan};
    }
  }

  /* Print Styles */
  @media print {
    * {
      animation-duration: 0s !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0s !important;
    }

    body {
      background: white !important;
      color: black !important;
    }
  }
`;

export default GlobalStyle;
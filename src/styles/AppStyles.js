import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  background: #ffffff;

  main {
    flex: 1;
    padding-top: 80px; /* Account for fixed header */
  }
`;

export const Container = styled.div`
  max-width: ${props => props.maxWidth || props.theme.containers.xl};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing[6]};
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 ${props => props.theme.spacing[4]};
  }
`;

export const Section = styled.section`
  padding: ${props => props.theme.spacing[20]} 0;
  position: relative;
  
  ${props => props.background === 'dark' && `
    background: ${props.theme.colors.gray50};
  `}
  
  ${props => props.background === 'card' && `
    background: ${props.theme.colors.gray100};
  `}
  
  ${props => props.background === 'gradient' && `
    background: ${props.theme.colors.gradientPrimary};
    color: ${props.theme.colors.foreground};
  `}
  
  ${props => props.background === 'light' && `
    background: #f7fafc;
  `}
  
  ${props => props.background === 'medium-dark' && `
    background: #2d3748;
    color: #ffffff;
  `}
  
  ${props => props.background === 'dark-slate' && `
    background: #1a202c;
    color: #ffffff;
  `}
  
  ${props => props.background === 'darker-gray' && `
    background: #4a5568;
    color: #ffffff;
  `}
  
  ${props => props.background === 'professional-blue' && `
    background: #2b6cb0;
    color: #ffffff;
  `}

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    padding: ${props => props.theme.spacing[16]} 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing[12]} 0;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing[16]};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: ${props => props.theme.spacing[12]};
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  background: ${props => props.theme.colors.gradientVibrant};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
  margin-bottom: ${props => props.theme.spacing[6]};
  line-height: 1.15;
  letter-spacing: -0.025em;
  opacity: 0;
  animation: slideInFromBottom 0.8s ease-out 0.3s forwards, gradientShift 3s ease-in-out infinite;
`;

export const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: ${props => props.theme.lineHeights.relaxed};
  color: ${props => props.theme.colors.textPrimary};
  max-width: 600px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  gap: ${props => props.gap || props.theme.spacing[6]};
  align-items: ${props => props.align || 'stretch'};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing[6]};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => props.gap || props.theme.spacing[4]};
  flex-wrap: ${props => props.wrap || 'nowrap'};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: ${props => props.mobileDirection || 'column'};
    gap: ${props => props.theme.spacing[3]};
  }
`;

// Professional Card System (Atos-inspired)
export const Card = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray200};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.padding || props.theme.spacing[8]};
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing[6]};
    min-height: 240px;
  }
`;

// Professional Card with Atos-style overlay
export const MagazineCard = styled(Card)`
  background: ${props => props.theme.colors.white};
  position: relative;
  min-height: 350px;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  
  ${props => props.variant === 'primary' && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(0, 0, 92, 0.85), rgba(0, 115, 230, 0.75));
      z-index: 1;
    }
  `}
  
  ${props => props.variant === 'secondary' && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(0, 115, 230, 0.85), rgba(255, 107, 53, 0.75));
      z-index: 1;
    }
  `}
  
  ${props => props.variant === 'accent' && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 107, 53, 0.85), rgba(0, 0, 92, 0.75));
      z-index: 1;
    }
  `}
  
  ${props => props.variant === 'neutral' && `
    background: ${props.theme.colors.gray50};
    border: 1px solid ${props.theme.colors.gray200};
  `}

  > * {
    position: relative;
    z-index: 2;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

// Professional Badge
export const ReportBadge = styled.div`
  position: absolute;
  top: ${props => props.theme.spacing[4]};
  left: ${props => props.theme.spacing[4]};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[4]};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 3;
  font-family: ${props => props.theme.fonts.primary};
`;

// Professional Awards Card
export const AwardCard = styled(Card)`
  ${props => props.variant === 'primary' && `
    background: ${props.theme.colors.gradientPrimary};
    color: ${props.theme.colors.white};
    border: none;
  `}
  
  ${props => props.variant === 'secondary' && `
    background: ${props.theme.colors.gradientSecondary};
    color: ${props.theme.colors.white};
    border: none;
  `}
  
  ${props => props.variant === 'accent' && `
    background: linear-gradient(135deg, ${props.theme.colors.accent}, ${props.theme.colors.secondary});
    color: ${props.theme.colors.white};
    border: none;
  `}
  
  ${props => props.variant === 'neutral' && `
    background: ${props.theme.colors.gray100};
    color: ${props.theme.colors.textPrimary};
    border: 1px solid ${props.theme.colors.gray200};
  `}
`;

// Professional Button System (Atos-inspired)
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing[2]};
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.size === 'large' 
    ? props.theme.fontSizes.lg 
    : props.theme.fontSizes.sm
  };
  font-weight: ${props => props.theme.fontWeights.semiBold};
  border-radius: ${props => props.theme.borderRadius.md};
  text-decoration: none;
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;
  padding: ${props => props.size === 'large' 
    ? `${props.theme.spacing[4]} ${props.theme.spacing[8]}` 
    : `${props.theme.spacing[3]} ${props.theme.spacing[6]}`
  };

  ${props => props.variant === 'primary' && `
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
    box-shadow: ${props.theme.shadows.md};

    &:hover {
      background: ${props.theme.colors.secondary};
      transform: translateY(-1px);
      box-shadow: ${props.theme.shadows.lg};
    }
  `}

  ${props => props.variant === 'secondary' && `
    background: transparent;
    color: ${props.theme.colors.primary};
    border: 2px solid ${props.theme.colors.primary};

    &:hover {
      background: ${props.theme.colors.primary};
      color: ${props.theme.colors.white};
      transform: translateY(-1px);
      box-shadow: ${props.theme.shadows.md};
    }
  `}

  ${props => props.variant === 'ghost' && `
    background: transparent;
    color: ${props.theme.colors.secondary};
    border: none;

    &:hover {
      background: rgba(0, 115, 230, 0.1);
      color: ${props.theme.colors.primary};
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;

export const GradientText = styled.span`
  background: ${props => props.theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Icon = styled.div`
  width: ${props => props.size || '64px'};
  height: ${props => props.size || '64px'};
  background: ${props => props.theme.colors.gradientPrimary};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fontSize || '2rem'};
  color: ${props => props.theme.colors.foreground};
  margin-bottom: ${props => props.theme.spacing[6]};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

// Connexus specific components
export const ConnexusCard = styled(Card)`
  background: ${props => props.theme.colors.gray100};
  border: 1px solid ${props => props.theme.colors.gray200};
  
  ${props => props.variant === 'gradient' && `
    background: ${props.theme.colors.gradientPrimary};
    color: ${props.theme.colors.foreground};
    border: none;
  `}
  
  ${props => props.variant === 'light' && `
    background: ${props.theme.colors.gray200};
    color: ${props.theme.colors.foreground};
  `}
`;

export const HeroPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  pointer-events: none;
  
  ${props => props.pattern === 'dots' && `
    background-image: radial-gradient(circle at 1px 1px, rgba(6,182,212,0.2) 1px, transparent 0);
    background-size: 40px 40px;
  `}
  
  ${props => props.pattern === 'grid' && `
    background-image: 
      linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(147,51,234,0.1) 1px, transparent 1px);
    background-size: 120px 120px;
  `}
  
  ${props => props.pattern === 'conic' && `
    background-image: conic-gradient(
      from 0deg,
      rgba(6,182,212,0.1),
      transparent,
      rgba(99,102,241,0.1),
      transparent,
      rgba(6,182,212,0.1)
    );
    background-size: 200px 200px;
  `}
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: ${props => props.theme.colors.textSecondary};
  animation: scrollBounce 2s infinite;
  cursor: pointer;
  
  @keyframes scrollBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(8px); }
    60% { transform: translateX(-50%) translateY(4px); }
  }
`;

// Professional Statistics Card
export const StatCard = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing[8]};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  transition: all ${props => props.theme.durations.normal};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
  
  h3 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.primary};
    line-height: 1;
    margin-bottom: ${props => props.theme.spacing[4]};
    font-family: ${props => props.theme.fonts.primary};
  }
  
  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: ${props => props.theme.fontSizes.base};
    line-height: ${props => props.theme.lineHeights.relaxed};
    max-width: 280px;
    margin: 0 auto;
    font-weight: ${props => props.theme.fontWeights.normal};
  }
`;

// Professional Hero Banner (Atos-inspired)
export const HeroBanner = styled.div`
  background: #ffffff;
  color: ${props => props.theme.colors.textPrimary};
  padding: ${props => props.theme.spacing[24]} 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  > * {
    position: relative;
    z-index: 2;
  }
  
  h1 {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: 1.1;
    color: ${props => props.theme.colors.white};
    margin-bottom: ${props => props.theme.spacing[6]};
    letter-spacing: -0.02em;
    font-family: ${props => props.theme.fonts.primary};
    
    .highlight {
      color: ${props => props.theme.colors.accent};
      position: relative;
    }
  }
  
  p {
    font-size: ${props => props.theme.fontSizes.xl};
    color: rgba(255, 255, 255, 0.9);
    max-width: 700px;
    margin: 0 auto ${props => props.theme.spacing[8]};
    line-height: ${props => props.theme.lineHeights.relaxed};
    font-weight: ${props => props.theme.fontWeights.normal};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing[16]} ${props => props.theme.spacing[4]};
    min-height: 60vh;
  }
`;

// Partner Logo Section
export const PartnerSection = styled.div`
  padding: ${props => props.theme.spacing[16]} 0;
  
  h2 {
    font-size: ${props => props.theme.fontSizes['3xl']};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.foreground};
    margin-bottom: ${props => props.theme.spacing[12]};
  }
`;

export const PartnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing[8]};
  align-items: center;
  opacity: 0.7;
  
  img, div {
    filter: grayscale(100%);
    transition: all ${props => props.theme.durations.normal};
    
    &:hover {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
`;

// Grid Layout for Magazine Cards
export const MagazineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${props => props.theme.spacing[6]};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing[4]};
  }
`;

// Professional Card Content
export const CardContent = styled.div`
  padding: ${props => props.theme.spacing[6]};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  h3 {
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.semiBold};
    color: ${props => props.theme.colors.white};
    line-height: ${props => props.theme.lineHeights.tight};
    margin-bottom: ${props => props.theme.spacing[3]};
    font-family: ${props => props.theme.fonts.primary};
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: ${props => props.theme.fontSizes.sm};
    line-height: ${props => props.theme.lineHeights.relaxed};
    margin-bottom: ${props => props.theme.spacing[4]};
    font-weight: ${props => props.theme.fontWeights.normal};
  }
`;

// Professional View All Link
export const ViewAllLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-family: ${props => props.theme.fonts.primary};
  transition: all ${props => props.theme.durations.normal};
  
  &::after {
    content: '→';
    color: ${props => props.theme.colors.accent};
    font-size: 1.2em;
    margin-left: ${props => props.theme.spacing[1]};
    transition: transform ${props => props.theme.durations.fast};
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    
    &::after {
      transform: translateX(4px);
    }
  }
`;
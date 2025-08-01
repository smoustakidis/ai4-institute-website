import styled from 'styled-components';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.background};
  position: relative;
  padding: ${props => props.theme.spacing[20]} 0;
  max-width: ${props => props.theme.containers.xl};
  margin: 0 auto;
  padding-left: ${props => props.theme.spacing[6]};
  padding-right: ${props => props.theme.spacing[6]};

  /* Connexus Hero Background Pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 1px 1px, rgba(6,182,212,0.15) 1px, transparent 0);
    background-size: 60px 60px;
    opacity: 0.4;
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background: radial-gradient(ellipse at center right, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
  }

  > div {
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    > div {
      grid-template-columns: 1fr !important;
      gap: 3rem !important;
      text-align: center;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing[16]} ${props => props.theme.spacing[4]};
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: none;
    margin: 0 auto;
  }
`;

export const HeroVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 500px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    height: 400px;
  }
`;

export const HeroBadge = styled.div`
  background: ${props => props.theme.colors.gradientPrimary};
  color: ${props => props.theme.colors.foreground};
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[5]};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing[6]};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${props => props.theme.fonts.primary};
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 1.1;
  color: ${props => props.theme.colors.foreground};
  margin-bottom: ${props => props.theme.spacing[6]};
  letter-spacing: -0.04em;
`;

export const HeroSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: ${props => props.theme.lineHeights.relaxed};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing[8]};
  max-width: 500px;
  font-weight: ${props => props.theme.fontWeights.normal};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    max-width: none;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing[5]};
  margin-bottom: ${props => props.theme.spacing[12]};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing[3]};
  }
`;

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing[6]};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing[4]};
  }
`;

export const StatCard = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing[6]} ${props => props.theme.spacing[4]};
  background: ${props => props.theme.colors.gray100};
  border: 1px solid ${props => props.theme.colors.gray200};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.gradientPrimary};
    transform: scaleX(0);
    transition: transform ${props => props.theme.durations.normal};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.accentCyan};
    background: ${props => props.theme.colors.gray200};

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const StatNumber = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.accentCyan};
  line-height: 1;
  margin-bottom: ${props => props.theme.spacing[2]};
`;

export const StatLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textSecondary};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

export const VisualCard = styled.div`
  width: 100%;
  max-width: 500px;
  height: 400px;
  background: ${props => props.theme.colors.gray100};
  border: 1px solid ${props => props.theme.colors.gray200};
  border-radius: ${props => props.theme.borderRadius['2xl']};
  box-shadow: ${props => props.theme.shadows['2xl']};
  padding: ${props => props.theme.spacing[8]};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${props => props.theme.colors.gradientPrimary};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    max-width: 400px;
    height: 350px;
    padding: ${props => props.theme.spacing[6]};
  }
`;

export const VisualContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.semiBold};
    color: ${props => props.theme.colors.foreground};
    margin-bottom: ${props => props.theme.spacing[6]};
  }
`;

export const VisualMetrics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing[4]};
  margin-bottom: ${props => props.theme.spacing[6]};
`;

export const MetricItem = styled.div`
  background: ${props => props.theme.colors.gray200};
  border: 1px solid ${props => props.theme.colors.gray300};
  padding: ${props => props.theme.spacing[4]};
  border-radius: ${props => props.theme.borderRadius.md};
  text-align: center;
  transition: all ${props => props.theme.durations.normal};

  &:hover {
    border-color: ${props => props.theme.colors.accentCyan};
    transform: scale(1.02);
  }
`;

export const MetricValue = styled.div`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.accentCyan};
  line-height: 1;
  margin-bottom: ${props => props.theme.spacing[1]};

  &:nth-child(2n) {
    color: ${props => props.theme.colors.accentTeal};
  }
`;

export const MetricLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textSecondary};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const VisualizationArea = styled.div`
  flex: 1;
  border-radius: ${props => props.theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.gray200};
  border: 1px solid ${props => props.theme.colors.gray300};
`;
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section } from '../../styles/AppStyles';

export const ImpactContainer = styled(Section)`
  background: ${props => props.theme.colors.gradientDark};
  color: ${props => props.theme.colors.white};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(43, 171, 223, 0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
  }

  > div {
    position: relative;
    z-index: 2;
  }
`;

export const ImpactItem = styled(motion.div)`
  text-align: center;
  padding: ${props => props.theme.spacing[8]} ${props => props.theme.spacing[4]};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius.xl};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing[6]} ${props => props.theme.spacing[3]};
  }
`;

export const ImpactNumber = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 1;
  margin-bottom: ${props => props.theme.spacing[4]};
  background: linear-gradient(135deg, ${props => props.theme.colors.white}, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ImpactLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.medium};
  opacity: 0.9;
  color: rgba(255, 255, 255, 0.9);
`;
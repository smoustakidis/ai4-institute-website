import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExpertiseCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing[8]};
  box-shadow: ${props => props.theme.shadows.md};
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.gray200};
  height: 100%;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.theme.colors.gradientPrimary};
    transform: scaleX(0);
    transition: transform ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.gray300};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing[6]};
  }
`;

export const ExpertiseIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.gradientPrimary};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.white};
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

export const ExpertiseTitle = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing[4]};
  line-height: ${props => props.theme.lineHeights.tight};
`;

export const ExpertiseDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.spacing[6]};
  flex-grow: 1;
`;

export const ExpertiseFeatures = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: ${props => props.theme.spacing[2]};
    position: relative;
    padding-left: ${props => props.theme.spacing[5]};
    font-size: ${props => props.theme.fontSizes.sm};
    line-height: ${props => props.theme.lineHeights.normal};

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      top: 0;
      color: ${props => props.theme.colors.primary};
      font-weight: ${props => props.theme.fontWeights.bold};
      font-size: ${props => props.theme.fontSizes.base};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
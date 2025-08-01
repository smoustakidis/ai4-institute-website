import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PartnerCard = styled(motion.div)`
  height: 120px;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.md};
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
  padding: ${props => props.theme.spacing[4]};
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.gray200};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.gradientPrimary};
    transform: scaleX(0);
    transition: transform ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.xl};
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.gray300};

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 100px;
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;
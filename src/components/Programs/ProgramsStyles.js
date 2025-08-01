import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProgramCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

export const ProgramImage = styled.div`
  height: 200px;
  background: ${props => props.theme.colors.gradientPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  span {
    font-size: 4rem;
    filter: brightness(1.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(43, 171, 223, 0.1), rgba(214, 144, 103, 0.1));
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;

export const ProgramContent = styled.div`
  padding: ${props => props.theme.spacing[6]};
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing[5]};
  }
`;

export const ProgramTitle = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing[3]};
  line-height: ${props => props.theme.lineHeights.tight};
`;

export const ProgramDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.spacing[5]};
  flex-grow: 1;
`;

export const ProgramMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
  padding-top: ${props => props.theme.spacing[4]};
  border-top: 1px solid ${props => props.theme.colors.gray200};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing[2]};
    align-items: flex-start;
  }
`;

export const ProgramMetaItem = styled.span`
  font-weight: ${props => props.theme.fontWeights.medium};
  
  &:first-child {
    color: ${props => props.theme.colors.primary};
  }
  
  &:last-child {
    font-weight: ${props => props.theme.fontWeights.semiBold};
  }
`;
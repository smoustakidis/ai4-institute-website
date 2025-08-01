import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NewsCard = styled(motion.div)`
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

export const NewsImage = styled.div`
  height: 220px;
  background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  span {
    font-size: 3rem;
    filter: brightness(1.2);
    z-index: 2;
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(43, 171, 223, 0.8), 
      rgba(214, 144, 103, 0.8)
    );
    animation: newsShimmer 6s ease-in-out infinite;
  }

  @keyframes newsShimmer {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
`;

export const NewsContent = styled.div`
  padding: ${props => props.theme.spacing[6]};
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.spacing[5]};
  }
`;

export const NewsDate = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
  margin-bottom: ${props => props.theme.spacing[2]};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const NewsTitle = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing[3]};
  line-height: ${props => props.theme.lineHeights.snug};
`;

export const NewsExcerpt = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: ${props => props.theme.lineHeights.relaxed};
  margin-bottom: ${props => props.theme.spacing[5]};
  flex-grow: 1;
`;

export const NewsLink = styled(motion.a)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing[1]};
  margin-top: auto;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;
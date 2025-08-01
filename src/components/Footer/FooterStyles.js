import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.gradientDark};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing[20]} 0 ${props => props.theme.spacing[8]};
  margin-top: auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${props => props.theme.spacing[12]};
  margin-bottom: ${props => props.theme.spacing[12]};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${props => props.theme.spacing[8]};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing[8]};
  }
`;

export const FooterBrand = styled.div`
  max-width: 400px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-column: 1 / -1;
    max-width: none;
    text-align: center;
  }
`;

export const FooterLogo = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.spacing[4]};
`;

export const FooterDescription = styled.p`
  line-height: ${props => props.theme.lineHeights.relaxed};
  color: #cccccc;
  margin-bottom: ${props => props.theme.spacing[6]};
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing[4]};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(43, 171, 223, 0.1);
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.lg};
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

export const FooterSection = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    text-align: center;
  }
`;

export const FooterSectionTitle = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  margin-bottom: ${props => props.theme.spacing[5]};
  color: ${props => props.theme.colors.white};
`;

export const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: ${props => props.theme.spacing[3]};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const FooterLink = styled(motion.a)`
  color: #cccccc;
  text-decoration: none;
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  display: inline-block;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const FooterBottom = styled.div`
  padding-top: ${props => props.theme.spacing[8]};
  border-top: 1px solid #444444;
  text-align: center;
`;

export const FooterCopyright = styled.p`
  color: #cccccc;
  margin: 0;
  font-size: ${props => props.theme.fontSizes.sm};
`;
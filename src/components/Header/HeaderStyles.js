import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #1a202c;
  backdrop-filter: blur(20px);
  border-bottom: none;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: none;
`;

export const HeaderWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  @media (max-width: 1400px) {
    margin: 0 1rem;
    padding: 0;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: baseline;
  
  .ai-text {
    display: inline-block;
    background: ${props => props.theme.colors.gradientVibrant};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: gradientShift 3s ease-in-out infinite;
  }
  
  .four {
    display: inline-block;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: #63b3ed;
    font-weight: 700;
  }
  
  .page-text {
    display: inline-block;
    font-size: 1.2rem;
    background: ${props => props.theme.colors.gradientVibrant};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: gradientShift 3s ease-in-out infinite, slideInText 0.3s ease-out forwards;
    font-weight: 600;
    margin-left: 0.2rem;
    opacity: 0;
    transform: translateX(-10px);
  }
  
  &:hover {
    .four {
      transform: translateY(-0.6rem) scale(0.75);
      color: #10b981;
    }
    
    .ai-text {
      animation: gradientShift 1s ease-in-out infinite;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.gradientVibrant};
    transition: width 0.4s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @keyframes slideInText {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.75rem;
    
    &:hover .four {
      transform: translateY(-0.5rem) scale(0.75);
    }
    
    .page-text {
      font-size: 1rem;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[8]};
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[8]};
  list-style: none;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.$isActive 
    ? props.theme.colors.vibrantGreen 
    : props.theme.colors.gray100
  };
  text-decoration: none;
  position: relative;
  padding: ${props => props.theme.spacing[2]} 0;
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: ${props => props.theme.colors.gradientButton};
    transition: width ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  }

  &:hover {
    color: ${props => props.theme.colors.vibrantCyan};

    &::after {
      width: 100%;
      background: ${props => props.theme.colors.gradientAccent};
    }
  }
`;

export const NavDropdown = styled.div`
  position: relative;
  
  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #1a202c;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 20px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #1a202c;
  }
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 0.75rem 1.25rem;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
`;

export const NavCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.gradientPrimary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing[3]} ${props => props.theme.spacing[6]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  text-decoration: none;
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};
  box-shadow: ${props => props.theme.shadows.md};
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
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};

    &::before {
      left: 100%;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MobileToggle = styled.button`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.textPrimary};
  font-size: ${props => props.theme.fontSizes.lg};
  transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: calc(100vh - 80px);
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.xl};
  z-index: ${props => props.theme.zIndex.dropdown};
  padding: ${props => props.theme.spacing[8]};
  overflow-y: auto;

  nav {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing[1]};
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

export const MobileNavLink = styled.div`
  a {
    display: block;
    padding: ${props => props.theme.spacing[4]} ${props => props.theme.spacing[2]};
    font-family: ${props => props.theme.fonts.secondary};
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.textPrimary};
    text-decoration: none;
    border-radius: ${props => props.theme.borderRadius.md};
    transition: all ${props => props.theme.durations.normal} ${props => props.theme.easings.easeOut};

    &:hover {
      background: ${props => props.theme.colors.gray50};
      color: ${props => props.theme.colors.primary};
      transform: translateX(10px);
    }
  }
`;

export const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #525252;
  font-weight: 500;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

export const LanguageOption = styled.span`
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  color: ${props => props.$isActive ? props.theme.colors.primary : '#ffffff'};
  background-color: ${props => props.$isActive ? 'rgba(0, 115, 230, 0.1)' : 'transparent'};
  
  &:hover {
    background-color: ${props => props.$isActive ? 'rgba(0, 115, 230, 0.2)' : '#f3f4f6'};
    color: ${props => props.theme.colors.primary};
  }
`;

export const LanguageDivider = styled.span`
  color: #d1d5db;
`;

export const MobileLanguageSwitcher = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const MobileLanguageOption = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$isActive ? props.theme.colors.primary : '#374151'};
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  background-color: ${props => props.$isActive ? 'rgba(0, 115, 230, 0.1)' : 'transparent'};
  
  &:hover {
    background-color: ${props => props.$isActive ? 'rgba(0, 115, 230, 0.2)' : '#f3f4f6'};
    color: ${props => props.theme.colors.primary};
  }
`;
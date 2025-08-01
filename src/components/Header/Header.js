import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  Navigation,
  NavMenu,
  NavLink,
  NavDropdown,
  DropdownMenu,
  DropdownItem,
  MobileToggle,
  MobileMenu,
  MobileNavLink,
  LanguageSwitcher,
  LanguageOption,
  LanguageDivider,
  MobileLanguageSwitcher,
  MobileLanguageOption
} from './HeaderStyles';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isResearchDropdownOpen, setIsResearchDropdownOpen] = useState(false);
  const location = useLocation();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  
  // Determine page-specific text (only for main pages)
  const getPageSpecificText = () => {
    const path = location.pathname;
    if (path === '/research') return 'research';
    if (path === '/services') return 'services';
    if (path === '/products') return 'products';
    if (path === '/eu-projects') return 'eu projects';
    return '';
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigation = [
    { 
      name: t('header.research'), 
      path: '/research',
      hasDropdown: true,
      dropdown: [
        { name: t('header.researchAreas'), path: '/research' },
        { name: t('header.euProjects'), path: '/eu-projects' }
      ]
    },
    { name: t('header.services'), path: '/services' },
    { name: t('header.products'), path: '/products' },
    { name: t('header.news'), path: '/news' },
    { name: t('header.about'), path: '/about' },
    { name: t('header.contact'), path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <HeaderContainer 
        as={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        $isScrolled={isScrolled}
      >
        <HeaderWrapper>
          <Logo 
            as={Link} 
            to="/"
            onClick={handleLogoClick}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            $isHovered={isLogoHovered}
            $pageText={getPageSpecificText()}
          >
            <span className="ai-text">AI</span>
            <span className="four">4</span>
            {isLogoHovered && getPageSpecificText() && (
              <span className="page-text">{getPageSpecificText()}</span>
            )}
          </Logo>

          <Navigation>
            <NavMenu>
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.hasDropdown ? (
                    <NavDropdown>
                      <NavLink 
                        as={Link} 
                        to={item.path}
                        $isActive={location.pathname === item.path || location.pathname === '/eu-projects'}
                      >
                        {item.name}
                      </NavLink>
                      <DropdownMenu className="dropdown-menu">
                        {item.dropdown.map((dropdownItem) => (
                          <DropdownItem
                            key={dropdownItem.name}
                            as={Link}
                            to={dropdownItem.path}
                          >
                            {dropdownItem.name}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </NavDropdown>
                  ) : (
                    <NavLink 
                      as={Link} 
                      to={item.path}
                      $isActive={location.pathname === item.path}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </NavMenu>

            <LanguageSwitcher>
              <LanguageOption 
                onClick={() => changeLanguage('en')}
                $isActive={language === 'en'}
                style={{ cursor: 'pointer' }}
              >
                EN
              </LanguageOption>
              <LanguageDivider>|</LanguageDivider>
              <LanguageOption 
                onClick={() => changeLanguage('el')}
                $isActive={language === 'el'}
                style={{ cursor: 'pointer' }}
              >
                EL
              </LanguageOption>
            </LanguageSwitcher>

            <MobileToggle onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </MobileToggle>
          </Navigation>
        </HeaderWrapper>
      </HeaderContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            as={motion.div}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <nav>
              {navigation.map((item, index) => (
                <MobileNavLink
                  key={item.name}
                  as={motion.div}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </MobileNavLink>
              ))}
              
              <MobileLanguageSwitcher
                as={motion.div}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.1 }}
              >
                <MobileLanguageOption 
                  onClick={() => changeLanguage('en')}
                  $isActive={language === 'en'}
                  style={{ cursor: 'pointer' }}
                >
                  EN
                </MobileLanguageOption>
                <LanguageDivider style={{ fontSize: '1rem' }}>|</LanguageDivider>
                <MobileLanguageOption 
                  onClick={() => changeLanguage('el')}
                  $isActive={language === 'el'}
                  style={{ cursor: 'pointer' }}
                >
                  EL
                </MobileLanguageOption>
              </MobileLanguageSwitcher>
            </nav>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
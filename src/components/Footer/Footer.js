import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Container, GradientText } from '../../styles/AppStyles';
import {
  FooterContainer,
  FooterGrid,
  FooterBrand,
  FooterLogo,
  FooterDescription,
  SocialLinks,
  SocialLink,
  FooterSection,
  FooterSectionTitle,
  FooterLinks,
  FooterLink,
  FooterBottom,
  FooterCopyright
} from './FooterStyles';

const Footer = () => {
  const footerSections = [
    {
      title: 'Expertise',
      links: [
        { name: 'AI Research', path: '/expertise' },
        { name: 'Educational Innovation', path: '/expertise' },
        { name: 'Digital Transformation', path: '/expertise' },
        { name: 'Data Science', path: '/expertise' }
      ]
    },
    {
      title: 'Programmes',
      links: [
        { name: 'Horizon Europe', path: '/programs' },
        { name: 'Erasmus+', path: '/programs' },
        { name: 'Digital Europe', path: '/programs' },
        { name: 'EIT Digital', path: '/programs' }
      ]
    },
    {
      title: 'Organization',
      links: [
        { name: 'About AI4', path: '/about' },
        { name: 'Our Team', path: '/about' },
        { name: 'Careers', path: '/about' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' }
  ];

  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <FooterBrand>
            <FooterLogo as={GradientText}>AI4</FooterLogo>
            <FooterDescription>
              The Institute of Artificial Intelligence Development is dedicated to advancing 
              AI research, innovation, and education through strategic partnerships and 
              cutting-edge European programmes.
            </FooterDescription>
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  as={motion.a}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterBrand>

          {footerSections.map((section, index) => (
            <FooterSection key={index}>
              <FooterSectionTitle>{section.title}</FooterSectionTitle>
              <FooterLinks>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <FooterLink 
                      as={Link} 
                      to={link.path}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </FooterLink>
                  </li>
                ))}
              </FooterLinks>
            </FooterSection>
          ))}
        </FooterGrid>

        <FooterBottom>
          <FooterCopyright>
            © 2025 AI4 - Institute of Artificial Intelligence Development. All rights reserved.
          </FooterCopyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
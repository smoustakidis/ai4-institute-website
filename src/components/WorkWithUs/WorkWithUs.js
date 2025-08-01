import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const SectionContainer = styled.section`
  background: #0073E6;
  padding: 4rem 2rem;
  color: white;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  font-family: 'Raleway', sans-serif;
  
  /* Create the Atos-style logo shape */
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    background: white;
    clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
    opacity: 0.9;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    background: white;
    clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
    opacity: 0.7;
  }
`;

const TextContent = styled.div`
  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Raleway', sans-serif;
  }
  
  button {
    background: transparent;
    color: white;
    border: 2px solid white;
    padding: 0.75rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: white;
      color: #0073E6;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #00D4FF;
      transform: translateY(-2px);
    }
  }
`;

const WorkWithUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContentWrapper>
          <LeftContent>
            <motion.div variants={itemVariants}>
              <Logo>AI4</Logo>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <TextContent>
                <h2>Work with us</h2>
                <button>AI4 Careers →</button>
              </TextContent>
            </motion.div>
          </LeftContent>
          
          <motion.div variants={itemVariants}>
            <SocialLinks>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </SocialLinks>
          </motion.div>
        </ContentWrapper>
      </motion.div>
    </SectionContainer>
  );
};

export default WorkWithUs;
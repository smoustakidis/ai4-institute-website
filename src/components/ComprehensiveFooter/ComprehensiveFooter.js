import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';

const FooterWrapper = styled.footer`
  width: 100%;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(99, 179, 237, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1400px) {
    margin: 0 1rem;
    padding: 3rem 1rem 2rem;
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 3rem;
  align-items: start;
  margin-bottom: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
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
  
  &:hover {
    .four {
      transform: translateY(-0.5rem) scale(0.8);
      color: #10b981;
    }
    
    .ai-text {
      animation: gradientShift 1s ease-in-out infinite;
    }
  }
`;

const BrandText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-family: 'Inter', sans-serif;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(16, 185, 129, 0.2);
    border-color: #10b981;
    color: #10b981;
    transform: translateY(-2px);
  }
`;

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const LinkColumn = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        font-family: 'Inter', sans-serif;
        
        &:hover {
          color: #10b981;
        }
      }
    }
  }
`;

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;
  
  @media (max-width: 968px) {
    align-items: center;
  }
`;

const CTAText = styled.div`
  text-align: right;
  
  @media (max-width: 968px) {
    text-align: center;
  }
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  margin: 0;
  font-family: 'Inter', sans-serif;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.8rem;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    
    &:hover {
      color: #10b981;
    }
  }
`;

const ComprehensiveFooter = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <FooterTop>
            <motion.div variants={itemVariants}>
              <BrandSection>
                <Logo onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                  <span className="ai-text">AI</span>
                  <span className="four">4</span>
                </Logo>
                <BrandText>
                  {t('footer.company.description')}
                </BrandText>
                <SocialLinks>
                  <SocialIcon
                    href="https://scholar.google.com/citations?user=baTWnToAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin />
                  </SocialIcon>
                  <SocialIcon
                    href="https://scholar.google.com/citations?user=Do1GhRUAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTwitter />
                  </SocialIcon>
                  <SocialIcon
                    href="https://scholar.google.com/citations?user=4YYh8RoAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaYoutube />
                  </SocialIcon>
                </SocialLinks>
              </BrandSection>
            </motion.div>

            <motion.div variants={itemVariants}>
              <LinksSection>
                <LinkColumn>
                  <h4>{t('footer.links.research')}</h4>
                  <ul>
                    <li><Link to="/research">{language === 'el' ? 'Μηχανική Μάθηση' : 'Machine Learning'}</Link></li>
                    <li><Link to="/research">{language === 'el' ? 'Βαθιά Μάθηση' : 'Deep Learning'}</Link></li>
                    <li><Link to="/research">{language === 'el' ? 'Υπολογιστική Όραση' : 'Computer Vision'}</Link></li>
                    <li><Link to="/research">{language === 'el' ? 'Επεξεργασία Φυσικής Γλώσσας' : 'Natural Language Processing'}</Link></li>
                    <li><Link to="/research">{language === 'el' ? 'Επεξηγησιμότητα ΤΝ' : 'AI Explainability'}</Link></li>
                  </ul>
                </LinkColumn>

                <LinkColumn>
                  <h4>{t('footer.links.services')}</h4>
                  <ul>
                    <li><Link to="/services">{language === 'el' ? 'Συστήματα ΤΝ Υγείας' : 'Healthcare AI Systems'}</Link></li>
                    <li><Link to="/services">{language === 'el' ? 'Έξυπνη Γεωργία' : 'Smart Agriculture'}</Link></li>
                    <li><Link to="/services">{language === 'el' ? 'Εκπαιδευτικές Πλατφόρμες ΤΝ' : 'Educational AI Platforms'}</Link></li>
                    <li><Link to="/services">{language === 'el' ? 'Περιβαλλοντική Παρακολούθηση' : 'Environmental Monitoring'}</Link></li>
                    <li><Link to="/services">{language === 'el' ? 'Βιομηχανικός Αυτοματισμός' : 'Industrial Automation'}</Link></li>
                  </ul>
                </LinkColumn>

                <LinkColumn>
                  <h4>{t('footer.links.about')}</h4>
                  <ul>
                    <li><Link to="/about">{language === 'el' ? 'Σχετικά με την AI4' : 'About AI4'}</Link></li>
                    <li><Link to="/about">{language === 'el' ? 'Η Ερευνητική μας Ομάδα' : 'Our Research Team'}</Link></li>
                    <li><Link to="/news">{language === 'el' ? 'Τελευταίες Δημοσιεύσεις' : 'Latest Publications'}</Link></li>
                    <li><Link to="/contact">{language === 'el' ? 'Ευρωπαϊκές Συνεργασίες' : 'EU Partnerships'}</Link></li>
                    <li><Link to="/contact">{t('footer.links.contact')}</Link></li>
                  </ul>
                </LinkColumn>
              </LinksSection>
            </motion.div>

            <motion.div variants={itemVariants}>
              <CTASection>
                <CTAText>
                  <h3>{language === 'el' ? 'Έτοιμοι να καινοτομήσετε με την ΤΝ;' : 'Ready to innovate with AI?'}</h3>
                  <p>{language === 'el' ? 'Ας συνεργαστούμε στο επόμενο πρωτοποριακό σας έργο' : 'Let\'s collaborate on your next breakthrough project'}</p>
                </CTAText>
                <CTAButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/contact')}
                >
                  {t('home.getStarted')} →
                </CTAButton>
              </CTASection>
            </motion.div>
          </FooterTop>

          <FooterBottom>
            <Copyright>
              © 2024 AI4 - Advanced AI Solutions. {t('footer.company.rights')}
            </Copyright>
            <LegalLinks>
              <Link to="/privacy-policy">{t('footer.legal.privacy')}</Link>
              <Link to="/terms-of-service">{t('footer.legal.terms')}</Link>
              <Link to="/accessibility">{language === 'el' ? 'Προσβασιμότητα' : 'Accessibility'}</Link>
            </LegalLinks>
          </FooterBottom>
        </motion.div>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default ComprehensiveFooter;
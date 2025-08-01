import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '../hooks/useTranslation';
import IndustryResearch from '../components/IndustryResearch';
import ComprehensiveFooter from '../components/ComprehensiveFooter/ComprehensiveFooter';

const PageContainer = styled.div`
  padding-top: 0;
`;

const BreadcrumbBar = styled.div`
  background: #f8f9fa;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 0;
  
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 1400px) {
      margin: 0 2rem;
      padding: 0;
    }
  }
  
  .breadcrumb {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
    
    a {
      color: #0073E6;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
    
    span {
      margin: 0 0.5rem;
    }
  }
`;

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background: #1a202c;
  display: flex;
  align-items: center;
  margin-top: 0;
  padding-top: 120px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse 800px 600px at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse 600px 400px at 0% 100%, rgba(168, 85, 247, 0.04) 0%, transparent 50%),
      radial-gradient(ellipse 400px 300px at 100% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle 2px at 20% 30%, rgba(59, 130, 246, 0.8) 0%, transparent 2px),
      radial-gradient(circle 1px at 80% 20%, rgba(168, 85, 247, 0.6) 0%, transparent 1px),
      radial-gradient(circle 1.5px at 60% 80%, rgba(16, 185, 129, 0.7) 0%, transparent 1.5px),
      radial-gradient(circle 1px at 30% 70%, rgba(251, 191, 36, 0.5) 0%, transparent 1px),
      radial-gradient(circle 2px at 70% 40%, rgba(59, 130, 246, 0.6) 0%, transparent 2px),
      radial-gradient(circle 1px at 40% 60%, rgba(168, 85, 247, 0.8) 0%, transparent 1px);
    pointer-events: none;
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  color: white;
  width: 100%;
  
  @media (max-width: 1400px) {
    margin: 0 2rem;
    padding: 0;
  }
  
  h1 {
    font-size: clamp(3rem, 6vw, 4.5rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
    line-height: 1.1;
    color: white;
  }
  
  .subtitle {
    font-size: 1.125rem;
    line-height: 1.6;
    max-width: 500px;
    opacity: 0.95;
    font-weight: 400;
    color: #cbd5e1;
  }
`;

const SectionBase = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    
    h2 {
      font-size: clamp(1.75rem, 3vw, 2.25rem);
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 1rem;
      font-family: 'Poppins', sans-serif;
      line-height: 1.2;
    }
    
    .section-description {
      font-size: 1.125rem;
      line-height: 1.6;
      color: #525252;
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

const ContentSection = styled(SectionBase)`
  .content-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    
    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
  
  .text-content {
    h2 {
      font-size: clamp(1.75rem, 3vw, 2.25rem);
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 1.5rem;
      font-family: 'Poppins', sans-serif;
      line-height: 1.2;
    }
    
    p {
      font-size: 1rem;
      line-height: 1.7;
      color: #525252;
      margin-bottom: 1.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  .image-content {
    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;

const CapabilitiesSection = styled(SectionBase)`
  background: #f8f9fa;
  
  .left-header {
    text-align: left;
    margin-bottom: 3rem;
    
    h2 {
      font-size: clamp(1.75rem, 3vw, 2.25rem);
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 1rem;
      font-family: 'Poppins', sans-serif;
      line-height: 1.2;
    }
    
    .section-description {
      font-size: 1rem;
      line-height: 1.6;
      color: #525252;
      max-width: none;
      margin: 0;
    }
  }
`;

const ThreeColumnSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 4rem 0;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 1200px) and (min-width: 969px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .column {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
    }
  }
  
  .column-image {
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    &:hover img {
      transform: scale(1.05);
    }
  }
  
  .column-content {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 1rem;
      font-family: 'Poppins', sans-serif;
    }
    
    p {
      font-size: 0.875rem;
      line-height: 1.6;
      color: #525252;
      margin: 0;
    }
  }
`;

const CTASection = styled.section`
  background: white;
  padding: 6rem 2rem;
  text-align: center;
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    
    h2 {
      font-size: clamp(2rem, 4vw, 2.5rem);
      font-weight: 700;
      margin-bottom: 1.5rem;
      font-family: 'Poppins', sans-serif;
      color: #1a1a1a;
    }
    
    p {
      font-size: 1.125rem;
      margin-bottom: 3rem;
      line-height: 1.6;
      color: #525252;
    }
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      
      @media (max-width: 640px) {
        flex-direction: column;
        gap: 0.75rem;
      }
      
      button {
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;
        white-space: nowrap;
        
        &.primary {
          background: linear-gradient(135deg, #0073E6, #00005C);
          color: white;
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 115, 230, 0.3);
          }
        }
        
        &.secondary {
          background: transparent;
          color: #0073E6;
          border: 2px solid #0073E6;
          
          &:hover {
            background: #0073E6;
            color: white;
          }
        }
      }
    }
  }
`;

const ResearchPage = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  const getContent = () => {
    if (language === 'el') {
      return {
        title: 'Έρευνα',
        subtitle: 'Ωθούμε τα όρια της τεχνητής νοημοσύνης μέσω προηγμένης έρευνας και καινοτομίας.',
        breadcrumb: {
          home: 'Αρχική',
          research: 'Έρευνα'
        },
        leadingResearch: {
          title: 'Ηγούμενη έρευνα και καινοτομία στην ΤΝ',
          description1: 'Η AI4 επιδιώκει να είναι πρωτοπόρος στον τομέα της τεχνητής νοημοσύνης αναπτύσσοντας προηγμένους αλγορίθμους, μεθοδολογίες και εφαρμογές που ωθούν τα όρια του τι είναι δυνατό στην ΤΝ. Οι πολυεπιστημονικές ερευνητικές μας ομάδες εργάζονται σε προγράμματα που κυμαίνονται από θεμελιώδη έρευνα ΤΝ έως εφαρμοσμένες λύσεις για προκλήσεις του πραγματικού κόσμου.',
          description2: 'Συνεργαζόμαστε με κορυφαία πανεπιστήμια, ερευνητικά ιδρύματα και εταιρικούς συνεργάτες σε όλη την Ευρώπη για να προωθήσουμε την κατάσταση των τεχνολογιών τεχνητής νοημοσύνης και μηχανικής μάθησης.'
        },
        methodology: {
          title: 'Η ερευνητική μας μεθοδολογία',
          description: 'Η ερευνητική μας προσέγγιση συνδυάζει θεωρητική καινοτομία με πρακτικές εφαρμογές.',
          experimental: {
            title: 'Πειραματική Έρευνα',
            description: 'Αυστηρά ελεγχόμενα πειράματα και A/B δοκιμές για την επικύρωση των μοντέλων και αλγορίθμων ΤΝ μας. Χρησιμοποιούμε συστηματικές μεθοδολογίες για να διασφαλίσουμε αναπαραγώγιμα και αξιόπιστα ερευνητικά αποτελέσματα.'
          },
          dataAnalysis: {
            title: 'Ανάλυση Βασισμένη σε Δεδομένα',
            description: 'Προηγμένες στατιστικές αναλύσεις και τεχνικές μηχανικής μάθησης για την εξαγωγή σημαντικών ιδεών από πολύπλοκα σύνολα δεδομένων. Η προσέγγισή μας δίνει έμφαση στην έρευνα βασισμένη σε στοιχεία και την ποσοτική επικύρωση.'
          },
          collaboration: {
            title: 'Συνεργατική Καινοτομία',
            description: 'Στρατηγικές συνεργασίες με πανεπιστήμια και ερευνητικά ιδρύματα σε όλη την Ευρώπη. Προωθούμε τη διεπιστημονική συνεργασία για την αντιμετώπιση πολύπλοκων προκλήσεων που απαιτούν διαφορετική εμπειρία και οπτικές.'
          }
        },
        cta: {
          title: 'Έτοιμοι να συνεργαστείτε σε προηγμένη έρευνα ΤΝ;',
          description: 'Ενωθείτε με κορυφαίους ερευνητές και ιδρύματα στην προώθηση των ορίων της τεχνητής νοημοσύνης. Ας εξερευνήσουμε πώς μπορούμε να συνεργαστούμε σε καινοτόμα ερευνητικά προγράμματα.',
          exploreButton: 'Εξερευνήστε Ερευνητικές Συνεργασίες',
          contactButton: 'Επικοινωνήστε με την Ερευνητική μας Ομάδα'
        }
      };
    }
    return {
      title: 'Research',
      subtitle: 'Pushing the boundaries of artificial intelligence through cutting-edge research and innovation.',
      breadcrumb: {
        home: 'Home',
        research: 'Research'
      },
      leadingResearch: {
        title: 'Leading AI research and innovation',
        description1: 'AI4 strives to be a research leader in the artificial intelligence sector by developing cutting-edge algorithms, methodologies, and applications that push the boundaries of what\'s possible in AI. Our multidisciplinary research teams work on projects ranging from fundamental AI research to applied solutions for real-world challenges.',
        description2: 'We collaborate with leading universities, research institutions, and industry partners across Europe to advance the state of artificial intelligence and machine learning technologies.'
      },
      methodology: {
        title: 'Our research methodology',
        description: 'Our research approach combines theoretical innovation with practical applications.',
        experimental: {
          title: 'Experimental Research',
          description: 'Rigorous controlled experiments and A/B testing to validate our AI models and algorithms. We employ systematic methodologies to ensure reproducible and reliable research outcomes.'
        },
        dataAnalysis: {
          title: 'Data-Driven Analysis',
          description: 'Advanced statistical analysis and machine learning techniques to extract meaningful insights from complex datasets. Our approach emphasizes evidence-based research and quantitative validation.'
        },
        collaboration: {
          title: 'Collaborative Innovation',
          description: 'Strategic partnerships with universities and research institutions across Europe. We foster interdisciplinary collaboration to address complex challenges requiring diverse expertise and perspectives.'
        }
      },
      cta: {
        title: 'Ready to collaborate on cutting-edge AI research?',
        description: 'Join leading researchers and institutions in advancing the frontiers of artificial intelligence. Let\'s explore how we can collaborate on innovative research projects.',
        exploreButton: 'Explore Research Partnerships',
        contactButton: 'Contact Our Research Team'
      }
    };
  };

  const content = getContent();
  
  return (
    <PageContainer>
      <Helmet>
        <title>{content.title} - AI4 Advanced Solutions</title>
        <meta name="description" content={content.subtitle} />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {content.title}
          </motion.h1>
          <motion.div
            className="subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.subtitle}
          </motion.div>
        </HeroContent>
      </HeroSection>

      <BreadcrumbBar>
        <div className="container">
          <div className="breadcrumb">
            <button onClick={() => navigate('/')} style={{border: 'none', background: 'none', color: '#0073E6', textDecoration: 'none', cursor: 'pointer'}}>{content.breadcrumb.home}</button>
            <span>/</span>
            <span>{content.breadcrumb.research}</span>
          </div>
        </div>
      </BreadcrumbBar>

      <ContentSection>
        <div className="content-layout">
          <motion.div 
            className="text-content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>{content.leadingResearch.title}</h2>
            <p>
              {content.leadingResearch.description1}
            </p>
            <p>
              {content.leadingResearch.description2}
            </p>
          </motion.div>
          
          <motion.div 
            className="image-content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="/images/ai-research.jpg" alt="AI Research" />
          </motion.div>
        </div>
      </ContentSection>

      <CapabilitiesSection>
        <div className="left-header">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {content.methodology.title}
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {content.methodology.description}
          </motion.p>
        </div>

        <ThreeColumnSection>
          <motion.div 
            className="column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="column-image">
              <img src="/images/experimental-research-hq.jpg" alt={content.methodology.experimental.title} />
            </div>
            <div className="column-content">
              <h3>{content.methodology.experimental.title}</h3>
              <p>{content.methodology.experimental.description}</p>
            </div>
          </motion.div>

          <motion.div 
            className="column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="column-image">
              <img src="/images/data-analytics-dashboard.jpg" alt={content.methodology.dataAnalysis.title} />
            </div>
            <div className="column-content">
              <h3>{content.methodology.dataAnalysis.title}</h3>
              <p>{content.methodology.dataAnalysis.description}</p>
            </div>
          </motion.div>

          <motion.div 
            className="column"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="column-image">
              <img src="/images/collaborative-innovation-alt.jpg" alt={content.methodology.collaboration.title} />
            </div>
            <div className="column-content">
              <h3>{content.methodology.collaboration.title}</h3>
              <p>{content.methodology.collaboration.description}</p>
            </div>
          </motion.div>
        </ThreeColumnSection>
      </CapabilitiesSection>

      <IndustryResearch />

      <CTASection>
        <div className="container">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {content.cta.title}
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {content.cta.description}
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="primary" onClick={() => navigate('/eu-projects')}>{content.cta.exploreButton}</button>
            <button className="secondary" onClick={() => navigate('/contact')}>{content.cta.contactButton}</button>
          </motion.div>
        </div>
      </CTASection>

      <ComprehensiveFooter />
    </PageContainer>
  );
};

export default ResearchPage;
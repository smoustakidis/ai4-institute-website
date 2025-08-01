import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '../hooks/useTranslation';
import AboutTeam from '../components/AboutTeam';
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
    color: #ffffff;
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

const ValuesSection = styled(SectionBase)`
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
      flex-wrap: wrap;
      
      button {
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;
        
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

const AboutPage = () => {
  const navigate = useNavigate();
  const { language } = useTranslation();

  const getContent = () => {
    if (language === 'el') {
      return {
        title: 'Σχετικά με την AI4',
        subtitle: 'Εξειδικευόμαστε στην ανάλυση δεδομένων και στις καινοτόμες εφαρμογές ΤΝ μέσω ακαδημαϊκών συνεργασιών και ευρωπαϊκών ερευνητικών προγραμμάτων.',
        breadcrumb: {
          home: 'Αρχική',
          about: 'Σχετικά'
        },
        mission: {
          title: 'Η αποστολή και το όραμά μας',
          description1: 'Η AI4 Ιδιωτική Εταιρία (ARTIFICIAL INTELLIGENCE FOR ADVANCED SOLUTIONS ΙΔΙΩΤΙΚΗ ΕΤΑΙΡΙΑ) εξειδικεύεται στην ανάλυση δεδομένων και στην ανάπτυξη καινοτόμων εφαρμογών Τεχνητής Νοημοσύνης. Δεσμευόμαστε στην προώθηση της τεχνολογίας ΤΝ μέσω της αιχμής της έρευνας, στρατηγικών συνεργασιών με ακαδημαϊκά ιδρύματα και πρακτικών λύσεων που αντιμετωπίζουν προκλήσεις του πραγματικού κόσμου.',
          description2: 'Με έδρα τη Θράκη, Ελλάδα, η εταιρία μας διατηρεί στενές συνεργασίες με πανεπιστήμια, ερευνητικά ινστιτούτα (Δημοκρίτειο Πανεπιστήμιο, ΕΚΕΤΑ) και ιδιωτικές εταιρίες, εξασφαλίζοντας πρόσβαση σε επιστημονικά δίκτυα, εργαστηριακή υποδομή και υψηλού επιπέδου ανθρώπινους πόρους. Εστιάζουμε στη μετατροπή των ερευνητικών καινοτομιών σε πρακτικές εφαρμογές σε πολλαπλούς τομείς.'
        },
        values: {
          title: 'Οι βασικές μας αξίες',
          description: 'Οι αρχές που καθοδηγούν το έργο μας και ορίζουν τον οργανωσιακό μας πολιτισμό.',
          research: {
            title: 'Ερευνητική Αριστεία',
            description: 'Εξειδικευόμαστε στην ανάλυση δεδομένων και στην ανάπτυξη εφαρμογών ΤΝ με ισχυρή εμπειρία στη συγγραφή και υλοποίηση ευρωπαϊκών ερευνητικών προτάσεων, ιδιαίτερα στο πλαίσιο του Horizon. Η ομάδα μας συνδυάζει ακαδημαϊκή αυστηρότητα με πρακτική καινοτομία.'
          },
          ethical: {
            title: 'Ηθική Ανάπτυξη ΤΝ',
            description: 'Δεσμευόμαστε στην ανάπτυξη συστημάτων ΤΝ που είναι διαφανή, δίκαια και ευεργετικά για την κοινωνία. Το ηθικό μας πλαίσιο εξασφαλίζει υπεύθυνη καινοτομία που σέβεται τις ανθρώπινες αξίες και προάγει την εμπιστοσύνη.'
          },
          partnerships: {
            title: 'Ακαδημαϊκές Συνεργασίες',
            description: 'Διατηρούμε ισχυρές συνεργατικές σχέσεις με το Δημοκρίτειο Πανεπιστήμιο, το ΕΚΕΤΑ και ιδιωτικές εταιρίες, παρέχοντας πρόσβαση σε επιστημονικά δίκτυα, εργαστηριακές εγκαταστάσεις και εμπειρογνωμοσύνη για ολοκληρωμένη ανάπτυξη και υλοποίηση έργων.'
          }
        },
        cta: {
          title: 'Έτοιμοι να συμμετάσχετε στην αποστολή μας;',
          description: 'Γίνετε μέρος μιας ομάδας που διαμορφώνει το μέλλον της τεχνητής νοημοσύνης. Εξερευνήστε ευκαιρίες καριέρας και συνεργασίες με την AI4.',
          joinTeam: 'Γίνετε Μέλος της Ομάδας μας',
          partnerWithUs: 'Συνεργαστείτε Μαζί μας'
        }
      };
    }
    return {
      title: 'About AI4',
      subtitle: 'Specializing in data analysis and innovative AI applications through academic partnerships and European research programs.',
      breadcrumb: {
        home: 'Home',
        about: 'About'
      },
      mission: {
        title: 'Our mission and vision',
        description1: 'AI4 Private Company (ARTIFICIAL INTELLIGENCE FOR ADVANCED SOLUTIONS PRIVATE COMPANY) specializes in data analysis and the development of innovative Artificial Intelligence applications. We are committed to advancing AI technology through cutting-edge research, strategic partnerships with academic institutions, and practical solutions that address real-world challenges.',
        description2: 'Based in Thrace, Greece, our company maintains close collaborations with universities, research institutes (Democritus University, CERTH) and private companies, ensuring access to scientific networks, laboratory infrastructure, and high-level human resources. We focus on transforming research innovations into practical applications across multiple sectors.'
      },
      values: {
        title: 'Our core values',
        description: 'The principles that guide our work and define our organizational culture.',
        research: {
          title: 'Research Excellence',
          description: 'We specialize in data analysis and AI application development with strong expertise in writing and implementing European research proposals, particularly within the Horizon framework. Our team combines academic rigor with practical innovation.'
        },
        ethical: {
          title: 'Ethical AI Development',
          description: 'We are committed to developing AI systems that are transparent, fair, and beneficial to society. Our ethical framework ensures responsible innovation that respects human values and promotes trust.'
        },
        partnerships: {
          title: 'Academic Partnerships',
          description: 'We maintain strong collaborative relationships with Democritus University, CERTH, and private companies, providing access to scientific networks, laboratory facilities, and expertise for comprehensive project development and implementation.'
        }
      },
      cta: {
        title: 'Ready to join our mission?',
        description: 'Be part of a team that\'s shaping the future of artificial intelligence. Explore career opportunities and partnerships with AI4.',
        joinTeam: 'Join Our Team',
        partnerWithUs: 'Partner With Us'
      }
    };
  };

  const content = getContent();
  
  return (
    <PageContainer>
      <Helmet>
        <title>{content.title} - AI4 Advanced Solutions</title>
        <meta name="description" content={language === 'el' ? "Μάθετε για την αποστολή, το όραμα και την ηγετική ομάδα της AI4. Ανακαλύψτε πώς προωθούμε την τεχνητή νοημοσύνη μέσω έρευνας, καινοτομίας και στρατηγικών συνεργασιών σε όλη την Ευρώπη." : "Learn about AI4's mission, vision, and leadership team. Discover how we're advancing artificial intelligence through research, innovation, and strategic partnerships across Europe."} />
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
            <span>{content.breadcrumb.about}</span>
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
            <h2>{content.mission.title}</h2>
            <p>
              {content.mission.description1}
            </p>
            <p>
              {content.mission.description2}
            </p>
          </motion.div>
          
          <motion.div 
            className="image-content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="/images/team-collaboration.jpg" alt="AI4 Team Collaboration" />
          </motion.div>
        </div>
      </ContentSection>

      <ValuesSection>
        <div className="left-header">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {content.values.title}
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {content.values.description}
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
              <img src="https://completewellbeing.com/wp-content/uploads/2014/01/road-to-excellence.jpg" alt="Innovation Excellence" />
            </div>
            <div className="column-content">
              <h3>{content.values.research.title}</h3>
              <p>{content.values.research.description}</p>
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
              <img src="/images/ethical-ai.jpg" alt="Ethical AI" />
            </div>
            <div className="column-content">
              <h3>{content.values.ethical.title}</h3>
              <p>{content.values.ethical.description}</p>
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
              <img src="/images/team-collaboration.jpg" alt="Collaborative Partnership" />
            </div>
            <div className="column-content">
              <h3>{content.values.partnerships.title}</h3>
              <p>{content.values.partnerships.description}</p>
            </div>
          </motion.div>
        </ThreeColumnSection>
      </ValuesSection>

      <AboutTeam />

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
            <button className="primary" onClick={() => navigate('/contact')}>{content.cta.joinTeam}</button>
            <button className="secondary" onClick={() => navigate('/contact')}>{content.cta.partnerWithUs}</button>
          </motion.div>
        </div>
      </CTASection>

      <ComprehensiveFooter />
    </PageContainer>
  );
};

export default AboutPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '../hooks/useTranslation';
import IndustrySolutions from '../components/IndustrySolutions';
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

const ServicesPage = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  const getContent = () => {
    if (language === 'el') {
      return {
        title: 'Υπηρεσίες',
        subtitle: 'Η AI4 παρέχει ολοκληρωμένες λύσεις ΤΝ σε πολλαπλές βιομηχανίες με προηγμένες τεχνολογίες.',
        breadcrumb: {
          home: 'Αρχική',
          services: 'Υπηρεσίες'
        },
        aiSolutions: {
          title: 'Λύσεις ΤΝ και ψηφιακός μετασχηματισμός',
          description1: 'Η AI4 παρέχει ολοκληρωμένες λύσεις ΤΝ σε πολλαπλές βιομηχανίες, αξιοποιώντας τη βαθιά εμπειρία μας στη μηχανική μάθηση, αναλυτικά δεδομένων και έξυπνα συστήματα για να οδηγήσει την καινοτομία και την αποδοτικότητα. Οι λύσεις μας είναι σχεδιασμένες να αντιμετωπίζουν τις μοναδικές προκλήσεις κάθε τομέα, από τη γεωργία και την υγειονομική περίθαλψη έως την ενέργεια και την εκπαίδευση.',
          description2: 'Συνδυάζουμε προηγμένη τεχνολογία με πρακτικές επιχειρηματικές ιδέες για να βοηθήσουμε τους οργανισμούς να μετασχηματίσουν τις λειτουργίες τους, να βελτιστοποιήσουν τις διαδικασίες και να αξιοποιήσουν νέες ευκαιρίες μέσω της τεχνητής νοημοσύνης.'
        },
        capabilities: {
          title: 'Οι δυνατότητές μας',
          description: 'Οι δυνατότητές μας συνδυάζουν αυτοματισμό με ΤΝ, μηχανική ποιότητας και ψηφιακή διασφάλιση.',
          analytics: {
            title: 'Προηγμένα Αναλυτικά',
            description: 'Μετασχηματίστε τα δεδομένα σας σε ενεργήσιμες ιδέες με τις προηγμένες αναλυτικές μας λύσεις. Βοηθάμε τους οργανισμούς να αξιοποιήσουν μεγάλα δεδομένα, προγνωστική μοντελοποίηση και αναλυτικά πραγματικού χρόνου για τεκμηριωμένες αποφάσεις και επιχειρηματική ανάπτυξη.'
          },
          implementation: {
            title: 'Υλοποίηση ΤΝ',
            description: 'Ενσωματώστε απρόσκοπτα την τεχνητή νοημοσύνη στις υπάρχουσες ροές εργασίας σας. Οι υπηρεσίες υλοποίησης ΤΝ μας καλύπτουν την ανάπτυξη μοντέλων μηχανικής μάθησης, συστήματα αυτοματισμού και έξυπνη βελτιστοποίηση διαδικασιών σε διάφορες βιομηχανίες.'
          },
          transformation: {
            title: 'Ψηφιακός Μετασχηματισμός',
            description: 'Πλήρεις υπηρεσίες ψηφιακού μετασχηματισμού για τον εκσυγχρονισμό των επιχειρηματικών σας λειτουργιών. Παρέχουμε περιεκτική συμβουλευτική, υλοποίηση τεχνολογίας και διαχείριση αλλαγών για να σας βοηθήσουμε να ευδοκιμήσετε στην ψηφιακή εποχή.'
          }
        },
        cta: {
          title: 'Έτοιμοι να μετασχηματίσετε την επιχείρησή σας με ΤΝ;',
          description: 'Ενωθείτε με κορυφαίους οργανισμούς που έχουν ήδη μετασχηματίσει τις λειτουργίες τους με τις λύσεις ΤΝ μας. Ας συζητήσουμε πώς μπορούμε να σας βοηθήσουμε να επιτύχετε τους στόχους σας.',
          startButton: 'Ξεκινήστε το Ταξίδι σας στην ΤΝ',
          consultationButton: 'Προγραμματίστε Συμβουλευτική'
        }
      };
    }
    return {
      title: 'Services',
      subtitle: 'AI4 delivers comprehensive AI solutions across multiple industries with cutting-edge technologies.',
      breadcrumb: {
        home: 'Home',
        services: 'Services'
      },
      aiSolutions: {
        title: 'AI solutions and digital transformation',
        description1: 'AI4 delivers comprehensive AI solutions across multiple industries, leveraging our deep expertise in machine learning, data analytics, and intelligent systems to drive innovation and efficiency. Our solutions are designed to meet the unique challenges of each sector, from agriculture and healthcare to energy and education.',
        description2: 'We combine cutting-edge technology with practical business insights to help organizations transform their operations, optimize processes, and unlock new opportunities through artificial intelligence.'
      },
      capabilities: {
        title: 'Our capabilities',
        description: 'Our capabilities combine AI-powered automation, quality engineering, and digital assurance.',
        analytics: {
          title: 'Advanced Analytics',
          description: 'Transform your data into actionable insights with our advanced analytics solutions. We help organizations leverage big data, predictive modeling, and real-time analytics to make informed decisions and drive business growth.'
        },
        implementation: {
          title: 'AI Implementation',
          description: 'Seamlessly integrate artificial intelligence into your existing workflows. Our AI implementation services cover machine learning model deployment, automation systems, and intelligent process optimization across various industries.'
        },
        transformation: {
          title: 'Digital Transformation',
          description: 'Complete digital transformation services to modernize your business operations. We provide comprehensive consulting, technology implementation, and change management to help you thrive in the digital age.'
        }
      },
      cta: {
        title: 'Ready to transform your business with AI?',
        description: 'Join leading organizations who have already transformed their operations with our AI solutions. Let\'s discuss how we can help you achieve your goals.',
        startButton: 'Start Your AI Journey',
        consultationButton: 'Schedule a Consultation'
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
            <span>{content.breadcrumb.services}</span>
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
            <h2>{content.aiSolutions.title}</h2>
            <p>
              {content.aiSolutions.description1}
            </p>
            <p>
              {content.aiSolutions.description2}
            </p>
          </motion.div>
          
          <motion.div 
            className="image-content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="https://blueorange.digital/wp-content/uploads/2024/05/Leveraging-AI-to-Drive-Digital-Transformation-Empowering-the-Future-1080x630.jpg.webp" alt="AI Solutions" />
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
            {content.capabilities.title}
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {content.capabilities.description}
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
              <img src="/images/digital-transformation.jpg" alt="Data Analytics" />
            </div>
            <div className="column-content">
              <h3>{content.capabilities.analytics.title}</h3>
              <p>{content.capabilities.analytics.description}</p>
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
              <img src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=" alt={content.capabilities.implementation.title} />
            </div>
            <div className="column-content">
              <h3>{content.capabilities.implementation.title}</h3>
              <p>{content.capabilities.implementation.description}</p>
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
              <img src="https://vastitservices.com/wp-content/uploads/2024/06/24_VAST_Blog_IT-in-Digital-Transformation.jpg" alt={content.capabilities.transformation.title} />
            </div>
            <div className="column-content">
              <h3>{content.capabilities.transformation.title}</h3>
              <p>{content.capabilities.transformation.description}</p>
            </div>
          </motion.div>
        </ThreeColumnSection>
      </CapabilitiesSection>

      <IndustrySolutions />

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
            <button className="primary" onClick={() => navigate('/contact')}>{content.cta.startButton}</button>
            <button className="secondary" onClick={() => navigate('/contact')}>{content.cta.consultationButton}</button>
          </motion.div>
        </div>
      </CTASection>

      <ComprehensiveFooter />
    </PageContainer>
  );
};

export default ServicesPage;
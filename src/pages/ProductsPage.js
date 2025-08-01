import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '../hooks/useTranslation';
import Products from '../components/Products';
import ProductSolutions from '../components/ProductSolutions';
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

const PlatformShowcaseSection = styled(SectionBase)`
  background: white;
  
  .showcase-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 3rem;
    
    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
  
  .showcase-item {
    .showcase-image {
      position: relative;
      background: white;
      border-radius: 16px;
      padding: 1rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
      overflow: hidden;
      
      img {
        width: 100%;
        height: auto;
        border-radius: 12px;
        transition: transform 0.3s ease;
        
        &:hover {
          transform: scale(1.02);
        }
      }
      
      .image-overlay {
        position: absolute;
        bottom: 1.5rem;
        left: 1.5rem;
        right: 1.5rem;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 1rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.8);
        
        .overlay-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #0073E6;
          margin-bottom: 0.5rem;
          font-family: 'Poppins', sans-serif;
        }
        
        .overlay-description {
          font-size: 0.75rem;
          color: #64748b;
          line-height: 1.4;
        }
      }
    }
    
    .showcase-content {
      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 1rem;
        font-family: 'Poppins', sans-serif;
      }
      
      p {
        font-size: 0.875rem;
        line-height: 1.6;
        color: #64748b;
        margin-bottom: 1.5rem;
      }
      
      .feature-list {
        margin-bottom: 2rem;
        
        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
          font-size: 0.8rem;
          color: #475569;
          
          &::before {
            content: '✓';
            color: #0073E6;
            font-weight: bold;
            margin-right: 0.75rem;
            width: 16px;
            height: 16px;
            background: #e0f2fe;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
          }
        }
      }
      
      .cta-button {
        background: linear-gradient(135deg, #0073E6, #00005C);
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 115, 230, 0.3);
        }
      }
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

const ProductsPage = () => {
  const navigate = useNavigate();
  const { language } = useTranslation();

  const getContent = () => {
    if (language === 'el') {
      return {
        title: 'Προϊόντα',
        subtitle: 'Καινοτόμες λύσεις ΤΝ που μεταμορφώνουν τις βιομηχανίες και ενισχύουν το ανθρώπινο δυναμικό μέσω προηγμένης τεχνολογίας.',
        breadcrumb: {
          home: 'Αρχική',
          products: 'Προϊόντα'
        },
        content: {
          title: 'Ηγετική ανάπτυξη και καινοτομία προϊόντων ΤΝ',
          description1: 'Η AI4 αναπτύσσει προηγμένα προϊόντα τεχνητής νοημοσύνης που λύνουν προκλήσεις του πραγματικού κόσμου σε πολλαπλές βιομηχανίες. Οι λύσεις μας συνδυάζουν προηγμένη μηχανική μάθηση, επεξεργασία φυσικής γλώσσας και υπολογιστική όραση για να παρέχουν άνευ προηγουμένου αξία και αποδοτικότητα.',
          description2: 'Εστιάζουμε στη δημιουργία διαισθητικών, επεκτάσιμων προϊόντων ΤΝ που εμπιστεύονται τους οργανισμούς να μεταμορφώσουν τις λειτουργίες τους, να βελτιστοποιήσουν τις διαδικασίες και να ξεκλειδώσουν νέες ευκαιρίες μέσω έξυπνου αυτοματισμού και ιδεών βασισμένων σε δεδομένα.'
        },
        approach: {
          title: 'Η προσέγγισή μας στα προϊόντα',
          description: 'Τα προϊόντα μας συνδυάζουν προηγμένη τεχνολογία ΤΝ με σχεδιασμό επικεντρωμένο στον χρήστη και επεκτασιμότητα επιχειρηματικού επιπέδου.',
          userCentered: {
            title: 'Σχεδιασμός Επικεντρωμένος στον Χρήστη',
            description: 'Διαισθητικές διεπαφές και απρόσκοπτες εμπειρίες χρήστη που καθιστούν την προηγμένη τεχνολογία ΤΝ προσβάσιμη σε χρήστες όλων των τεχνικών υποβάθρων. Δίνουμε προτεραιότητα στη χρηστικότητα και την υιοθέτηση από τους χρήστες σε κάθε προϊόν που δημιουργούμε.'
          },
          scalable: {
            title: 'Επεκτάσιμη Αρχιτεκτονική',
            description: 'Λύσεις native cloud που είναι κατασκευασμένες για να χειρίζονται επιχειρηματικά φορτία εργασίας και να επεκτείνονται με τις ανάγκες της επιχείρησής σας. Τα προϊόντα μας είναι σχεδιασμένα για αξιοπιστία, απόδοση και απρόσκοπτη ενσωμάτωση με υπάρχοντα συστήματα.'
          },
          innovation: {
            title: 'Συνεχής Καινοτομία',
            description: 'Τακτικές ενημερώσεις και βελτιώσεις χαρακτηριστικών βασισμένες στα σχόλια των χρηστών και τις αναδυόμενες τεχνολογίες ΤΝ. Διατηρούμε έναν ταχύ κύκλο ανάπτυξης για να εξασφαλίσουμε ότι τα προϊόντα μας παραμένουν στην πρώτη γραμμή της καινοτομίας.'
          }
        },
        cta: {
          title: 'Έτοιμοι να μεταμορφώσετε την επιχείρησή σας με τα προϊόντα ΤΝ μας;',
          description: 'Ενωθείτε με χιλιάδες οργανισμούς που ήδη αξιοποιούν τα προϊόντα ΤΝ μας για να οδηγήσουν την καινοτομία, να βελτιώσουν την αποδοτικότητα και να επιτύχουν άνευ προηγουμένου αποτελέσματα.',
          exploreButton: 'Εξερευνήστε τα Προϊόντα μας',
          demoButton: 'Προγραμματίστε Επίδειξη'
        }
      };
    }
    return {
      title: 'Products',
      subtitle: 'Innovative AI solutions that transform industries and enhance human potential through cutting-edge technology.',
      breadcrumb: {
        home: 'Home',
        products: 'Products'
      },
      content: {
        title: 'Leading AI product development and innovation',
        description1: 'AI4 develops cutting-edge artificial intelligence products that solve real-world challenges across multiple industries. Our solutions combine advanced machine learning, natural language processing, and computer vision to deliver unprecedented value and efficiency.',
        description2: 'We focus on creating intuitive, scalable AI products that empower organizations to transform their operations, optimize processes, and unlock new opportunities through intelligent automation and data-driven insights.'
      },
      approach: {
        title: 'Our product approach',
        description: 'Our products combine cutting-edge AI technology with user-centered design and enterprise-grade scalability.',
        userCentered: {
          title: 'User-Centered Design',
          description: 'Intuitive interfaces and seamless user experiences that make advanced AI technology accessible to users of all technical backgrounds. We prioritize usability and user adoption in every product we create.'
        },
        scalable: {
          title: 'Scalable Architecture',
          description: 'Cloud-native solutions built to handle enterprise workloads and scale with your business needs. Our products are designed for reliability, performance, and seamless integration with existing systems.'
        },
        innovation: {
          title: 'Continuous Innovation',
          description: 'Regular updates and feature enhancements based on user feedback and emerging AI technologies. We maintain a rapid development cycle to ensure our products stay at the forefront of innovation.'
        }
      },
      cta: {
        title: 'Ready to transform your business with our AI products?',
        description: 'Join thousands of organizations already leveraging our AI products to drive innovation, improve efficiency, and achieve unprecedented results.',
        exploreButton: 'Explore Our Products',
        demoButton: 'Schedule a Demo'
      }
    };
  };

  const content = getContent();
  
  return (
    <PageContainer>
      <Helmet>
        <title>{content.title} - AI4 Advanced Solutions</title>
        <meta name="description" content={language === 'el' ? "Ανακαλύψτε τα καινοτόμα προϊόντα και λύσεις ΤΝ της AI4 που έχουν σχεδιαστεί για να μεταμορφώσουν τις βιομηχανίες και να ενισχύσουν το ανθρώπινο δυναμικό μέσω της τεχνητής νοημοσύνης." : "Discover AI4's innovative AI products and solutions designed to transform industries and enhance human potential through artificial intelligence."} />
        <meta name="keywords" content={language === 'el' ? "προϊόντα ΤΝ, λύσεις τεχνητής νοημοσύνης, πλατφόρμες μηχανικής μάθησης, εργαλεία ΤΝ, εκπαιδευτική τεχνολογία" : "AI products, artificial intelligence solutions, machine learning platforms, AI tools, educational technology"} />
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
            <span>{content.breadcrumb.products}</span>
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
            <h2>{content.content.title}</h2>
            <p>
              {content.content.description1}
            </p>
            <p>
              {content.content.description2}
            </p>
          </motion.div>
          
          <motion.div 
            className="image-content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="https://www.ntu.edu.sg/images/innovationlibraries/default-album/poc-grant.jpg?sfvrsn=9494fe8c_1" alt="AI Products" />
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
            {content.approach.title}
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {content.approach.description}
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
              <img src="https://agentestudio.com/uploads/post/image/97/main_user-centered-design.jpg" alt="User-Centered Design" />
            </div>
            <div className="column-content">
              <h3>{content.approach.userCentered.title}</h3>
              <p>{content.approach.userCentered.description}</p>
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
              <img src="https://i.ytimg.com/vi/_6ps3AOQn00/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCd0CoKIqOo-8aUBUUqhqvc321LVg" alt="Scalable Architecture" />
            </div>
            <div className="column-content">
              <h3>{content.approach.scalable.title}</h3>
              <p>{content.approach.scalable.description}</p>
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
              <img src="https://images.ctfassets.net/76f8cs5bg9si/GqCa7Pg3RuuKAqOZ2pHHA/53e62f34531645d869ee76d73face658/The-Power-of-Data-Driven-Innovaiton.png?w=822&h=580&q=90&fm=png" alt="Continuous Innovation" />
            </div>
            <div className="column-content">
              <h3>{content.approach.innovation.title}</h3>
              <p>{content.approach.innovation.description}</p>
            </div>
          </motion.div>
        </ThreeColumnSection>
      </CapabilitiesSection>

      <Products />


      <ProductSolutions />

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
            <button className="primary" onClick={() => navigate('/products')}>{content.cta.exploreButton}</button>
            <button className="secondary" onClick={() => navigate('/contact')}>{content.cta.demoButton}</button>
          </motion.div>
        </div>
      </CTASection>

      <ComprehensiveFooter />
    </PageContainer>
  );
};

export default ProductsPage;
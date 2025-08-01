import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '../../hooks/useTranslation';

const SectionContainer = styled.section`
  background: #2d3748;
  padding: 4rem 0;
  scroll-margin-top: 80px;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 1400px) {
    margin: 0 1rem;
    padding: 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin-bottom: 3rem;
  opacity: 0;
  animation: slideInFromBottom 0.8s ease-out 0.3s forwards, gradientShift 3s ease-in-out infinite;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ResearchCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  .category {
    color: #0073E6;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 1rem;
    color: #1a1a1a;
    font-family: 'Poppins', sans-serif;
    min-height: 3.2rem;
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #525252;
    flex: 1;
  }
  
  .cta-link {
    color: #0073E6;
    font-weight: 600;
    text-decoration: none;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: #00005C;
      gap: 0.75rem;
    }
    
    &::after {
      content: '→';
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: translateX(3px);
    }
  }
`;

const ExploreButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }
  
  &::after {
    content: '→';
    transition: transform 0.2s ease;
  }
  
  &:hover::after {
    transform: translateX(3px);
  }
`;

const ClientSuccess = () => {
  const navigate = useNavigate();
  const { language } = useTranslation();
  
  const getResearchProjects = () => {
    if (language === 'el') {
      return [
        {
          id: 1,
          category: 'Μηχανική Μάθηση & Βαθιά Μάθηση',
          title: 'Προηγμένη Έρευνα Νευρωνικών Δικτύων',
          description: 'Ανάπτυξη προηγμένων αλγορίθμων ML και DL για υπολογιστική όραση και επεξεργασία φυσικής γλώσσας. Η έρευνά μας εστιάζει στη δημιουργία πιο αποδοτικών και επεξηγήσιμων συστημάτων ΤΝ.',
          cta: 'Εξερευνήστε την Έρευνα',
          bgImage: '/images/neural-network-research.jpg'
        },
        {
          id: 2,
          category: 'Αναλυτικά Δεδομένων & Εξόρυξη',
          title: 'Πλαίσιο Προγνωστικής Ανάλυσης',
          description: 'Προηγμένες τεχνικές εξόρυξης δεδομένων για χρήσιμες ιδέες σε πολλούς τομείς. Το αναλυτικό μας πλαίσιο χρησιμοποιεί εξελιγμένους αλγορίθμους για την αποκάλυψη προτύπων.',
          cta: 'Μάθετε Περισσότερα',
          bgImage: '/images/data-analytics-dashboard.jpg'
        },
        {
          id: 3,
          category: 'Επεξηγησιμότητα ΤΝ',
          title: 'Διαφανή Συστήματα ΤΝ',
          description: 'Έρευνα στην επεξηγησιμότητα και διαφάνεια της ΤΝ, διασφαλίζοντας ότι οι αποφάσεις που βασίζονται στην ΤΝ είναι κατανοητές και αξιόπιστες για κρίσιμες εφαρμογές.',
          cta: 'Ανακαλύψτε Περισσότερα',
          bgImage: '/images/transparent-ai-systems.jpg'
        }
      ];
    }
    return [
      {
        id: 1,
        category: 'Machine Learning & Deep Learning',
        title: 'Advanced Neural Network Research',
        description: 'Developing cutting-edge ML and DL algorithms for computer vision and natural language processing. Our research focuses on creating more efficient and explainable AI systems.',
        cta: 'Explore Research',
        bgImage: '/images/neural-network-research.jpg'
      },
      {
        id: 2,
        category: 'Data Analytics & Mining',
        title: 'Predictive Analytics Framework',
        description: 'Advanced data mining techniques for actionable insights across multiple sectors. Our analytics framework employs sophisticated algorithms to uncover patterns.',
        cta: 'Learn More',
        bgImage: '/images/data-analytics-dashboard.jpg'
      },
      {
        id: 3,
        category: 'AI Explainability',
        title: 'Transparent AI Systems',
        description: 'Research into AI explainability and transparency, ensuring AI-driven decisions are understandable and trustworthy for critical applications.',
        cta: 'Discover More',
        bgImage: '/images/transparent-ai-systems.jpg'
      }
    ];
  };

  const researchProjects = getResearchProjects();

  return (
    <SectionContainer id="our-research">
      <ContentWrapper>
        <SectionTitle>{language === 'el' ? 'Η Έρευνά μας' : 'Our Research'}</SectionTitle>
        
        <CardsGrid>
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ResearchCard>
                <CardImage bgImage={project.bgImage} />
                <CardContent>
                  <div className="category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button onClick={() => navigate('/research')} className="cta-link" style={{border: 'none', background: 'none', cursor: 'pointer'}}>{project.cta}</button>
                </CardContent>
              </ResearchCard>
            </motion.div>
          ))}
        </CardsGrid>
        
        <ExploreButton onClick={() => navigate('/research')}>
          {language === 'el' ? 'Εξερευνήστε τα Ερευνητικά μας Προγράμματα' : 'Explore Our Research Projects'}
        </ExploreButton>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ClientSuccess;
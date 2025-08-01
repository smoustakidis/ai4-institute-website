import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '../../hooks/useTranslation';

const SectionContainer = styled.section`
  background: #1a202c;
  padding: 4rem 0;
  color: white;
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
  margin-bottom: 3rem;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: #ffffff;
  opacity: 0;
  animation: slideInFromBottom 0.8s ease-out 0.3s forwards, gradientShift 3s ease-in-out infinite;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CardGrid = styled.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.translateX}px);
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  min-width: 230px;
  max-width: 230px;
  flex-shrink: 0;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }
  
  .content {
    padding: 1rem;
    
    .category {
      color: #0073E6;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    h3 {
      color: #1a1a1a;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.3;
      margin: 0 0 0.5rem 0;
      font-family: 'Poppins', sans-serif;
    }
    
    .description {
      color: #525252;
      font-size: 0.8rem;
      line-height: 1.4;
      margin: 0;
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: #0073E6;
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  &.prev {
    left: -25px;
  }
  
  &.next {
    right: -25px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255,255,255,0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
`;

const DiveDeeper = styled.button`
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
  margin-top: 2rem;
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

const IdeasSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const navigate = useNavigate();
  const { language } = useTranslation();

  const getCards = () => {
    if (language === 'el') {
      return [
        {
          id: 1,
          category: 'Γεωργία',
          title: 'Έξυπνες Λύσεις Γεωργίας',
          description: 'Παρακολούθηση καλλιεργειών, ανίχνευση παρασίτων και πρόβλεψη απόδοσης με ΤΝ χρησιμοποιώντας έξυπνους αισθητήρες και ανάλυση δεδομένων.',
          image: '/images/smart-agriculture.jpg'
        },
        {
          id: 2,
          category: 'Υγειονομική Περίθαλψη',
          title: 'Συστήματα ΤΝ για την Υγεία',
          description: 'Εξατομικευμένη ιατρική, συστήματα παρακολούθησης ασθενών και διαγνωστικά εργαλεία με ML, DL και υπολογιστική όραση.',
          image: '/images/healthcare-ai.jpg'
        },
        {
          id: 3,
          category: 'Περιβάλλον',
          title: 'Περιβαλλοντική Παρακολούθηση',
          description: 'Διαχείριση υδάτων, έλεγχος ατμοσφαιρικής ρύπανσης, περιβαλλοντική παρακολούθηση και μετεωρολογικές προβλέψεις με ΤΝ.',
          image: '/images/environment-monitoring.jpg'
        },
        {
          id: 4,
          category: 'Εκπαίδευση',
          title: 'Προσαρμοστικές Πλατφόρμες Μάθησης',
          description: 'Εξατομικευμένη παροχή περιεχομένου βασισμένη στην απόδοση του μαθητή, χρησιμοποιώντας NLP και προσαρμοστικές διαδρομές μάθησης.',
          image: '/images/adaptive-learning.jpg'
        },
        {
          id: 5,
          category: 'Αθλητισμός',
          title: 'Αναλυτικά Αθλητικής Απόδοσης',
          description: 'ΤΝ για παρακολούθηση αθλητών, βελτιστοποίηση απόδοσης και εξατομικευμένη προπόνηση μέσω ανάλυσης κίνησης και προγνωστικής ανάλυσης.',
          image: '/images/sports-performance.jpg'
        },
        {
          id: 6,
          category: 'Ενέργεια',
          title: 'Έξυπνες Ενεργειακές Λύσεις',
          description: 'Βελτιστοποίηση ανανεώσιμων πηγών ενέργειας, διαχείριση έξυπνου δικτύου και πρόβλεψη ενεργειακής ζήτησης μέσω προγνωστικής μοντελοποίησης.',
          image: '/images/smart-energy.jpg'
        }
      ];
    }
    return [
      {
        id: 1,
        category: 'Agriculture',
        title: 'Smart Agriculture Solutions',
        description: 'AI-driven crop monitoring, pest detection, and yield prediction using smart sensors and data analytics.',
        image: '/images/smart-agriculture.jpg'
      },
      {
        id: 2,
        category: 'Healthcare',
        title: 'Healthcare AI Systems',
        description: 'Personalized medicine, patient monitoring systems, and diagnostic tools employing ML, DL, and computer vision.',
        image: '/images/healthcare-ai.jpg'
      },
      {
        id: 3,
        category: 'Environment',
        title: 'Environmental Monitoring',
        description: 'AI-enhanced water management, air pollution control, environmental monitoring, and meteorological predictions.',
        image: '/images/environment-monitoring.jpg'
      },
      {
        id: 4,
        category: 'Education',
        title: 'Adaptive Learning Platforms',
        description: 'Customized content delivery based on student performance, using NLP and adaptive learning paths.',
        image: '/images/adaptive-learning.jpg'
      },
      {
        id: 5,
        category: 'Sports',
        title: 'Sports Performance Analytics',
        description: 'AI for player tracking, performance optimization, and personalized training through motion analysis and predictive analytics.',
        image: '/images/sports-performance.jpg'
      },
      {
        id: 6,
        category: 'Energy',
        title: 'Smart Energy Solutions',
        description: 'Renewable energy optimization, smart grid management, and energy demand forecasting through predictive modeling.',
        image: '/images/smart-energy.jpg'
      }
    ];
  };

  const cards = getCards();

  const cardWidth = 230 + 16; // card width + gap
  const maxTranslate = -(cards.length - 4) * cardWidth;

  const nextSlide = () => {
    if (translateX > maxTranslate) {
      const newTranslate = Math.max(translateX - cardWidth, maxTranslate);
      setTranslateX(newTranslate);
      setCurrentIndex(Math.abs(newTranslate / cardWidth));
    }
  };

  const prevSlide = () => {
    if (translateX < 0) {
      const newTranslate = Math.min(translateX + cardWidth, 0);
      setTranslateX(newTranslate);
      setCurrentIndex(Math.abs(newTranslate / cardWidth));
    }
  };

  const goToSlide = (index) => {
    const newTranslate = -index * cardWidth;
    setTranslateX(Math.max(newTranslate, maxTranslate));
    setCurrentIndex(index);
  };

  return (
    <SectionContainer id="our-services">
      <ContentWrapper>
        <SectionTitle>{language === 'el' ? 'Οι Υπηρεσίες μας' : 'Our Services'}</SectionTitle>
        
        <CarouselContainer>
          <CardGrid translateX={translateX}>
            {cards.map((card) => (
              <Card key={card.id}>
                <img src={card.image} alt={card.title} />
                <div className="content">
                  <div className="category">{card.category}</div>
                  <h3>{card.title}</h3>
                  <p className="description">{card.description}</p>
                </div>
              </Card>
            ))}
          </CardGrid>
          
          <NavButton 
            className="prev" 
            onClick={prevSlide}
            disabled={translateX >= 0}
          >
            ‹
          </NavButton>
          
          <NavButton 
            className="next" 
            onClick={nextSlide}
            disabled={translateX <= maxTranslate}
          >
            ›
          </NavButton>
        </CarouselContainer>
        
        <Dots>
          {[0, 1, 2].map((index) => (
            <Dot
              key={index}
              active={currentIndex >= index && currentIndex < index + 4}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Dots>
        
        <DiveDeeper onClick={() => navigate('/services')}>
          {language === 'el' ? 'Εξερευνήστε τις Υπηρεσίες μας' : 'Explore Our Services'}
        </DiveDeeper>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default IdeasSection;
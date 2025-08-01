import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from '../../hooks/useTranslation';

const SectionWrapper = styled.div`
  width: 100%;
  background: #1a202c;
  padding: 0;
`;

const SectionBackgroundImage = styled.div`
  display: none;
`;

const SectionContainer = styled.section`
  padding: 6rem 2rem;
  scroll-margin-top: 80px;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 3;
  background: #1a202c;
  
  @media (max-width: 1400px) {
    margin: 0 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  padding-right: 2rem;
  
  @media (max-width: 968px) {
    padding-right: 0;
  }
  
  h2 {
    font-family: 'Inter', sans-serif;
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    margin-bottom: 2.5rem;
    line-height: 1.15;
    letter-spacing: -0.025em;
    
    color: #ffffff;
    opacity: 0;
    animation: slideInFromLeft 0.8s ease-out 0.2s forwards, gradientShift 3s ease-in-out infinite;
    
    &:hover {
      transform: translateY(-2px);
      transition: transform 0.3s ease;
    }
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    font-weight: ${props => props.theme.fontWeights.normal};
    letter-spacing: -0.01em;
    transition: color 0.3s ease;
    opacity: 0;
    animation: slideInFromLeft 0.8s ease-out 0.4s forwards;
    
    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const SliderContainer = styled.div`
  position: relative;
  background: #1f2937;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16/9;
  max-width: 500px;
  margin-left: 0;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #10b981);
    border-radius: 16px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 968px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const SlideWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SlideImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  z-index: 2;
`;

const SlideTitle = styled(motion.h3)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: white;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.025em;
`;

const SlideDescription = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.95rem, 1.5vw, 1.125rem);
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  max-width: 400px;
`;

const SliderControls = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 3;
`;

const SliderDot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
    transform: scale(1.2);
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transition: width 0.1s linear;
  z-index: 3;
`;

const FutureSection = () => {
  const { language } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideInterval = 6000; // 6 seconds per slide for better video-like pacing

  const getContent = () => {
    if (language === 'el') {
      return {
        title: 'Μετασχηματίζοντας το Αύριο με Έξυπνες Λύσεις',
        description1: 'Με έδρα στη Ξυλαγανή Ροδόπης, Θράκη, Ελλάδα, η AI4 ειδικεύεται σε λύσεις που βασίζονται στην ΤΝ και μετασχηματίζουν βιομηχανίες όπως η υγειονομική περίθαλψη, η γεωργία και η εφοδιαστική μέσω καινοτόμων αναλυτικών δεδομένων και προσαρμοσμένων τεχνολογικών ενσωματώσεων.',
        description2: 'Συνδυάζουμε προηγμένη τεχνητή νοημοσύνη με βαθιά εξειδίκευση για να παρέχουμε κλιμακώσιμες, αποτελεσματικές λύσεις. Η περιεκτική εμπειρία μας καλύπτει μηχανική μάθηση, βαθιά μάθηση, υπολογιστική όραση, επεξεργασία φυσικής γλώσσας και προγνωστική ανάλυση με την επεξηγησιμότητα της ΤΝ και τις ηθικές παραμέτρους στον πυρήνα όλων όσων κάνουμε.'
      };
    }
    return {
      title: 'Transforming Tomorrow with Intelligent Solutions',
      description1: 'Based in Xylagani, Rhodope, Thrace, Greece, AI4 specializes in AI-driven solutions that transform industries including healthcare, agriculture, and logistics through innovative data analytics and custom technological integrations.',
      description2: 'We combine cutting-edge artificial intelligence with deep domain expertise to deliver scalable, results-oriented solutions. Our comprehensive expertise spans machine learning, deep learning, computer vision, natural language processing, and predictive analytics with AI explainability and ethical considerations at the core of everything we do.'
    };
  };

  const getSliderData = () => {
    if (language === 'el') {
      return [
        {
          image: '/images/neural-network-research.jpg',
          title: 'Καινοτόμα Νευρωνικά Δίκτυα',
          description: 'Πρωτοποριακή έρευνα σε αρχιτεκτονικές βαθιάς μάθησης και νευρομορφικά συστήματα'
        },
        {
          image: '/images/computer-vision.jpeg',
          title: 'Υπολογιστική Όραση Επόμενης Γενιάς',
          description: 'Προηγμένη ανάλυση εικόνας και video για βιομηχανικές και ιατρικές εφαρμογές'
        },
        {
          image: '/images/predictive-analytics.jpg',
          title: 'Προγνωστική Ανάλυση & Μοντελοποίηση',
          description: 'Πρόβλεψη τάσεων και συμπεριφορών με προηγμένους στατιστικούς αλγορίθμους'
        },
        {
          image: '/images/nlp-healthcare.jpg',
          title: 'Επεξεργασία Φυσικής Γλώσσας στην Υγεία',
          description: 'Κατανόηση και ανάλυση ιατρικών κειμένων με τεχνικές NLP'
        },
        {
          image: '/images/ethical-ai.jpg',
          title: 'Ηθική & Επεξηγήσιμη Τεχνητή Νοημοσύνη',
          description: 'Διαφανή και υπεύθυνα συστήματα ΤΝ με ενσωματωμένες ηθικές αρχές'
        },
        {
          image: '/images/digital-transformation.jpg',
          title: 'Ψηφιακός Μετασχηματισμός',
          description: 'Ολοκληρωμένες λύσεις για τον εκσυγχρονισμό επιχειρήσεων και οργανισμών'
        }
      ];
    }
    return [
      {
        image: '/images/neural-network-research.jpg',
        title: 'Innovative Neural Networks',
        description: 'Cutting-edge research in deep learning architectures and neuromorphic systems'
      },
      {
        image: '/images/computer-vision.jpeg',
        title: 'Next-Generation Computer Vision',
        description: 'Advanced image and video analysis for industrial and medical applications'
      },
      {
        image: '/images/predictive-analytics.jpg',
        title: 'Predictive Analytics & Modeling',
        description: 'Forecasting trends and behaviors with advanced statistical algorithms'
      },
      {
        image: '/images/nlp-healthcare.jpg',
        title: 'Natural Language Processing in Healthcare',
        description: 'Understanding and analyzing medical texts with advanced NLP techniques'
      },
      {
        image: '/images/ethical-ai.jpg',
        title: 'Ethical & Explainable AI',
        description: 'Transparent and responsible AI systems with embedded ethical principles'
      },
      {
        image: '/images/digital-transformation.jpg',
        title: 'Digital Transformation',
        description: 'Comprehensive solutions for modernizing businesses and organizations'
      }
    ];
  };

  const content = getContent();
  const slides = getSliderData();

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, slideInterval);

    return () => clearInterval(timer);
  }, [slides.length, slideInterval]);

  // Progress bar animation
  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1.67; // Increment for 6-second duration (100/60 = 1.67% per 100ms)
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, [currentSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <SectionWrapper>
      <SectionBackgroundImage />
      <SectionContainer id="introducing-ai4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContentWrapper>
          <motion.div variants={itemVariants}>
            <TextContent>
              <h2>{content.title}</h2>
              <p>
                {content.description1}
              </p>
              <p>
                {content.description2}
              </p>
            </TextContent>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SliderContainer>
              <AnimatePresence mode="wait">
                <SlideWrapper
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  <SlideImage
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                  <SlideOverlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  >
                    <SlideTitle
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      {slides[currentSlide].title}
                    </SlideTitle>
                    <SlideDescription
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.9,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      {slides[currentSlide].description}
                    </SlideDescription>
                  </SlideOverlay>
                </SlideWrapper>
              </AnimatePresence>
              
              <SliderControls>
                {slides.map((_, index) => (
                  <SliderDot
                    key={index}
                    active={currentSlide === index}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </SliderControls>
              
              <ProgressBar style={{ width: `${progress}%` }} />
            </SliderContainer>
          </motion.div>
        </ContentWrapper>
      </motion.div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default FutureSection;
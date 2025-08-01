import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '../../hooks/useTranslation';

const SectionWrapper = styled.section`
  background: #1a202c;
  position: relative;
  overflow: hidden;
  scroll-margin-top: 80px;
  
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

const SectionContainer = styled.div`
  padding: 4rem 0;
  position: relative;
  z-index: 10;
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

const ProductShowcase = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ProductContent = styled.div`
  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #cbd5e1;
    margin-bottom: 1.5rem;
  }
  
  .features {
    margin: 2rem 0;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
    .icon {
      width: 20px;
      height: 20px;
      background: #0073E6;
      border-radius: 50%;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &::after {
        content: '✓';
        color: white;
        font-size: 0.75rem;
        font-weight: bold;
      }
    }
    
    span {
      color: #cbd5e1;
      font-weight: 500;
    }
  }
`;

const ProductVisual = styled.div`
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  
  .carousel-container {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    max-height: 400px;
  }
  
  .carousel-wrapper {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .carousel-slide {
    min-width: 100%;
    flex-shrink: 0;
  }
  
  .platform-image {
    width: 100%;
    height: 350px;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
    }
  }
  
  .carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    color: #0073E6;
    transition: all 0.3s ease;
    z-index: 10;
    
    &:hover {
      background: rgba(255, 255, 255, 1);
      transform: translateY(-50%) scale(1.1);
    }
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
  
  .carousel-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 1rem;
  }
  
  .carousel-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #cbd5e1;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &.active {
      background: #0073E6;
      transform: scale(1.2);
    }
  }
  
  .platform-overlay {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.8);
    
    .overlay-title {
      font-size: 1rem;
      font-weight: 600;
      color: #0073E6;
      margin-bottom: 0.75rem;
      font-family: 'Poppins', sans-serif;
    }
    
    .overlay-features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
      
      .feature-badge {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        color: #525252;
        
        .badge-icon {
          width: 6px;
          height: 6px;
          background: #0073E6;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

const CTAButton = styled.button`
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


const Products = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useTranslation();

  const getContent = () => {
    if (language === 'el') {
      return {
        title: 'Τα Προϊόντα μας',
        productTitle: 'Πλατφόρμα Εξατομικευμένης Μάθησης με Υποβοήθηση ΤΝ',
        description1: 'Ζήστε την εμπειρία της πλατφόρμας μάθησης με τεχνητή νοημοσύνη μέσω διαδραστικών διεπαφών σχεδιασμένων για βέλτιστη αφοσίωση χρηστών. Η καινοτόμος πλατφόρμα μας αξιοποιεί προηγμένους αλγορίθμους ΤΝ για τη δημιουργία προσαρμοσμένων μαθησιακών διαδρομών προσαρμοσμένων στο μαθησιακό στυλ, ρυθμό και στόχους κάθε ατόμου. Μετασχηματίστε την εκπαιδευτική σας εμπειρία με έξυπνη παροχή περιεχομένου και προσαρμοστικές αξιολογήσεις.',
        description2: 'Κατασκευασμένη με προηγμένες τεχνολογίες μηχανικής μάθησης και επεξεργασίας φυσικής γλώσσας, η περιεκτική πλατφόρμα ΤΝ μας ενσωματώνει πολλαπλές έξυπνες λύσεις συμπεριλαμβανομένων AI chatbots, προγνωστικής ανάλυσης, υπολογιστικής όρασης, νευρωνικών δικτύων, ευφυΐας IoT και αυτοματισμού διαδικασιών για να διασφαλίσει βέλτιστα μαθησιακά αποτελέσματα για μαθητές, επαγγελματίες και οργανισμούς.',
        ctaButton: 'Μάθετε Περισσότερα για την Πλατφόρμα μας'
      };
    }
    return {
      title: 'Our Products',
      productTitle: 'AI-Assisted Personalized Learning Platform',
      description1: 'Experience our AI-powered learning platform through interactive interfaces designed for optimal user engagement. Our innovative platform leverages advanced AI algorithms to create customized learning paths tailored to each individual\'s learning style, pace, and goals. Transform your educational experience with intelligent content delivery and adaptive assessments.',
      description2: 'Built with cutting-edge machine learning and natural language processing technologies, our comprehensive AI platform integrates multiple intelligent solutions including conversational AI, predictive analytics, computer vision, neural networks, IoT intelligence, and process automation to ensure optimal learning outcomes for students, professionals, and organizations.',
      ctaButton: 'Learn More About Our Platform'
    };
  };

  const getCarouselImages = () => {
    if (language === 'el') {
      return [
        {
          src: "/platform-welcome.png",
          alt: "Οθόνη Καλωσορίσματος Πλατφόρμας Μάθησης AI4",
          title: "Διαδραστική Εμπειρία Μάθησης"
        },
        {
          src: "/images/dashboard_final.png",
          alt: "Πίνακας Ελέγχου Πλατφόρμας Μάθησης AI4",
          title: "Πίνακας Αναλυτικών"
        },
        {
          src: "/images/Training Screen4.png",
          alt: "Διεπαφή Εκπαίδευσης AI4",
          title: "Διεπαφή Εκπαίδευσης"
        }
      ];
    }
    return [
      {
        src: "/platform-welcome.png",
        alt: "AI4 Learning Platform Welcome Screen",
        title: "Interactive Learning Experience"
      },
      {
        src: "/images/dashboard_final.png",
        alt: "AI4 Learning Platform Dashboard",
        title: "Analytics Dashboard"
      },
      {
        src: "/images/Training Screen4.png",
        alt: "AI4 Training Interface",
        title: "Training Interface"
      }
    ];
  };

  const content = getContent();
  const carouselImages = getCarouselImages();
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);
  
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
    <SectionWrapper id="our-products">
      <SectionContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContentWrapper>
            <motion.div variants={itemVariants}>
              <SectionTitle>{content.title}</SectionTitle>
            </motion.div>

          <ProductShowcase>
            <motion.div variants={itemVariants}>
              <ProductContent>
                <h3>{content.productTitle}</h3>
                <p>
                  {content.description1}
                </p>
                
                <p>
                  {content.description2}
                </p>
                
                <CTAButton onClick={() => navigate('/products')}>
                  {content.ctaButton}
                </CTAButton>
              </ProductContent>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProductVisual>
                <div className="carousel-container">
                  <div 
                    className="carousel-wrapper"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselImages.map((image, index) => (
                      <div key={index} className="carousel-slide">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="platform-image"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <button className="carousel-nav prev" onClick={prevSlide}>
                    &#8249;
                  </button>
                  <button className="carousel-nav next" onClick={nextSlide}>
                    &#8250;
                  </button>
                </div>
                
                <div className="carousel-dots">
                  {carouselImages.map((_, index) => (
                    <div
                      key={index}
                      className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </ProductVisual>
            </motion.div>
          </ProductShowcase>

          </ContentWrapper>
        </motion.div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default Products;
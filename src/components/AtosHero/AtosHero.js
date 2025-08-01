import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../contexts/LanguageContext';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const neuralPulse = keyframes`
  0%, 100% { 
    transform: scale(1) rotate(0deg);
    opacity: 0.3;
  }
  50% { 
    transform: scale(1.1) rotate(180deg);
    opacity: 0.6;
  }
`;

const neuralSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const nodeGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.3), 0 0 10px rgba(59, 130, 246, 0.2);
    opacity: 0.4;
  }
  50% { 
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.6), 0 0 25px rgba(59, 130, 246, 0.4);
    opacity: 0.8;
  }
`;

const connectionFlow = keyframes`
  0% { 
    stroke-dashoffset: 100;
    opacity: 0;
  }
  20% {
    opacity: 0.6;
  }
  100% { 
    stroke-dashoffset: 0;
    opacity: 0.2;
  }
`;

const backgroundShift = keyframes`
  0%, 100% { 
    background-position: 0% 50%;
  }
  50% { 
    background-position: 100% 50%;
  }
`;

const HeroWrapper = styled.div`
  position: relative;
  background: #1a202c;
  min-height: 60vh;
  color: white;
  font-family: 'Inter', sans-serif;
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

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  min-height: calc(60vh - 80px);
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  
  @media (max-width: 1400px) {
    margin: 0 1rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  padding: 3rem 3rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(60vh - 80px);
  
  @media (max-width: 1200px) {
    text-align: center;
    padding: 2rem 1rem;
    min-height: auto;
  }
  
  @media (max-width: 1400px) {
    padding: 3rem 2rem 2rem 1rem;
  }
`;

const CarouselIndicators = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
  align-items: center;
  
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const CarouselDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.2)'};
  
  &:hover {
    background: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
    border-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  animation: ${fadeInUp} 0.5s ease-out;
  color: white;
  
  .gradient-text {
    background: linear-gradient(135deg, #10b981, #8b5cf6, #06b6d4);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 3s ease-in-out infinite;
  }
`;

const HeroSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.95rem, 1.5vw, 1.125rem);
  font-weight: 400;
  color: #cbd5e1;
  line-height: 1.7;
  margin: 0 0 2.5rem 0;
  animation: ${fadeInUp} 0.5s ease-out 0.1s both;
  max-width: 90%;
  
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  animation: ${fadeInUp} 0.5s ease-out 0.2s both;
  margin-bottom: 2rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
  
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: #3b82f6;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: #cbd5e1;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid #475569;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: #475569;
    color: white;
    transform: translateY(-1px);
    border-color: #64748b;
  }
`;

const NeuralMesh = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 35%;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background: 
      radial-gradient(ellipse 400px 200px at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),
      radial-gradient(ellipse 300px 150px at 70% 80%, rgba(168, 85, 247, 0.06) 0%, transparent 60%),
      radial-gradient(ellipse 250px 300px at 20% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 60%);
    transform: rotate(-5deg);
    animation: ${neuralSpin} 40s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(
        -15deg,
        transparent,
        transparent 20px,
        rgba(59, 130, 246, 0.02) 21px,
        rgba(59, 130, 246, 0.02) 22px,
        transparent 23px,
        transparent 100px
      ),
      repeating-linear-gradient(
        75deg,
        transparent,
        transparent 30px,
        rgba(168, 85, 247, 0.015) 31px,
        rgba(168, 85, 247, 0.015) 32px,
        transparent 33px,
        transparent 120px
      );
    opacity: 0.7;
  }
  
  @media (max-width: 1200px) {
    right: 0;
    opacity: 0.4;
    
    &::before {
      width: 120%;
      height: 120%;
      top: -10%;
      left: -10%;
    }
  }
`;

const NeuralConnections = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 4;
  opacity: 0.6;
  
  path {
    animation: ${connectionFlow} 4s ease-in-out infinite;
    
    &:nth-child(2) {
      animation-delay: -2s;
      animation-duration: 6s;
    }
  }
  
  @media (max-width: 1200px) {
    display: none;
  }
`;

const NeuralNodes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 35%;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
  
  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: 30%;
    width: 8px;
    height: 8px;
    background: rgba(59, 130, 246, 0.8);
    border-radius: 50%;
    animation: ${nodeGlow} 2s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 60%;
    right: 20%;
    width: 6px;
    height: 6px;
    background: rgba(168, 85, 247, 0.8);
    border-radius: 50%;
    animation: ${nodeGlow} 2.5s ease-in-out infinite;
    animation-delay: -0.5s;
    box-shadow: 0 0 8px rgba(168, 85, 247, 0.5);
  }
  
  @media (max-width: 1200px) {
    right: 0;
  }
`;




const NewsSidebar = styled.aside`
  background: rgba(26, 32, 44, 0.7);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  padding: 2.5rem 2rem;
  z-index: 10;
  position: relative;
  min-height: calc(70vh - 80px);
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.015) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }
  
  @media (max-width: 1200px) {
    min-height: auto;
    padding: 2rem 1rem;
    border: none;
  }
`;

const NewsHeaderTop = styled.div`
  margin-bottom: 2rem;
  flex-shrink: 0;
  
  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 1.375rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 1rem 0;
    line-height: 1.3;
  }
`;

const NewsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const NewsScroller = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  padding-top: 35px;
  padding-bottom: 35px;
`;

const NewsArrow = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: 300;
  transition: all 0.3s ease;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  
  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transform: translateX(-50%) translateY(-1px);
  }
  
  &:active {
    transform: translateX(-50%);
  }
  
  &:disabled {
    opacity: 0.1;
    cursor: not-allowed;
    
    &:hover {
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.4);
    }
  }
  
  &.up {
    top: 15px;
  }
  
  &.down {
    bottom: 15px;
  }
`;

const ViewAllButton = styled(motion.button)`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
    background: linear-gradient(135deg, #2563eb, #1e40af);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const NewsItemStyled = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 120px;
  max-height: 120px;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  
  &:hover {
    transform: translateX(4px);
    
    .date {
      color: #60a5fa;
    }
    
    .headline {
      color: white;
    }
  }
  
  .date {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 0.75rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.05em;
    flex-shrink: 0;
  }
  
  .headline {
    font-size: 0.95rem;
    font-weight: 400;
    color: #cbd5e1;
    line-height: 1.5;
    font-family: 'Inter', sans-serif;
    transition: color 0.2s ease-in-out;
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;


const NavigationWrapper = styled.div`
  width: 100%;
  background: #1c2332;
  padding: 0;
  margin-top: 0;
`;

const NavigationTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #1c2332;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1400px) {
    margin: 0 1rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
  }
`;

const Tab = styled.div`
  padding: 1.5rem 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    h3 {
      color: #0073E6;
    }
  }
  
  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    transition: color 0.3s ease;
    font-family: 'Inter', sans-serif;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;


const AtosHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language } = useLanguage();

  const getSlides = () => {
    const englishSlides = [
      {
        id: 1,
        title: 'AI4: Pioneering Artificial Intelligence Research',
        description: 'Driving innovation in AI from Thrace, Greece. Our multidisciplinary team combines expertise in machine learning, computer vision, and natural language processing to develop intelligent solutions that transform industries.',
        cta: 'Explore Our Research'
      },
      {
        id: 2,
        title: 'Advanced Machine Learning Solutions',
        description: 'Developing cutting-edge machine learning algorithms for real-world applications that make a difference. Our research encompasses deep learning architectures, explainable AI methodologies, and robust neural network designs.',
        cta: 'View ML Projects'
      },
      {
        id: 3,
        title: 'Computer Vision & Image Processing',
        description: 'Revolutionary computer vision technologies designed for precision applications in agriculture, healthcare, and industrial automation. Our advanced image processing systems enable accurate monitoring, analysis, and decision-making at scale.',
        cta: 'Discover Vision AI'
      }
    ];

    const greekSlides = [
      {
        id: 1,
        title: 'AI4: Πρωτοπορεί στην Έρευνα Τεχνητής Νοημοσύνης',
        description: 'Οδηγώντας την καινοτομία στην ΤΝ από τη Θράκη, Ελλάδα. Η πολυεπιστημονική ομάδα μας συνδυάζει εμπειρία σε μηχανική μάθηση, υπολογιστική όραση και επεξεργασία φυσικής γλώσσας για την ανάπτυξη έξυπνων λύσεων που μετασχηματίζουν τις βιομηχανίες.',
        cta: 'Εξερευνήστε την Έρευνά μας'
      },
      {
        id: 2,
        title: 'Προηγμένες Λύσεις Μηχανικής Μάθησης',
        description: 'Αναπτύσσουμε προηγμένους αλγορίθμους μηχανικής μάθησης για πρακτικές εφαρμογές που κάνουν τη διαφορά. Η έρευνά μας περιλαμβάνει αρχιτεκτονικές βαθιάς μάθησης, μεθοδολογίες επεξηγήσιμης ΤΝ και ισχυρά δίκτυα νευρωνικών δικτύων.',
        cta: 'Δείτε τις Λύσεις Μας'
      },
      {
        id: 3,
        title: 'Υπολογιστική Όραση & Επεξεργασία Εικόνας',
        description: 'Επαναστατικές τεχνολογίες υπολογιστικής όρασης σχεδιασμένες για εφαρμογές ακριβείας στη γεωργία, υγειονομική περίθαλψη και βιομηχανική αυτοματοποίηση. Τα προηγμένα συστήματα επεξεργασίας εικόνας μας επιτρέπουν ακριβή παρακολούθηση, ανάλυση και λήψη αποφάσεων σε κλίμακα.',
        cta: 'Ανακαλύψτε την ΤΝ Όρασης'
      }
    ];

    return language === 'el' ? greekSlides : englishSlides;
  };

  const slides = getSlides();

  // Get news items with translations
  const getNewsItems = () => {
    const englishNews = [
      {
        date: 'Dec 15, 2024',
        title: 'AI4.GR Leads Digital Inclusion with "LEAD YOUR WAY" Project - Cross-European initiative spanning eight countries'
      },
      {
        date: 'Nov 20, 2024', 
        title: 'Empowering Older Adults: STEP‑UP Project Tackles Fall Prevention with AI-driven e-learning platforms'
      },
      {
        date: 'Oct 15, 2024',
        title: 'Advancing Stroke Rehabilitation Research - AI combines neuroimaging and biomechanical data for recovery predictions'
      },
      {
        date: 'Sep 20, 2024',
        title: 'AI Enhances Occupational Therapy: Insights from a Scoping Review - New assessment methods through sensor data'
      },
      {
        date: 'Aug 10, 2024',
        title: 'Machine Learning Predicts Language and Cognition Recovery After Stroke - 97% accuracy achievement'
      },
      {
        date: 'Jul 25, 2024',
        title: 'Visualising Gait Data for Better Stroke Diagnosis - Making complex biomechanical data accessible to clinicians'
      },
      {
        date: 'Jun 15, 2024',
        title: 'Improving Stroke Outcome Predictions with Explainable AI - Transparent clinical decision support'
      },
      {
        date: 'May 20, 2024',
        title: 'Movement Programmes Boost Mobility for Dementia Patients - Personalised intervention results'
      },
      {
        date: 'Apr 10, 2024',
        title: 'Explainable AI Identifies Biomarkers for ACL Injury - 94.95% accuracy in sports injury prediction'
      },
      {
        date: 'Jun 3, 2024',
        title: 'AI4.GR Engages Creative Industries at AI X Thessaloniki - Generative AI conference presentation'
      }
    ];

    const greekNews = [
      {
        date: 'Dec 15, 2024',
        title: 'Η AI4.GR Ηγείται της Ψηφιακής Ένταξης με το Πρόγραμμα "LEAD YOUR WAY" - Διευρωπαϊκή πρωτοβουλία σε οκτώ χώρες'
      },
      {
        date: 'Nov 20, 2024',
        title: 'Ενδυνάμωση Ηλικιωμένων: Το Πρόγραμμα STEP‑UP Αντιμετωπίζει την Πρόληψη Πτώσεων με πλατφόρμες e-learning ΤΝ'
      },
      {
        date: 'Oct 15, 2024',
        title: 'Προηγμένη Έρευνα στην Αποκατάσταση μετά από Εγκεφαλικό - Η ΤΝ συνδυάζει νευροαπεικονιστικά και βιομηχανικά δεδομένα'
      },
      {
        date: 'Sep 20, 2024',
        title: 'Η ΤΝ Ενισχύει την Εργοθεραπεία: Αντιλήψεις από Ανασκοπική Μελέτη - Νέες μέθοδοι αξιολόγησης μέσω αισθητήρων'
      },
      {
        date: 'Aug 10, 2024',
        title: 'Η Μηχανική Μάθηση Προβλέπει την Αποκατάσταση Γλώσσας μετά από Εγκεφαλικό - Επίτευξη ακρίβειας 97%'
      },
      {
        date: 'Jul 25, 2024',
        title: 'Οπτικοποίηση Δεδομένων Βάδισης για Καλύτερη Διάγνωση Εγκεφαλικού - Πρόσβαση κλινικών σε πολύπλοκα δεδομένα'
      },
      {
        date: 'Jun 15, 2024',
        title: 'Βελτίωση Προβλέψεων Εγκεφαλικού με Επεξηγήσιμη ΤΝ - Διαφανής υποστήριξη κλινικών αποφάσεων'
      },
      {
        date: 'May 20, 2024',
        title: 'Προγράμματα Κίνησης Ενισχύουν την Κινητικότητα Ασθενών με Άνοια - Αποτελέσματα εξατομικευμένης παρέμβασης'
      },
      {
        date: 'Apr 10, 2024',
        title: 'Επεξηγήσιμη ΤΝ Προσδιορίζει Βιοδείκτες Τραυματισμού ACL - Ακρίβεια 94.95% στην πρόβλεψη αθλητικών τραυματισμών'
      },
      {
        date: 'Jun 3, 2024',
        title: 'Η AI4.GR στις Δημιουργικές Βιομηχανίες στο AI X Θεσσαλονίκη - Παρουσίαση συνεδρίου γεννητικής ΤΝ'
      }
    ];

    return language === 'el' ? greekNews : englishNews;
  };

  const allNewsItems = getNewsItems();

  // Get current 3 news items to display
  const getCurrentNewsItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentNewsIndex + i) % allNewsItems.length;
      items.push(allNewsItems[index]);
    }
    return items;
  };

  const newsItems = getCurrentNewsItems();

  // Navigation functions - single item movement
  const goToNextNews = () => {
    setCurrentNewsIndex((prevIndex) => 
      (prevIndex + 1) % allNewsItems.length
    );
  };

  const goToPrevNews = () => {
    setCurrentNewsIndex((prevIndex) => 
      prevIndex === 0 ? allNewsItems.length - 1 : prevIndex - 1
    );
  };

  const canGoUp = currentNewsIndex > 0;
  const canGoDown = currentNewsIndex < allNewsItems.length - 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 12000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <HeroWrapper>
        <NeuralMesh />
        <NeuralConnections>
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
            </linearGradient>
          </defs>
          <path 
            d="M 120 150 Q 200 100 280 180 T 420 200" 
            stroke="url(#connectionGradient)" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="5,5"
          />
          <path 
            d="M 180 250 Q 300 200 380 280 T 500 300" 
            stroke="url(#connectionGradient)" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="3,3"
          />
        </NeuralConnections>
        <NeuralNodes />
        
        <HeroSection>
          <HeroContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <HeroTitle>
                  {slides[currentSlide]?.title || slides[0].title}
                </HeroTitle>
                <HeroSubtitle>
                  {slides[currentSlide]?.description || slides[0].description}
                </HeroSubtitle>
                <CTAButtons>
                  <PrimaryButton
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/research')}
                  >
                    {slides[currentSlide]?.cta || slides[0].cta}
                  </PrimaryButton>
                  <SecondaryButton
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/eu-projects')}
                  >
                    {language === 'el' ? 'Δείτε τα Προγράμματά μας' : 'See Our Projects'}
                  </SecondaryButton>
                </CTAButtons>
                
                <CarouselIndicators>
                  {slides.map((_, index) => (
                    <CarouselDot
                      key={index}
                      active={currentSlide === index}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </CarouselIndicators>
              </motion.div>
            </AnimatePresence>
          </HeroContent>

          <NewsSidebar>
            <NewsHeaderTop>
              <h2>{language === 'el' ? 'Τελευταίες Ενημερώσεις' : 'Latest Updates'}</h2>
              <ViewAllButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/news')}
              >
                {language === 'el' ? 'Δείτε όλα τα δελτία τύπου & νέα →' : 'View all press releases & news →'}
              </ViewAllButton>
            </NewsHeaderTop>
            
            <NewsContainer>
              <NewsScroller>
                <NewsArrow 
                  className="up" 
                  onClick={goToPrevNews}
                  disabled={!canGoUp}
                >
                  ↑
                </NewsArrow>
                <NewsArrow 
                  className="down" 
                  onClick={goToNextNews}
                  disabled={!canGoDown}
                >
                  ↓
                </NewsArrow>
                {newsItems.map((item, index) => (
                  <NewsItemStyled key={`${currentNewsIndex}-${index}`} onClick={() => navigate('/news')}>
                    <div className="date">{item.date}</div>
                    <div className="headline">{item.title}</div>
                  </NewsItemStyled>
                ))}
              </NewsScroller>
            </NewsContainer>
          </NewsSidebar>
        </HeroSection>
      </HeroWrapper>

      <NavigationWrapper>
        <NavigationTabs>
          <Tab onClick={() => scrollToSection('introducing-ai4')}>
            <h3>{language === 'el' ? 'Γνωρίστε την AI4' : 'Introducing AI4'}</h3>
          </Tab>
          <Tab onClick={() => scrollToSection('our-services')}>
            <h3>{language === 'el' ? 'Οι Υπηρεσίες μας' : 'Our Services'}</h3>
          </Tab>
          <Tab onClick={() => scrollToSection('our-research')}>
            <h3>{language === 'el' ? 'Η Έρευνά μας' : 'Our Research'}</h3>
          </Tab>
          <Tab onClick={() => scrollToSection('our-products')}>
            <h3>{language === 'el' ? 'Τα Προϊόντα μας' : 'Our Products'}</h3>
          </Tab>
        </NavigationTabs>
      </NavigationWrapper>


    </>
  );
};

export default AtosHero;
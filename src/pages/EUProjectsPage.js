import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaTimes, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaGlobe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
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
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
    line-height: 1.1;
    color: #ffffff;
  }
  
  .subtitle {
    font-size: 1.125rem;
    line-height: 1.6;
    max-width: 600px;
    opacity: 0.95;
    font-weight: 400;
    color: #cbd5e1;
  }
`;

const IntroSection = styled.section`
  background: white;
  padding: 4rem 0;
`;

const IntroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1400px) {
    margin: 0 2rem;
    padding: 0;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const IntroContent = styled.div`
  h2 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #6b7280;
    margin-bottom: 1.5rem;
  }
  
  .stats-list {
    list-style: none;
    padding: 0;
    margin: 2rem 0 0 0;
    
    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.75rem;
      font-size: 1rem;
      color: #4b5563;
      
      &::before {
        content: '✓';
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.75rem;
        font-size: 0.75rem;
        font-weight: bold;
        flex-shrink: 0;
      }
    }
  }
`;

const IntroImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  .overlay {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    
    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 0.5rem;
    }
    
    p {
      font-size: 0.875rem;
      color: #6b7280;
      margin: 0;
    }
  }
`;

const ProjectsSection = styled.section`
  background: #f8fafc;
  padding: 4rem 0;
`;

const ProjectsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 1400px) {
    margin: 0 2rem;
    padding: 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #e2e8f0;
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 115, 230, 0.15);
    border-color: #0073E6;
  }
  
  .card-header {
    padding: 2rem 1.5rem;
    background: #f8fafc;
    position: relative;
    text-align: center;
    
    .category-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: ${props => props.status === 'active' 
        ? '#10b981' 
        : '#3b82f6'
      };
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 16px;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .project-logo {
      width: 120px;
      height: 120px;
      background: white;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem auto;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      font-size: 2rem;
      font-weight: 800;
      color: #0073E6;
      position: relative;
      transition: transform 0.3s ease;
      border: 1px solid #e2e8f0;
      padding: 0.5rem;
      
      &:hover {
        transform: translateY(-2px);
      }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
      }
    }
    
    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 0.75rem;
      font-family: 'Inter', sans-serif;
      line-height: 1.3;
      text-align: center;
    }
    
    .project-category {
      font-size: 0.85rem;
      color: #6b7280;
      font-weight: 500;
      text-align: center;
      padding: 0.5rem 1rem;
      background: white;
      border-radius: 8px;
      margin: 0 auto;
      display: inline-block;
      border: 1px solid #e2e8f0;
    }
  }
  
  .view-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: #0073E6;
    color: white;
    border: none;
    border-radius: 0;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    &:hover {
      background: #0056b3;
      transform: translateY(-2px);
    }
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: 
    linear-gradient(135deg, #ffffff 0%, #f8fafc 100%),
    radial-gradient(circle at top right, rgba(59, 130, 246, 0.03), transparent 50%),
    radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.02), transparent 50%);
  border-radius: 32px;
  max-width: 900px;
  max-height: 90vh;
  width: 100%;
  overflow-y: auto;
  position: relative;
  box-shadow: 
    0 50px 150px rgba(0, 0, 0, 0.3),
    0 25px 100px rgba(0, 115, 230, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, 
      #0073E6 0%, 
      #3b82f6 20%, 
      #10b981 40%, 
      #06b6d4 60%, 
      #8b5cf6 80%, 
      #0073E6 100%
    );
    background-size: 200% 100%;
    animation: modalShimmer 4s ease-in-out infinite;
    border-radius: 32px 32px 0 0;
  }
  
  @keyframes modalShimmer {
    0%, 100% { background-position: 200% 0; }
    50% { background-position: -200% 0; }
  }
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid #e2e8f0;
  position: relative;
  
  .close-button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 40px;
    height: 40px;
    border: none;
    background: #f1f5f9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #6b7280;
    
    &:hover {
      background: #e2e8f0;
      color: #374151;
      transform: scale(1.1);
    }
  }
  
  .project-logo {
    width: 80px;
    height: 80px;
    background: white;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    font-size: 2rem;
    font-weight: 800;
    color: #0073E6;
    overflow: hidden;
    padding: 0.25rem;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;
  }
  
  .tagline {
    font-size: 1.125rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
  
  .project-meta {
    display: flex;
    gap: 2rem;
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: #6b7280;
      
      svg {
        font-size: 0.75rem;
        color: #0073E6;
      }
    }
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  
  .content-grid {
    display: grid;
    gap: 2rem;
  }
  
  .content-section {
    h4 {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 1rem;
      font-family: 'Inter', sans-serif;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 1rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 0.75rem;
        color: #4b5563;
        font-size: 0.95rem;
        line-height: 1.5;
        
        &::before {
          content: '▸';
          color: #0073E6;
          font-weight: bold;
          width: 1rem;
          margin-right: 0.5rem;
          margin-top: 0.1rem;
          flex-shrink: 0;
        }
      }
    }
  }
  
  .ai4-highlight {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    border-radius: 16px;
    padding: 2rem;
    margin-top: 2rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent 50%);
      pointer-events: none;
    }
    
    h4 {
      color: white;
      margin-bottom: 1.25rem;
      font-size: 1.25rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    p {
      color: rgba(255, 255, 255, 0.95);
      margin-bottom: 0;
      line-height: 1.6;
      font-size: 1rem;
    }
  }
  
  .external-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, #0073E6, #2563eb);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;
    margin-top: 1.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 16px rgba(0, 115, 230, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.6s ease;
    }
    
    &:hover {
      background: linear-gradient(135deg, #0056b3, #1d4ed8);
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(0, 115, 230, 0.4);
      
      &::before {
        left: 100%;
      }
    }
    
    svg {
      font-size: 0.875rem;
      transition: transform 0.3s ease;
    }
    
    &:hover svg {
      transform: translateX(2px);
    }
  }
`;

const EUProjectsPage = () => {
  const navigate = useNavigate();
  const { language } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getContent = () => {
    if (language === 'el') {
      return {
        title: 'Χρηματοδοτούμενα Προγράμματα ΕΕ',
        subtitle: 'Προωθώντας την έρευνα ΤΝ και τον κοινωνικό αντίκτυπο μέσω προγραμμάτων χρηματοδότησης της Ευρωπαϊκής Ένωσης και στρατηγικών συνεργασιών.',
        breadcrumb: {
          home: 'Αρχική',
          research: 'Έρευνα',
          euProjects: 'Χρηματοδοτούμενα Προγράμματα ΕΕ'
        },
        intro: {
          title: 'Ηγούμενες Ευρωπαϊκές Ερευνητικές Πρωτοβουλίες',
          description1: 'Η AI4 βρίσκεται στην πρώτη γραμμή πρωτοποριακών ερευνητικών έργων χρηματοδοτούμενων από την Ευρωπαϊκή Ένωση, αναπτύσσοντας καινοτόμες λύσεις ΤΝ που αντιμετωπίζουν προκλήσεις του πραγματικού κόσμου και δημιουργούν σημαντικό κοινωνικό αντίκτυπο σε όλη την Ευρώπη.',
          description2: 'Το ερευνητικό μας χαρτοφυλάκιο καλύπτει την ψηφιακή ένταξη, την καινοτομία στην υγειονομική περίθαλψη και την εκπαιδευτική τεχνολογία, παρέχοντας συνεχώς μεταμορφωτικά αποτελέσματα που ωφελούν τις κοινότητες και προωθούν τον τομέα της τεχνητής νοημοσύνης.',
          stats: [
            'Ενεργή συμμετοχή σε μεγάλα προγράμματα χρηματοδότησης της ΕΕ',
            'Συνεργασία με 8+ Ευρωπαϊκές χώρες εταίρους',
            '€3M+ σε εξασφαλισμένη ερευνητική χρηματοδότηση',
            'Εστίαση στον κοινωνικό αντίκτυπο και την ψηφιακή ένταξη'
          ],
          imageCaption: {
            title: 'Μετατρέποντας την Έρευνα σε Αντίκτυπο',
            description: 'Χτίζοντας γέφυρες μεταξύ της προηγμένης έρευνας ΤΝ και των πρακτικών λύσεων για την κοινωνία'
          }
        },
        projectsSection: {
          title: 'Τα Ερευνητικά μας Προγράμματα',
          description: 'Ανακαλύψτε τις τρέχουσες και επερχόμενες ερευνητικές μας πρωτοβουλίες χρηματοδοτούμενες από την ΕΕ'
        },
        statusLabels: {
          active: 'Ενεργό',
          upcoming: 'Επερχόμενο'
        },
        viewDetails: 'Προβολή Λεπτομερειών',
        modal: {
          projectWebsite: 'Ιστότοπος Έργου',
          visitWebsite: 'Επισκεφθείτε τον Ιστότοπο του Έργου',
          sections: {
            overview: '🎯 Επισκόπηση Έργου',
            objectives: '🎯 Βασικοί Στόχοι',
            implementation: '⚙️ Στρατηγική Υλοποίησης',
            expectedResults: '📊 Αναμενόμενα Αποτελέσματα',
            ai4Role: '🚀 Ρόλος και Συνεισφορά της AI4'
          }
        }
      };
    }
    return {
      title: 'EU-Funded Projects',
      subtitle: 'Advancing AI research and social impact through European Union funding programs and strategic partnerships.',
      breadcrumb: {
        home: 'Home',
        research: 'Research',
        euProjects: 'EU-Funded Projects'
      },
      intro: {
        title: 'Leading European Research Initiatives',
        description1: 'AI4 is at the forefront of groundbreaking European Union-funded research projects, developing innovative AI solutions that address real-world challenges and create meaningful social impact across Europe.',
        description2: 'Our research portfolio spans digital inclusion, healthcare innovation, and educational technology, consistently delivering transformative results that benefit communities and advance the field of artificial intelligence.',
        stats: [
          'Active participation in major EU funding programs',
          'Collaboration with 8+ European partner countries',
          '€3M+ in secured research funding',
          'Focus on social impact and digital inclusion'
        ],
        imageCaption: {
          title: 'Transforming Research into Impact',
          description: 'Building bridges between cutting-edge AI research and practical solutions for society'
        }
      },
      projectsSection: {
        title: 'Our Research Projects',
        description: 'Discover our current and upcoming EU-funded research initiatives'
      },
      statusLabels: {
        active: 'Active',
        upcoming: 'Upcoming'
      },
      viewDetails: 'View Details',
      modal: {
        projectWebsite: 'Project Website',
        visitWebsite: 'Visit Project Website',
        sections: {
          overview: '🎯 Project Overview',
          objectives: '🎯 Key Objectives',
          implementation: '⚙️ Implementation Strategy',
          expectedResults: '📊 Expected Results',
          ai4Role: '🚀 AI4\'s Role & Contribution'
        }
      }
    };
  };

  const getProjects = () => {
    if (language === 'el') {
      return [
        {
          id: 'leadyourway',
          title: 'LEAD YOUR WAY',
          category: 'Ψηφιακή Ένταξη & Απασχόληση',
          tagline: 'Να ενδυναμώσουμε άτομα με σύνδρομο Down/διανοητική αναπηρία μέσω ψηφιακής ένταξης και υποστηριζόμενης απασχόλησης',
          logo: '/images/LYW-LOGO-vector-RGB.png',
          logoType: 'image',
          status: 'active',
          duration: '2022-2025',
          partners: '8 Χώρες',
          website: 'https://leadyourwayproject.eu/',
          overview: {
            description: 'Το έργο "LEAD YOUR WAY" στοχεύει στη μείωση του χάσματος απασχόλησης που αντιμετωπίζουν άτομα με σύνδρομο Down και διανοητικές αναπηρίες (DS/ID), διευκολύνοντας την ένταξή τους στην ανοιχτή αγορά εργασίας μέσω της εφαρμογής τεχνικών υποστηριζόμενης απασχόλησης και στρατηγικής χρήσης ψηφιακών εργαλείων.',
            impact: 'Τα ψηφιακά εργαλεία θα χρησιμοποιηθούν για να ενδυναμώσουν άτομα με DS/ID στη διαδικασία απασχόλησής τους, να ενισχύσουν το έργο των συμβούλων απασχόλησης και να αυξήσουν την ευαισθητοποίηση σχετικά με τις πρακτικές συμπεριληπτικής απασχόλησης σε όλη την Ευρώπη.'
          },
          objectives: [
            'Ανάπτυξη ψηφιακών εργαλείων για υποστηριζόμενη απασχόληση',
            'Δημιουργία εξατομικευμένων πλατφορμών μάθησης',
            'Ενίσχυση των δυνατοτήτων των συμβούλων απασχόλησης',
            'Προώθηση πρακτικών συμπεριληπτικής απασχόλησης',
            'Κατασκευή ολοκληρωμένων βάσεων δεδομένων και πλατφορμών'
          ],
          ai4Role: 'Η AI4 IKE είναι υπεύθυνη για την ανάπτυξη των ψηφιακών εργαλείων του έργου, συγκεκριμένα: τον ιστότοπο, τη βάση δεδομένων, την ψηφιακή πλατφόρμα και τα εργαλεία τεχνητής νοημοσύνης για εξατομικευμένη μάθηση. Συμμετέχουμε επίσης σε όλες τις δραστηριότητες του έργου και συνεισφέρουμε την εμπειρία μας στις εκπαιδευτικές τεχνολογίες που βασίζονται στην ΤΝ.'
        },
        {
          id: 'stepup',
          title: 'STEP-UP',
          category: 'Υγειονομική Περίθαλψη & Εκπαίδευση Ασφάλειας',
          tagline: 'Πρόγραμμα Ασφαλούς Εκπαίδευσης για πρόληψη πτώσεων σε ηλικιωμένους',
          logo: 'SUP',
          status: 'upcoming',
          duration: '2024-2027',
          partners: 'Ελλάδα & Κύπρος',
          website: null,
          overview: {
            description: 'Ο γηράσκων πληθυσμός στην ΕΕ αντιμετωπίζει προκλήσεις με τη διατήρηση της ισορροπίας, γεγονός που αυξάνει σημαντικά τον κίνδυνο πτώσεων. Ο στόχος του έργου STEP-UP είναι να προωθήσει τη γνώση και την ευαισθητοποίηση για την πρόληψη πτώσεων και τις πρακτικές ασφαλούς διαβίωσης μεταξύ των ηλικιωμένων.',
            impact: 'Αυτή η εκπαιδευτική πρωτοβουλία στοχεύει να εξοπλίσει τους ηλικιωμένους με την απαραίτητη κατανόηση και εργαλεία για να πλοηγούνται με ασφάλεια τις καθημερινές τους δραστηριότητες, ενισχύοντας έτσι την αυτονομία τους, μειώνοντας το κόστος υγειονομικής περίθαλψης και βελτιώνοντας τη συνολική ποιότητα ζωής τους.'
          },
          implementation: [
            'Αξιολόγηση των αναγκών και προκλήσεων των ηλικιωμένων σχετικά με την πρόληψη πτώσεων',
            'Επιλογή και προσαρμογή εκπαιδευτικών εργαλείων για τη δημογραφική ομάδα των ηλικιωμένων',
            'Ανάπτυξη εκπαιδευτικού εργαλειοθήκη για πρακτικές πρόληψης πτώσεων',
            'Σχεδιασμός διαδικτυακών εκπαιδευτικών ενοτήτων και διδακτικών βίντεο',
            'Δημιουργία προγραμμάτων πιστοποίησης βασισμένων στο EQF',
            'Υλοποίηση ολοκληρωμένης διαδικτυακής πλατφόρμας μάθησης',
            'Πιλοτική εφαρμογή και αξιολόγηση μέσω ανατροφοδότησης των ενδιαφερομένων'
          ],
          expectedResults: [
            'Ολοκληρωμένο εργαλειοθήκη για πρόληψη πτώσεων και πρακτικές ασφαλούς διαβίωσης',
            'Πλατφόρμα ηλεκτρονικής μάθησης με μαθήματα, ενότητες και βίντεο',
            'Ενισχυμένη αυτονομία και ευαισθητοποίηση ασφάλειας μεταξύ των ηλικιωμένων της ΕΕ',
            'Μείωση των περιστατικών πτώσεων και του κόστους υγειονομικής περίθαλψης',
            'Βελτιωμένη ποιότητα ζωής και ψυχική ευεξία',
            'Μεγαλύτερη προσβασιμότητα στη ζωτική εκπαίδευση ασφάλειας'
          ]
        }
      ];
    }
    return [
      {
        id: 'leadyourway',
        title: 'LEAD YOUR WAY',
        category: 'Digital Inclusion & Employment',
        tagline: 'Empowering individuals with DS/ID through digital inclusion and supported employment',
        logo: '/images/LYW-LOGO-vector-RGB.png',
        logoType: 'image',
        status: 'active',
        duration: '2022-2025',
        partners: '8 Countries',
        website: 'https://leadyourwayproject.eu/',
        overview: {
          description: 'The "LEAD YOUR WAY" project aims to reduce the employment gap faced by individuals with Down syndrome and intellectual disabilities (DS/ID), facilitating their integration into the open labor market through the application of supported employment techniques and strategic use of digital tools.',
          impact: 'Digital tools will be used to empower individuals with DS/ID in their employment process, to enhance the work of employment counselors, and to raise awareness about inclusive employment practices across Europe.'
        },
        objectives: [
          'Develop digital tools for supported employment',
          'Create personalized learning platforms',
          'Enhance employment counselor capabilities',
          'Promote inclusive employment practices',
          'Build comprehensive databases and platforms'
        ],
        ai4Role: 'AI4 IKE is responsible for developing the digital tools for the project, specifically: the website, database, digital platform, and artificial intelligence tools for personalized learning. We also participate in all project activities and contribute our expertise in AI-driven educational technologies.'
      },
      {
        id: 'stepup',
        title: 'STEP-UP',
        category: 'Healthcare & Safety Education',
        tagline: 'Safe Training & Education Program for fall prevention in older adults',
        logo: 'SUP',
        status: 'upcoming',
        duration: '2024-2027',
        partners: 'Greece & Cyprus',
        website: null,
        overview: {
          description: 'The aging population in the EU faces challenges with maintaining balance, which significantly increases the risk of falls. The objective of the STEP-UP project is to foster knowledge and awareness on fall prevention and safe living practices among the elderly.',
          impact: 'This educational initiative aims to equip elderly individuals with the necessary understanding and tools to navigate their daily activities safely, thus enhancing their autonomy, reducing healthcare costs, and improving their overall quality of life.'
        },
        implementation: [
          'Assessment of elderly individuals\' needs and challenges concerning fall prevention',
          'Selection and customization of educational tools for elderly demographic',
          'Development of educational toolkit on fall prevention practices',
          'Design of online educational modules and instructional videos',
          'Creation of EQF-based certification programs',
          'Realization of comprehensive online learning platform',
          'Piloting and evaluation through stakeholder feedback'
        ],
        expectedResults: [
          'Comprehensive toolkit on fall prevention and safe living practices',
          'E-learning platform with courses, modules and videos',
          'Enhanced autonomy and safety awareness among EU elderly',
          'Reduction in fall incidents and healthcare costs',
          'Improved quality of life and mental well-being',
          'Greater accessibility to vital safety education'
        ]
      }
    ];
  };

  const content = getContent();
  const projects = getProjects();

  return (
    <PageContainer>
      <Helmet>
        <title>{content.title} - AI4 Advanced Solutions</title>
        <meta name="description" content={language === 'el' ? "Ανακαλύψτε τα τρέχοντα και επερχόμενα ερευνητικά έργα της AI4 χρηματοδοτούμενα από την ΕΕ, συμπεριλαμβανομένων των πρωτοβουλιών LEAD YOUR WAY και STEP-UP." : "Discover AI4's current and upcoming EU-funded research projects including LEAD YOUR WAY and STEP-UP initiatives."} />
        <meta name="keywords" content={language === 'el' ? "προγράμματα ΕΕ, ερευνητική χρηματοδότηση, Horizon Europe, έργα AI4, Ευρωπαϊκή Ένωση" : "EU projects, research funding, Horizon Europe, AI4 projects, European Union"} />
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
            <button onClick={() => navigate('/research')} style={{border: 'none', background: 'none', color: '#0073E6', textDecoration: 'none', cursor: 'pointer'}}>{content.breadcrumb.research}</button>
            <span>/</span>
            <span>{content.breadcrumb.euProjects}</span>
          </div>
        </div>
      </BreadcrumbBar>

      <IntroSection>
        <IntroContainer>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <IntroContent>
              <h2>{content.intro.title}</h2>
              <p>
                {content.intro.description1}
              </p>
              <p>
                {content.intro.description2}
              </p>
              <ul className="stats-list">
                {content.intro.stats.map((stat, index) => (
                  <li key={index}>{stat}</li>
                ))}
              </ul>
            </IntroContent>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <IntroImage>
              <img 
                src="/images/european-collaboration.jpg" 
                alt="European research collaboration" 
              />
              <div className="overlay">
                <h3>{content.intro.imageCaption.title}</h3>
                <p>{content.intro.imageCaption.description}</p>
              </div>
            </IntroImage>
          </motion.div>
        </IntroContainer>
      </IntroSection>

      <ProjectsSection>
        <ProjectsContainer>
          <SectionHeader>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {content.projectsSection.title}
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {content.projectsSection.description}
            </motion.p>
          </SectionHeader>

          <ProjectGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                status={project.status}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => openModal(project)}
              >
                <div className="card-header">
                  <div className="category-badge">
                    {project.status === 'active' ? content.statusLabels.active : content.statusLabels.upcoming}
                  </div>
                  
                  <div className="project-logo">
                    {project.logoType === 'image' ? (
                      <img src={project.logo} alt={`${project.title} logo`} />
                    ) : (
                      project.logo
                    )}
                  </div>
                  
                  <h3>{project.title}</h3>
                  <div className="project-category">{project.category}</div>
                </div>

                <button 
                  className="view-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(project);
                  }}
                >
                  {content.viewDetails}
                </button>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ProjectsContainer>
      </ProjectsSection>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <button className="close-button" onClick={closeModal}>
                  <FaTimes />
                </button>
                
                <div className="project-logo">
                  {selectedProject.logoType === 'image' ? (
                    <img src={selectedProject.logo} alt={`${selectedProject.title} logo`} />
                  ) : (
                    selectedProject.logo
                  )}
                </div>
                
                <h2>{selectedProject.title}</h2>
                <p className="tagline">{selectedProject.tagline}</p>
                
                <div className="project-meta">
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{selectedProject.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaGlobe />
                    <span>{selectedProject.partners}</span>
                  </div>
                  {selectedProject.website && (
                    <div className="meta-item">
                      <FaExternalLinkAlt />
                      <a href={selectedProject.website} target="_blank" rel="noopener noreferrer">
                        {content.modal.projectWebsite}
                      </a>
                    </div>
                  )}
                </div>
              </ModalHeader>

              <ModalBody>
                <div className="content-grid">
                  <div className="content-section">
                    <h4>{content.modal.sections.overview}</h4>
                    <p>{selectedProject.overview.description}</p>
                    <p>{selectedProject.overview.impact}</p>
                  </div>

                  {selectedProject.objectives && (
                    <div className="content-section">
                      <h4>{content.modal.sections.objectives}</h4>
                      <ul>
                        {selectedProject.objectives.map((objective, idx) => (
                          <li key={idx}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.implementation && (
                    <div className="content-section">
                      <h4>{content.modal.sections.implementation}</h4>
                      <ul>
                        {selectedProject.implementation.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.expectedResults && (
                    <div className="content-section">
                      <h4>{content.modal.sections.expectedResults}</h4>
                      <ul>
                        {selectedProject.expectedResults.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.ai4Role && (
                    <div className="ai4-highlight">
                      <h4>{content.modal.sections.ai4Role}</h4>
                      <p>{selectedProject.ai4Role}</p>
                    </div>
                  )}

                  {selectedProject.website && (
                    <a 
                      href={selectedProject.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      {content.modal.visitWebsite}
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      <ComprehensiveFooter />
    </PageContainer>
  );
};

export default EUProjectsPage;
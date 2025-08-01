import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from '../../hooks/useTranslation';

const SolutionsWrapper = styled.section`
  background: #1a202c;
  position: relative;
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

const SolutionsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 10;
  
  .section-header {
    text-align: left;
    margin-bottom: 3rem;
    
    h2 {
      font-size: clamp(1.75rem, 3vw, 2.25rem);
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 1rem;
      font-family: 'Inter', sans-serif;
      line-height: 1.2;
    }
    
    .section-description {
      font-size: 1rem;
      line-height: 1.6;
      color: #cbd5e1;
      max-width: none;
      margin: 0;
    }
  }
`;

const SolutionsLayout = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 4rem;
  margin-top: 3rem;
  min-height: 600px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SolutionsList = styled.div`
  background: rgba(26, 32, 44, 0.7);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  padding: 2rem;
  height: fit-content;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
  }
`;

const SolutionItem = styled.div`
  padding: 1rem 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  color: #cbd5e1;
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
    border-left-color: #3b82f6;
    color: #ffffff;
  }
  
  &.active {
    background: #3b82f6;
    color: white;
    border-left-color: #1d4ed8;
    
    &:hover {
      background: #2563eb;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    font-family: 'Inter', sans-serif;
  }
  
  .category {
    font-size: 0.875rem;
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const SolutionDetail = styled(motion.div)`
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: fit-content;
  
  .detail-image {
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
    
    .category-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: rgba(0, 115, 230, 0.9);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
  
  .detail-content {
    padding: 2rem;
    
    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 1rem;
      font-family: 'Poppins', sans-serif;
      line-height: 1.3;
    }
    
    .description {
      font-size: 0.9rem;
      line-height: 1.6;
      color: #525252;
      margin-bottom: 1.5rem;
    }
    
    .features-title {
      font-size: 1rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.75rem;
      font-family: 'Poppins', sans-serif;
    }
    
    .features-list {
      list-style: none;
      padding: 0;
      margin: 0 0 1.5rem 0;
      
      li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 0.5rem;
        color: #1a1a1a;
        font-size: 0.85rem;
        line-height: 1.5;
        
        &::before {
          content: '✓';
          background: #0073E6;
          color: white;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: bold;
          margin-right: 0.75rem;
          margin-top: 0.1rem;
          flex-shrink: 0;
        }
      }
    }
    
    .additional-info {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 1rem;
      margin-top: 1rem;
      
      .info-title {
        font-size: 0.9rem;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
        font-family: 'Poppins', sans-serif;
      }
      
      .info-text {
        font-size: 0.8rem;
        line-height: 1.5;
        color: #525252;
      }
    }
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 2rem;
  
  .icon {
    font-size: 4rem;
    color: #e5e7eb;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #9ca3af;
    margin-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
  }
  
  p {
    color: #9ca3af;
    font-size: 1rem;
  }
`;

const IndustrySolutions = () => {
  const { language } = useTranslation();

  const getSolutions = () => {
    if (language === 'el') {
      return [
        {
          id: 'agriculture',
          category: 'Γεωργία',
          title: 'Λύσεις Έξυπνης Γεωργίας',
          description: 'Παρακολούθηση καλλιεργειών με ΤΝ, ανίχνευση παρασίτων και πρόβλεψη απόδοσης χρησιμοποιώντας έξυπνους αισθητήρες και αναλυτικά δεδομένων. Βελτιστοποιήστε τις γεωργικές λειτουργίες με τεχνολογίες ακριβείας και βιώσιμες πρακτικές.',
          image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          features: [
            'Παρακολούθηση υγείας καλλιεργειών με drones και αισθητήρες IoT',
            'Προγνωστικά αναλυτικά για βελτιστοποίηση απόδοσης',
            'Έξυπνη άρδευση και διαχείριση πόρων',
            'Ανίχνευση παρασίτων και ασθενειών με υπολογιστική όραση',
            'Ανάλυση εδάφους και βελτιστοποίηση θρεπτικών',
            'Πρόγνωση καιρού και προσαρμογή στο κλίμα',
            'Ενσωμάτωση αυτοματοποιημένου γεωργικού εξοπλισμού',
            'Βελτιστοποίηση εφοδιαστικής αλυσίδας για γεωργικά προϊόντα'
          ],
          additionalInfo: {
            title: 'Τεχνολογικό Σύνολο',
            content: 'Οι γεωργικές μας λύσεις αξιοποιούν την υπολογιστική όραση, ανάλυση δορυφορικών εικόνων, δίκτυα αισθητήρων IoT και αλγορίθμους μηχανικής μάθησης για να παρέχουν ολοκληρωμένες δυνατότητες διαχείρισης αγροκτήματος.'
          }
        },
        {
          id: 'healthcare',
          category: 'Υγειονομική Περίθαλψη',
          title: 'Συστήματα ΤΝ Υγείας',
          description: 'Εξατομικευμένη ιατρική, συστήματα παρακολούθησης ασθενών και διαγνωστικά εργαλεία που χρησιμοποιούν μηχανική μάθηση, βαθιά μάθηση και υπολογιστική όραση. Βελτιώστε τα αποτελέσματα ασθενών μειώνοντας το κόστος υγειονομικής περίθαλψης.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          features: [
            'Ανάλυση ιατρικών εικόνων και υποστήριξη διάγνωσης',
            'Αξιολόγηση και παρακολούθηση κινδύνου ασθενών',
            'Εξατομικευμένες συστάσεις θεραπείας',
            'Επιτάχυνση ανακάλυψης και ανάπτυξης φαρμάκων',
            'Βελτιστοποίηση ηλεκτρονικών ιατρικών αρχείων',
            'Διαχείριση και ανάλυση κλινικών δοκιμών',
            'Τηλεϊατρική και απομακρυσμένη παρακολούθηση ασθενών',
            'Αυτοματισμός ροής εργασίας υγειονομικής περίθαλψης'
          ],
          additionalInfo: {
            title: 'Κλινικές Εφαρμογές',
            content: 'Προηγμένα μοντέλα βαθιάς μάθησης για ραδιολογία, παθολογία και ομαδική ανάλυση, σε συνδυασμό με επεξεργασία φυσικής γλώσσας για κλινική τεκμηρίωση και συστήματα υποστήριξης αποφάσεων.'
          }
        },
        {
          id: 'environment',
          category: 'Περιβάλλον',
          title: 'Περιβαλλοντική Παρακολούθηση',
          description: 'Διαχείριση νερού ενισχυμένη με ΤΝ, έλεγχος ατμοσφαιρικής ρύπανσης, περιβαλλοντική παρακολούθηση και μετεωρολογικές προβλέψεις. Ολοκληρωμένες λύσεις για μετριασμό κλιματικής αλλαγής και περιβαλλοντική προστασία.',
          image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          features: [
            'Συστήματα παρακολούθησης ποιότητας αέρα και νερού',
            'Κλιματικό μοντέλο και πρόγνωση καιρού',
            'Παρακολούθηση και μείωση ανθρακικού αποτυπώματος',
            'Διατήρηση βιοποικιλότητας και διαχείριση οικοσυστήματος',
            'Σχεδιασμός ενσωμάτωσης ανανεώσιμης ενέργειας',
            'Βελτιστοποίηση διαχείρισης απορριμμάτων',
            'Αξιολόγηση περιβαλλοντικών επιπτώσεων',
            'Αναφορά βιωσιμότητας και συμμόρφωση'
          ],
          additionalInfo: {
            title: 'Περιβαλλοντικός Αντίκτυπος',
            content: 'Ανάλυση δορυφορικών δεδομένων, δίκτυα αισθητήρων και προγνωστική μοντελοποίηση για την υποστήριξη πρωτοβουλιών περιβαλλοντικής προστασίας και στόχων βιώσιμης ανάπτυξης.'
          }
        },
        {
          id: 'education',
          category: 'Εκπαίδευση',
          title: 'Προσαρμοστικές Πλατφόρμες Μάθησης',
          description: 'Εξατομικευμένη παράδοση περιεχομένου βασισμένη στην απόδοση μαθητών, χρησιμοποιώντας επεξεργασία φυσικής γλώσσας και προσαρμοστικές διαδρομές μάθησης. Μετασχηματίστε την εκπαίδευση με εξατομικευμένες εμπειρίες μάθησης βασισμένες στην ΤΝ.',
          image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          features: [
            'Εξατομικευμένες διαδρομές μάθησης και παράδοση περιεχομένου',
            'Αναλυτικά απόδοσης μαθητών και ιδέες',
            'Προσαρμοστικά συστήματα αξιολόγησης και ανατροφοδότησης',
            'Φροντιστήριο ΤΝ και βοήθεια μάθησης',
            'Βελτιστοποίηση και σχεδιασμός προγραμμάτων σπουδών',
            'Πρόβλεψη μαθησιακών αποτελεσμάτων',
            'Δημιουργία εκπαιδευτικού περιεχομένου',
            'Πολυγλωσσική υποστήριξη μάθησης'
          ],
          additionalInfo: {
            title: 'Τεχνολογίες Μάθησης',
            content: 'Επεξεργασία φυσικής γλώσσας, συστήματα συστάσεων και γνωσιακή μοντελοποίηση για τη δημιουργία εξατομικευμένων εκπαιδευτικών εμπειριών που προσαρμόζονται σε ατομικά στυλ μάθησης.'
          }
        },
        {
          id: 'sports',
          category: 'Αθλητισμός',
          title: 'Αναλυτικά Αθλητικής Απόδοσης',
          description: 'ΤΝ για παρακολούθηση παικτών, βελτιστοποίηση απόδοσης και εξατομικευμένη προπόνηση μέσω ανάλυσης κίνησης και προγνωστικών αναλυτικών. Βελτιώστε την αθλητική απόδοση και μειώστε τους κινδύνους τραυματισμού.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          features: [
            'Παρακολούθηση και ανάλυση απόδοσης παικτών',
            'Αξιολόγηση και πρόληψη κινδύνου τραυματισμού',
            'Βελτιστοποίηση και ανάλυση στρατηγικής παιχνιδιού',
            'Εξατομικευμένες συστάσεις προπόνησης',
            'Βελτίωση εμπλοκής και εμπειρίας φιλάθλων',
            'Σύνθεση ομάδας και τακτική ανάλυση',
            'Βελτιστοποίηση εξοπλισμού και ασφάλεια',
            'Αθλητική μετάδοση και αναλυτικά'
          ],
          additionalInfo: {
            title: 'Αθλητική Τεχνολογία',
            content: 'Υπολογιστική όραση, σύλληψη κίνησης και βιομηχανική ανάλυση σε συνδυασμό με μηχανική μάθηση για βελτιστοποίηση αθλητικής απόδοσης και μείωση ποσοστών τραυματισμού.'
          }
        },
        {
          id: 'energy',
          category: 'Ενέργεια',
          title: 'Λύσεις Έξυπνης Ενέργειας',
          description: 'Βελτιστοποίηση ανανεώσιμης ενέργειας, διαχείριση έξυπνου δικτύου και πρόβλεψη ζήτησης ενέργειας μέσω προγνωστικής μοντελοποίησης. Δημιουργήστε βιώσιμα ενεργειακά συστήματα για το μέλλον.',
          image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          features: [
            'Βελτιστοποίηση και πρόβλεψη κατανάλωσης ενέργειας',
            'Ενσωμάτωση και διαχείριση ανανεώσιμης ενέργειας',
            'Σταθερότητα έξυπνου δικτύου και εξισορρόπηση φορτίου',
            'Παρακολούθηση και βελτίωση ενεργειακής απόδοσης',
            'Βελτιστοποίηση αποθήκευσης μπαταρίας',
            'Διαχείριση φόρτισης ηλεκτρικών οχημάτων',
            'Ενεργειακό εμπόριο και ανάλυση αγοράς',
            'Προληπτική συντήρηση για ενεργειακή υποδομή'
          ],
          additionalInfo: {
            title: 'Ενεργειακή Καινοτομία',
            content: 'Προηγμένοι αλγόριθμοι για πρόβλεψη ενέργειας, βελτιστοποίηση δικτύου και ενσωμάτωση ανανεώσιμης ενέργειας για υποστήριξη βιώσιμης ενεργειακής μετάβασης και εκσυγχρονισμό δικτύου.'
          }
        }
      ];
    }
    return [
    {
      id: 'agriculture',
      category: 'Agriculture',
      title: 'Smart Agriculture Solutions',
      description: 'AI-driven crop monitoring, pest detection, and yield prediction using smart sensors and data analytics. Optimize farming operations with precision agriculture technologies and sustainable farming practices.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Crop health monitoring with drones and IoT sensors',
        'Predictive analytics for yield optimization',
        'Smart irrigation and resource management',
        'Pest and disease detection using computer vision',
        'Soil analysis and nutrient optimization',
        'Weather forecasting and climate adaptation',
        'Automated farming equipment integration',
        'Supply chain optimization for agricultural products'
      ],
      additionalInfo: {
        title: 'Technology Stack',
        content: 'Our agriculture solutions leverage computer vision, satellite imagery analysis, IoT sensor networks, and machine learning algorithms to provide comprehensive farm management capabilities.'
      }
    },
    {
      id: 'healthcare',
      category: 'Healthcare',
      title: 'Healthcare AI Systems',
      description: 'Personalized medicine, patient monitoring systems, and diagnostic tools employing machine learning, deep learning, and computer vision. Improve patient outcomes while reducing healthcare costs.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Medical imaging analysis and diagnosis support',
        'Patient risk assessment and monitoring',
        'Personalized treatment recommendations',
        'Drug discovery and development acceleration',
        'Electronic health record optimization',
        'Clinical trial management and analysis',
        'Telemedicine and remote patient monitoring',
        'Healthcare workflow automation'
      ],
      additionalInfo: {
        title: 'Clinical Applications',
        content: 'Advanced deep learning models for radiology, pathology, and genomics analysis, combined with natural language processing for clinical documentation and decision support systems.'
      }
    },
    {
      id: 'environment',
      category: 'Environment',
      title: 'Environmental Monitoring',
      description: 'AI-enhanced water management, air pollution control, environmental monitoring, and meteorological predictions. Comprehensive solutions for climate change mitigation and environmental protection.',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Air and water quality monitoring systems',
        'Climate modeling and weather prediction',
        'Carbon footprint tracking and reduction',
        'Biodiversity conservation and ecosystem management',
        'Renewable energy integration planning',
        'Waste management optimization',
        'Environmental impact assessment',
        'Sustainability reporting and compliance'
      ],
      additionalInfo: {
        title: 'Environmental Impact',
        content: 'Satellite data analysis, sensor networks, and predictive modeling to support environmental protection initiatives and sustainable development goals.'
      }
    },
    {
      id: 'education',
      category: 'Education',
      title: 'Adaptive Learning Platforms',
      description: 'Customized content delivery based on student performance, using natural language processing and adaptive learning paths. Transform education with personalized AI-driven learning experiences.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Personalized learning paths and content delivery',
        'Student performance analytics and insights',
        'Adaptive assessment and feedback systems',
        'AI tutoring and learning assistance',
        'Curriculum optimization and planning',
        'Learning outcome prediction',
        'Educational content generation',
        'Multilingual learning support'
      ],
      additionalInfo: {
        title: 'Learning Technologies',
        content: 'Natural language processing, recommendation systems, and cognitive modeling to create personalized educational experiences that adapt to individual learning styles.'
      }
    },
    {
      id: 'sports',
      category: 'Sports',
      title: 'Sports Performance Analytics',
      description: 'AI for player tracking, performance optimization, and personalized training through motion analysis and predictive analytics. Enhance athletic performance and reduce injury risks.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Player performance tracking and analysis',
        'Injury risk assessment and prevention',
        'Game strategy optimization and analysis',
        'Personalized training recommendations',
        'Fan engagement and experience enhancement',
        'Team composition and tactical analysis',
        'Equipment optimization and safety',
        'Sports broadcasting and analytics'
      ],
      additionalInfo: {
        title: 'Sports Technology',
        content: 'Computer vision, motion capture, and biomechanical analysis combined with machine learning to optimize athletic performance and reduce injury rates.'
      }
    },
    {
      id: 'energy',
      category: 'Energy',
      title: 'Smart Energy Solutions',
      description: 'Renewable energy optimization, smart grid management, and energy demand forecasting through predictive modeling. Build sustainable energy systems for the future.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Energy consumption optimization and forecasting',
        'Renewable energy integration and management',
        'Smart grid stability and load balancing',
        'Energy efficiency monitoring and improvement',
        'Battery storage optimization',
        'Electric vehicle charging management',
        'Energy trading and market analysis',
        'Predictive maintenance for energy infrastructure'
      ],
      additionalInfo: {
        title: 'Energy Innovation',
        content: 'Advanced algorithms for energy forecasting, grid optimization, and renewable energy integration to support sustainable energy transition and grid modernization.'
      }
    }
  ];
};

  const solutions = getSolutions();
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);

  // Update selected solution when language changes
  useEffect(() => {
    const updatedSolutions = getSolutions();
    const currentIndex = solutions.findIndex(solution => solution.id === selectedSolution?.id);
    if (currentIndex !== -1 && updatedSolutions[currentIndex]) {
      setSelectedSolution(updatedSolutions[currentIndex]);
    } else {
      setSelectedSolution(updatedSolutions[0]);
    }
  }, [language]);

  return (
    <SolutionsWrapper>
      <SolutionsContainer>
        <div className="section-header">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {language === 'el' ? 'Τομείς λειτουργίας που υποστηρίζουμε' : 'Operations areas we support'}
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {language === 'el' ? 'Εξειδικευμένες λύσεις ΤΝ προσαρμοσμένες για διαφορετικές βιομηχανίες και λειτουργικούς τομείς.' : 'Specialized AI solutions tailored for different industries and operational areas.'}
          </motion.p>
        </div>
      

      <SolutionsLayout>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SolutionsList>
            <h3>{language === 'el' ? 'Όλες οι Λύσεις' : 'All Solutions'}</h3>
            {solutions.map((solution) => (
              <SolutionItem
                key={solution.id}
                className={selectedSolution?.id === solution.id ? 'active' : ''}
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="title">{solution.title}</div>
                <div className="category">{solution.category}</div>
              </SolutionItem>
            ))}
          </SolutionsList>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <SolutionDetail
              key={selectedSolution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div 
                className="detail-image"
                style={{ backgroundImage: `url(${selectedSolution.image})` }}
              >
                <div className="category-badge">{selectedSolution.category}</div>
              </div>
              <div className="detail-content">
                <h3>{selectedSolution.title}</h3>
                <p className="description">{selectedSolution.description}</p>
                
                <div className="features-title">{language === 'el' ? 'Βασικά Χαρακτηριστικά' : 'Key Features'}</div>
                <ul className="features-list">
                  {selectedSolution.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                {selectedSolution.additionalInfo && (
                  <div className="additional-info">
                    <div className="info-title">{selectedSolution.additionalInfo.title}</div>
                    <div className="info-text">{selectedSolution.additionalInfo.content}</div>
                  </div>
                )}
              </div>
            </SolutionDetail>
          </AnimatePresence>
        </motion.div>
      </SolutionsLayout>
      </SolutionsContainer>
    </SolutionsWrapper>
  );
};

export default IndustrySolutions;
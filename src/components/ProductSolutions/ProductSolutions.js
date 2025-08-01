import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from '../../hooks/useTranslation';

const ProductWrapper = styled.section`
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

const ProductContainer = styled.div`
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

const ProductLayout = styled.div`
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

const ProductList = styled.div`
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

const ProductItem = styled.div`
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
  
  .name {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    font-family: 'Inter', sans-serif;
  }
  
  .category {
    font-size: 0.875rem;
    opacity: 0.8;
  }
`;

const ProductDetail = styled(motion.div)`
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: fit-content;
  
  .detail-image {
    height: 250px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #f8f9fa;
    position: relative;
    margin-top: 1.5rem;
    border-radius: 12px;
    margin-left: 2rem;
    margin-right: 2rem;
    
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
      margin-bottom: 0.5rem;
      font-family: 'Poppins', sans-serif;
      line-height: 1.3;
    }
    
    .platform {
      font-size: 1rem;
      color: #0073E6;
      font-weight: 600;
      margin-bottom: 1rem;
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
    
    .target-audience {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 1rem;
      margin-top: 1rem;
      
      .audience-title {
        font-size: 0.9rem;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
        font-family: 'Poppins', sans-serif;
      }
      
      .audience-text {
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

const ProductSolutions = () => {
  const { language } = useTranslation();

  const getContent = () => {
    if (language === 'el') {
      return {
        title: 'Χαρακτηριστικά Πλατφόρμας',
        description: 'Ανακαλύψτε τις περιεκτικές λειτουργίες της Πλατφόρμας Εξατομικευμένης Μάθησης με Υποβοήθηση ΤΝ, σχεδιασμένης να επαναστατήσει την εκπαίδευση μέσω έξυπνης τεχνολογίας.',
        featuresTitle: 'Χαρακτηριστικά Πλατφόρμας',
        keyFeatures: 'Κύρια Χαρακτηριστικά',
        implementationFocus: 'Εστίαση Υλοποίησης'
      };
    }
    return {
      title: 'Platform Features',
      description: 'Discover the comprehensive functionalities of our AI-Assisted Personalized Learning Platform, designed to revolutionize education through intelligent technology.',
      featuresTitle: 'Platform Features',
      keyFeatures: 'Key Features',
      implementationFocus: 'Implementation Focus'
    };
  };

  const getProducts = () => {
    if (language === 'el') {
      return [
        {
          id: 'adaptive-learning',
          name: 'Αλγόριθμοι Προσαρμοστικής Μάθησης',
          category: 'Βασική Τεχνολογία',
          platform: 'Μηχανή Μηχανικής Μάθησης',
          description: 'Προηγμένοι αλγόριθμοι ΤΝ που συνεχώς αναλύουν τα μοτίβα μάθησης, προσαρμόζουν τη δυσκολία του περιεχομένου και βελτιστοποιούν τις μαθησιακές διαδρομές βάσει της ατομικής απόδοσης και προτιμήσεων των μαθητών.',
          features: [
            'Ανάλυση Απόδοσης σε Πραγματικό Χρόνο',
            'Δυναμική Προσαρμογή Περιεχομένου',
            'Αναγνώριση Στυλ Μάθησης',
            'Βελτιστοποίηση Δυσκολίας',
            'Μοντέλα Πρόβλεψης Προόδου',
            'Εξατομικευμένος Ρυθμός',
            'Ανίχνευση Κενών Γνώσης',
            'Βελτιστοποίηση Μαθησιακών Αποτελεσμάτων'
          ],
          targetAudience: {
            title: 'Εστίαση Υλοποίησης',
            content: 'Βασική μηχανή που τροφοδοτεί τις εξατομικευμένες μαθησιακές εμπειρίες, βελτιώνεται συνεχώς βάσει των αλληλεπιδράσεων και αποτελεσμάτων των μαθητών.'
          }
        },
        {
          id: 'personalized-content',
          name: 'Εξατομικευμένο Περιεχόμενο & Συστάσεις',
          category: 'Διαχείριση Περιεχομένου',
          platform: 'Έξυπνο Σύστημα Περιεχομένου',
          description: 'Έξυπνο σύστημα παροχής περιεχομένου που επιμελείται και παρουσιάζει εκπαιδευτικό υλικό προσαρμοσμένο στις ατομικές μαθησιακές προτιμήσεις, με έξυπνες συστάσεις για βέλτιστες μαθησιακές διαδρομές.',
          features: [
            'Μηχανή Συστάσεων Περιεχομένου',
            'Υποστήριξη Πολυτροπικού Περιεχομένου',
            'Προσαρμογή Μαθησιακής Διαδρομής',
            'Δημιουργία Διαδραστικού Περιεχομένου',
            'Εξατομικευμένες Μαθησιακές Προτάσεις',
            'Καθοδήγηση Επόμενης Καλύτερης Ενέργειας',
            'Συστάσεις Σταδιοδρομίας',
            'Προσαρμοστικοί Αλγόριθμοι Συστάσεων'
          ],
          targetAudience: {
            title: 'Εστίαση Υλοποίησης',
            content: 'Διασφαλίζει ότι κάθε μαθητής λαμβάνει περιεχόμενο και συστάσεις βελτιστοποιημένες για το μοναδικό μαθησιακό ταξίδι και τους στόχους σταδιοδρομίας του.'
          }
        },
        {
          id: 'progress-tracking',
          name: 'Παρακολούθηση Προόδου σε Πραγματικό Χρόνο',
          category: 'Αναλυτικά & Παρακολούθηση',
          platform: 'Πίνακας Ελέγχου Μαθησιακών Αναλυτικών',
          description: 'Ολοκληρωμένο σύστημα παρακολούθησης που παρέχει λεπτομερείς πληροφορίες για την πρόοδο της μάθησης, μετρήσεις απόδοσης και αναλυτικά επιτευγμάτων σε πραγματικό χρόνο.',
          features: [
            'Ζωντανοί Πίνακες Ελέγχου Απόδοσης',
            'Λεπτομερείς Αναφορές Προόδου',
            'Παρακολούθηση Επιτευγμάτων',
            'Αναλυτικά Διαχείρισης Χρόνου',
            'Παρακολούθηση Ταχύτητας Μάθησης',
            'Καθορισμός & Παρακολούθηση Στόχων',
            'Εργαλεία Σύγκρισης Απόδοσης',
            'Αυτόματες Ειδοποιήσεις Προόδου'
          ],
          targetAudience: {
            title: 'Εστίαση Υλοποίησης',
            content: 'Παρέχει στους μαθητές και εκπαιδευτικούς περιεκτική ορατότητα στην πρόοδο της μάθησης και τις τάσεις απόδοσης.'
          }
        },
        {
          id: 'ai-chatbot',
          name: 'Λύσεις Chatbot ΤΝ',
          category: 'Διαδραστική Υποστήριξη',
          platform: 'Σύστημα Συνομιλιακής ΤΝ',
          description: 'Έξυπνο chatbot που παρέχει 24/7 μαθησιακή υποστήριξη, απαντά σε ερωτήσεις, παρέχει εξηγήσεις και καθοδηγεί τους μαθητές στο μαθησιακό τους ταξίδι.',
          features: [
            'Επεξεργασία Φυσικής Γλώσσας',
            'Απαντήσεις με Επίγνωση Συμφραζομένων',
            'Διαθεσιμότητα 24/7',
            'Υποστήριξη Πολλών Γλωσσών',
            'Καθοδήγηση Μαθησιακής Διαδρομής',
            'Άμεση Επίλυση Ερωτημάτων',
            'Εξατομικευμένες Αλληλεπιδράσεις',
            'Υποστήριξη Ενσωμάτωσης Φωνής'
          ],
          targetAudience: {
            title: 'Εστίαση Υλοποίησης',
            content: 'Παρέχει άμεση υποστήριξη και καθοδήγηση, ενισχύοντας τη μαθησιακή εμπειρία μέσω έξυπνης συνομιλίας.'
          }
        },
        {
          id: 'predictive-analytics',
          name: 'Μηχανή Προγνωστικών Αναλυτικών',
          category: 'Προηγμένα Αναλυτικά',
          platform: 'Σύστημα Προβλέψεων & Πληροφοριών',
          description: 'Προηγμένη μηχανή αναλυτικών που προβλέπει τα μαθησιακά αποτελέσματα, εντοπίζει μαθητές σε κίνδυνο και παρέχει εφαρμόσιμες πληροφορίες για βελτιωμένη εκπαιδευτική επιτυχία.',
          features: [
            'Πρόβλεψη Μαθησιακών Αποτελεσμάτων',
            'Μοντέλα Αξιολόγησης Κινδύνου',
            'Πρόβλεψη Απόδοσης',
            'Συστάσεις Παρέμβασης',
            'Ανάλυση Μοτίβων Επιτυχίας',
            'Ειδοποιήσεις Πρόληψης Εγκατάλειψης',
            'Βελτιστοποίηση Πόρων',
            'Ανάλυση Τάσεων & Αναφορές'
          ],
          targetAudience: {
            title: 'Εστίαση Υλοποίησης',
            content: 'Επιτρέπει προληπτικές παρεμβάσεις και στρατηγικές αποφάσεις για μεγιστοποίηση της μαθησιακής επιτυχίας και αποτελεσμάτων.'
          }
        },
        {
          id: 'ai-vision-neural',
          name: 'Προηγμένη Όραση ΤΝ & Νευρωνική Επεξεργασία',
          category: 'Βαθιά Μάθηση',
          platform: 'Σύστημα Όρασης ΤΝ & Νευρωνικών Δικτύων',
          description: 'Εξελιγμένο πλαίσιο νευρωνικών δικτύων συνδυασμένο με δυνατότητες υπολογιστικής όρασης για ανάλυση οπτικής μάθησης, αναγνώριση μοτίβων και έξυπνη λήψη αποφάσεων.',
          features: [
            'Ανάλυση Οπτικού Περιεχομένου',
            'Μοντέλα Βαθιάς Μάθησης',
            'Αναγνώριση Μοτίβων',
            'Ανίχνευση Αφοσίωσης',
            'Διαδραστικά Οπτικά Στοιχεία',
            'Αυτοματοποιημένη Εξαγωγή Χαρακτηριστικών',
            'Υποστήριξη Μεταφοράς Μάθησης',
            'Ενσωμάτωση Επαυξημένης Πραγματικότητας'
          ],
          targetAudience: {
            title: 'Εστίαση Υλοποίησης',
            content: 'Παρέχει προηγμένη νοημοσύνη ΤΝ για οπτικές μαθησιακές εμπειρίες και εξελιγμένη ανάλυση μοτίβων.'
          }
        },
        {
          id: 'smart-automation',
          name: 'Έξυπνος Αυτοματισμός & Ενσωμάτωση IoT',
          category: 'Συνδεδεμένη Μάθηση',
          platform: 'Κέντρο Έξυπνου Αυτοματισμού',
          description: 'Ολοκληρωμένη σουίτα αυτοματισμού με νοημοσύνη IoT που συνδέει μαθησιακές συσκευές, βελτιστοποιεί εκπαιδευτικές διαδικασίες και βελτιστοποιεί τεχνολογίες έξυπνης τάξης.',
          features: [
            'Αυτοματισμός Ροής Εργασίας',
            'Συνδεσιμότητα Συσκευών',
            'Υποστήριξη Έξυπνης Τάξης',
            'Αυτοματισμός Αξιολόγησης',
            'Παρακολούθηση Περιβάλλοντος',
            'Διαχείριση Πόρων',
            'Επεξεργασία Δεδομένων σε Πραγματικό Χρόνο',
            'Έλεγχοι Ασφάλειας & Ιδιωτικότητας'
          ],
          targetAudience: {
            title: 'Εστίαση Υλοποίησης',
            content: 'Βελτιστοποιεί τις εκπαιδευτικές λειτουργίες ενώ συνδέει έξυπνα μαθησιακά περιβάλλοντα για ενισχυμένη ενσωμάτωση τεχνολογίας.'
          }
        }
      ];
    }
    return [
      {
        id: 'adaptive-learning',
        name: 'Adaptive Learning Algorithms',
        category: 'Core Technology',
        platform: 'Machine Learning Engine',
        description: 'Advanced AI algorithms that continuously analyze learning patterns, adapt content difficulty, and optimize learning paths based on individual student performance and preferences.',
        features: [
          'Real-time Performance Analysis',
          'Dynamic Content Adjustment',
          'Learning Style Recognition',
          'Difficulty Optimization',
          'Progress Prediction Models',
          'Personalized Pacing',
          'Knowledge Gap Detection',
          'Learning Outcome Optimization'
        ],
        targetAudience: {
          title: 'Implementation Focus',
          content: 'Core engine powering personalized learning experiences, continuously improving based on student interactions and learning outcomes.'
        }
      },
      {
        id: 'personalized-content',
        name: 'Personalized Content & Recommendations',
        category: 'Content Management',
        platform: 'Intelligent Content System',
        description: 'Smart content delivery system that curates and presents educational materials tailored to individual learning preferences, with intelligent recommendations for optimal learning paths.',
        features: [
          'Content Recommendation Engine',
          'Multi-modal Content Support',
          'Learning Path Customization',
          'Interactive Content Generation',
          'Personalized Learning Suggestions',
          'Next-best-action Guidance',
          'Career Path Recommendations',
          'Adaptive Recommendation Algorithms'
        ],
        targetAudience: {
          title: 'Implementation Focus',
          content: 'Ensures every learner receives content and recommendations optimized for their unique learning journey and career goals.'
        }
      },
      {
        id: 'progress-tracking',
        name: 'Real-time Progress Tracking',
        category: 'Analytics & Monitoring',
        platform: 'Learning Analytics Dashboard',
        description: 'Comprehensive tracking system providing detailed insights into learning progress, performance metrics, and achievement analytics in real-time.',
        features: [
          'Live Performance Dashboards',
          'Detailed Progress Reports',
          'Achievement Tracking',
          'Time Management Analytics',
          'Learning Velocity Monitoring',
          'Goal Setting & Tracking',
          'Performance Comparison Tools',
          'Automated Progress Alerts'
        ],
        targetAudience: {
          title: 'Implementation Focus',
          content: 'Provides learners and educators with comprehensive visibility into learning progress and performance trends.'
        }
      },
      {
        id: 'ai-chatbot',
        name: 'AI Chatbot Solutions',
        category: 'Interactive Support',
        platform: 'Conversational AI System',
        description: 'Intelligent chatbot providing 24/7 learning support, answering questions, providing explanations, and guiding students through their learning journey.',
        features: [
          'Natural Language Processing',
          'Context-aware Responses',
          '24/7 Availability',
          'Multi-language Support',
          'Learning Path Guidance',
          'Instant Query Resolution',
          'Personalized Interactions',
          'Voice Integration Support'
        ],
        targetAudience: {
          title: 'Implementation Focus',
          content: 'Provides immediate support and guidance, enhancing the learning experience through intelligent conversation.'
        }
      },
      {
        id: 'predictive-analytics',
        name: 'Predictive Analytics Engine',
        category: 'Advanced Analytics',
        platform: 'Forecasting & Insights System',
        description: 'Advanced analytics engine that predicts learning outcomes, identifies at-risk students, and provides actionable insights for improved educational success.',
        features: [
          'Learning Outcome Prediction',
          'Risk Assessment Models',
          'Performance Forecasting',
          'Intervention Recommendations',
          'Success Pattern Analysis',
          'Dropout Prevention Alerts',
          'Resource Optimization',
          'Trend Analysis & Reporting'
        ],
        targetAudience: {
          title: 'Implementation Focus',
          content: 'Enables proactive interventions and strategic decisions to maximize learning success and outcomes.'
        }
      },
      {
        id: 'ai-vision-neural',
        name: 'Advanced AI Vision & Neural Processing',
        category: 'Deep Learning',
        platform: 'AI Vision & Neural Network System',
        description: 'Sophisticated neural network framework combined with computer vision capabilities for visual learning analysis, pattern recognition, and intelligent decision-making.',
        features: [
          'Visual Content Analysis',
          'Deep Learning Models',
          'Pattern Recognition',
          'Engagement Detection',
          'Interactive Visual Elements',
          'Automated Feature Extraction',
          'Transfer Learning Support',
          'Augmented Reality Integration'
        ],
        targetAudience: {
          title: 'Implementation Focus',
          content: 'Provides advanced AI intelligence for visual learning experiences and sophisticated pattern analysis.'
        }
      },
      {
        id: 'smart-automation',
        name: 'Smart Automation & IoT Integration',
        category: 'Connected Learning',
        platform: 'Intelligent Automation Hub',
        description: 'Comprehensive automation suite with IoT intelligence connecting learning devices, streamlining educational processes, and optimizing smart classroom technologies.',
        features: [
          'Workflow Automation',
          'Device Connectivity',
          'Smart Classroom Support',
          'Assessment Automation',
          'Environmental Monitoring',
          'Resource Management',
          'Real-time Data Processing',
          'Security & Privacy Controls'
        ],
        targetAudience: {
          title: 'Implementation Focus',
          content: 'Streamlines educational operations while connecting smart learning environments for enhanced technology integration.'
        }
      }
    ];
  };

  const content = getContent();
  const products = getProducts();

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <ProductWrapper>
      <ProductContainer>
      <div className="section-header">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {content.title}
        </motion.h2>
        <motion.p
          className="section-description"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {content.description}
        </motion.p>
      </div>

      <ProductLayout>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProductList>
            <h3>{content.featuresTitle}</h3>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                className={selectedProduct?.id === product.id ? 'active' : ''}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="name">{product.name}</div>
                <div className="category">{product.category}</div>
              </ProductItem>
            ))}
          </ProductList>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <ProductDetail
              key={selectedProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="detail-content">
                <h3>{selectedProduct.name}</h3>
                <div className="platform">{selectedProduct.platform}</div>
                <p className="description">{selectedProduct.description}</p>
                
                <div className="features-title">{content.keyFeatures}</div>
                <ul className="features-list">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                {selectedProduct.targetAudience && (
                  <div className="target-audience">
                    <div className="audience-title">{selectedProduct.targetAudience.title}</div>
                    <div className="audience-text">{selectedProduct.targetAudience.content}</div>
                  </div>
                )}
              </div>
              
            </ProductDetail>
          </AnimatePresence>
        </motion.div>
      </ProductLayout>
      </ProductContainer>
    </ProductWrapper>
  );
};

export default ProductSolutions;
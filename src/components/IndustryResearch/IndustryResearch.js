import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from '../../hooks/useTranslation';

const ResearchWrapper = styled.section`
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

const ResearchContainer = styled.div`
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

const ResearchLayout = styled.div`
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

const ResearchList = styled.div`
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

const ResearchItem = styled.div`
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

const ResearchDetail = styled(motion.div)`
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

const IndustryResearch = () => {
  const { language } = useTranslation();

  const getResearchAreas = () => {
    if (language === 'el') {
      return [
        {
          id: 'machine-learning',
          category: 'Θεμελιώδεις Αρχές ΤΝ',
          title: 'Μηχανική Μάθηση & Βαθιά Μάθηση',
          description: 'Ανάπτυξη προηγμένων αλγορίθμων ML και DL για υπολογιστική όραση, επεξεργασία φυσικής γλώσσας και προγνωστική ανάλυση. Η έρευνά μας εστιάζει στη δημιουργία πιο αποδοτικών, ισχυρών και επεξηγήσιμων συστημάτων ΤΝ.',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          features: [
            'Προηγμένες αρχιτεκτονικές νευρωνικών δικτύων',
            'Υπολογιστική όραση και αναγνώριση εικόνων',
            'Επεξεργασία και κατανόηση φυσικής γλώσσας',
            'Ενισχυτική μάθηση και βελτιστοποίηση',
            'Μεταφορά μάθησης και μάθηση με λίγα παραδείγματα',
            'Ομοσπονδιακή μάθηση και ML διατήρησης ιδιωτικότητας',
            'Edge computing και συμπίεση μοντέλων',
            'Συστήματα πολυτροπικής μάθησης'
          ],
          additionalInfo: {
            title: 'Ερευνητική Εστίαση',
            content: 'Η έρευνά μας στη ML επικεντρώνεται στην ανάπτυξη ερμηνεύσιμων μοντέλων, στη μείωση της υπολογιστικής πολυπλοκότητας και στη δημιουργία ισχυρών συστημάτων ΤΝ που μπορούν να λειτουργούν σε πραγματικά περιβάλλοντα με περιορισμένα δεδομένα.'
          }
        },
        {
          id: 'data-analytics',
          category: 'Επιστήμη Δεδομένων',
          title: 'Προηγμένη Ανάλυση Δεδομένων & Οπτικοποίηση',
          description: 'Επαναστατικές προσεγγίσεις στη στατιστική ανάλυση, επεξεργασία μεγάλων δεδομένων και διαδραστικές τεχνικές οπτικοποίησης για πολύπλοκα σύνολα δεδομένων. Εξειδίκευση σε αναλυτικά πραγματικού χρόνου και προγνωστική μοντελοποίηση.',
          image: 'https://img.myloview.com/stickers/big-data-visualization-abstract-data-radial-plot-700-192897351.jpg',
          features: [
            'Επεξεργασία μεγάλων δεδομένων και κατανεμημένη υπολογιστική',
            'Αναλυτικά streaming πραγματικού χρόνου',
            'Διαδραστικές πλατφόρμες οπτικοποίησης δεδομένων',
            'Ανάλυση χρονοσειρών και πρόβλεψη',
            'Στατιστική μοντελοποίηση και έλεγχος υποθέσεων',
            'Εξόρυξη δεδομένων και αναγνώριση προτύπων',
            'Επιχειρηματική νοημοσύνη και υποστήριξη αποφάσεων',
            'Αυτοματοποιημένες ιδέες και ανίχνευση ανωμαλιών'
          ],
          additionalInfo: {
            title: 'Τεχνική Προσέγγιση',
            content: 'Αξιοποιούμε προηγμένες στατιστικές μεθόδους, πλατφόρμες cloud computing και προηγμένα frameworks οπτικοποίησης για την εξαγωγή σημαντικών ιδεών από μεγάλης κλίμακας σύνολα δεδομένων.'
          }
        },
        {
          id: 'computer-vision',
          category: 'Εφαρμογές ΤΝ',
          title: 'Υπολογιστική Όραση & Επεξεργασία Εικόνας',
          description: 'Προηγμένες τεχνολογίες υπολογιστικής όρασης για εφαρμογές ακριβείας στη γεωργία, υγειονομική περίθαλψη και βιομηχανικό αυτοματισμό. Τα συστήματα επεξεργασίας εικόνας μας επιτρέπουν ακριβή παρακολούθηση, ανάλυση και λήψη αποφάσεων σε κλίμακα.',
          image: '/images/computer-vision.jpeg',
          features: [
            'Συστήματα ανίχνευσης και αναγνώρισης αντικειμένων',
            'Ανάλυση ιατρικών εικόνων και διαγνωστικά',
            'Παρακολούθηση και αξιολόγηση γεωργικών καλλιεργειών',
            'Βιομηχανικός έλεγχος ποιότητας και επιθεώρηση',
            'Επεξεργασία βίντεο πραγματικού χρόνου και αναλυτικά',
            'Αναγνώριση προσώπου και βιομετρικά συστήματα',
            'Αντίληψη αυτόνομων οχημάτων',
            'Ανάλυση δορυφορικών εικόνων και drone'
          ],
          additionalInfo: {
            title: 'Τεχνολογία Όρασης',
            content: 'Η έρευνά μας στην υπολογιστική όραση συνδυάζει βαθιά μάθηση με προηγμένες τεχνικές επεξεργασίας εικόνας για να παρέχει ισχυρές λύσεις για εφαρμογές πραγματικού κόσμου σε πολλαπλές βιομηχανίες.'
          }
        },
        {
          id: 'nlp-processing',
          category: 'ΤΝ Γλώσσας',
          title: 'Επεξεργασία Φυσικής Γλώσσας',
          description: 'Προηγμένη έρευνα NLP για κατανόηση κειμένου, δημιουργία και πολυγλωσσική επικοινωνία. Ανάπτυξη έξυπνων συστημάτων που μπορούν να επεξεργάζονται και να κατανοούν την ανθρώπινη γλώσσα σε πλαίσιο.',
          image: '/images/nlp-healthcare.jpg',
          features: [
            'Ταξινόμηση κειμένου και ανάλυση συναισθήματος',
            'Μηχανική μετάφραση και πολυγλωσσική υποστήριξη',
            'Συνομιλιακή ΤΝ και ανάπτυξη chatbot',
            'Επεξεργασία εγγράφων και εξαγωγή πληροφοριών',
            'Ερωτήσεις-απαντήσεις και ανάκτηση γνώσης',
            'Περίληψη κειμένου και δημιουργία περιεχομένου',
            'Αναγνώριση και σύνδεση ονομασμένων οντοτήτων',
            'Fine-tuning γλωσσικών μοντέλων και βελτιστοποίηση'
          ],
          additionalInfo: {
            title: 'Κατανόηση Γλώσσας',
            content: 'Προηγμένες αρχιτεκτονικές transformer και μεγάλα γλωσσικά μοντέλα προσαρμοσμένα για εξειδικευμένους τομείς συμπεριλαμβανομένης της επιστημονικής βιβλιογραφίας, υγειονομικής περίθαλψης και τεχνικής τεκμηρίωσης.'
          }
        },
        {
          id: 'predictive-analytics',
          category: 'Επιστήμη Δεδομένων',
          title: 'Προγνωστική Ανάλυση & Πρόβλεψη',
          description: 'Προηγμένα συστήματα προγνωστικής μοντελοποίησης και πρόβλεψης για επιχειρηματική νοημοσύνη, αξιολόγηση κινδύνου και στρατηγικό σχεδιασμό. Μετατροπή δεδομένων σε ενεργήσιμες ιδέες για τεκμηριωμένη λήψη αποφάσεων.',
          image: '/images/predictive-analytics.jpg',
          features: [
            'Πρόβλεψη χρονοσειρών και ανάλυση τάσεων',
            'Μοντέλα πρόβλεψης και αξιολόγησης κινδύνου',
            'Πρόβλεψη ζήτησης αγοράς',
            'Πρόβλεψη συμπεριφοράς πελατών',
            'Βελτιστοποίηση εφοδιαστικής αλυσίδας',
            'Χρηματοοικονομική μοντελοποίηση και ανάλυση',
            'Μετρικές απόδοσης και παρακολούθηση KPI',
            'Ανίχνευση ανωμαλιών και παρακολούθηση'
          ],
          additionalInfo: {
            title: 'Προγνωστική Μοντελοποίηση',
            content: 'Μέθοδοι στατιστικής μάθησης σε συνδυασμό με αλγορίθμους μηχανικής μάθησης για τη δημιουργία ισχυρών προγνωστικών μοντέλων που μπορούν να χειριστούν την αβεβαιότητα και να παρέχουν διαστήματα εμπιστοσύνης.'
          }
        }
      ];
    }
      return [
        {
          id: 'machine-learning',
          category: 'AI Fundamentals',
          title: 'Machine Learning & Deep Learning',
          description: 'Developing cutting-edge ML and DL algorithms for computer vision, natural language processing, and predictive analytics. Our research focuses on creating more efficient, robust, and explainable AI systems.',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
          features: [
            'Advanced neural network architectures',
            'Computer vision and image recognition',
            'Natural language processing and understanding',
            'Reinforcement learning and optimization',
            'Transfer learning and few-shot learning',
            'Federated learning and privacy-preserving ML',
            'Edge computing and model compression',
            'Multi-modal learning systems'
          ],
          additionalInfo: {
            title: 'Research Focus',
            content: 'Our ML research emphasizes developing interpretable models, reducing computational complexity, and creating robust AI systems that can operate in real-world environments with limited data.'
          }
        },
        {
          id: 'data-analytics',
          category: 'Data Science',
          title: 'Advanced Data Analytics & Visualization',
          description: 'Revolutionary approaches to statistical analysis, big data processing, and interactive visualization techniques for complex datasets. Specializing in real-time analytics and predictive modeling.',
          image: 'https://img.myloview.com/stickers/big-data-visualization-abstract-data-radial-plot-700-192897351.jpg',
          features: [
            'Big data processing and distributed computing',
            'Real-time streaming analytics',
            'Interactive data visualization platforms',
            'Time series analysis and forecasting',
            'Statistical modeling and hypothesis testing',
            'Data mining and pattern recognition',
            'Business intelligence and decision support',
            'Automated insights and anomaly detection'
          ],
          additionalInfo: {
            title: 'Technical Approach',
            content: 'We leverage advanced statistical methods, cloud computing platforms, and cutting-edge visualization frameworks to extract meaningful insights from large-scale datasets.'
          }
        },
        {
          id: 'computer-vision',
          category: 'AI Applications',
          title: 'Computer Vision & Image Processing',
          description: 'Advanced computer vision technologies for precision applications in agriculture, healthcare, and industrial automation. Our image processing systems enable accurate monitoring, analysis, and decision-making at scale.',
          image: '/images/computer-vision.jpeg',
          features: [
            'Object detection and recognition systems',
            'Medical image analysis and diagnostics',
            'Agricultural crop monitoring and assessment',
            'Industrial quality control and inspection',
            'Real-time video processing and analytics',
            'Facial recognition and biometric systems',
            'Autonomous vehicle perception',
            'Satellite and drone imagery analysis'
          ],
          additionalInfo: {
            title: 'Vision Technology',
            content: 'Our computer vision research combines deep learning with advanced image processing techniques to deliver robust solutions for real-world applications across multiple industries.'
          }
        },
        {
          id: 'nlp-processing',
          category: 'Language AI',
          title: 'Natural Language Processing',
          description: 'Cutting-edge NLP research for text understanding, generation, and multilingual communication. Developing intelligent systems that can process and understand human language in context.',
          image: '/images/nlp-healthcare.jpg',
          features: [
            'Text classification and sentiment analysis',
            'Machine translation and multilingual support',
            'Conversational AI and chatbot development',
            'Document processing and information extraction',
            'Question answering and knowledge retrieval',
            'Text summarization and content generation',
            'Named entity recognition and linking',
            'Language model fine-tuning and optimization'
          ],
          additionalInfo: {
            title: 'Language Understanding',
            content: 'Advanced transformer architectures and large language models adapted for specialized domains including scientific literature, healthcare, and technical documentation.'
          }
        },
        {
          id: 'predictive-analytics',
          category: 'Data Science',
          title: 'Predictive Analytics & Forecasting',
          description: 'Advanced predictive modeling and forecasting systems for business intelligence, risk assessment, and strategic planning. Turning data into actionable insights for informed decision-making.',
          image: '/images/predictive-analytics.jpg',
          features: [
            'Time series forecasting and trend analysis',
            'Risk prediction and assessment models',
            'Market demand forecasting',
            'Customer behavior prediction',
            'Supply chain optimization',
            'Financial modeling and analysis',
            'Performance metrics and KPI tracking',
            'Anomaly detection and monitoring'
          ],
          additionalInfo: {
            title: 'Predictive Modeling',
            content: 'Statistical learning methods combined with machine learning algorithms to create robust predictive models that can handle uncertainty and provide confidence intervals.'
          }
        }
      ];
    };

  const researchAreas = getResearchAreas();

  const [selectedResearch, setSelectedResearch] = useState(researchAreas[0]);

  // Update selected research when language changes
  useEffect(() => {
    const updatedAreas = getResearchAreas();
    const currentIndex = researchAreas.findIndex(area => area.id === selectedResearch?.id);
    if (currentIndex !== -1 && updatedAreas[currentIndex]) {
      setSelectedResearch(updatedAreas[currentIndex]);
    } else {
      setSelectedResearch(updatedAreas[0]);
    }
  }, [language]);

  return (
    <ResearchWrapper>
      <ResearchContainer>
        <div className="section-header">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {language === 'el' ? 'Ερευνητικοί Τομείς & Εστίαση' : 'Research Areas & Focus'}
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {language === 'el' ? 'Προηγμένη έρευνα σε πολλαπλούς τομείς ΤΝ, ωθώντας τα όρια της τεχνητής νοημοσύνης και μηχανικής μάθησης.' : 'Cutting-edge research across multiple AI disciplines, pushing the boundaries of artificial intelligence and machine learning.'}
          </motion.p>
        </div>

      <ResearchLayout>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ResearchList>
            <h3>{language === 'el' ? 'Ερευνητικοί Τομείς' : 'Research Areas'}</h3>
            {researchAreas.map((research) => (
              <ResearchItem
                key={research.id}
                className={selectedResearch?.id === research.id ? 'active' : ''}
                onClick={() => setSelectedResearch(research)}
              >
                <div className="title">{research.title}</div>
                <div className="category">{research.category}</div>
              </ResearchItem>
            ))}
          </ResearchList>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <ResearchDetail
              key={selectedResearch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div 
                className="detail-image"
                style={{ backgroundImage: `url(${selectedResearch.image})` }}
              >
                <div className="category-badge">{selectedResearch.category}</div>
              </div>
              <div className="detail-content">
                <h3>{selectedResearch.title}</h3>
                <p className="description">{selectedResearch.description}</p>
                
                <div className="features-title">{language === 'el' ? 'Ερευνητικοί Τομείς Εστίασης' : 'Research Focus Areas'}</div>
                <ul className="features-list">
                  {selectedResearch.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                {selectedResearch.additionalInfo && (
                  <div className="additional-info">
                    <div className="info-title">{selectedResearch.additionalInfo.title}</div>
                    <div className="info-text">{selectedResearch.additionalInfo.content}</div>
                  </div>
                )}
              </div>
            </ResearchDetail>
          </AnimatePresence>
        </motion.div>
      </ResearchLayout>
      </ResearchContainer>
    </ResearchWrapper>
  );
};

export default IndustryResearch;
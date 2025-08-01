import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
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
    display: flex;
    gap: 2rem;
    
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
    max-width: 500px;
    opacity: 0.95;
    font-weight: 400;
    color: #cbd5e1;
  }
`;

const SectionBase = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    
    h2 {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      font-family: 'Poppins', sans-serif;
      line-height: 1.2;
    }
    
    .see-all-link {
      color: #0073E6;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      &:hover {
        text-decoration: underline;
      }
      
      &::after {
        content: '→';
        transition: transform 0.3s ease;
      }
      
      &:hover::after {
        transform: translateX(3px);
      }
    }
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
  
  &.four-column {
    grid-template-columns: repeat(4, 1fr);
    
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  &.two-rows {
    grid-template-columns: repeat(4, 1fr);
    
    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 968px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
`;

const NewsCard = styled(motion.article)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  
  .image {
    height: 160px;
    background-size: cover;
    background-position: center;
    position: relative;
    
    .category-badge {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      background: rgba(0, 115, 230, 0.9);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
  
  .content {
    padding: 1.25rem;
    
    .date {
      color: #666;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.75rem;
      font-family: 'Poppins', sans-serif;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .excerpt {
      color: #525252;
      font-size: 0.875rem;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;


const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Article titles and excerpts based on language
  const getArticleContent = (index) => {
    const englishContent = [
      {
        title: 'AI4.GR Leads Digital Inclusion with "LEAD YOUR WAY" Project',
        excerpt: 'Cross-European initiative spanning eight countries tackles employment gaps for individuals with Down syndrome and intellectual disabilities through innovative digital tools.',
        category: 'EU Projects'
      },
      {
        title: 'Empowering Older Adults: STEP‑UP Project Tackles Fall Prevention',
        excerpt: 'Innovative project (2024–2027) develops tailored educational tools and e-learning platforms to help elderly individuals in Greece and Cyprus maintain safety and independence.',
        category: 'EU Projects'
      },
      {
        title: 'Advancing Stroke Rehabilitation Research',
        excerpt: 'AI4.GR co-founders conduct significant research combining neuroimaging, neurophysiological and biomechanical data with machine learning to understand recovery trajectories.',
        category: 'Research'
      },
      {
        title: 'AI Enhances Occupational Therapy: Insights from a Scoping Review',
        excerpt: 'AI4.GR researchers contribute to comprehensive review examining how artificial intelligence can enhance assessment in occupational therapy through sensor data and pattern recognition.',
        category: 'Research'
      },
      {
        title: 'Machine Learning Predicts Language and Cognition Recovery After Stroke',
        excerpt: 'AI4.GR researchers lead comprehensive review achieving up to 97% recall rates in predicting cognitive outcomes using speech, imaging and clinical data.',
        category: 'Research'
      },
      {
        title: 'Visualising Gait Data for Better Stroke Diagnosis',
        excerpt: 'AI4.GR-led study explores visual analytics and explainable machine learning to make complex biomechanical data more accessible to clinicians.',
        category: 'Research'
      },
      {
        title: 'Improving Stroke Outcome Predictions with Explainable AI',
        excerpt: 'AI4.GR researchers develop explainable machine-learning pipeline addressing data imbalance challenges while providing transparent clinical predictions.',
        category: 'Research'
      },
      {
        title: 'Movement Programmes Boost Mobility for Dementia Patients',
        excerpt: 'Case study involving AI4.GR co-founder Prof. Nikos Aggelousis examines effects of personalised movement programmes on dementia patient gait characteristics.',
        category: 'Research'
      },
      {
        title: 'Explainable AI Identifies Biomarkers for ACL Injury',
        excerpt: 'AI4.GR researchers co-develop explainable machine learning method achieving 94.95% accuracy in analyzing gait patterns for ACL injury risk factors.',
        category: 'Research'
      },
      {
        title: 'AI4.GR Engages Creative Industries at AI X Thessaloniki',
        excerpt: 'Co-founder Dr Serafeim Moustakidis speaks at prestigious conference exploring how generative AI will reshape creative industries.',
        category: 'Events'
      }
    ];

    const greekContent = [
      {
        title: 'Η AI4.GR Ηγείται της Ψηφιακής Ένταξης με το Πρόγραμμα "LEAD YOUR WAY"',
        excerpt: 'Διευρωπαϊκή πρωτοβουλία που καλύπτει οκτώ χώρες αντιμετωπίζει τα κενά απασχόλησης για άτομα με σύνδρομο Down και νοητική αναπηρία μέσω καινοτόμων ψηφιακών εργαλείων.',
        category: 'Ευρωπαϊκά Προγράμματα'
      },
      {
        title: 'Ενδυνάμωση Ηλικιωμένων: Το Πρόγραμμα STEP‑UP Αντιμετωπίζει την Πρόληψη Πτώσεων',
        excerpt: 'Καινοτόμο πρόγραμμα (2024–2027) αναπτύσσει εξειδικευμένα εκπαιδευτικά εργαλεία και πλατφόρμες ηλεκτρονικής μάθησης για να βοηθήσει ηλικιωμένους στην Ελλάδα και Κύπρο να διατηρήσουν την ασφάλεια και ανεξαρτησία τους.',
        category: 'Ευρωπαϊκά Προγράμματα'
      },
      {
        title: 'Προηγμένη Έρευνα στην Αποκατάσταση μετά από Εγκεφαλικό',
        excerpt: 'Οι συνιδρυτές της AI4.GR διεξάγουν σημαντική έρευνα συνδυάζοντας νευροαπεικονιστικά, νευροφυσιολογικά και βιομηχανικά δεδομένα με μηχανική μάθηση για την κατανόηση των τροχιών αποκατάστασης.',
        category: 'Έρευνα'
      },
      {
        title: 'Η Τεχνητή Νοημοσύνη Ενισχύει την Εργοθεραπεία: Αντιλήψεις από Ανασκοπική Μελέτη',
        excerpt: 'Ερευνητές της AI4.GR συνεισφέρουν σε περιεκτική ανασκόπηση που εξετάζει πώς η τεχνητή νοημοσύνη μπορεί να ενισχύσει την αξιολόγηση στην εργοθεραπεία μέσω αισθητηρίων δεδομένων και αναγνώρισης προτύπων.',
        category: 'Έρευνα'
      },
      {
        title: 'Η Μηχανική Μάθηση Προβλέπει την Αποκατάσταση Γλώσσας και Γνώσης μετά από Εγκεφαλικό',
        excerpt: 'Ερευνητές της AI4.GR ηγούνται περιεκτικής ανασκόπησης επιτυγχάνοντας ποσοστά ανάκλησης έως 97% στην πρόβλεψη γνωστικών αποτελεσμάτων χρησιμοποιώντας ομιλία, απεικόνιση και κλινικά δεδομένα.',
        category: 'Έρευνα'
      },
      {
        title: 'Οπτικοποίηση Δεδομένων Βάδισης για Καλύτερη Διάγνωση Εγκεφαλικού',
        excerpt: 'Μελέτη υπό την ηγεσία της AI4.GR εξερευνά οπτική ανάλυση και επεξηγήσιμη μηχανική μάθηση για να κάνει πολύπλοκα βιομηχανικά δεδομένα πιο προσβάσιμα στους κλινικούς.',
        category: 'Έρευνα'
      },
      {
        title: 'Βελτίωση Προβλέψεων Αποτελεσμάτων Εγκεφαλικού με Επεξηγήσιμη Τεχνητή Νοημοσύνη',
        excerpt: 'Ερευνητές της AI4.GR αναπτύσσουν επεξηγήσιμη διαδικασία μηχανικής μάθησης που αντιμετωπίζει προκλήσεις ανισορροπίας δεδομένων παρέχοντας διαφανείς κλινικές προβλέψεις.',
        category: 'Έρευνα'
      },
      {
        title: 'Προγράμματα Κίνησης Ενισχύουν την Κινητικότητα Ασθενών με Άνοια',
        excerpt: 'Μελέτη περίπτωσης που περιλαμβάνει τον συνιδρυτή της AI4.GR Καθ. Νίκο Αγγελούση εξετάζει τις επιδράσεις εξατομικευμένων προγραμμάτων κίνησης στα χαρακτηριστικά βάδισης ασθενών με άνοια.',
        category: 'Έρευνα'
      },
      {
        title: 'Επεξηγήσιμη Τεχνητή Νοημοσύνη Προσδιορίζει Βιοδείκτες για Τραυματισμό ACL',
        excerpt: 'Ερευνητές της AI4.GR συναναπτύσσουν επεξηγήσιμη μέθοδο μηχανικής μάθησης επιτυγχάνοντας 94.95% ακρίβεια στην ανάλυση προτύπων βάδισης για παράγοντες κινδύνου τραυματισμού ACL.',
        category: 'Έρευνα'
      },
      {
        title: 'Η AI4.GR Συμμετέχει στις Δημιουργικές Βιομηχανίες στο AI X Θεσσαλονίκη',
        excerpt: 'Ο συνιδρυτής Δρ Σεραφείμ Μουστακίδης μιλά σε διακεκριμένο συνέδριο εξερευνώντας πώς η γεννητική τεχνητή νοημοσύνη θα διαμορφώσει τις δημιουργικές βιομηχανίες.',
        category: 'Εκδηλώσεις'
      }
    ];

    return language === 'el' ? greekContent[index] : englishContent[index];
  };

  const pressReleases = [
    {
      id: 1,
      title: 'AI4.GR Leads Digital Inclusion with "LEAD YOUR WAY" Project',
      excerpt: 'Cross-European initiative spanning eight countries tackles employment gaps for individuals with Down syndrome and intellectual disabilities through innovative digital tools.',
      date: 'Dec 15, 2024',
      category: 'EU Projects',
      image: 'https://tse3.mm.bing.net/th/id/OIP.5uCEpncABzT2xpIOix1YsAHaEk?w=292&h=292&c=7',
      content: `
        <p>AI4.GR proudly announces its participation in the LEAD YOUR WAY initiative, a cross‑European project (2022–2025) spanning eight countries. The programme tackles the employment gap faced by individuals with Down syndrome and intellectual disabilities (DS/ID) by integrating supported employment techniques with innovative digital tools.</p>
        
        <h2>Project Impact</h2>
        <p>Through personalised learning platforms, interactive databases and training resources, the project empowers DS/ID job seekers, boosts counsellor effectiveness and raises awareness about inclusive employment across Europe.</p>
        
        <p>AI4.GR's development team is building the programme's digital infrastructure—including the website, AI‑driven personalised learning tools and a centralised database—and contributes its expertise in educational technology. This work underscores the company's mission to harness AI for social good and enhance opportunities for vulnerable populations.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>AI-driven personalised learning platforms</li>
          <li>Interactive employment databases</li>
          <li>Digital training resources for counsellors</li>
          <li>Cross-European collaboration framework</li>
        </ul>
        
        <blockquote>This project demonstrates our commitment to using AI technology for meaningful social impact, creating opportunities for individuals who have been traditionally underserved by the employment market.</blockquote>
      `
    },
    {
      id: 2,
      title: 'Empowering Older Adults: STEP‑UP Project Tackles Fall Prevention',
      excerpt: 'Innovative project (2024–2027) develops tailored educational tools and e-learning platforms to help elderly individuals in Greece and Cyprus maintain safety and independence.',
      date: 'Nov 20, 2024',
      category: 'EU Projects',
      image: 'https://sparkcares.ca/wp-content/uploads/2023/10/2023-protecting-your-path-featured-1-1024x560.jpg',
      content: `
        <p>Falls are a leading cause of injury among older adults, and the STEP‑UP project (2024–2027) aims to tackle this issue through education and technology. By assessing the needs of elderly individuals in Greece and Cyprus, STEP‑UP will develop tailored toolkits, online courses and instructional videos that teach safe living practices and balance maintenance.</p>
        
        <h2>Technology for Independence</h2>
        <p>The project also plans to create certification programmes aligned with European Qualifications Framework (EQF) standards. AI4.GR contributes by designing the user‑friendly e‑learning platform and embedding machine‑learning algorithms that adapt educational content to individual needs.</p>
        
        <h3>Expected Impact</h3>
        <p>By giving older adults the tools to stay safe and independent, STEP‑UP is expected to reduce healthcare costs and improve quality of life—showcasing AI4.GR's commitment to accessible and human‑centred technology.</p>
        
        <ul>
          <li>Tailored educational toolkits for fall prevention</li>
          <li>Adaptive e-learning platform with ML algorithms</li>
          <li>EQF-aligned certification programmes</li>
          <li>Instructional videos and interactive content</li>
        </ul>
        
        <blockquote>Our focus on elderly care demonstrates how AI can be leveraged to address real societal challenges and improve quality of life for vulnerable populations.</blockquote>
      `
    },
    {
      id: 3,
      title: 'Advancing Stroke Rehabilitation Research',
      excerpt: 'AI4.GR co-founders conduct significant research combining neuroimaging, neurophysiological and biomechanical data with machine learning to understand recovery trajectories.',
      date: 'Oct 15, 2024',
      category: 'Research',
      image: '/images/healthcare-ai.jpg',
      content: `
        <p>Stroke rehabilitation is a critical area of healthcare, and AI‑driven approaches are transforming how clinicians assess and predict patient recovery. AI4.GR's co‑founders have conducted significant research in this domain, exploring how brain scans, nerve activity measurements, and movement data can be combined with artificial intelligence to understand how patients recover.</p>
        
        <h2>What This Research Achieves</h2>
        <p>Our research creates computer programs that can analyze multiple types of medical data at once - like brain images showing damaged areas, electrical signals from nerves, and measurements of how patients move. This gives doctors a much clearer picture of each patient's unique recovery path.</p>
        
        <h3>Real-World Benefits</h3>
        <p>Instead of using one-size-fits-all treatments, doctors can now tailor therapy specifically for each stroke patient. The AI helps predict which patients are likely to recover certain abilities and suggests the most effective exercises and treatments for their specific condition.</p>
        
        <ul>
          <li>Combines brain scans, nerve tests, and movement analysis in one system</li>
          <li>Predicts recovery outcomes with high accuracy</li>
          <li>Suggests personalized treatment plans for each patient</li>
          <li>Helps doctors make transparent, explainable decisions</li>
        </ul>
        
        <p><strong>Research supported by:</strong> European programmes for regional excellence through partnerships with academic institutions and hospitals across Europe.</p>
      `
    },
    {
      id: 4,
      title: 'AI Enhances Occupational Therapy: Insights from a Scoping Review',
      excerpt: 'AI4.GR researchers contribute to comprehensive review examining how artificial intelligence can enhance assessment in occupational therapy through sensor data and pattern recognition.',
      date: 'Sep 20, 2024',
      category: 'Research',
      image: 'https://tse2.mm.bing.net/th/id/OIP.Ovf3xhEkvXP8RfYXpXuChwHaEK?w=266&h=266&c=7',
      content: `
        <p>In occupational therapy, accurately assessing a client's abilities is key to creating effective treatment plans. AI4.GR researchers recently contributed to a comprehensive review that examines how artificial intelligence can revolutionize assessment methods in this important healthcare field.</p>
        
        <h2>How AI Transforms Assessment</h2>
        <p>Traditional occupational therapy assessments rely heavily on therapist observation and patient self-reporting. Our research shows how smart sensors, cameras, and digital questionnaires can capture much more detailed and objective information about what patients can and cannot do.</p>
        
        <h3>Breakthrough Results</h3>
        <p>The AI systems can detect tiny changes in how people move their hands, walk, or perform daily tasks like cooking or dressing - changes so small that human eyes might miss them. This means therapists can spot improvements or problems much earlier and adjust treatment plans accordingly.</p>
        
        <p>For example, smart sensors placed on a patient's arm can measure exactly how much their grip strength improves week by week, while computer vision can analyze whether their hand coordination is getting better during meal preparation exercises.</p>
        
        <ul>
          <li>Detects movement patterns invisible to human observation</li>
          <li>Measures progress in daily activities with precise accuracy</li>
          <li>Provides objective data to support therapy decisions</li>
          <li>Enables early detection of improvement or decline</li>
          <li>Creates personalized treatment plans based on individual patterns</li>
        </ul>
        
        <p>AI4.GR's co‑founders were instrumental in conceptualising and conducting this groundbreaking review, demonstrating the company's leadership in applying AI to rehabilitation sciences.</p>
        
        <p><strong>Reference:</strong> "Artificial Intelligence as Assessment Tool in Occupational Therapy: A Scoping Review," <em>Neurology International</em> (2025).</p>
      `
    },
    {
      id: 5,
      title: 'Machine Learning Predicts Language and Cognition Recovery After Stroke',
      excerpt: 'AI4.GR researchers lead comprehensive review achieving up to 97% recall rates in predicting cognitive outcomes using speech, imaging and clinical data.',
      date: 'Aug 10, 2024',
      category: 'Research',
      image: 'https://www.york.ac.uk/media/psycholinguistics-network/images/Language-and-cognition800.jpg',
      content: `
        <p>When someone has a stroke, one of the biggest questions families ask is: "Will they be able to speak and think normally again?" Until now, doctors could only make educated guesses. Our research is changing that by using artificial intelligence to predict recovery with remarkable accuracy.</p>
        
        <h2>Impressive Results</h2>
        <p>AI4.GR researchers analyzed dozens of scientific studies and found that computer programs can predict stroke recovery outcomes with up to <strong>97% accuracy</strong> in identifying who will recover and <strong>91% precision</strong> in getting the details right. This means that out of 100 predictions, the AI gets 97 correct about whether someone will recover, and when it says someone will recover, it's right 91 times out of 100.</p>
        
        <h3>How It Works</h3>
        <p>The AI analyzes three types of information: how patients speak (including slurred speech or word-finding difficulties), brain scans showing damage, and medical records with details like age and health conditions. By combining all this data, the computer can spot patterns that human doctors might miss.</p>
        
        <p>For example, the AI might notice that patients with similar brain damage patterns who can say certain words in the first week tend to recover 80% of their language skills within six months.</p>
        
        <h3>Real-World Impact</h3>
        <p>This technology helps doctors and families in several important ways:</p>
        <ul>
          <li><strong>Better treatment planning:</strong> Knowing who is likely to recover helps doctors choose the most effective therapies</li>
          <li><strong>Realistic expectations:</strong> Families can better prepare and plan for the future</li>
          <li><strong>Resource allocation:</strong> Hospitals can focus intensive therapy on patients most likely to benefit</li>
          <li><strong>Early intervention:</strong> High-risk patients can receive immediate, targeted support</li>
        </ul>
        
        <p>AI4.GR's co‑founders led both the research methodology and analysis, reinforcing the company's expertise in combining artificial intelligence with clinical neuroscience.</p>
        
        <p><strong>Reference:</strong> "Machine Learning Algorithms for the Prediction of Language and Cognition Rehabilitation Outcomes of Post‑stroke Patients: A Scoping Review," <em>Human‑Centric Intelligent Systems</em> (2024).</p>
      `
    },
    {
      id: 6,
      title: 'Visualising Gait Data for Better Stroke Diagnosis',
      excerpt: 'AI4.GR-led study explores visual analytics and explainable machine learning to make complex biomechanical data more accessible to clinicians.',
      date: 'Jul 25, 2024',
      category: 'Research',
      image: 'https://tse2.mm.bing.net/th/id/OIP.bVwVoLNKQpLR7AsQYA3NhQHaKY?w=474&h=474&c=7',
      content: `
        <p>When someone walks, dozens of tiny movements happen with each step - how the foot hits the ground, how the knee bends, how the body shifts weight. For stroke patients, these walking patterns change in ways that reveal important information about their recovery. But until now, this data was too complex for doctors to easily understand and use.</p>
        
        <h2>Making Complex Data Simple</h2>
        <p>AI4.GR researchers developed a revolutionary way to turn complicated walking data into easy-to-read visual charts that doctors can understand at a glance. Instead of looking at endless numbers and graphs, healthcare professionals now see clear, colorful displays that instantly show them what's happening with a patient's walking ability.</p>
        
        <h3>Breakthrough Visualization Technology</h3>
        <p>Think of it like turning a complex musical score into a simple traffic light system. The AI takes thousands of data points about how someone walks and transforms them into intuitive visual patterns. Red areas might show where walking is impaired, while green areas show normal function.</p>
        
        <p>Most importantly, the system explains its reasoning in plain language, so doctors understand not just what the AI found, but why it reached that conclusion.</p>
        
        <h3>Clinical Benefits</h3>
        <ul>
          <li><strong>Early detection:</strong> Spot stroke-related walking problems before they become obvious</li>
          <li><strong>Clear communication:</strong> Doctors can easily explain results to patients and families</li>
          <li><strong>Faster diagnosis:</strong> What once took hours of analysis now takes minutes</li>
          <li><strong>Personalized treatment:</strong> Visual patterns help design specific rehabilitation exercises</li>
          <li><strong>Progress tracking:</strong> Easy to see improvements over time with color-coded charts</li>
        </ul>
        
        <p>This research demonstrates how combining data science with human-centered design can transform complex medical information into practical tools that improve patient care.</p>
        
        <p><strong>Reference:</strong> "Innovative Visualization Approach for Biomechanical Time Series in Stroke Diagnosis Using Explainable Machine Learning Methods," <em>Information</em> (2023).</p>
      `
    },
    {
      id: 7,
      title: 'Improving Stroke Outcome Predictions with Explainable AI',
      excerpt: 'AI4.GR researchers develop explainable machine-learning pipeline addressing data imbalance challenges while providing transparent clinical predictions.',
      date: 'Jun 15, 2024',
      category: 'Research',
      image: 'https://tse1.mm.bing.net/th/id/OIP.IyqcesTSMnc4P-Ma0oE-RwHaE8?r=0&w=316&h=316&c=7',
      content: `
        <p>A major challenge in medical AI is that hospital databases often have uneven data - for example, they might have records from 1,000 patients who recovered well but only 200 who didn't. This imbalance can make computer programs biased, leading them to always predict good outcomes just because that's what they see most often.</p>
        
        <h2>Solving the Data Problem</h2>
        <p>AI4.GR researchers developed a smart solution that fixes this imbalance and creates fair, accurate predictions. Our system carefully balances the data, identifies the most important factors that affect recovery, and explains its reasoning in terms doctors can understand and trust.</p>
        
        <h3>Key Technical Achievements</h3>
        <p>The system can tell doctors exactly why it makes each prediction. For example, it might say: "This patient has a 75% chance of good recovery because they are under 65 years old (adds 20%), have a small brain lesion (adds 30%), and no diabetes (adds 25%)."</p>
        
        <p>This level of detail helps medical teams understand which factors they can potentially influence through treatment and which ones they need to work around.</p>
        
        <h3>Real-World Medical Benefits</h3>
        <ul>
          <li><strong>Fair predictions:</strong> Works equally well for all types of patients, not just the most common cases</li>
          <li><strong>Clear explanations:</strong> Doctors know exactly why the AI made each recommendation</li>
          <li><strong>Actionable insights:</strong> Identifies which patient factors most influence recovery</li>
          <li><strong>Early intervention:</strong> Helps medical teams act quickly on high-risk cases</li>
          <li><strong>Resource planning:</strong> Hospitals can better allocate staff and equipment</li>
        </ul>
        
        <p>By solving these fundamental data challenges, AI4.GR demonstrates how careful AI design can create trustworthy tools that genuinely improve healthcare decisions and patient outcomes.</p>
        
        <p><strong>Reference:</strong> "An Explainable Machine Learning Pipeline for Stroke Prediction on Imbalanced Data," <em>Diagnostics</em> (2022).</p>
      `
    },
    {
      id: 8,
      title: 'Movement Programmes Boost Mobility for Dementia Patients',
      excerpt: 'Case study involving AI4.GR co-founder Prof. Nikos Aggelousis examines effects of personalised movement programmes on dementia patient gait characteristics.',
      date: 'May 20, 2024',
      category: 'Research',
      image: 'https://tse2.mm.bing.net/th/id/OIP.xTLSRr5y1ZOPfGxXTCcb_wHaEO?w=270&h=270&c=7',
      content: `
        <p>One of the most heartbreaking aspects of dementia is watching loved ones gradually lose their ability to move safely and independently. A groundbreaking case study led by AI4.GR co‑founder Prof. Nikos Aggelousis shows that carefully designed exercise programs can actually improve walking ability in dementia patients - giving hope to families worldwide.</p>
        
        <h2>Remarkable Results</h2>
        <p>The study followed one dementia patient through a personalized movement program designed specifically for their needs. Using advanced motion sensors and AI analysis, researchers measured exactly how the patient's walking improved over time. The results were encouraging: targeted exercises led to measurable improvements in balance, step length, and overall walking stability.</p>
        
        <h3>How the Program Works</h3>
        <p>Rather than generic exercises, the program uses AI to analyze each patient's specific walking challenges. Small sensors placed on the body measure things like how evenly they distribute weight, how long their steps are, and how steady their balance is. The AI then recommends specific exercises to address each person's particular weaknesses.</p>
        
        <p>For this patient, the program focused on balance training and leg strengthening exercises. Within weeks, the AI measurements showed significant improvements in walking steadiness and reduced risk of falls.</p>
        
        <h3>Why This Matters</h3>
        <ul>
          <li><strong>Preserves independence:</strong> Better walking ability means patients can stay mobile longer</li>
          <li><strong>Reduces fall risk:</strong> Improved balance prevents dangerous accidents</li>
          <li><strong>Boosts confidence:</strong> Patients feel safer and more willing to stay active</li>
          <li><strong>Supports caregivers:</strong> Family members worry less about mobility-related injuries</li>
          <li><strong>Provides hope:</strong> Shows that targeted intervention can make a real difference</li>
        </ul>
        
        <p>This research demonstrates AI4.GR's commitment to using technology to support some of our most vulnerable community members, combining clinical expertise with cutting-edge data analysis to improve quality of life.</p>
        
        <p><strong>Reference:</strong> "The Effect of an Interventional Movement Program on the Mechanical Gait Characteristics of a Patient with Dementia," <em>Engineering Proceedings</em> (2023).</p>
      `
    },
    {
      id: 9,
      title: 'Explainable AI Identifies Biomarkers for ACL Injury',
      excerpt: 'AI4.GR researchers co-develop explainable machine learning method achieving 94.95% accuracy in analyzing gait patterns for ACL injury risk factors.',
      date: 'Apr 10, 2024',
      category: 'Research',
      image: 'https://img.freepik.com/premium-photo/biomechanics-sports-human-motion-perfected_1003615-5320.jpg?w=1380',
      content: `
        <p>Every year, thousands of athletes suffer devastating ACL (anterior cruciate ligament) tears that can end careers and cause lifelong knee problems. The injury often happens without warning during seemingly routine movements. AI4.GR researchers have developed groundbreaking technology that can predict who is at risk before the injury occurs.</p>
        
        <h2>Outstanding Accuracy Results</h2>
        <p>Our AI system achieved <strong>94.95% accuracy</strong> in identifying athletes at risk for ACL injury - nearly 95 out of 100 predictions are correct. This outperformed more complex neural network systems (92.89%), proving that sometimes simpler, explainable approaches work better than black-box solutions.</p>
        
        <h3>How the Prediction Works</h3>
        <p>The system analyzes how athletes walk and run, measuring dozens of subtle factors that the human eye cannot detect. For example, it might notice that someone puts slightly more pressure on their inside foot, or that their knee moves inward by just a few millimeters during landing - patterns that indicate future ACL vulnerability.</p>
        
        <p>Most importantly, the AI explains exactly which movement patterns create the highest risk, allowing coaches and physiotherapists to design targeted prevention programs.</p>
        
        <h3>Key Risk Factors Identified</h3>
        <p>The AI revealed that certain walking and running patterns are strong predictors of future ACL injury:</p>
        <ul>
          <li><strong>Knee movement patterns:</strong> How the knee bends and rotates during movement</li>
          <li><strong>Landing mechanics:</strong> How athletes absorb impact when jumping or changing direction</li>
          <li><strong>Weight distribution:</strong> Whether weight is evenly distributed between legs</li>
          <li><strong>Muscle activation timing:</strong> Whether stabilizing muscles activate at the right moments</li>
        </ul>
        
        <h3>Prevention Applications</h3>
        <ul>
          <li><strong>Early screening:</strong> Identify at-risk athletes before symptoms appear</li>
          <li><strong>Targeted training:</strong> Design specific exercises to correct risky movement patterns</li>
          <li><strong>Sports safety:</strong> Help coaches modify training to reduce injury risk</li>
          <li><strong>Return-to-play decisions:</strong> Assess whether injured athletes are ready to compete safely</li>
        </ul>
        
        <p>This research demonstrates how AI4.GR's expertise extends beyond traditional healthcare into sports science, creating tools that can prevent injuries and protect athletic careers.</p>
        
        <p><strong>Reference:</strong> "Leveraging Explainable Machine Learning to Identify Gait Biomechanical Parameters Associated with Anterior Cruciate Ligament Injury," <em>Scientific Reports</em> (2022).</p>
      `
    },
    {
      id: 10,
      title: 'AI4.GR Engages Creative Industries at AI X Thessaloniki',
      excerpt: 'Co-founder Dr Serafeim Moustakidis speaks at prestigious conference exploring how generative AI will reshape creative industries.',
      date: 'Jun 3, 2024',
      category: 'Events',
      image: '/images/stroke-research.jpg',
      content: `
        <p>On 3 June 2024, AI4.GR co‑founder Dr Serafeim Moustakidis spoke at AI X Thessaloniki, a conference at the MOMus Museum of Modern Art that explored how generative AI will reshape creative industries.</p>
        
        <h2>Cross-Disciplinary Collaboration</h2>
        <p>The event gathered experts from architecture, art history and futures research, highlighting cross‑disciplinary collaboration. Dr Moustakidis, described as an experienced AI strategist and entrepreneur, discussed AI's potential in design and the arts.</p>
        
        <p>This demonstrates AI4.GR's commitment to thought leadership beyond its core research fields, engaging with diverse creative communities to explore AI's transformative potential.</p>
        
        <h3>Event Details</h3>
        <p><strong>Reference:</strong> MOMus – "AI X Thessaloniki / How will generative AI shape creative industries moving forward?" (2024).</p>
        
        <ul>
          <li>Generative AI in creative industries</li>
          <li>Cross-disciplinary expert collaboration</li>
          <li>AI strategy and entrepreneurship</li>
          <li>Future of design and arts</li>
        </ul>
      `
    }
  ];



  return (
    <PageContainer>
      <Helmet>
        <title>{t('news.title')} - AI4 Advanced Solutions</title>
        <meta name="description" content={t('news.subtitle')} />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t('news.title')}
          </motion.h1>
          <motion.div
            className="subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('news.subtitle')}
          </motion.div>
        </HeroContent>
      </HeroSection>

      <BreadcrumbBar>
        <div className="container">
          <div className="breadcrumb">
            <button onClick={() => navigate('/')} style={{border: 'none', background: 'none', color: '#0073E6', textDecoration: 'none', cursor: 'pointer'}}>{t('news.breadcrumb.home')}</button>
            <span>/</span>
            <span>{t('news.breadcrumb.news')}</span>
          </div>
        </div>
      </BreadcrumbBar>

      <SectionBase>
        <div className="section-header">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('news.latestNews')}
          </motion.h2>
          <button onClick={() => setActiveFilter('all')} className="see-all-link" style={{border: 'none', background: 'none'}}>{t('news.seeAllNews')}</button>
        </div>

        <NewsGrid className="two-rows">
          {pressReleases.map((article, index) => {
            const content = getArticleContent(index);
            
            return (
              <motion.div
                key={article.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <NewsCard onClick={() => navigate(`/news/${article.id}`)}>
                  <div className="image" style={{ backgroundImage: `url(${article.image})` }}>
                    <div className="category-badge">{content.category}</div>
                  </div>
                  <div className="content">
                    <div className="date">{article.date}</div>
                    <h3>{content.title}</h3>
                    <p className="excerpt">{content.excerpt}</p>
                  </div>
                </NewsCard>
              </motion.div>
            );
          })}
        </NewsGrid>
      </SectionBase>



      <ComprehensiveFooter />
    </PageContainer>
  );
};

export default NewsPage;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from '../../hooks/useTranslation';

const TeamWrapper = styled.section`
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

const TeamContainer = styled.div`
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

const TeamLayout = styled.div`
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

const TeamList = styled.div`
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

const TeamItem = styled.div`
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
  
  .role {
    font-size: 0.875rem;
    opacity: 0.8;
  }
`;

const TeamDetail = styled(motion.div)`
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: fit-content;
  
  .detail-content {
    padding: 2rem;
    
    .member-header {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 2rem;
      align-items: flex-start;
      
      .member-image {
        width: 120px;
        height: 120px;
        border-radius: 12px;
        background-size: cover;
        background-position: center;
        flex-shrink: 0;
        border: 3px solid #f1f5f9;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .member-info {
        flex: 1;
        
        .role-badge {
          display: inline-block;
          background: rgba(0, 115, 230, 0.9);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.75rem;
        }
        
        h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.4rem;
          font-family: 'Inter', sans-serif;
          line-height: 1.3;
        }
        
        .position {
          font-size: 1rem;
          color: #0073E6;
          font-weight: 600;
          margin-bottom: 0;
        }
      }
    }
    
    .bio {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #525252;
      margin-bottom: 1.5rem;
    }
    
    .expertise-title {
      font-size: 1rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.75rem;
      font-family: 'Poppins', sans-serif;
    }
    
    .expertise-list {
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

const AboutTeam = () => {
  const { language } = useTranslation();

  const getContent = () => {
    if (language === 'el') {
      return {
        title: 'Γνωρίστε την Ηγετική μας Ομάδα',
        description: 'Η ποικιλόμορφη ομάδα εμπειρογνωμόνων μας συγκεντρώνει δεκαετίες εμπειρίας σε έρευνα ΤΝ, ανάπτυξη τεχνολογίας και στρατηγική ηγεσία.',
        teamTitle: 'Ηγετική Ομάδα',
        keyExpertise: 'Κλειδιά Εμπειρογνωμοσύνης',
        emptyState: {
          title: 'Επιλέξτε Μέλος της Ομάδας',
          description: 'Επιλέξτε ένα μέλος της ομάδας από τη λίστα για να δείτε το λεπτομερές προφίλ του'
        }
      };
    }
    return {
      title: 'Meet Our Leadership Team',
      description: 'Our diverse team of experts brings together decades of experience in AI research, technology development, and strategic leadership.',
      teamTitle: 'Leadership Team',
      keyExpertise: 'Key Expertise',
      emptyState: {
        title: 'Select a Team Member',
        description: 'Choose a team member from the list to see their detailed profile'
      }
    };
  };

  const getTeamMembers = () => {
    if (language === 'el') {
      return [
        {
          id: 'kokkotis',
          name: 'Δρ. Χρήστος Κοκκώτης',
          role: 'Διευθύνων Σύμβουλος',
          position: 'Ειδικός Μηχανικής Μάθησης',
          bio: 'Ο Δρ. Χρήστος Κοκκώτης είναι ειδικός Μηχανικής Μάθησης που έχει συμμετάσχει σε ερευνητικά προγράμματα τόσο στον ιδιωτικό τομέα όσο και σε ερευνητικά έργα στο ΕΚΕΤΑ και το Δημοκρίτειο Πανεπιστήμιο Θράκης. Ως Διευθύνων Σύμβουλος, επιβλέπει τις λειτουργίες και τη στρατηγική ανάπτυξη της AI4.',
          image: '/team/kokkotis.PNG',
          expertise: [
            'Μηχανική Μάθηση και Βαθιά Μάθηση',
            'Επιχειρησιακές Λειτουργίες και Στρατηγική Διοίκηση',
            'Εφαρμογές ΤΝ Ιδιωτικού Τομέα',
            'Συντονισμός Ερευνητικών Έργων',
            'Επιστήμη Δεδομένων και Αναλυτικά',
            'Υλοποίηση Τεχνολογίας',
            'Διαχείριση Σχέσεων Πελατών',
            'Ανάπτυξη Προϊόντων και Καινοτομία'
          ],
          additionalInfo: {
            title: 'Βιομηχανία & Έρευνα',
            content: 'Εκτεταμένη εμπειρία τόσο στον ιδιωτικό τομέα όσο και στην ακαδημαϊκή έρευνα στο ΕΚΕΤΑ και το Δημοκρίτειο Πανεπιστήμιο Θράκης. Διευθύνων Σύμβουλος υπεύθυνος για τις λειτουργίες και τη στρατηγική ανάπτυξη. Επικοινωνία: chkokkotis@gmail.com / ai4gr.info@gmail.com. Google Scholar: https://scholar.google.com/citations?user=4YYh8RoAAAAJ'
          }
        },
        {
          id: 'moustakidis',
          name: 'Δρ. Σεραφείμ Μουστακίδης',
          role: 'Συνιδρυτής & Διευθυντής Έρευνας',
          position: 'Ειδικός Έρευνας ΤΝ',
          bio: 'Ο Δρ. Σεραφείμ Μουστακίδης εξειδικεύεται στην Τεχνητή Νοημοσύνη και έχει ιδρύσει τεχνολογικές εταιρίες, υπηρετήσει ως ερευνητής στο ΕΚΕΤΑ και ακαδημαϊκά ιδρύματα. Έχει ενεργή συμμετοχή στη συγγραφή και υλοποίηση έργων, ειδικά στο πλαίσιο του Horizon.',
          image: '/team/moustakidis.png',
          expertise: [
            'Τεχνητή Νοημοσύνη και Μηχανική Μάθηση',
            'Τεχνολογική Επιχειρηματικότητα',
            'Ανάπτυξη Προγραμμάτων EU Horizon',
            'Υλοποίηση Ερευνητικών Έργων',
            'Αναλυτικά και Επεξεργασία Δεδομένων',
            'Καινοτομία και Μεταφορά Τεχνολογίας',
            'Δίκτυα Επιστημονικής Συνεργασίας',
            'Ανάπτυξη Αλγορίθμων ΤΝ'
          ],
          additionalInfo: {
            title: 'Έρευνα & Καινοτομία',
            content: 'Πρώην ερευνητής στο ΕΚΕΤΑ (Κέντρο Έρευνας και Τεχνολογίας Ελλάδας) και ακαδημαϊκά ιδρύματα. Ιδρυτής τεχνολογικών εταιριών με εμπειρογνωμοσύνη στην εμπορικοποίηση ΤΝ. Προφίλ Google Scholar: https://scholar.google.com/citations?user=Do1GhRUAAAAJ'
          }
        },
        {
          id: 'angelousis',
          name: 'Δρ. Νικόλαος Αγγελούσης',
          role: 'Συνιδρυτής & Πρόεδρος',
          position: 'Καθηγητής Βιοϊατρικής Μηχανικής',
          bio: 'Ο Δρ. Νικόλαος Αγγελούσης είναι Καθηγητής Βιοϊατρικής Μηχανικής στο Δημοκρίτειο Πανεπιστήμιο με εκτεταμένη εμπειρία στην ηγεσία και υλοποίηση πολυάριθμων ερευνητικών προγραμμάτων. Φέρνει βαθιά εμπειρογνωμοσύνη στις βιοϊατρικές εφαρμογές της ΤΝ και έχει συμβάλει στη δημιουργία των ερευνητικών συνεργασιών της AI4 με ακαδημαϊκά ιδρύματα.',
          image: '/team/aggelousis.png',
          expertise: [
            'Βιοϊατρική Μηχανική και Εφαρμογές ΤΝ',
            'Ηγεσία και Διοίκηση Ερευνητικών Προγραμμάτων',
            'Συνεργασίες Ακαδημαϊκού-Βιομηχανικού Τομέα',
            'Ανάπτυξη Ερευνητικών Χορηγιών ΕΕ',
            'Καινοτομία Ιατρικών Συσκευών',
            'Ενσωμάτωση Τεχνολογίας Υγείας',
            'Επιστημονική Δημοσίευση και Αξιολόγηση',
            'Συνεργασία Πανεπιστημίου-Ιδιωτικού Τομέα'
          ],
          additionalInfo: {
            title: 'Ακαδημαϊκή Αριστεία',
            content: 'Καθηγητής στο Δημοκρίτειο Πανεπιστήμιο με εκτεταμένη εμπειρία στην ηγεσία ερευνητικών προγραμμάτων. Ενεργός ερευνητής με δημοσιεύσεις σε βιοϊατρική μηχανική και εφαρμογές ΤΝ στην υγειονομική περίθαλψη. Προφίλ Google Scholar: https://scholar.google.com/citations?user=baTWnToAAAAJ'
          }
        }
      ];
    }
    return [
      {
        id: 'kokkotis',
        name: 'Dr. Christos Kokkotis',
        role: 'Managing Director',
        position: 'Machine Learning Specialist',
        bio: 'Dr. Christos Kokkotis is a Machine Learning specialist who has participated in research programs in both the private sector and research projects at CERTH and Democritus University of Thrace. As Managing Director, he oversees AI4\'s operations and strategic development.',
        image: '/team/kokkotis.PNG',
        expertise: [
          'Machine Learning and Deep Learning',
          'Business Operations and Strategic Management',
          'Private Sector AI Applications',
          'Research Project Coordination',
          'Data Science and Analytics',
          'Technology Implementation',
          'Client Relationship Management',
          'Product Development and Innovation'
        ],
        additionalInfo: {
          title: 'Industry & Research',
          content: 'Extensive experience in both private sector and academic research at CERTH and Democritus University of Thrace. Managing Director responsible for operations and strategic development. Contact: chkokkotis@gmail.com / ai4gr.info@gmail.com. Google Scholar: https://scholar.google.com/citations?user=4YYh8RoAAAAJ'
        }
      },
      {
        id: 'moustakidis',
        name: 'Dr. Serafeim Moustakidis',
        role: 'Co-Founder & Research Director',
        position: 'AI Research Specialist',
        bio: 'Dr. Serafeim Moustakidis specializes in Artificial Intelligence and has founded technology companies, served as a researcher at CERTH and academic institutions. He has active participation in writing and implementing projects, especially within the Horizon framework.',
        image: '/team/moustakidis.png',
        expertise: [
          'Artificial Intelligence and Machine Learning',
          'Technology Entrepreneurship',
          'EU Horizon Programme Development',
          'Research Project Implementation',
          'Data Analytics and Processing',
          'Innovation and Technology Transfer',
          'Scientific Collaboration Networks',
          'AI Algorithm Development'
        ],
        additionalInfo: {
          title: 'Research & Innovation',
          content: 'Former researcher at CERTH (Centre for Research and Technology Hellas) and academic institutions. Founder of technology companies with expertise in AI commercialization. Google Scholar profile: https://scholar.google.com/citations?user=Do1GhRUAAAAJ'
        }
      },
      {
        id: 'angelousis',
        name: 'Dr. Nikolaos Angelousis',
        role: 'Co-Founder & Chairman',
        position: 'Professor of Biomedical Engineering',
        bio: 'Dr. Nikolaos Angelousis is a Professor of Biomedical Engineering at Democritus University with extensive experience leading and implementing numerous research programs. He brings deep expertise in biomedical applications of AI and has been instrumental in establishing AI4\'s research partnerships with academic institutions.',
        image: '/team/aggelousis.png',
        expertise: [
          'Biomedical Engineering and AI Applications',
          'Research Program Leadership and Management',
          'Academic-Industry Partnerships',
          'EU Research Grant Development',
          'Medical Device Innovation',
          'Healthcare Technology Integration',
          'Scientific Publication and Peer Review',
          'University-Private Sector Collaboration'
        ],
        additionalInfo: {
          title: 'Academic Excellence',
          content: 'Professor at Democritus University with extensive experience in leading research programs. Active researcher with publications in biomedical engineering and AI applications in healthcare. Google Scholar profile: https://scholar.google.com/citations?user=baTWnToAAAAJ'
        }
      }
    ];
  };

  const content = getContent();
  const teamMembers = getTeamMembers();

  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <TeamWrapper>
      <TeamContainer>
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

      <TeamLayout>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TeamList>
            <h3>{content.teamTitle}</h3>
            {teamMembers.map((member) => (
              <TeamItem
                key={member.id}
                className={selectedMember?.id === member.id ? 'active' : ''}
                onClick={() => setSelectedMember(member)}
              >
                <div className="name">{member.name}</div>
                <div className="role">{member.role}</div>
              </TeamItem>
            ))}
          </TeamList>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {selectedMember ? (
              <TeamDetail
                key={selectedMember.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="detail-content">
                  <div className="member-header">
                    <div 
                      className="member-image"
                      style={{ backgroundImage: `url(${selectedMember.image})` }}
                    />
                    <div className="member-info">
                      <div className="role-badge">{selectedMember.role}</div>
                      <h3>{selectedMember.name}</h3>
                      <div className="position">{selectedMember.position}</div>
                    </div>
                  </div>
                  <p className="bio">{selectedMember.bio}</p>
                  
                  <div className="expertise-title">{content.keyExpertise}</div>
                  <ul className="expertise-list">
                    {selectedMember.expertise.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                  
                  {selectedMember.additionalInfo && (
                    <div className="additional-info">
                      <div className="info-title">{selectedMember.additionalInfo.title}</div>
                      <div className="info-text">{selectedMember.additionalInfo.content}</div>
                    </div>
                  )}
                </div>
              </TeamDetail>
            ) : (
              <EmptyState
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="icon">👥</div>
                <h3>{content.emptyState.title}</h3>
                <p>{content.emptyState.description}</p>
              </EmptyState>
            )}
          </AnimatePresence>
        </motion.div>
      </TeamLayout>
      </TeamContainer>
    </TeamWrapper>
  );
};

export default AboutTeam;
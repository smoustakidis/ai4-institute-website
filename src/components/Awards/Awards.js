import React from 'react';
import { motion } from 'framer-motion';
import { AwardCard, Container, Section, SectionTitle } from '../../styles/AppStyles';

const Awards = () => {
  const awards = [
    {
      variant: 'primary',
      title: 'Excellence in AI Research - European Commission Recognition 2024',
      category: 'Research Excellence'
    },
    {
      variant: 'secondary', 
      title: 'Leading Innovation Partner - Horizon Europe Programme Assessment 2024',
      category: 'Innovation Leadership'
    },
    {
      variant: 'accent',
      title: 'Outstanding Contribution to AI Education - UNESCO Global Partnership Award',
      category: 'Educational Impact'
    },
    {
      variant: 'primary',
      title: 'Best Practice in AI Ethics - IEEE Standards Excellence Award 2024',
      category: 'Ethical AI'
    },
    {
      variant: 'secondary',
      title: 'Top Research Institute - EIT Digital Innovation Excellence Recognition',
      category: 'Digital Innovation'
    },
    {
      variant: 'neutral',
      title: 'Sustainable AI Development Leader - Green Digital Europe Initiative 2024',
      category: 'Sustainability'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <Section>
      <Container>
        <SectionTitle style={{ marginBottom: '4rem', fontFamily: 'Raleway, sans-serif', color: '#1a1a1a' }}>
          Awards & Recognition
        </SectionTitle>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}
        >
          {awards.map((award, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AwardCard variant={award.variant}>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 600, 
                    lineHeight: 1.3,
                    marginBottom: '1rem',
                    color: award.variant === 'neutral' ? '#1a1a1a' : '#ffffff',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {award.title}
                  </h3>
                  <p style={{ 
                    opacity: 0.9,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: 500,
                    color: award.variant === 'neutral' ? '#525252' : 'rgba(255,255,255,0.9)'
                  }}>
                    {award.category}
                  </p>
                </div>
              </AwardCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Awards;
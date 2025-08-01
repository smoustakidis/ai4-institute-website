import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Container, 
  Section, 
  SectionHeader, 
  SectionTitle, 
  SectionSubtitle, 
  Grid,
  GradientText 
} from '../../styles/AppStyles';
import {
  PartnerCard
} from './PartnersStyles';

const Partners = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const partners = [
    'European Commission',
    'MIT',
    'Oxford University',
    'Sorbonne',
    'Technical University Munich',
    'CERN',
    'Fraunhofer Institute',
    'ETH Zurich'
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

  const cardVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <Section background="#fafafa">
      <Container>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>
            Our <GradientText>Partners</GradientText>
          </SectionTitle>
          <SectionSubtitle>
            Collaborating with leading organizations, academic institutions, 
            and innovative companies across Europe and beyond.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid columns="repeat(auto-fit, minmax(200px, 1fr))" gap="2.5rem">
            {partners.map((partner, index) => (
              <motion.div key={index} variants={cardVariants}>
                <PartnerCard
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {partner}
                </PartnerCard>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Partners;
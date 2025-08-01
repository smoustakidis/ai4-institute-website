import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  Container, 
  Section, 
  SectionHeader, 
  SectionTitle, 
  SectionSubtitle, 
  Grid 
} from '../../styles/AppStyles';
import {
  ImpactContainer,
  ImpactItem,
  ImpactNumber,
  ImpactLabel
} from './ImpactStyles';

const Impact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const impactStats = [
    { number: 500000, label: 'Lives Impacted', suffix: '+' },
    { number: 150, label: 'Partner Organizations', suffix: '+' },
    { number: 85, label: 'Active Projects', suffix: '+' },
    { number: 28, label: 'Countries Reached', suffix: '' }
  ];

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
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <ImpactContainer id="impact">
      <Container>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle style={{ color: 'white' }}>
            Global <span style={{ color: 'white' }}>Impact</span>
          </SectionTitle>
          <SectionSubtitle style={{ color: 'rgba(255,255,255,0.8)' }}>
            Our research and innovation initiatives have created measurable impact 
            across institutions, industries, and communities worldwide.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid columns="repeat(auto-fit, minmax(250px, 1fr))" gap="3rem">
            {impactStats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ImpactItem
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ImpactNumber>
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2.5}
                        delay={index * 0.2}
                        separator={stat.number >= 1000 ? ',' : ''}
                      />
                    )}
                    {stat.suffix}
                  </ImpactNumber>
                  <ImpactLabel>{stat.label}</ImpactLabel>
                </ImpactItem>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </ImpactContainer>
  );
};

export default Impact;
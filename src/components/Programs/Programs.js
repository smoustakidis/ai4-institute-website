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
  ProgramCard,
  ProgramImage,
  ProgramContent,
  ProgramTitle,
  ProgramDescription,
  ProgramMeta,
  ProgramMetaItem
} from './ProgramsStyles';

const Programs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const programs = [
    {
      icon: '🇪🇺',
      title: 'Horizon Europe',
      description: 'Leading multiple projects under Horizon Europe, the EU\'s key funding programme for research and innovation with a budget of €95.5 billion.',
      period: '2021-2027',
      funding: '€12M+ Secured'
    },
    {
      icon: '🎓',
      title: 'Erasmus+ Programme',
      description: 'Developing innovative educational programs and mobility initiatives that enhance AI education and digital skills across European institutions.',
      period: 'Ongoing',
      funding: '25+ Projects'
    },
    {
      icon: '🏙️',
      title: 'Digital Europe Programme',
      description: 'Contributing to Europe\'s digital transformation through strategic investments in supercomputing, artificial intelligence, and digital skills.',
      period: '2021-2027',
      funding: '€7.5B Programme'
    },
    {
      icon: '💡',
      title: 'EIT Digital',
      description: 'Active participation in EIT Digital, fostering innovation and entrepreneurship in the digital technology sector across Europe.',
      period: 'Strategic Partner',
      funding: 'Innovation Hub'
    },
    {
      icon: '🌱',
      title: 'Green Deal',
      description: 'Supporting the European Green Deal through AI-powered solutions for sustainability, climate action, and environmental protection.',
      period: '2019-2030',
      funding: 'Sustainability Focus'
    },
    {
      icon: '🔗',
      title: 'Connecting Europe Facility',
      description: 'Enhancing connectivity and digital infrastructure across Europe through advanced AI and digital communication technologies.',
      period: 'Infrastructure',
      funding: 'EU-Wide Impact'
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

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <Section id="programs" background="#fafafa">
      <Container>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>
            EU <GradientText>Programmes</GradientText>
          </SectionTitle>
          <SectionSubtitle>
            Participating in and leading major European Union research and innovation programmes 
            that advance artificial intelligence and digital transformation across Europe.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="2rem">
            {programs.map((program, index) => (
              <motion.div key={index} variants={cardVariants}>
                <ProgramCard
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ProgramImage>
                    <span>{program.icon}</span>
                  </ProgramImage>
                  
                  <ProgramContent>
                    <ProgramTitle>
                      {program.title}
                    </ProgramTitle>
                    
                    <ProgramDescription>
                      {program.description}
                    </ProgramDescription>
                    
                    <ProgramMeta>
                      <ProgramMetaItem>
                        {program.period}
                      </ProgramMetaItem>
                      <ProgramMetaItem>
                        {program.funding}
                      </ProgramMetaItem>
                    </ProgramMeta>
                  </ProgramContent>
                </ProgramCard>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Programs;
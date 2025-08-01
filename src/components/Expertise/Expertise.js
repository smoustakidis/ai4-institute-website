import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaRobot, 
  FaGraduationCap, 
  FaGlobe, 
  FaFlask, 
  FaChartBar, 
  FaHandshake 
} from 'react-icons/fa';
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
  ExpertiseCard,
  ExpertiseIcon,
  ExpertiseTitle,
  ExpertiseDescription,
  ExpertiseFeatures
} from './ExpertiseStyles';

const Expertise = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const expertiseAreas = [
    {
      icon: <FaRobot />,
      title: 'AI Research & Development',
      description: 'Advanced artificial intelligence research focusing on machine learning, deep learning, natural language processing, and computer vision technologies.',
      features: [
        'Machine Learning Algorithms',
        'Neural Network Architectures', 
        'Computer Vision Systems',
        'Natural Language Processing'
      ]
    },
    {
      icon: <FaGraduationCap />,
      title: 'Educational Innovation',
      description: 'Transforming education through AI-powered learning platforms, personalized education systems, and innovative pedagogical approaches.',
      features: [
        'Adaptive Learning Systems',
        'Educational Technology',
        'Digital Pedagogy',
        'Learning Analytics'
      ]
    },
    {
      icon: <FaGlobe />,
      title: 'Digital Transformation',
      description: 'Leading digital transformation initiatives across industries, implementing smart solutions and fostering technological adoption.',
      features: [
        'Smart City Solutions',
        'Industry 4.0 Implementation',
        'IoT Integration',
        'Digital Strategy'
      ]
    },
    {
      icon: <FaFlask />,
      title: 'Innovation Management',
      description: 'Strategic innovation management, technology transfer, and entrepreneurship development for sustainable growth.',
      features: [
        'Technology Transfer',
        'Startup Incubation',
        'Innovation Strategy',
        'Intellectual Property'
      ]
    },
    {
      icon: <FaChartBar />,
      title: 'Data Science & Analytics',
      description: 'Comprehensive data science solutions, predictive analytics, and business intelligence systems for informed decision-making.',
      features: [
        'Big Data Analytics',
        'Predictive Modeling',
        'Business Intelligence',
        'Data Visualization'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'Strategic Partnerships',
      description: 'Building and managing strategic partnerships with academic institutions, industry leaders, and government organizations.',
      features: [
        'Academic Collaboration',
        'Industry Partnerships',
        'EU Network Development',
        'International Relations'
      ]
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
    <Section id="expertise">
      <Container>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>
            Areas of <GradientText>Expertise</GradientText>
          </SectionTitle>
          <SectionSubtitle>
            Our comprehensive expertise spans across multiple domains of artificial intelligence, 
            research methodologies, and innovation frameworks that drive technological advancement.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid columns="repeat(auto-fit, minmax(350px, 1fr))" gap="2.5rem">
            {expertiseAreas.map((area, index) => (
              <motion.div key={index} variants={cardVariants}>
                <ExpertiseCard
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExpertiseIcon>
                    {area.icon}
                  </ExpertiseIcon>
                  
                  <ExpertiseTitle>
                    {area.title}
                  </ExpertiseTitle>
                  
                  <ExpertiseDescription>
                    {area.description}
                  </ExpertiseDescription>
                  
                  <ExpertiseFeatures>
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ExpertiseFeatures>
                </ExpertiseCard>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Expertise;
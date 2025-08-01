import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
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
  NewsCard,
  NewsImage,
  NewsContent,
  NewsDate,
  NewsTitle,
  NewsExcerpt,
  NewsLink
} from './NewsStyles';

const News = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const newsItems = [
    {
      icon: '📰',
      date: 'January 15, 2025',
      title: 'AI4 Secures €8M Grant for Revolutionary Machine Learning Research',
      excerpt: 'Our consortium has been awarded a significant Horizon Europe grant to advance breakthrough research in explainable AI and ethical machine learning systems.',
      slug: 'ai4-secures-8m-grant-machine-learning-research'
    },
    {
      icon: '🚀',
      date: 'January 8, 2025',
      title: 'Launch of AI4Education Platform Reaches 100,000 Students',
      excerpt: 'Our adaptive learning platform has successfully onboarded its 100,000th student, marking a major milestone in personalized AI-driven education.',
      slug: 'ai4education-platform-reaches-100000-students'
    },
    {
      icon: '🏆',
      date: 'December 28, 2024',
      title: 'AI4 Wins European Innovation Award for Digital Transformation',
      excerpt: 'Recognition for our outstanding contribution to digital transformation and AI innovation across European Union member states.',
      slug: 'ai4-wins-european-innovation-award'
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
    <Section id="news">
      <Container>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>
            Latest <GradientText>News & Updates</GradientText>
          </SectionTitle>
          <SectionSubtitle>
            Stay informed about our latest research breakthroughs, project milestones, 
            and significant developments in the AI4 ecosystem.
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid columns="repeat(auto-fit, minmax(350px, 1fr))" gap="2.5rem">
            {newsItems.map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                <NewsCard
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <NewsImage>
                    <span>{item.icon}</span>
                  </NewsImage>
                  
                  <NewsContent>
                    <NewsDate>{item.date}</NewsDate>
                    
                    <NewsTitle>
                      {item.title}
                    </NewsTitle>
                    
                    <NewsExcerpt>
                      {item.excerpt}
                    </NewsExcerpt>
                    
                    <NewsLink 
                      as={Link} 
                      to={`/news/${item.slug}`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Read Full Article →
                    </NewsLink>
                  </NewsContent>
                </NewsCard>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default News;
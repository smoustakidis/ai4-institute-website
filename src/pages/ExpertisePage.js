import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Expertise from '../components/Expertise/Expertise';

const ExpertisePage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <title>Areas of Expertise — AI4 Institute</title>
        <meta 
          name="description" 
          content="Explore AI4's comprehensive expertise in AI research, educational innovation, digital transformation, data science, and strategic partnerships across Europe." 
        />
        <meta 
          name="keywords" 
          content="AI expertise, machine learning, educational innovation, digital transformation, data science, AI research, partnerships" 
        />
      </Helmet>

      <Expertise />
    </motion.div>
  );
};

export default ExpertisePage;
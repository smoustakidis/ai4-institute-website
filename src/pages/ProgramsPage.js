import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Programs from '../components/Programs/Programs';

const ProgramsPage = () => {
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
        <title>EU Programmes — AI4 Institute</title>
        <meta 
          name="description" 
          content="Discover AI4's participation in major EU programmes including Horizon Europe, Erasmus+, Digital Europe Programme, and EIT Digital initiatives." 
        />
        <meta 
          name="keywords" 
          content="EU programmes, Horizon Europe, Erasmus+, Digital Europe, EIT Digital, European funding, AI research funding" 
        />
      </Helmet>

      <Programs />
    </motion.div>
  );
};

export default ProgramsPage;
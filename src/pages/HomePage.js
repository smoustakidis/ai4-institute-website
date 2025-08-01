import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import AtosHero from '../components/AtosHero/AtosHero';
import FutureSection from '../components/FutureSection/FutureSection';
import IdeasSection from '../components/IdeasSection/IdeasSection';
import ClientSuccess from '../components/ClientSuccess/ClientSuccess';
import Products from '../components/Products/Products';
import ComprehensiveFooter from '../components/ComprehensiveFooter/ComprehensiveFooter';

const HomePage = () => {
  const { t } = useTranslation();
  
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
        <title>AI4 — {t('home.heroTitle')}</title>
        <meta 
          name="description" 
          content={t('home.heroSubtitle')}
        />
        <meta 
          name="keywords" 
          content="artificial intelligence, AI research, innovation, education, EU programmes, digital transformation, machine learning, Horizon Europe" 
        />
        <meta property="og:title" content={`AI4 — ${t('home.heroTitle')}`} />
        <meta property="og:description" content={t('home.heroSubtitle')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai4institute.eu" />
        <link rel="canonical" href="https://ai4institute.eu" />
      </Helmet>

      <AtosHero />
      <FutureSection />
      <IdeasSection />
      <ClientSuccess />
      <Products />
      <ComprehensiveFooter />
    </motion.div>
  );
};

export default HomePage;
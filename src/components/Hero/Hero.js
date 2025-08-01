import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Button, GradientText, HeroBanner, ViewAllLink, MagazineGrid, MagazineCard, ReportBadge, CardContent, StatCard, PartnerSection, PartnerGrid } from '../../styles/AppStyles';
import {
  HeroContainer,
  HeroContent,
  HeroVisual,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  HeroStats,
  StatNumber,
  StatLabel,
  VisualCard,
  VisualContent,
  VisualMetrics,
  MetricItem,
  MetricValue,
  MetricLabel,
  VisualizationArea
} from './HeroStyles';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [typewriterText, setTypewriterText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'transform learning experiences',
    'accelerate scientific discovery',
    'drive technological innovation',
    'shape the future of AI',
    'empower global education'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && typewriterText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setTypewriterText(
          isDeleting
            ? currentPhrase.slice(0, typewriterText.length - 1)
            : currentPhrase.slice(0, typewriterText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, currentPhraseIndex, phrases]);

  const stats = [
    { number: 150, label: 'Partner Organizations', suffix: '+' },
    { number: 85, label: 'EU Projects', suffix: '+' },
    { number: 28, label: 'Countries', suffix: '' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <HeroContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Banner Section */}
        <HeroBanner>
          <div>
            <motion.div variants={itemVariants}>
              <h1>
                Advancing <span className="highlight">Artificial Intelligence</span><br />
                Through Research, Innovation & <GradientText>Global Partnership</GradientText>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p>
                Leading the transformation of artificial intelligence through cutting-edge research, 
                innovative European programmes, and strategic partnerships that drive technological 
                excellence across industries and academia worldwide.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button 
                  as={Link} 
                  to="/expertise" 
                  variant="primary" 
                  size="large"
                >
                  Explore Our Research
                </Button>
                <Button 
                  as={Link} 
                  to="/programs" 
                  variant="secondary" 
                  size="large"
                >
                  View EU Programmes
                </Button>
              </div>
            </motion.div>
          </div>
        </HeroBanner>
        
        {/* Featured Research Section */}
        <div style={{ padding: '5rem 2rem', background: '#f8f9fa' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1a1a1a', fontFamily: 'Raleway, sans-serif' }}>
                Leading AI Research & Innovation
              </h2>
              <ViewAllLink href="#">
                View all research
              </ViewAllLink>
            </div>
            
            <MagazineGrid>
              <MagazineCard variant="primary">
                <ReportBadge>RESEARCH REPORT</ReportBadge>
                <CardContent>
                  <h3>Advancing Machine Learning Through European Collaboration</h3>
                  <p>Comprehensive analysis of AI development across EU member states</p>
                </CardContent>
              </MagazineCard>
              
              <MagazineCard variant="secondary">
                <ReportBadge>INNOVATION</ReportBadge>
                <CardContent>
                  <h3>Next-Generation AI Technologies for Education</h3>
                  <p>Transforming learning experiences through intelligent systems</p>
                </CardContent>
              </MagazineCard>
              
              <MagazineCard variant="accent">
                <ReportBadge>PARTNERSHIP</ReportBadge>
                <CardContent>
                  <h3>Global AI Research Network Expansion</h3>
                  <p>Building bridges between academia and industry worldwide</p>
                </CardContent>
              </MagazineCard>
              
              <MagazineCard variant="neutral">
                <ReportBadge>INSIGHTS</ReportBadge>
                <CardContent style={{ color: '#1a1a1a' }}>
                  <h3 style={{ color: '#1a1a1a' }}>Sustainable AI Development Practices</h3>
                  <p style={{ color: '#525252' }}>Environmental responsibility in artificial intelligence research</p>
                </CardContent>
              </MagazineCard>
            </MagazineGrid>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div style={{ padding: '5rem 2rem', background: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1a1a1a', marginBottom: '4rem', textAlign: 'center', fontFamily: 'Raleway, sans-serif' }}>
              AI4 Impact & Reach
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <StatCard>
                <h3>150+</h3>
                <p>Partner organizations across Europe and beyond working together on AI innovation</p>
              </StatCard>
              
              <StatCard>
                <h3>€50M+</h3>
                <p>In research funding secured through EU programmes and international partnerships</p>
              </StatCard>
              
              <StatCard>
                <h3>28</h3>
                <p>Countries actively participating in our collaborative AI research initiatives</p>
              </StatCard>
              
              <StatCard>
                <h3>95%</h3>
                <p>Project success rate in delivering innovative AI solutions for education and research</p>
              </StatCard>
            </div>
          </div>
        </div>
        
        {/* Partners Section */}
        <PartnerSection style={{ background: '#f8f9fa', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#1a1a1a', fontFamily: 'Raleway, sans-serif' }}>Trusted by Leading Organizations</h2>
            <PartnerGrid>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#525252' }}>European Commission</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#525252' }}>Horizon Europe</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#525252' }}>EIT Digital</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#525252' }}>UNESCO</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#525252' }}>IEEE</div>
            </PartnerGrid>
          </div>
        </PartnerSection>
      </motion.div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </HeroContainer>
  );
};

export default Hero;
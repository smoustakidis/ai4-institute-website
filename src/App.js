import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import LoadingSpinner from './components/UI/LoadingSpinner';
import ScrollToTop from './components/UI/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';
import { AppContainer } from './styles/AppStyles';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const EUProjectsPage = lazy(() => import('./pages/EUProjectsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ExpertisePage = lazy(() => import('./pages/ExpertisePage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function AppContent() {
  return (
    <AppContainer>
      <ScrollToTop />
      <Header />
      
      <main>
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/eu-projects" element={<EUProjectsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/expertise" element={<ExpertisePage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<ArticlePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
    </AppContainer>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
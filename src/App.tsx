import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import DeveloperShowcase from './components/DeveloperShowcase/DeveloperShowcase';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import PropertiesSection from './components/PropertiesSection/PropertiesSection';
import ProcessSection from './components/ProcessSection/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import EnquirySection from './components/EnquirySection/EnquirySection';
import Footer from './components/Footer/Footer';
import DeveloperDetailPage from './components/DeveloperDetailPage/DeveloperDetailPage';
import { WhatsAppButton, BackToTop } from './components/FloatingButtons/FloatingButtons';

function HomePage() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selector = '.reveal-heading, .reveal-fade-up, .section-header, .rn-service-tab-wrapper, .rn-partner-card, .rn-process-card';
    if (prefersReduced) {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Working With Trusted Property Developers — Positioned IMMEDIATELY After Hero */}
        <DeveloperShowcase />

        {/* 3. WHO WE ARE — Scroll-Based Zoom Reveal & Owner Presentation */}
        <AboutSection />

        {/* 4. Everything You Need for Your Next Move — Zoom-Blur Image Carousel */}
        <ServicesSection />

        {/* 5. Properties Collection */}
        <PropertiesSection />

        {/* 6. How We Work — Rock-Solid Interactive Stage (Zero Overlap) */}
        <ProcessSection />

        {/* 7. Testimonials */}
        <TestimonialsSection />

        {/* Note: "Property Insights That Help You Decide" has been removed */}

        {/* 8. Enquiry & Advisory Consultation */}
        <EnquirySection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/developer/:slug" element={<DeveloperDetailPage />} />
      </Routes>
    </>
  );
}

export default App;

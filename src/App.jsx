import React, { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Hero from './sections/Hero';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import MouseTrail from './components/MouseTrail';
import ScrollProgress from './components/ScrollProgress';

// Lazy load sections below the fold
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

const SectionSkeleton = () => (
    <div className="w-full h-[300px] flex items-center justify-center bg-black/20 animate-pulse">
        <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-[#000000] min-h-screen relative selection:bg-accent/30 selection:text-white">
        <ScrollProgress />
        <FloatingParticles />
        <MouseTrail />
        <div className="relative z-10">
          <Hero />
          <Suspense fallback={<SectionSkeleton />}>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
          <Footer />
        </div>
      </div>
    </LazyMotion>
  );
}

export default App;


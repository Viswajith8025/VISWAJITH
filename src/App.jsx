import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import MouseTrail from './components/MouseTrail';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-[#000000] min-h-screen relative selection:bg-accent/30 selection:text-white">
        <ScrollProgress />
        <FloatingParticles />
        <MouseTrail />
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </LazyMotion>
  );
}

export default App;


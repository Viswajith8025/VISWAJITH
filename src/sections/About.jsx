import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section id="about" className="section-container border-t border-white/10 py-20 md:py-32 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-2 gap-16 md:gap-20 items-start"
      >
        <div className="space-y-10 md:space-y-12">
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-center lg:text-left">
            <span className="text-accent text-sm font-bold uppercase tracking-widest leading-loose">About Me</span>
            <h2 className="text-4xl md:text-8xl font-display font-medium tracking-tight">
              Building the <br className="hidden md:block" /> <span className="italic">Vibe.</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-gray-400 text-lg md:text-xl font-medium tracking-tight max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <p>I'm a MERN Stack developer who thrives on the perfect flow and AI-accelerated building.</p>
            <p>I don't just write code; I craft digital experiences that feel right, focusing on clean logic and smooth interactions.</p>
            <p>For me, it's about the art of the build—leveraging modern tools to turn ideas into reality as fast as a vibe shifts.</p>
          </motion.div>
        </div>

        <div className="space-y-10 md:space-y-12 lg:pt-24">
          <motion.div 
            variants={itemVariants}
            className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[32px] space-y-6 md:space-y-8 group hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.15)] transition-all duration-500"
          >
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity">Professional Experience</h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-accent/30 group-hover:border-accent transition-colors">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-accent rounded-full shadow-[0_0_10px_#A855F7] group-hover:scale-125 transition-transform"></div>
                <p className="text-lg md:text-xl font-display font-medium text-white">MERN Stack Intern — Softroniics</p>
                <p className="text-accent text-xs md:text-sm font-bold mt-1">06/2024 – 02/2025 | Calicut, India</p>
                <div className="mt-4 space-y-3 text-white/60 text-sm leading-relaxed">
                  <p>• Collaborated with senior developers on full-stack feature implementations and critical bug fixes for production-grade MERN applications.</p>
                  <p>• Engineered scalable front-end components and data schemas using React, Tailwind CSS, MongoDB, and SQL.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[32px] space-y-6 md:space-y-8 group hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.15)] transition-all duration-500"
          >
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity">Academic Background</h3>
            <div className="space-y-6 md:space-y-8 font-display">
              <div className="relative pl-6 border-l border-white/10 group-hover:border-white/30 transition-colors">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-white/20 rounded-full group-hover:bg-white transition-colors animate-pulse-slow"></div>
                <p className="text-xl md:text-2xl font-medium text-white tracking-tight">Bachelor of Computer Science</p>
                <p className="text-accent text-xs md:text-sm font-bold mt-1 uppercase tracking-widest">College of Applied Science, IHRD | 2021 – 2024</p>
                <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-md italic font-medium">Focused on core algorithms, software engineering principles, and distributed systems architecture.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

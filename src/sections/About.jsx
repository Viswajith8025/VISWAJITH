import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="section-container border-t border-white/10 py-14 md:py-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-8 md:space-y-10"
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-start">
          <motion.div variants={itemVariants} className="space-y-3 text-center lg:text-left">
            <span className="text-accent text-sm font-bold uppercase tracking-widest leading-loose">About Me</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">
              Building the <span className="italic">Vibe.</span>
            </h2>
            <div className="space-y-2.5 text-gray-400 text-base md:text-lg font-medium tracking-tight max-w-xl mx-auto lg:mx-0 pt-1">
              <p>
                Full stack developer and forward deployed engineer — AI agents, business automation, and ops software in React, TypeScript, Python, and Supabase.
              </p>
              <p>
                Client-facing by default: on-site visits, requirement gathering, then shipping systems with RBAC and real data workflows.
              </p>
            </div>
          </motion.div>

          <div className="space-y-4 self-start w-full">
            <motion.div
              variants={itemVariants}
              className="h-fit p-4 md:p-5 bg-white/5 border border-white/10 rounded-[24px] space-y-3 group hover:border-accent/40 transition-all duration-500"
            >
              <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity">
                Emilda &amp; co
              </h3>
              <div className="relative pl-4 border-l border-accent/30 group-hover:border-accent transition-colors">
                <div className="absolute left-[-3.5px] top-1.5 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#A855F7]" />
                <p className="text-base font-display font-medium text-white">Software Engineer (FDE)</p>
                <p className="text-accent text-[10px] font-bold mt-0.5">06/2026 – Present · Calicut</p>
                <ul className="mt-2.5 space-y-1.5 text-white/60 text-[13px] leading-snug">
                  <li>• Client requirements, on-site visits, and workflow analysis.</li>
                  <li>• AI automations, agentic workflows, and full-stack ops apps.</li>
                  <li>• Implementation, integration, testing, and client-driven refinement.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-fit p-4 md:p-5 bg-white/5 border border-white/10 rounded-[24px] space-y-3 group hover:border-accent/40 transition-all duration-500"
            >
              <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity">
                Freelance
              </h3>
              <div className="relative pl-4 border-l border-accent/30 group-hover:border-accent transition-colors">
                <div className="absolute left-[-3.5px] top-1.5 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#A855F7]" />
                <p className="text-base font-display font-medium text-white">Full Stack Developer</p>
                <p className="text-accent text-[10px] font-bold mt-0.5">09/2024 – 04/2026 · Calicut</p>
                <ul className="mt-2.5 space-y-1.5 text-white/60 text-[13px] leading-snug">
                  <li>• Client web apps: auth, dashboards, responsive UI, business workflows.</li>
                  <li>• Frontend + backend, integration, deployment, and hosting.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="h-fit p-4 md:p-5 bg-white/5 border border-white/10 rounded-[24px] group hover:border-accent/40 transition-all duration-500"
        >
          <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity mb-3">
            Education &amp; Certificates
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            <div className="relative pl-4 border-l border-white/10 font-display">
              <div className="absolute left-[-3.5px] top-1.5 w-1.5 h-1.5 bg-white/25 rounded-full group-hover:bg-white transition-colors" />
              <p className="text-sm md:text-base font-medium text-white tracking-tight">Bachelor of Computer Science</p>
              <p className="text-accent text-[10px] font-bold mt-1 uppercase tracking-widest">
                IHRD · 2021 – 2024
              </p>
            </div>
            <div className="relative pl-4 border-l border-white/10">
              <div className="absolute left-[-3.5px] top-1.5 w-1.5 h-1.5 bg-white/25 rounded-full" />
              <p className="text-sm md:text-base font-display font-medium text-white">
                Agentic AI · LangChain &amp; LangGraph
              </p>
              <p className="text-accent/80 text-[10px] font-bold mt-1 uppercase tracking-widest">
                IBM · Coursera · Aug 2026
              </p>
            </div>
            <div className="relative pl-4 border-l border-white/10">
              <div className="absolute left-[-3.5px] top-1.5 w-1.5 h-1.5 bg-white/25 rounded-full" />
              <p className="text-sm md:text-base font-display font-medium text-white">
                MERN Stack Internship
              </p>
              <p className="text-accent/80 text-[10px] font-bold mt-1 uppercase tracking-widest">
                Softroniics · Jun 2024 – Feb 2025
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

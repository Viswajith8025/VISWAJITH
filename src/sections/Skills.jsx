import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Architecture",
      skills: ["React", "Javascript (ES6+)", "Tailwind CSS", "Framer Motion", "Responsive Design"]
    },
    {
      name: "Backend & Systems",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      name: "Elite Tooling",
      skills: ["Git & GitHub", "Vite", "Postman", "AI-Assisted Workflows", "Figma"]
    }
  ];

  const aiWorkflow = ["Antigravity", "Claude Code", "Gemini Flash", "Deepseek", "Claude Sonnet", "Lovable", "Codex", "ChatGPT", "21st Dev", "Github Copilot", "Blackbox"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  return (
    <section id="skills" className="section-container border-t border-white/10 py-20 md:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-24 md:gap-32"
      >
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20">
          <motion.div variants={itemVariants} className="lg:w-1/3 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <span className="text-secondary text-sm font-bold uppercase tracking-widest leading-loose">Expertise</span>
              <h2 className="text-4xl md:text-7xl font-display font-medium tracking-tight leading-[1.1]">Technical <br className="hidden md:block" /> Stack.</h2>
            </div>
            <p className="text-gray-400 text-lg font-medium tracking-tight max-w-sm mx-auto lg:mx-0">
              Fusing core engineering fundamentals with advanced AI-powered development.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-6 text-center sm:text-left">
                <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{category.name}</h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="group/skill flex items-center justify-center sm:justify-start gap-4 text-white/50 hover:text-white transition-all cursor-default">
                      <div className="w-1.5 h-1.5 bg-accent/30 rounded-full group-hover/skill:bg-accent group-hover/skill:scale-150 group-hover/skill:shadow-[0_0_10px_#A855F7] transition-all duration-300"></div>
                      <span className="text-lg font-medium tracking-tight transition-transform group-hover/skill:translate-x-2 duration-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* REFINED COMPACT AI Workflow - Focused & Premium Integration */}
        <motion.div
          variants={itemVariants}
          className="p-8 md:p-14 bg-white/[0.01] border border-white/5 rounded-[40px] md:rounded-[60px] relative overflow-hidden group hover:border-white/10 transition-all duration-700"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
            <div className="space-y-4 text-center lg:text-left max-w-sm">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">Autonomous Engineering</span>
              <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tighter text-white">
                Propelled by <br /> <span className="italic font-light">Synthetic Logic.</span>
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 max-w-xl">
              {aiWorkflow.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={tagVariants}
                  whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="px-6 py-3 bg-white/[0.02] border border-white/10 rounded-full flex items-center gap-3 transition-all duration-300 backdrop-blur-sm cursor-default"
                >
                  <div className="w-1.5 h-1.5 bg-accent/60 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
                  <span className="text-white/60 text-[12px] font-bold uppercase tracking-widest whitespace-nowrap">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

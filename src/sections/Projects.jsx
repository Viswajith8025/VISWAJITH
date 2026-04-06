import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import SlideInButton from '../components/SlideInButton';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import jananiImg from '../assets/janani.png';
import arsenalImg from '../assets/arsenalfitness.png';
import livekeralamImg from '../assets/livekeralam.png';

const Projects = () => {
  const projectList = [
    {
      title: "Flexora",
      subtitle: "One-Day Job Platform",
      description: "High-performance marketplace connecting job providers with seekers for short-term opportunities.",
      tags: ["React", "Node.js", "MongoDB"],
      features: [
        "Reduced matching latency by 45%.",
        "Engineered Admin real-time moderation."
      ],
      hostedLink: "#",
      githubLink: "https://github.com/Viswajith8025/Flexora",
      image: "/projects/flexora.png"
    },
    {
      title: "LiveKeralam",
      subtitle: "Discovery Platform",
      description: "Centralized MERN-based discovery engine for cultural events and tourism across Kerala.",
      tags: ["MERN Stack", "Express.js", "Scalable UI"],
      features: [
        "Achieved 35% user engagement increase.",
        "Architected multi-actor processing system."
      ],
      hostedLink: "https://eventkeralamm.vercel.app/",
      githubLink: "https://github.com/Viswajith8025/LiveKeralam",
      image: livekeralamImg
    },
    {
      title: "Civic Eye",
      subtitle: "Citizen Complaint Reporting",
      description: "Transparency platform for reporting violations with AI-validated media and 20% rewards.",
      tags: ["Node.js", "PostgreSQL", "AI Validation"],
      features: [
        "Verified 300+ reports with AI media.",
        "Automated 100% accurate incentive logic."
      ],
      hostedLink: "#",
      githubLink: "https://github.com/Viswajith8025/CivicEye",
      image: "/projects/civiceye.png"
    },
    {
      title: "EcoCraft",
      subtitle: "AI Waste-to-Craft Generator",
      description: "Sustainability platform leveraging object detection to transform waste into creative DIY projects.",
      tags: ["Hugging Face", "Object Detection"],
      features: [
        "Integrated 92% detection accuracy models.",
        "Built animated 2x session length pipeline."
      ],
      hostedLink: "#",
      githubLink: "https://github.com/Viswajith8025/EcoCraft",
      image: "/projects/ecocraft.png"
    },
    {
      title: "Janani",
      subtitle: "Wellness Experience",
      description: "Nature-inspired digital experience for luxury wellness resort, focusing on Ayurvedic storytelling.",
      tags: ["React", "UI/UX", "Figma"],
      features: [
        "100/100 Lighthouse performance score.",
        "Refined 25% lower bounce rate flows."
      ],
      hostedLink: "#",
      githubLink: "#",
      image: jananiImg
    },
    {
      title: "Arsenal Fitness",
      subtitle: "Premium Fitness Platform",
      description: "High-performance fitness platform with aggressive brand aesthetics and real-time calculators.",
      tags: ["Performance UI", "React", "Tailwind"],
      features: [
        "Standardized 'Arsenal Signature' system.",
        "Engineered real-time metabolic feedback."
      ],
      hostedLink: "https://arsenal-fitness.vercel.app/",
      githubLink: "https://github.com/Viswajith8025/ArsenalFitness",
      image: arsenalImg
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section id="projects" className="section-container border-t border-white/10 py-20 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest leading-loose">Projects</span>
          <h2 className="text-4xl md:text-7xl font-display font-medium tracking-tight">
            Selected Works.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg font-medium tracking-tight max-w-sm"
        >
          Building scalable solutions with a focus on impact and efficiency.
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24"
      >
        {projectList.map((project, index) => (
          <motion.div 
            key={index} 
            variants={projectVariants}
            className="group flex flex-col gap-8"
          >
            <div className="aspect-video bg-white/5 border border-white/10 rounded-[32px] overflow-hidden relative transition-all duration-700 ease-out group-hover:border-accent/40 group-hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.2)] group-hover:-translate-y-2">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-display text-4xl font-bold uppercase tracking-tighter opacity-10">
                  {project.title}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>

            <div className="flex flex-col gap-6 px-1 transition-transform duration-500 group-hover:translate-x-1">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-[9px] font-bold text-accent/60 border border-accent/20 uppercase tracking-widest px-2 py-0.5 bg-accent/5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-white group-hover:text-accent transition-colors duration-500 tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 group/feat">
                    <div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-1.5 transition-transform group-hover/feat:scale-125"></div>
                    <span className="text-[12px] text-white/50 leading-snug transition-colors group-hover/feat:text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.hostedLink !== "#" && (
                  <SlideInButton
                    text="Demo"
                    href={project.hostedLink}
                    primary={true}
                    className="!px-6 !py-3 !text-[10px] !gap-2"
                    icon={Globe}
                  />
                )}
                {project.githubLink !== "#" && (
                  <SlideInButton
                    text="Source"
                    href={project.githubLink}
                    className="!px-6 !py-3 !text-[10px] !gap-2"
                    icon={GithubIcon}
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";
import SlideInButton from "../components/SlideInButton";
import { Mail } from "lucide-react";

/**
 * LiquidName - A high-fidelity text effect that simulates a drop of water filling the name 
 * from the bottom up when hovered.
 */
const LiquidName = ({ text }) => {
  return (
    <div className="relative group cursor-default select-none">
      {/* Base Text (Transparent with stroke or just white/low-opacity) */}
      <h1 className="text-[58px] md:text-[110px] font-display font-medium leading-[0.95] tracking-tighter text-white/10 uppercase">
        {text}
      </h1>
      
      {/* Liquid Fill Overlay */}
      <div 
        className="absolute inset-0 overflow-hidden transition-all duration-700 ease-in-out clip-path-liquid group-hover:h-full h-0 bottom-0 top-auto"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        }}
      >
        <h1 
          className="text-[58px] md:text-[110px] font-display font-medium leading-[0.95] tracking-tighter text-accent uppercase relative"
          style={{
            backgroundImage: 'linear-gradient(180deg, #A855F7 0%, #6366F1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {text}
          {/* Animated Wave Fragment */}
          <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-accent/20 rounded-[40%] animate-water-wave pointer-events-none -z-10 translate-y-[-100%] group-hover:translate-y-[-80%] transition-transform duration-1000"></div>
        </h1>
      </div>

      {/* Static Base for Clarity */}
      <h1 className="absolute inset-0 text-[58px] md:text-[110px] font-display font-medium leading-[0.95] tracking-tighter text-white uppercase pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
        {text}
      </h1>
    </div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  const videoVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden selection:bg-white selection:text-black">
      
      {/* PHASE 1: Atmospheric Mesh Layer (Mathematically Sharp) */}
      <div className="absolute inset-0 z-0 bg-bg-dark">
        <div className="absolute inset-0 bg-mesh-gradient opacity-40 animate-mesh-drift"></div>
      </div>

      {/* PHASE 2: Background Video with Clarity Injection */}
      <motion.div 
        variants={videoVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-[1] pointer-events-none"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover contrast-[1.1] saturate-[1.1]"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Optimized Pro Overlay (Reduced opacity, removed blur for 2x clarity) */}
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* Hero Content Staggered */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1200px] px-6 flex flex-col items-center pt-[100px] md:pt-[150px]"
      >
        <div className="flex flex-col items-center gap-[40px] text-center">

          {/* Badge/Pill Reveal */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/20 rounded-full backdrop-blur-md self-center"
          >
            <div className="w-[6px] h-[6px] bg-accent rounded-full animate-ping"></div>
            <p className="text-[12px] font-bold text-white/70 tracking-widest uppercase">
              Available for <span className="text-white">New Opportunities</span>
            </p>
          </motion.div>

          {/* Liquid Heading Reveal */}
          <div className="flex flex-col gap-6 items-center">
            <motion.div variants={itemVariants}>
                <LiquidName text="VISWAJITH E" />
            </motion.div>

            <motion.div 
                variants={itemVariants}
                className="flex items-center gap-4 text-accent text-sm md:text-xl font-bold uppercase tracking-[0.4em]"
            >
                <div className="w-10 h-[1px] bg-accent/40"></div>
                Full Stack Developer
                <div className="w-10 h-[1px] bg-accent/40"></div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="max-w-[640px] text-[16px] md:text-[19px] font-medium text-white/50 leading-relaxed tracking-tight"
            >
              Architecting high-fidelity digital products with a focus on AI-assisted engineering and premium MERN stack architecture.
            </motion.p>
          </div>

          {/* Slide-In CTA Button with Smooth Scroll Anchor */}
          <motion.div variants={itemVariants}>
            <SlideInButton
              text="Start a project"
              href="#contact"
              primary={true}
              icon={Mail}
              className="!px-12 !py-6 !text-xs !tracking-[0.2em]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

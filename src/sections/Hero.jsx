import React, { useState, useEffect } from "react";
import { m } from "framer-motion";
import SlideInButton from "../components/SlideInButton";
import { Mail } from "lucide-react";
import heroPoster from "../assets/hero.png";

/**
 * LiquidName - High-fidelity text effect with optimized SEO (Single H1) 
 */
const LiquidName = ({ text }) => {
  return (
    <div className="relative group cursor-default select-none">
      {/* Base Text (Visual decoration) */}
      <span className="text-[58px] md:text-[110px] font-display font-medium leading-[0.95] tracking-tighter text-white/10 uppercase block">
        {text}
      </span>
      
      {/* Liquid Fill Overlay */}
      <div 
        className="absolute inset-0 overflow-hidden transition-all duration-700 ease-in-out clip-path-liquid group-hover:h-full h-0 bottom-0 top-auto pointer-events-none"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        }}
      >
        <span 
          className="text-[58px] md:text-[110px] font-display font-medium leading-[0.95] tracking-tighter text-accent uppercase relative block"
          style={{
            backgroundImage: 'linear-gradient(180deg, #A855F7 0%, #6366F1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {text}
          <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-accent/20 rounded-[40%] animate-water-wave pointer-events-none -z-10 translate-y-[-100%] group-hover:translate-y-[-80%] transition-transform duration-1000"></div>
        </span>
      </div>

      {/* Static Base for Semantic SEO */}
      <h1 className="absolute inset-0 text-[58px] md:text-[110px] font-display font-medium leading-[0.95] tracking-tighter text-white uppercase pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
        {text}
      </h1>
    </div>
  );
};


const Hero = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Optimization Strategy: Deferred Video Request
    // Wait for initial assets to settle before requesting heavy video
    const timeout = setTimeout(() => {
        setVideoSrc("/hero-bg.mp4");
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const videoVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Mesh Layer */}
      <div className="absolute inset-0 z-0 bg-bg-dark">
        <div className="absolute inset-0 bg-mesh-gradient opacity-40 animate-mesh-drift"></div>
      </div>

      {/* Planet Video Component with Poster Placeholder */}
      <m.div 
        variants={videoVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-[1] pointer-events-none"
      >
        <video
          key={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover contrast-[1.1] saturate-[1.1]"
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </m.div>

      {/* Content Overlay */}
      <m.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-[1200px] px-6 flex flex-col items-center pt-[100px] md:pt-[150px]"
      >
        <div className="flex flex-col items-center gap-[40px] text-center">

          <m.div 
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/20 rounded-full backdrop-blur-md self-center"
          >
            <div className="w-[6px] h-[6px] bg-accent rounded-full animate-ping"></div>
            <p className="text-[12px] font-bold text-white/70 tracking-widest uppercase">
              Available for <span className="text-white">New Opportunities</span>
            </p>
          </m.div>

          <div className="flex flex-col gap-6 items-center">
            <m.div variants={itemVariants}>
                <LiquidName text="VISWAJITH E" />
            </m.div>

            <m.div 
                variants={itemVariants}
                className="flex items-center gap-4 text-accent text-sm md:text-xl font-bold uppercase tracking-[0.4em]"
            >
                <div className="w-10 h-[1px] bg-accent/40"></div>
                Full Stack Developer
                <div className="w-10 h-[1px] bg-accent/40"></div>
            </m.div>

            <m.p 
              variants={itemVariants}
              className="max-w-[640px] text-[16px] md:text-[19px] font-medium text-white/50 leading-relaxed tracking-tight"
            >
              Building clean, high-fidelity digital products with a focus on AI-accelerated flow and the MERN stack.
            </m.p>
          </div>

          <m.div variants={itemVariants}>
            <SlideInButton
              text="Start a project"
              href="#contact"
              primary={true}
              icon={Mail}
              className="!px-12 !py-6 !text-xs !tracking-[0.2em]"
            />
          </m.div>
        </div>
      </m.div>
    </section>
  );
};


export default Hero;

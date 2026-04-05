import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgress - Zero-lag navigation indicator with a premium, un-clipped glow effect.
 * High-stiffness spring ensures instant performance, while the outer-shadow 
 * provides a signature 'pro' visual.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 700, 
    damping: 80,
    mass: 0.2,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none">
      {/* Background Track with Subtle Blur */}
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md" />
      
      {/* Dynamic Progress Bar with High-Impact Multi-Layer Glow */}
      <motion.div 
        className="h-full bg-accent origin-left shadow-[0_0_15px_#A855F7,0_0_30px_#A855F7,0_0_45px_rgba(168,85,247,0.6)]"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;

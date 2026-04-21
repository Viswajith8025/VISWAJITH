import React from 'react';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
        <span className="font-display text-2xl font-medium tracking-tighter text-white">
          VISWAJITH E
        </span>
        <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">
          © 2025 • DESIGNED & BUILT WITH PASSION
        </span>
      </div>

      <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
        <a href="https://github.com/Viswajith8025" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline-offset-8">GitHub</a>
        <a href="https://www.linkedin.com/in/viswajithe" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline-offset-8">LinkedIn</a>
      </div>

      <div className="flex flex-col gap-2 items-center md:items-end text-center md:text-right">
        <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] block">Current Status</span>
        <span className="text-white text-xs font-bold flex items-center justify-center md:justify-end gap-2 group">
          <div className="w-[6px] h-[6px] bg-accent rounded-full animate-pulse shadow-[0_0_8px_#A855F7] group-hover:scale-150 transition-transform"></div>
          AVAILABLE FOR OPPORTUNITIES
        </span>
      </div>
    </footer>
  );
};

export default Footer;

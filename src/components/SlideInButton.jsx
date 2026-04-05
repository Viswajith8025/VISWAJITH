import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * SlideInButton - A high-fidelity interactive button using pure Tailwind CSS.
 * This version avoids Framer Motion to ensure 100% compatibility with React 19
 * while maintaining the identical 'Slide-In' premium feel.
 */
const SlideInButton = ({
  text,
  icon: Icon = ArrowUpRight,
  href = "#",
  primary = false,
  className = ""
}) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  // Base styles for primary vs ghost variants
  const baseStyles = primary
    ? "bg-white text-black"
    : "bg-white/5 border border-white/10 text-white";

  // Hover background transition styles
  const hoverBgStyles = primary ? "bg-accent" : "bg-white";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`relative group flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all duration-300 ease-out font-bold uppercase tracking-widest text-[13px] hover:scale-[1.03] hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)] active:scale-100 ${baseStyles} ${className}`}
    >
      {/* Background Fill Layer (Pure CSS Transition) */}
      <div 
        className={`absolute inset-0 z-0 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${hoverBgStyles}`}
      />

      {/* Button Content */}
      <div className="relative z-10 flex items-center gap-2 pointer-events-none">
        {/* Text Shift */}
        <span
          className={`translate-x-0 group-hover:-translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            primary ? "group-hover:text-white" : "group-hover:text-black"
          }`}
        >
          {text}
        </span>

        {/* Sliding Icon Container */}
        <div className="relative w-0 group-hover:w-5 h-5 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100">
           <div className={`flex items-center justify-center transform transition-transform duration-500 ${
             primary ? "text-white" : "text-black"
           }`}>
             <Icon size={18} strokeWidth={2.5} />
           </div>
        </div>
      </div>
    </a>
  );
};

export default SlideInButton;

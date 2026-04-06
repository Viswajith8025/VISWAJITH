import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * SlideInButton - A high-fidelity interactive button using pure Tailwind CSS.
 * This version supports both links (<a>) and button actions (<button>).
 */
const SlideInButton = ({
  text,
  icon: Icon = ArrowUpRight,
  href,
  onClick,
  type = "button",
  primary = false,
  className = ""
}) => {
  const isExternal = href?.startsWith("http") || href?.startsWith("mailto");

  const baseStyles = primary
    ? "bg-white text-black"
    : "bg-white/5 border border-white/10 text-white";

  const hoverBgStyles = primary ? "bg-accent" : "bg-white";

  const content = (
    <>
      {/* Background Fill Layer */}
      <div 
        className={`absolute inset-0 z-0 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${hoverBgStyles}`}
      />

      {/* Button Content */}
      <div className="relative z-10 flex items-center gap-2 pointer-events-none">
        <span
          className={`translate-x-0 group-hover:-translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            primary ? "group-hover:text-white" : "group-hover:text-black"
          }`}
        >
          {text}
        </span>

        <div className="relative w-0 group-hover:w-5 h-5 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100">
           <div className={`flex items-center justify-center transform transition-transform duration-500 ${
             primary ? "text-white" : "text-black"
           }`}>
             <Icon size={18} strokeWidth={2.5} />
           </div>
        </div>
      </div>
    </>
  );

  const commonClasses = `relative group flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all duration-300 ease-out font-bold uppercase tracking-widest text-[13px] hover:scale-[1.03] hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)] active:scale-100 ${baseStyles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={commonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
    >
      {content}
    </button>
  );
};

export default SlideInButton;

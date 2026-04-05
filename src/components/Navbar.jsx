import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Side: Logo */}
        <a href="#" className="group flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-display font-bold text-white shadow-[0_0_20px_-5px_#A855F7] group-hover:shadow-[0_0_30px_-5px_#A855F7] transition-all">
            V.
          </div>
          <span className="hidden sm:block text-white font-display font-bold text-xl tracking-tighter uppercase">
            Viswajith E.
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-white/50 text-xs font-bold uppercase tracking-[0.2em] hover:text-white hover:scale-105 transition-all duration-300 group/nav"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover/nav:w-full transition-all duration-500"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="relative px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white hover:scale-105 hover:shadow-[0_0_20px_-5px_#A855F7] transition-all duration-300 active:scale-95"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg font-medium flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
              <ChevronDown size={18} />
            </a>
          ))}
          <button className="w-full bg-white text-black font-medium py-4 rounded-full mt-4">
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

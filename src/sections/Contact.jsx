import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SlideInButton from '../components/SlideInButton';

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InputField = ({ label, type = "text", value, onChange, isTextArea = false }) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleBlur = (e) => {
    setFocused(false);
    setHasValue(e.target.value !== "");
  };

  const handleFocus = () => setFocused(true);

  const handleChange = (e) => {
    onChange(e);
    setHasValue(e.target.value !== "");
  };

  const Component = isTextArea ? "textarea" : "input";

  return (
    <div className="relative w-full group">
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focused || hasValue
            ? "-top-2.5 text-[11px] text-accent font-bold px-2 bg-[#000000]"
            : "top-4 text-[14px] text-white/40"
          }`}
      >
        {label}
      </label>

      <Component
        type={isTextArea ? undefined : type}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white text-[15px] focus:outline-none transition-all duration-300 ${focused ? "border-accent/50 bg-white/[0.08] shadow-[0_0_20px_rgba(168,85,247,0.1)]" : "hover:border-white/20"
          } ${isTextArea ? "min-h-[120px] resize-none" : "h-[56px]"}`}
      />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, message } = formData;

    // Construct the WhatsApp message with professional formatting
    const whatsappMessage = `Hello Viswajith! I'm *${name}* (${number}). I'm interested to connect with you.%0A%0A*Message:*%0A${message}`;
    const whatsappUrl = `https://wa.me/917736958025?text=${whatsappMessage}`;

    // Open in a new tab
    window.open(whatsappUrl, '_blank');

    // Optional: Reset form after redirection
    setFormData({ name: "", number: "", message: "" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/viswajithe",
      icon: LinkedinIcon
    },
    {
      name: "GitHub",
      href: "https://github.com/Viswajith8025",
      icon: GithubIcon
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="contact" className="section-container border-t border-white/10 py-20 md:py-32 scroll-mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16 md:gap-24"
      >
        {/* Left Column: Contact Info */}
        <div className="space-y-12 md:space-y-16">
          <motion.div variants={itemVariants} className="space-y-6 text-center lg:text-left">
            <span className="text-accent text-sm font-bold uppercase tracking-[0.3em] leading-loose">Contact</span>
            <h2 className="text-4xl md:text-7xl font-display font-medium tracking-tight leading-[1.1]">
              Let's build <br className="hidden md:block" /> something <span className="italic">powerful</span>.
            </h2>
          </motion.div>

          <div className="space-y-10 text-center lg:text-left">
            <div className="flex flex-col gap-8 items-center lg:items-start">
              <motion.a
                variants={itemVariants}
                href="mailto:viswajith.e.cs@gmail.com"
                className="group flex items-center gap-4 text-xl md:text-2xl font-display font-medium text-white hover:text-accent transition-all"
              >
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-300">
                  <Mail className="text-accent w-6 h-6 md:w-7 md:h-7" />
                </div>
                viswajith.e.cs@gmail.com
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="tel:+917736958025"
                className="group flex items-center gap-4 text-xl md:text-2xl font-display font-medium text-white hover:text-accent transition-all"
              >
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-300">
                  <Phone className="text-accent w-6 h-6 md:w-7 md:h-7" />
                </div>
                +91 7736958025
              </motion.a>

              <motion.div variants={itemVariants} className="group flex items-center gap-4 text-xl md:text-2xl font-display font-medium text-white hover:text-accent transition-all cursor-default">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-300">
                  <MapPin className="text-accent w-6 h-6 md:w-7 md:h-7" />
                </div>
                Calicut, Kerala 673010
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-10 space-y-6">
              <h3 className="text-xl font-display font-medium text-white">Social Presence</h3>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <SlideInButton
                    key={index}
                    text={social.name}
                    href={social.href}
                    icon={social.icon}
                    className="!px-8 !py-4 !text-[10px]"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Integrated Form */}
        <motion.div
          variants={itemVariants}
          className="p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[48px] relative overflow-hidden group hover:border-accent/20 transition-all duration-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 flex flex-col gap-10">
            <div className="space-y-3">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">Get in touch</span>
              <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-white">Send me a message.</h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <InputField
                  label="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <InputField
                  label="Number"
                  type="tel"
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                />
                <InputField
                  label="Your Message"
                  isTextArea={true}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex justify-center lg:justify-start pt-4">
                <SlideInButton
                  text="Send Message"
                  icon={Send}
                  primary={true}
                  type="submit"
                  className="!px-12 w-full sm:w-auto"
                />
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

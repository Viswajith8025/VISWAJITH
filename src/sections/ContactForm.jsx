import React, { useState } from "react";
import SlideInButton from "../components/SlideInButton";
import { Send } from "lucide-react";

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
      {/* Floating Label */}
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
          focused || hasValue
            ? "-top-2.5 text-[11px] text-accent font-bold px-2 bg-[#000000]"
            : "top-4 text-[14px] text-white/40"
        }`}
      >
        {label}
      </label>

      {/* Input Field */}
      <Component
        type={isTextArea ? undefined : type}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white text-[15px] focus:outline-none transition-all duration-300 ${
          focused ? "border-accent/50 bg-white/[0.08] shadow-[0_0_20px_rgba(168,85,247,0.1)]" : "hover:border-white/20"
        } ${isTextArea ? "min-h-[168px] resize-none" : "h-[56px]"}`}
      />
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add success logic here
    alert("Message sent! (Demo)");
    setFormData({ name: "", number: "", message: "" });
  };

  return (
    <section id="contact-form" className="section-container pt-20 pb-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-accent text-[12px] font-bold uppercase tracking-[0.4em]">Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white">
            Send me a <span className="italic">message</span>.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6">
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
          </div>

          <InputField
            label="Your Message"
            isTextArea={true}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <div className="flex justify-center pt-4">
            <SlideInButton
              text="Send Message"
              icon={Send}
              primary={true}
              className="!px-12"
              href="#"
              // Note: In a real app, this would be a type="submit" button. 
              // For now, we'll keep it as a link-nav button as approved.
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

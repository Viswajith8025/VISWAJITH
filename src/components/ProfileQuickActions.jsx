import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, X } from "lucide-react";
import SlideInButton from "./SlideInButton";

const RESUME_URL = "/resume.pdf";
const PROFILE_PHOTO = "/profile.jpg";

const ProfileQuickActions = ({ className = "" }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    if (activeModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  return (
    <>
      <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
        <SlideInButton
          text="View Resume"
          icon={FileText}
          onClick={() => setActiveModal("resume")}
          className="!px-6 !py-4 !text-[10px]"
        />
        <button
          type="button"
          onClick={() => setActiveModal("photo")}
          aria-label="View profile photo"
          className="group relative w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden bg-white/5 hover:border-accent/60 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_-8px_rgba(168,85,247,0.5)]"
        >
          <img
            src={PROFILE_PHOTO}
            alt="Viswajith E"
            className={`w-full h-full object-cover ${photoError ? "hidden" : ""}`}
            onError={() => setPhotoError(true)}
          />
          {photoError && (
            <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white/70 group-hover:text-accent transition-colors">
              VE
            </span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveModal(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className={`relative z-10 w-full bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl ${
                activeModal === "resume" ? "max-w-5xl h-[85vh]" : "max-w-md"
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                  {activeModal === "resume" ? "Resume" : "Profile Photo"}
                </p>
                <div className="flex items-center gap-2">
                  {activeModal === "resume" && (
                    <a
                      href={RESUME_URL}
                      download="Viswajith-E-Resume.pdf"
                      className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/70 border border-white/10 rounded-full hover:border-accent/40 hover:text-accent transition-colors"
                    >
                      Download
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    aria-label="Close"
                    className="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-accent/40 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {activeModal === "resume" ? (
                <iframe
                  title="Viswajith E Resume"
                  src={`${RESUME_URL}#toolbar=0`}
                  className="w-full h-[calc(85vh-65px)] bg-white"
                />
              ) : (
                <div className="p-4 md:p-6">
                  <img
                    src={PROFILE_PHOTO}
                    alt="Viswajith E"
                    className="w-full max-h-[70vh] object-contain rounded-2xl mx-auto"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileQuickActions;

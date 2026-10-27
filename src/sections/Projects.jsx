import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import SlideInButton from '../components/SlideInButton';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import jananiImg from '../assets/janani.png';
import arsenalImg from '../assets/arsenalfitness.png';
import livekeralamImg from '../assets/livekeralam.png';
import flexoraImg from '../assets/flexora.png';
import civiceyeImg from '../assets/civiceye.png';
import crmImg from '../assets/CRM.png';
import rozanaImg from '../assets/rozanaretreats.png';
import sevenHorsesImg from '../assets/7horses.jpeg';
import kmctTasksImg from '../assets/kmcttasks.png';
import viswalletImg from '../assets/viswallet.png';
import vaultErImg from '../assets/vault-er.png';
import opsvisorImg from '../assets/opsvisor.jpeg';
import kpnFuelImg from '../assets/kpnfuel.jpeg';
const Projects = () => {
  const projectList = [
    {
      title: "Flexora",
      subtitle: "One-Day Job Platform",
      description: "Same-day local staffing marketplace where district-aware job matching meets live Socket.io status and Razorpay checkout before a shift starts.",
      tags: ["Socket.io", "Razorpay", "MongoDB"],
      features: [
        "Region/district regex matching so seekers see jobs near them, not a national dump.",
        "Socket.io live job status plus Razorpay order create → signature verify on pay.",
      ],
      hostedLink: "https://flexora-wheat.vercel.app/",
      githubLink: "https://github.com/Viswajith8025/Flexora",
      image: flexoraImg
    },
    {
      title: "LiveKeralam",
      subtitle: "Discovery Platform",
      description: "Kerala heritage discovery with SoulSync scoring — vibe, district, and season weighted into a personal festival blueprint, then live event chat.",
      tags: ["SoulSync", "Socket.io", "MERN"],
      features: [
        "Weighted match engine (vibe keywords, district proximity, season) in SoulSync.",
        "JWT-auth Socket.io rooms per event plus admin support/event moderation inbox.",
      ],
      hostedLink: "https://eventkeralamm.vercel.app/",
      githubLink: "https://github.com/Viswajith8025/LiveKeralam",
      image: livekeralamImg
    },
    {
      title: "Civic Eye",
      subtitle: "Citizen Complaint Reporting",
      description: "Civic complaint PWA that clusters nearby reports on a map, AI-summarizes cases for staff, and notifies citizens on status and rewards.",
      tags: ["MongoDB Geo", "OpenAI", "PWA"],
      features: [
        "Mongo `$near` geo queries (Haversine fallback) so nearby complaints cluster on Leaflet.",
        "OpenAI municipal summaries with rule-based fallback when no API key is set.",
      ],
      hostedLink: "#",
      githubLink: "https://github.com/Viswajith8025/CivicEye",
      image: civiceyeImg
    },
    {
      title: "Janani",
      subtitle: "Wellness Experience",
      description: "Wayanad Ayurveda retreat with real booking refs and Razorpay checkout — not a brochure-only site.",
      tags: ["Razorpay", "Supabase", "React"],
      features: [
        "`JAN-` booking references into Supabase with Razorpay order create + signature verify.",
        "Rate-limited booking/auth routes and Zod-validated payment schemas.",
      ],
      hostedLink: "https://jananilifestyle.in",
      githubLink: "#",
      image: jananiImg
    },
    {
      title: "Enterprise CRM",
      subtitle: "Sales & Lead Management System",
      description: "Agency ERP that syncs eSSL biometric punches over SOAP and keeps writes race-safe with optimistic concurrency — plus GST billing.",
      tags: ["eSSL SOAP", "Supabase", "OCC"],
      features: [
        "Local sync agent pulls `GetTransactionsLog` from eSSL devices into attendance.",
        "Version-column OCC + immutable audit logs so concurrent edits don’t silently clobber.",
      ],
      hostedLink: "#",
      githubLink: null,
      image: crmImg
    },
    {
      title: "Arsenal Fitness",
      subtitle: "Premium Fitness Platform",
      description: "Gym brand site with an on-page AI coach scoped to gym knowledge, and join leads delivered over Telegram.",
      tags: ["Groq", "Telegram", "React"],
      features: [
        "Kiran coach: Groq → OpenAI → Gemini provider fallback over a fixed gym knowledge base.",
        "Serverless join API posts leads to Telegram when the bot token is configured.",
      ],
      hostedLink: "https://www.arsenalfitness.in/",
      githubLink: "https://github.com/Viswajith8025/ArsenalFitness",
      image: arsenalImg
    },
    {
      title: "Rozana Retreats",
      description: "Two-resort ops OS where staff punch with AWS Rekognition face match, housekeeping needs photo proof, and owners get Baileys EOD WhatsApp digests.",
      tags: ["Rekognition", "Supabase", "Baileys"],
      features: [
        "Face punch at ~95% match threshold with duplicate-face collapse across enrolments.",
        "6 PM IST Baileys EOD digests: attendance, leave, and unfinished rooms — no Meta template lag.",
      ],
      hostedLink: null,
      githubLink: null,
      image: rozanaImg,
    },
    {
      title: "7 Horses",
      description: "Tamil Nadu microfinance OS — paise-exact loan schedules, field cash routes with once-only handover, and bilingual EN/Tamil desks.",
      tags: ["Loan engine", "Supabase", "i18n"],
      features: [
        "Installment math in paise with IST day boundaries — Recovery/Advance derived from schedule state.",
        "Field stop list → cash/UPI collect → single cash handover to accountant (RLS-hardened).",
      ],
      hostedLink: null,
      githubLink: null,
      image: sevenHorsesImg,
    },
    {
      title: "KMCT Tasks",
      description: "Accountability module inside KMCT Nucleus — assignment hierarchy is enforced in Postgres, not just the UI, across college roles.",
      tags: ["Supabase", "RLS", "React"],
      features: [
        "DB + workflow forbid coordinators assigning “up”; owners can assign across colleges.",
        "Daily login summary modal: new / overdue / due-soon (IST), dismiss once per day.",
      ],
      hostedLink: null,
      githubLink: null,
      image: kmctTasksImg,
    },
    {
      title: "VAULT-ER",
      description: "PWA credentials vault with per-item TOTP codes, walk-away vault lock, and release gates that live-test RLS isolation between accounts.",
      tags: ["TOTP", "RLS", "PWA"],
      features: [
        "Idle/manual lock wipes in-memory vault; clipboard auto-clear after copy.",
        "`npm run gate` proves user B cannot read user A’s vault, docs, or audit log.",
      ],
      hostedLink: "https://vault-err.netlify.app/",
      githubLink: "https://github.com/Viswajith8025/Vault-er",
      image: vaultErImg,
    },
    {
      title: "Viswallet",
      description: "Offline-first finance PWA — integer paise in Dexie, salary-day cycles, and passphrase-wrapped encrypted backups.",
      tags: ["Dexie", "Paise", "AES backup"],
      features: [
        "Salary-day month keys drive pacing instead of calendar-month assumptions.",
        "Export/import as encrypted `.vwbackup` with passphrase — not plain JSON by default.",
      ],
      hostedLink: "https://viswallet-sigma.vercel.app/",
      githubLink: "https://github.com/Viswajith8025/Viswallet",
      image: viswalletImg,
    },
    {
      title: "KPN Reports Agent",
      description: "WhatsApp BI agent for 200+ branches — cron SQL digests with no LLM, plus a LangGraph lane that only calls whitelisted parameterized tools.",
      tags: ["LangGraph", "SQL", "Baileys"],
      features: [
        "Lane A: reviewed SQL → reconcile validation → PDF/Excel via Baileys (figures never from LLM).",
        "Lane B: layout JSON editable; every stated number must come back from a SQL tool.",
      ],
      hostedLink: null,
      githubLink: null,
      image: null,
    },
    {
      title: "KPN Sales Pipeline",
      description: "Parcel-software sales kanban with MD approval gates and renewal periods — illegal stage drags are blocked in the UI and RLS.",
      tags: ["MD gates", "Kanban", "Supabase"],
      features: [
        "Pipeline → pending_md → converted/renewal/lost, including MD counter/renegotiate.",
        "Mandatory next-step on board moves; salesperson portal vs admin approval strip.",
      ],
      hostedLink: null,
      githubLink: null,
      image: null,
    },
    {
      title: "KPN Fuel",
      description: "Station OS with on-device face anti-spoof for shift open/close, live BOS pump sync, and a digest-only WhatsApp bridge.",
      tags: ["ONNX Face", "BOS Sync", "PWA"],
      features: [
        "YuNet detect + SFace embed + MiniFASNet anti-spoof — scores only, no face DB on the bunk PC.",
        "Punch-gated shift sessions plus 20+ BOS payload kinds upserted into Supabase.",
      ],
      hostedLink: null,
      githubLink: null,
      image: kpnFuelImg,
    },
    {
      title: "OpsVisor",
      description: "Field-sales stack where visits must start within 50 m of the shop, GPS trails ride the open sale cycle, and offline negotiate/complete share one session id.",
      tags: ["Flutter", "GPS FGS", "Supabase"],
      features: [
        "VisitVerification gates (50 m start / 30 m accuracy) with fraud flags on the session.",
        "Android foreground location bounded to the sale cycle; offline GPS queue keeps timestamps.",
      ],
      hostedLink: null,
      githubLink: null,
      image: opsvisorImg,
    },
    {
      title: "Siddhant Fashion",
      description: "LAN-only textile factory PWA — phones work offline; the factory PC (SQLite WAL) is the only source of truth over Tailscale.",
      tags: ["Offline sync", "SQLite", "Paise"],
      features: [
        "Idempotent `sync_ops` with applied / conflict / held recovery on the outbox.",
        "Money and qty as integers (paise, cm, mg); two factories with outside-role lockdown.",
      ],
      hostedLink: null,
      githubLink: null,
      image: null,
    },
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

  const projectVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section id="projects" className="section-container border-t border-white/10 py-20 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest leading-loose">Projects</span>
          <h2 className="text-4xl md:text-7xl font-display font-medium tracking-tight">
            Selected Works.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg font-medium tracking-tight max-w-sm"
        >
          Building scalable solutions with a focus on impact and efficiency.
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24"
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            className="group flex flex-col gap-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden relative transition-all duration-700 ease-out group-hover:border-accent/40 group-hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.2)] group-hover:-translate-y-2">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto block transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-display text-4xl font-bold uppercase tracking-tighter opacity-10">
                  {project.title}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>

            <div className="flex flex-col gap-6 px-1 transition-transform duration-500 group-hover:translate-x-1">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-[9px] font-bold text-accent/60 border border-accent/20 uppercase tracking-widest px-2 py-0.5 bg-accent/5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-white group-hover:text-accent transition-colors duration-500 tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 group/feat">
                    <div className="w-1 h-1 bg-accent rounded-full shrink-0 mt-1.5 transition-transform group-hover/feat:scale-125"></div>
                    <span className="text-[12px] text-white/50 leading-snug transition-colors group-hover/feat:text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.hostedLink && project.hostedLink !== "#" && (
                  <SlideInButton
                    text="Demo"
                    href={project.hostedLink}
                    primary={true}
                    className="!px-6 !py-3 !text-[10px] !gap-2"
                    icon={Globe}
                  />
                )}
                {project.githubLink && project.githubLink !== "#" && (
                  <SlideInButton
                    text="Source"
                    href={project.githubLink}
                    className="!px-6 !py-3 !text-[10px] !gap-2"
                    icon={GithubIcon}
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

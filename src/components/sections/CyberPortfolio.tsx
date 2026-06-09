"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { GlassCard, Magnetic } from "../ui/NeumorphicAssets";
import { ShieldCheck, Terminal, Bug, Lock, WifiHigh, Eye, ArrowUpRight, Trophy, Certificate, Lightning } from "@phosphor-icons/react";

/* ============================================================ */
/* CYBER PORTFOLIO DATA — EASILY EDITABLE                       */
/* Add/remove items by editing these arrays.                    */
/* ============================================================ */

const cyberProjects = [
  {
    title: "Network Vulnerability Scanner",
    desc: "Automated tool for scanning and identifying common network vulnerabilities and misconfigurations.",
    icon: <WifiHigh size={28} weight="duotone" />,
    tags: ["Python", "Networking", "Security"],
    url: "#", // Replace with actual URL
    status: "in-progress" as const,
  },
  {
    title: "Phishing Detection System",
    desc: "ML-powered system to detect and classify phishing attempts across email and web vectors.",
    icon: <Eye size={28} weight="duotone" />,
    tags: ["Machine Learning", "Email Security"],
    url: "#",
    status: "coming-soon" as const,
  },
  {
    title: "Password Strength Analyzer",
    desc: "Real-time password analysis tool with entropy calculation and breach database cross-referencing.",
    icon: <Lock size={28} weight="duotone" />,
    tags: ["Cryptography", "Web App"],
    url: "#",
    status: "coming-soon" as const,
  },
  // ↓ ADD MORE CYBER PROJECTS HERE ↓
  // {
  //   title: "Project Name",
  //   desc: "Description...",
  //   icon: <Bug size={28} weight="duotone" />,
  //   tags: ["Tag1", "Tag2"],
  //   url: "https://example.com",
  //   status: "live" as const,
  // },
];

const cyberAchievements = [
  {
    title: "CTF Participation",
    desc: "Actively participating in Capture The Flag competitions to sharpen offensive security skills.",
    icon: <Trophy size={28} weight="duotone" />,
  },
  {
    title: "Security Research",
    desc: "Exploring vulnerabilities in web applications and contributing to responsible disclosure.",
    icon: <Bug size={28} weight="duotone" />,
  },
  // ↓ ADD MORE ACHIEVEMENTS HERE ↓
  // {
  //   title: "Achievement Name",
  //   desc: "Description...",
  //   icon: <Certificate size={28} weight="duotone" />,
  // },
];

const cyberSkills = [
  "Penetration Testing",
  "Network Security",
  "Web App Security",
  "Python Scripting",
  "Linux Administration",
  "OSINT",
  "Cryptography",
  "Forensics",
  // ↓ ADD MORE SKILLS HERE ↓
];

const cyberQualifications = [
  {
    title: "Cybersecurity Enthusiast",
    institution: "Self-taught & Ongoing Learning",
    year: "2024–Present",
    icon: <ShieldCheck size={24} weight="duotone" />,
  },
  // ↓ ADD MORE QUALIFICATIONS/CERTS HERE ↓
  // {
  //   title: "Certification Name",
  //   institution: "Issuing Organization",
  //   year: "2025",
  //   icon: <Certificate size={24} weight="duotone" />,
  // },
];

const statusColors = {
  "live": "text-emerald-400 bg-emerald-500",
  "in-progress": "text-amber-400 bg-amber-500",
  "coming-soon": "text-zinc-400 bg-zinc-500",
};

export function CyberPortfolio() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[8px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-400 mb-8 backdrop-blur-md">
            <ShieldCheck size={16} weight="fill" />
            <span>Cybersecurity Division</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white leading-none mb-8">
            <span className="text-emerald-400">&lt;</span>CYBER<span className="text-emerald-400">/&gt;</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Exploring the <span className="text-emerald-300">offensive</span> and <span className="text-emerald-300">defensive</span> dimensions of digital security.
          </p>

          <div className="flex items-center justify-center gap-4 font-mono text-xs text-emerald-500/60 uppercase tracking-widest">
            <Terminal size={16} />
            <span>root@shashwat:~$ ls -la /security</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-emerald-400"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent"
          />
        </motion.div>
      </section>

      {/* Cyber Projects */}
      <div className="relative w-full section-padding">
        <AnimatedSection className="p-0">
          <AnimatedItem>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-none mb-4 px-1">
              Security <span className="text-emerald-400">Projects</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-xl font-light mb-16 md:mb-24 max-w-2xl">
              Cybersecurity tools and research projects. Click to explore.
            </p>
          </AnimatedItem>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cyberProjects.map((project, i) => (
              <AnimatedItem key={i}>
                <a
                  href={project.url}
                  target={project.url !== "#" ? "_blank" : undefined}
                  rel={project.url !== "#" ? "noopener noreferrer" : undefined}
                  onClick={(e) => { if (project.url === "#") e.preventDefault(); }}
                  className="block h-full"
                >
                  <GlassCard className="h-full group hover:border-emerald-500/30 transition-all duration-700 bg-[#0a1628]/80 p-8">
                    {/* Status */}
                    <div className="absolute top-6 right-6 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${statusColors[project.status].split(" ")[1]}`} />
                      <span className={`text-[7px] font-mono uppercase tracking-widest ${statusColors[project.status].split(" ")[0]}`}>
                        {project.status.replace("-", " ")}
                      </span>
                    </div>

                    <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 tracking-tight group-hover:text-glow-cyan transition-all">{project.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light flex-grow">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="text-[7px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400/70">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <div className={`p-2 rounded-full bg-white/5 border border-white/10 text-zinc-500 ${project.url !== "#" ? "group-hover:text-emerald-400 group-hover:border-emerald-500/30" : "opacity-30"} transition-all`}>
                        <ArrowUpRight size={16} weight="bold" />
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Achievements & Skills */}
      <div className="relative w-full section-padding">
        <AnimatedSection className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Achievements */}
            <div>
              <AnimatedItem>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight">
                  Achievements <span className="text-emerald-400">&</span> Experience
                </h3>
              </AnimatedItem>
              <div className="space-y-6">
                {cyberAchievements.map((item, i) => (
                  <AnimatedItem key={i}>
                    <GlassCard className="bg-[#0a1628]/80 p-6 group hover:border-emerald-500/30 transition-all duration-500">
                      <div className="flex gap-5">
                        <div className="text-emerald-400 mt-1 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                          <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </AnimatedItem>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <AnimatedItem>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight">
                  Security <span className="text-emerald-400">Skills</span>
                </h3>
              </AnimatedItem>
              <AnimatedItem>
                <div className="flex flex-wrap gap-3">
                  {cyberSkills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest hover:bg-emerald-500/20 hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </AnimatedItem>

              {/* Qualifications */}
              <AnimatedItem>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-8 mt-16 tracking-tight">
                  Qualifications
                </h3>
              </AnimatedItem>
              <div className="space-y-4">
                {cyberQualifications.map((qual, i) => (
                  <AnimatedItem key={i}>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0a1628]/60 border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                      <div className="text-emerald-400">{qual.icon}</div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{qual.title}</h4>
                        <p className="text-zinc-500 text-xs font-light">{qual.institution} • {qual.year}</p>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Cyber Footer */}
      <footer className="w-full py-20 border-t border-emerald-500/10 bg-transparent backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-sm text-emerald-400 font-mono tracking-[0.5em] uppercase font-bold text-glow-cyan">
              Shashwat Vatsyayan
            </p>
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
              Cybersecurity Enthusiast
            </p>
          </div>
          <div className="font-mono text-xs text-emerald-500/40 uppercase tracking-widest">
            <span>// All systems operational</span>
          </div>
        </div>
      </footer>
    </>
  );
}

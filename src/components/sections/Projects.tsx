"use client";

import { AnimatedSection, AnimatedItem, cn } from "../ui/AnimatedSection";
import { GlassButton, Magnetic } from "../ui/NeumorphicAssets";
import { CookingPot, ArrowUpRight, Scan, AppWindow } from "@phosphor-icons/react";
import React from "react";

/* ============================================================ */
/* PROJECTS DATA — EASILY EDITABLE                              */
/* ============================================================ */
type ProjectStatus = "live" | "in-progress" | "coming-soon";

interface Project {
  id: string; title: string; subtitle: string; desc: string;
  icon: React.ReactNode; theme: string;
  tags: string[]; url: string; status: ProjectStatus;
}

const projects: Project[] = [
  {
    id: "01",
    title: "AEGIS AI",
    subtitle: "Deepfake Detection Platform",
    desc: "AI-powered platform to identify and flag manipulated media through advanced biometric analysis.",
    icon: <Scan size={28} weight="duotone" />,
    theme: "cyber",
    tags: ["AI", "Cybersecurity", "Ethics"],
    url: "#",
    status: "in-progress",
  },
  {
    id: "02",
    title: "FORK IT",
    subtitle: "Voice Assisted Cooking",
    desc: "Immersive cooking experience using NLP to guide users through recipes hands-free.",
    icon: <CookingPot size={28} weight="duotone" />,
    theme: "warm",
    tags: ["NLP", "Voice UI", "UX"],
    url: "#",
    status: "coming-soon",
  },
  {
    id: "03",
    title: "UNIVERSE",
    subtitle: "College Simplified App",
    desc: "Central hub for university life — schedules, events, and student engagement unified.",
    icon: <AppWindow size={28} weight="duotone" />,
    theme: "app",
    tags: ["Product", "Education", "UI/UX"],
    url: "#",
    status: "coming-soon",
  },
];

const statusConfig = {
  "live": { label: "Live", dotClass: "bg-emerald-500", textClass: "text-emerald-400" },
  "in-progress": { label: "In Progress", dotClass: "bg-amber-500", textClass: "text-amber-400" },
  "coming-soon": { label: "Coming Soon", dotClass: "bg-zinc-500", textClass: "text-zinc-500" },
};

const themeColors: Record<string, { icon: string; hover: string; bg: string }> = {
  "cyber": { icon: "text-cyan-400", hover: "group-hover:shadow-cyan-500/20", bg: "bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.08),transparent_70%)]" },
  "warm": { icon: "text-amber-500", hover: "group-hover:shadow-amber-500/20", bg: "bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.08),transparent_70%)]" },
  "app": { icon: "text-violet-400", hover: "group-hover:shadow-violet-500/20", bg: "bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_70%)]" },
};

export function Projects() {
  return (
    <AnimatedSection>
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <AnimatedItem>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-zinc-500 mb-4 block">Project Showcase</span>
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-zinc-50 leading-none mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">Projects</span>
          </h2>
        </AnimatedItem>
        <AnimatedItem>
          <p className="text-zinc-400 text-base md:text-lg font-light max-w-xl mx-auto">
            Click on any project to explore. More coming soon.
          </p>
        </AnimatedItem>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((project, i) => {
          const theme = themeColors[project.theme] || themeColors.app;
          const status = statusConfig[project.status];
          
          return (
            <AnimatedItem key={i} className="h-full">
              <a
                href={project.url}
                target={project.url !== "#" ? "_blank" : undefined}
                rel={project.url !== "#" ? "noopener noreferrer" : undefined}
                onClick={(e) => { if (project.url === "#") e.preventDefault(); }}
                className="block h-full"
              >
                <div className="group h-full relative rounded-2xl p-6 md:p-8 overflow-hidden border border-white/8 hover:border-white/15 transition-all duration-500 glass-card">
                  {/* Hover glow */}
                  <div className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${theme.bg}`} />
                  
                  {/* Status */}
                  <div className="absolute top-5 right-5 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dotClass}`} />
                    <span className={`text-[7px] font-mono uppercase tracking-widest ${status.textClass}`}>
                      {status.label}
                    </span>
                  </div>

                  {/* Project number */}
                  <span className="text-3xl font-black text-white/[0.03] font-mono absolute top-4 left-5">{project.id}</span>

                  <div className="relative z-10 flex flex-col h-full pt-2">
                    <div className={cn(
                      "p-3.5 rounded-xl bg-white/5 border border-white/8 w-fit mb-5 transition-all duration-500",
                      theme.icon, "group-hover:scale-105"
                    )}>
                      {project.icon}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-black text-zinc-50 tracking-tight mb-1">{project.title}</h3>
                    <p className="text-zinc-500 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] mb-4">{project.subtitle}</p>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="text-[7px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-white/5">
                      <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                        {project.url !== "#" ? "Visit Project →" : "Coming Soon"}
                      </span>
                      <div className={cn(
                        "p-2 rounded-full bg-white/5 border border-white/8 text-zinc-600 transition-all",
                        project.url !== "#" ? "group-hover:text-white group-hover:border-white/20" : "opacity-30"
                      )}>
                        <ArrowUpRight size={14} weight="bold" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedItem>
          );
        })}
      </div>

      {/* CTA Banner */}
      <AnimatedItem className="mt-16 md:mt-20">
        <div className="rounded-2xl md:rounded-3xl glass-card text-center p-8 md:p-14 border border-white/8">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-50 mb-4 tracking-tight">
            Ready to Build the <span className="text-indigo-400">Future?</span>
          </h4>
          <p className="text-zinc-500 max-w-xl mx-auto mb-8 text-sm md:text-base font-light">
            Currently working on projects that push boundaries of digital interaction.
          </p>
          <Magnetic>
            <GlassButton className="px-8 py-3 md:px-12 md:py-4 text-[9px] md:text-xs font-bold tracking-[0.3em] bg-zinc-50 text-zinc-950 hover:bg-white transition-all">
              Get In Touch
            </GlassButton>
          </Magnetic>
        </div>
      </AnimatedItem>
    </AnimatedSection>
  );
}

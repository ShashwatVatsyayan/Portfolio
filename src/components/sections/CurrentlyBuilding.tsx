"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { GlowingDot } from "../ui/NeumorphicAssets";
import { Lightning, Palette } from "@phosphor-icons/react";

const currentProjects = [
  {
    title: "Portfolio 2026",
    status: "success",
    type: "Web Experience",
    icon: <Lightning size={20} weight="fill" />,
    desc: "This portfolio — built with Next.js, Framer Motion, and a galaxy of particles."
  },
  {
    title: "Graphic Design Projects",
    status: "success",
    type: "Creative Work",
    icon: <Palette size={20} weight="fill" />,
    desc: "Creating visual identities and branding for university events and communities."
  },
];

export function CurrentlyBuilding() {
  return (
    <AnimatedSection>
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-white/10" />
        <h2 className="text-base md:text-lg font-bold uppercase tracking-[0.4em] text-zinc-500 whitespace-nowrap">Currently Building</h2>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {currentProjects.map((project, i) => (
          <AnimatedItem key={i}>
            <div className="rounded-2xl glass-card p-5 border border-white/8 hover:border-white/15 transition-all duration-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 text-indigo-400 border border-white/8 h-fit shrink-0">
                    {project.icon}
                  </div>
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-500 mb-0.5 block">{project.type}</span>
                    <h3 className="text-base font-bold text-white tracking-tight mb-1">{project.title}</h3>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">{project.desc}</p>
                  </div>
                </div>
                <div className="pt-1 shrink-0">
                  <GlowingDot status={project.status as "success" | "warning"} />
                </div>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  );
}

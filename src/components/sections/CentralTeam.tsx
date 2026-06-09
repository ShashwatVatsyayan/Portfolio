"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { ShareNetwork, PaintBrush, ShieldStar, Camera } from "@phosphor-icons/react";

export function CentralTeam() {
  const roles = [
    {
      icon: <ShareNetwork size={24} weight="duotone" />,
      title: "Social Media Strategy",
      desc: "Crafting engaging social media campaigns and managing digital presence across platforms."
    },
    {
      icon: <PaintBrush size={24} weight="duotone" />,
      title: "Graphic Design",
      desc: "Creating visually stunning designs for events, promotions, and branding materials."
    },
    {
      icon: <Camera size={24} weight="duotone" />,
      title: "Content Creation",
      desc: "Producing compelling visual content including posters, reels, and promotional assets."
    }
  ];

  return (
    <AnimatedSection>
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <AnimatedItem>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[8px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-indigo-400 mb-5">
            <ShieldStar size={14} weight="fill" />
            <span>Central Team</span>
          </div>
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-zinc-50 leading-tight mb-4">
            Social Media &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Graphic Design</span>
          </h2>
        </AnimatedItem>
        <AnimatedItem>
          <p className="text-zinc-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Central Team Member — <span className="text-indigo-400 font-medium">Social Media and Graphic Designer Executive</span> at <span className="text-indigo-400 font-medium">Chandigarh University</span>
          </p>
        </AnimatedItem>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
        {roles.map((role, i) => (
          <AnimatedItem key={i}>
            <div className="group h-full rounded-2xl p-6 glass-card border border-white/8 hover:border-indigo-500/30 transition-all duration-500">
              <div className="p-3 rounded-xl bg-white/5 border border-white/8 text-indigo-400 mb-5 w-fit group-hover:scale-105 transition-transform">
                {role.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{role.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{role.desc}</p>
            </div>
          </AnimatedItem>
        ))}
      </div>

      {/* Bottom Banner */}
      <AnimatedItem>
        <div className="rounded-2xl glass-card p-6 md:p-10 border border-white/8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left max-w-xl">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">Shaping the Visual Identity of Student Communities.</h4>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Executive member responsible for social media strategy, graphic design, and digital brand communication.
            </p>
          </div>
          <div className="px-6 py-2.5 rounded-full bg-white/90 text-zinc-950 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap shrink-0">
            Executive Member
          </div>
        </div>
      </AnimatedItem>
    </AnimatedSection>
  );
}

"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { Terminal, Palette, Code, BracketsCurly, Database, FileHtml, VideoCamera, SelectionBackground } from "@phosphor-icons/react";

const techStack = {
  programming: [
    { name: "Python", icon: <Terminal size={18} /> },
    { name: "Java", icon: <Code size={18} /> },
    { name: "JavaScript", icon: <BracketsCurly size={18} /> },
    { name: "C++", icon: <Code size={18} /> },
    { name: "C", icon: <Code size={18} /> },
    { name: "HTML/CSS", icon: <FileHtml size={18} /> },
    { name: "React", icon: <SelectionBackground size={18} /> },
    { name: "MongoDB", icon: <Database size={18} /> },
  ],
  creative: [
    { name: "Canva", icon: <Palette size={18} /> },
    { name: "CapCut", icon: <VideoCamera size={18} /> },
    { name: "Filmora", icon: <VideoCamera size={18} /> },
    { name: "PicsArt", icon: <Palette size={18} /> },
    { name: "PixelLab", icon: <Palette size={18} /> },
    { name: "VN Editor", icon: <VideoCamera size={18} /> },
    { name: "KineMaster", icon: <VideoCamera size={18} /> },
    { name: "Vita", icon: <VideoCamera size={18} /> },
  ],
};

export function TechStack() {
  return (
    <AnimatedSection>
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <AnimatedItem>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-50 mb-3 leading-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Stack</span>
          </h2>
        </AnimatedItem>
        <AnimatedItem>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm md:text-base font-light">
            Engineering tools and creative suites I use to bring ideas to life.
          </p>
        </AnimatedItem>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        {/* Programming */}
        <div>
          <AnimatedItem>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Terminal size={20} weight="bold" />
              </div>
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-[0.3em]">Engineering</h3>
            </div>
          </AnimatedItem>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {techStack.programming.map((tech, i) => (
              <AnimatedItem key={i}>
                <div className="group p-4 rounded-xl glass-card border border-white/8 hover:border-indigo-500/30 flex flex-col items-center justify-center gap-2.5 transition-all duration-300">
                  <div className="text-zinc-300 group-hover:text-white transition-colors group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors text-center">
                    {tech.name}
                  </span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>

        {/* Creative */}
        <div>
          <AnimatedItem>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Palette size={20} weight="bold" />
              </div>
              <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-[0.3em]">Creative</h3>
            </div>
          </AnimatedItem>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {techStack.creative.map((tech, i) => (
              <AnimatedItem key={i}>
                <div className="group p-4 rounded-xl glass-card border border-white/8 hover:border-violet-500/30 flex flex-col items-center justify-center gap-2.5 transition-all duration-300">
                  <div className="text-zinc-400 group-hover:text-violet-400 transition-colors group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors text-center">
                    {tech.name}
                  </span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

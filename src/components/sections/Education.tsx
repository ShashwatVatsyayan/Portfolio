"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { GraduationCap, BookOpen, ChalkboardTeacher } from "@phosphor-icons/react";

const educationData = [
  {
    year: "2022",
    title: "10th Completed",
    institution: "Anglo Sanskrit Model Sr. Sec. School",
    icon: <BookOpen size={20} />,
    color: "text-blue-400",
    dotColor: "bg-blue-400",
  },
  {
    year: "2024",
    title: "12th Completed",
    institution: "Anglo Sanskrit Model Sr. Sec. School",
    icon: <ChalkboardTeacher size={20} />,
    color: "text-indigo-400",
    dotColor: "bg-indigo-400",
  },
  {
    year: "2024–2028",
    title: "Bachelor of Engineering",
    subtitle: "Computer Science Engineering",
    institution: "Chandigarh University",
    icon: <GraduationCap size={20} />,
    color: "text-violet-400",
    dotColor: "bg-violet-400",
    current: true,
  },
];

export function Education() {
  return (
    <AnimatedSection>
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <AnimatedItem>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-50 leading-tight mb-3">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Timeline</span>
          </h2>
        </AnimatedItem>
        <AnimatedItem>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm md:text-base font-light">
            Educational milestones and pursuit of engineering excellence.
          </p>
        </AnimatedItem>
      </div>

      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-indigo-500/30 to-violet-500/30" />

        <div className="space-y-6">
          {educationData.map((item, i) => (
            <AnimatedItem key={i}>
              <div className="flex items-start gap-5 md:gap-6 pl-2">
                {/* Timeline Node */}
                <div className="relative flex-shrink-0 w-8 md:w-10 flex items-center justify-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-zinc-950/80 border border-white/10 flex items-center justify-center z-10 relative">
                    <div className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-2xl glass-card p-5 md:p-6 border border-white/8 hover:border-white/15 transition-all duration-300">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-white/5 border border-white/8 ${item.color}`}>
                          {item.icon}
                        </div>
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-[0.2em] ${item.color}`}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-zinc-50 tracking-tight">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-zinc-300 text-sm mt-0.5">{item.subtitle}</p>
                      )}
                      <p className="text-zinc-500 mt-2 text-xs font-light italic">
                        {item.institution}
                      </p>
                    </div>

                    {item.current && (
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                        </span>
                        <span className="text-[7px] font-mono text-indigo-400 uppercase tracking-widest font-bold">Current</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

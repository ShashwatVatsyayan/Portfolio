"use client";

import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { LinkedinLogo, InstagramLogo, EnvelopeSimple, ArrowRight } from "@phosphor-icons/react";

export function ContactSection() {
  const contacts = [
    {
      name: "LinkedIn",
      label: "Connect Professionally",
      link: "https://www.linkedin.com/in/shashwat-vatsyayan-b777743a3",
      icon: <LinkedinLogo size={28} weight="duotone" />,
      hoverColor: "hover:text-blue-400 hover:border-blue-500/30"
    },
    {
      name: "Instagram",
      label: "Visual Narratives",
      link: "https://instagram.com/shashwat_vatsyayan",
      icon: <InstagramLogo size={28} weight="duotone" />,
      hoverColor: "hover:text-pink-400 hover:border-pink-500/30"
    },
    {
      name: "Email",
      label: "Direct Inquiries",
      link: "mailto:shashwatvatsyayan@gmail.com",
      icon: <EnvelopeSimple size={28} weight="duotone" />,
      hoverColor: "hover:text-indigo-400 hover:border-indigo-500/30"
    }
  ];

  return (
    <AnimatedSection>
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <AnimatedItem>
          <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500 mb-4 block">Get In Touch</span>
        </AnimatedItem>
        <AnimatedItem>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-zinc-50 leading-none mb-4">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Collaborate</span>
          </h2>
        </AnimatedItem>
        <AnimatedItem>
          <p className="text-zinc-500 text-sm md:text-base font-light max-w-lg mx-auto">
            Open for creative partnerships, projects, and <span className="text-zinc-300">technical innovations</span>.
          </p>
        </AnimatedItem>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {contacts.map((contact, i) => (
          <AnimatedItem key={i}>
            <a href={contact.link} target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className={`group h-full rounded-2xl glass-card p-6 border border-white/8 ${contact.hoverColor} transition-all duration-300`}>
                <div className="text-zinc-500 group-hover:scale-105 transition-transform mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-0.5 tracking-tight">{contact.name}</h3>
                <p className="text-zinc-500 text-xs font-light uppercase tracking-widest">{contact.label}</p>
                
                <div className="mt-6 flex items-center gap-1.5 text-zinc-600 group-hover:text-white transition-all">
                  <span className="text-[8px] font-mono uppercase tracking-widest">Visit</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </AnimatedItem>
        ))}
      </div>

      {/* Signature */}
      <AnimatedItem className="mt-16 text-center">
        <div className="inline-flex flex-col items-center gap-3">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.5em] text-zinc-600">
            Yokoso, watashi no Souru Sosaeti
          </p>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </AnimatedItem>
    </AnimatedSection>
  );
}

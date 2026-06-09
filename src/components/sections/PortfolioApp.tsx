"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalaxyBackground } from "@/components/ui/GalaxyBackground";
import { CyberBackground } from "@/components/ui/CyberBackground";
import { Hero } from "@/components/sections/Hero";
import { CentralTeam } from "@/components/sections/CentralTeam";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { ContactSection } from "@/components/sections/ContactSection";
import { CyberPortfolio } from "@/components/sections/CyberPortfolio";

export function PortfolioApp() {
  const [cyberMode, setCyberMode] = useState(false);

  const toggleMode = useCallback(() => {
    setCyberMode((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Backgrounds */}
      {!cyberMode ? <GalaxyBackground /> : <CyberBackground />}

      {/* Overlays */}
      <div className="vignette opacity-20" />
      <div className="film-grain" />

      {/* Secret Mode Toggle */}
      <button
        onClick={toggleMode}
        className="fixed bottom-6 right-6 z-[100] w-10 h-10 rounded-full border border-white/5 bg-black/30 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:border-white/20 hover:bg-black/50 hover:scale-110 group cursor-pointer"
        title={cyberMode ? "Switch to Portfolio" : "Switch to Cyber Mode"}
        aria-label="Toggle cyber mode"
      >
        {cyberMode ? (
          <svg className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )}
      </button>

      {/* Content */}
      <AnimatePresence mode="wait">
        {!cyberMode ? (
          <motion.main
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex min-h-screen flex-col bg-transparent text-zinc-50 relative"
          >
            <Hero />

            <div className="relative z-10">
              <Projects />
              <CentralTeam />
              <Education />
              <TechStack />
              <CurrentlyBuilding />
              <ContactSection />
            </div>
            
            {/* Footer */}
            <footer className="w-full py-16 border-t border-white/10 bg-transparent relative overflow-hidden">
              <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="flex flex-col items-center md:items-start gap-2">
                  <p className="text-sm text-zinc-100 font-mono tracking-[0.4em] uppercase font-bold">
                    Shashwat Vatsyayan
                  </p>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                    Creative Digital Identity
                  </p>
                </div>
                <div className="flex gap-8 text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] font-medium">
                  <a href="https://www.linkedin.com/in/shashwat-vatsyayan-b777743a3" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub</a>
                  <a href="https://instagram.com/shashwat_vatsyayan" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Instagram</a>
                </div>
              </div>
            </footer>
          </motion.main>
        ) : (
          <motion.main
            key="cyber"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex min-h-screen flex-col bg-transparent text-emerald-50 relative"
          >
            <CyberPortfolio />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

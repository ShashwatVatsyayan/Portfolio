"use client";

import { motion } from "framer-motion";
import { cn } from "../ui/AnimatedSection";

export function Hero() {
  const titleWords = ["Shashwat", "Vatsyayan"];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent px-4">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[9px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-indigo-400 font-mono inline-block">
            Creative Interactive Portfolio
          </span>
        </motion.div>
        
        <h1 className="flex flex-col items-center w-full">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 + i * 0.15,
              }}
              className={cn(
                "block font-black tracking-tight leading-[0.9]",
                "text-[clamp(3rem,12vw,9rem)]",
                i === 1 && "text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500/50"
              )}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-8 md:mt-12 text-xs sm:text-sm md:text-lg font-light tracking-[0.15em] md:tracking-[0.3em] text-zinc-400 uppercase"
        >
          Creative Technologist <span className="text-zinc-600 mx-1">•</span> Designer <span className="text-zinc-600 mx-1">•</span> Innovator
        </motion.p>
      </div>
      
      {/* Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-zinc-600 font-mono">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-indigo-500/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

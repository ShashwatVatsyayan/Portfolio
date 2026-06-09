"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================== */
/* CRYSTAL CURSOR CANVAS          */
/* ============================== */
function CrystalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const crystals = useRef<Crystal[]>([]);
  const shards = useRef<Shard[]>([]);

  class Crystal {
    x: number; y: number; angle: number; radius: number;
    targetRadius: number; life: number; ctx: CanvasRenderingContext2D;
    lineWidth: number; turnAngle: number;

    constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
      this.x = x; this.y = y;
      this.angle = Math.random() * Math.PI * 2;
      this.radius = 0;
      this.targetRadius = Math.random() * 80 + 20;
      this.life = 150;
      this.ctx = ctx;
      this.lineWidth = Math.random() * 1.5 + 0.5;
      this.turnAngle = (Math.random() - 0.5) * 0.1;
    }

    draw() {
      this.ctx.strokeStyle = `hsla(220, 100%, 80%, ${this.life / 150})`;
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      const endX = this.x + Math.cos(this.angle) * this.radius;
      const endY = this.y + Math.sin(this.angle) * this.radius;
      this.ctx.lineTo(endX, endY);
      this.ctx.stroke();
    }

    update() {
      if (this.radius < this.targetRadius) this.radius += 0.5;
      this.life -= 1;
      this.angle += this.turnAngle;
    }
  }

  class Shard {
    x: number; y: number; angle: number; vx: number; vy: number;
    life: number; size: number; ctx: CanvasRenderingContext2D;

    constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
      this.x = x; this.y = y;
      this.angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      this.vx = Math.cos(this.angle) * speed;
      this.vy = Math.sin(this.angle) * speed;
      this.life = 100;
      this.size = Math.random() * 3 + 1;
      this.ctx = ctx;
    }

    draw() {
      this.ctx.fillStyle = `hsla(220, 100%, 90%, ${this.life / 100})`;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= 1;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const animate = () => {
      ctx.fillStyle = "rgba(3, 0, 20, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (Math.random() > 0.7) {
        crystals.current.push(
          new Crystal(
            mouse.current.x + (Math.random() - 0.5) * 50,
            mouse.current.y + (Math.random() - 0.5) * 50,
            ctx
          )
        );
      }

      crystals.current = crystals.current.filter((c) => c.life > 0);
      crystals.current.forEach((c) => { c.update(); c.draw(); });

      shards.current = shards.current.filter((s) => s.life > 0);
      shards.current.forEach((s) => { s.update(); s.draw(); });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 50; i++) {
        shards.current.push(new Shard(e.clientX, e.clientY, ctx));
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClick);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 block h-full w-full" />;
}

/* ============================== */
/* HOVER BUTTON (Liquid Trail)    */
/* ============================== */
function HoverButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isListening, setIsListening] = useState(false);
  const [circles, setCircles] = useState<Array<{
    id: number; x: number; y: number; color: string;
    fadeState: "in" | "out" | null;
  }>>([]);
  const lastAddedRef = useRef(0);

  const createCircle = useCallback((x: number, y: number) => {
    const buttonWidth = buttonRef.current?.offsetWidth || 0;
    const xPos = x / buttonWidth;
    const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${xPos * 100}%)`;
    setCircles((prev) => [
      ...prev,
      { id: Date.now(), x, y, color, fadeState: null },
    ]);
  }, []);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      if (!isListening) return;
      const currentTime = Date.now();
      if (currentTime - lastAddedRef.current > 100) {
        lastAddedRef.current = currentTime;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        createCircle(x, y);
      }
    },
    [isListening, createCircle]
  );

  useEffect(() => {
    circles.forEach((circle) => {
      if (!circle.fadeState) {
        setTimeout(() => {
          setCircles((prev) =>
            prev.map((c) =>
              c.id === circle.id ? { ...c, fadeState: "in" as const } : c
            )
          );
        }, 0);
        setTimeout(() => {
          setCircles((prev) =>
            prev.map((c) =>
              c.id === circle.id ? { ...c, fadeState: "out" as const } : c
            )
          );
        }, 1000);
        setTimeout(() => {
          setCircles((prev) => prev.filter((c) => c.id !== circle.id));
        }, 2200);
      }
    });
  }, [circles]);

  return (
    <button
      ref={buttonRef}
      className={`relative isolate px-10 py-4 rounded-3xl text-white font-semibold text-lg leading-6 backdrop-blur-lg bg-white/5 cursor-pointer overflow-hidden border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] ${className}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsListening(true)}
      onPointerLeave={() => setIsListening(false)}
      onClick={onClick}
      style={{
        "--circle-start": "#a0d9f8",
        "--circle-end": "#3a5bbf",
      } as React.CSSProperties}
    >
      {circles.map(({ id, x, y, color, fadeState }) => (
        <div
          key={id}
          className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg pointer-events-none z-[-1]"
          style={{
            left: x, top: y,
            background: color,
            opacity: fadeState === "in" ? 0.75 : fadeState === "out" ? 0 : 0,
            transition: fadeState === "out" ? "opacity 1.2s" : "opacity 0.3s",
          }}
        />
      ))}
      {children}
    </button>
  );
}

/* ============================== */
/* LANDING SCREEN                 */
/* ============================== */
export function LandingScreen({ onEnter }: { onEnter: () => void }) {
  const [exiting, setExiting] = useState(false);

  const handleStart = () => {
    setExiting(true);
    setTimeout(onEnter, 800);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#030014] overflow-hidden"
        >
          <CrystalCanvas />

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 select-none text-center p-4">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-[0.08em] leading-none"
              style={{
                textShadow: "0 0 10px rgba(173, 216, 230, 0.7), 0 0 20px rgba(173, 216, 230, 0.5)",
              }}
            >
              Shashwat
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500/50">
                Vatsyayan
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 font-extralight italic"
              style={{ textShadow: "0 0 5px rgba(173, 216, 230, 0.5)" }}
            >
              Creative Technologist • Designer • Innovator
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="mt-8"
            >
              <HoverButton onClick={handleStart}>
                <span className="flex items-center gap-3 tracking-[0.2em] uppercase text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Enter Portfolio
                </span>
              </HoverButton>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-6 text-sm text-gray-400 font-extralight"
            >
              Click anywhere to shatter the silence
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

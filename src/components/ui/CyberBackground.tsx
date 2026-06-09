"use client";

import { useState, useEffect, CSSProperties } from "react";

const BEAM_COUNT = 60;

export function CyberBackground() {
  const [beams, setBeams] = useState<Array<{ id: number; style: CSSProperties }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: BEAM_COUNT }).map((_, i) => {
      const riseDur = Math.random() * 2 + 4;
      const fadeDur = riseDur;
      const dropDur = Math.random() * 3 + 3;

      return {
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 3) + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${riseDur}s, ${fadeDur}s, ${dropDur}s`,
        } as CSSProperties,
      };
    });
    setBeams(generated);
  }, []);

  return (
    <div className="scene" role="img" aria-label="Animated cybersecurity data background">
      <div className="floor" />
      <div className="main-column" />
      <div className="light-stream-container">
        {beams.map((beam) => (
          <div key={beam.id} className="light-beam" style={beam.style} />
        ))}
      </div>
    </div>
  );
}

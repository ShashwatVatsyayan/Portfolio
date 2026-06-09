"use client";

import { useState, useCallback } from "react";
import { LandingScreen } from "@/components/sections/LandingScreen";
import { PortfolioApp } from "@/components/sections/PortfolioApp";

export default function Home() {
  const [entered, setEntered] = useState(false);

  const handleEnter = useCallback(() => {
    setEntered(true);
  }, []);

  return (
    <>
      {!entered && <LandingScreen onEnter={handleEnter} />}
      {entered && <PortfolioApp />}
    </>
  );
}

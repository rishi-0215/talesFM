"use client";

import React, { useState, useEffect, useRef } from "react";
import HeroMobileContent from "./HeroMobileContent";
import { useTimeInView } from "../../../hooks/useTimeInView";

const useIsHeroMobileViewport = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    setIsHydrated(true);
    const check = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      setIsMobile(w < 810);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  
  // Return false during SSR to prevent hydration mismatch
  return isHydrated ? isMobile : false;
};

const HeroMobile = ({ hero }) => {
  const isMobileViewport = useIsHeroMobileViewport();
  const sectionRef = useRef(null);

  // Call hook unconditionally to preserve order across renders
  useTimeInView(sectionRef, "ui_focus_time", { screen_name: "HeroMobile" });

  if (!isMobileViewport) return null;

  return (
    <div ref={sectionRef}>
      <HeroMobileContent isMobile={true} hero={hero} />
    </div>
  );
};

export default HeroMobile; 
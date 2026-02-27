"use client";

import React, { useState, useEffect, useRef } from "react";
import useHeroTabletAnimations from "./HeroTabletAnimations";
import HeroTabletContent from "./HeroTabletContent";
import { useTimeInView } from "../../../hooks/useTimeInView";

const useIsHeroTabletViewport = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    setIsHydrated(true);
    const check = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      setIsTablet(w <= 1199 && w >= 810);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  
  // Return false during SSR to prevent hydration mismatch
  return isHydrated ? isTablet : false;
};

const HeroTablet = ({ hero }) => {
  const [showDownload, setShowDownload] = useState(false);
  const isTabletViewport = useIsHeroTabletViewport();
  const animationRefs = useHeroTabletAnimations(setShowDownload);
  const sectionRef = useRef(null);

  // Only render on tablet viewport (810px - 1199px), not on mobile

  // Call hooks unconditionally to keep order stable across renders
  useTimeInView(sectionRef, "ui_focus_time", { screen_name: "HeroTablet" });

  if (!isTabletViewport) return null;

  return (
    <div ref={sectionRef}>
      <HeroTabletContent isTablet={true} showDownload={showDownload} refs={animationRefs} hero={hero} />
    </div>
  );
};

export default HeroTablet;


"use client";

import React, { useEffect, useState } from "react";
import useHeroAnimations from "./HeroAnimations";
import HeroContent from "./HeroContent";

const useIsHeroTabletViewport = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(min-width: 810px) and (max-width: 1000px)");
    const onChange = (e) => setIsTablet(e.matches);

    // set initial + subscribe
    onChange(mq);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return hydrated ? isTablet : false;
};

const useIsHeroMobileViewport = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 809px)");
    const onChange = (e) => setIsMobile(e.matches);

    onChange(mq);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return hydrated ? isMobile : false;
};

const Hero = ({ hero }) => {
  const [showDownload, setShowDownload] = useState(false);
  const isTabletViewport = useIsHeroTabletViewport();
  const isMobileViewport = useIsHeroMobileViewport();

  // Always call hooks in the same order
  const animationRefs = useHeroAnimations(setShowDownload);

  // Do not render the desktop hero on tablet or mobile widths; dedicated components handle these ranges
  if (isTabletViewport || isMobileViewport) return null;

  return (
    <HeroContent
      isTablet={animationRefs.isTablet}
      showDownload={showDownload}
      refs={animationRefs}
      hero={hero}
    />
  );
};

export default Hero;


"use client";

import React, { useEffect, useState } from "react";
import Hero from "../hero/hero_desktop/hero";
import HeroTablet from "../hero/herotablet/HeroTablet";
import HeroMobile from "../hero/hero_mobile/HeroMobile";

// Combined device detection hook to reduce memory usage
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (typeof window === "undefined") return;

    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 809) {
        setDeviceType('mobile');
      } else if (width >= 810 && width <= 1000) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Initial check
    updateDeviceType();

    // Throttled resize handler
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDeviceType, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return hydrated ? deviceType : 'desktop';
};

export default function Home({ hero }) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const deviceType = useDeviceType();

  return (
    <>
      {hydrated && (
        <>
          {deviceType === 'mobile' ? (
            <HeroMobile hero={hero} />
          ) : deviceType === 'tablet' ? (
            <HeroTablet hero={hero} />
          ) : (
            <Hero hero={hero} />
          )}
        </>
      )}
    </>
  );
}

'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined' && !(gsap.core?.globals?.ScrollTrigger)) {
  gsap.registerPlugin(ScrollTrigger);
}

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2, // Reduced from 1.8 for better performance
      easing: (t) => Math.min(2, 1.001 - Math.pow(2, -8 * t)), // Simplified easing
      smoothTouch: false, // Disable on touch for better performance
      touchMultiplier: 1.5, // Reduced from 2.0
    });

    // Safe no-op on SSR
    window.lenis = lenis;

    let rafId;
    const onLenisScroll = () => {
      ScrollTrigger.update();
    };
    
    lenis.on('scroll', onLenisScroll);

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Ensure ScrollTrigger calculates after Lenis is initialized
    ScrollTrigger.refresh();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenis.off('scroll', onLenisScroll);
      lenis.destroy();
      if (window.lenis === lenis) {
        delete window.lenis;
      }
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;


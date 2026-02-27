"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && !gsap.core?.globals?.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsHeroTabletViewport = () => {
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const check = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      setIsTablet(w <= 1199 && w >= 810);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isTablet;
};

const useHeroTabletAnimations = (onShowDownloadChange) => {
  // Note: sectionRef is provided from the content component; no local ref here
  const phoneRef = useRef(null);
  const phoneImageRef = useRef(null);
  const talesfmTitleRef = useRef(null);
  const mainTitleRef = useRef(null);
  const subtitleRef = useRef(null);
  const glowRef = useRef(null);
  const aboveImageRef = useRef(null);
  const downloadRef = useRef(null);
  const leftPartRef = useRef(null);
  const rightPartRef = useRef(null);
  const sectionRef = useRef(null);

  const isTablet = useIsHeroTabletViewport();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isTablet) return;

    let phoneTimeline = null;
    let downloadMoveTimeline = null;
    let exitUpTimeline = null;
    let cleanupFns = [];

    const ctx = gsap.context(() => {
      if (phoneRef.current && phoneImageRef.current) {
        // Hint the browser/GPU to optimize transforms
        gsap.set([phoneRef.current, phoneImageRef.current], {
          force3D: true,
          willChange: "transform",
        });
        const rootFontSize =
          parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
        const currentTopPx =
          parseFloat(getComputedStyle(phoneRef.current).top || "0") || 0;
        const currentX = 0; // centered via CSS transform

        // Use the same value as desktop, but scaled to 70%: -23rem * 0.7 = -16.1rem
        // But since desktop uses "-23rem" as a string, we should use "-16.1rem" as a string for GSAP

        phoneTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-tablet-scroll",
            start: "top top",
            // 30% shorter than desktop's 9200 => 6440
            end: "+=3400",
            // numeric scrub adds easing to scroll -> smoother motion
            scrub: 1.1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (typeof onShowDownloadChange === "function") {
                onShowDownloadChange(self.progress >= 0.5);
              }
            },
          },
        });

        // Desktop values scaled to 70% (30% less in every dimension)
        // Desktop: y: -23rem, x: -36vw, scales: up 1.5, down 1.3, portrait 0.8, emphasis 1.1
        // const phoneLandscapeYPx = "-40rem" * rootFontSize; // -23rem * 0.7 (old, now unused)
        const phoneLandscapeY = "3rem"; // 70% of -23rem
        const phoneLandscapeX = "-34vh"; // -36vw * 0.7
        const phoneScaleUp = 1 + (1.5 - 1) * 0.7; // 1.35
        const phoneScaleDown = 1 + (1.3 - 1) * 0.7; // 1.21
        const phonePortraitScale = 1 - (1 - 0.8) * 0.7; // 0.86
        const phoneEmphasisScale = 1 + (1.1 - 1) * 0.7; // 1.07

        phoneTimeline.fromTo(
          phoneRef.current,
          {
            rotation: 0,
            transformOrigin: "center center",
            y: currentTopPx,
            x: currentX,
          },
          {
            rotation: 90,
            y: phoneLandscapeY,
            x: phoneLandscapeX,
            ease: "power2.out",
          },
          0
        );

        phoneTimeline.fromTo(
          phoneImageRef.current,
          { scale: 1 },
          { scale: phoneScaleUp, ease: "power3.out" },
          0
        );

        phoneTimeline.to(
          phoneRef.current,
          {
            x: "0vw",
            y: phoneLandscapeY,
            marginTop:"30px",
            ease: "power2.out",
          },
          0.5
        );

        phoneTimeline.to(
          phoneImageRef.current,
          { scale: phoneScaleDown, ease: "power3.out" },
          0.55
        );

        phoneTimeline.to(
          phoneRef.current,
          {
            rotation: 0,
            transformOrigin: "center center",
            scale: phonePortraitScale,
            top: "-6rem",
            ease: "power3.inOut",
          },
          0.65
        );

        phoneTimeline.to(
          phoneImageRef.current,
          { scale: 1, ease: "power3.inOut" },
          0.7
        );

        phoneTimeline.to(
          phoneRef.current,
          {
            scale: phoneEmphasisScale,
            duration: 0.8,
            ease: "power1.inOut",
          },
          0.9
        );
      }

      if (leftPartRef.current && rightPartRef.current) {
        // Ensure both parts are fully invisible initially
        gsap.set([leftPartRef.current, rightPartRef.current], {
          opacity: 0,
          force3D: true,
          willChange: "transform, opacity",
          transformOrigin: "center center",
        });

        const sidePartsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-tablet-scroll",
            // start earlier so side parts are visible
            start: "top+=900 top",
            end: "+=4000",
            scrub: 0.9,
          },
        });

        // Start from center near phone, then spread outwards
        const rightX = -170;
        const leftX = 400;
        const baseStartScale = 0.18;
        const baseEndScale = 2;
        const leftWidthRect =
          leftPartRef.current.getBoundingClientRect?.().width;
        const rightWidthRect =
          rightPartRef.current.getBoundingClientRect?.().width;
        const leftWidth = Math.max(
          1,
          leftWidthRect || leftPartRef.current.offsetWidth || 1
        );
        const rightWidth = Math.max(
          1,
          rightWidthRect || rightPartRef.current.offsetWidth || 1
        );
        const leftHeight = Math.max(
          1,
          leftPartRef.current.getBoundingClientRect?.().height ||
            leftPartRef.current.offsetHeight ||
            1
        );
        const rightHeight = Math.max(
          1,
          rightPartRef.current.getBoundingClientRect?.().height ||
            rightPartRef.current.offsetHeight ||
            1
        );
        const baseWidth = Math.min(leftWidth, rightWidth);
        const normalizeLeft = baseWidth / leftWidth;
        const normalizeRight = baseWidth / rightWidth;
        let startScaleLeft = normalizeLeft * baseStartScale;
        let endScaleLeft = normalizeLeft * baseEndScale;
        const startScaleRight = normalizeRight * baseStartScale;
        const endScaleRight = normalizeRight * baseEndScale;

        const heightRatio = rightHeight / leftHeight; // if left is taller, ratio < 1 reduces its scale
        startScaleLeft *= heightRatio;
        endScaleLeft *= heightRatio;

        // Start both parts at center (near phone), then spread out
        sidePartsTimeline.fromTo(
          leftPartRef.current,
          { x: 0, scale: startScaleLeft, autoAlpha: 0 },
          {
            x: leftX,
            scale: endScaleLeft,
            autoAlpha: 1,
            ease: "power2.inOut",
            immediateRender: false,
          },
          0
        );
        sidePartsTimeline.fromTo(
          rightPartRef.current,
          { x: 0, scale: startScaleRight, autoAlpha: 0 },
          {
            x: rightX,
            scale: endScaleRight,
            autoAlpha: 1,
            ease: "power2.inOut",
            immediateRender: false,
          },
          0
        );
      }

      if (talesfmTitleRef.current) {
        const t = gsap.fromTo(
          talesfmTitleRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".hero-tablet-scroll",
              start: "top top",
              end: "+=560", // 70% of 800
              scrub: 0.8,
            },
          }
        );
        cleanupFns.push(() => t.kill && t.kill());
      }

      if (mainTitleRef.current) {
        const t = gsap.fromTo(
          mainTitleRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".hero-tablet-scroll",
              start: "top top",
              end: "+=560",
              scrub: 0.8,
            },
          }
        );
        cleanupFns.push(() => t.kill && t.kill());
      }

      if (subtitleRef.current) {
        const t = gsap.fromTo(
          subtitleRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".hero-tablet-scroll",
              start: "top top",
              end: "+=560",
              scrub: 0.8,
            },
          }
        );
        cleanupFns.push(() => t.kill && t.kill());
      }

      if (glowRef.current) {
        const t = gsap.fromTo(
          glowRef.current,
          { opacity: 0.6, y: 0 },
          {
            opacity: 0,
            y: -140, // 70% of -200
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".hero-tablet-scroll",
              start: "top top",
              end: "+=560",
              scrub: 0.8,
            },
          }
        );
        cleanupFns.push(() => t.kill && t.kill());
      }

      if (aboveImageRef.current) {
        const t = gsap.fromTo(
          aboveImageRef.current,
          { y: 0 },
          {
            y: -140, // 70% of -200
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".hero-tablet-scroll",
              start: "top top",
              end: "+=560",
              scrub: 0.8,
            },
          }
        );
        cleanupFns.push(() => t.kill && t.kill());
      }
      // download section animation
      // === DOWNLOAD (EXACT DESKTOP BEHAVIOR) ===
      if (downloadRef.current) {
        // Fade in: same timings as desktop
        const fadeIn = gsap.fromTo(
          downloadRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".scroll-section", // <-- use same trigger as desktop
              start: "top top+=200",
              end: "+=1600",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
        cleanupFns.push(() => fadeIn.kill && fadeIn.kill());

        // Move timeline: same range & values as desktop
        downloadMoveTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".scroll-section", // <-- same trigger
            start: "top top",
            end: "2400",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // EXACT desktop values
        const downloadY = "67vw"; // move up
        const downloadX = "230px"; // then right

        // Phase 1: go up only
        downloadMoveTimeline.to(
          downloadRef.current,
          {
            y: downloadY,
            x: 0,
            opacity: 1,
            ease: "power1.out",
          },
          0
        );

        // Phase 2: keep y, move right, and fade out
        downloadMoveTimeline.to(
          downloadRef.current,
          {
            x: downloadX,
            y: downloadY,
            opacity: 0,
            ease: "power2.inOut",
          },
          0.5
        );
      }

      // Unified upward exit: move left, phone, and right parts up together after prior animations
      if (leftPartRef.current && phoneRef.current && rightPartRef.current) {
        // Hint GPU
        gsap.set(
          [leftPartRef.current, phoneRef.current, rightPartRef.current],
          {
            force3D: true,
            willChange: "transform",
          }
        );

        exitUpTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-tablet-scroll",
            // Start after the main side/phone animations have effectively finished
            start: "top+=4200 top",
            end: "+=1200",
            scrub: true,
          },
        });

        exitUpTimeline.to(
          [leftPartRef.current, phoneRef.current, rightPartRef.current],
          {
            y: "-120vh",
            ease: "none",
            immediateRender: false,
          },
          0
        );
      }
      // Move phone up when About section arrives (mirrors desktop behavior, scaled)
    }, phoneRef);

    return () => {
      ctx.revert();
      cleanupFns.forEach((fn) => {
        try {
          fn();
        } catch (_) {}
      });
      if (phoneTimeline && typeof phoneTimeline.kill === "function")
        phoneTimeline.kill();
      if (
        downloadMoveTimeline &&
        typeof downloadMoveTimeline.kill === "function"
      )
        downloadMoveTimeline.kill();
      if (exitUpTimeline && typeof exitUpTimeline.kill === "function")
        exitUpTimeline.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isTablet, onShowDownloadChange]);

  return {
    phoneRef,
    phoneImageRef,
    talesfmTitleRef,
    mainTitleRef,
    subtitleRef,
    glowRef,
    aboveImageRef,
    downloadRef,
    leftPartRef,
    rightPartRef,
    sectionRef,
    isTablet,
  };
};

export default useHeroTabletAnimations;

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && !gsap.core?.globals?.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

function computeTargets() {
  const w = window.innerWidth || 1200;
  const h = window.innerHeight || 800;

  let gap;

  if (w < 640) {
    // Mobile
    gap = gsap.utils.clamp(40, 120, Math.round(w * 0.25 * 2));
  } else if (w < 1024) {
    gap = gsap.utils.clamp(50, 400, Math.round(w * 0.22 * 2));
  } else if (w < 1200) {
    gap = gsap.utils.clamp(150, 400, Math.round(w * 0.22 * 4));
  } else {
    // Desktop
    gap = gsap.utils.clamp(150, 450, Math.round(w * 0.22 * 4));
  }

  const leftScale = w < 640 ? 1.6 : w < 1024 ? 4.0 : 2.75;
  const rightScale = w < 640 ? 1.7 : w < 1024 ? 4.0 : 2.95;

  return { gap, leftScale, rightScale };
}

const useHeroAnimations = (onShowDownloadChange) => {
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.scrollY > 0) window.scrollTo(0, 0);

    let phoneTimeline = null;
    let downloadMoveTimeline = null;
    let talesfmFadeTween = null;

    // Helper to multiply a height by 1.2 (20% slower)
    const slower = (n) => n * 1.2;

    const ctx = gsap.context(() => {
      // === PHONE TIMELINE ===
      if (phoneRef.current && phoneImageRef.current) {
        phoneTimeline = gsap.timeline({
          scrollTrigger: {

            start: "top top",
            // Stretch to ~8 viewport heights (20% slower)
            end: () => "+=" + Math.round(window.innerHeight * slower(6)),
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              onShowDownloadChange(self.progress >= 0.5);
            },
          },
        });
        // --- Responsive helpers ---
        const computePhoneLandscapeY = () => {
          const vw = window.innerWidth || 1200;
          if (vw < 640) return "-10rem"; // mobile
          if (vw < 1024) return "-17rem"; // tablet
          if (vw < 1600) return "-18rem"; // laptop
          return "-20rem"; // big desktop
        };

        const computePhoneLandscapeX = () => {
          const vw = window.innerWidth || 1200;
          // a touch farther out on small screens so the phone has room
          if (vw < 640) return "-44vw";
          if (vw < 1024) return "-40vw";
          if (vw < 1600) return "-36vw";
          return "-34vw";
        };

        // Scales (unitless) tuned per breakpoint so things don’t overshoot on small screens
        const computePhoneScaleUp = () => {
          const vw = window.innerWidth || 1200;
          if (vw < 640) return 1.25;
          if (vw < 1024) return 1.15;
          if (vw < 1284) return 1.25;
          if (vw < 1600) return 1.5;
          return 1.9;
        };

        const computePhoneScaleDown = () => {
          const vw = window.innerWidth || 1200;
          if (vw < 640) return 1.1;
          if (vw < 1024) return 1;
          if (vw < 1284) return 1;
          if (vw < 1600) return 1.35;
          return 1.3;
        };

        const computePhonePortraitScale = () => {
          const vw = window.innerWidth || 1200;
          if (vw < 640) return 0.7;
          if (vw < 1024) return 0.8;
          if (vw < 1284) return 0.8;
          if (vw < 1600) return 0.7;
          return 0.85;
        };

        const computePhoneEmphasisScale = () => {
          const vw = window.innerWidth || 1200;
          if (vw < 640) return 1.05;
          if (vw < 1024) return 1;
          if (vw < 1284) return 1;
          if (vw < 1600) return 1.05;
          return 1;
        };

        phoneTimeline.fromTo(
          phoneRef.current,
          { rotation: 0, transformOrigin: "center center", y: 0, x: 0 },
          {
            rotation: 90,
            y: () => computePhoneLandscapeY(),
            x: () => computePhoneLandscapeX(),
            ease: "power2.out",
          },
          0
        );

        phoneTimeline.fromTo(
          phoneImageRef.current,
          { scale: 1 },
          { scale: () => computePhoneScaleUp(), ease: "power3.out" },
          0
        );

        phoneTimeline.to(
          phoneRef.current,
          { x: "0vw", y: () => computePhoneLandscapeY(), ease: "power2.out" },
          0.5
        );

        phoneTimeline.to(
          phoneImageRef.current,
          { scale: () => computePhoneScaleDown(), ease: "power3.out" },
          0.55
        );

        phoneTimeline.to(
          phoneRef.current,
          {
            rotation: 0,
            transformOrigin: "center center",
            scale: () => computePhonePortraitScale(),
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
            scale: () => computePhoneEmphasisScale(),
            duration: 1,
            ease: "power1.inOut",
          },
          0.9
        );
      }

      // === SIDE PARTS TIMELINE ===
      if (leftPartRef.current && rightPartRef.current) {
        const leftImage = leftPartRef.current.querySelector("img");
        const rightImage = rightPartRef.current.querySelector("img");

        const sidePartsTimeline = gsap.timeline({
          scrollTrigger: {

            // Proportional to phone distance (~0.45 of total → ~3.6H) (20% slower)
            start: () =>
              "top+=" + Math.round(window.innerHeight * slower(3.6)) + " top",
            // Run for ~2.25H (20% slower)
            end: () => "+=" + Math.round(window.innerHeight * slower(2.25)),
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        sidePartsTimeline.fromTo(
          leftPartRef.current,
          { x: 0 },
          { x: () => computeTargets().gap, ease: "power2.inOut" },
          0
        );

        if (leftImage) {
          sidePartsTimeline.fromTo(
            leftImage,
            { scale: 0, opacity: 0 },
            {
              scale: () => computeTargets().leftScale,
              opacity: 1,
              ease: "power2.inOut",
            },
            0
          );
        }

        sidePartsTimeline.fromTo(
          rightPartRef.current,
          { x: 0 },
          { x: () => -computeTargets().gap, ease: "power2.inOut" },
          0
        );

        if (rightImage) {
          sidePartsTimeline.fromTo(
            rightImage,
            { scale: 0, opacity: 0 },
            {
              scale: () => computeTargets().rightScale,
              opacity: 1,
              ease: "power2.inOut",
            },
            0
          );
        }
      }

      // === FADE TITLES & GLOW ===
      if (talesfmTitleRef.current) {
        talesfmFadeTween = gsap.fromTo(
          talesfmTitleRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            ease: "power1.out",
            scrollTrigger: {
  
              start: "top top",
              end: () => "+=" + Math.round(window.innerHeight * slower(0.8)),
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      if (mainTitleRef.current) {
        gsap.fromTo(
          mainTitleRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            ease: "power1.out",
            scrollTrigger: {
  
              start: "top top",
              end: () => "+=" + Math.round(window.innerHeight * slower(0.8)),
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            ease: "power1.out",
            scrollTrigger: {
  
              start: "top top",
              end: () => "+=" + Math.round(window.innerHeight * slower(0.8)),
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      if (glowRef.current) {
        gsap.fromTo(
          glowRef.current,
          { opacity: 0.6, y: 0 },
          {
            opacity: 0,
            y: -200,
            ease: "power1.out",
            scrollTrigger: {
  
              start: "top top",
              end: () => "+=" + Math.round(window.innerHeight * slower(0.8)),
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      if (aboveImageRef.current) {
        gsap.fromTo(
          aboveImageRef.current,
          { y: 0 },
          {
            y: -200,
            ease: "power1.out",
            scrollTrigger: {
  
              start: "top top",
              end: () => "+=" + Math.round(window.innerHeight * slower(0.8)),
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // === DOWNLOAD BUTTONS ===
      if (downloadRef.current) {
        gsap.fromTo(
          downloadRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
  
              start: "top top+=300",
              end: () => "+=" + Math.round(window.innerHeight * slower(1.6)),
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );

        // Responsive Y using function-based values (numbers)
        const computeDownloadY = () => {
          const vw = window.innerWidth || 1200;

          if (vw < 640) return -0.5 * vw; // mobile
          if (vw < 1024) return -0.75 * vw; // tablet
          if (vw < 1300) return -0.7 * vw; // small laptop (1024–1299)
          if (vw < 1600) return -0.5 * vw; // laptop (1300–1599)
          return -0.45 * vw; // big desktop (1600+ tempered)
        };

        const computeDownloadX = () => {
          const vw = window.innerWidth || 1200;
          const base = 230;
          const scaled = Math.max(120, Math.min(base, vw * 0.19));
          return scaled;
        };

        downloadMoveTimeline = gsap.timeline({
          scrollTrigger: {

            start: "top top",
            end: () => "+=" + Math.round(window.innerHeight * slower(2.1)),
            scrub: true,
            invalidateOnRefresh: true, // recompute on resize
          },
        });

        downloadMoveTimeline.to(
          downloadRef.current,
          {
            y: () => computeDownloadY(),
            x: 0,
            opacity: 1,
            ease: "power1.out",
          },
          0
        );

        downloadMoveTimeline.to(
          downloadRef.current,
          {
            x: () => computeDownloadX(),
            y: () => computeDownloadY(),
            opacity: 0,
            ease: "power2.inOut",
          },
          0.5
        );

        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", onResize);
      }
    }, phoneRef);

    return () => {
      ctx.revert();
      if (phoneTimeline?.kill) phoneTimeline.kill();
      if (downloadMoveTimeline?.kill) downloadMoveTimeline.kill();
      if (talesfmFadeTween?.kill) talesfmFadeTween.kill();
    };
  }, [onShowDownloadChange]);

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
  };
};

export default useHeroAnimations;

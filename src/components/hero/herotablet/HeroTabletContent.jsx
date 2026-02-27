// components/HeroTabletContent.jsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getHeroTabletStyles } from "./HeroTabletStyles";
import { logUserEvent } from "../../../hooks/UserLogEvent";

// Scale dimensions by 0.75 (reduce 25%)
const scaleDimension = (val) => {
  if (typeof val !== "string") return val;
  if (val.endsWith("rem")) return `${parseFloat(val) * 0.75}rem`;
  if (val.endsWith("px")) return `${parseFloat(val) * 0.75}px`;
  return val;
};

// Scale all object values that are dimensions
const scaleObject = (obj) => {
  if (!obj) return obj;
  const scaled = {};
  for (let key in obj) {
    if (
      typeof obj[key] === "string" &&
      (obj[key].endsWith("px") || obj[key].endsWith("rem"))
    ) {
      scaled[key] = scaleDimension(obj[key]);
    } else {
      scaled[key] = obj[key];
    }
  }
  return scaled;
};

// Keep font scaling separate (1.5x bigger)
const scaleFont = (obj) =>
  obj && obj.fontSize
    ? {
        ...obj,
        fontSize:
          typeof obj.fontSize === "string" && obj.fontSize.endsWith("rem")
            ? `${parseFloat(obj.fontSize) * 1.5}rem`
            : typeof obj.fontSize === "string" && obj.fontSize.endsWith("px")
            ? `${parseFloat(obj.fontSize) * 1.5}px`
            : obj.fontSize,
      }
    : obj;

const HeroTabletContent = ({
  isTablet,
  showDownload,
  refs = {},
  hero = {},
}) => {
  const {
    sectionRef,
    aboveImageRef,
    talesfmTitleRef,
    mainTitleRef,
    subtitleRef,
    phoneRef,
    phoneImageRef,
    leftPartRef,
    rightPartRef,
    downloadRef,
  } = refs;

  const [inHero, setInHero] = useState(false);

  // Observe the section to know when the hero is on screen
  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInHero(entry.isIntersecting),
      {
        root: null,
        rootMargin: "0px 0px -10% 0px", // keep until nearly gone
        threshold: 0, // trigger as soon as it touches viewport
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [sectionRef]);

  const title = hero?.title ?? "Your All‑in‑one Audio World";
  const description =
    hero?.description ??
    "Experience the best free internet radio—stream live stations and music channels worldwide with our online radio player — no cost, no limits.";
  const downloadHeading = hero?.download?.heading ?? "Download our app";
  const downloadSubheading =
    hero?.download?.subheading ?? "Radio, Music and more";
  const buttons =
    Array.isArray(hero?.download?.buttons) && hero.download.buttons.length
      ? hero.download.buttons
      : [
          { label: "Download on the", text: "App Store" },
          { label: "Get it on", text: "Play Store" },
        ];

  const styles = (() => {
    const base = getHeroTabletStyles(isTablet);
    return {
      ...base,
      talesfmTitle: scaleFont(scaleObject(base.talesfmTitle)),
      mainTitle: scaleFont(scaleObject(base.mainTitle)),
      subtitle: scaleFont(scaleObject(base.subtitle)),
      downloadTitle: scaleFont(scaleObject(base.downloadTitle)),
      downloadDesc: scaleFont(scaleObject(base.downloadDesc)),
      downloadBtn: scaleFont(scaleObject(base.downloadBtn)),
      downloadBtnSpan: scaleFont(scaleObject(base.downloadBtnSpan)),
      downloadBtnSpan2: scaleFont(scaleObject(base.downloadBtnSpan2)),
      phone: scaleObject(base.phone),
      phoneImage: scaleObject(base.phoneImage),
      leftPart: scaleObject(base.leftPart),
      rightPart: scaleObject(base.rightPart),
      aboveImage: scaleObject(base.aboveImage),
      wrapper: scaleObject(base.wrapper),
      stickyArea: scaleObject(base.stickyArea),
      download: scaleObject(base.download),
      downloadBtnGap: scaleObject(base.downloadBtnGap),
    };
  })();

  return (
    <div
      ref={sectionRef}
      className="hidden min-[811px]:block min-[1200px]:hidden hero-tablet-scroll relative bg-black"
      style={{ ...styles.wrapper, minHeight: "700vh" }}
    >
     {/* SECTION-SCOPED BACKGROUND VIDEO */}
<div
  aria-hidden="true"
  className="absolute inset-0 z-0 pointer-events-none"
  style={{ contain: "layout paint size" }} // creates a nice containment box
>
  <div className="sticky top-0 h-screen w-full">
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src="/bgvideo.mp4" type="video/mp4" />
    </video>
  </div>
</div>


      {/* STICKY CONTENT */}
      <div
        className="sticky inset-0 flex flex-col items-center justify-center z-10 text-center leading-tight"
        style={{ ...styles.stickyArea, position: "sticky", top: 0 }}
      >
        {/* Headings / Subheading */}
        <div
          ref={aboveImageRef}
          className="relative text-center mb-2 mt-[2.25rem] max-w-7xl mx-auto z-10"
          style={styles.aboveImage}
        >
          <div className="relative text-center z-20">
            <p
              ref={talesfmTitleRef}
              style={{
                ...styles.talesfmTitle,
                fontWeight: 700,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1,
                fontSize: styles.talesfmTitle?.fontSize || "2.85rem",
              }}
              className="relative z-10 font-bold text-white/70 leading-none text-center"
            >
              TalesFM
            </p>

            <h1
              ref={mainTitleRef}
              style={{
                ...styles.mainTitle,
                fontWeight: 700,
                color: "#fff",
                marginBottom: "0.75rem",
                lineHeight: 1.1,
                fontSize: styles.mainTitle?.fontSize || "3.6rem",
              }}
              className="relative z-10 font-bold text-white mb-3 leading-tight max-w-7xl mx-auto text-center"
            >
              {title}
            </h1>

            <p
              ref={subtitleRef}
              style={{
                ...styles.subtitle,
                display: "inline-block",
                padding: "0.75rem 1.125rem",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "1.5rem",
                textAlign: "center",
                fontSize: styles.subtitle?.fontSize || "1.425rem",
              }}
              className="relative z-10 inline-block px-4 py-2 max-w-6xl text-white/70 mb-6  text-center"
            >
              {description}
            </p>
          </div>
        </div>

        {/* PHONE MOCK + DOWNLOAD CTA */}
        <div className="relative flex flex-col items-center w-full text-center z-20">
          {/* Phone (only visible while hero intersects) */}
          <div
            ref={phoneRef}
            className={`z-[200] ${inHero ? "block" : "hidden"}`}
            style={{
              ...styles.phone,
              willChange: "transform",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              marginLeft: "auto",
              marginRight: "auto",
              touchAction: "none",
              pointerEvents: "none",
              position: "fixed",
              left: "20%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative mt-[9.25rem] w-full h-full bg-transparent rounded-[1.8rem] p-2 ">
              <div className="relative pb-4 w-full h-full bg-transparent rounded-[1.5rem] overflow-visible flex items-center justify-center z-[300] text-center">
                <Image
                  ref={phoneImageRef}
                  src="/mobile.png"
                  alt="TalesFM Mobile App"
                  width={397}
                  height={811}
                  className="w-full h-full object-contain"
                  priority
                  style={{ ...styles.phoneImage }}
                />
              </div>
            </div>
          </div>

          {/* Download CTA (right aligned) */}
          {showDownload !== false && (
            <div
              ref={refs.downloadRef}
              className="w-full flex flex-col leading-none items-end z-[1] pointer-events-none transition-opacity duration-500 text-right"
              style={{
                ...styles.download,
                alignItems: "flex-end",
                paddingRight: "1.5rem", // 2rem → 1.5rem
              }}
            >
              <div className="flex flex-col items-start mb-4 pointer-events-auto text-left">
                <h1
                  className="font-extrabold text-white mb-1 leading-tight text-left"
                  style={{
                    ...styles.downloadTitle,
                    fontSize: styles.downloadTitle?.fontSize || "3rem",
                  }}
                >
                  {downloadHeading}
                </h1>
                <p
                  className="text-white/70 font-semibold mb-5 text-left"
                  style={{
                    ...styles.downloadDesc,
                    fontSize: styles.downloadDesc?.fontSize || "1.65rem",
                  }}
                >
                  {downloadSubheading}
                </p>
                <div
                  className="flex justify-start text-left"
                  style={{ ...styles.downloadBtnGap, display: "flex" }}
                >
                  {buttons.map((btn, idx) => (
                    <button
                      key={`${btn?.label ?? "btn"}-${idx}`}
                      className={
                        idx === 0
                          ? "border-2 border-white rounded-md px-5 py-4 flex flex-col items-end text-white hover:bg-white hover:text-black transition-colors duration-300 text-right"
                          : "border-2 border-white rounded-xl px-5 py-4 flex flex-col items-end text-white hover:bg-white hover:text-black transition-colors duration-300 text-right"
                      }
                      style={{
                        ...styles.downloadBtn,
                        fontSize: styles.downloadBtn?.fontSize || "1.32rem",
                      }}
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          logUserEvent("Hero Download Click", {
                            label: `${btn.label} ${btn.text}`,
                            index: idx,
                            device: "tablet",
                            Current_Page: window.location?.pathname,
                            location: window.location?.href,
                          });
                        }
                      }}
                    >
                      {btn?.label && (
                        <span
                          className="uppercase tracking-wide mb-1 text-right"
                          style={{
                            ...styles.downloadBtnSpan,
                            fontSize:
                              styles.downloadBtnSpan?.fontSize || "1.02rem",
                          }}
                        >
                          {btn.label}
                        </span>
                      )}
                      {btn?.text && (
                        <span
                          className="font-medium text-right pl-[3.45rem]"
                          style={{
                            ...styles.downloadBtnSpan2,
                            fontSize:
                              styles.downloadBtnSpan2?.fontSize || "1.575rem",
                          }}
                        >
                          {btn.text}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Left Part */}
      <div
        ref={refs.leftPartRef}
        className="fixed z-5 opacity-0 invisible pointer-events-none"
        style={styles.leftPart}
      >
        <img
          src="/right_part.png"
          alt="Left Decorative Part"
          style={{ width: "60%", height: "auto" }} // 80% → 60%
        />
      </div>

      {/* Decorative Right Part */}
      <div
        ref={refs.rightPartRef}
        className="fixed z-5 opacity-0 invisible pointer-events-none"
        style={styles.rightPart}
      >
        <img
          src="/left_part.png"
          alt="Right Decorative Part"
          style={{ width: "45%", height: "auto" }} // 60% → 45%
        />
      </div>
    </div>
  );
};

export default HeroTabletContent;

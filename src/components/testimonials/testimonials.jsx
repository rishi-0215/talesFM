"use client";

import React, { useState, useRef } from "react";
import { useTimeInView } from "../../hooks/useTimeInView";
import Marquee from "react-fast-marquee";

const defaultTestimonials = {
  title: "What Our Global Users Are Saying",
  testimonials: [],
};

// Layout sizing
const CARD_HEIGHT_DESKTOP = 314;
const CARD_WIDTH_DESKTOP_LG = 426;
const MARQUEE_CARD_GAP = 18;

// Title line helpers
const getMaxTitleLines = (testimonials, charsPerLine = 32) => {
  let maxLines = 1;
  testimonials.forEach((t) => {
    const lines = Math.ceil((t.title || "").length / charsPerLine);
    if (lines > maxLines) maxLines = lines;
  });
  return maxLines;
};
const MAX_TITLE_LINES_DESKTOP = getMaxTitleLines(defaultTestimonials.testimonials, 32);
const TITLE_LINE_HEIGHT_DESKTOP = 24;

const Testimonials = ({ testimonials }) => {
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);
  const sectionTitle = testimonials?.title ?? defaultTestimonials.title;
  const items = Array.isArray(testimonials?.testimonials)
    ? testimonials.testimonials
    : defaultTestimonials.testimonials;

  const sectionRef = useRef(null);
  useTimeInView(sectionRef, "ui_focus_time", { screen_name: "Testimonials" });

  return (
    <section ref={sectionRef} className="w-full bg-black px-5 py-12 md:px-8 md:py-20 text-white flex justify-center">
      <div className="max-w-[78rem] w-full mx-auto flex flex-col items-center text-center">
        <div className="text-center w-full mx-auto mb-10 md:mb-14">
          <div className="text-center mb-12 md:mb-16">
            <button
              className="
      border-2 border-white 
      px-4 py-1 text-[17px]        /* small size for mobile */
      rounded-full tracking-wide 
      font-poppins font-[500]
      w-auto mx-auto

      md:px-10 md:py-1.5 md:text-xl /* bigger size on tablet+ */
      md:max-w-[200px]
    "
            >
              Testimonials
            </button>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center w-full max-w-none md:whitespace-nowrap font-poppins mb-5 text-white">
            {sectionTitle}
          </h2>
        </div>

        {/* MOBILE: card-style marquee */}
        <div className="block md:hidden w-full relative overflow-hidden">
          <Marquee
            gradient={false}
            speed={28}
            pauseOnHover={false}
            loop={0}
            autoFill
            className="marquee"
          >
            {items.map((t, i) => (
              <div
                key={`m-${i}`}
                style={{
                  marginLeft: `${MARQUEE_CARD_GAP / 2}px`,
                  marginRight: `${MARQUEE_CARD_GAP / 2}px`,
                  display: "flex",
                  flexShrink: 0,
                  width: "min(88vw, 320px)",
                }}
              >
                <div
                  className="p-4 rounded-lg border border-white/10 bg-[#1C1C1C] shadow-md w-full"
                  style={{ minHeight: "260px" }}
                >
                  <p className="text-base font-semibold text-white mb-2 font-poppins">
                    {t.title}
                  </p>
                  <p className="text-[13px] text-gray-200 leading-relaxed font-poppins">
                    “{t.para}”
                  </p>
                  <p className="text-[12px] mt-3 text-white font-poppins">
                    {t.name}
                    {t.place && (
                      <span className="text-white"> · {t.place}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>

          {/* Edge fades */}
          <div className="absolute top-0 left-0 h-full w-10 pointer-events-none bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute top-0 right-0 h-full w-10 pointer-events-none bg-gradient-to-l from-black to-transparent z-10" />
        </div>

        {/* DESKTOP: card marquee (unchanged) */}
        <div className="hidden md:block w-full relative overflow-hidden">
          <Marquee
            gradient={false}
            speed={isMarqueeHovered ? 20 : 40}
            pauseOnHover={false}
            loop={0}
            autoFill
            className="marquee"
            onMouseEnter={() => setIsMarqueeHovered(true)}
            onMouseLeave={() => setIsMarqueeHovered(false)}
          >
            {items.map((t, i) => (
              <div
                key={`d-${i}`}
                style={{
                  minHeight: `${CARD_HEIGHT_DESKTOP}px`,
                  height: `${CARD_HEIGHT_DESKTOP}px`,
                  width: `${CARD_WIDTH_DESKTOP_LG}px`,
                  marginLeft: `${MARQUEE_CARD_GAP / 2}px`,
                  marginRight: `${MARQUEE_CARD_GAP / 2}px`,
                  display: "flex",
                  flexShrink: 0,
                  padding: "1.25rem",
                  borderRadius: "0.75rem",
                  boxShadow: "0 3px 18px 0 rgba(0,0,0,0.12)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "#1C1C1C",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  alignItems: "center",
                }}
              >
                <div className="relative z-20 text-start w-full flex flex-col h-full justify-center">
                  <div
                    style={{
                      minHeight: `${
                        MAX_TITLE_LINES_DESKTOP * TITLE_LINE_HEIGHT_DESKTOP
                      }px`,
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <p className="text-lg sm:text-[1.22rem] font-[500] text-white mb-1 font-poppins">
                      {t.title}
                    </p>
                  </div>
                  <p className="text-sm sm:text-[0.95rem] pt-2 text-gray-200 leading-tight font-poppins">
                    "{t.para}"
                  </p>
                  <p className="text-sm flex flex-col sm:text-base mt-3 text-white mb-1.5 font-poppins">
                    {t.name}
                    {t.place && (
                      <span className="text-white"> {" "} {t.place}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>

          <div className="absolute top-0 left-0 h-full w-16 pointer-events-none bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute top-0 right-0 h-full w-16 pointer-events-none bg-gradient-to-l from-black to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTimeInView } from "../../hooks/useTimeInView";

gsap.registerPlugin(ScrollTrigger);

const defaultAboutText1 =
  "Experience the best internet radio FM free streaming platform.";
const defaultAboutText2 =
  "Access thousands of radio stations online, live broadcasts, and music channels from around the globe through our FM radio player online - completely free.";

const defaultWhyChooseUs = [
  "Completely free FM radio streaming - no subscription required.",
  "Unlimited access to radio stations online worldwide.",
  "Premium audio streaming quality without payment.",
  "No advertisements interrupting your live radio experience.",
  "24/7 radio broadcasting from global networks.",
  "Mobile and web-based broadcasting platform compatibility.",
];

// Split text into sentences for individual animation
function renderSentences(text) {
  const sentences = text.split(". ").filter(Boolean);
  return sentences.map((sentence, idx) => (
    <span
      key={idx}
      className="block mb-[40px] font-bold font-poppins transition-colors duration-300"
    >
      {sentence.trim() + (idx < sentences.length - 1 ? "." : "")}
    </span>
  ));
}

// Preserve manual line breaks inside list items
function renderWithLineBreaks(text) {
  if (!text) return null;
  const lines = text.split(/\r?\n/);
  return lines.map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      {idx < lines.length - 1 && <br />}
    </React.Fragment>
  ));
}

const AboutUs = ({ about }) => {
  const about1Ref = useRef(null);
  const about2Ref = useRef(null);
  const whyChooseUsRefs = useRef([]);
  const sectionRef = useRef(null);

  const sectionLabel = about?.sectionLabel ?? "ABOUT US";
  const aboutText1 = about?.aboutText1 ?? defaultAboutText1;
  const aboutText2 = about?.aboutText2 ?? defaultAboutText2;
  const whyTitle = about?.whyTitle ?? "Why Choose Us";
  const whyChooseUsFull = Array.isArray(about?.whyItems)
    ? about.whyItems
    : defaultWhyChooseUs;

  useEffect(() => {
    const fadeColor = "rgba(255,255,255,0.3)";
    const fullColor = "rgba(255,255,255,1)";

    const elements = [];

    if (about1Ref.current)
      about1Ref.current
        .querySelectorAll("span")
        .forEach((el) => elements.push(el));
    if (about2Ref.current)
      about2Ref.current
        .querySelectorAll("span")
        .forEach((el) => elements.push(el));
    whyChooseUsRefs.current.forEach((el) => el && elements.push(el));

    if (!elements.length) return;

    gsap.set(elements, { color: fadeColor, willChange: "color" });

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { color: fadeColor },
        {
          color: fullColor,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom center",
            scrub: true, // smooth fade as it passes center
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  // Log time while About section is visible
  useTimeInView(sectionRef, "ui_focus_time", { screen_name: "about_us" });

  return (
    <div
      ref={sectionRef}
      id="about-section"
      className="min-h-screen mt-14 sm:mt-0 bg-black flex items-center pb-6 font-bold font-poppins"
    >
      <div className="w-full mx-auto px-[0.8rem] sm:px-[0.96rem] md:px-[0.96rem] lg:px-[1.28rem] md:max-w-[720px] lg:max-w-[820px] xl:max-w-[1000px]">
        {/* ABOUT US button */}
        <div className="text-center mb-[3rem] md:mb-[4.8rem]">
          <button
            className="
              border-2 border-white 
              px-6 py-[0.2rem] md:px-10 md:py-[0.3rem] 
              rounded-full 
              text-[1rem] md:text-[1.2rem] 
              tracking-wide 
              w-full max-w-[140px] md:max-w-[192px] 
              font-poppins font-[450]
            "
          >
            {sectionLabel}
          </button>
        </div>

        {/* About copy */}
        <div className="mb-10 w-full flex flex-col items-start">
          <p
            ref={about1Ref}
            className="
              font-bold text-left w-full max-w-[960px] break-words font-poppins
              text-[2.4rem]
              md:text-[2rem]
              lg:text-[2.6rem]
              xl:text-[3rem]
            "
          >
            {renderSentences(aboutText1)}
          </p>

          <div
            ref={about2Ref}
            className="
              font-bold text-left w-full max-w-[960px] break-words font-poppins
              text-[2.4rem]
              md:text-[2rem]
              lg:text-[2.6rem]
              xl:text-[3rem]
            "
          >
            {renderSentences(aboutText2)}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-10 w-full">
          <h2
            className="
              w-full font-bold text-left my-12 md:my-20 font-poppins
              text-[2.4rem]
              md:text-[2rem]
              lg:text-[2.6rem]
              xl:text-[3rem]
            "
          >
            {whyTitle}
          </h2>

          <ul
            className="
              w-full font-bold flex flex-col gap-[28px] md:gap-[40px] items-start pl-0 font-poppins max-w-full
              text-[2.3rem]
              md:text-[2rem]
              lg:text-[2.6rem]
              xl:text-[3rem]
            "
          >
            {whyChooseUsFull.map((item, idx) => (
              <li
                className="w-full font-bold text-left pl-0 list-inside font-poppins max-w-full"
                key={idx}
                ref={(el) => {
                  if (el) whyChooseUsRefs.current[idx] = el;
                }}
              >
                {renderWithLineBreaks(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

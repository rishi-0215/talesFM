"use client";

import React, { useRef } from "react";
import { useTimeInView } from "../../hooks/useTimeInView";

const featureIcons = [
  <img
    key="global"
    src="/global.svg"
    alt="Global Stations"
    className="my-6 md:my-8 feature-icon w-9 h-9 md:w-20 md:h-20 max-[970px]:md:w-14 max-[970px]:md:h-14"
  />,
  <img
    key="no-ads"
    src="/no-ads.svg"
    alt="Ad-Free"
    className="my-6 md:my-8 feature-icon w-9 h-9 md:w-20 md:h-20 max-[970px]:md:w-14 max-[970px]:md:h-14"
  />,
  <img
    key="live-news"
    src="/live-news.svg"
    alt="Live News"
    className="my-6 md:my-8 feature-icon w-14 h-10 md:w-28 md:h-20 max-[970px]:md:w-20 max-[970px]:md:h-14"
  />,
  <div key="support" className="flex flex-row gap-3">
    <img
      src="/Web-support.svg"
      alt="Web"
      className="my-6 md:my-8 feature-icon w-9 h-9 md:w-20 md:h-20 max-[970px]:md:w-14 max-[970px]:md:h-14"
    />
    <img
      src="/app-support.svg"
      alt="App"
      className="my-6 md:my-8 feature-icon w-8 h-10 md:w-16 md:h-20 max-[970px]:md:w-12 max-[970px]:md:h-16"
    />
  </div>,
  <img
    key="genre"
    src="/Genre.svg"
    alt="Genre"
    className="my-6 md:my-8 feature-icon w-9 h-9 md:w-20 md:h-20 max-[970px]:md:w-14 max-[970px]:md:h-14"
  />,
];

const Features = ({ features }) => {
  const sectionLabel = features?.sectionLabel ?? "Features";
  const heading =
    features?.heading ?? "Your Favourite Radio,\nAnytime, Anywhere.";
  const subheading =
    features?.subheading ??
    "Experience free online radio like never before — no ads, no buffering, no limits. TalesFM makes tuning in easy, fast, and global.";
  const cards =
    Array.isArray(features?.cards) && features.cards.length
      ? features.cards
      : [];

  const sectionRef = useRef(null);
  useTimeInView(sectionRef, "ui_focus_time", { screen_name: "featres" });

  return (
    <div
      ref={sectionRef}
      className="w-full bg-black px-5 py-12 md:px-8 md:py-20 text-white flex justify-center"
    >
      <div className="max-w-[70rem] w-full mx-auto flex flex-col items-center text-center">
        {/* Label */}
        <div className="text-center w-full mx-auto mb-8 md:mb-14">
          <button className="border-2 border-white px-6 py-1 rounded-full text-base md:text-2xl max-[970px]:md:text-xl tracking-wide font-[450] w-auto font-poppins">
            {sectionLabel}
          </button>
        </div>

        {/* Heading + Subheading */}
        <div className="mb-6 md:mb-8 w-full flex flex-col items-center">
          <h2 className="features-heading text-2xl md:text-5xl max-[970px]:md:text-4xl font-bold text-center w-full max-w-5xl break-words text-white leading-[1.25] md:leading-[1.2] transition-colors duration-100 font-poppins mb-4 md:mb-10">
            {heading}
          </h2>
          <p className="features-sub text-sm md:text-xl max-[970px]:md:text-lg font-normal text-center w-full max-w-[720px] text-white leading-[1.6] md:leading-[1.7] font-poppins">
            {subheading}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6">
          {/* First row: 3 cards */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 max-[970px]:md:gap-3 w-full justify-center mb-2 md:mb-3">
            {(cards.length ? cards.slice(0, 3) : []).map((card, idx) => (
              <div
                key={card.title || idx}
                className="
                  feature-card feature-card--small
                  border border-[#232326] rounded-2xl shadow-lg
                  flex flex-col items-start text-start
                  max-w-[300px] w-full mx-auto md:mx-0 md:max-w-none
                  p-4 md:p-6
                  bg-[#1C1C1C]
                  h-auto md:h-[320px] max-[970px]:md:h-[300px]
                  md:w-[360px] max-[970px]:md:w-[280px]
                "
              >
                <div className="flex justify-center items-center w-full mb-2 md:mb-3 min-h-[60px] md:min-h-[80px]">
                  {featureIcons[idx]}
                </div>
                <h3 className="text-base md:text-3xl max-[970px]:md:text-2xl text-start font-bold mb-1.5 md:mb-2 font-poppins text-white">
                  {card.title}
                </h3>
                <p className="text-sm md:text-lg max-[970px]:md:text-base text-start font-normal text-gray-300 font-poppins">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second row: 2 cards */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 max-[970px]:md:gap-3 w-full justify-center">
            {(cards.length ? cards.slice(3, 5) : []).map((card, idx) => (
              <div
                key={card.title || idx}
                className="
                  feature-card feature-card--wide
                  border border-[#232326] rounded-2xl shadow-lg
                  flex flex-col items-start text-start
                  max-w-[300px] w-full mx-auto md:mx-0 md:max-w-none
                  p-4 md:p-6
                  bg-[#1C1C1C]
                  h-auto md:h-[320px] max-[970px]:md:h-[300px]
                  md:w-[560px] max-[970px]:md:w-[460px]
                "
              >
                <div className="flex justify-center items-center w-full mb-2 md:mb-3">
                  {featureIcons[idx + 3]}
                </div>
                <h3 className="text-base md:text-3xl max-[970px]:md:text-2xl text-start font-semibold mb-1.5 md:mb-2 font-poppins text-white">
                  {card.title}
                </h3>
                <p className="text-sm md:text-lg max-[970px]:md:text-base text-start font-normal text-gray-300 font-poppins">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

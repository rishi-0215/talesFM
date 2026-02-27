"use client";

import React, { useRef } from "react";
import { logUserEvent } from "../../hooks/UserLogEvent";
import { useTimeInView } from "../../hooks/useTimeInView";

function RadioPlayerCard({ radio }) {
  const heading =
    radio?.heading ?? "Start Your – Radio Player\nOnline Experience Today";
  const description =
    radio?.description ??
    "Join millions using TalesFM for the ultimate free online radio experience. Our radio streaming service delivers authentic radio broadcasting, unlimited music streaming, free discovery, and premium audio streaming through our advanced broadcasting platform.";
  const ctaLabel = radio?.ctaLabel ?? "Get App";
  const sectionRef = useRef(null);
  useTimeInView(sectionRef, "ui_focus_time", { screen_name: "radio_player" });
  const handleCtaClick = (e) => {
    if (typeof window === "undefined") return;
    logUserEvent("ui_button_click", {
      button_id: "radio_player_cta",
      screen_name: "RadioPlayerCard",
      position_xy: `${e.clientX},${e.clientY}`,
      sticky: false,
    });
  };
  return (
    <div
      ref={sectionRef}
      className="card-outer w-full flex items-center justify-center 
      py-8 tablet:py-[4.8rem] lg:py-[9.6rem] xl:py-[11.2rem] bg-transparent"
    >
      <div
        className="
    relative card w-full
    mx-3 tablet:mx-5 lg:mx-9
    xl:mx-auto 2xl:mx-auto
    max-w-[576px] tablet:max-w-[720px] lg:max-w-[880px] xl:max-w-[65rem]
    rounded-[22px] overflow-hidden
    px-4 tablet:px-[36px] lg:px-[54px]
    py-8 tablet:py-[40px] lg:py-[80px] xl:py-[108px]
    text-center shadow-[0_8px_32px_rgba(0,0,0,0.45)]
    min-h-[384px] tablet:min-h-[28vh] lg:min-h-[56vh] 
  "
        style={{
          background:
            "radial-gradient(120% 120% at 50% 10%, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.09) 18%, rgba(255,255,255,0.05) 35%, rgba(38,38,38,1) 60%), #232323",
          border: "1px solid rgba(255,255,255,0.09)",
        }}
      >
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-[22px] opacity-25 pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{ zIndex: 1 }}
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>

        {/* Foreground */}
        <div className="relative z-10">
          {/* Heading */}
          <h2
            className="
              font-poppins font-bold text-white
              leading-[1.2] tracking-[-0.02em]
              mx-auto
              text-[1.4rem] tablet:text-[1.26rem] lg:text-[3.12rem]
            "
            style={{ maxWidth: 760 }}
          >
            {heading}
          </h2>

          {/* Description */}
          <p
            className="
    text-white/75 font-poppins mx-auto
    max-w-[20.8rem] tablet:max-w-[24rem] lg:max-w-[33.6rem] xl:max-w-[41.6rem]
    mt-4 tablet:mt-5
    text-[1rem] tablet:text-[0.593rem] lg:text-[1.092rem]
  "
            style={{ lineHeight: 1.6 }}
          >
            {description}
          </p>

          {/* CTA */}
          <div className="mt-6 tablet:mt-8 flex items-center justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.jukebox.mobileapp&hl=en&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-full
                px-4 tablet:px-6 py-2
                bg-[rgba(255,255,255,0.08)]
                text-white/90 
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]
                border border-white/10  hover:bg-white hover:text-black
                   transition-colors duration-300 ease-in-out
              "
              style={{
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              }}
              onClick={handleCtaClick}
            >
              <span className="inline-flex h-5 w-5 tablet:h-6 tablet:w-6 items-center justify-center ">
                <img
                  src="/logo.png"
                  alt="TalesFM Logo"
                  className="h-full w-full object-contain"
                />
              </span>

              <span className="font-poppins cursor-pointer font-[400] text-[0.8rem] tablet:text-[0.706rem] lg:text-[1.176rem]  leading-none">
                {ctaLabel}
              </span>
            </a>
          </div>
        </div>

        {/* Soft vignette */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[22px]"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.03), inset 0 -64px 96px rgba(0,0,0,0.18)",
          }}
        />
      </div>
    </div>
  );
}

export default RadioPlayerCard;

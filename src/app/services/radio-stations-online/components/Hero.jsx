"use client";
import React from "react";
import Button from "../../ui/Button";
import { logUserEvent } from "@/hooks/UserLogEvent";

export default function RadioStationsHero({ heroData }) {
  const GOOGLE_PLAY_URL =
    "https://play.google.com/store/apps/details?id=com.jukebox.mobileapp&hl=en&pli=1";

  const HOME_PAGE_LINk = "https://talesfm.com";

  const handleDownloadClick = (e) => {
    e.preventDefault();

    logUserEvent("ui_button_click", {
      button_id: "download-now-button",
      screen_name: "StartListening",
      position_xy: `${e.clientX},${e.clientY}`,
    });

    // Redirect to Google Play
    window.open(GOOGLE_PLAY_URL, "_blank");
  };
  const handleListenLiveClick = (e) => {
    e.preventDefault();

    logUserEvent("ui_button_click", {
      button_id: "download-now-button",
      screen_name: "StartListening",
      position_xy: `${e.clientX},${e.clientY}`,
    });

    // Redirect to Google Play
    window.open(HOME_PAGE_LINk, "_blank");
  };
  return (
    <section className="relative min-h-screen max-w-100vw  text-white flex items-center justify-center px-6 py-10 overflow-hidden">
      

      <div className="absolute inset-0 /50"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-3">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl sm:text-4xl font-bold leading-tight">
          {heroData.heading}
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-100">
          {heroData.subheading}
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
          {heroData.tagline}
        </p>

        {/* Description */}
        <p className="text-xl md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {heroData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4" >
          <Button onClick={handleDownloadClick}>Download Now</Button>
          

          <Button onClick={handleDownloadClick}>Listen Live</Button>
        </div>
      </div>
    </section>
  );
}

"use client";
import Button from "../../ui/Button";
import { logUserEvent } from "@/hooks/UserLogEvent";
export default function Hero({ data }) {
  const heroData = data;
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
      button_id: "listen-live-button",
      screen_name: "StartListening",
      position_xy: `${e.clientX},${e.clientY}`,
    });

    // Add your listen live logic here
    window.open(HOME_PAGE_LINk, "_blank");
  };

  return (
    <section className="relative bg-black text-white mt-16 md:mt-20 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-lg"
      >
        <source src="/bgAnimation.webm" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {heroData.heading}
          </h1>

          {/* Description */}
          <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            {heroData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Sub CTA */}
          <p className="text-lg sm:text-xl font-semibold">{heroData.subCTA}</p>

          {/* Button */}
          <div className="pt-2 sm:pt-4">
            <Button onClick={(e) => handleDownloadClick(e)}>
              {heroData.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

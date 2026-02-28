"use client";

import { logUserEvent } from "@/hooks/UserLogEvent";
const RadioHero = ({ data }) => {
  const radioHeroData = data;
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
  return (
    <div className="max-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-[#171717] rounded-[40px] border border-[#262626] p-10 md:p-20 text-center shadow-2xl">
        {/* Main Heading */}
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4">
          {radioHeroData.heading}
        </h1>

        {/* Sub-heading */}
        <h2 className="text-[#d1d5db] text-xl md:text-2xl font-medium mb-8">
          {radioHeroData.subheading}
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#9ca3af] text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          {radioHeroData.description}
        </p>

        {/* Action Button */}
        <button
          className="inline-block px-8 py-3.5 border-2 border-[#e5e7eb] text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#171717]"
          aria-label={radioHeroData.button.ariaLabel}
          onClick={handleDownloadClick}
        >
          {radioHeroData.button.label}
        </button>
      </div>
    </div>
  );
};

export default function App({ data: radioHeroData }) {
  return (
    <div className="font-sans antialiased">
      <RadioHero data={radioHeroData} />
    </div>
  );
}

"use client";
import Button from "../../ui/Button";
import { logUserEvent } from "@/hooks/UserLogEvent";

export default function CTASection({ freeRadioData }) {
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
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-zinc-900/40 border border-zinc-800 rounded-3xl p-12 md:p-16 backdrop-blur-sm">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {freeRadioData.title}
          </h2>

          {/* Description Paragraph */}
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            {freeRadioData.description}
          </p>

          {/* Subheading */}
          <h3 className="text-xl md:text-2xl text-zinc-200 font-medium pt-4">
            {freeRadioData.tagline}
          </h3>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button onClick={handleDownloadClick}>Download Now</Button>
            <Button onClick={handleListenLiveClick}>Listen Live</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

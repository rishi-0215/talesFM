"use client";
import { logUserEvent } from "@/hooks/UserLogEvent";
import Button from "../../ui/Button";

export default function StartExploring({ data }) {
  const startExploringData = data;
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
    <section className="bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold">
          {startExploringData.heading}
        </h2>

        {/* Description (Mapped) */}
        <div className="space-y-4 text-gray-400 leading-relaxed">
          {startExploringData.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Button */}
        <div className="pt-4">
          <Button onClick={handleDownloadClick}>
            {startExploringData.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}

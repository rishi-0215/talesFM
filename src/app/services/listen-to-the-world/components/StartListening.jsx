"use client";
import Button from "../../ui/Button";
import { logUserEvent } from "@/hooks/UserLogEvent";

export default function StartListening() {
  const GOOGLE_PLAY_URL =
    "https://play.google.com/store/apps/details?id=com.jukebox.mobileapp&hl=en&pli=1";

  const HOME_PAGE_LINk="https://talesfm.com"

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
    window.open(HOME_PAGE_LINk,"_blank")
  };

  return (
    <div className="mt-0 flex flex-col items-center text-center space-y-10">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        Start Listening Now
      </h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={handleDownloadClick}>Download Now</Button>

        <Button onClick={handleListenLiveClick}>Listen Live</Button>
      </div>
    </div>
  );
}

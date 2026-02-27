"use client";

const ANDROID_APP_LINK =
  "https://play.google.com/store/apps/details?id=com.jukebox.mobileapp&hl=en&pli=1";

export default function GetAppButton({ children, className }) {
  const handleClick = () => {
    window.open(ANDROID_APP_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function BackgroundVideo() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setLoadVideo(true));
    } else {
      setTimeout(() => setLoadVideo(true), 2000);
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {loadVideo && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/poster-blur.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            
            <source src="/output.mp4" type="video/mp4" />
          </video>

          {/* Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-3xl bg-black/50" />
        </>
      )}
    </div>
  );
}

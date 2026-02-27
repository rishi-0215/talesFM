"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import QRCode from "./QRCode";

const AppDownloadModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Animate modal in with optimized settings
      gsap.set(modalRef.current, { display: "flex" });
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "power2.out" }
      );
      gsap.fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0, y: 10 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    } else {
      // Allow body scroll
      document.body.style.overflow = "";
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (modalRef.current) {
        gsap.killTweensOf([overlayRef.current, contentRef.current]);
      }
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const handleClose = () => {
    // Animate modal out with optimized settings
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.15 });
    gsap.to(contentRef.current, {
      scale: 0.95,
      opacity: 0,
      y: 10,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(modalRef.current, { display: "none" });
        onClose();
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ display: "none" }}
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleOverlayClick}
      />

      {/* Modal Content */}
      <div
        ref={contentRef}
        className="relative bg-[#1c1c1c] rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden border border-white/10"
      >
        {/* Header */}
        <div className="bg-[#0f0f0f] p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/10"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Download TalesFM</h2>
              <p className="text-gray-300 mt-1">Get the app on your device</p>
            </div>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* QR Code Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 bg-black/40 p-4 rounded-xl border-2 border-red-500/30 mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
              <div className="relative z-10">
                <QRCode value="https://talesfm.com/download" size={96} />
              </div>
            </div>
            <p className="text-sm text-gray-300 text-center">
              Scan QR code with your device camera
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Google Play Store Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.jukebox.mobileapp&hl=en&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/playstore_black.png"
                alt="Download on the Play Store"
                className="h-12 md:h-14 w-auto max-w-[160px] transition-transform duration-300 hover:scale-105"
              />
            </a>

            {/* App Store Button */}
            <a
              href="https://apps.apple.com/app/your-app-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/appstore_black.png"
                alt="Download on the App Store"
                className="h-12 md:h-14 w-auto max-w-[160px] transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadModal;

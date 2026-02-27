"use client";

import React from "react";
import Image from "next/image";
import AuthorImage from "@/components/AuthorImage/AuthorImage";

export default function AuthorBar({ publishedDate }) {
  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4 sm:p-5 flex flex-row items-center gap-4 sm:gap-5">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white/10 border border-white/20">
          <AuthorImage />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-1.5">
        <p className="text-sm sm:text-base text-white/90 leading-relaxed">
          Want free online radio anytime, anywhere?{" "}
          <a
            href="https://talesfm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline font-medium"
          >
            TalesFM
          </a>{" "}
          brings the world's best shows to your ears - available free globally, zero ads.
        </p>
        <p className="text-sm sm:text-base font-semibold text-white/90">
          Author Jake Walker | Founder & Owner of TalesFM
        </p>
        <p className="text-sm sm:text-base font-semibold text-white/90">
          Published: {formattedDate}
        </p>
      </div>
    </div>
  );
}


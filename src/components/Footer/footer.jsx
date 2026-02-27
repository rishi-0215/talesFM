"use client";

import Image from "next/image";
import Link from "next/link";
import { logUserEvent } from "../../hooks/UserLogEvent";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRef } from "react";
import { useTimeInView } from "../../hooks/useTimeInView";

export default function Footer({ footer }) {
  const sectionRef = useRef(null);
  useTimeInView(sectionRef, "ui_focus_time", { screen_name: "footer" });
  const brand = footer?.brand ?? "TalesFM";
  const description =
    footer?.description ??
    "Experience the best free internet radio—stream live stations and music channels worldwide with our online radio player — no cost, no limits.";
  const pagesLabel = footer?.pagesLabel ?? "Pages";
  const homeLabel = footer?.homeLabel ?? "Home";
  const aboutLabel = footer?.aboutLabel ?? "About Us";
  const contactLabel = footer?.contactLabel ?? "Contact Us";
  const privacyLabel = footer?.privacyLabel ?? "Privacy Policy";
  const termsLabel = footer?.termsLabel ?? "Terms of Service";
  const copyright = footer?.copyright ?? "© 2025 TalesFM. All rights reserved";

  const logClick = (label, section) => {
    if (typeof window === "undefined") return;
    logUserEvent("Footer Link Click", {
      label,
      section,
      device: window.innerWidth >= 810 ? "desktop" : "mobile",
      Current_Page: window.location?.pathname,
      location: window.location?.href,
    });
  };
  return (
    <footer ref={sectionRef} className="bg-[#0f0f0f] mt-4 text-white pt-6 sm:pt-8 md:pt-10 rounded-t-2xl sm:rounded-t-[3rem] overflow-hidden relative w-full">
      {/* Outer container */}
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-6 pt-10 relative z-50">
        {/* Inner rounded container */}
        <div
          className="
            bg-[#1c1c1c] rounded-[18px] p-4 border border-white/10 
            shadow-[0_3px_22px_rgba(0,0,0,0.25)]
            md:border-0 md:shadow-none md:rounded-[3.2rem] md:bg-[#1c1c1c]
            sm:rounded-[2.4rem]
            sm:p-5 md:py-4 lg:py-10
            flex flex-col md:flex-row justify-between gap-6
            overflow-hidden w-full max-w-[66rem] mx-auto 
          "
        >
          {/* Left column */}
          <div className="flex-1 px-0 sm:px-3">
            <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
              {/* Left content */}
              <div className="flex flex-col flex-1 items-start text-left">
                {/* Logo + brand */}
                <div className="flex items-center pb-4 gap-2">
                  <span className="py-1.5 sm:py-3">
                    <Image
                      src="/logo.png"
                      alt="TalesFM"
                      width={32}
                      height={32}
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                      priority
                    />
                  </span>
                  <h2
                    className="text-[18px] sm:text-[22px] md:text-[35px] 
                    font-[400] leading-none"
                  >
                    {brand}
                  </h2>
                </div>

                {/* Description */}
                <p className="mt-2 mb-2 text-gray-300 text-[16px] leading-relaxed md:text-[15px] md:text-gray-400 md:max-w-lg">
                  {description}
                </p>

                {/* Social Icons */}
                <div className="flex gap-2 mt-3 text-lg md:text-2xl">
                  <a
                    href="https://www.instagram.com/the_talesfm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-gray-200"
                    onClick={() => logClick("Instagram", "social")}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61581484834405"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-gray-200"
                    onClick={() => logClick("Facebook", "social")}
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://uk.pinterest.com/talesfm_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest"
                    className="hover:text-gray-200"
                    onClick={() => logClick("Pinterest", "social")}
                  >
                    <FaPinterest />
                  </a>
                  <a
                    href="https://x.com/thetalesfm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X/Twitter"
                    className="hover:text-gray-200"
                    onClick={() => logClick("X/Twitter", "social")}
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCYemLildqXqg7bICsTpGgjg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="hover:text-gray-200"
                    onClick={() => logClick("YouTube", "social")}
                  >
                    <FaYoutube />
                  </a>
                </div>

                {/* Pages + Policies + Copyright — MOBILE */}
                <div className="mt-5 md:hidden w-full">
                  <h3 className="text-[16px] font-semibold mb-2">Pages</h3>
                  <ul className="text-gray-300 text-[12px] space-y-1.5">
                    <li>
                      <Link href="/" className="hover:text-white" onClick={() => logClick("Home", "pages-mobile")}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us" className="hover:text-white" onClick={() => logClick("About Us", "pages-mobile")}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="hover:text-white" onClick={() => logClick("Contact Us", "pages-mobile")}>
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-white" onClick={() => logClick("Blog", "pages-mobile")}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/author" className="hover:text-white" onClick={() => logClick("Author", "pages-mobile")}>
                        Author
                      </Link>
                    </li>
                  </ul>

                  {/* Policy chips */}
                  <div className="mt-3 flex gap-1.5 flex-wrap">
                    <Link
                      href="/privacy-policy"
                      className="text-[12px] text-gray-200 hover:text-white py-0.5"
                      onClick={() => logClick("Privacy Policy", "policies-mobile")}
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms"
                      className="text-[12px] text-gray-200 hover:text-white px-1.5 py-0.5"

                      onClick={() => logClick("Terms of Service", "policies-mobile")}
                    >
                      Terms of Service
                    </Link>
                  </div>

                  {/* Copyright pill */}
                  <div className="mt-4">
                    <div className="inline-block text-gray-400 text-[12px] py-1.5">
                      © 2025 TalesFM. All rights reserved
                    </div>
                  </div>
                </div>
              </div>

              {/* Right content — DESKTOP */}
              <div className="hidden md:flex flex-col items-start">
                <h3 className="text-lg sm:text-lg mt-2 font-semibold mb-2 md:mb-3 text-left">
                  {pagesLabel}
                </h3>
                <ul className="space-y-2 text-gray-400 text-[15px] sm:text-lg text-left">
                  <li>
                    <Link href="/" className="hover:text-white" onClick={() => logClick(homeLabel, "pages-desktop")}>
                      {homeLabel}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className="hover:text-white" onClick={() => logClick(aboutLabel, "pages-desktop")}>
                      {aboutLabel}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="hover:text-white" onClick={() => logClick(contactLabel, "pages-desktop")}>
                      {contactLabel}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white" onClick={() => logClick("Blog", "pages-desktop")}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/author" className="hover:text-white" onClick={() => logClick("Author", "pages-desktop")}>
                      Author
                    </Link>
                  </li>
                </ul>
                
              </div>  
            </div>

            {/* Divider + copyright row — DESKTOP */}
            <div className="hidden md:flex border-t border-gray-600 mt-6 pt-3 flex-col md:flex-row justify-between items-center gap-3 text-gray-400">
              <p className="text-xs sm:text-sm md:text-base">{copyright}</p>
              <div className="flex flex-row gap-3 sm:gap-5 text-xs sm:text-sm md:text-lg">
                <Link href="/privacy-policy" className="hover:text-white" onClick={() => logClick(privacyLabel, "policies-desktop")}>
                  {privacyLabel}
                </Link>
                <Link href="/terms" className="hover:text-white" onClick={() => logClick(termsLabel, "policies-desktop")}>
                  {termsLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Big background word */}
        <div className="relative overflow-hidden mt-6">
          <h3
            className="
              text-white font-bold text-center leading-none break-words
              text-[18vw]
              sm:text-[24vw]
              md:text-[160px]
              lg:text-[200px]
              xl:text-[220px]
              2xl:text-[240px]
              translate-y-[15%] 
              sm:translate-y-[15%]
              md:translate-y-[25%]
              lg:translate-y-[28%]
            "
          >
            TalesFM
          </h3>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0"
            style={{
              height: "150%",
              background:
                "linear-gradient(to top,rgba(15,15,15,1) 0%, rgba(15,15,15,0.85) 35%, rgba(15,15,15,0.55) 60%,rgba(15,15,15,0.15) 85%,rgba(15,15,15,0) 100%)",
            }}
          />
        </div>
      </div>
    </footer>
  );
}

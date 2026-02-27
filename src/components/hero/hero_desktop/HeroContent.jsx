// components/HeroContent.jsx
import React, { useRef } from "react";
import Image from "next/image";
import { useTimeInView } from "../../../hooks/useTimeInView";
import { logUserEvent } from "../../../hooks/UserLogEvent";

const HeroContent = ({ showDownload, refs, hero }) => {
  const title = hero?.title ?? "Your All‑in‑one Audio World";
  const description =
    hero?.description ??
    "Experience the best free internet radio—stream live stations and music channels worldwide with our online radio player — no cost, no limits.";

  const downloadHeading = hero?.download?.heading ?? "Download our app";
  const downloadSubheading =
    hero?.download?.subheading ?? "Radio, Music and more";
  const buttons = [
    {
      label: "Download on the",
      text: "App Store",
      url: "https://apps.apple.com/your-app-link",
    },
    {
      label: "Get it on",
      text: "Play Store",
      url: "https://play.google.com/store/apps/details?id=com.jukebox.mobileapp&hl=en&pli=1",
    },
  ];

  const sectionRef = useRef(null);
  useTimeInView(sectionRef, "ui_focus_time", { screen_name: "HeroContent" });

  return (
    <div ref={sectionRef} className="hidden min-[811px]:block scroll-section min-h-[875vh] relative bg-black">
      <div className="sticky inset-0 flex leading-tight flex-col items-center justify-center z-10 text-center">
        <div
          ref={refs?.aboveImageRef}
          className="relative text-center mb-2 pt-[9.75rem] max-w-7xl mx-auto z-10"
        >
          <div className="relative text-center z-20">
            <video
              ref={refs?.glowRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 
              -translate-y-1/2 mt-[97px] w-[180%] h-auto max-w-none z-0 pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/bgvideo.mp4" type="video/mp4" />
            </video>

            <p
              ref={refs?.talesfmTitleRef}
              style={{ fontSize: "2.81rem" }}
              className="relative z-10 font-bold text-white/70 leading-none text-center"
            >
              TalesFM
            </p>

            <h1
              ref={refs?.mainTitleRef}
              style={{ fontSize: "3.75rem" }}
              className="relative z-10 font-bold text-white mb-3 leading-tight max-w-7xl mx-auto text-center"
            >
              {title}
            </h1>

            <p
              ref={refs?.subtitleRef}
              style={{ fontSize: "1.10rem" }}
              className="relative z-10 inline-block px-4 py-2 max-w-4xl text-white/70 mb-6 shadow-lg text-center"
            >
              {description}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-full text-center z-20">
          <div
            ref={refs?.phoneRef}
            className="z-[20] relative"
            style={{
              width: "clamp(36rem, 54vw, 56.25rem)",
              height: "clamp(38.4rem, 36vw, 36.75rem)",
              willChange: "transform",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              marginLeft: "auto",
              marginRight: "auto",
              top: "clamp(1px, -0.35vw, -11.25px)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 z-[5]"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                ref={refs?.leftPartRef}
                className="absolute"
                style={{
                  top: "35%",
                  left: "40%",
                  transform: "translate(-50%, -50%)",
                  opacity: 1,
                  willChange: "transform",
                }}
              >
                <img
                  src="/right_part.png"
                  alt="Left Decorative Part"
                  style={{
                    width: "clamp(60px, 9vw, 135px)",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>

              <div
                ref={refs?.rightPartRef}
                className="absolute"
                style={{
                  top: "35%",
                  left: "60%",
                  transform: "translate(-50%, -50%)",
                  opacity: 1,
                  willChange: "transform",
                }}
              >
                <img
                  src="/left_part.png"
                  alt="Right Decorative Part"
                  style={{
                    width: "clamp(60px, 9vw, 135px)",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>

            <div className="relative mt-5 w-full h-full bg-transparent rounded-[2.25rem] p-2  z-[10]">
              <div className="relative pb-7 w-full h-full bg-transparent rounded-[1.875rem] overflow-visible flex items-center justify-center z-[10] text-center">
                <Image
                  ref={refs?.phoneImageRef}
                  src="/mobile.png"
                  alt="TalesFM Mobile App"
                  width={248}
                  height={507}
                  className="w-full h-full object-contain scale-[0.825] sm:scale-75 md:scale-[0.825] lg:scale-75 xl:scale-[0.825]"
                  priority
                />
              </div>
            </div>
          </div>

          <div
            ref={refs?.downloadRef}
            className={`flex flex-col leading-none items-start absolute z-[1] pointer-events-none transition-opacity duration-100 ${
              showDownload ? "opacity-100" : "opacity-10"
            } text-left`}
            style={{
              "--dl-scale": "clamp(0.412, 100vw / 1400, 0.75)",
              "--dl-offset": "clamp(120px, 24vw, 315px)",
              top: "100%",
              left: "60%",
              transform: "translateX(var(--dl-offset)) scale(var(--dl-scale))",
              marginTop: "clamp(18px, 3vw, 49.5px)",
              transformOrigin: "top left",
              position: "absolute",
            }}
          >
            <div
              className="flex flex-col items-start pointer-events-auto"
              style={{
                marginBottom: "clamp(0.75rem, 2.25vw, 2.25rem)",
                transform: "scale(var(--download-scale, 1))",
                transformOrigin: "top left",
                maxWidth: "clamp(195px, 30vw, 420px)",
              }}
            >
              <h2
                className="font-extrabold text-white leading-tight mb-2"
                style={{
                  fontSize: "clamp(1.2rem, 2.7vw, 2.81rem)",
                  marginBottom: "clamp(0.26rem, 0.68vw, 0.75rem)",
                  lineHeight: 1.05,
                }}
              >
                {downloadHeading}
              </h2>

              <p
                className="text-white/70 font-semibold"
                style={{
                  fontSize: "clamp(0.71rem, 1.5vw, 1.2rem)",
                  marginBottom: "clamp(0.93rem, 2.25vw, 1.87rem)",
                }}
              >
                {downloadSubheading}
              </p>

              <div
                className="flex justify-start"
                style={{
                  gap: "clamp(0.56rem, 1.87vw, 2.06rem)",
                  transform: "scale(var(--button-scale, 1))",
                  transformOrigin: "top left",
                }}
              >
                {buttons.map((btn, idx) => (
                  <a
                    key={`${btn?.label ?? "btn"}-${idx}`}
                    href={btn?.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`border-2 border-white rounded-md flex flex-col items-end text-white hover:bg-white hover:text-black transition-colors duration-300 text-right`}
                    style={{
                      fontSize: "clamp(0.52rem, 1.05vw, 0.83rem)",
                      padding:
                        "clamp(0.37rem,0.9vw,0.75rem) clamp(0.6rem,1.5vw,0.93rem)",
                      width: "clamp(112px, 16.5vw, 210px)",
                      minWidth: 0,
                    }}
                    onClick={(e) => {
                      if (typeof window !== "undefined") {
                        logUserEvent("ui_button_click", {
                          button_id: `${btn.label} ${btn.text}`,
                          screen_name: "HeroContent",
                          position_xy: `${e.clientX},${e.clientY}`,
                          sticky: false,
                        });
                      }
                    }}
                  >
                    {btn?.label && (
                      <span
                        className="uppercase tracking-wide mb-1"
                        style={{ fontSize: "clamp(0.37rem, 0.75vw, 0.67rem)" }}
                      >
                        {btn.label}
                      </span>
                    )}
                    {btn?.text && (
                      <span
                        className="font-medium pl-[3.15rem]"
                        style={{ fontSize: "clamp(0.67rem, 1.5vw, 1.2rem)" }}
                      >
                        {btn.text}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
import React from "react";
import Image from "next/image";

const HeroMobileContent = ({ hero }) => {
  const title = hero?.title ?? "Your All‑in‑one Audio World";
  const description =
    hero?.description ??
    "Experience the best free internet radio—stream live stations and music channels worldwide with our online radio player — no cost, no limits.";
  return (
  <section
  className="
    block min-[811px]:hidden relative 
    h-[120svh] bg-black isolate overflow-hidden
  "
>
  {/* background */}
  <video
    className="absolute inset-0 w-full h-full object-cover -z-30"
    autoPlay muted loop playsInline preload="auto"
  >
    <source src="/bgvideo.mp4" type="video/mp4" />
  </video>



  {/* content */}
  <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 pt-[5rem] pb-6">
    <div className="w-full max-w-[min(92vw,42rem)] mx-auto text-center">
      <p className="text-white/70 font-semibold tracking-tight leading-none [font-size:clamp(1.75rem,7vw,2.5rem)]">
        TalesFM
      </p>
      <h1 className="mt-1 text-white font-extrabold leading-tight [font-size:clamp(2.1rem,9vw,2.875rem)]">
        {title}
      </h1>
      <p className="mt-3 text-white/70 leading-relaxed [font-size:clamp(0.95rem,3.8vw,1.1rem)]">
        {description}
      </p>
    </div>

    {/* image resizes to fit */}
    <div className="relative w-[min(80vw,22rem)] aspect-[2/3] mx-auto">
      <Image
        src="/mobile.png"
        alt="TalesFM Mobile App"
        fill
        className="object-contain select-none"
        priority
        sizes="(max-width: 810px) 80vw, 0px"
      />
    </div>
  </div>
</section>

  );
};

export default HeroMobileContent;

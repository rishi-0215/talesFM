import React from "react";
import UnalignedBody from "../../components/UnalignedBody";

export default function Hero({ heroSection, heroSectionContent }) {
  return (
    <div className="relative bg-black text-white selection:bg-white/20 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full blur-lg object-cover"
      >
        <source src="/bgAnimation.webm" type="video/webm" />
        <source src="/bgAnimation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 md:py-12 lg:py-20">
        {/* Main Hero Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-20 leading-tight">
          {heroSection.title}
        </h1>

        {/* Content Section */}
        <div className="space-y-12 max-w-full">
          {/* Subheading & Description */}
          <UnalignedBody data={heroSectionContent} />

          {/* Features List Section */}
          <section className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold tracking-wide">
              Why Tales FM Works
            </h3>

            <ul className="space-y-3">
              {heroSection.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-300 text-lg font-light"
                >
                  <span className="mr-3 text-white leading-none">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

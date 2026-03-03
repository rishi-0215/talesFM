import React from "react";
import UnalignedBody from "../../components/UnalignedBody";

export default function Hero({ heroSection, heroSectionContent }) {
  return (
    <div className="relative  text-white selection:bg-white/20 overflow-hidden">
      {/* Background Video */}
      

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 /60"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-4 md:py-6 lg:py-10">
        {/* Main Hero Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10 leading-tight">
          {heroSection.title}
        </h1>

        {/* Content Section */}
        <div className="space-y-12 max-w-full">
          {/* Subheading & Description */}
          <UnalignedBody data={heroSectionContent} />

          {/* Features List Section */}
          <section className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold tracking-wide">
              {heroSection.subTitle}
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

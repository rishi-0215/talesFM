import React from "react";
import { SectionContent } from "../interfaces";

interface RadioSectionProps {
  data: SectionContent;
}

const Body = ({ data }: RadioSectionProps) => {
  const { title, subtitle, paragraphs } = data;

  const sizeMap = {
    xl: "text-xl sm:text-2xl",
    "2xl": "text-2xl sm:text-3xl",
    "3xl": "text-2xl sm:text-3xl md:text-4xl",
    "4xl": "text-3xl sm:text-4xl md:text-5xl",
    "5xl": "text-4xl sm:text-5xl md:text-6xl",
    "6xl": "text-4xl sm:text-5xl md:text-6xl",
  };

  const weightMap = {
    "100": "font-thin",
    "200": "font-extralight",
    "300": "font-light",
    "400": "font-normal",
    "500": "font-medium",
    "600": "font-semibold",
    "700": "font-bold",
    "800": "font-extrabold",
    "900": "font-black",
  };

  return (
    <section className="text-white">
      {/* Heading */}
      <h1
        className={`${sizeMap[title.size]} ${weightMap[title.weight]} tracking-tight mb-3`}
      >
        {title.text}
      </h1>

      {/* Sub-heading */}
      {subtitle && (
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-100">
          {subtitle}
        </h2>
      )}

      {/* Paragraphs */}
      <div className="space-y-6 sm:space-y-8">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Body;

import React from "react";
import { SectionContent } from "../interfaces";
interface RadioSectionProps {
  data: SectionContent;
}

const Body = ({ data }: RadioSectionProps) => {
  const { title, subtitle, paragraphs } = data;

  const sizeMap = {
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
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
    <section className="mx-auto max-w-full text-white">
      {/* heading */}
      <h1 className={`${sizeMap[title.size]} ${weightMap[title.weight]} font-black tracking-tight mb-2`}>
        {title.text}
      </h1>

      {/* sub-heading */}
      {subtitle && (
        <h2 className="text-2xl md:text-4xl font-black mb-8 text-gray-100">
          {subtitle}
        </h2>
      )}

      {/* paragraphs */}
      <div className="mb-10 space-y-8">
        {paragraphs.map((text, index) => (
          <p key={index} className="text-gray-400 leading-relaxed text-xl ">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Body;

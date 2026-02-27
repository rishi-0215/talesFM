"use client";

import { ParagraphSectionData } from "../interfaces";

interface Props {
  data: ParagraphSectionData;
}

export default function ParagraphInfoSection({ data }: Props) {
  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          {data.heading}
        </h2>

        <div className="space-y-6 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
          {data.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { ListSectionData } from "../interfaces";

interface Props {
  data: ListSectionData;
}

export default function ListInfoSection({ data }: Props) {
  return (
    <section className="py-6 sm:py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          {data.heading}
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
          {data.description}
        </p>

        <ol className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg">
          {data.items.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-white/50 font-medium">
                {index + 1}.
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}

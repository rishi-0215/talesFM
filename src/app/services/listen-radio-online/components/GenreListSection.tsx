"use client";

import { GenreSectionData } from "../interfaces";

interface Props {
  data: GenreSectionData;
}

export default function GenreListSection({ data }: Props) {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            {data.heading}
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            {data.intro}
          </p>

          <p className="text-white font-semibold">{data.subIntro}</p>
        </div>

        {/* Genre List */}
        <div className="space-y-8">
          {data.genres.map((genre, index) => (
            <div
              key={index}
              className="
                group
                border-l border-white/10
                pl-6
                transition-all duration-300
                hover:border-white/40
              "
            >
              <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-white">
                • {genre.title}
              </h3>

              <p className="mt-2 text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {genre.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

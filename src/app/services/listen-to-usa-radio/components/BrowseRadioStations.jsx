"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BrowseByCity({ description, heading, cities }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.querySelector("div")?.clientWidth || 0;

    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth + 24 : -(cardWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <section className=" text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-4xl space-y-6 mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {heading}
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Left Button (Desktop Only) */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-white/20 transition"
          >
            <ChevronLeft />
          </button>

          {/* Right Button (Desktop Only) */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-white/20 transition"
          >
            <ChevronRight />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="
              flex gap-4 sm:gap-6
              overflow-x-hidden scroll-smooth
              snap-x snap-mandatory
              no-scrollbar
              md:overflow-hidden
              bg-transparent
            "
          >
            {cities.map((city, index) => (
              <div
                key={index}
                className="
                  min-w-[88%] sm:min-w-[75%] md:min-w-[48%]
                  snap-start
                  rounded-2xl md:rounded-3xl
                  border border-white/10
                  bg-linear-to-br from-white/10 via-white/5 to-transparent
                  backdrop-blur-xl
                  shadow-md md:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                  p-6 sm:p-8
                  transition-all duration-300
                "
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                  {city.name}
                </h3>

                <ol className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                  {city.stations.map((station, i) => (
                    <li key={i}>
                      {i + 1}. {station}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

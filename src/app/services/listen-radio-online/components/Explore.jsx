"use client";

import { Radio } from "lucide-react";

export default function ExploreIndianRadioByCategory({
  radioStationsInIndia,
  stations,
}) {
  return (
    <section className="bg-black text-white py-4 sm:py-24 md:py-2">
      <div className="lg:max-w-7xl md:max-w-10/12 sm:max-w-10/12 mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl space-y-6 mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {radioStationsInIndia.sectionHeading}
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            {radioStationsInIndia.sectionSubtext}
          </p>

          <p className="text-white font-semibold text-lg">
            {radioStationsInIndia.title.text}
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {radioStationsInIndia.paragraphs[0]}
          </p>

          <p className="text-white font-semibold">
            {radioStationsInIndia.popularStationsHeading}
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            flex gap-6 overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            no-scrollbar
            md:grid md:grid-cols-2 lg:grid-cols-3
            md:overflow-visible
          "
        >
          {stations.map((station, index) => (
            <div
              key={index}
              className="group relative min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-start rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-30 pointer-events-none" />

              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <Radio className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold">{station.name}</h3>
                </div>

                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <Info label="Frequency" value={station.frequency} />
                  <Info label="Genre" value={station.genre} />
                  <Info label="Languages" value={station.languages} />
                  <Info label="Country" value={station.country} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-xs uppercase tracking-wider">{label}</p>
      <p className="text-white/90">{value}</p>
    </div>
  );
}

"use client";
export default function MostListenedStations({ title, subTitle, stations }) {
  return (
    <section className="bg-black text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto space-y-6 mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            {subTitle}
          </p>
        </div>

        {/* Station List */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {stations.map((station, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex gap-4 sm:gap-5">
                {/* Number */}
                <div className="text-lg sm:text-xl font-semibold text-white/40 group-hover:text-white transition-colors duration-300 shrink-0">
                  {index + 1}.
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {station.name}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {station.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <div className="max-w-4xl mx-auto mt-0 md:mt-16">
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            These stations show a diverse listening habit that is divided
            between local, curated content and national, specialized, or
            on-demand content.
          </p>
        </div>
      </div>
    </section>
  );
}

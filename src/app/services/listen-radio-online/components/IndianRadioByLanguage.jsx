"use client";


export default function IndianRadioByLanguage({ languages }) {
  return (
    <section className="bg-black text-white py-4 sm:py-24 md:py-12">
      <div className="lg:max-w-9/12 md:max-w-10/12 sm:max-w-10/12 mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Indian Radio Stations by Language
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            India is better known for its diversity of languages. Therefore,
            online radio makes it easy to cater to {"people's"} needs.
          </p>

          <p className="text-white font-semibold">
            Here is a list of language-based stations:
          </p>
        </div>

        {/* Cards Wrapper */}
        <div
          className="
    flex gap-6 overflow-x-auto scroll-smooth
    snap-x snap-mandatory
    no-scrollbar
    sm:grid sm:grid-cols-2
    lg:grid-cols-3 xl:grid-cols-4
    sm:overflow-visible
  "
        >
          {languages.map((item, index) => (
            <div
              key={index}
              className="
        group relative
        min-w-[85%] sm:min-w-0
        snap-start
        rounded-3xl
        border border-white/10
        bg-linear-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-xl
        p-6
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]
      "
            >
              {/* Soft inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-30 pointer-events-none" />

              <div className="relative space-y-6">
                {/* Title Badge */}
                <div className="bg-white/10 rounded-2xl py-4 px-4 text-center">
                  <h3 className="font-semibold text-sm sm:text-base">
                    {item.language}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">Radio Stations</p>
                </div>

                {/* Station List */}
                <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                  {item.stations.map((station, i) => (
                    <li
                      key={i}
                      className="group-hover:text-white transition-colors duration-300"
                    >
                      {station}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

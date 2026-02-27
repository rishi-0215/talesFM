"use client";


export default function IndianRadioByCity({ cities }) {

  return (
    <section className="bg-black text-white py-4 sm:py-24 md:py-10">
      <div className="lg:max-w-9/12 md:max-w-10/12 sm:max-w-10/12 mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="space-y-6 mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Indian Radio Stations by City & Region
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            You can also find regional voices and city vibes through Indian radio online.
            A list of popular Indian radio stations by city and voice is as follows:
          </p>
        </div>

        {/* Grid */}
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


          {cities.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                rounded-2xl
                border border-white/10
                bg-linear-to-br from-white/8 via-white/4 to-transparent
                backdrop-blur-xl
                p-6
                shadow-[0_8px_30px_rgba(0,0,0,0.6)]
                transition-all duration-400
                hover:-translate-y-1.5
                hover:shadow-[0_15px_45px_rgba(0,0,0,0.8)] min-w-[85%] sm:min-w-0 snap-start

              "
            >
              {/* Card Inner Light */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-20 pointer-events-none" />

              <div className="relative space-y-6">

                {/* Elevated Title Box */}
                <div className="
                  bg-white/10
                  rounded-xl
                  py-4 px-4
                  text-center
                  border border-white/10
                ">
                  <h3 className="text-sm sm:text-base font-semibold">
                    {item.city}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Radio Stations
                  </p>
                </div>

                {/* Station List */}
                <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                  {item.stations.map((station, i) => (
                    <li
                      key={i}
                      className="transition-colors duration-300 group-hover:text-white"
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

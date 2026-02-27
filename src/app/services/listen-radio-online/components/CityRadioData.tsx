import React from "react";
import { CityRadioStations } from "../../interfaces";

interface cityRadioStations {
  cityRadioStations: CityRadioStations;
}

export default function CityRadioData({
  cityRadioStations,
}: cityRadioStations) {
  return (
    <div className="max-w-9/12 mx-auto py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-amber-50 mb-4">
        {cityRadioStations.title}
      </h1>

      {/* Description */}
      <p className="text-amber-50 text-lg mb-8 leading-relaxed">
        {cityRadioStations.description}
      </p>

      {/* Cities */}
      <div className="space-y-8">
        {cityRadioStations.cities.map((city) => (
          <div key={city.name} className="space-y-4">
            {/* City Name */}
            <h2 className="text-2xl font-bold text-red-900 border-b-2 border-blue-200 pb-2">
              {city.name}
            </h2>

            {/* Stations List */}
            <ul className="ml-6 space-y-1">
              {city.stations.map((station, stationIndex) => (
                <li
                  key={`${city.name}-${station}-${stationIndex}`}
                  className="text-amber-50 text-base list-disc"
                >
                  {station}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

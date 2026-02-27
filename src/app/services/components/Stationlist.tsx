import React from "react";
import { MusicFocusedSectionData } from "../interfaces";

interface StationListProps {
  data: MusicFocusedSectionData;
}

const StationList = ({ data }: StationListProps) => {
  const { title, description, stations } = data;

  return (
    <section className="py-10 text-white">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4 tracking-tight">{title}</h2>

      {/* Description */}
      <p className="text-gray-400 mb-8 leading-relaxed">{description}</p>

      {/* Stations Grid/List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stations.map((station, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 group"
          >
            {/* Simple Numbering or Icon */}
            <span className="text-red-500/50 font-mono mr-4 text-sm">
              0{index + 1}
            </span>

            <span className="font-medium group-hover:text-white transition-colors">
              {station.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StationList;

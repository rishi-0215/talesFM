import React from "react";

import { radioGenresData } from "../constants";

export default function Genre() {
  return (
    <div className="max-w-9/12 mx-auto py-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-amber-50 mb-8">
        {radioGenresData.title}
      </h1>

      {/* Genres List */}
      <ul className="space-y-4">
        {radioGenresData.genres.map((genre, index) => (
          <li key={index} className="flex items-start text-amber-50">
            <span className="font-bold text-red-900 mr-4 shrink-0 mt-0.5 w-4">
              •
            </span>
            <div className="flex-1">
              <span className="font-semibold text-lg">{genre.name}</span>
              <p className="text-amber-50 mt-1 ml-6 leading-relaxed">
                {genre.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

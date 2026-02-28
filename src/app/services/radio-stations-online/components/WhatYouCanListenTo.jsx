import React from "react";
import StationList from "../../components/Stationlist";

export default function WhatYouCanListenTo({ data: musicFocusedSectionData }) {
  return (
    <section className="mb-8 max-w-9/12 mx-auto ">
      <StationList data={musicFocusedSectionData} />
      <p className="text-lg text-gray-400">
        {musicFocusedSectionData.text}
      </p>
    </section>
  );
}

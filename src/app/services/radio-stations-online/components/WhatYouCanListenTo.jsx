import React from "react";
import StationList from "../../components/Stationlist";

export default function WhatYouCanListenTo({ data: musicFocusedSectionData }) {
  return (
    <section className="mb-10 max-w-9/12 mx-auto ">
      <StationList data={musicFocusedSectionData} />
      <p className="text-lg text-gray-400">
        No cables. No traditional radios. Just instant access to the world of
        sound.
      </p>
    </section>
  );
}

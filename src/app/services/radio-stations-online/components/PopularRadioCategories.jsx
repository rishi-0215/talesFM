import React from "react";
import StationList from "../../components/Stationlist";

export default function PopularRadioCategories({ data:popularRadioCategories }) {
  return (
    <section className="max-w-9/12 mx-auto">
      <StationList data={popularRadioCategories} />
      <p className="text-lg text-gray-400">
        Something for every listener — from global hits to local voices.
      </p>
    </section>
  );
}

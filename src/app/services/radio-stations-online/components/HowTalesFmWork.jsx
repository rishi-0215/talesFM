import React from "react";
import StationList from "../../components/Stationlist";
export default function HowTalesFmWork({ data:howTalesFMWorks }) {
  return (
    <section className="max-w-9/12 mx-auto" >
      <StationList data={howTalesFMWorks} />
      <p className="text-lg text-gray-400">No complication — Just press play</p>
    </section>
  );
}

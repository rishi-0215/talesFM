import React from "react";
import StationList from "../../components/Stationlist";
export default function BrowseYourWay({ data:browseRadioStations }) {
  return (
    <section className="max-w-9/12 mx-auto" >
      <StationList data={browseRadioStations} />
      <p className="text-lg text-gray-400">
        {browseRadioStations.footer}
      </p>
    </section>
  );
}

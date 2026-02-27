import React from "react";
import Hero from "./components/Hero";
import WhyAmericanRadio from "./components/WhyAmericanRadio";
import ExploreByGenre from "./components/ExploreByGenre";
import MostListenedRadioStations from "./components/MostListenedRadioStations";
import BrowseRadioStations from "./components/BrowseRadioStations";
import HowToStream from "./components/HowToStream";
import FAQ from "../components/FAQSection";
import DownloadSection from "./components/DownloadSection";
import { getListenToUsaRadio } from "../../../lib/getListenToUsaRadioContent";

export default async function Page() {
  const content = await getListenToUsaRadio();
 

  return (
    <>
      <Hero data={content.heroData} />
      <WhyAmericanRadio data={content.whyAmericanRadioData} />
      <ExploreByGenre
        data={content.exploreSectionData}
        genres={content.genres}
      />
      <MostListenedRadioStations stations={content.stations} />
      <BrowseRadioStations cities={content.cities} />
      <HowToStream data={content.howToStreamData} />
      <FAQ faqData={content.faqData} />
      <DownloadSection data={content.startExploringData} />
    </>
  );
}

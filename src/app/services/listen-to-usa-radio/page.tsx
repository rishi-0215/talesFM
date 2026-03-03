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
import BackgroundVideo from "../components/Background";

export default async function Page() {
  const content = await getListenToUsaRadio();
 

  return (
    <div className="space-y-10" >
      {/* Background Video */}
      <BackgroundVideo />
      <Hero data={content.heroData} />
      <WhyAmericanRadio data={content.whyAmericanRadioData} />
      <ExploreByGenre
        data={content.exploreSectionData}
        genres={content.genres}
      />
      <MostListenedRadioStations title={content.stationTitle} subTitle={content.stationSubTitle} stations={content.stations} />
      <BrowseRadioStations heading={content.citiesHeading} description={content.citiesDescription} cities={content.cities} />
      <HowToStream data={content.howToStreamData} />
      <FAQ heading={content.faqSectionHeading} faqData={content.faqData} />
      <DownloadSection data={content.startExploringData} />
    </div>
  );
}

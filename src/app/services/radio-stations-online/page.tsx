import React from "react";
import Hero from "./components/Hero";
import Body from "../components/Body";
import WhatYouCanListenTo from "./components/WhatYouCanListenTo";
import SmarterWay from "./components/SmarterWay";
import BrowseYourWay from "./components/BrowseYourWay";
import HowTalesFmWork from "./components/HowTalesFmWork";
import PopularRadioCategories from "./components/PopularRadioCategories";
import FeedbackSection from "./components/FeedbackSection";
import FaqSection from "./components/FaqSection";
import SimpleRadioStation from "./components/SimpleRadioStation";
import { SectionContainer } from "../components/SectionContainer";
import { getListenRadioStationsOnlineContent } from "../../../lib/getRadioStationsOnlineContent";

export default async function Page() {
  const content = await getListenRadioStationsOnlineContent();
  console.log(content);

  return (
    <main className="bg-black text-white space-y-18 ">
      <Hero heroData={content.hero} />

      <SectionContainer>
        <Body data={content.liveRadioStations} />
      </SectionContainer>

      <WhatYouCanListenTo data={content.musicFocusedSection} />

      <SectionContainer>
        <SmarterWay data={content.smarterWay} />
      </SectionContainer>

      <BrowseYourWay data={content.browseRadioStations} />
      <HowTalesFmWork  data={content.howTalesFMWorks} />
      <PopularRadioCategories data={content.popularRadioCategories} />

      <FeedbackSection />

      <FaqSection heading={content.faqSectionHeading} faqData={content.faq} />

      <SimpleRadioStation data={content.radioHero} />
    </main>
  );
}

import Hero from "./components/Hero";
import Explore from "./components/Explore";
import IndianRadioByLanguage from "./components/IndianRadioByLanguage";
import IndianRadioByCity from "./components/IndianRadioByCity";
import MultiSection from "./components/MultiSection";
import FAQSection from "../components/FAQSection";

import { getListenRadioOnlineContent } from "../../../lib/getListenRadioOnlineContent";

export default async function Page() {
  const content = await getListenRadioOnlineContent();
  return (
    <div>
      <Hero
        heroSectionContent={content.whyStillRadio}
        heroSection={content.indianRadioData}
      />

      <Explore
        radioStationsInIndia={content.radioStationsInIndia}
        stations={content.stations}
      />

      <IndianRadioByLanguage languages={content.languages} />

      <IndianRadioByCity cities={content.cities} />

      <MultiSection
        simpleSteps={content.simpleSteps}
        benefits={content.benefits}
        nriSection={content.nriSection}
      />

      <FAQSection faqData={content.faq} />
    </div>
  );
}

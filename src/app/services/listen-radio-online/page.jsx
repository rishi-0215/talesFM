import Hero from "./components/Hero";
import Explore from "./components/Explore";
import IndianRadioByLanguage from "./components/IndianRadioByLanguage";
import IndianRadioByCity from "./components/IndianRadioByCity";
import MultiSection from "./components/MultiSection";
import FAQSection from "../components/FAQSection";

import { getListenRadioOnlineContent } from "../../../lib/getListenRadioOnlineContent";
import BackgroundVideo from "../components/Background";

export default async function Page() {
  const content = await getListenRadioOnlineContent();

  return (
    <div className="space-y-18">
      {/* Background Video */}

      <BackgroundVideo />

      <Hero
        heroSectionContent={content.whyStillRadio}
        heroSection={content.indianRadioData}
      />

      <Explore
        radioStationsInIndia={content.radioStationsInIndia}
        stations={content.stations}
      />

      <IndianRadioByLanguage
        languageSection={content.languageSection}
        languages={content.languages}
      />

      <IndianRadioByCity
        citySectionHeading={content.citySectionHeading}
        citySectionSubtext={content.citySectionSubtext}
        cities={content.cities}
      />

      <MultiSection
        simpleSteps={content.simpleSteps}
        benefits={content.benefits}
        nriSection={content.nriSection}
      />

      <FAQSection heading={content.faqSectionHeading} faqData={content.faq} />
    </div>
  );
}

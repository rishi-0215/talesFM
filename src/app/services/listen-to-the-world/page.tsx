// app/listen-to-the-world/page.tsx
import { getListenToTheWorldContent } from "../../../lib/getListenToTheWorldContent";
import Hero from "./components/Hero";
import StartListening from "./components/StartListening";
import WhyTalesFM from "./components/WhyTalesRM";
import RadioComparison from "./components/RadioComparison";
import Reviews from "./components/Reviews";
import FAQSection from "../components/FAQSection";
import FreeRadio from "./components/FreeRadio";
import BackgroundVideo from "../components/Background";

export default async function Page() {
  const data = await getListenToTheWorldContent();

  return (
    <main className="mt-15 space-y-18 ">
      {/* Background Video */}
      <BackgroundVideo />
      <Hero
        heroSection={data.heroSection}
        heroSectionContent={data.heroSectionContent}
      />

      <StartListening />

      <WhyTalesFM talesFMData={data.talesFMData} />

      <RadioComparison heading={data.comparisonSectionHeading} />

      <Reviews
        heading={data.testimonialsHeading}
        subTitle={data.testimonialsSubTitle}
        testimonials={data.testimonials}
      />

      <FAQSection heading={data.faqSectionHeading} faqData={data.faqData} />

      <FreeRadio freeRadioData={data.freeRadioData} />
    </main>
  );
}

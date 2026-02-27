// app/listen-to-the-world/page.tsx
import { getListenToTheWorldContent } from "../../../lib/getListenToTheWorldContent";
import Hero from "./components/Hero";
import StartListening from "./components/StartListening";
import WhyTalesFM from "./components/WhyTalesRM";
import RadioComparison from "./components/RadioComparison";
import Reviews from "./components/Reviews";
import FAQSection from "../components/FAQSection";
import FreeRadio from "./components/FreeRadio";

export default async function Page() {
  const data = await getListenToTheWorldContent();

  return (
    <main className="mt-15">
      <Hero
        heroSection={data.heroSection}
        heroSectionContent={data.heroSectionContent}
      />

      <StartListening />

      <WhyTalesFM talesFMData={data.talesFMData} />

      <RadioComparison />

      <Reviews testimonials={data.testimonials} />

      <FAQSection faqData={data.faqData} />

      <FreeRadio freeRadioData ={data.freeRadioData} />
    </main>
  );
}
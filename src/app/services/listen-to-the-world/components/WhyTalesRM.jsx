// app/tales-fm/page.tsx
import { Section } from "./Section";
import { FeatureItem } from "./FeatureItem";

export default function WhyTalesFM({ talesFMData }) {
  return (
    <main className="min-h-screen  bg-black text-white font-sans selection:bg-orange-500/30">
      <Section
        title="What Is Tales FM Radio App?"
        subtitle="More Than a Radio App — It's Your Global Audio Hub"
        className="max-w-6xl"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          {talesFMData.description.para1}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          {talesFMData.description.para2}
        </p>
        <p className="text-orange-400 font-medium">
          {talesFMData.description.para3}
        </p>
      </Section>

      <hr className="border-gray-800 max-w-4xl mx-auto" />

      {/* Target Audience Section */}
      <Section
        title="Who Is Tales FM For?"
        subtitle="Made for Every Kind of Listener"
        className="max-w-6xl"
      >
        <p className="text-gray-400 mb-4 text-lg">Tales FM is aimed at:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {talesFMData.targetAudience.map((item) => (
            <FeatureItem key={item} title={item} isBullet />
          ))}
        </div>
        <p className="italic text-gray-500 mt-6">{talesFMData.audienceNote}</p>
      </Section>

      {/* Value Proposition Section */}
      <Section
        title="Why Tales FM Is Different"
        subtitle="Reasons why a huge number of people choose Tales FM Over Other Radio Apps"
        className="bg-zinc-900/30 max-w-6xl rounded-3xl"
      >
        {talesFMData.valueProposition.map((obj) => (
          <FeatureItem
            key={obj.title}
            title={obj.title}
            description={obj.description}
          />
        ))}
      </Section>

      {/* Content Section */}
      <Section
        title="Everything You Can Listen To"
        subtitle="One App. Every Sound You Love"
        className="max-w-6xl"
      >
        <div className="space-y-4">
          {talesFMData.contentTypes.map((obj) => (
            <FeatureItem
              key={obj.title}
              title={obj.title}
              description={obj.description}
              isBullet
            />
          ))}
        </div>

        <p className="text-xl text-gray-400 ">
          Whether {"you're"} looking for a global online radio app or a simple
          radio app without ads, Tales FM brings everything together in one
          place.
        </p>
      </Section>
    </main>
  );
}

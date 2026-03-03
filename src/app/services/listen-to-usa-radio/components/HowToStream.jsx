"use client";

export default function HowToStream({ data }) {
  const howToStreamData = data;
  return (
    <section className=" text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl space-y-8 sm:space-y-6">
          {/* Heading + Intro */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {howToStreamData.heading}
            </h2>

            {howToStreamData.description.map((text, index) => (
              <p
                key={index}
                className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                {text}
              </p>
            ))}

            <p className="font-semibold text-sm sm:text-base md:text-lg">
              {howToStreamData.introText}
            </p>
          </div>

          {/* Platforms */}
          {howToStreamData.platforms.map((platform, index) => (
            <div key={index} className="space-y-4 sm:space-y-6">
              <p className="font-semibold text-base sm:text-lg">
                • {platform.title} –
              </p>

              <ol className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg">
                {platform.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>
                    {stepIndex + 1}. {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

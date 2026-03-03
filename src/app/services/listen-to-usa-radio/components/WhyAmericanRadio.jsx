

export default function WhyAmericanRadio({ data }) {
  const content = data;

  return (
    <section className=" text-white py-4 sm:py-10 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="max-w-4xl space-y-4 sm:space-y-4">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            {content.heading}
          </h2>

          {/* Intro */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            {content.introduction}
          </p>

          {/* Sub Intro */}
          <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
            {content.subIntro}
          </p>

          {/* Reasons List */}
          <ul className="space-y-4 sm:space-y-4">
            {content.reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <span className="mt-1 sm:mt-2 text-white shrink-0">•</span>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-white">
                    {reason.title}
                  </span>{" "}
                  - {reason.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Conclusion */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {content.conclusion}
          </p>

        </div>

      </div>
    </section>
  );
}

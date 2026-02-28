// ExploreByGenre.tsx
import Accordion from "./Accordion";

export default function ExploreByGenre({ data, genres }) {
  const exploreSectionData = data;
  return (
    <section className="bg-black text-white py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-6 mb-10 md:mb-8 max-w-3xl">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {exploreSectionData.heading}
          </h2>

          {/* Paragraphs (Mapped) */}
          {exploreSectionData.paragraphs.map((text, index) => (
            <p
              key={index}
              className="text-gray-300 leading-relaxed text-sm sm:text-base"
            >
              {text}
            </p>
          ))}

          {/* Highlight Text */}
          <p className="text-white font-semibold text-base sm:text-lg">
            {exploreSectionData.highlightText}
          </p>
        </div>

        {/* Accordion gets mapped genres */}
        <Accordion items={genres} />
      </div>
    </section>
  );
}

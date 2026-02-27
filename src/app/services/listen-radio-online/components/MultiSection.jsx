import ListInfoSection from "./ListInfoSection";
import ParagraphInfoSection from "./ParagraphSection";


export default function MultiSection({
  simpleSteps,
  benefits,
  nriSection,
}) {
  return (
    <main className="bg-black text-white">
      <ListInfoSection data={simpleSteps} />
      <ListInfoSection data={benefits} />
      <ParagraphInfoSection data={nriSection} />
    </main>
  );
}

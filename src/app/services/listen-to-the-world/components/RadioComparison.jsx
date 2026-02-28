import Image from "next/image";
import comparisonImage from "../../../../../public/comparison.png";
export default function RadioComparison({ heading }) {
  return (
    <section>
      <h2 className="text-4xl text-center font-black p-2">{heading}</h2>
      <div className="flex max-w-5xl mx-auto justify-center text-center p-6 px-4">
        <Image
          loading="eager"
          className="max-w-2xl "
          src={comparisonImage}
          alt="comparison"
        />
      </div>
    </section>
  );
}

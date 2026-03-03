import React from "react";
import { InfiniteMovingCardsUsage } from "../../components/InfiniteMovingCardsUsage";

export default function Reviews({ heading, subTitle, testimonials }) {
  return (
    <section className="mt-15">
      <div className="max-w-6xl mt-0 mx-auto">
        <h2 className="text-4xl text-center text-amber-50 mb-3 font-black">
          {heading}
        </h2>
        <h3 className="text-2xl text-center text-amber-50/50 ">{subTitle}</h3>
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, blur, black 20%, black 80%, blur)",
            WebkitMaskImage:
              "linear-gradient(to right, blur, black 20%, black 80%, blur)",
          }}
        >
          <InfiniteMovingCardsUsage testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

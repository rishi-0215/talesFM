import React from "react";
import { InfiniteMovingCardsUsage } from "../../components/InfiniteMovingCardsUsage";
import { testimonials } from "../../listen-to-the-world/constants";

export default function FeedbackSection() {
  return (
    <section className="mt-15">
      <div className="max-w-6xl mt-0 mx-auto">
        <h2 className="text-4xl text-center text-amber-50 mb-6 font-black">
          {" "}
          What our global users are saying{" "}
        </h2>
        <h3 className="text-2xl text-center text-amber-50/50 ">
          Loved by Radio Listeners Worldwide
        </h3>
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <InfiniteMovingCardsUsage testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

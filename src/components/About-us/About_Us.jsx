// app/about-us/About_Us.jsx or src/pages/About_Us.jsx
// Responsive Tailwind-friendly About Us page for TalesFM

import React from "react";

export default function About_Us() {
  return (
    <main className="min-h-screen bg-black mt-14 font-p text-white">
      <section
        className="
          w-full
          max-w-[73rem]
          mx-auto
          pt-16
          sm:pt-24
          md:pt-32
          px-4
          sm:px-8
          md:px-16
          pb-16
          sm:pb-20
        "
      >
        {/* Title */}
        <h1
          className="
            text-[2.2rem]
            sm:text-[2.8rem]
            md:text-[2.9rem]
            lg:text-[45px]
            font-semibold
            leading-tight
            mb-8
          "
        >
          About Us
        </h1>

        {/* Intro */}
        <p className="text-white/80 font-bold leading-relaxed text-[1.1rem] sm:text-[1.15rem] md:text-[20px]">
          Welcome to TalesFM– Your Global Gateway to Free Online Radio.
        </p>

        <p className="mt-6 text-white/80 leading-relaxed text-[1.1rem] sm:text-[1.15rem] md:text-[20px]">
          At TalesFM, we believe in making radio truly universal—free,
          accessible, and uninterrupted. Our mission is to connect the world
          through the timeless power of radio, offering listeners instant access
          to thousands of radio stations worldwide—all at zero cost and without
          a single ad break.
        </p>

        <p className="mt-6 text-white/80 leading-relaxed text-[1.1rem] sm:text-[1.15rem] md:text-[20px]">
          What started as a simple idea to stream radio online freely without
          limits has grown into a trusted platform used by music lovers, podcast
          fans, and global citizens across continents.
        </p>

        <p className="mt-6 text-white/80 leading-relaxed text-[1.1rem] sm:text-[1.15rem] md:text-[20px]">
          Whether you're tuning in for the latest chart-toppers, regional news,
          cultural programming, or relaxing background music, TalesFM offers a
          personalized and high-quality listening experience that travels with
          you.
        </p>

        {/* Vision */}
        <Section title="Our Vision">
          <p>
            To create the most trusted, easy-to-use, and ad-free online radio
            platform where users can explore, discover, and enjoy authentic
            broadcasts from every corner of the globe.
          </p>
        </Section>

        {/* Unique Points */}
        <Section title="What Makes TalesFM Unique?">
          <ul className="list-disc pl-5 sm:pl-6 mt-3 space-y-2">
            <li>
              <b>Truly Free, Forever:</b> No subscriptions, no hidden fees—just
              non-stop listening.
            </li>
            <li>
              <b>Global Reach:</b> Stream stations from your hometown or discover
              cultures from across the world.
            </li>
            <li>
              <b>Crystal-Clear Audio:</b> Professional-grade radio streaming
              quality anytime, anywhere.
            </li>
            <li>
              <b>Cross-Platform Compatibility:</b> Works seamlessly on mobile
              and desktop.
            </li>
            <li>
              <b>Zero Interruptions:</b> Say goodbye to ads. Enjoy your favourite
              music and talk shows without distractions.
            </li>
          </ul>
        </Section>

        {/* Built for Listeners */}
        <Section title="Built for Listeners Worldwide">
          <p>
            From students looking for study music, to travellers staying
            connected to home, to professionals who need productivity-friendly
            audio, TalesFM is built for everyone. Our radio categories include
            everything from live news and talk shows to international music
            channels, all available with a click.
          </p>
        </Section>

        {/* Why We Exist */}
        <Section title="Why We Exist">
          <p>
            We saw a gap in the market—too many "free" radio services loaded
            with interruptions, subscriptions, or limited access. So we built
            TalesFM with a single goal: to give everyone access to real radio
            without the barriers.
          </p>
          <p className="mt-3">
            Because we believe the joy of listening shouldn't come with a price
            tag.
          </p>
        </Section>

        {/* Join Community */}
        <Section title="Join the TalesFM Community">
          <p>
            Today, millions of users trust TalesFM to deliver the best in free
            internet radio—from local favorites to hidden global gems. We're
            constantly growing, improving, and expanding our catalogue to make
            sure your listening experience is nothing short of exceptional.
          </p>
          <p className="mt-3 font-medium text-white">
            Tune in. Discover more. Feel connected. With TalesFM, the world is
            always on air.
          </p>
        </Section>
      </section>
    </main>
  );
}

/* ---------- Small helper component ---------- */
function Section({ title, children }) {
  return (
    <section className="mt-8 sm:mt-10">
      <h2 className="font-semibold mb-3 text-[1.2rem] sm:text-[1.44rem] leading-tight">
        {title}
      </h2>
      <div className="space-y-3 text-white/80 leading-relaxed text-[1rem] sm:text-[1.25rem] md:text-[20px]">
        {children}
      </div>
    </section>
  );
}

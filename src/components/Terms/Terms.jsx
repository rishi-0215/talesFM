// src/components/Terms/Terms.jsx
// Responsive Tailwind-friendly Terms and Conditions page for TalesFM

import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black font-p text-white">
      <section
        className="
          w-full
          max-w-[73rem]
          mx-auto
          pt-24
          sm:pt-32
          md:pt-40
          px-4
          sm:px-8
          md:px-16
          lg:px-24
          pb-10
          sm:pb-16
          md:pb-20
        "
      >
        {/* Title */}
        <h1
          className="
            text-[2.2rem]
            sm:text-[2.8rem]
            md:text-[3.2rem]
            lg:text-[3.4rem]
            font-semibold
            leading-tight
            mb-8
            "
        >
          Terms &amp; Conditions
        </h1>

        {/* Intro */}
        <p className="text-white/80 font-bold leading-relaxed text-[1.1rem] sm:text-[1.25rem] md:text-[1.375rem]">
          Please read these Terms and Conditions ("Terms", "Terms and
          Conditions") carefully before using TalesFMRadio.com (the "Service")
          operated by TalesFM Media Group ("us", "we", or "our").
        </p>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using our Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, you may not
            access the Service.
          </p>
        </Section>

        <Section title="2. Use of Service">
          <ul className="list-disc pl-5 sm:pl-6 mt-3 space-y-2">
            <li>
              The Service is provided for your personal, non-commercial use
              only.
            </li>
            <li>
              You agree not to misuse the Service or assist anyone in doing so.
            </li>
            <li>You must be at least 13 years old to use the Service.</li>
          </ul>
        </Section>

        <Section title="3. Intellectual Property">
          <p>
            All content, features, and functionality on TalesFMRadio.com,
            including but not limited to text, graphics, logos, and software,
            are the exclusive property of TalesFM Media Group or its licensors.
            You may not reproduce, distribute, or create derivative works
            without our express written permission.
          </p>
        </Section>

        <Section title="4. User Content">
          <p>
            If you submit any content (such as feedback or suggestions), you
            grant us a non-exclusive, royalty-free, perpetual, and worldwide
            license to use, modify, and display such content.
          </p>
        </Section>

        <Section title="5. Third-Party Links">
          <p>
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by TalesFM Media Group. We assume
            no responsibility for the content, privacy policies, or practices of
            any third-party sites or services.
          </p>
        </Section>

        <Section title="6. Disclaimer of Warranties">
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We
            do not warrant that the Service will be uninterrupted, secure, or
            error-free.
          </p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            In no event shall TalesFM Media Group, nor its directors, employees,
            or partners, be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of your use of the
            Service.
          </p>
        </Section>

        <Section title="8. Changes to Terms">
          <p>
            We reserve the right to modify or replace these Terms at any time.
            Changes will be effective immediately upon posting. Your continued
            use of the Service after any changes constitutes acceptance of those
            changes.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of the United States and the State of New York, without regard
            to its conflict of law provisions.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:support@talesfm.com"
              className="underline text-white break-all"
            >
              support@talesfm.com
            </a>
            .
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
      <div className="space-y-3 text-white/80 leading-relaxed text-[1rem] sm:text-[1.25rem]">
        {children}
      </div>
    </section>
  );
}

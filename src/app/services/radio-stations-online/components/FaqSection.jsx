import React from "react";
import FAQ from "../../components/FAQSection";
export default function FaqSection({ faqData: faqData, heading }) {
  return (
    <section>
      <FAQ heading={heading} faqData={faqData} />
    </section>
  );
}

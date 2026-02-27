import React from "react";
import FAQ from "../../components/FAQSection";
export default function FaqSection({ faqData:faqData }) {
  return (
    <section>
      <FAQ faqData={faqData} />
    </section>
  );
}

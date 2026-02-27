import client from "../../tina/__generated__/client";

export const getFaqsContent = async () => {
  try {
    const res = await client.queries.page({
      relativePath: "faqs/faqs.mdx",
      draft: true,
    });

    const data = res?.data?.page || {};
    const block = data?.blocks?.find?.(
      (b) => b?._template === "faqs" || /Faqs$/i.test(b?.__typename || "")
    ) || {};

    return {
      buttonLabel: block?.buttonLabel || "FREQUENTLY ASKED QUESTIONS",
      items: Array.isArray(block?.items) ? block.items : [],
    };
  } catch (err) {
    console.error("Error loading FAQs content", err);
    return {
      buttonLabel: "FREQUENTLY ASKED QUESTIONS",
      items: [],
    };
  }
};


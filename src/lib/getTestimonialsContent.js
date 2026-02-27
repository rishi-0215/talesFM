import client from "../../tina/__generated__/client";

export const getTestimonialsContent = async () => {
  try {
    const res = await client.queries.page({
      relativePath: "testimonials/testimonials.mdx",
      draft: true,
    });

    const data = res?.data?.page || {};
    const block = data?.blocks?.find?.(
      (b) => b?._template === "testimonials" || /Testimonials$/i.test(b?.__typename || "")
    ) || {};

    return {
      title: block?.title || "What Our Global Users Are Saying",
      testimonials: Array.isArray(block?.testimonials) ? block.testimonials : [],
    };
  } catch (err) {
    console.error("Error loading Testimonials content", err);
    return {
      title: "What Our Global Users Are Saying",
      testimonials: [],
    };
  }
};


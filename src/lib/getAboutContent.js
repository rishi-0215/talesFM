import client from "../../tina/__generated__/client";

export const getAboutContent = async () => {
  try {
    const res = await client.queries.page({
      relativePath: "about/about.mdx",
      draft: true,
    });
    const data = res?.data?.page || {};
    const block =
      data?.blocks?.find?.(
        (b) => b?._template === "about" || /About$/i.test(b?.__typename || "")
      ) || {};

    return {
      sectionLabel: block?.sectionLabel || "ABOUT US",
      aboutText1:
        block?.aboutText1 ||
        "Experience the best internet radio FM free streaming platform.",
      aboutText2:
        block?.aboutText2 ||
        "Access thousands of radio stations online, live broadcasts, and music channels from around the globe through our FM radio player online - completely free.",
      whyTitle: block?.whyTitle || "Why Choose Us",
      whyItems: Array.isArray(block?.whyItems) ? block.whyItems : [],
    };
  } catch (err) {
    console.error("Error loading About content", err);
    return {
      sectionLabel: "ABOUT US",
      aboutText1: "Experience the best internet radio FM free streaming platform.",
      aboutText2:
        "Access thousands of radio stations online, live broadcasts, and music channels from around the globe through our FM radio player online - completely free.",
      whyTitle: "Why Choose Us",
      whyItems: [],
    };
  }
};


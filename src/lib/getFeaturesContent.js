import client from "../../tina/__generated__/client";

export const getFeaturesContent = async () => {
  try {
    const res = await client.queries.page({
      relativePath: "features/features.mdx",
      draft: true,
    });

    const data = res?.data?.page || {};
    const featuresBlock = data?.blocks?.find?.(
      (b) => b?._template === "features" || /Features$/i.test(b?.__typename || "")
    ) || {};

    return {
      sectionLabel: featuresBlock?.sectionLabel || "Features",
      heading: featuresBlock?.heading || "Your Favourite Radio, Anytime, Anywhere.",
      subheading:
        featuresBlock?.subheading ||
        "Experience free online radio like never before — no ads, no buffering, no limits. TalesFM makes tuning in easy, fast, and global.",
      cards: Array.isArray(featuresBlock?.cards) ? featuresBlock.cards : [],
    };
  } catch (err) {
    console.error("Error loading Features content", err);
    return {
      sectionLabel: "Features",
      heading: "Your Favourite Radio, Anytime, Anywhere.",
      subheading:
        "Experience free online radio like never before — no ads, no buffering, no limits. TalesFM makes tuning in easy, fast, and global.",
      cards: [],
    };
  }
};


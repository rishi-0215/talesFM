import client from "../../tina/__generated__/client";

export const getRadioContent = async () => {
  try {
    const res = await client.queries.page({
      relativePath: "radio/radio.mdx",
      draft: true,
    });
    const data = res?.data?.page || {};
    const block = data?.blocks?.find?.(
      (b) => b?._template === "radio" || /Radio$/i.test(b?.__typename || "")
    ) || {};

    return {
      heading: block?.heading || "Start Your – Radio Player\nOnline Experience Today",
      description:
        block?.description ||
        "Join millions using TalesFM for the ultimate free online radio experience. Our radio streaming service delivers authentic radio broadcasting, unlimited music streaming, free discovery, and premium audio streaming through our advanced broadcasting platform.",
      ctaLabel: block?.ctaLabel || "Get App",
    };
  } catch (err) {
    console.error("Error loading Radio content", err);
    return {
      heading: "Start Your – Radio Player\nOnline Experience Today",
      description:
        "Join millions using TalesFM for the ultimate free online radio experience. Our radio streaming service delivers authentic radio broadcasting, unlimited music streaming, free discovery, and premium audio streaming through our advanced broadcasting platform.",
      ctaLabel: "Get App",
    };
  }
};


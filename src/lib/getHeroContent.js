import client from "../../tina/__generated__/client";

export const getHeroContent = async () => {
  try {
    const res = await client.queries.page({
      relativePath: "hero/hero.mdx", // content/pages/hero/hero.mdx
      draft: true,
    });

    const data = res?.data?.page || res?.data?.home;

    const heroBlock =
      data?.blocks?.find?.(
        (b) => b?._template === "hero" || /Hero$/i.test(b?.__typename || "")
      ) || {};

    return {
      title: data?.title || "",
      hero: {
        title: heroBlock?.title || "",
        description: heroBlock?.description || "",
        download: {
          heading: heroBlock?.download?.heading || "",
          subheading: heroBlock?.download?.subheading || "",
          buttons: Array.isArray(heroBlock?.download?.buttons)
            ? heroBlock.download.buttons
            : [],
        },
      },
    };
  } catch (err) {
    console.error("Error loading Home content", err);
    return {
      title: "",
      hero: {
        title: "",
        description: "",
        download: { heading: "", subheading: "", buttons: [] },
      },
    };
  }
};

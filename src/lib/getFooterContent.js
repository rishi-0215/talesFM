import client from "../../tina/__generated__/client";

export const getFooterContent = async () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      brand: "TalesFM",
      description:
        "Experience the best free internet radio—stream live stations and music channels worldwide with our online radio player — no cost, no limits.",
      pagesLabel: "Pages",
      homeLabel: "Home",
      aboutLabel: "About Us",
      contactLabel: "Contact Us",
      privacyLabel: "Privacy Policy",
      termsLabel: "Terms of Service",
      copyright: "© 2025 TalesFM. All rights reserved",
    };
  }

  try {
    const res = await client.queries.page({
      relativePath: "footer/footer.mdx",
      draft: true,
    });
    const data = res?.data?.page || {};
    const block = data?.blocks?.find?.(
      (b) => b?._template === "footer" || /Footer$/i.test(b?.__typename || "")
    ) || {};

    return {
      brand: block?.brand || "TalesFM",
      description:
        block?.description ||
        "Experience the best free internet radio—stream live stations and music channels worldwide with our online radio player — no cost, no limits.",
      pagesLabel: block?.pagesLabel || "Pages",
      homeLabel: block?.homeLabel || "Home",
      aboutLabel: block?.aboutLabel || "About Us",
      contactLabel: block?.contactLabel || "Contact Us",
      privacyLabel: block?.privacyLabel || "Privacy Policy",
      termsLabel: block?.termsLabel || "Terms of Service",
      copyright: block?.copyright || "CC 2025 TalesFM. All rights reserved",
    };
  } catch (err) {
    console.error("Error loading Footer content", err);
    return {
      brand: "TalesFM",
      description:
        "Experience the best free internet radio—stream live stations and music channels worldwide with our online radio player — no cost, no limits.",
      pagesLabel: "Pages",
      homeLabel: "Home",
      aboutLabel: "About Us",
      contactLabel: "Contact Us",
      privacyLabel: "Privacy Policy",
      termsLabel: "Terms of Service",
      copyright: "© 2025 TalesFM. All rights reserved",
    };
  }
};


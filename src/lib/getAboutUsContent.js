import client from "../../tina/__generated__/client";

export const getAboutUsContent = async () => {
  try {
    const res = await client.queries.aboutus({
      relativePath: "about.mdx",
      draft: true,
    });
    const data = res?.data?.aboutus;
    if (!data) throw new Error("No about us data");

    return {
      title: data?.title || "About Us",
      effectiveDate: data?.effectiveDate || "",
      updatedDate: data?.updatedDate || "",
      intro: Array.isArray(data?.intro) ? data.intro : [],
      sections: Array.isArray(data?.sections) ? data.sections : [],
      contact: data?.contact || { email: "", phone: "", address: [] },
      closingTitle: data?.closingTitle || "",
      closing: Array.isArray(data?.closing) ? data.closing : [],
      body: data?.body || null,
    };
  } catch (err) {
    console.error("Error loading About Us content", err);
    return {
      title: "About Us",
      effectiveDate: "",
      updatedDate: "",
      intro: [],
      sections: [],
      contact: { email: "", phone: "", address: [] },
      closingTitle: "",
      closing: [],
      body: null,
    };
  }
};


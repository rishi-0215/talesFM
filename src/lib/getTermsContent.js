import client from "../../tina/__generated__/client";

export const getTermsContent = async () => {
  try {
    const res = await client.queries.terms({
      relativePath: "terms.mdx",
      draft: true,
    });
    const data = res?.data?.terms;
    if (!data) throw new Error("No terms data");

    return {
      title: data?.title || "Terms & Conditions",
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
    console.error("Error loading Terms content", err);
    return {
      title: "Terms & Conditions",
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


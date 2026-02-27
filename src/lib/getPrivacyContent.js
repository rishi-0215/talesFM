import client from "../../tina/__generated__/client";

export const getPrivacyContent = async () => {
  try {
    const res = await client.queries.privacy({
      relativePath: "policy.mdx",
      draft: true,
    });
    const data = res?.data?.privacy;
    if (!data) throw new Error("No privacy data");

    return {
      title: data?.title || "Privacy Policy",
      effectiveDate: data?.effectiveDate || "",
      updatedDate: data?.updatedDate || "",
      intro: Array.isArray(data?.intro) ? data.intro : [],
      sections: Array.isArray(data?.sections) ? data.sections : [],
      contact: data?.contact || { email: "", phone: "", address: [] },
      closingTitle: data?.closingTitle || "",
      closing: Array.isArray(data?.closing) ? data.closing : [],
    };
  } catch (err) {
    console.error("Error loading Privacy content", err);
    return {
      title: "Privacy Policy",
      effectiveDate: "",
      updatedDate: "",
      intro: [],
      sections: [],
      contact: { email: "", phone: "", address: [] },
      closingTitle: "",
      closing: [],
    };
  }
};


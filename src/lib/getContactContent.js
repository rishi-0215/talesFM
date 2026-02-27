import client from "../../tina/__generated__/client";

export const getContactContent = async () => {
  try {
    const res = await client.queries.contact({
      relativePath: "contact.mdx",
      draft: true,
    });
    const data = res?.data?.contact;
    if (!data) throw new Error("No contact data");

    return {
      title: data?.title || "Contact Us",
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
    console.error("Error loading Contact content", err);
    return {
      title: "Contact Us",
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


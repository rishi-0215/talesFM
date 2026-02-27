const privacy = {
  name: "privacy",
  label: "Privacy Policies",
  path: "content/privacy",
  format: "mdx",
  fields: [
    { type: "string", name: "title", label: "Page Title", isTitle: true, required: true },
    { type: "string", name: "effectiveDate", label: "Effective Date" },
    { type: "string", name: "updatedDate", label: "Last Updated" },
    { type: "string", name: "intro", label: "Intro Paragraphs", list: true, ui: { component: "textarea" } },
    {
      type: "object",
      name: "sections",
      label: "Sections",
      list: true,
      fields: [
        { type: "string", name: "title", label: "Section Title" },
        { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
        { type: "string", name: "bullets", label: "Bullet Points", list: true },
      ],
    },
    {
      type: "object",
      name: "contact",
      label: "Contact Info",
      fields: [
        { type: "string", name: "email", label: "Email" },
        { type: "string", name: "phone", label: "Phone" },
        { type: "string", name: "address", label: "Address Lines", list: true },
      ],
    },
    { type: "string", name: "closingTitle", label: "Closing Title" },
    { type: "string", name: "closing", label: "Closing Paragraphs", list: true, ui: { component: "textarea" } },
  ],
};

export default privacy;


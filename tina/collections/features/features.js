const features = {
  name: "features",
  label: "Features Section",
  fields: [
    { type: "string", name: "sectionLabel", label: "Section Label" },
    { type: "string", name: "heading", label: "Heading" },
    { type: "string", name: "subheading", label: "Subheading", ui: { component: "textarea" } },
    {
      type: "object",
      name: "cards",
      label: "Feature Cards",
      list: true,
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
      ],
    },
  ],
};

export default features;


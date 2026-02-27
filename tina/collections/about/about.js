const about = {
  name: "about",
  label: "About Us Section",
  fields: [
    { type: "string", name: "sectionLabel", label: "Section Label" },
    { type: "string", name: "aboutText1", label: "Top Heading", ui: { component: "textarea" } },
    { type: "string", name: "aboutText2", label: "Second Heading", ui: { component: "textarea" } },
    { type: "string", name: "whyTitle", label: "Why Choose Us Title" },
    {
      type: "string",
      name: "whyItems",
      label: "Why Choose Us Items",
      list: true,
      ui: { component: "textarea" },
    },
  ],
};

export default about;


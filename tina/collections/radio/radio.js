const radio = {
  name: "radio",
  label: "Radio Player Section",
  fields: [
    { type: "string", name: "heading", label: "Heading", ui: { component: "textarea" } },
    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
    { type: "string", name: "ctaLabel", label: "CTA Label" },
  ],
};

export default radio;


const testimonials = {
  name: "testimonials",
  label: "Testimonials Section",
  fields: [
    { type: "string", name: "title", label: "Title" },
    {
      type: "object",
      name: "testimonials",
      label: "Testimonials",
      list: true,
      fields: [
        { type: "string", name: "name", label: "Name" },
        { type: "string", name: "place", label: "Place" },
        { type: "string", name: "title", label: "Card Title" },
        { type: "string", name: "para", label: "Quote", ui: { component: "textarea" } },
      ],
    },
  ],
};

export default testimonials;


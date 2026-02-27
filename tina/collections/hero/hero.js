// tina/collections/hero/heroBlock.js
const hero = {
  name: "hero",
  label: "Hero Section",
  fields: [
    { type: "string", name: "title", label: "Title" },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: { component: "textarea" },
    },
    {
      type: "object",
      name: "download",
      label: "Download Section",
      fields: [
        { type: "string", name: "heading", label: "Heading" },
        { type: "string", name: "subheading", label: "Subheading" },
        {
          type: "object",
          list: true,
          name: "buttons",
          label: "Buttons",
          fields: [
            { type: "string", name: "label", label: "Label" },
            { type: "string", name: "text", label: "Text" },
          ],
        },
      ],
    },
  ],
};

export default hero;

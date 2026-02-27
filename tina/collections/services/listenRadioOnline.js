
const listenRadioOnline = {
  name: "listenRadioOnline",
  label: "Listen Radio Online",
  path: "content/services",
  format: "mdx",
  match: {
    include: "listen-radio-online",
  },
  fields: [
    // =========================
    // Section Content Blocks
    // =========================
    {
      type: "object",
      name: "indianRadioData",
      label: "Indian Radio Hero Section",
      fields: sectionContentFields(),
    },
    {
      type: "object",
      name: "whyStillRadio",
      label: "Why Still Radio Section",
      fields: sectionContentFields(),
    },
    {
      type: "object",
      name: "radioStationsInIndia",
      label: "FM Stations Section",
      fields: sectionContentFields(),
    },

    // =========================
    // List Sections
    // =========================
    {
      type: "object",
      name: "simpleSteps",
      label: "Simple Steps",
      fields: listSectionFields(),
    },
    {
      type: "object",
      name: "benefits",
      label: "Benefits",
      fields: listSectionFields(),
    },

    // =========================
    // Paragraph Section
    // =========================
    {
      type: "object",
      name: "nriSection",
      label: "NRI Section",
      fields: [
        { type: "string", name: "heading", label: "Heading" },
        {
          type: "string",
          name: "paragraphs",
          label: "Paragraphs",
          list: true,
        },
      ],
    },

    // =========================
    // FAQ
    // =========================
    {
      type: "object",
      name: "faq",
      label: "FAQ",
      list: true,
      fields: [
        { type: "string", name: "question", label: "Question" },
        { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
      ],
    },

    // =========================
    // Stations
    // =========================
    {
      type: "object",
      name: "stations",
      label: "Stations",
      list: true,
      fields: [
        { type: "string", name: "name", label: "Name" },
        { type: "string", name: "frequency", label: "Frequency" },
        { type: "string", name: "genre", label: "Genre" },
        { type: "string", name: "languages", label: "Languages" },
        { type: "string", name: "country", label: "Country" },
      ],
    },

    // =========================
    // Languages
    // =========================
    {
      type: "object",
      name: "languages",
      label: "Language Stations",
      list: true,
      fields: [
        { type: "string", name: "language", label: "Language" },
        {
          type: "string",
          name: "stations",
          label: "Stations",
          list: true,
        },
      ],
    },

    // =========================
    // Cities
    // =========================
    {
      type: "object",
      name: "cities",
      label: "City Stations",
      list: true,
      fields: [
        { type: "string", name: "city", label: "City" },
        {
          type: "string",
          name: "stations",
          label: "Stations",
          list: true,
        },
      ],
    },
  ],
};

export default listenRadioOnline;

// =========================
// Reusable Field Generators
// =========================

function sectionContentFields() {
  return [
    {
      type: "object",
      name: "title",
      label: "Title",
      fields: [
        { type: "string", name: "text", label: "Text" },
        {
          type: "string",
          name: "size",
          label: "Size",
          options: ["xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
        },
        {
          type: "string",
          name: "weight",
          label: "Weight",
          options: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
          ],
        },
      ],
    },
    { type: "string", name: "subtitle", label: "Subtitle" },
    {
      type: "string",
      name: "paragraphs",
      label: "Paragraphs",
      list: true,
      ui: { component: "textarea" },
    },
  ];
}

function listSectionFields() {
  return [
    { type: "string", name: "heading", label: "Heading" },
    { type: "string", name: "description", label: "Description" },
    {
      type: "string",
      name: "items",
      label: "Items",
      list: true,
    },
  ];
}

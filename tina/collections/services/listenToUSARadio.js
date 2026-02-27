const listenToUSARadio = {
  name: "listenToUSARadio",
  label: "Listen To USA Radio",
  path: "content/services",
  format: "mdx",
  match: {
    include: "listen-to-usa-radio",
  },
  fields: [
    // =========================
    // Hero Section
    // =========================
    {
      type: "object",
      name: "heroData",
      label: "Hero Section",
      fields: [
        { type: "string", name: "heading", label: "Heading" },
        {
          type: "string",
          name: "description",
          label: "Description Paragraphs",
          list: true,
          ui: { component: "textarea" },
        },
        { type: "string", name: "subCTA", label: "Sub CTA" },
        { type: "string", name: "buttonText", label: "Button Text" },
      ],
    },

    // =========================
    // Why American Radio
    // =========================
    {
      type: "object",
      name: "whyAmericanRadioData",
      label: "Why American Radio Section",
      fields: [
        { type: "string", name: "heading", label: "Heading" },
        { type: "string", name: "introduction", label: "Introduction" },
        { type: "string", name: "subIntro", label: "Sub Introduction" },
        {
          type: "object",
          name: "reasons",
          label: "Reasons",
          list: true,
          fields: [
            { type: "string", name: "title", label: "Title" },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: { component: "textarea" },
            },
          ],
        },
        {
          type: "string",
          name: "conclusion",
          label: "Conclusion",
          ui: { component: "textarea" },
        },
      ],
    },

    // =========================
    // Explore Section
    // =========================
    {
      type: "object",
      name: "exploreSectionData",
      label: "Explore Section",
      fields: [
        { type: "string", name: "heading", label: "Heading" },
        {
          type: "string",
          name: "paragraphs",
          label: "Paragraphs",
          list: true,
          ui: { component: "textarea" },
        },
        {
          type: "string",
          name: "highlightText",
          label: "Highlight Text",
        },
      ],
    },

    // =========================
    // Genres
    // =========================
    {
      type: "object",
      name: "genres",
      label: "Genres",
      list: true,
      fields: [
        { type: "number", name: "id", label: "ID" },
        { type: "string", name: "label", label: "Label" },
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "icon", label: "Icon Name" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
        {
          type: "object",
          name: "stations",
          label: "Stations",
          list: true,
          fields: [
            { type: "string", name: "name", label: "Station Name" },
          ],
        },
      ],
    },

    // =========================
    // Most Listened Stations
    // =========================
    {
      type: "object",
      name: "stations",
      label: "Most Listened Stations",
      list: true,
      fields: [
        { type: "string", name: "name", label: "Station Name" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
      ],
    },

    // =========================
    // Cities
    // =========================
    {
      type: "object",
      name: "cities",
      label: "Cities",
      list: true,
      fields: [
        { type: "string", name: "name", label: "City Name" },
        {
          type: "string",
          name: "stations",
          label: "Stations",
          list: true,
        },
      ],
    },

    // =========================
    // How To Stream
    // =========================
    {
      type: "object",
      name: "howToStreamData",
      label: "How To Stream Section",
      fields: [
        { type: "string", name: "heading", label: "Heading" },
        {
          type: "string",
          name: "description",
          label: "Description",
          list: true,
          ui: { component: "textarea" },
        },
        { type: "string", name: "introText", label: "Intro Text" },
        {
          type: "object",
          name: "platforms",
          label: "Platforms",
          list: true,
          fields: [
            { type: "string", name: "title", label: "Platform Title" },
            {
              type: "string",
              name: "steps",
              label: "Steps",
              list: true,
            },
          ],
        },
      ],
    },

    // =========================
    // FAQ
    // =========================
    {
      type: "object",
      name: "faqData",
      label: "FAQ",
      list: true,
      fields: [
        { type: "string", name: "question", label: "Question" },
        {
          type: "string",
          name: "answer",
          label: "Answer",
          ui: { component: "textarea" },
        },
      ],
    },

    // =========================
    // Start Exploring
    // =========================
    {
      type: "object",
      name: "startExploringData",
      label: "Start Exploring Section",
      fields: [
        { type: "string", name: "heading", label: "Heading" },
        {
          type: "string",
          name: "description",
          label: "Description",
          list: true,
          ui: { component: "textarea" },
        },
        { type: "string", name: "buttonText", label: "Button Text" },
      ],
    },
  ],
};

export default listenToUSARadio;
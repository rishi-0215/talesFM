const radioStationsOnline = {
  name: "radioStationsOnline",
  label: "Radio Stations Online",
  path: "content/services",
  format: "mdx",
  match: {
    include: "radio-stations-online",
  },
  fields: [

    // HERO
    {
      type: "object",
      name: "hero",
      label: "Main Hero Section",
      fields: [
        { type: "string", name: "heading" },
        { type: "string", name: "subheading" },
        { type: "string", name: "tagline" },
        { type: "string", name: "description", ui: { component: "textarea" } },
        {
          type: "object",
          name: "ctaButtons",
          list: true,
          fields: [{ type: "string", name: "label" }],
        },
      ],
    },

    // LIVE RADIO
    {
      type: "object",
      name: "liveRadioStations",
      fields: [
        {
          type: "object",
          name: "title",
          fields: [
            { type: "string", name: "text" },
            { type: "string", name: "size" },
            { type: "string", name: "weight" },
          ],
        },
        {
          type: "string",
          name: "paragraphs",
          list: true,
          ui: { component: "textarea" },
        },
      ],
    },

    // MUSIC SECTION (FIXED)
    {
      type: "object",
      name: "musicFocusedSection",
      fields: [
        { type: "string", name: "title" },
        { type: "string", name: "text", ui: { component: "textarea" } }, // ✅ added
        { type: "string", name: "description", ui: { component: "textarea" } },
        {
          type: "object",
          name: "stations",
          list: true,
          fields: [{ type: "string", name: "name" }],
        },
      ],
    },

    // BROWSE SECTION (FIXED)
    {
      type: "object",
      name: "browseRadioStations",
      fields: [
        { type: "string", name: "title" },
        { type: "string", name: "description", ui: { component: "textarea" } },
        {
          type: "object",
          name: "stations",
          list: true,
          fields: [{ type: "string", name: "name" }],
        },
        { type: "string", name: "footer", ui: { component: "textarea" } }, // ✅ added
      ],
    },

    // HOW IT WORKS
    {
      type: "object",
      name: "howTalesFMWorks",
      fields: [
        { type: "string", name: "title" },
        { type: "string", name: "description", ui: { component: "textarea" } },
        { type: "string", name: "footer" },
        {
          type: "object",
          name: "stations",
          list: true,
          fields: [{ type: "string", name: "name" }],
        },
      ],
    },

    // POPULAR CATEGORIES (FIXED)
    {
      type: "object",
      name: "popularRadioCategories",
      fields: [
        { type: "string", name: "title" },
        { type: "string", name: "description", ui: { component: "textarea" } },
        {
          type: "object",
          name: "stations",
          list: true,
          fields: [{ type: "string", name: "name" }],
        },
        { type: "string", name: "footer", ui: { component: "textarea" } }, // ✅ added
      ],
    },

    // SMARTER WAY
    {
      type: "object",
      name: "smarterWay",
      fields: [
        {
          type: "object",
          name: "header",
          fields: [
            {
              type: "object",
              name: "title",
              fields: [
                { type: "string", name: "text" },
                { type: "string", name: "size" },
                { type: "string", name: "weight" },
              ],
            },
            {
              type: "string",
              name: "paragraphs",
              list: true,
              ui: { component: "textarea" },
            },
          ],
        },
        { type: "string", name: "text" },
        {
          type: "object",
          name: "providedValues",
          list: true,
          fields: [
            {
              type: "object",
              name: "title",
              fields: [
                { type: "string", name: "text" },
                { type: "string", name: "size" },
                { type: "string", name: "weight" },
              ],
            },
            {
              type: "string",
              name: "paragraphs",
              list: true,
              ui: { component: "textarea" },
            },
          ],
        },
      ],
    },

    // FAQ HEADING (FIXED)
    {
      type: "string",
      name: "faqSectionHeading",
    },

    // FAQ ITEMS
    {
      type: "object",
      name: "faq",
      list: true,
      fields: [
        { type: "string", name: "question" },
        { type: "string", name: "answer", ui: { component: "textarea" } },
      ],
    },

    // BOTTOM HERO
    {
      type: "object",
      name: "radioHero",
      fields: [
        { type: "string", name: "heading" },
        { type: "string", name: "subheading" },
        { type: "string", name: "description", ui: { component: "textarea" } },
        {
          type: "object",
          name: "button",
          fields: [
            { type: "string", name: "label" },
            { type: "string", name: "ariaLabel" },
          ],
        },
      ],
    },
  ],
};

export default radioStationsOnline;
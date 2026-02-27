const radioStationsOnline = {
  name: "radioStationsOnline",
  label: "Radio Stations Online",
  path: "content/services",
  format: "mdx",
  match: {
    include: "radio-stations-online",
  },
  fields: [
    // =========================
    // Main Hero Section
    // =========================
    {
      type: "object",
      name: "hero",
      label: "Main Hero Section",
      fields: [
        { type: "string", name: "heading", label: "Heading" },
        { type: "string", name: "subheading", label: "Subheading" },
        { type: "string", name: "tagline", label: "Tagline" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
        {
          type: "object",
          name: "ctaButtons",
          label: "CTA Buttons",
          list: true,
          fields: [
            { type: "string", name: "label", label: "Button Label" },
          ],
        },
      ],
    },

    // =========================
    // Live Radio Stations Section
    // =========================
    {
      type: "object",
      name: "liveRadioStations",
      label: "Live Radio Stations Section",
      fields: [
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
                "100","200","300","400","500","600","700","800","900",
              ],
            },
          ],
        },
        {
          type: "string",
          name: "paragraphs",
          label: "Paragraphs",
          list: true,
          ui: { component: "textarea" },
        },
      ],
    },

    // =========================
    // Music Focused Section
    // =========================
    {
      type: "object",
      name: "musicFocusedSection",
      label: "Music Focused Section",
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
    // Browse Radio Stations
    // =========================
    {
      type: "object",
      name: "browseRadioStations",
      label: "Browse Radio Stations Section",
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
          name: "stations",
          label: "Options",
          list: true,
          fields: [
            { type: "string", name: "name", label: "Option" },
          ],
        },
      ],
    },

    // =========================
    // How Tales FM Works
    // =========================
    {
      type: "object",
      name: "howTalesFMWorks",
      label: "How Tales FM Works",
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
          name: "stations",
          label: "Steps",
          list: true,
          fields: [
            { type: "string", name: "name", label: "Step" },
          ],
        },
      ],
    },

    // =========================
    // Popular Radio Categories
    // =========================
    {
      type: "object",
      name: "popularRadioCategories",
      label: "Popular Radio Categories",
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
          name: "stations",
          label: "Categories",
          list: true,
          fields: [
            { type: "string", name: "name", label: "Category Name" },
          ],
        },
      ],
    },

    // =========================
    // Smarter Way Section
    // =========================
    {
      type: "object",
      name: "smarterWay",
      label: "Why Tales FM Section",
      fields: [
        {
          type: "object",
          name: "header",
          label: "Header",
          fields: [
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
                    "100","200","300","400","500","600","700","800","900",
                  ],
                },
              ],
            },
            {
              type: "string",
              name: "paragraphs",
              label: "Paragraphs",
              list: true,
              ui: { component: "textarea" },
            },
          ],
        },
        {
          type: "object",
          name: "providedValues",
          label: "Provided Values",
          list: true,
          fields: [
            {
              type: "object",
              name: "title",
              label: "Value Title",
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
                    "100","200","300","400","500","600","700","800","900",
                  ],
                },
              ],
            },
            {
              type: "string",
              name: "paragraphs",
              label: "Paragraphs",
              list: true,
              ui: { component: "textarea" },
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
      name: "faq",
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
    // Bottom Hero
    // =========================
    {
      type: "object",
      name: "radioHero",
      label: "Bottom Hero Section",
      fields: [
        { type: "string", name: "heading", label: "Heading" },
        { type: "string", name: "subheading", label: "Subheading" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
        {
          type: "object",
          name: "button",
          label: "Button",
          fields: [
            { type: "string", name: "label", label: "Button Label" },
            { type: "string", name: "ariaLabel", label: "Aria Label" },
          ],
        },
      ],
    },
  ],
};

export default radioStationsOnline;
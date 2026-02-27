import hero from "../hero/heroBlock";

export default {
  name: "listenRadioOnline",
  label: "Service – Listen Radio Online",
  path: "content/services/listen-radio-online",
  format: "mdx",
  fields: [
    hero,

    {
      type: "object",
      name: "intro",
      fields: [
        {
          type: "string",
          name: "paragraphs",
          list: true,
          ui: { component: "textarea" },
        },
      ],
    },

    {
      type: "object",
      name: "platform",
      fields: [
        { type: "string", name: "title" },
        {
          type: "string",
          name: "description",
          ui: { component: "textarea" },
        },
        {
          type: "object",
          name: "features",
          list: true,
          fields: [
            { type: "string", name: "title" },
            {
              type: "string",
              name: "description",
              ui: { component: "textarea" },
            },
          ],
        },
      ],
    },

    {
      type: "object",
      name: "genres",
      fields: [
        { type: "string", name: "title" },
        {
          type: "string",
          name: "description",
          ui: { component: "textarea" },
        },
        { type: "string", name: "label" },
        { type: "string", name: "list", list: true },
        {
          type: "string",
          name: "closing",
          ui: { component: "textarea" },
        },
      ],
    },

    {
      type: "object",
      name: "steps",
      fields: [
        { type: "string", name: "title" },
        {
          type: "string",
          name: "description",
          ui: { component: "textarea" },
        },
        {
          type: "object",
          name: "website",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "list", list: true },
          ],
        },
        {
          type: "object",
          name: "mobile",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "list", list: true },
          ],
        },
        { type: "string", name: "footer" },
        {
          type: "object",
          name: "button",
          fields: [{ type: "string", name: "text" }],
        },
      ],
    },

    {
      type: "object",
      name: "benefits",
      fields: [
        { type: "string", name: "title" },
        {
          type: "string",
          name: "description",
          ui: { component: "textarea" },
        },
        { type: "string", name: "list", list: true },
        {
          type: "string",
          name: "closing",
          ui: { component: "textarea" },
        },
      ],
    },

    {
      type: "object",
      name: "faqs",
      fields: [
        { type: "string", name: "buttonLabel" },
        {
          type: "object",
          name: "items",
          list: true,
          fields: [
            { type: "string", name: "question" },
            {
              type: "string",
              name: "answer",
              ui: { component: "textarea" },
            },
          ],
        },
      ],
    },

    {
      type: "object",
      name: "finalCta",
      fields: [
        { type: "string", name: "title" },
        {
          type: "string",
          name: "description",
          ui: { component: "textarea" },
        },
        {
          type: "object",
          name: "button",
          fields: [{ type: "string", name: "text" }],
        },
      ],
    },
  ],
};

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
          options: ["xl","2xl","3xl","4xl","5xl","6xl"],
        },
        {
          type: "string",
          name: "weight",
          label: "Weight",
          options: ["100","200","300","400","500","600","700","800","900"],
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
  ];
}

const homePage = {
  name: "listenToTheWorld",
  label: "Listen To The World",
  path: "content/services",
  format: "mdx",
  match: {
    include: "listen-to-the-world",
  },
  fields: [

    // HERO CONTENT
    {
      type: "object",
      name: "heroSectionContent",
      label: "Hero Section Content",
      fields: sectionContentFields(),
    },

    // HERO FEATURES
    {
      type: "object",
      name: "heroSection",
      label: "Hero Features",
      fields: [
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "subTitle", label: "Sub Title" },
        {
          type: "string",
          name: "features",
          label: "Features",
          list: true,
        },
      ],
    },

    // FAQ
    {
      type: "string",
      name: "faqSectionHeading",
      label: "FAQ Section Heading",
    },
    {
      type: "object",
      name: "faqData",
      label: "FAQ Items",
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

    // TESTIMONIAL HEADINGS (separate)
    {
      type: "string",
      name: "testimonialsHeading",
      label: "Testimonials Heading",
    },
    {
      type: "string",
      name: "testimonialsSubTitle",
      label: "Testimonials Sub Title",
    },

    // TESTIMONIAL ITEMS
    {
      type: "object",
      name: "testimonials",
      label: "Testimonials",
      list: true,
      fields: [
        {
          type: "string",
          name: "quote",
          label: "Quote",
          ui: { component: "textarea" },
        },
        { type: "string", name: "name", label: "Name" },
        { type: "string", name: "title", label: "Title" },
      ],
    },

    // TALES FM DATA
    {
      type: "object",
      name: "talesFMData",
      label: "Tales FM Data",
      fields: [
        { type: "string", name: "heading", label: "Heading" },
        { type: "string", name: "tagline", label: "Tagline" },

        {
          type: "object",
          name: "description",
          label: "Description",
          fields: [
            { type: "string", name: "para1", ui: { component: "textarea" } },
            { type: "string", name: "para2", ui: { component: "textarea" } },
            { type: "string", name: "para3", ui: { component: "textarea" } },
            { type: "string", name: "para4", ui: { component: "textarea" } },
          ],
        },

        {
          type: "string",
          name: "targetAudience",
          label: "Target Audience",
          list: true,
        },

        { type: "string", name: "audienceNote", label: "Audience Note" },

        {
          type: "object",
          name: "valueProposition",
          label: "Value Propositions",
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
          type: "object",
          name: "contentTypes",
          label: "Content Types",
          list: true,
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "description", label: "Description" },
          ],
        },

        {
          type: "string",
          name: "closingStatement",
          label: "Closing Statement",
          ui: { component: "textarea" },
        },

        {
          type: "object",
          name: "sections",
          label: "Sections",
          list: true,
          fields: [
            { type: "string", name: "title", label: "Title" },
            { type: "string", name: "subtitle", label: "Subtitle" },
          ],
        },
      ],
    },

    // COMPARISON (single string)
    {
      type: "string",
      name: "comparisonSectionHeading",
      label: "Comparison Section Heading",
    },

    // FREE RADIO CTA
    {
      type: "object",
      name: "freeRadioData",
      label: "Free Radio CTA",
      fields: [
        { type: "string", name: "title", label: "Title" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
        { type: "string", name: "tagline", label: "Tagline" },
      ],
    },
  ],
};

export default homePage;
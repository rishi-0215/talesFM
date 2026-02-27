const robotsCollection = {
  name: "seo_config",
  label: "SEO Config",
  path: "content/seo",
  format: "mdx",
  match: {
    include: "robots",
  },
  fields: [
    {
      name: "content",
      label: "robots.txt Content",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
  ],
};
export default robotsCollection;

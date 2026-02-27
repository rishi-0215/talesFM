
const pages_metadataCollection = {
  name: "pages_metadata",
  label: "Page Metadata",
  path: "content/pages_metadata",
  format: "mdx",
  fields: [
    {
      name: "title",
      type: "string",
      label: "Meta Title",
      isTitle: true,
      required: true
    },
    {
      name: "description",
      type: "string",
      label: "Meta Description"
    }
  ]
};

export default pages_metadataCollection;


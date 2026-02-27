const faqs = {
  name: "faqs",
  label: "FAQs Section",
  fields: [
    { type: "string", name: "buttonLabel", label: "Button Label" },
    {
      type: "object",
      name: "items",
      label: "FAQ Items",
      list: true,
      fields: [
        { type: "string", name: "question", label: "Question" },
        { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
      ],
    },
  ],
};

export default faqs;


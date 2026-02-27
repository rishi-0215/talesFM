// export default {
//   label: "Blog",
//   name: "blog",
//   path: "content/content-pages/blog",
//   format: "mdx",
//   fields: [
//     {
//       type: "string",
//       name: "title",
//       label: "Title",
//       isTitle: true,
//       required: true,
//     },
//     {
//       type: "string",
//       name: "slug",
//       label: "Slug",
//       required: true,
//     },
//     {
//       type: "datetime",
//       name: "date",
//       label: "Publish Date",
//       required: true,
//     },
//     {
//       type: "string",
//       name: "readTime",
//       label: "Read Time",
//     },
//     {
//       type: "string",
//       name: "description",
//       label: "Short Description",
//       ui: { component: "textarea" },
//     },
//     {
//       type: "image",
//       name: "coverImage",
//       label: "Cover Image",
//     },
//     {
//       type: "string",
//       name: "canonicalUrl",
//       label: "Canonical URL",
//       description: "Optional. Set this if the content is also published elsewhere.",
//     },
//     {
//       type: "rich-text",
//       name: "body",
//       label: "Blog Content",
//       isBody: true,
//       templates: [
//         {
//           name: "BlogTable",
//           label: "Table",
//           fields: [
//             {
//               type: "string",
//               name: "caption",
//               label: "Table Caption (Optional)",
//               description: "Optional caption that appears above the table"
//             },
//             {
//               type: "string",
//               name: "headerBgColor",
//               label: "Header Background Color",
//               description: "CSS class for header background (e.g., bg-blue-600, bg-green-500)",
//               options: [
//                 { value: "bg-white/10", label: "Default (White/10)" },
//                 { value: "bg-blue-600", label: "Blue" },
//                 { value: "bg-green-600", label: "Green" },
//                 { value: "bg-purple-600", label: "Purple" },
//                 { value: "bg-red-600", label: "Red" },
//                 { value: "bg-yellow-600", label: "Yellow" },
//                 { value: "bg-indigo-600", label: "Indigo" },
//                 { value: "bg-pink-600", label: "Pink" },
//                 { value: "bg-gray-600", label: "Gray" }
//               ]
//             },
//             {
//               type: "boolean",
//               name: "striped",
//               label: "Striped Rows",
//               description: "Alternate row background colors for better readability"
//             },
//             {
//               type: "object",
//               name: "headers",
//               label: "Table Headers",
//               list: true,
//               ui: {
//                 itemProps: (item) => ({ label: item?.header || "Header" })
//               },
//               fields: [
//                 {
//                   type: "string",
//                   name: "header",
//                   label: "Header Text",
//                   required: true
//                 }
//               ]
//             },
//             {
//               type: "object",
//               name: "rows",
//               label: "Table Rows",
//               list: true,
//               ui: {
//                 itemProps: (item) => ({ label: `Row ${item?.cells?.[0] || ""}` })
//               },
//               fields: [
//                 {
//                   type: "object",
//                   name: "cells",
//                   label: "Row Cells",
//                   list: true,
//                   ui: {
//                     itemProps: (item) => ({ label: item?.cell || "Cell" })
//                   },
//                   fields: [
//                     {
//                       type: "string",
//                       name: "cell",
//                       label: "Cell Content",
//                       required: true,
//                       ui: { component: "textarea" }
//                     }
//                   ]
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//   ],
//   ui: {
//     filename: {
//       slugify: (values) => values?.title?.toLowerCase().replace(/\s+/g, "-"),
//     },
//   },
// };


 const blogCollection = {
  label: "Blog",
  name: "blog",
  path: "content/content-pages/blog",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Publish Date",
      required: true,
    },
    {
      type: "string",
      name: "readTime",
      label: "Read Time",
    },
    {
      type: "string",
      name: "description",
      label: "Short Description",
      ui: { component: "textarea" },
    },
    {
      type: "image",
      name: "coverImage",
      label: "Cover Image",
    },
    {
      type: "string",
      name: "canonicalUrl",
      label: "Canonical URL",
      description: "Optional. Set this if the content is also published elsewhere.",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Blog Content",
      isBody: true,
    },
  ],
  ui: {
    filename: {
      slugify: (values) =>
        values?.title?.toLowerCase().replace(/\s+/g, "-"),
    },
  },
};

export default blogCollection;
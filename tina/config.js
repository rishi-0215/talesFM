import { defineConfig } from "tinacms";

// Collections
import heroBlock from "./collections/hero/hero";
import featuresBlock from "./collections/features/features";
import testimonialsBlock from "./collections/testimonials/testimonials";
import faqsBlock from "./collections/faqs/faqs";
import aboutBlock from "./collections/about/about";
import radioBlock from "./collections/radio/radio";
import footerBlock from "./collections/footer/footer";
import pages_metadataCollection from "./collections/pages_metadata/pages_metadata";
import privacy from "./collections/privacy/privacy";
import contact from "./collections/contact/contact";
import terms from "./collections/terms/terms";
import aboutus_page from "./collections/aboutUs_page/aboutus_page";
import robotsCollection from "./collections/robots/robots";
import blog from "./collections/blog/blog";
import listenRadioOnline from "./collections/services/listenRadioOnline";
import ListenToTheWorld from "./collections/services/ListenToTheWorld";


// Pull env variables
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const token = process.env.NEXT_PUBLIC_TINA_TOKEN;
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

// ⚠️ Fail if required vars missing (prevents silent misconfig in prod)
if (!clientId || !token || !branch) {
  throw new Error(`
TinaCMS environment variables are missing!

NEXT_PUBLIC_TINA_CLIENT_ID=${clientId}
NEXT_PUBLIC_TINA_TOKEN=${token}
NEXT_PUBLIC_BRANCH=${branch}
`);
}

export default defineConfig({
  branch,
  clientId,
  token,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "blocks",
            label: "Blocks",
            list: true,
            templates: [
              heroBlock,
              featuresBlock,
              testimonialsBlock,
              faqsBlock,
              aboutBlock,
              radioBlock,
              footerBlock,
            ],
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      listenRadioOnline,
      ListenToTheWorld,
      privacy,
      aboutus_page,
      contact,
      terms,
      pages_metadataCollection,
      robotsCollection,
      blog,
    ],
  },
});

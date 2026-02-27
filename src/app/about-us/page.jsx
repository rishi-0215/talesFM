import SmoothScrollProvider from "@/components/SmoothScroll/SmoothScrollProvider";
import DynamicContent from "@/components/DynamicContent/DynamicContent";
import { getAboutUsContent } from "@/lib/getAboutUsContent";
import ClientPageTimer from "@/components/ClientPageTimer";
import { loadPageMetadata } from "@/lib/metadata";

// Dynamically load metadata
export async function generateMetadata() {
  return loadPageMetadata("about-us");
}

export default async function Page() {
  const aboutContent = await getAboutUsContent();

  return (
    <ClientPageTimer eventName="About Page Time" params={{ page: "/about-us" }}>
      <AboutClient content={aboutContent} />
    </ClientPageTimer>
  );
}

function AboutClient({ content }) {
  "use client";
  return (
    <SmoothScrollProvider>
      <DynamicContent content={content} />
    </SmoothScrollProvider>
  );
}

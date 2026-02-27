import SmoothScrollProvider from "../../components/SmoothScroll/SmoothScrollProvider";
import DynamicContent from "../../components/DynamicContent/DynamicContent";
import { getPrivacyContent } from "@/lib/getPrivacyContent";
import ClientPageTimer from "@/components/ClientPageTimer";

import { loadPageMetadata } from "@/lib/metadata";
export async function generateMetadata() {
  return loadPageMetadata("privacy-policy");
}

export default async function Page() {
  const privacyContent = await getPrivacyContent();
  return (
    <ClientPageTimer eventName="Privacy Page Time" params={{ page: "/privacy-policy" }}>
      <PrivacyClient content={privacyContent} />
    </ClientPageTimer>
  );
}

function PrivacyClient({ content }) {
  "use client";
  return (
    <SmoothScrollProvider>
      <DynamicContent content={content} />
    </SmoothScrollProvider>
  );
}

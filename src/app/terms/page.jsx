import SmoothScrollProvider from "../../components/SmoothScroll/SmoothScrollProvider";
import DynamicContent from "../../components/DynamicContent/DynamicContent";
import { getTermsContent } from "@/lib/getTermsContent";
import ClientPageTimer from "@/components/ClientPageTimer";
import { loadPageMetadata } from "@/lib/metadata";
export async function generateMetadata() {
  return loadPageMetadata("terms");
}

export default async function Page() {
  const termsContent = await getTermsContent();
  return (
    <ClientPageTimer eventName="Terms Page Time" params={{ page: "/terms" }}>
      <TermsClient content={termsContent} />
    </ClientPageTimer>
  );
}

function TermsClient({ content }) {
  "use client";
  return (
    <SmoothScrollProvider>
      <DynamicContent content={content} />
    </SmoothScrollProvider>
  );
}

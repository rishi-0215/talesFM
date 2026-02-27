import SmoothScrollProvider from "../../components/SmoothScroll/SmoothScrollProvider";
import Contact_Us from "../../components/Contact_us/Contact_us";
import { getContactContent } from "@/lib/getContactContent";
import ClientPageTimer from "@/components/ClientPageTimer";
import { loadPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return loadPageMetadata("contact-us");
}

export default async function Page() {
  const contactContent = await getContactContent();
  return (
    <ClientPageTimer eventName="Contact Page Time" params={{ page: "/contact-us" }}>
      <ContactClient content={contactContent} />
    </ClientPageTimer>
  );
}

function ContactClient({ content }) {
  "use client";
  return (
    <SmoothScrollProvider>
      <Contact_Us content={content} />
    </SmoothScrollProvider>
  );
}

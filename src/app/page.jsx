// app/page.jsx

import SmoothScrollProvider from "@/components/SmoothScroll/SmoothScrollProvider";
import AboutUs from "@/components/AboutUs/AboutUs";
import Features from "@/components/features/features";
import Testimonials from "@/components/testimonials/testimonials";
import Faqs from "@/components/faqs/faqs";
import RadioPlayerCard from "@/components/radioPlayer/radio_player_card";
import Home from "@/components/home/home";
import { getHeroContent } from "@/lib/getHeroContent"; // <-- FIX: correct path
import { getFeaturesContent } from "@/lib/getFeaturesContent";
import { getTestimonialsContent } from "@/lib/getTestimonialsContent";
import { getFaqsContent } from "@/lib/getFaqsContent";
import { getAboutContent } from "@/lib/getAboutContent";
import { getRadioContent } from "@/lib/getRadioContent";
import ClientPageTimer from "@/components/ClientPageTimer";
import { loadPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
export async function generateMetadata() {
  return loadPageMetadata("home");
}
export default async function Page() {
  // Client-only hook: wrap rendering in a client boundary
  // We will render a client component for timing below
  const [{ hero }, features, testimonials, faqs, about, radio] = await Promise.all([
    getHeroContent(),
    getFeaturesContent(),
    getTestimonialsContent(),
    getFaqsContent(),
    getAboutContent(),
    getRadioContent(),
  ]);
  return (
    <ClientPageTimer eventName="Home Page Time" params={{ page: "/" }}>
      <PageClient hero={hero} features={features} testimonials={testimonials} faqs={faqs} about={about} radio={radio} />
    </ClientPageTimer>
  );
}

function PageClient({ hero, features, testimonials, faqs, about, radio }) {
  "use client";
  return (
    <SmoothScrollProvider>
      <section id="home"><Home hero={hero} /></section>
      <section id="about"><AboutUs about={about} /></section>
      <section id="features"><Features features={features} /></section>
      <section id="testimonials"><Testimonials testimonials={testimonials} /></section>
      <section id="faqs"><Faqs faqs={faqs} /></section>
      <section><RadioPlayerCard radio={radio} /></section>
    </SmoothScrollProvider>
  );
}

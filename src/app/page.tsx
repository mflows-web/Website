import type { Metadata } from "next";
import VideoGrid from "@/components/VideoGrid";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import Setlist from "@/components/Setlist";
import IntroMobile from "@/components/IntroMobile";

// Enhanced metadata for the home page
export const metadata: Metadata = {
  title: "The Mersey Flows | Britpop 90s Band for Hire in Runcorn, Cheshire",
  description: "Book The Mersey Flows — a Britpop 90s live band from Runcorn, Cheshire. Available for weddings, corporate events, and parties. Oasis, Blur, Pulp, Ocean Colour Scene and more.",
  keywords: [
    "britpop band", "90s band", "cover band", "live band", "band for hire",
    "Runcorn", "Cheshire", "Merseyside", "Liverpool", "North West England",
    "wedding band", "corporate event band", "party band", "function band",
    "britpop", "90s music", "Oasis tribute", "Blur tribute", "Pulp tribute",
    "live music", "entertainment", "book band", "hire band", "event music"
  ],
  openGraph: {
    title: "The Mersey Flows | Britpop 90s Band for Hire",
    description: "A Britpop 90s live band from Runcorn, Cheshire. Available for weddings, corporate events, and parties.",
    url: "https://merseyflowsband.com/",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "The Mersey Flows - Britpop 90s Band",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mersey Flows | Britpop 90s Band for Hire",
    description: "Britpop 90s live band from Runcorn, Cheshire. Available for weddings, events and parties.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 600,
        alt: "The Mersey Flows - Britpop 90s Band",
      }
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroMobile />
      <Setlist />
      <SectionDivider />
      <VideoGrid />
      <SectionDivider />
      <ContactSection />
    </main>
  );
}

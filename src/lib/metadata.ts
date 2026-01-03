import type { Metadata } from "next";

// Enhanced metadata for home page
export const homePageMetadata: Metadata = {
  title: {
    default: "The Mersey Flows | Britpop 90s Band for Hire in Runcorn, Cheshire",
    template: "%s | The Mersey Flows",
  },
  description: "Book The Mersey Flows — North-West England's premier Britpop 90s live band. Perfect for weddings, corporate events, and parties. Oasis, Blur, Pulp, Ocean Colour Scene and more.",
  keywords: [
    // Primary keywords
    "britpop band", "90s band", "cover band", "live band", "band for hire",
    // Location keywords  
    "Runcorn", "Cheshire", "Merseyside", "Liverpool", "North West England",
    // Event types
    "wedding band", "corporate event band", "party band", "function band",
    // Music genres
    "britpop", "90s music", "Oasis tribute", "Blur tribute", "Pulp tribute",
    // Services
    "live music", "entertainment", "book band", "hire band", "event music"
  ],
  authors: [{ name: "The Mersey Flows" }],
  creator: "The Mersey Flows",
  publisher: "The Mersey Flows",
  metadataBase: new URL("https://merseyflowsband.com"),
  alternates: { 
    canonical: "/",
    languages: {
      'en-GB': '/en-GB',
    },
  },
  openGraph: {
    title: "The Mersey Flows | Britpop 90s Band for Hire",
    description: "North-West England's premier Britpop 90s live band. Perfect for weddings, corporate events, and parties.",
    url: "https://merseyflowsband.com/",
    siteName: "The Mersey Flows",
    images: [
      {
        url: "https://merseyflowsband.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Mersey Flows - Britpop 90s Band",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mersey Flows | Britpop 90s Band",
    description: "North-West England's premier Britpop 90s live band. Book for weddings, events & parties.",
    images: ["https://merseyflowsband.com/twitter-image.jpg"],
    creator: "@TheMerseyFlows",
    site: "@TheMerseyFlows",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

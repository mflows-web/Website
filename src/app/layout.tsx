import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "The Mersey Flows",
  title: {
    default: "The Mersey Flows | Britpop 90s Band for Hire in Runcorn, Cheshire",
    template: "%s | The Mersey Flows",
  },
  description:
    "Book The Mersey Flows — a Britpop 90s live band from Runcorn, Cheshire. Available for weddings, corporate events, and parties. Playing Oasis, Blur, Pulp, Ocean Colour Scene and more.",
  keywords: [
    "britpop band", "90s band", "cover band", "live band", "band for hire",
    "Runcorn", "Cheshire", "Merseyside", "Liverpool", "North West England",
    "wedding band", "corporate event band", "party band", "function band",
    "britpop", "90s music", "Oasis tribute", "Blur tribute", "Pulp tribute",
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
  icons: {
    icon: [
      { url: "/icon-16.png?v=1", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png?v=1", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png?v=1", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=1", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/favicon.svg?v=3", color: "#00247d" }],
    shortcut: "/icon-32.png?v=1",
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
  openGraph: {
    title: "The Mersey Flows | Britpop 90s Band for Hire in Runcorn, Cheshire",
    description:
      "A Britpop 90s live band from Runcorn, Cheshire. Available for weddings, corporate events, and parties.",
    url: "/",
    siteName: "The Mersey Flows",
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
    description:
      "Britpop 90s live band from Runcorn, Cheshire. Available for weddings, events and parties.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 600,
        alt: "The Mersey Flows - Britpop 90s Band",
      }
    ],
    creator: "@TheMerseyFlows",
    site: "@TheMerseyFlows",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced JSON-LD structured data for a local music group
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "The Mersey Flows",
    alternateName: ["The Mersey Flows Band", "Mersey Flows Britpop Band"],
    url: "https://merseyflowsband.com",
    description: "A Britpop 90s live band from Runcorn, Cheshire. Available for weddings, corporate events, and parties.",
    genre: ["Britpop", "90s", "Rock", "Pop", "Cover Band"],
    musicGroupMember: [
      {
        "@type": "Person",
        name: "Band Members",
        jobTitle: "Musicians"
      }
    ],
    areaServed: [
      "Runcorn",
      "Cheshire", 
      "Merseyside",
      "Liverpool",
      "Warrington",
      "Chester",
      "Manchester",
      "North West England",
      "UK"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Runcorn",
      addressRegion: "Cheshire",
      addressCountry: "GB",
      postalCode: "WA7"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+447454713523",
      contactType: "booking",
      email: "themerseyflows@gmail.com",
      availableLanguage: ["English"]
    },
    sameAs: [
      "https://www.facebook.com/TheMerseyFlows/",
      "https://www.instagram.com/themerseyflowsband/",
      "https://www.youtube.com/@themerseyflows5485/videos"
    ],
    offers: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Live Britpop Band Performance",
        description: "2x45 minute sets of Britpop 90s classics with sound and lighting provided",
        serviceType: "Live Music Entertainment"
      },
      availability: "https://schema.org/InStock",
      priceRange: "££-£££",
      areaServed: "North West England and UK-wide"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Entertainment",
            description: "Britpop 90s music for wedding receptions and ceremonies"
          }
        },
        {
          "@type": "Offer", 
          itemOffered: {
            "@type": "Service",
            name: "Corporate Event Entertainment",
            description: "Live band for corporate events and company parties"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service", 
            name: "Private Party Entertainment",
            description: "Britpop band for private parties and celebrations"
          }
        }
      ]
    },
    knowsAbout: [
      "Britpop Music",
      "90s Music",
      "Live Performance",
      "Oasis",
      "Blur", 
      "Pulp",
      "Ocean Colour Scene",
      "Paul Weller",
      "Wedding Entertainment",
      "Event Music"
    ]
  } as const;
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${bebas.variable} antialiased bg-black text-zinc-50`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Subtle alternative accents: faint grain and soft vignette */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Subtle accent light blobs (reintroduced) */}
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="absolute -left-40 top-48 h-[42rem] w-[42rem] rounded-full bg-[#00247d] blur-[170px]" />
            <div className="absolute right-[-10rem] top-1/3 h-[50rem] w-[50rem] rounded-full bg-[#cf142b] blur-[190px]" />
          </div>
          {/* Grain texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 0.5px, transparent 0.5px), radial-gradient(#ffffff 0.5px, transparent 0.5px)",
              backgroundSize: "8px 8px, 8px 8px",
              backgroundPosition: "0 0, 4px 4px",
            }}
          />
          {/* Soft vignette */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0) 70%, rgba(0,0,0,0.22) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Main content */}
          <div className="flex-1">{children}</div>
          <ScrollToTop />
          {/* Footer */}
          <footer className="border-t border-zinc-200/60 py-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-center text-center">
              <p>© {new Date().getFullYear()} The Mersey Flows</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

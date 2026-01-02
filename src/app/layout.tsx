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
    "Book The Mersey Flows — a Britpop 90s live band from Runcorn, Cheshire (North‑West England). Oasis, Blur, Pulp, Ocean Colour Scene and more for weddings, corporate events, private parties and venues.",
  keywords: [
    "Runcorn band",
    "Cheshire live band",
    "North West England band",
    "Merseyside band",
    "wedding band",
    "corporate event band",
    "party band",
    "britpop band",
    "90s band",
    "Oasis",
    "Blur",
    "Pulp",
    "Ocean Colour Scene",
    "Shed Seven",
    "Paul Weller",
    "cover band",
    "live music Runcorn",
    "live music Cheshire",
    "band for hire",
    "book a band",
  ],
  metadataBase: new URL("https://merseyflowsband.com"),
  alternates: { canonical: "/" },
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
      "Book a Britpop 90s live band for weddings, corporate events and parties in Cheshire, Merseyside and the North‑West.",
    url: "/",
    siteName: "The Mersey Flows",
    images: [{ url: "/logo.png" }],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mersey Flows | Britpop 90s Band for Hire",
    description:
      "Britpop 90s live band from Runcorn, Cheshire — Oasis, Blur, Pulp and more for weddings, events and venues.",
    images: ["/logo.png"],
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
  // JSON-LD structured data for a local music group
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "The Mersey Flows",
    alternateName: ["The Mersey Flows Band"],
    genre: ["Britpop", "90s", "Rock", "Pop"],
    areaServed: [
      "Runcorn",
      "Cheshire",
      "North West England",
      "Merseyside",
      "Liverpool",
      "Warrington",
      "Chester",
      "UK",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Runcorn",
      addressRegion: "Cheshire",
      addressCountry: "GB",
    },
    email: "themerseyflows@gmail.com",
    telephone: "+44 7454 713523",
    sameAs: [
      "https://www.facebook.com/TheMerseyFlows/",
      "https://www.instagram.com/themerseyflowsband/",
    ],
    priceRange: "££",
    makesOffer: [
      {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: "Live Britpop Band for Events",
        },
      },
    ],
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

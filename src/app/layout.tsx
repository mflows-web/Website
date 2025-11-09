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
  title: "The Mersey Flows | 90s Britpop Band",
  description:
    "The Mersey Flows are a North-West England band playing 90s Britpop classics for weddings, events, and venues.",
  metadataBase: new URL("https://example.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "The Mersey Flows | 90s Britpop Band",
    description:
      "North-West England’s premier 90s Britpop band for weddings, corporate events, and venues.",
    url: "/",
    siteName: "The Mersey Flows",
    images: [{ url: "/logo.png" }],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mersey Flows | 90s Britpop Band",
    description:
      "North-West England’s premier 90s Britpop band for weddings, corporate events, and venues.",
    images: ["/logo.png"],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${bebas.variable} antialiased bg-white text-zinc-900 dark:bg-black dark:text-zinc-50`}
      >
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

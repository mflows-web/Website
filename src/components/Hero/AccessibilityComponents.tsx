import { HERO_CONFIG } from "@/constants/hero";

// Skip navigation link for accessibility
export const SkipLink = () => (
  <a 
    href="#main-content" 
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md font-medium z-50 transition-all"
  >
    Skip to main content
  </a>
);

// Structured data for hero section
export const HeroStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    name: "Hero Section",
    description: "The Mersey Flows - North-West England's premier 90s Britpop band",
    isPartOf: {
      "@type": "WebPage",
      name: "The Mersey Flows",
      url: "https://merseyflowsband.com"
    },
    mainEntity: {
      "@type": "MusicGroup",
      name: "The Mersey Flows",
      description: "North-West England's premier 90s Britpop band for weddings and events",
      genre: ["Britpop", "90s", "Rock", "Pop"],
      areaServed: {
        "@type": "Place",
        name: "North-West England"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// Enhanced accessibility wrapper
export const AccessibilityWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <SkipLink />
    <HeroStructuredData />
    {children}
  </>
);

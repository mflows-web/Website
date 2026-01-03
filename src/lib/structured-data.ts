// Enhanced JSON-LD structured data for better SEO

export const musicGroupStructuredData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "The Mersey Flows",
  alternateName: ["The Mersey Flows Band", "Mersey Flows Britpop Band"],
  url: "https://merseyflowsband.com",
  description: "North-West England's premier Britpop 90s live band for weddings, corporate events and parties",
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
};

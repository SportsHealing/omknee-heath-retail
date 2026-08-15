import { useEffect } from "react";

/**
 * OrganizationSchema - Adds JSON-LD structured data for the organization
 * Globally accessible with UK as primary market
 * Enhanced with international trust signals
 */
const OrganizationSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://omkneehealth.com/#organization",
      name: "OmKneeHealth",
      alternateName: "Om Knee Health",
      url: "https://omkneehealth.com",
      logo: {
        "@type": "ImageObject",
        url: "https://omkneehealth.com/og-image.png",
        width: 1200,
        height: 630,
      },
      description:
        "Clinician-founded knee health specialists. Evidence-informed knee joint supplements and free assessment tools designed by healthcare professionals for long-term joint health and mobility.",
      foundingDate: "2024",
      foundingLocation: {
        "@type": "Place",
        name: "United Kingdom",
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
        },
      },
      founders: [
        {
          "@type": "Person",
          name: "Chinmay Gupte",
          jobTitle: "Co-Founder & Orthopaedic Consultant",
        },
        {
          "@type": "Person",
          name: "Cynthia Gupte",
          jobTitle: "Co-Founder",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@omkneehealth.com",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: ["GB", "US", "CA", "AU", "NZ", "IE"],
      },
      areaServed: [
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "GeoShape",
          name: "Worldwide",
        },
      ],
      knowsAbout: [
        "Knee joint health",
        "Joint supplements",
        "Knee osteoarthritis support",
        "Collagen supplements",
        "Joint mobility",
        "Cartilage health",
        "Evidence-based joint care",
      ],
      slogan: "Holistic knee care, informed by evidence",
      brand: {
        "@type": "Brand",
        name: "OmKneeHealth",
        logo: "https://omkneehealth.com/og-image.png",
      },
      sameAs: [
        "https://www.sportshealing.com/",
        "https://www.chinmaygupte.com/",
        "https://mykneescore.com/",
      ],
    };

    let scriptElement = document.querySelector(
      'script[data-schema="organization"]'
    ) as HTMLScriptElement | null;

    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.type = "application/ld+json";
      scriptElement.setAttribute("data-schema", "organization");
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(schema);

    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);

  return null;
};

export default OrganizationSchema;

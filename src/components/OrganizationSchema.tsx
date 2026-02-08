import { useEffect } from "react";

/**
 * OrganizationSchema - Adds JSON-LD structured data for the organization
 * Enhanced with UK trust signals and health/wellness categorization
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
        "Clinician-founded UK knee health specialists. Evidence-informed knee joint supplements and free assessment tools designed by healthcare professionals for long-term joint health and mobility.",
      foundingDate: "2024",
      foundingLocation: {
        "@type": "Place",
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
        areaServed: "GB",
      },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      knowsAbout: [
        "Knee joint health",
        "Joint supplements",
        "Knee osteoarthritis support",
        "Collagen supplements",
        "Joint mobility",
        "Cartilage health",
      ],
      slogan: "Holistic knee care, personalised",
      sameAs: [],
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

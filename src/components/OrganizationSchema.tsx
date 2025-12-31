import { useEffect } from "react";

/**
 * OrganizationSchema - Adds JSON-LD structured data for the organization
 * Displays brand info in search results and knowledge panels
 */
const OrganizationSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "OmKneeHealth",
      url: "https://omkneehealth.com",
      logo: "https://omkneehealth.com/og-image.png",
      description:
        "Clinician-founded knee health support. Evidence-informed supplements and assessment tools designed by healthcare professionals for long-term joint health.",
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "Chinmay Gupte",
          jobTitle: "Co-Founder",
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
      },
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

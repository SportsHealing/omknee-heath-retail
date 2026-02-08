import { useEffect } from "react";

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage" | "CollectionPage";
  datePublished?: string;
  dateModified?: string;
}

/**
 * WebPageSchema - Adds JSON-LD structured data for web pages
 * Helps search engines understand page type and metadata
 */
const WebPageSchema = ({
  name,
  description,
  url,
  type = "WebPage",
  datePublished = "2024-01-01",
  dateModified,
}: WebPageSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": type,
      name,
      description,
      url,
      datePublished,
      dateModified: dateModified || new Date().toISOString().split("T")[0],
      publisher: {
        "@type": "Organization",
        name: "OmKneeHealth",
        url: "https://omkneehealth.com",
        logo: {
          "@type": "ImageObject",
          url: "https://omkneehealth.com/og-image.png",
        },
      },
      inLanguage: "en-GB",
      isPartOf: {
        "@type": "WebSite",
        name: "OmKneeHealth",
        url: "https://omkneehealth.com",
      },
    };

    let scriptElement = document.querySelector(
      'script[data-schema="webpage"]'
    ) as HTMLScriptElement | null;

    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.type = "application/ld+json";
      scriptElement.setAttribute("data-schema", "webpage");
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(schema);

    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [name, description, url, type, datePublished, dateModified]);

  return null;
};

export default WebPageSchema;

import { useEffect, type ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string | ReactNode;
  textAnswer?: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

/**
 * FAQSchema - Adds JSON-LD structured data for FAQ sections
 * Enables rich snippets with expandable Q&A in search results
 */
const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.textAnswer || (typeof faq.answer === "string" ? faq.answer : ""),
        },
      })),
    };

    let scriptElement = document.querySelector(
      'script[data-schema="faq"]'
    ) as HTMLScriptElement | null;

    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.type = "application/ld+json";
      scriptElement.setAttribute("data-schema", "faq");
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(schema);

    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [faqs]);

  return null;
};

export default FAQSchema;

import { useEffect } from "react";

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price: string;
  currency: string;
  sku: string;
  brand: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  url: string;
}

/**
 * ProductSchema - Adds JSON-LD structured data for product pages
 * Helps search engines display rich snippets in search results
 */
const ProductSchema = ({
  name,
  description,
  image,
  price,
  currency,
  sku,
  brand,
  availability = "InStock",
  url,
}: ProductSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      description,
      image,
      sku,
      brand: {
        "@type": "Brand",
        name: brand,
      },
      offers: {
        "@type": "Offer",
        url,
        priceCurrency: currency,
        price,
        availability: `https://schema.org/${availability}`,
        seller: {
          "@type": "Organization",
          name: brand,
        },
      },
      manufacturer: {
        "@type": "Organization",
        name: brand,
        url: "https://omkneehealth.com",
      },
    };

    // Check if script already exists
    let scriptElement = document.querySelector(
      'script[data-schema="product"]'
    ) as HTMLScriptElement | null;

    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.type = "application/ld+json";
      scriptElement.setAttribute("data-schema", "product");
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(schema);

    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [name, description, image, price, currency, sku, brand, availability, url]);

  return null;
};

export default ProductSchema;

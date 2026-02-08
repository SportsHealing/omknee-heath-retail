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
  weight?: string;
  category?: string;
  countryOfOrigin?: string;
}

/**
 * ProductSchema - Enhanced JSON-LD structured data for product pages
 * Optimized for UK supplement market with rich snippets support
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
  weight = "300g",
  category = "Health Supplements > Joint Supplements > Knee Supplements",
  countryOfOrigin = "GB",
}: ProductSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${url}#product`,
      name,
      description,
      image: [image],
      sku,
      mpn: sku,
      brand: {
        "@type": "Brand",
        name: brand,
      },
      category,
      weight: {
        "@type": "QuantitativeValue",
        value: weight.replace(/[^0-9]/g, ""),
        unitCode: "GRM",
      },
      countryOfOrigin: {
        "@type": "Country",
        name: countryOfOrigin === "GB" ? "United Kingdom" : countryOfOrigin,
      },
      offers: {
        "@type": "Offer",
        url,
        priceCurrency: currency,
        price,
        priceValidUntil: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ).toISOString().split("T")[0],
        availability: `https://schema.org/${availability}`,
        itemCondition: "https://schema.org/NewCondition",
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: "0",
            currency: "GBP",
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: "GB",
          },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
              "@type": "QuantitativeValue",
              minValue: 1,
              maxValue: 2,
              unitCode: "DAY",
            },
            transitTime: {
              "@type": "QuantitativeValue",
              minValue: 2,
              maxValue: 5,
              unitCode: "DAY",
            },
          },
        },
        seller: {
          "@type": "Organization",
          name: brand,
          url: "https://omkneehealth.com",
        },
      },
      manufacturer: {
        "@type": "Organization",
        name: brand,
        url: "https://omkneehealth.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "GB",
        },
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Manufacturing Standard",
          value: "UK GMP Certified",
        },
        {
          "@type": "PropertyValue",
          name: "Third-Party Tested",
          value: "Yes",
        },
        {
          "@type": "PropertyValue",
          name: "Supply Duration",
          value: "30 days",
        },
      ],
    };

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
  }, [name, description, image, price, currency, sku, brand, availability, url, weight, category, countryOfOrigin]);

  return null;
};

export default ProductSchema;

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  noIndex?: boolean;
  keywords?: string;
}

const SITE_NAME = "OmKneeHealth";
const BASE_URL = "https://omkneehealth.com";
const DEFAULT_OG_IMAGE = "/og-image.png";
const DEFAULT_KEYWORDS = "knee joint supplement, knee health, joint support supplement, collagen for knees, knee cartilage support, joint supplements, knee wellness";

/**
 * SEO Component - Manages document head for each page
 * Globally optimised with UK as primary market
 * Uses neutral international English with UK spelling conventions
 */
const SEO = ({
  title,
  description,
  canonicalPath = "",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  keywords = DEFAULT_KEYWORDS,
}: SEOProps) => {
  const fullTitle = title === SITE_NAME ? title : title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Helper to set or create meta tags
    const setMetaTag = (attribute: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to set or create link tags
    const setLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang 
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        if (hreflang) element.setAttribute("hreflang", hreflang);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Basic meta tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    if (noIndex) {
      setMetaTag("name", "robots", "noindex, nofollow");
    } else {
      setMetaTag("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    }

    // Geographic targeting - UK primary with global reach
    setMetaTag("name", "geo.region", "GB");
    setMetaTag("name", "geo.placename", "United Kingdom");
    setMetaTag("name", "language", "en-GB");
    setMetaTag("name", "content-language", "en-GB");

    // Open Graph tags - International with UK primary
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", ogImageUrl);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:locale", "en_GB");
    // Alternate locales for international reach
    setMetaTag("property", "og:locale:alternate", "en_US");

    // Twitter Card tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImageUrl);

    // Canonical URL
    setLinkTag("canonical", canonicalUrl);
    
    // Hreflang for international SEO - UK primary with global English fallback
    setLinkTag("alternate", canonicalUrl, "en-GB");
    setLinkTag("alternate", canonicalUrl, "en");
    setLinkTag("alternate", canonicalUrl, "x-default");

    // Cleanup function to reset title on unmount
    return () => {
      document.title = SITE_NAME;
    };
  }, [fullTitle, description, canonicalUrl, ogImageUrl, ogType, noIndex, keywords]);

  return null;
};

export default SEO;

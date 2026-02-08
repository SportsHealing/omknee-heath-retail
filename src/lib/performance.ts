/**
 * Performance utilities for Core Web Vitals optimisation
 * 
 * LCP (Largest Contentful Paint): Preload critical resources
 * FID (First Input Delay): Defer non-critical scripts
 * CLS (Cumulative Layout Shift): Reserve space for dynamic content
 */

/**
 * Preload critical images for LCP improvement
 * Call this in the main entry point for above-the-fold images
 */
export const preloadCriticalImages = (imagePaths: string[]) => {
  imagePaths.forEach((path) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = path;
    document.head.appendChild(link);
  });
};

/**
 * Preconnect to external origins for faster resource fetching
 * Call early for any third-party services
 */
export const preconnectToOrigins = (origins: string[]) => {
  origins.forEach((origin) => {
    // Preconnect
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = origin;
    preconnect.crossOrigin = "anonymous";
    document.head.appendChild(preconnect);
    
    // DNS prefetch as fallback
    const dnsPrefetch = document.createElement("link");
    dnsPrefetch.rel = "dns-prefetch";
    dnsPrefetch.href = origin;
    document.head.appendChild(dnsPrefetch);
  });
};

/**
 * Defer non-critical CSS loading
 * Use for below-the-fold stylesheets
 */
export const loadDeferredStyles = (stylesheetUrl: string) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = stylesheetUrl;
  link.media = "print";
  link.onload = () => {
    link.media = "all";
  };
  document.head.appendChild(link);
};

/**
 * Idle callback wrapper for non-critical operations
 * Helps with FID by deferring work to idle time
 */
export const runWhenIdle = (callback: () => void, timeout = 2000) => {
  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 100);
  }
};

/**
 * Calculate aspect ratio for CLS prevention
 * Returns a padding-bottom percentage for responsive images
 */
export const getAspectRatioPadding = (width: number, height: number): string => {
  return `${(height / width) * 100}%`;
};

/**
 * Intersection Observer hook config for lazy loading
 */
export const lazyLoadConfig = {
  rootMargin: "200px 0px",
  threshold: 0,
};

/**
 * Check if reduced motion is preferred
 * Important for accessibility and can improve performance
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Network Information API check for adaptive loading
 * Returns connection quality for conditional asset loading
 */
export const getConnectionQuality = (): "slow" | "medium" | "fast" => {
  if (typeof navigator === "undefined") return "fast";
  
  const connection = (navigator as any).connection || 
                     (navigator as any).mozConnection || 
                     (navigator as any).webkitConnection;
  
  if (!connection) return "fast";
  
  const effectiveType = connection.effectiveType;
  
  if (effectiveType === "slow-2g" || effectiveType === "2g") return "slow";
  if (effectiveType === "3g") return "medium";
  return "fast";
};
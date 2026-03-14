import { useEffect } from "react";
import { preconnectToOrigins, preloadCriticalImages } from "@/lib/performance";
import heroIngredients from "@/assets/hero-ingredients.jpg";

/**
 * PerformanceOptimizer - Initializes performance optimizations
 * 
 * Mount once in App.tsx for:
 * - Critical resource preloading (LCP)
 * - Origin preconnection
 * - Performance monitoring setup
 */
const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical above-the-fold images for LCP
    preloadCriticalImages([heroIngredients]);

    // Preconnect to external origins we'll use
    preconnectToOrigins([
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
    ]);

    // Report Web Vitals if available
    if ("web-vital" in window || import.meta.env.DEV) {
      // Log performance entries in development
      if (import.meta.env.DEV) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === "largest-contentful-paint") {
              console.log("[Performance] LCP:", entry.startTime.toFixed(0), "ms");
            }
            if (entry.entryType === "first-input") {
              console.log("[Performance] FID:", (entry as any).processingStart - entry.startTime, "ms");
            }
            if (entry.entryType === "layout-shift" && !(entry as any).hadRecentInput) {
              console.log("[Performance] CLS:", (entry as any).value.toFixed(4));
            }
          });
        });

        try {
          observer.observe({ entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"] });
        } catch (e) {
          // Some browsers don't support all entry types
        }
      }
    }
  }, []);

  return null;
};

export default PerformanceOptimizer;
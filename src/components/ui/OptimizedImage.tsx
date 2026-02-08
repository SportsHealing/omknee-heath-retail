import { useState, useEffect, useRef } from "react";

interface ImageSource {
  src: string;
  width: number;
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  /** Responsive image sources for srcset - array of {src, width} */
  sources?: ImageSource[];
  /** 
   * Sizes attribute for responsive images - tells browser what size image will be displayed at different viewports
   * Example: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
   */
  sizes?: string;
}

/**
 * OptimizedImage - Performance-optimised image component
 * 
 * Features:
 * - Lazy loading with IntersectionObserver
 * - Native loading="lazy" fallback
 * - Placeholder while loading (improves CLS)
 * - Decoding async for better LCP
 * - fetchpriority for above-the-fold images
 * - srcset and sizes support for responsive images
 */
const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  placeholder = "empty",
  sources,
  sizes,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before visible
        threshold: 0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Generate srcset string from sources array
  const srcSet = sources?.length 
    ? sources.map(s => `${s.src} ${s.width}w`).join(", ")
    : undefined;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder for CLS prevention */}
      {!isLoaded && placeholder === "blur" && (
        <div
          className="absolute inset-0 bg-muted animate-pulse"
          aria-hidden="true"
        />
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          srcSet={srcSet}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};

export default OptimizedImage;

/**
 * Common responsive sizes presets
 * Use these as the `sizes` prop value for common layouts
 */
export const responsiveSizes = {
  /** Full width on mobile, half on tablet, third on desktop */
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  /** Full width on mobile, half on larger screens */
  halfWidth: "(max-width: 768px) 100vw, 50vw",
  /** Full width always */
  fullWidth: "100vw",
  /** Hero image - full width but capped */
  hero: "(max-width: 1920px) 100vw, 1920px",
  /** Thumbnail - small fixed size */
  thumbnail: "150px",
  /** Product image - responsive grid */
  product: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px",
};
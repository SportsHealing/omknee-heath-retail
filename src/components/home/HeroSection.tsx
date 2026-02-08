/**
 * Hero Section - Clinical Authority Model
 * Establishes medical credibility within 5 seconds
 * 
 * Performance optimised for Core Web Vitals:
 * - LCP: Hero image preloaded via PerformanceOptimizer
 * - CLS: Fixed height container prevents layout shift
 * - FID: Minimal JS on initial render
 */

import { Button } from "@/components/ui/button";
import heroIngredients from "@/assets/hero-ingredients.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image with aspect ratio hint for CLS */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroIngredients})`,
          willChange: "transform", // GPU acceleration hint
        }}
        role="img"
        aria-label="Natural ingredients for knee health"
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background/95" />

      <div className="container relative z-10 px-6 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust signal */}
          <p className="animate-fade-up font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
            Clinician-Founded • Evidence-Informed
          </p>

          {/* Main headline - SEO optimised H1 */}
          <h1 className="animate-fade-up font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            The Knee Joint Supplement Designed for Lasting Health
          </h1>

          {/* Subheading with internal keywords */}
          <p className="animate-fade-up-delay-1 font-sans text-muted-foreground leading-relaxed max-w-xl mx-auto mb-4">
            A clinician-formulated approach to <strong>cartilage support</strong>, mobility, and long-term joint resilience — developed for every stage of life.
          </p>

          {/* Secondary benefit line */}
          <p className="animate-fade-up-delay-1 font-sans text-sm text-muted-foreground/80 max-w-lg mx-auto mb-12">
            Holistic knee health combining nutritional science with personalised assessment tools.
          </p>

          {/* CTAs with proper internal links */}
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-sm font-sans font-medium tracking-wide"
              asChild
            >
              <a href="/product" aria-label="View our knee joint supplement">
                View Our Supplement
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="px-8 py-6 text-sm font-sans font-medium tracking-wide border-foreground/20 hover:bg-foreground/5"
              asChild
            >
              <a href="/science" aria-label="Explore the science behind our formula">
                Explore the Science
              </a>
            </Button>
          </div>

          {/* Internal link anchor for SEO */}
          <p className="animate-fade-up-delay-2 mt-8 font-sans text-xs text-muted-foreground">
            <a 
              href="#faq" 
              className="hover:text-foreground transition-colors underline underline-offset-4"
              aria-label="Common questions about knee supplements"
            >
              Common questions about knee supplements
            </a>
          </p>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;

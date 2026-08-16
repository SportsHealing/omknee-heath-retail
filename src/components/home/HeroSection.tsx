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
import heroKneePassport from "@/assets/hero-knee-passport.jpg";

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
          backgroundImage: `url(${heroKneePassport})`,
          willChange: "transform", // GPU acceleration hint
        }}
        role="img"
        aria-label="Pencil sketch of the knee joint, front view flanked by two side views, from the OmKneeHealth Knee Passport"
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/95" />

      <div className="container relative z-10 px-6 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust signal */}
          <p className="animate-fade-up font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
            The Home of Knee Health & Wellness
          </p>

          {/* Main headline - SEO optimised H1 */}
          <h1 className="animate-fade-up font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            Your knees carry you through life.
          </h1>

          {/* Approved supporting lines */}
          <p className="animate-fade-up-delay-1 font-sans text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto mb-6">
            Understand them. Look after them. Keep moving.
          </p>

          <p className="animate-fade-up-delay-1 font-sans text-muted-foreground leading-relaxed max-w-xl mx-auto mb-3">
            Your knees are part of almost everything you do.
          </p>

          <p className="animate-fade-up-delay-1 font-sans text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
            OmKneeHealth brings together clear knee health information, practical tools and
            carefully selected products to help you make informed choices about looking after your
            knees throughout life.
          </p>

          {/* CTAs with proper internal links */}
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-sm font-sans font-medium tracking-wide"
              asChild
            >
              <a href="/knee-score" aria-label="Check your knee with the Knee Score">
                Check Your Knee
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="px-8 py-6 text-sm font-sans font-medium tracking-wide border-foreground/20 hover:bg-foreground/5"
              asChild
            >
              <a href="/knee-health" aria-label="Look after your knees">
                Look After Your Knees
              </a>
            </Button>
          </div>

          {/* Internal link anchor for SEO */}
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;

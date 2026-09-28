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
      className="relative min-h-[82vh] flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Soft cream base so the sketch never competes with the copy */}
      <div className="absolute inset-0 bg-secondary" aria-hidden="true" />

      {/* Background sketch — visible but not competing with the copy */}
      <div
        className="absolute inset-0 bg-contain md:bg-cover bg-center bg-no-repeat opacity-35 md:opacity-40"
        style={{
          backgroundImage: `url(${heroKneePassport})`,
          backgroundSize: "min(100%, 1400px) auto",
        }}
        role="img"
        aria-label="Pencil sketch of the knee joint, front view flanked by two side views, from the OmKneeHealth Knee Passport"
      />

      <div className="absolute inset-0 bg-secondary/60" aria-hidden="true" />

      <div className="container relative z-10 px-6 py-24 lg:py-32">
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            textShadow: "0 1px 2px rgba(247,244,236,0.85), 0 2px 12px rgba(247,244,236,0.7)",
          }}
        >
          {/* Trust signal */}
          <p className="animate-fade-up font-sans text-sm tracking-[0.2em] uppercase text-primary mb-6">
            The OmKnee Five
          </p>

          {/* Main headline - SEO optimised H1 */}
          <h1 className="animate-fade-up font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
            A clear path through knee health.
          </h1>

          {/* Approved supporting lines */}
          <p className="animate-fade-up-delay-1 font-sans text-xl md:text-2xl text-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Understand. Nourish. Load. Diagnose. Treat.
          </p>

          <p className="animate-fade-up-delay-1 font-sans text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto mb-3">
            Your knees are part of almost everything you do.
          </p>

          <p className="animate-fade-up-delay-1 font-sans text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto mb-12">
            OmKneeHealth brings education, practical tools and carefully selected products into one
            connected journey, helping you make informed choices throughout life.
          </p>

          {/* CTAs with proper internal links */}
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-base font-sans font-medium tracking-wide"
              asChild
            >
              <a href="/knee-score" aria-label="Check your knee with the Knee Score">
                Check Your Knee
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="px-8 py-6 text-base font-sans font-medium tracking-wide border-foreground/20 hover:bg-foreground/5"
              asChild
            >
              <a href="/knee-health" aria-label="Look after your knees">
                Explore the OmKnee Five
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

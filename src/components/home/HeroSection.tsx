/**
 * SHOPIFY SECTION: Hero Banner (Theme Section)
 * Location: Homepage - Above the fold
 * Type: Shopify Theme Section (image-with-text or custom hero)
 */

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-cream to-sage-light overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="animate-fade-up font-sans text-sm tracking-[0.2em] uppercase text-primary mb-6">
            Clinician-Led Knee & Joint Care
          </p>

          {/* Main headline */}
          <h1 className="animate-fade-up-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] mb-8">
            Support Your Knees,{" "}
            <span className="italic text-primary">Naturally</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Evidence-informed formulas developed by healthcare professionals. 
            Thoughtfully crafted to support joint comfort and everyday mobility.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-base font-sans font-medium tracking-wide"
            >
              Explore Our Approach
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-muted-foreground hover:text-foreground font-sans"
            >
              Meet the Team
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

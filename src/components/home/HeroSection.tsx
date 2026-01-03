/**
 * Hero Section - Clinical Authority Model
 * Establishes medical credibility within 5 seconds
 */

import { Button } from "@/components/ui/button";

import heroIngredients from "@/assets/hero-ingredients.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroIngredients})` }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background/95" />

      <div className="container relative z-10 px-6 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Single trust line */}
          <p className="animate-fade-up font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-12">
            Founded by clinicians. Informed by evidence.
          </p>

          {/* Main headline */}
          <h1 className="animate-fade-up-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-20">
            Knee Health, Considered.
          </h1>

          {/* Single soft CTA */}
          <div className="animate-fade-up-delay-2">
            <Button 
              variant="outline"
              size="lg" 
              className="px-12 py-6 text-sm font-sans font-medium tracking-wide border-foreground/20 hover:bg-foreground/5"
              asChild
            >
              <a href="/assessment">Explore</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

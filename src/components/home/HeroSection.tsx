/**
 * Hero Section - Clinical Authority Model
 * Establishes medical credibility within 5 seconds
 */

import { Button } from "@/components/ui/button";
import { Shield, Award } from "lucide-react";
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
          {/* Trust badges - restrained */}
          <div className="animate-fade-up flex flex-wrap justify-center gap-4 mb-12">
            <span className="trust-badge">
              <Shield className="w-3.5 h-3.5" />
              Clinician-Founded
            </span>
            <span className="trust-badge">
              <Award className="w-3.5 h-3.5" />
              Evidence-Based
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-16">
            Knee Health, Considered.
          </h1>

          {/* CTA buttons - simplified */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-10 py-6 text-sm font-sans font-medium tracking-wide"
              asChild
            >
              <a href="/assessment">Begin Assessment</a>
            </Button>
            <Button 
              variant="ghost"
              size="lg" 
              className="px-10 py-6 text-sm font-sans font-medium tracking-wide text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="#philosophy">Our Approach</a>
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

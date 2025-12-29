/**
 * Hero Section - Clinical Authority Model
 * Establishes medical credibility within 5 seconds
 */

import { Button } from "@/components/ui/button";
import { Shield, Award, Microscope } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-clinical-light overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />

      <div className="container relative z-10 px-6 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust badges - immediately establish authority */}
          <div className="animate-fade-up flex flex-wrap justify-center gap-3 mb-10">
            <span className="trust-badge">
              <Shield className="w-3.5 h-3.5" />
              Clinician-Founded
            </span>
            <span className="trust-badge">
              <Award className="w-3.5 h-3.5" />
              Evidence-Based
            </span>
            <span className="trust-badge">
              <Microscope className="w-3.5 h-3.5" />
              Research-Led
            </span>
          </div>

          {/* Main headline - authority positioning */}
          <h1 className="animate-fade-up-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] mb-6">
            The Knee Health Authority
          </h1>

          {/* Clinical divider */}
          <div className="animate-fade-up-delay-2 clinical-divider mb-6" />

          {/* Subheadline - calm, reassuring */}
          <p className="animate-fade-up-delay-2 font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Founded by healthcare professionals dedicated to joint longevity. 
            We combine clinical expertise with evidence-informed care to support 
            your knee health at every stage of life.
          </p>

          {/* Single, non-commercial CTA */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline"
              size="lg" 
              className="px-8 py-6 text-sm font-sans font-medium tracking-wide border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              asChild
            >
              <a href="#philosophy">Discover Our Approach</a>
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

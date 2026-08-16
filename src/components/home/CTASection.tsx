/**
 * CTA Section - Gentle, Restrained Close
 * Non-commercial, assessment-focused
 */

import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-40 lg:py-48 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
            Free UK Delivery
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
            When You're Ready
          </h2>
          <p className="font-sans text-muted-foreground mb-12 max-w-md mx-auto">
            Start with your Knee Score, or browse the shop when you are ready.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button 
              size="lg"
              className="px-10 py-6 text-sm font-sans font-medium tracking-wide"
              asChild
            >
              <a href="/knee-score">
                Get Your Knee Score
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-10 py-6 text-sm font-sans font-medium tracking-wide border-foreground/20"
              asChild
            >
              <a href="/shop">
                Browse the Shop
              </a>
            </Button>
          </div>

          <div className="mt-16">
            <a 
              href="mailto:hello@omkneehealth.com" 
              className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              hello@omkneehealth.com
            </a>
            <p className="font-sans text-xs text-muted-foreground mt-2">
              UK-based customer support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

/**
 * CTA Section - Gentle, Restrained Close
 * Non-commercial, assessment-focused
 */

import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-32 lg:py-40 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Ready to Begin?
          </h2>
          <p className="font-sans text-muted-foreground mb-12">
            Start with clarity. No commitment required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="px-12 py-6 text-sm font-sans font-medium tracking-wide"
              asChild
            >
              <a href="/assessment">
                Begin Assessment
              </a>
            </Button>
            <Button 
              variant="ghost"
              size="lg"
              className="px-12 py-6 text-sm font-sans font-medium tracking-wide text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="/science">
                Explore Science
              </a>
            </Button>
          </div>

          <div className="mt-16">
            <a 
              href="mailto:hello@omkneehealth.com" 
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@omkneehealth.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

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
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16">
            Ready to Begin?
          </h2>
          
          <Button 
            size="lg"
            className="px-12 py-6 text-sm font-sans font-medium tracking-wide"
            asChild
          >
            <a href="/assessment">
              Begin Assessment
            </a>
          </Button>

          <div className="mt-20">
            <a 
              href="mailto:hello@omkneehealth.com" 
              className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
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

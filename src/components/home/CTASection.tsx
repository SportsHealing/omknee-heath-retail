/**
 * CTA Section - Gentle, Non-Commercial Close
 */

import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-clinical-light">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Ready to Understand Your Knee Health?
          </h2>
          <div className="clinical-divider mb-6" />
          <p className="font-sans text-muted-foreground leading-relaxed mb-10">
            Start with our free assessment. No commitment required. 
            Just a clearer picture of where you stand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="px-10 py-6 text-sm font-sans font-medium tracking-wide"
              asChild
            >
              <a href="#assessment">Take Free Assessment</a>
            </Button>
            <Button 
              variant="ghost"
              size="lg"
              className="px-10 py-6 text-sm font-sans font-medium tracking-wide text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="/science">Explore the Science</a>
            </Button>
          </div>

          <p className="mt-8 font-sans text-xs text-muted-foreground">
            Have questions? Our clinical team is here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

/**
 * Science CTA - Gentle call to action
 * Maintains restrained, non-pushy tone
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList } from "lucide-react";

const ScienceCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Next Steps
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            Ready to Learn More?
          </h2>
          <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto font-sans">
            Now that you understand our approach and the science behind our 
            ingredient choices, explore how it all comes together — or take 
            our assessment to understand your own knee health better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="/product">
                View Our Formula
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="/assessment">
                <ClipboardList className="w-4 h-4 mr-2" />
                Take the Knee Assessment
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground font-sans">
              Have questions about the science or our approach?{" "}
              <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline font-medium">
                Get in touch with our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceCTA;

/**
 * CTA Section - Gentle, Restrained Close
 * Non-commercial, assessment-focused
 */

import { Button } from "@/components/ui/button";
import { ClipboardList, BookOpen } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Take the Next Step
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Ready to Understand Your Knee Health?
          </h2>
          <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
          <p className="font-sans text-muted-foreground leading-relaxed mb-10">
            Start with our free, clinician-developed assessment. No commitment. 
            No sales pitch. Just clarity about where you are — and honest guidance 
            on what might help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="px-10 py-6 text-sm font-sans font-medium tracking-wide"
              asChild
            >
              <a href="/assessment">
                <ClipboardList className="w-4 h-4 mr-2" />
                Take the Free Assessment
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-10 py-6 text-sm font-sans font-medium tracking-wide border-primary/20"
              asChild
            >
              <a href="/science">
                <BookOpen className="w-4 h-4 mr-2" />
                Explore the Science
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="font-sans text-sm text-muted-foreground mb-2">
              Have questions about our approach?
            </p>
            <a 
              href="mailto:hello@omkneehealth.com" 
              className="font-sans text-sm text-primary hover:underline font-medium"
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

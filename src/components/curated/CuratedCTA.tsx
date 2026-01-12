/**
 * Curated CTA - Closing section with assessment link
 */

import { Button } from "@/components/ui/button";

const CuratedCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
            Understand Your Needs
          </h2>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-10">
            Products are most valuable when matched to your specific situation. 
            Our free assessment can help clarify what approaches might be most 
            relevant for your knee health.
          </p>
          
          <Button size="lg" className="px-10 text-sm font-sans font-medium" asChild>
            <a href="/assessment">
              Take the Free Assessment
            </a>
          </Button>

          <div className="mt-16 pt-10 border-t border-border">
            <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-xl mx-auto">
              <span className="font-medium">Transparency note:</span> We curate these 
              recommendations based solely on clinical merit. We do not receive 
              commission from any products listed. Our only commercial product is 
              our joint health supplement, which you can learn about on our{" "}
              <a href="/product" className="underline hover:text-foreground transition-colors">
                product page
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedCTA;

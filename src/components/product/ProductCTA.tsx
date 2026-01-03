/**
 * Product CTA - Gentle, Restrained Close
 */

import { Button } from "@/components/ui/button";


const ProductCTA = () => {
  return (
    <section id="shop-supplements" className="py-32 md:py-40 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-16">
            If This Approach Resonates
          </h2>

          {/* Product summary */}
          <div className="mb-12">
            <p className="font-serif text-xl text-foreground mb-2">
              Joint + Movement Support
            </p>
            <p className="font-sans text-sm text-muted-foreground mb-6">
              30 Daily Pouches
            </p>
            <p className="font-serif text-2xl text-foreground mb-8">
              £49.99
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button size="lg" className="px-10 text-sm font-sans font-medium">
                Add to Basket
              </Button>
              <Button variant="outline" size="lg" className="px-10 text-sm font-sans font-medium border-foreground/20">
                Subscribe & Save
              </Button>
            </div>
          </div>

          {/* Alternative CTA */}
          <div className="border-t border-border pt-12">
            <p className="font-sans text-sm text-muted-foreground mb-6">
              Not sure?
            </p>
            <Button variant="ghost" size="lg" className="text-sm font-sans font-medium" asChild>
              <a href="/assessment">
                Take the Assessment
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;

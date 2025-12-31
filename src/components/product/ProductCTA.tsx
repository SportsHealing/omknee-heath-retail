/**
 * Product CTA - Gentle, Restrained Close
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList } from "lucide-react";

const ProductCTA = () => {
  return (
    <section id="shop-supplements" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
            If This Resonates
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            A Thoughtful Addition to Your Joint Health Approach
          </h2>
          <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
          <p className="font-sans text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            If you've read this far, you understand our philosophy: honesty over hype, 
            evidence over claims, supplements as support — not solutions. If that 
            approach resonates, we'd be glad to have you try our formula.
          </p>

          {/* Product summary */}
          <div className="bg-secondary rounded-lg p-6 md:p-8 mb-8 inline-block">
            <p className="font-serif text-xl text-foreground mb-2">
              Joint + Movement Support
            </p>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              30 Daily Pouches • 30 Day Supply
            </p>
            <p className="font-serif text-2xl text-foreground mb-6">
              £49.99
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="px-8 text-sm font-sans font-medium gap-2">
                Add to Cart
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-sm font-sans font-medium border-primary/20">
                Subscribe & Save 15%
              </Button>
            </div>
          </div>

          {/* Trust elements */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-sans mb-8">
            <span>Free UK delivery over £30</span>
            <span>•</span>
            <span>30-day returns</span>
            <span>•</span>
            <span>Cancel subscription anytime</span>
          </div>

          {/* Alternative CTA */}
          <div className="border-t border-border pt-8">
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Not sure if this is right for you?
            </p>
            <Button variant="outline" size="lg" className="px-8 text-sm font-sans font-medium" asChild>
              <a href="/assessment">
                <ClipboardList className="w-4 h-4 mr-2" />
                Take the Free Knee Assessment
              </a>
            </Button>
          </div>

          {/* Final note */}
          <p className="mt-10 font-sans text-xs text-muted-foreground max-w-xl mx-auto">
            Remember: supplements are one piece of joint health. Movement, nutrition, 
            rest, and appropriate medical care when needed all play important roles. 
            If you have concerns about your joints, please consult a healthcare professional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;

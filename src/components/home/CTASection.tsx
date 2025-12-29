/**
 * SHOPIFY SECTION: Newsletter / CTA Banner
 * Location: Homepage - Gentle call-to-action (bottom)
 * Type: Shopify Theme Section (newsletter or custom HTML)
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-sage-light to-cream">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Begin Your Journey to Better Joint Comfort
          </h2>
          <p className="font-sans text-muted-foreground text-lg mb-10 leading-relaxed">
            Join our community for gentle guidance on supporting your joint health. 
            No pressure, just helpful insights from our clinical team.
          </p>

          {/* Email signup */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <Input 
              type="email" 
              placeholder="Your email address"
              className="h-12 bg-card border-border focus:border-primary"
            />
            <Button size="lg" className="h-12 px-6 gap-2">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <p className="font-sans text-xs text-muted-foreground">
            We respect your inbox. Unsubscribe anytime. No spam, ever.
          </p>

          {/* Alternative CTA */}
          <div className="mt-12 pt-10 border-t border-border/50">
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Ready to explore our products?
            </p>
            <Button variant="outline" size="lg" className="gap-2">
              Shop Our Collection
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

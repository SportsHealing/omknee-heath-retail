import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ScienceCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            Ready to Explore Our Formula?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            Now that you understand our approach and the science behind our 
            ingredient choices, see how it all comes together in our Joint 
            Support Complex.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="/product">
                View Joint Support Complex
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="/">
                Back to Home
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Have questions about the science or our approach?{" "}
              <a href="#" className="text-om-forest hover:underline font-medium">
                Get in touch with our team
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Shopify Implementation Note */}
      <div className="hidden">
        {/* 
          SHOPIFY SECTION: science-cta
          TYPE: Custom HTML Section (bottom of page)
          
          Links to product page. Button should use Shopify's 
          product URL or collection URL.
          
          Button Microcopy:
          - Primary: "View Joint Support Complex"
          - Secondary: "Back to Home"
        */}
      </div>
    </section>
  );
};

export default ScienceCTA;

/**
 * Product CTA - Gentle, Restrained Close
 * Easy access to buy with reassurance
 */

import { Button } from "@/components/ui/button";
import { ShieldCheck, RotateCcw, Truck } from "lucide-react";
import ingredientsBg from "@/assets/ingredients-turmeric-bg.jpg";

const reassurances = [
  { icon: Truck, text: "Free UK delivery over £30" },
  { icon: RotateCcw, text: "30-day return policy" },
  { icon: ShieldCheck, text: "UK manufactured & tested" }
];

const ProductCTA = () => {
  return (
    <section id="shop-supplements" className="py-24 md:py-32 bg-primary/5 scroll-mt-20 relative overflow-hidden">
      {/* Soft ingredient background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <img 
          src={ingredientsBg} 
          alt="" 
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
            Ready to Support Your Joint Health?
          </h2>
          
          <p className="font-sans text-muted-foreground mb-10 max-w-lg mx-auto">
            Join others taking a considered, evidence-informed approach to joint wellness.
          </p>

          {/* Product summary card */}
          <div className="bg-background rounded-lg p-8 border border-border mb-8">
            <p className="font-serif text-xl text-foreground mb-2">
              Joint + Movement Support
            </p>
            <p className="font-sans text-sm text-muted-foreground mb-2">
              300g Pouch — One Month Supply
            </p>
            <p className="font-serif text-3xl text-foreground mb-6">
              £49.99
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
              <Button size="lg" className="px-10 text-sm font-sans font-medium">
                Add to Basket
              </Button>
              <Button variant="outline" size="lg" className="px-10 text-sm font-sans font-medium border-foreground/20">
                Subscribe & Save
              </Button>
            </div>

            {/* Reassurances */}
            <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-border">
              {reassurances.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="font-sans text-xs text-muted-foreground max-w-md mx-auto mb-8">
            Food supplement. Not intended to diagnose, treat, cure, or prevent any disease.
          </p>

          {/* Alternative CTA */}
          <div className="border-t border-border pt-8">
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Not sure if this is right for you?
            </p>
            <Button variant="ghost" size="lg" className="text-sm font-sans font-medium" asChild>
              <a href="/knee-score">
                Take the Free Assessment
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;

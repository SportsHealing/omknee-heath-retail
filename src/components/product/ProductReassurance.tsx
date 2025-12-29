import { Shield, Undo2, Truck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const reassurances = [
  {
    icon: Shield,
    title: "Clinician-Guided",
    description: "Developed with input from healthcare professionals specialising in musculoskeletal health."
  },
  {
    icon: Undo2,
    title: "30-Day Returns",
    description: "Not right for you? Return unopened products within 30 days for a full refund."
  },
  {
    icon: Truck,
    title: "Free UK Delivery",
    description: "Complimentary delivery on all orders over £30. Discreet, recyclable packaging."
  },
  {
    icon: HeartHandshake,
    title: "Flexible Subscription",
    description: "Subscribe for 15% off. Pause, skip, or cancel anytime. No commitment."
  }
];

const ProductReassurance = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Why Choose OmKneeHealth
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We're committed to quality, transparency, and your peace of mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {reassurances.map((item, index) => (
              <div 
                key={index}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-om-sage/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-om-forest" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-om-cream to-om-sage/20 rounded-2xl p-8 md:p-12 text-center border border-om-sage/20">
            <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3">
              Ready to Support Your Joint Health?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Take the first step with a formula designed by clinicians who understand 
              the importance of evidence-based support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-10">
                Add to Cart — £39.99
              </Button>
              <Button variant="outline" size="lg" className="px-10">
                Subscribe & Save 15%
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free UK delivery on orders over £30
            </p>
          </div>
        </div>
      </div>

      {/* Shopify Implementation Note */}
      <div className="hidden">
        {/* 
          SHOPIFY SECTION: product-reassurance
          TYPE: Custom HTML Section
          
          Final trust section with CTA. Buttons should link to 
          Shopify's native add-to-cart functionality or use 
          JavaScript to trigger the product form.
          
          Button Microcopy:
          - Primary: "Add to Cart — £39.99"
          - Secondary: "Subscribe & Save 15%"
        */}
      </div>
    </section>
  );
};

export default ProductReassurance;

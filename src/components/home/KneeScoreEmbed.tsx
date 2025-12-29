import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

/**
 * SHOPIFY SECTION: Knee Score Widget Embed
 * TYPE: Custom HTML Section
 * 
 * This section embeds the external Knee Score assessment tool.
 * The widget is hosted at score.omkneehealth.com
 * 
 * For Shopify implementation, use the HTML version provided
 * in the comments below or in the separate HTML file.
 */

const KneeScoreEmbed = () => {
  return (
    <section className="py-16 md:py-20 bg-om-cream/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header Copy */}
          <div className="text-center mb-10">
            <p className="text-om-sage font-medium tracking-wide uppercase text-sm mb-3">
              Free Assessment Tool
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Understand Your Knee Health
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Take a few moments to reflect on your current knee comfort and mobility. 
              This simple questionnaire helps you think about your joint health — it's 
              not a diagnosis, just a starting point for your wellness journey.
            </p>
          </div>

          {/* Embed Container */}
          <div className="bg-background rounded-2xl border border-border shadow-elegant overflow-hidden">
            {/* Iframe Embed */}
            <div className="relative w-full" style={{ minHeight: '600px' }}>
              <iframe
                src="https://score.omkneehealth.com"
                title="OmKneeHealth Knee Score Assessment"
                className="w-full border-0"
                style={{ height: '600px', minHeight: '600px' }}
                loading="lazy"
                allow="clipboard-write"
              />
            </div>
          </div>

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-2 mt-6 mb-8">
            <Shield className="w-4 h-4 text-om-forest" />
            <p className="text-sm text-muted-foreground">
              Your responses are private and not stored unless you choose to save them.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Interested in supporting your joint health journey?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="px-8" asChild>
                <a href="/science">
                  Learn About Joint Health
                </a>
              </Button>
              <Button size="lg" className="px-8" asChild>
                <a href="/product">
                  Explore Joint Support
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KneeScoreEmbed;

/**
 * =====================================================
 * SHOPIFY CUSTOM HTML VERSION
 * =====================================================
 * 
 * Copy the HTML below into a Shopify Custom HTML section.
 * This is the embed-safe, GDPR-compliant version.
 * 
 * To use:
 * 1. Go to Shopify Admin > Online Store > Themes
 * 2. Click Customize on your theme
 * 3. Add a "Custom HTML" or "Custom Liquid" section
 * 4. Paste the HTML code
 * 
 * See: src/shopify/knee-score-embed.html for the full code
 */

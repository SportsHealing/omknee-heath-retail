/**
 * SHOPIFY SECTION: Rich Text with Image
 * Location: Homepage - Educational section
 * Type: Shopify Theme Section (image-with-text) or Custom HTML Section
 */

const WhyKneeHealth = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-cream">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder - would be actual product/lifestyle image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sage-light to-secondary overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-sans text-sm text-primary/60 uppercase tracking-wide">
                    Lifestyle Image
                  </p>
                  <p className="font-serif text-lg text-primary/40 mt-2">
                    Active, comfortable movement
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-sm tracking-[0.15em] uppercase text-accent mb-4">
              Understanding Joint Wellness
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Your Knees Carry You Through Life
            </h2>
            <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
              <p>
                Our knees are remarkable—engineered to support movement, absorb impact, 
                and adapt to the demands of daily life. Over time, factors like activity level, 
                age, and lifestyle can influence how our joints feel and function.
              </p>
              <p>
                At OmKneeHealth, we believe in working with your body's natural wisdom. 
                Our approach isn't about quick fixes—it's about providing thoughtful, 
                consistent support that respects how joints naturally work.
              </p>
              <p className="text-foreground font-medium">
                Because when your knees feel supported, life feels more possible.
              </p>
            </div>

            {/* Subtle stat or highlight */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="font-serif text-2xl text-primary mb-1">
                Movement Matters
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                Supporting healthy, active lifestyles at every stage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKneeHealth;

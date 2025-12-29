/**
 * SHOPIFY SECTION: Rich Text with Image / Testimonial
 * Location: Homepage - Trust & credibility section
 * Type: Custom HTML Section or Shopify Theme Section
 */

const TrustSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Developed by Those Who Care
            </h2>
            <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
              OmKneeHealth was founded by healthcare professionals who saw a need 
              for thoughtful, evidence-informed joint support.
            </p>
          </div>

          {/* Founder/Team highlight */}
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Photo placeholder */}
              <div className="md:col-span-1">
                <div className="aspect-square max-w-[200px] mx-auto rounded-2xl bg-gradient-to-br from-sage-light to-secondary overflow-hidden">
                  <div className="h-full flex items-center justify-center">
                    <p className="font-sans text-xs text-foreground/40 uppercase tracking-wide">
                      Clinician Photo
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="md:col-span-2">
                <blockquote className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                  "After years of working with patients concerned about their joint health, 
                  I wanted to create something I could genuinely recommend—formulas built 
                  on real evidence, with ingredients I trust."
                </blockquote>
                <div>
                  <p className="font-sans font-medium text-foreground">
                    Dr. [Name], [Credentials]
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    Founder & Clinical Advisor, OmKneeHealth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-center">
              <p className="font-sans text-xs uppercase tracking-wide text-muted-foreground">
                Third-Party Tested
              </p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="font-sans text-xs uppercase tracking-wide text-muted-foreground">
                GMP Certified Facility
              </p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="font-sans text-xs uppercase tracking-wide text-muted-foreground">
                Made in USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

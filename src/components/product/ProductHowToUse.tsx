import { Clock, Utensils, CalendarDays, AlertCircle } from "lucide-react";

const ProductHowToUse = () => {
  return (
    <section className="py-16 md:py-20 bg-om-forest text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              How to Use
            </h2>
            <p className="text-white/80 leading-relaxed">
              Simple, straightforward guidance for incorporating this supplement into your routine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-om-sage/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-om-sage" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Daily Dosage</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Take 2 capsules daily. Consistency is key — joint support works best 
                    as part of a regular routine over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-om-sage/30 flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5 text-om-sage" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">With Food</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Best taken with a meal and a full glass of water. 
                    This may help with absorption and digestive comfort.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-om-sage/30 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-5 h-5 text-om-sage" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Allow Time</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Nutritional support for joints is a gradual process. 
                    Many people use joint supplements for 8-12 weeks before assessing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-om-sage/30 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-om-sage" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Important Note</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    If you're pregnant, nursing, taking medication, or have a 
                    shellfish allergy, please consult your healthcare provider before use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/60 text-sm">
              This product is a food supplement and is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>

      {/* Shopify Implementation Note */}
      <div className="hidden">
        {/* 
          SHOPIFY SECTION: product-how-to-use
          TYPE: Custom HTML Section
          
          Full-width section with dark background. 
          Can be added as a custom Liquid section.
        */}
      </div>
    </section>
  );
};

export default ProductHowToUse;

/**
 * Supplement Reality - Honest expectations setting
 * Core to the restrained, evidence-informed brand voice
 */

import { Check, X } from "lucide-react";

const canDo = [
  "Provide nutritional building blocks for cartilage and joint tissue",
  "Complement diet with nutrients relevant to joint health",
  "Form part of a broader approach to mobility",
  "Deliver consistent, quality-controlled doses"
];

const cannotDo = [
  "Cure, treat, or reverse any condition",
  "Replace professional medical advice",
  "Guarantee specific outcomes",
  "Compensate for lifestyle factors"
];

const SupplementReality = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              Realistic Expectations
            </h2>
            <div className="w-12 h-px bg-primary-foreground/30 mx-auto mb-6" />
            <p className="text-primary-foreground/80 leading-relaxed max-w-xl mx-auto font-sans">
              Supplements are tools, not solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What supplements CAN do */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary-foreground/10">
              <h3 className="font-serif text-xl mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                What supplements can do
              </h3>
              <ul className="space-y-4">
                {canDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-foreground/80 shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90 text-sm leading-relaxed font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What supplements CANNOT do */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary-foreground/10">
              <h3 className="font-serif text-xl mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-primary-foreground/60" />
                </div>
                What supplements cannot do
              </h3>
              <ul className="space-y-4">
                {cannotDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-primary-foreground/40 shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/70 text-sm leading-relaxed font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-primary-foreground/60 text-sm max-w-lg mx-auto font-sans">
              For significant joint concerns, consult a healthcare professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplementReality;

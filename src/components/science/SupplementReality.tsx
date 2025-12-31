/**
 * Supplement Reality - Honest expectations setting
 * Core to the restrained, evidence-informed brand voice
 */

import { Check, X } from "lucide-react";

const canDo = [
  "Provide nutritional building blocks that support cartilage and joint tissue",
  "Complement a balanced diet with specific nutrients relevant to joint health",
  "Form part of a broader approach to maintaining mobility and function",
  "Offer convenience for those who may not obtain these nutrients from diet alone",
  "Provide consistent, quality-controlled doses of studied ingredients"
];

const cannotDo = [
  "Cure, treat, or reverse any disease or medical condition",
  "Replace medical advice, diagnosis, or treatment from healthcare professionals",
  "Guarantee specific outcomes — individual responses vary significantly",
  "Compensate for poor lifestyle choices or lack of appropriate movement",
  "Work overnight — joint support is typically a gradual, long-term process"
];

const SupplementReality = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-4">
              Setting Expectations
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              What Supplements Can — and Cannot — Do
            </h2>
            <div className="w-12 h-px bg-primary-foreground/30 mx-auto mb-6" />
            <p className="text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto font-sans">
              We believe in honest communication. Supplements are tools that may support 
              joint health as part of a broader strategy — not miracle solutions. 
              Here's a realistic assessment.
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
            <p className="text-primary-foreground/60 text-sm max-w-2xl mx-auto font-sans">
              If you're experiencing significant joint problems, please consult a healthcare 
              professional. Supplements are intended to complement — not replace — appropriate 
              medical care and professional guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplementReality;

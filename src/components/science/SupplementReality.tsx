import { Check, X } from "lucide-react";

const canDo = [
  "Provide nutritional building blocks that support cartilage and joint tissue",
  "Complement a healthy diet with specific nutrients relevant to joint health",
  "Form part of a broader, holistic approach to maintaining mobility",
  "Offer convenience for those who may not get these nutrients from diet alone",
  "Provide consistent, quality-controlled doses of studied ingredients"
];

const cannotDo = [
  "Cure, treat, or reverse any disease or medical condition",
  "Replace medical advice, diagnosis, or treatment from healthcare professionals",
  "Guarantee specific outcomes — individual responses vary significantly",
  "Compensate for poor lifestyle choices or lack of movement",
  "Work overnight — joint support is typically a gradual, long-term process"
];

const SupplementReality = () => {
  return (
    <section className="py-16 md:py-20 bg-om-forest text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">
              What Supplements Can — and Cannot — Do
            </h2>
            <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
              We believe in setting realistic expectations. Supplements are tools, 
              not miracle solutions. Here's an honest assessment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What supplements CAN do */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
              <h3 className="font-serif text-xl mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-om-sage/30 flex items-center justify-center">
                  <Check className="w-4 h-4 text-om-sage" />
                </div>
                What supplements can do
              </h3>
              <ul className="space-y-4">
                {canDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-om-sage shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What supplements CANNOT do */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
              <h3 className="font-serif text-xl mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-white/60" />
                </div>
                What supplements cannot do
              </h3>
              <ul className="space-y-4">
                {cannotDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/60 text-sm max-w-2xl mx-auto">
              If you're experiencing significant joint problems, please consult a healthcare 
              professional. Supplements are intended to complement, not replace, appropriate 
              medical care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplementReality;

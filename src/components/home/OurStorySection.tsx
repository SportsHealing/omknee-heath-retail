/**
 * Our Story Section
 * Founders' background and OmKneeHealth philosophy
 */

import { Shield, FlaskConical, Building2, Award } from "lucide-react";

const credentials = [
  {
    icon: Shield,
    label: "Clinician-Founded"
  },
  {
    icon: FlaskConical,
    label: "Third-Party Tested"
  },
  {
    icon: Building2,
    label: "GMP Certified"
  },
  {
    icon: Award,
    label: "Evidence-Based"
  }
];

const OurStorySection = () => {
  return (
    <section id="our-story" className="py-40 lg:py-48 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Designed with clinical insight
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed max-w-xl mx-auto">
              <p>
                OmKneeHealth is shaped by senior medical professionals with experience in knee biomechanics, injury, and rehabilitation.
              </p>
              <p>
                Every formulation is developed with care — informed by research, clinical practice, and an understanding of how people actually move and live.
              </p>
              <p>
                We prioritise clarity over claims, and evidence over exaggeration.
              </p>
            </div>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-secondary flex items-center justify-center">
                  <credential.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-sans text-xs font-medium text-foreground">
                  {credential.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;

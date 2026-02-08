/**
 * Our Story Section
 * Founders' background and OmKneeHealth philosophy
 */

import { Shield, FlaskConical, Building2, Award, MapPin } from "lucide-react";

const credentials = [
  {
    icon: Shield,
    label: "UK Clinician-Founded"
  },
  {
    icon: MapPin,
    label: "Formulated in Britain"
  },
  {
    icon: FlaskConical,
    label: "UK Lab Tested"
  },
  {
    icon: Building2,
    label: "UK GMP Certified"
  },
  {
    icon: Award,
    label: "EFSA-Compliant"
  }
];

const OurStorySection = () => {
  return (
    <section id="our-story" className="py-40 lg:py-48 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-24">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              Made in the UK, For the UK
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Designed with British clinical insight
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed max-w-xl mx-auto">
              <p>
                OmKneeHealth is shaped by UK-based senior medical professionals with experience in knee biomechanics, injury, and rehabilitation within the British healthcare system.
              </p>
              <p>
                Every formulation is developed in the United Kingdom with care — informed by research, clinical practice, and an understanding of how British people actually move and live.
              </p>
              <p>
                We prioritise clarity over claims, evidence over exaggeration, and transparency in everything we do.
              </p>
            </div>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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

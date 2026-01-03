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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Founded by Clinicians
            </h2>
          </div>

          {/* Founders Introduction - minimal */}
          <div className="text-center mb-24">
            <p className="font-sans text-muted-foreground leading-relaxed max-w-xl mx-auto">
              <span className="font-medium text-foreground">Chinmay Gupte</span> — surgeon, researcher — 
              and <span className="font-medium text-foreground">Cynthia Gupte</span> — surgeon, radiologist.
            </p>
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

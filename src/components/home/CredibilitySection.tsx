/**
 * Credibility Section
 * Clinical team and trust signals
 */

import { Award, Shield, Building2, FlaskConical } from "lucide-react";

const credentials = [
  {
    icon: Shield,
    label: "Clinician-Founded",
    detail: "Led by healthcare professionals"
  },
  {
    icon: FlaskConical,
    label: "Third-Party Tested",
    detail: "Independent quality verification"
  },
  {
    icon: Building2,
    label: "GMP Certified",
    detail: "UK manufacturing standards"
  },
  {
    icon: Award,
    label: "Evidence-Based",
    detail: "Research-informed formulations"
  }
];

const CredibilitySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Founder message */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              A Message from Our Founder
            </h2>
            <div className="clinical-divider mb-8" />
            
            <blockquote className="max-w-3xl mx-auto">
              <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                "After years in clinical practice, I grew frustrated watching patients 
                navigate a supplement market full of exaggerated claims and 
                questionable products. OmKneeHealth was born from a simple belief: 
                patients deserve better."
              </p>
              <footer className="font-sans text-sm text-muted-foreground">
                <cite className="not-italic font-medium text-foreground">Dr. Sarah Mitchell</cite>
                <span className="mx-2">•</span>
                <span>Founder & Clinical Director</span>
              </footer>
            </blockquote>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-secondary"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-trust-badge flex items-center justify-center">
                  <credential.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="font-sans text-sm font-medium text-foreground mb-1">
                  {credential.label}
                </p>
                <p className="font-sans text-xs text-muted-foreground">
                  {credential.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;

/**
 * Our Story Section
 * Founders' background and OmKneeHealth philosophy
 */

import { Shield, FlaskConical, Building2, Award, Heart, BookOpen, Stethoscope, Leaf } from "lucide-react";

const principles = [
  {
    icon: FlaskConical,
    text: "Ingredients selected for biological plausibility, not trends"
  },
  {
    icon: BookOpen,
    text: "Formulations informed by research and clinical reasoning"
  },
  {
    icon: Heart,
    text: "Honest communication about what supplements can — and cannot — do"
  },
  {
    icon: Leaf,
    text: "Responsible sourcing and quality standards"
  }
];

const philosophyPoints = [
  "Knee health is complex and individual",
  "There are no shortcuts or universal solutions",
  "Evidence should guide decisions, not marketing",
  "Supplements should support normal physiology, not promise outcomes"
];

const credentials = [
  {
    icon: Shield,
    label: "Clinician-Founded",
    detail: "Created by practising surgeons"
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

const OurStorySection = () => {
  return (
    <section id="our-story" className="py-32 lg:py-40 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary/70 mb-6">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Clinical Experience Meets Lived Understanding
            </h2>
          </div>

          {/* Founders Introduction - condensed */}
          <div className="mb-20">
            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
              <p>
                <span className="font-medium text-foreground">Chinmay Gupte</span> — surgeon, researcher, 
                educator — has spent decades at the forefront of knee health.
              </p>
              
              <p>
                His wife and collaborator, <span className="font-medium text-foreground">Cynthia Gupte</span> — 
                surgeon and radiologist — brings both scientific rigour and lived experience of musculoskeletal issues.
              </p>

              <p className="font-serif text-xl text-foreground text-center py-8 italic">
                Together, they recognised a gap.
              </p>

              <p>
                Not for another supplement — but for a knee-specific, evidence-informed formulation 
                created with clinical care and restraint.
              </p>
            </div>
          </div>

          {/* Principles - simplified */}
          <div className="grid sm:grid-cols-2 gap-6 mb-20">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-secondary flex items-center justify-center">
                  <principle.icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="font-sans text-sm text-muted-foreground pt-1.5">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy points - minimal */}
          <div className="border-t border-b border-border py-12 mb-20">
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {philosophyPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="font-sans text-sm text-foreground">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials grid - simplified */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <credential.icon className="w-4 h-4 text-primary" />
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

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
    <section id="our-story" className="py-24 lg:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Where Clinical Experience Meets Lived Understanding
            </h2>
            <div className="clinical-divider mb-8" />
          </div>

          {/* Founders Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              <span className="font-medium text-foreground">Chinmay Gupte</span> has spent decades 
              working at the forefront of knee health — as a surgeon, researcher, and educator, 
              specialising in knee biomechanics, ligament and cartilage injury, and long-term 
              joint function.
            </p>
            
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              Throughout years of clinical practice, one challenge became increasingly clear: 
              patients seeking to support their knee health were often navigating a supplement 
              market dominated by broad claims, limited explanation, and little connection to 
              real clinical thinking.
            </p>

            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              At the same time, his wife and collaborator, <span className="font-medium text-foreground">Cynthia Gupte</span> — 
              a qualified surgeon and radiologist — brought a complementary perspective. Through 
              her professional background and personal experience of musculoskeletal issues, she 
              understood both the scientific complexity of joint health and the reality of living 
              with joint limitations.
            </p>

            <p className="font-serif text-xl text-foreground text-center my-10 italic">
              Together, they recognised a gap.
            </p>

            <p className="font-sans text-muted-foreground leading-relaxed">
              Not for another generic joint supplement — but for a knee-specific, evidence-informed 
              formulation, created with the same care, restraint, and responsibility expected in 
              clinical practice.
            </p>
          </div>

          {/* Why OmKneeHealth was created */}
          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="font-serif text-2xl text-foreground mb-6 text-center">
              Why OmKneeHealth Was Created
            </h3>
            
            <p className="font-sans text-muted-foreground leading-relaxed text-center mb-8">
              OmKneeHealth was founded on a simple principle:<br />
              <span className="font-medium text-foreground">people deserve clarity when it comes to supporting their knee health.</span>
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-background rounded-lg"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-trust-badge flex items-center justify-center">
                    <principle.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed pt-2">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-sans text-muted-foreground leading-relaxed text-center mt-8">
              The result is a knee joint supplement designed to support normal joint structure 
              and movement as part of a broader, balanced approach to knee health.
            </p>
          </div>

          {/* Shared Philosophy */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl text-foreground mb-6 text-center">
              A Shared Philosophy
            </h3>
            <div className="clinical-divider mb-8" />
            
            <p className="font-sans text-muted-foreground leading-relaxed text-center mb-8">
              OmKneeHealth reflects a shared belief shaped by years of clinical work and lived experience:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8">
              {philosophyPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 border border-border rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="font-sans text-sm text-foreground">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-sans text-muted-foreground leading-relaxed text-center italic">
              This philosophy informs every formulation, recommendation, and educational resource 
              on the platform.
            </p>
          </div>

          {/* Designed with Care */}
          <div className="text-center mb-16 py-8 border-y border-border">
            <h3 className="font-serif text-xl text-foreground mb-4">
              Designed with Care. Offered with Restraint.
            </h3>
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              The OmKneeHealth Joint + Movement Support supplement is not positioned as a cure or treatment.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              It is a thoughtfully designed, responsibly sourced formulation — intended to complement 
              movement, rehabilitation, and long-term joint care.
            </p>
            <p className="font-serif text-lg text-foreground italic">
              Because supporting knee health should feel informed, calm, and trustworthy.
            </p>
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

export default OurStorySection;

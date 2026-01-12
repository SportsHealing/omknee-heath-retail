/**
 * Assessment Section - Simplified, single CTA
 * Funnels users to the short questionnaire first
 */

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AssessmentSection = () => {
  return (
    <section id="assessment" className="py-32 lg:py-40 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary/70 mb-6">
            Clinician-Developed Tools
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
            Assess Your Knee Health
          </h2>
          
          {/* Description */}
          <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
            The team at OmKneeHealth have developed knee health questionnaires 
            based on our clinical experience and validated assessment tools, 
            designed to give you unique insight into your knee health.
          </p>
          
          <p className="font-sans text-sm text-muted-foreground mb-10">
            Start with our quick assessment, then explore more comprehensive 
            options if you'd like deeper insight.
          </p>

          {/* Single CTA */}
          <Button 
            size="lg"
            className="px-12 py-6 text-sm font-sans font-medium tracking-wide"
            asChild
          >
            <Link to="/assessment">Take the Free Assessment</Link>
          </Button>
          
          <p className="mt-6 font-sans text-xs text-muted-foreground">
            2–5 minutes • Free • No account required
          </p>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="font-sans text-xs text-muted-foreground max-w-lg mx-auto">
              <span className="font-medium">Important:</span> These assessments are 
              for guidance purposes only and do not constitute medical diagnosis. 
              Always consult a healthcare professional for medical advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;

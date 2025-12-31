/**
 * Assessment Section - Knee Score Tool
 * Non-commercial value-add positioning
 */

import { Button } from "@/components/ui/button";
import { ClipboardList, Activity, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: ClipboardList,
    title: "Clinician-Developed",
    description: "A structured questionnaire informed by clinical experience and research"
  },
  {
    icon: Activity,
    title: "Understand Your Situation",
    description: "Gain clarity on factors that may be affecting your knee health"
  },
  {
    icon: FileText,
    title: "Honest Guidance",
    description: "Receive straightforward recommendations — including when to seek professional help"
  }
];

const AssessmentSection = () => {
  return (
    <section id="assessment" className="py-24 lg:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Free Assessment Tool
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Understand Your Knee Health
            </h2>
            <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our clinician-developed assessment helps you understand your current 
              situation. No purchase required. No sales pitch. Just clarity about 
              where you are and what might help.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-trust-badge flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-sans text-sm font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="px-10 py-6 text-sm font-sans font-medium tracking-wide"
              asChild
            >
              <Link to="/assessment">Take the Free Assessment</Link>
            </Button>
            <p className="mt-4 font-sans text-xs text-muted-foreground">
              Takes approximately 5 minutes • Completely confidential • No obligation
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="font-sans text-xs text-muted-foreground/70 max-w-xl mx-auto italic">
              This assessment is for informational purposes only and does not constitute 
              medical advice. If you have concerns about your knee health, please consult 
              a qualified healthcare professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;

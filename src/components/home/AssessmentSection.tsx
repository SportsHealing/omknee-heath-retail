/**
 * Assessment Section - Knee Score Tool
 * Non-commercial value-add positioning
 */

import { Button } from "@/components/ui/button";
import { ClipboardCheck, TrendingUp, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: ClipboardCheck,
    title: "5-Minute Assessment",
    description: "A brief, evidence-based questionnaire developed with clinical input"
  },
  {
    icon: TrendingUp,
    title: "Personal Insights",
    description: "Understand where you are and what factors may affect your joint health"
  },
  {
    icon: FileText,
    title: "Actionable Guidance",
    description: "Receive personalized recommendations based on your responses"
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
            <div className="clinical-divider mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our clinician-developed assessment helps you understand your current 
              joint health status. No purchase required. No pressure. Just clarity.
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
              <Link to="/assessment">Start Your Free Assessment</Link>
            </Button>
            <p className="mt-4 font-sans text-xs text-muted-foreground">
              Takes approximately 5 minutes • Completely confidential
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;

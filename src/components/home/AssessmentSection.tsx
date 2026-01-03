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
    description: "Structured and informed by clinical experience"
  },
  {
    icon: Activity,
    title: "Clarity",
    description: "Understand what may be affecting your knees"
  },
  {
    icon: FileText,
    title: "Honest Guidance",
    description: "Including when to seek professional help"
  }
];

const AssessmentSection = () => {
  return (
    <section id="assessment" className="py-32 lg:py-40 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary/70 mb-6">
              Free Tool
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Understand Your Knee Health
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed max-w-lg mx-auto">
              No purchase required. No sales pitch. Just clarity.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 mx-auto mb-5 rounded-full bg-secondary flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-sans text-sm font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="px-12 py-6 text-sm font-sans font-medium tracking-wide"
              asChild
            >
              <Link to="/assessment">Begin Assessment</Link>
            </Button>
            <p className="mt-6 font-sans text-xs text-muted-foreground">
              5 minutes • Confidential
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;

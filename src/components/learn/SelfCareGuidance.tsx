import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Dumbbell, Scale, Moon, Utensils, Brain } from "lucide-react";

const guidanceAreas = [
  {
    icon: Activity,
    title: "Movement & Activity",
    guidance: [
      "Regular, gentle movement helps maintain joint function and muscle strength",
      "Low-impact activities like walking, swimming, and cycling are generally well-tolerated",
      "Avoid prolonged static positions—change positions regularly throughout the day",
      "Listen to your body: some discomfort during activity may be acceptable, but sharp pain is a signal to stop"
    ],
    caution: "If activity consistently increases your symptoms, consult a physiotherapist for guidance on appropriate exercise."
  },
  {
    icon: Dumbbell,
    title: "Strengthening",
    guidance: [
      "Strong muscles around the knee help support and protect the joint",
      "Focus on quadriceps, hamstrings, and hip muscles",
      "Resistance exercises can be modified for different ability levels",
      "Progressive loading—gradually increasing difficulty—is key to building strength"
    ],
    caution: "A qualified professional can help design an exercise programme appropriate for your specific situation."
  },
  {
    icon: Scale,
    title: "Weight Management",
    guidance: [
      "Every kilogram of body weight places additional load on the knees during movement",
      "Even modest weight reduction can meaningfully reduce joint stress",
      "Sustainable, gradual changes are more effective than dramatic interventions",
      "Focus on overall health rather than numbers alone"
    ],
    caution: "Weight management should be approached holistically, considering overall health and wellbeing."
  },
  {
    icon: Moon,
    title: "Rest & Recovery",
    guidance: [
      "Adequate sleep supports tissue repair and recovery",
      "Balance activity with appropriate rest periods",
      "Elevation and gentle movement can help manage temporary swelling",
      "Chronic sleep deprivation may increase sensitivity to discomfort"
    ],
    caution: "Persistent swelling or night pain warrants professional assessment."
  },
  {
    icon: Utensils,
    title: "Nutrition",
    guidance: [
      "A balanced diet provides nutrients needed for tissue maintenance",
      "Varied dietary patterns may contribute to overall joint health",
      "Adequate protein supports muscle maintenance",
      "Hydration is important for all bodily functions"
    ],
    caution: "Supplements should complement, not replace, a balanced diet. Consult a healthcare provider about supplementation."
  },
  {
    icon: Brain,
    title: "Understanding Pain",
    guidance: [
      "Pain is complex and influenced by many factors beyond tissue damage",
      "Stress, sleep, and mood can all influence pain experience",
      "Catastrophic thinking about pain can sometimes amplify the experience",
      "Gradual, confident return to activity is often part of recovery"
    ],
    caution: "Persistent or worsening pain should always be evaluated by a healthcare professional."
  }
];

const SelfCareGuidance = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Self-Care Guidance
          </h2>
          <p className="text-lg text-muted-foreground">
            While professional guidance is important for specific conditions, there are general 
            principles that support knee health for most people. These approaches complement—but 
            do not replace—professional care.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {guidanceAreas.map((area, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <area.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-serif text-foreground">
                    {area.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {area.guidance.map((point, i) => (
                    <li key={i} className="text-sm text-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground italic pt-2 border-t border-border/50">
                  {area.caution}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-serif text-foreground mb-2">
              When to Seek Professional Help
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Self-care has its limits. Consider consulting a healthcare professional if you experience:
            </p>
            <ul className="text-sm text-foreground space-y-1">
              <li>• Significant swelling, redness, or warmth</li>
              <li>• Inability to bear weight or locked knee</li>
              <li>• Pain that wakes you from sleep</li>
              <li>• Symptoms persisting beyond 2-3 weeks</li>
              <li>• Any symptom that concerns you</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfCareGuidance;

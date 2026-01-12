import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const conditions = [
  {
    name: "Osteoarthritis",
    prevalence: "Most common form of arthritis",
    description: "A degenerative condition where the protective cartilage that cushions the ends of bones gradually wears down over time.",
    factors: ["Age-related changes", "Previous injury", "Excess body weight", "Genetic factors", "Repetitive stress"],
    note: "Osteoarthritis develops gradually. Early attention to joint health may help maintain function and comfort."
  },
  {
    name: "Patellofemoral Pain",
    prevalence: "Common in active individuals",
    description: "Discomfort around or behind the kneecap, often related to how the patella tracks during movement.",
    factors: ["Muscle imbalances", "Overuse or sudden activity increase", "Biomechanical factors", "Tight or weak muscles"],
    note: "Often responds well to targeted exercises that improve muscle balance and movement patterns."
  },
  {
    name: "Meniscus Issues",
    prevalence: "Affects all age groups",
    description: "The menisci can be damaged through sudden twisting movements or gradual wear over time.",
    factors: ["Sudden pivoting or twisting", "Deep squatting under load", "Age-related degeneration", "Previous knee injury"],
    note: "Management approaches vary widely depending on the type and severity. Professional assessment is important."
  },
  {
    name: "Ligament Concerns",
    prevalence: "Common in sports",
    description: "Ligaments can be stretched or torn through sudden movements, impacts, or awkward landings.",
    factors: ["Sudden changes in direction", "Direct impact", "Landing awkwardly", "Hyperextension"],
    note: "Recovery depends on severity. Many ligament issues respond to rehabilitation, though some require surgical intervention."
  },
  {
    name: "Tendinopathy",
    prevalence: "Overuse-related",
    description: "Gradual changes to tendon structure, often from repetitive loading without adequate recovery.",
    factors: ["Training errors", "Inadequate recovery", "Biomechanical issues", "Age-related changes"],
    note: "Typically develops over time. Progressive loading exercises are often central to management."
  }
];

const CommonConditions = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Common Knee Conditions
          </h2>
          <p className="text-lg text-muted-foreground">
            Knee discomfort can arise from many causes. Understanding common conditions 
            helps inform conversations with healthcare providers and guides appropriate care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg mb-8">
            <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground">
              <strong>Important:</strong> This information is educational only. If you're experiencing knee 
              symptoms, please consult a qualified healthcare professional for proper assessment and diagnosis.
            </p>
          </div>

          <div className="space-y-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl font-serif text-foreground">
                      {condition.name}
                    </CardTitle>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded whitespace-nowrap">
                      {condition.prevalence}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">{condition.description}</p>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Contributing factors may include:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {condition.factors.map((factor, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                    {condition.note}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonConditions;

import { Target, ShieldCheck, BookOpen, Users } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Evidence Over Marketing",
    description: "We only recommend what research supports. If the evidence is weak or mixed, we'll tell you that—not hide it behind confident claims."
  },
  {
    icon: BookOpen,
    title: "Education Before Commerce",
    description: "Our free resources—assessments, articles, guidance—exist to help you understand your knees. They're not funnels designed to sell you products."
  },
  {
    icon: Users,
    title: "Respect Your Autonomy",
    description: "We provide information so you can make informed decisions. We don't use urgency tactics, fake scarcity, or emotional manipulation."
  },
  {
    icon: Target,
    title: "Knee-Specific Focus",
    description: "We specialise in knee health because depth matters more than breadth. This singular focus allows us to provide genuinely useful, detailed guidance."
  }
];

const ClinicalMission = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Clinical Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We exist to democratise access to quality knee health information—the 
            kind of guidance you'd receive from a trusted clinician who has time 
            to explain things properly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card rounded-xl p-8 border border-border text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            What We're Not
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not a replacement for professional medical care. We don't diagnose 
            conditions or prescribe treatments. What we offer is educational support—helping 
            you understand your knees better so you can have more informed conversations 
            with your healthcare providers and make decisions that align with your values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClinicalMission;

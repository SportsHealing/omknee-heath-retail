import { Bone, Activity, Microscope, HeartPulse } from "lucide-react";

const expertiseAreas = [
  {
    icon: Bone,
    title: "Joint Anatomy & Biomechanics",
    description: "Deep understanding of knee structure, movement patterns, and how mechanical factors influence joint health over time."
  },
  {
    icon: Activity,
    title: "Rehabilitation & Movement",
    description: "Expertise in exercise prescription, movement modification, and progressive loading strategies for knee conditions."
  },
  {
    icon: Microscope,
    title: "Nutritional Science",
    description: "Research-informed perspective on how nutrition and supplementation can support—or fail to support—joint health."
  },
  {
    icon: HeartPulse,
    title: "Pain Science",
    description: "Modern understanding of pain mechanisms, helping explain why knees hurt and what factors influence symptom experience."
  }
];

const KneeExpertise = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Knee-Specific Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus exclusively on knee health because specialisation allows us 
            to provide depth that general wellness resources cannot match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <area.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground text-sm">Years of combined clinical experience in knee health</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">1000s</div>
            <p className="text-muted-foreground text-sm">Of patients seen with knee-specific concerns</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground text-sm">Focused on knee health education and support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KneeExpertise;

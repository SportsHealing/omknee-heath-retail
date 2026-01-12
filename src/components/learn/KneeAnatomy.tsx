import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import kneeAnatomyDiagram from "@/assets/knee-anatomy-diagram.png";
import osteoarthritisProgression from "@/assets/osteoarthritis-progression.png";

const anatomyParts = [
  {
    name: "Femur (Thighbone)",
    description: "The large bone of the upper leg that forms the top of the knee joint.",
    color: "bg-amber-100 border-amber-300"
  },
  {
    name: "Tibia (Shinbone)",
    description: "The main weight-bearing bone of the lower leg that forms the bottom of the knee joint.",
    color: "bg-amber-50 border-amber-200"
  },
  {
    name: "Hyaline Cartilage",
    description: "Smooth, slippery tissue covering the bone surfaces that reduces friction and absorbs shock during movement.",
    color: "bg-blue-100 border-blue-300"
  },
  {
    name: "Menisci (Medial & Lateral)",
    description: "C-shaped pads of fibrocartilage between the femur and tibia that act as shock absorbers and help distribute weight.",
    color: "bg-sky-100 border-sky-300"
  },
  {
    name: "Anterior Cruciate Ligament (ACL)",
    description: "Prevents the tibia from sliding forward and provides rotational stability.",
    color: "bg-rose-100 border-rose-300"
  },
  {
    name: "Posterior Cruciate Ligament (PCL)",
    description: "Prevents the tibia from sliding backward relative to the femur.",
    color: "bg-pink-100 border-pink-300"
  },
  {
    name: "Medial Collateral Ligament (MCL)",
    description: "Located on the inner side of the knee, prevents the knee from bending inward.",
    color: "bg-violet-100 border-violet-300"
  },
  {
    name: "Lateral Collateral Ligament (LCL)",
    description: "Located on the outer side of the knee, prevents the knee from bending outward.",
    color: "bg-purple-100 border-purple-300"
  }
];

const oaStages = [
  {
    stage: "Healthy Knee",
    description: "Intact hyaline cartilage provides a smooth, cushioned surface. Bones glide easily with minimal friction.",
    status: "normal"
  },
  {
    stage: "Early Changes",
    description: "Cartilage begins to thin and soften. Minor wear may cause occasional stiffness, especially after rest.",
    status: "early"
  },
  {
    stage: "Moderate OA",
    description: "Significant cartilage loss. The space between bones narrows, causing more frequent discomfort and reduced flexibility.",
    status: "moderate"
  },
  {
    stage: "Advanced OA",
    description: "Severe cartilage wear leading to bone-on-bone contact. Movement becomes painful and limited.",
    status: "advanced"
  }
];

const KneeAnatomy = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Understanding Knee Anatomy
          </h2>
          <p className="text-lg text-muted-foreground">
            The knee is one of the largest and most complex joints in the human body. 
            Understanding its structure helps explain why knee health requires a comprehensive approach.
          </p>
        </div>

        {/* Anatomy Diagram Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Diagram */}
            <div className="bg-muted/20 rounded-xl p-6 lg:sticky lg:top-24">
              <img 
                src={kneeAnatomyDiagram}
                alt="Anatomical diagram of the knee joint showing femur, tibia, menisci, cruciate and collateral ligaments, and hyaline cartilage"
                className="w-full max-w-md mx-auto rounded-lg"
              />
              <p className="text-center text-sm text-muted-foreground mt-4">
                Cross-section view of the knee joint showing key anatomical structures
              </p>
            </div>

            {/* Anatomy Labels */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-foreground mb-4">Key Structures</h3>
              {anatomyParts.map((part, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border ${part.color}`}
                >
                  <h4 className="font-semibold text-foreground mb-1">{part.name}</h4>
                  <p className="text-sm text-muted-foreground">{part.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Osteoarthritis Progression Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              How Knee Osteoarthritis Progresses
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Osteoarthritis develops gradually as the protective hyaline cartilage on bone surfaces 
              wears down over time. Understanding this progression helps explain why early, 
              consistent care matters.
            </p>
          </div>

          {/* OA Progression Diagram */}
          <div className="bg-muted/20 rounded-xl p-6 mb-8">
            <img 
              src={osteoarthritisProgression}
              alt="Diagram showing the three stages of knee osteoarthritis progression from healthy cartilage to advanced wear"
              className="w-full rounded-lg"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              Progression of hyaline cartilage wear in knee osteoarthritis
            </p>
          </div>

          {/* OA Stages Explanation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {oaStages.map((stage, index) => (
              <Card 
                key={index} 
                className={`border-l-4 ${
                  stage.status === 'normal' ? 'border-l-emerald-500' :
                  stage.status === 'early' ? 'border-l-amber-500' :
                  stage.status === 'moderate' ? 'border-l-orange-500' :
                  'border-l-red-500'
                }`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-serif text-foreground">
                    {stage.stage}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-center text-muted-foreground text-sm">
            <strong className="text-foreground">Why this matters:</strong> The hyaline cartilage 
            covering your bone surfaces doesn't regenerate like other tissues. Once it begins to 
            wear, the process can be difficult to reverse. This is why supporting joint health 
            early—through movement, strength, weight management, and appropriate nutrition—is 
            so important.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KneeAnatomy;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const anatomyParts = [
  {
    name: "Bones",
    description: "The knee joint connects three bones: the femur (thighbone), tibia (shinbone), and patella (kneecap). These bones work together to provide structural support and enable movement.",
    details: "The femur and tibia meet to form the main weight-bearing joint, while the patella protects the front of the knee and improves the mechanical advantage of the quadriceps muscle."
  },
  {
    name: "Cartilage",
    description: "Two types of cartilage protect the knee: articular cartilage covers the bone ends, and menisci act as shock absorbers between the femur and tibia.",
    details: "Articular cartilage is smooth and slippery, reducing friction during movement. The menisci are C-shaped pads that distribute weight and stabilise the joint."
  },
  {
    name: "Ligaments",
    description: "Four major ligaments connect the bones and provide stability: the ACL, PCL, MCL, and LCL.",
    details: "The cruciate ligaments (ACL and PCL) control forward and backward movement, while the collateral ligaments (MCL and LCL) provide side-to-side stability."
  },
  {
    name: "Tendons & Muscles",
    description: "Tendons connect muscles to bones, enabling movement. The quadriceps and hamstrings are the primary muscle groups controlling the knee.",
    details: "The patellar tendon connects the quadriceps to the tibia, while the hamstring tendons attach at the back of the knee. Strong muscles are essential for joint support."
  },
  {
    name: "Synovial Membrane",
    description: "This thin tissue lines the joint capsule and produces synovial fluid, which lubricates and nourishes the cartilage.",
    details: "Healthy synovial fluid reduces friction and provides nutrients to cartilage, which has no direct blood supply."
  }
];

const KneeAnatomy = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Understanding Knee Anatomy
          </h2>
          <p className="text-lg text-muted-foreground">
            The knee is one of the largest and most complex joints in the human body. 
            Understanding its structure helps explain why knee health requires a comprehensive approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {anatomyParts.map((part, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-serif text-foreground">
                  {part.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-2">{part.description}</p>
                <p className="text-muted-foreground text-sm">{part.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 p-6 bg-muted/30 rounded-lg">
          <p className="text-center text-muted-foreground text-sm">
            <strong className="text-foreground">Why this matters:</strong> Each component of the knee plays a specific role. 
            When one element is compromised—whether through injury, wear, or inflammation—it can affect the entire system. 
            This is why knee health requires attention to multiple factors, not just one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KneeAnatomy;

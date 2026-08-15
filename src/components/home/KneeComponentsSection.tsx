/**
 * Knee Components Section - the structures that make up the knee,
 * unified by collagen and lubricating synovial fluid.
 */

import { Bone, Layers, Shield, Link2, Cable, Dumbbell, Droplets } from "lucide-react";

const components = [
  {
    icon: Bone,
    name: "Bones",
    role: "The framework",
    detail:
      "Femur, tibia and patella form the joint. Bone is a living, collagen-rich tissue that remodels in response to load and nutrition.",
  },
  {
    icon: Layers,
    name: "Chondral surfaces",
    role: "The glide layer",
    detail:
      "Smooth type II collagen cartilage caps the bone ends, allowing low-friction movement when bathed in synovial fluid.",
  },
  {
    icon: Shield,
    name: "Meniscus",
    role: "The shock absorber",
    detail:
      "Two crescent-shaped cartilages of type I collagen distribute load, absorb impact and protect the bone surfaces.",
  },
  {
    icon: Link2,
    name: "Ligaments",
    role: "The stabilisers",
    detail:
      "ACL, PCL, MCL and LCL are collagen cords that guide rotation and side-to-side control during walking, pivoting and landing.",
  },
  {
    icon: Cable,
    name: "Tendons",
    role: "Power transmission",
    detail:
      "Quadriceps and patellar tendons, plus the ITB, transmit muscle force. Collagen-dense tissue that prefers steady, progressive loading.",
  },
  {
    icon: Dumbbell,
    name: "Muscles & nerves",
    role: "Control and awareness",
    detail:
      "Quadriceps, hamstrings and hip muscles power movement, while nerves provide the position sense that creates dynamic stability.",
  },
];

const KneeComponentsSection = () => {
  return (
    <section id="knee-components" className="py-24 lg:py-32 bg-secondary">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">
            Inside the Joint
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            The components that make up your knee
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Every structure in the knee is built around collagen — the scaffold that gives tissue
            strength, shape and resistance to load — and every moving surface is nourished and
            lubricated by synovial fluid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {components.map((item) => (
            <article
              key={item.name}
              className="bg-background rounded-xl border border-border p-6 md:p-7"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">{item.name}</h3>
              <p className="font-sans text-xs tracking-[0.12em] uppercase text-accent mb-3">
                {item.role}
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        {/* Collagen + synovial fluid throughline */}
        <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-7">
            <h3 className="font-serif text-xl text-foreground mb-3">Collagen: the scaffold</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
              Collagen is the primary structural protein of the knee, present in bone, cartilage,
              meniscus, ligaments and tendons. Type II collagen is specific to chondral cartilage;
              type I is found in bone, tendons, ligaments and meniscus.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Production naturally slows with age. Vitamin C, adequate protein, zinc and copper,
              good sleep and appropriate loading all help maintain normal collagen formation.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-7">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Droplets className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3">Synovial fluid: the lubricant</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              A viscous fluid inside the joint capsule that lubricates the gliding surfaces and
              carries nutrients to cartilage, which has no direct blood supply. Movement is what
              circulates it — gentle, regular motion helps keep the joint nourished.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KneeComponentsSection;

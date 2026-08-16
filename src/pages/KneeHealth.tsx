import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import EcosystemPathway from "@/components/EcosystemPathway";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CORNERSTONES = [
  { to: "/your-knee", title: "Your Knee", copy: "A plain-English tour of the joint you rely on every day." },
  { to: "/knee-movement", title: "Movement", copy: "Why knees like being used, and how to move well most days." },
  { to: "/cartilage-collagen-synovial-fluid", title: "Cartilage, Collagen & Synovial Fluid", copy: "The living materials inside the joint, and what keeps them healthy." },
  { to: "/knee-biomechanics", title: "Strength & Mobility", copy: "Where force lands, and the strength that spreads it evenly." },
  { to: "/knee-nutrition-diet", title: "Nutrition", copy: "Eating for connective tissue, with gut health as the foundation." },
  { to: "/healthy-knees-through-life", title: "Healthy Knees Through Life", copy: "What to prioritise in your 30s, 40s, 50s, 60s and beyond." },
];

const KneeHealth = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Knee Health: How to Look After Your Knees"
      description="A curated guide to everyday knee health — your knee, movement, cartilage and collagen, strength and mobility, nutrition, and healthy knees through life."
      canonicalPath="/knee-health"
      keywords="knee health, how to improve knee health, healthy knees, knee wellness"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Knee Health", url: "https://omkneehealth.com/knee-health" },
      ]}
    />
    <WebPageSchema
      name="Knee Health - OmKneeHealth"
      description="Curated consumer guidance on maintaining healthy knees."
      url="https://omkneehealth.com/knee-health"
      type="CollectionPage"
    />
    <Header />
    <main>
      <section className="pt-32 pb-16 lg:pt-56 lg:pb-20">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">Knee Health</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Understand your knees. Look after them. Keep moving.
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Six short guides — enough to act on, without turning into a textbook.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CORNERSTONES.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-xl border border-border bg-secondary/40 p-8 transition-colors hover:border-primary/40 hover:bg-secondary/60"
              >
                <h2 className="font-serif text-xl text-foreground mb-3">{item.title}</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{item.copy}</p>
                <span className="inline-flex items-center gap-2 font-sans text-sm text-primary">
                  Read the guide
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EcosystemPathway
        site="sportshealing"
        title="Want the clinical depth?"
        description="The Knee Passport on SportsHealing goes further into conditions, treatment and rehabilitation than we do here."
        cta="Explore the Knee Passport"
      />
    </main>
    <Footer />
  </div>
);

export default KneeHealth;

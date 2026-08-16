/**
 * Cornerstones Section - the six curated Knee Health entry points.
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cornerstones = [
  { to: "/your-knee", title: "Your Knee", copy: "A plain-English tour of the joint you rely on every day." },
  { to: "/knee-movement", title: "Movement", copy: "Why knees like being used, and how to move well most days." },
  { to: "/cartilage-collagen-synovial-fluid", title: "Cartilage, Collagen & Synovial Fluid", copy: "The living materials inside the joint, and what keeps them healthy." },
  { to: "/movement-biomechanics", title: "Strength & Mobility", copy: "Where force lands, and the strength that spreads it evenly." },
  { to: "/nourish", title: "Nutrition", copy: "Eating for connective tissue, with gut health as the foundation." },
  { to: "/healthy-knees-through-life", title: "Healthy Knees Through Life", copy: "What to prioritise in your 30s, 40s, 50s, 60s and beyond." },
];

const CornerstonesSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container px-6">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">Knee Health</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Six things worth understanding
        </h2>
        <p className="font-sans text-muted-foreground leading-relaxed">
          Short, evidence-informed guides. Enough to act on, without turning into a textbook.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cornerstones.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group rounded-xl border border-border bg-secondary/40 p-8 transition-colors hover:border-primary/40 hover:bg-secondary/60"
          >
            <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{item.copy}</p>
            <span className="inline-flex items-center gap-2 font-sans text-sm text-primary">
              Read
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/knee-health"
          className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
        >
          See all Knee Health guides
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default CornerstonesSection;

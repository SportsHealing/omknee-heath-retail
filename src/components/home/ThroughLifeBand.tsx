/**
 * Healthy Knees Through Life - editorial band across life stages.
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stages = [
  { stage: "Sport", copy: "Build the strength and control that lets you play hard and recover well." },
  { stage: "Active adulthood", copy: "Keep capacity topped up around work, family and the occasional big weekend." },
  { stage: "Midlife", copy: "Strength becomes the thing worth protecting. Consistency beats intensity." },
  { stage: "Healthy ageing", copy: "Movement remains the most reliable way to stay independent and confident." },
];

const ThroughLifeBand = () => (
  <section className="py-24 lg:py-32 bg-secondary/30">
    <div className="container px-6">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
          Healthy Knees Through Life
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          Your knees change through life. The importance of movement does not.
        </h2>
      </div>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {stages.map((s, i) => (
          <li key={s.stage} className="rounded-xl border border-border bg-background p-7">
            <span className="font-serif text-2xl text-primary/40 block mb-4">{`0${i + 1}`}</span>
            <h3 className="font-serif text-lg text-foreground mb-3">{s.stage}</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
          </li>
        ))}
      </ol>

      <div className="text-center mt-12">
        <Link
          to="/healthy-knees-through-life"
          className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
        >
          Read Healthy Knees Through Life
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ThroughLifeBand;

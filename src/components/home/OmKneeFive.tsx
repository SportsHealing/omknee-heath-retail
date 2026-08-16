/**
 * The OmKnee Five - homepage editorial panel for the five principles.
 */

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OMKNEE_FIVE } from "@/lib/omkneeFive";

interface OmKneeFiveProps {
  /** Renders an h1 when the section is the page's primary heading. */
  as?: "h1" | "h2";
  eyebrow?: string;
  heading?: string;
  intro?: string;
}

const OmKneeFive = ({
  as = "h2",
  eyebrow = "The OmKnee Five",
  heading = "Five principles for lifelong knee health",
  intro = "Not a programme, and not a product range. Five ideas worth understanding, in whichever order suits you.",
}: OmKneeFiveProps) => {
  const Heading = as;
  return (
    <section id="omknee-five" className="py-24 lg:py-32 bg-background scroll-mt-28">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">{eyebrow}</p>
          <Heading className="font-serif text-3xl md:text-4xl text-foreground mb-6">{heading}</Heading>
          <p className="font-sans text-muted-foreground leading-relaxed">{intro}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {OMKNEE_FIVE.map((principle, index) => (
            <Link
              key={principle.id}
              to={principle.to}
              className={`group rounded-xl border border-border bg-secondary/40 p-8 lg:p-10 transition-colors hover:border-primary/40 hover:bg-secondary/60 ${
                index === 3 ? "lg:col-start-1" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <principle.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <p className="font-sans text-[0.7rem] tracking-[0.2em] uppercase text-primary/70 mb-3">
                {principle.label}
              </p>
              <h3 className="font-serif text-2xl text-foreground mb-8 leading-snug">
                {principle.proposition}
              </h3>
              <span className="inline-flex items-center gap-2 font-sans text-sm text-primary">
                Explore
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmKneeFive;

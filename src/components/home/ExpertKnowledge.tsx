/**
 * Expert Knowledge / Wider Ecosystem - restrained authority section.
 */

import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    label: "Deeper knee education",
    name: "SportsHealing Knee Passport",
    url: "https://www.sportshealing.com/",
  },
  {
    label: "Assessment and monitoring",
    name: "MyKneeScore",
    url: "https://mykneescore.com/",
  },
  {
    label: "Imaging and investigation",
    name: "MyKneeScan",
    url: "https://mykneescan.com/",
  },
  {
    label: "Meet the clinical lead",
    name: "Mr Chinmay Gupte",
    url: "https://www.chinmaygupte.com/",
  },
];

const ExpertKnowledge = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container px-6">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
          Built on specialist knee knowledge
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
          When you need more than wellness guidance
        </h2>
        <p className="font-sans text-muted-foreground leading-relaxed">
          OmKneeHealth is informed by senior clinical and scientific expertise, and sits alongside
          specialist services for assessment, investigation and care.
        </p>
      </div>

      <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {destinations.map((d) => (
          <li key={d.url}>
            <a
              href={d.url}
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-secondary/40 px-6 py-5 transition-colors hover:border-primary/40"
            >
              <span>
                <span className="block font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground mb-1">
                  {d.label}
                </span>
                <span className="font-sans text-sm text-foreground">{d.name}</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ExpertKnowledge;

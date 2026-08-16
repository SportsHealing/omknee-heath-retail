/**
 * The wider knee ecosystem - reusable "Go deeper" component.
 * Used on the homepage, About, Diagnose and Treat. Copy is taken from the
 * approved master website copy deck.
 */

import { ArrowUpRight } from "lucide-react";
import { trackEcosystemTransfer, type EcosystemDestination } from "@/lib/analytics";

interface Destination {
  role: string;
  copy: string;
  name: string;
  url: string;
  id: EcosystemDestination;
}

export const ECOSYSTEM_DESTINATIONS: Destination[] = [
  {
    role: "Check",
    copy: "Measure and monitor your knee with MyKneeScore.",
    name: "MyKneeScore",
    url: "https://mykneescore.com/",
    id: "mykneescore",
  },
  {
    role: "Understand",
    copy: "Explore detailed knee anatomy, biomechanics and the Knee Passport at SportsHealing.",
    name: "SportsHealing",
    url: "https://www.sportshealing.com/",
    id: "sportshealing",
  },
  {
    role: "Scan",
    copy: "Learn about knee imaging through MyKneeScan.",
    name: "MyKneeScan",
    url: "https://mykneescan.com/",
    id: "mykneescan",
  },
  {
    role: "Specialist care",
    copy: "Explore specialist assessment, rehabilitation and treatment at SportsHealing.",
    name: "SportsHealing",
    url: "https://www.sportshealing.com/",
    id: "sportshealing",
  },
  {
    role: "Clinical expertise",
    copy: "Explore specialist knee practice and surgical care at ChinmayGupte.com.",
    name: "ChinmayGupte.com",
    url: "https://www.chinmaygupte.com/",
    id: "chinmaygupte",
  },
];

interface KneeEcosystemProps {
  heading?: string;
  intro?: string;
  className?: string;
}

const KneeEcosystem = ({
  heading = "Go deeper.",
  intro = "OmKneeHealth is part of a wider knee health ecosystem.",
  className = "py-24 lg:py-32 bg-background",
}: KneeEcosystemProps) => (
  <section id="knee-ecosystem" className={`${className} scroll-mt-28`}>
    <div className="container px-6">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
          The wider knee ecosystem
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">{heading}</h2>
        <p className="font-sans text-muted-foreground leading-relaxed">{intro}</p>
      </div>

      <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {ECOSYSTEM_DESTINATIONS.map((d) => (
          <li key={`${d.role}-${d.url}`}>
            <a
              href={d.url}
              target="_blank"
              rel="noopener"
              onClick={() => trackEcosystemTransfer(d.id)}
              className="group h-full flex items-start justify-between gap-4 rounded-xl border border-border bg-secondary/40 px-6 py-5 transition-colors hover:border-primary/40"
            >
              <span>
                <span className="block font-sans text-[0.7rem] tracking-[0.22em] uppercase text-primary/70 mb-2">
                  {d.role}
                </span>
                <span className="block font-sans text-sm text-muted-foreground leading-relaxed">
                  {d.copy}
                </span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-1" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>

      <p className="text-center font-sans text-sm text-primary mt-10">
        Continue your knee journey.
      </p>
    </div>
  </section>
);

export default KneeEcosystem;

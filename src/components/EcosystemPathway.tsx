/**
 * EcosystemPathway - a single, elegant "next destination" card.
 * Used to hand the reader to the right specialist site in the
 * OmKneeHealth ecosystem. One per page, only where contextually relevant.
 */

import { ArrowUpRight } from "lucide-react";
import { trackEcosystemTransfer } from "@/lib/analytics";

export type EcosystemSite = "sportshealing" | "mykneescore" | "mykneescan" | "chinmaygupte";

const SITES: Record<EcosystemSite, { name: string; url: string; role: string }> = {
  sportshealing: {
    name: "SportsHealing",
    url: "https://www.sportshealing.com/",
    role: "Deeper knee education, treatment and rehabilitation",
  },
  mykneescore: {
    name: "MyKneeScore",
    url: "https://mykneescore.com/",
    role: "Knee assessment, monitoring and your longitudinal Knee Score",
  },
  mykneescan: {
    name: "MyKneeScan",
    url: "https://mykneescan.com/",
    role: "Knee imaging and diagnostic investigation",
  },
  chinmaygupte: {
    name: "Mr Chinmay Gupte",
    url: "https://www.chinmaygupte.com/",
    role: "Specialist clinician information and consultation",
  },
};

interface EcosystemPathwayProps {
  site: EcosystemSite;
  eyebrow?: string;
  title: string;
  description: string;
  cta?: string;
  href?: string;
}

const EcosystemPathway = ({ site, eyebrow, title, description, cta, href }: EcosystemPathwayProps) => {
  const target = SITES[site];

  return (
    <section className="py-16">
      <div className="container px-6">
        <a
          href={href ?? target.url}
          target="_blank"
          rel="noopener"
          onClick={() => trackEcosystemTransfer(site)}
          className="group block max-w-3xl mx-auto rounded-2xl border border-border bg-secondary/40 p-8 md:p-10 transition-colors hover:border-primary/40 hover:bg-secondary/60 min-h-[44px]"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
            {eyebrow ?? `Continue on ${target.name}`}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{title}</h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">{description}</p>
          <span className="inline-flex items-center gap-2 font-sans text-sm text-primary">
            {cta ?? `Go to ${target.name}`}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <p className="font-sans text-xs text-muted-foreground/70 mt-4">{target.role}</p>
        </a>
      </div>
    </section>
  );
};

export default EcosystemPathway;

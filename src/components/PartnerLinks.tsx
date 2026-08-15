/**
 * PartnerLinks - contextual signposting to the clinical partner network
 * (SportsHealing, Mr Chinmay Gupte, MyKneeScore).
 *
 * Links are descriptive, followed, and open in a new tab so the reader keeps
 * their place on this page.
 */

import { ArrowUpRight } from "lucide-react";
import { PARTNERS, PARTNER_LINKS, type PartnerTopic } from "@/lib/partners";

interface PartnerLinksProps {
  /** Which curated set of deep links to show. */
  topics: PartnerTopic[];
  title?: string;
  intro?: string;
}

const PartnerLinks = ({
  topics,
  title = "Go deeper with our clinical partners",
  intro = "OmKneeHealth covers everyday knee health and wellness. For clinical detail, imaging and specialist opinion, these partner resources pick up where this page stops.",
}: PartnerLinksProps) => {
  const links = topics
    .flatMap((topic) => PARTNER_LINKS[topic])
    .filter((link, i, arr) => arr.findIndex((l) => l.href === link.href) === i);

  return (
    <section className="container mx-auto px-6 pb-16">
      <div className="max-w-4xl mx-auto rounded-xl border border-border bg-secondary/30 p-7 md:p-8">
        <h2 className="font-serif text-xl text-foreground mb-2">{title}</h2>
        <p className="font-sans text-sm text-muted-foreground mb-6">{intro}</p>

        <ul className="grid sm:grid-cols-2 gap-3">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener"
                className="group flex h-full min-h-[44px] flex-col gap-1 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/50"
              >
                <span className="flex items-start justify-between gap-3 font-sans text-sm font-medium text-foreground">
                  {link.label}
                  <ArrowUpRight
                    className="w-4 h-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
                <span className="font-sans text-xs text-muted-foreground">{link.blurb}</span>
                <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-primary/70 mt-1">
                  {PARTNERS[link.partner].domain}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="font-sans text-xs text-muted-foreground mt-6">
          Partner sites open in a new tab. See the full{" "}
          <a href="/partners" className="text-primary underline underline-offset-4">
            clinical partner network
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default PartnerLinks;

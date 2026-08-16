/**
 * 07 TREAT - Find the right care at the right time.
 *
 * Introduces the treatment continuum only. No supplement promotion, and no
 * suggestion that a supplement is a treatment. Depth belongs to SportsHealing
 * and ChinmayGupte.com.
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  trackTreatPathway,
  trackEcosystemTransfer,
  type TreatPathway,
  type EcosystemDestination,
} from "@/lib/analytics";

interface Stage {
  id: TreatPathway;
  label: string;
  copy: string;
  links: { name: string; url: string; key: EcosystemDestination }[];
}

const SH = { name: "SportsHealing", url: "https://www.sportshealing.com/", key: "sportshealing" as const };
const CG = { name: "Mr Chinmay Gupte", url: "https://www.chinmaygupte.com/", key: "chinmaygupte" as const };

const stages: Stage[] = [
  {
    id: "manage",
    label: "Manage",
    copy: "Adjusting movement, activity and load is where most knee care begins, and it is often enough on its own.",
    links: [],
  },
  {
    id: "rehabilitate",
    label: "Rehabilitate",
    copy: "Physiotherapy, strength and conditioning, and a structured return to the activities that matter to you.",
    links: [SH],
  },
  {
    id: "support",
    label: "Support",
    copy: "Appropriate braces, supports and practical recovery aids, used within the purpose the manufacturer intends and alongside professional advice.",
    links: [],
  },
  {
    id: "intervene",
    label: "Intervene",
    copy: "Injections and selected procedures, where a clinician judges them appropriate for your particular knee.",
    links: [SH],
  },
  {
    id: "surgery",
    label: "Surgery",
    copy: "Considered where it is clinically appropriate, and always as one option among several rather than an inevitability.",
    links: [SH, CG],
  },
  {
    id: "recover",
    label: "Recover",
    copy: "Rehabilitation and a progressive return to movement. Recovery is an active phase, not a waiting period.",
    links: [SH],
  },
];

const Treat = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Treat: Find the Right Care at the Right Time | OmKnee Seven"
      description="Treatment does not necessarily mean surgery. An introduction to the knee treatment continuum: manage, rehabilitate, support, intervene, surgery, recover and return to movement."
      canonicalPath="/treat"
      keywords="knee treatment options, knee rehabilitation, knee injections, knee surgery, recovery after knee surgery"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Look After Your Knees", url: "https://omkneehealth.com/knee-health" },
        { name: "Treat", url: "https://omkneehealth.com/treat" },
      ]}
    />
    <WebPageSchema
      name="Treat - The OmKnee Seven"
      description="An introduction to the knee treatment continuum and where specialist care belongs."
      url="https://omkneehealth.com/treat"
      type="WebPage"
    />
    <Header />
    <main>
      <section className="pt-32 pb-16 lg:pt-56 lg:pb-20">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
              07 &nbsp;Treat
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Find the right care at the right time
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-4">
              Treatment does not necessarily mean surgery.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed">
              Care for a knee usually moves along a continuum, and most people never reach the far
              end of it. Knowing the shape of that continuum makes any conversation with a
              clinician easier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-16">
        <div className="container px-6">
          <ol className="max-w-3xl mx-auto">
            {stages.map((stage, index) => (
              <li key={stage.id} className="relative flex gap-5 md:gap-8 px-1 md:px-4 py-6">
                <span className="shrink-0 flex flex-col items-center">
                  <span className="font-serif text-xl md:text-2xl text-primary/70 tabular-nums leading-none">
                    {`0${index + 1}`}
                  </span>
                  {index < stages.length - 1 && (
                    <span className="mt-4 w-px flex-1 bg-border/70" aria-hidden="true" />
                  )}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                    {stage.label}
                  </h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {stage.copy}
                  </p>
                  {stage.links.length > 0 && (
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                      {stage.links.map((link) => (
                        <a
                          key={link.key}
                          href={link.url}
                          target="_blank"
                          rel="noopener"
                          onClick={() => {
                            trackTreatPathway(stage.id);
                            trackEcosystemTransfer(link.key);
                          }}
                          className="group inline-flex items-center gap-2 font-sans text-sm text-primary min-h-[44px]"
                        >
                          {link.name}
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-24">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-secondary/40 p-8 md:p-10 text-center">
            <p className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-primary/70 mb-4">
              07 &rarr; 01 &nbsp;Return to wellness
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Treatment is not the endpoint
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
              Whatever route a knee takes, the destination is the same: getting back to moving
              well, and looking after it from there.
            </p>
            <Link
              to="/wellness"
              className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
            >
              Back to Wellness
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="font-sans text-xs text-muted-foreground/70 mt-8 max-w-3xl mx-auto text-center leading-relaxed">
            General information only. It is not medical advice and does not replace assessment or
            treatment by a qualified healthcare professional.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Treat;

/**
 * Partners - hub page for the clinical partner network.
 * A single, crawlable destination that explains each partner and links deeply
 * into the pages visitors are most likely to need next.
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Stethoscope, ScanLine, HeartPulse } from "lucide-react";
import { PARTNERS, PARTNER_LINKS, type PartnerKey } from "@/lib/partners";

const allLinks = Object.values(PARTNER_LINKS)
  .flat()
  .filter((link, i, arr) => arr.findIndex((l) => l.href === link.href) === i);

const partnerOrder: { key: PartnerKey; icon: typeof Stethoscope }[] = [
  { key: "sportshealing", icon: HeartPulse },
  { key: "chinmaygupte", icon: Stethoscope },
  { key: "mykneescore", icon: ScanLine },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Clinical Partners: Knee Specialists, Surgery and MRI"
        description="Our clinical partner network for the knee: SportsHealing musculoskeletal care, consultant knee surgeon Mr Chinmay Gupte, and knee assessment and imaging at MyKneeScore."
        canonicalPath="/partners"
        keywords="knee specialist london, knee surgeon london, same day knee MRI, sportshealing, chinmay gupte, mykneescore"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Clinical Partners", url: "/partners" },
        ]}
      />
      <WebPageSchema
        name="Clinical Partners"
        description="The clinical partner network behind OmKneeHealth: musculoskeletal care, consultant knee surgery and same-day knee MRI."
        url="/partners"
      />
      <Header />

      <main>
        <section className="container mx-auto px-6 pt-32 pb-12">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              The Network
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Our clinical partners
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              OmKneeHealth is about everyday knee health and wellness: how you move, eat, train and
              recover. When a knee needs assessment, imaging or a specialist opinion, that is a
              clinical question — and these are the partners we send people to.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-8">
          <div className="max-w-4xl mx-auto grid gap-6">
            {partnerOrder.map(({ key, icon: Icon }) => {
              const partner = PARTNERS[key];
              const links = allLinks.filter((l) => l.partner === key);

              return (
                <article
                  key={key}
                  id={key}
                  className="scroll-mt-32 rounded-xl border border-border bg-card p-7 md:p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="font-serif text-2xl text-foreground">{partner.name}</h2>
                      <p className="font-sans text-xs uppercase tracking-[0.12em] text-primary/80 mt-1">
                        {partner.role}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                    Popular pages
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                    {links.map((link) => (
                      <li key={link.href + link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener"
                          className="flex min-h-[44px] items-center gap-2 rounded-lg border border-border px-4 py-3 font-sans text-sm text-foreground transition-colors hover:border-primary/50"
                        >
                          <span className="flex-1">{link.label}</span>
                          <ArrowUpRight className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>

                  <Button asChild>
                    <a href={partner.url} target="_blank" rel="noopener">
                      Visit {partner.domain}
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="max-w-3xl mx-auto rounded-xl border border-border bg-muted/30 p-7 md:p-8">
            <h2 className="font-serif text-xl text-foreground mb-3">Which one do I need?</h2>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Understanding your knee</strong> — start with the
                Knee Passport library at{" "}
                <a
                  href="https://www.sportshealing.com/know-your-knee/"
                  target="_blank"
                  rel="noopener"
                  className="text-primary underline underline-offset-4"
                >
                  sportshealing.com
                </a>
                .
              </li>
              <li>
                <strong className="text-foreground">Symptoms you cannot place</strong> — the{" "}
                <a
                  href="https://mykneescore.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-primary underline underline-offset-4"
                >
                  60-second knee triage test
                </a>{" "}
                gives a red–amber–green urgency score, or use our own{" "}
                <Link to="/assessment" className="text-primary underline underline-offset-4">
                  knee assessment
                </Link>
                .
              </li>
              <li>
                <strong className="text-foreground">A scan has been suggested</strong> —{" "}
                <a
                  href="https://mykneescore.com/booking"
                  target="_blank"
                  rel="noopener"
                  className="text-primary underline underline-offset-4"
                >
                  same-day knee MRI in London
                </a>{" "}
                with an expert report.
              </li>
              <li>
                <strong className="text-foreground">A specialist opinion or surgery</strong> —{" "}
                <a
                  href="https://www.chinmaygupte.com/knee-treatments/knee-surgeon-london/"
                  target="_blank"
                  rel="noopener"
                  className="text-primary underline underline-offset-4"
                >
                  consultant knee surgeon in London
                </a>
                .
              </li>
            </ul>
            <p className="font-sans text-xs text-muted-foreground mt-6">
              If you have a locked knee, fever, or cannot bear weight, seek urgent medical care
              rather than booking online. Nothing on this page is medical advice.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;

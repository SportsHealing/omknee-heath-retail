import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import EcosystemPathway from "@/components/EcosystemPathway";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { track, trackEcosystemTransfer } from "@/lib/analytics";

const results = [
  {
    band: "Green",
    copy: "Continue looking after your knees.",
    detail: "Explore Understand, Nourish and Load.",
    links: [
      { label: "Understand", to: "/understand" },
      { label: "Nourish", to: "/nourish" },
      { label: "Load", to: "/load" },
    ],
  },
  {
    band: "Amber",
    copy: "There may be areas worth paying closer attention to.",
    detail:
      "Review the relevant OmKnee Five areas and consider whether further assessment may be useful if symptoms persist or are affecting function.",
    links: [
      { label: "Look After Your Knees", to: "/knee-health" },
      { label: "Diagnose", to: "/diagnose" },
    ],
  },
  {
    band: "Red",
    copy: "Your responses may indicate that professional assessment is worth considering.",
    detail: "Explore Diagnose to understand what may happen next.",
    links: [{ label: "Diagnose", to: "/diagnose" }],
  },
];

const limits = [
  "It does not diagnose a knee condition.",
  "It does not determine whether you need an MRI.",
  "It does not recommend an injection or operation.",
  "It does not replace assessment by an appropriately qualified healthcare professional.",
];

const KneeScore = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Knee Score | How Is Your Knee Today?"
      description="The Knee Score is a structured self assessment of how your knee currently feels and functions, and a reference point for monitoring change over time."
      canonicalPath="/knee-score"
      keywords="knee score, knee self assessment, monitor knee health"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Knee Score", url: "https://omkneehealth.com/knee-score" },
      ]}
    />
    <WebPageSchema
      name="Knee Score"
      description="A structured self assessment of how your knee currently feels and functions."
      url="https://omkneehealth.com/knee-score"
      type="WebPage"
    />
    <Header />
    <main>
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-24 bg-secondary/30">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
              Knee Score
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8">
              How is your knee today?
            </h1>
            <div className="space-y-5 font-sans text-lg text-muted-foreground leading-relaxed mb-10 text-left sm:text-center">
              <p>
                The Knee Score provides a simple way to reflect on how your knee currently feels and
                functions.
              </p>
              <p>It is designed to give you a structured snapshot rather than a diagnosis.</p>
            </div>
            <Button size="lg" className="px-10 py-6 text-sm font-sans font-medium tracking-wide" asChild>
              <a
                href="https://mykneescore.com/"
                target="_blank"
                rel="noopener"
                onClick={() => {
                  track("knee_score_click", { location: "knee-score-page" });
                  trackEcosystemTransfer("mykneescore");
                }}
              >
                Take the Knee Score
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <p className="font-sans text-xs text-muted-foreground mt-6">Destination: MyKneeScore</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Why take a Knee Score?
            </h2>
            <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>Knee health is not represented by a scan alone.</p>
              <p>
                How your knee affects walking, stairs, sport, work, confidence and everyday life also
                matters.
              </p>
              <p>
                A score can help organise this information and provide a reference point for
                monitoring change over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              What happens afterwards?
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-10">
              Your result can help direct you towards relevant information within the OmKnee Five.
            </p>

            <div className="space-y-5">
              {results.map((r) => (
                <article key={r.band} className="rounded-xl border border-border bg-secondary/30 p-7">
                  <h3 className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-primary/80 mb-3">
                    {r.band}
                  </h3>
                  <p className="font-serif text-xl text-foreground mb-3">{r.copy}</p>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">
                    {r.detail}
                  </p>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {r.links.map((l) => (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
                        >
                          {l.label}
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-muted/40 p-8 md:p-10">
            <h2 className="font-serif text-2xl text-foreground mb-6">What the Knee Score does not do</h2>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground leading-relaxed list-disc pl-5">
              {limits.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <EcosystemPathway
        site="mykneescore"
        title="Take the Knee Score on MyKneeScore"
        description="Complete the questionnaire, receive your score and keep a record you can return to over time."
        cta="Take the Knee Score"
      />
    </main>
    <Footer />
  </div>
);

export default KneeScore;

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import EcosystemPathway from "@/components/EcosystemPathway";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LineChart, Timer, Repeat, ShieldCheck } from "lucide-react";

const steps = [
  { icon: Timer, title: "Answer a short set of questions", copy: "A few minutes on how your knees feel, move and hold up through your week." },
  { icon: LineChart, title: "Receive your Knee Score", copy: "A single, clear number that reflects comfort, function and confidence in movement." },
  { icon: Repeat, title: "Re-score over time", copy: "Repeat it every few weeks and watch the direction of travel, not just today's snapshot." },
  { icon: ShieldCheck, title: "Know your next step", copy: "Your score points you towards self-care, deeper education or a clinical opinion." },
];

const KneeScore = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Knee Score: Measure & Track Your Knee Health"
      description="Understand the Knee Score — a simple way to measure how your knees feel and function, and to track change over time with MyKneeScore."
      canonicalPath="/knee-score"
      keywords="knee score, knee assessment, track knee health, knee health measurement"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Knee Score", url: "https://omkneehealth.com/knee-score" },
      ]}
    />
    <WebPageSchema
      name="Knee Score - OmKneeHealth"
      description="A premium introduction to the Knee Score and how to track knee health over time."
      url="https://omkneehealth.com/knee-score"
      type="WebPage"
    />
    <Header />
    <main>
      <section className="pt-32 pb-20 lg:pt-56 lg:pb-24 bg-secondary/30">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
              Measure What Matters
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Your Knee Score
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-4">
              What gets measured gets looked after. The Knee Score turns how your knees
              feel and function into one number you can follow over months and years.
            </p>
            <p className="font-sans text-sm text-muted-foreground/80 mb-10">
              The questionnaire, scoring and your longitudinal record live with MyKneeScore.
            </p>
            <Button size="lg" className="px-10 py-6 text-sm font-sans font-medium tracking-wide" asChild>
              <a href="https://mykneescore.com/" target="_blank" rel="noopener">
                Get your Knee Score
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <article key={step.title} className="rounded-xl border border-border bg-background p-8">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-xl text-foreground mb-2">{step.title}</h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-muted/40 p-8 md:p-10">
            <h2 className="font-serif text-2xl text-foreground mb-3">Why score at all?</h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              Knees change slowly. Week to week it is hard to tell whether the strength work,
              the walking, the sleep and the food are adding up. A repeated score makes the
              trend visible, and a trend is far more useful than a single bad morning.
            </p>
            <p className="font-sans text-xs text-muted-foreground">
              The Knee Score is an educational and self-monitoring tool. It is not a diagnosis.
              If you have persistent swelling, locking, giving way or severe night pain, speak to
              a GP or knee specialist. In an emergency, call 999.
            </p>
          </div>
        </div>
      </section>

      <EcosystemPathway
        site="mykneescore"
        title="Start your Knee Score on MyKneeScore"
        description="Complete the full questionnaire, receive your score and keep a longitudinal record you can return to."
        cta="Take the assessment"
      />
    </main>
    <Footer />
  </div>
);

export default KneeScore;

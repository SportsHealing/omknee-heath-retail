import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OMKNEE_FIVE, type OmKneePillar } from "@/lib/omkneeFive";
import { trackOmKneeFiveView, trackPillarSelect } from "@/lib/analytics";

interface OmKneeFiveProps {
  as?: "h1" | "h2";
  eyebrow?: string;
  heading?: string;
  intro?: string;
}

const PillarCard = ({ pillar }: { pillar: OmKneePillar }) => (
  <li className="relative h-full">
    <Link
      to={pillar.to}
      onClick={() => trackPillarSelect(pillar.id)}
      className="group flex h-full flex-col border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-secondary font-sans text-xs font-semibold tabular-nums text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {pillar.number}
      </span>
      <pillar.icon className="mb-4 h-5 w-5 text-primary/70" aria-hidden="true" />
      <span className="font-serif text-2xl text-foreground">{pillar.name}</span>
      <span className="mt-2 block font-sans text-sm leading-relaxed text-muted-foreground">
        {pillar.shortDescription}
      </span>
      <span className="mt-auto inline-flex min-h-[44px] items-center gap-2 pt-6 font-sans text-sm text-primary">
        {pillar.ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  </li>
);

const OmKneeFive = ({
  as = "h2",
  eyebrow = "The OmKnee Five",
  heading = "A clear path through knee health.",
  intro = "Five connected areas bring together what your knee is, how you look after the person carrying it, what you ask it to do, and where to turn when something changes.",
}: OmKneeFiveProps) => {
  const Heading = as;
  const sectionRef = useRef<HTMLElement>(null);
  const seen = useRef(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && !seen.current) {
        seen.current = true;
        trackOmKneeFiveView();
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="omknee-five" ref={sectionRef} className="bg-secondary/45 py-24 lg:py-32 scroll-mt-28">
      <div className="container px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.2em] text-primary/80">{eyebrow}</p>
          <Heading className="mb-6 font-serif text-4xl leading-tight text-foreground md:text-5xl">{heading}</Heading>
          <p className="font-sans text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <span className="absolute left-[5%] right-[5%] top-[22px] hidden h-px bg-border lg:block" aria-hidden="true" />
          <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {OMKNEE_FIVE.map((pillar) => <PillarCard key={pillar.id} pillar={pillar} />)}
          </ol>
        </div>

        <div className="mx-auto mt-14 max-w-3xl bg-primary px-8 py-10 text-center text-primary-foreground md:px-12">
          <h3 className="font-serif text-3xl">Where are your knees today?</h3>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-primary-foreground/80">
            The Knee Score offers a structured snapshot of how your knees currently feel and function. It does not provide a diagnosis.
          </p>
          <Link to="/knee-score" className="mt-7 inline-flex min-h-[44px] items-center gap-2 bg-secondary px-6 py-3 font-sans text-sm font-medium text-secondary-foreground transition-colors hover:bg-background">
            Take the Knee Score
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OmKneeFive;
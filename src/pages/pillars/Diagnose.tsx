/**
 * 06 DIAGNOSE - Understand what is happening.
 *
 * Education and signposting only. This page must never attempt to diagnose,
 * recommend investigations or promote products.
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { ArrowUpRight, Activity, ClipboardList, ScanLine, Puzzle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  trackDiagnosePathway,
  trackEcosystemTransfer,
  type DiagnosePathway,
  type EcosystemDestination,
} from "@/lib/analytics";

interface Step {
  id: DiagnosePathway;
  label: string;
  title: string;
  copy: string;
  icon: typeof Activity;
  destination: { name: string; url: string; key: EcosystemDestination; note: string };
}

const steps: Step[] = [
  {
    id: "check",
    label: "Check",
    title: "Understand and monitor how your knee is doing",
    copy: "A structured check gives you a consistent way to describe your knee and to notice change over time. It is a measure of function, not a diagnosis.",
    icon: Activity,
    destination: {
      name: "MyKneeScore",
      url: "https://mykneescore.com/",
      key: "mykneescore",
      note: "Knee assessment, measurement and longitudinal monitoring",
    },
  },
  {
    id: "assess",
    label: "Assess",
    title: "Clinical history, examination, movement and function",
    copy: "A clinician listens to your story, examines the knee and watches how you move. Much of what matters is established here, before any scan is considered.",
    icon: ClipboardList,
    destination: {
      name: "SportsHealing",
      url: "https://www.sportshealing.com/",
      key: "sportshealing",
      note: "Clinical assessment, rehabilitation and specialist care",
    },
  },
  {
    id: "scan",
    label: "Scan",
    title: "The role of imaging",
    copy: "X-ray, MRI and ultrasound each answer different questions. Imaging is used to add information to a clinical picture, not to replace it, and is not always needed.",
    icon: ScanLine,
    destination: {
      name: "MyKneeScan",
      url: "https://mykneescan.com/",
      key: "mykneescan",
      note: "Knee imaging and diagnostic investigation",
    },
  },
  {
    id: "understand",
    label: "Understand",
    title: "How a diagnosis is actually reached",
    copy: "Symptoms, history, examination, function and appropriate investigations are brought together by a clinician. No single number, scan or questionnaire does this on its own.",
    icon: Puzzle,
    destination: {
      name: "SportsHealing",
      url: "https://www.sportshealing.com/",
      key: "sportshealing",
      note: "Specialist clinical care and detailed knee education",
    },
  },
];

const seekHelp = [
  "Your knee gives way, locks or will not straighten.",
  "Swelling appears quickly, or keeps returning.",
  "Discomfort is changing how you walk, sleep or work.",
  "Something has not settled over a few weeks of sensible activity.",
  "You are simply unsure, and would like a professional opinion.",
];

const Diagnose = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Diagnose: Understand What Is Happening | OmKnee Seven"
      description="How knees are checked, clinically assessed and investigated, and where each step belongs. Education and signposting for the diagnostic pathway, not a diagnosis."
      canonicalPath="/diagnose"
      keywords="knee assessment, knee diagnosis pathway, knee MRI, knee X-ray, when to see someone about knee pain"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "Look After Your Knees", url: "https://omkneehealth.com/knee-health" },
        { name: "Diagnose", url: "https://omkneehealth.com/diagnose" },
      ]}
    />
    <WebPageSchema
      name="Diagnose - The OmKnee Seven"
      description="An introduction to the knee diagnostic pathway: check, assess, scan and understand."
      url="https://omkneehealth.com/diagnose"
      type="WebPage"
    />
    <Header />
    <main>
      <section className="pt-32 pb-16 lg:pt-56 lg:pb-20">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">
              06 &nbsp;Diagnose
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Understand what is happening
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Most knees are looked after through everyday movement, strength and sensible
              progression. Sometimes something changes, and it helps to know how knees are
              assessed and who does what.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-secondary/40 p-8">
            <h2 className="font-serif text-2xl text-foreground mb-4">When should I seek help?</h2>
            <ul className="space-y-3">
              {seekHelp.map((item) => (
                <li key={item} className="font-sans text-sm text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-primary" aria-hidden="true">&middot;</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-sans text-xs text-muted-foreground/70 mt-6 leading-relaxed">
              This page is general information and is not a diagnosis. If you are concerned about
              your knee, speak to a qualified healthcare professional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Four steps, four destinations
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed">
              OmKneeHealth explains the journey. The specialist services provide the depth.
            </p>
          </div>

          <ol className="max-w-3xl mx-auto space-y-5">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className="rounded-2xl border border-border bg-secondary/30 p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="font-sans text-[0.7rem] tracking-[0.22em] uppercase text-primary/70">
                    {`0${index + 1} · ${step.label}`}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                  {step.copy}
                </p>
                <a
                  href={step.destination.url}
                  target="_blank"
                  rel="noopener"
                  onClick={() => {
                    trackDiagnosePathway(step.id);
                    trackEcosystemTransfer(step.destination.key);
                  }}
                  className="group inline-flex items-center gap-2 font-sans text-sm text-primary min-h-[44px]"
                >
                  Continue on {step.destination.name}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="font-sans text-xs text-muted-foreground/70 mt-2">
                  {step.destination.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-24">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
              Whatever you learn, the everyday foundations still matter.
            </p>
            <Link
              to="/knee-health"
              className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
            >
              Back to the OmKnee Seven
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Diagnose;

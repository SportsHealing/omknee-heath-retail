/**
 * Improving Knee Biomechanics - pillar page.
 * Evidence-informed, plain-English. Educational only, no medicinal claims.
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import PartnerLinks from "@/components/PartnerLinks";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import FAQSchema from "@/components/FAQSchema";
import ReferenceList, { type Reference } from "@/components/ReferenceList";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  ArrowRight,
  Dumbbell,
  Move3d,
  Compass,
  Footprints,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";
import biomechanicsInfographic from "@/assets/infographic-biomechanics.jpg";

const topics = [
  {
    icon: Dumbbell,
    title: "Strong quadriceps: your knee's shock absorber",
    plain:
      "The muscles on the front of your thigh slow the knee down every time you sit, land or walk downstairs. When they are weak, more of that force is taken by the joint surfaces instead.",
    evidence:
      "A meta-analysis pooling data from 46,819 adults found that weak knee extensor (quadriceps) muscles are a risk factor for developing knee osteoarthritis, particularly in women [1]. Cochrane's review of 54 trials found that land-based exercise produces moderate improvements in knee pain and physical function [2].",
    actions: [
      "Two strength sessions a week is the evidence-backed minimum",
      "Sit-to-stand from a chair, step-ups, wall sits and controlled leg extensions",
      "Work to a hard-but-manageable effort, roughly 8–15 repetitions",
      "Progress by adding load or repetitions every couple of weeks",
    ],
  },
  {
    icon: Compass,
    title: "Hips and glutes control where the knee goes",
    plain:
      "Your knee is a hinge caught between your hip and your foot. If the hip lets the thigh roll inwards, the knee collapses inward with it — the classic 'knee cave' seen when squatting or landing.",
    evidence:
      "Neuromuscular and hip-focused training changes frontal-plane knee mechanics and is a core component of the programmes shown to reduce knee injury rates [5]. Reviews of gait and movement retraining show that how load is distributed at the knee is modifiable with training [3].",
    actions: [
      "Add side-lying leg raises, banded side-steps, bridges and single-leg work",
      "Film yourself squatting from the front — the kneecap should track over the middle toes",
      "Cue 'knees out, weight through the whole foot'",
      "Balance work on one leg, 30–60 seconds, builds the control that strength alone misses",
    ],
  },
  {
    icon: Footprints,
    title: "How you walk: small changes, real load differences",
    plain:
      "Walking speed, stride width, foot angle and even how upright you stand all change where force lands inside the knee. These are trainable habits, not fixed traits.",
    evidence:
      "A systematic review and meta-analysis of gait retraining in hip and knee osteoarthritis found that modifying gait can change knee joint loading indicators and improve symptoms, though effects vary between individuals and strategies [3].",
    actions: [
      "Walk tall with a relaxed, slightly wider stride rather than a narrow catwalk line",
      "Shorten your stride slightly on downhills and stairs",
      "Use a handrail on stairs and lead with the stronger leg going up",
      "Ask a physiotherapist before deliberately altering your walking pattern",
    ],
  },
  {
    icon: Move3d,
    title: "Range of movement and the pump that feeds cartilage",
    plain:
      "Cartilage has no blood supply. It is fed by synovial fluid squeezed in and out as the knee bends and straightens under load. A knee that never reaches full bend or full straight is a poorly fed knee.",
    evidence:
      "Restoring full knee extension is a standard early goal after knee injury and surgery, and extension deficits are recognised as a marker of poorer outcome in the rehabilitation literature [6].",
    actions: [
      "Every day: gently reach full straight and full comfortable bend, several times",
      "Heel slides, seated knee bends and standing hamstring stretches take five minutes",
      "Move within comfort — stretching should feel like tension, not pain",
      "If you cannot fully straighten the knee, get it assessed",
    ],
  },
  {
    icon: RefreshCw,
    title: "Tendon and fascia length: strong and stretched",
    plain:
      "Tight quadriceps, hamstrings and calves pull on the knee all day. Strong and flexible beats strong and stiff.",
    evidence:
      "Tendon tissue responds to progressive mechanical loading, and the combination of strengthening through range with mobility work is the approach used in the most successful clinical programmes [4].",
    actions: [
      "Stretch calves, hamstrings, quadriceps and hip flexors after activity, 30 seconds each",
      "Prefer loaded stretching — slow full-range squats, split squats, calf raises off a step",
      "Foam roll if it helps you move more comfortably, as a warm-up rather than a treatment",
      "Consistency across the week beats a single long session",
    ],
  },
];

const checks = [
  "Single-leg stand: can you hold 30 seconds with the pelvis level?",
  "Sit-to-stand: five repetitions from a chair without using your hands",
  "Step-down: lower slowly from a step without the knee falling inward",
  "Full extension: can the back of your knee flatten to the floor when lying?",
  "Heel to bottom: can you bend the knee as far as the other side?",
];

const references: Reference[] = [
  {
    n: 1,
    text: "Øiestad BE, Juhl CB, Culvenor AG, Berg B, Thorlund JB. Knee extensor muscle weakness is a risk factor for the development of knee osteoarthritis: an updated systematic review and meta-analysis including 46 819 men and women. British Journal of Sports Medicine. 2022;56(6):349–355.",
    url: "https://doi.org/10.1136/bjsports-2021-104861",
  },
  {
    n: 2,
    text: "Fransen M, McConnell S, Harmer AR, Van der Esch M, Simic M, Bennell KL. Exercise for osteoarthritis of the knee. Cochrane Database of Systematic Reviews. 2015;(1):CD004376.",
    url: "https://doi.org/10.1002/14651858.CD004376.pub3",
  },
  {
    n: 3,
    text: "Rynne R, Le Tong G, Cheung RTH, Constantinou M. Effectiveness of gait retraining interventions in individuals with hip or knee osteoarthritis: a systematic review and meta-analysis. Gait & Posture. 2022;95:164–175.",
    url: "https://doi.org/10.1016/j.gaitpost.2022.04.013",
  },
  {
    n: 4,
    text: "Breda SJ, Oei EHG, Zwerver J, et al. Effectiveness of progressive tendon-loading exercise therapy in patients with patellar tendinopathy: a randomised clinical trial. British Journal of Sports Medicine. 2021;55(9):501–509.",
    url: "https://doi.org/10.1136/bjsports-2020-103403",
  },
  {
    n: 5,
    text: "Webster KE, Hewett TE. Meta-analysis of meta-analyses of anterior cruciate ligament injury reduction training programs. Journal of Orthopaedic Research. 2018;36(10):2696–2708.",
    url: "https://doi.org/10.1002/jor.24043",
  },
  {
    n: 6,
    text: "Ektas N, Scholes C, Kulaga S, Kirwan G, Lee B, Bell C. Recovery of knee extension and incidence of extension deficits following anterior cruciate ligament injury and treatment: a systematic review protocol. Journal of Orthopaedic Surgery and Research. 2019;14:88.",
    url: "https://doi.org/10.1186/s13018-019-1127-8",
  },
];

const faqs = [
  {
    question: "Will squatting damage my knees?",
    answer:
      "For most people, well-controlled squatting within a comfortable range strengthens the muscles that protect the knee. Problems come from sudden jumps in load or poor control, not from the movement itself. Start with a chair squat, keep the kneecap tracking over the middle toes, and progress gradually.",
  },
  {
    question: "Should I change the way I walk?",
    answer:
      "Deliberate gait retraining can change how load is shared inside the knee, but the best strategy differs between individuals and a poorly chosen change can shift stress elsewhere. Do this with a physiotherapist rather than copying a technique from a video.",
  },
  {
    question: "Are insoles or knee braces worth trying?",
    answer:
      "Some people find footwear changes, insoles or a supportive sleeve make walking feel more comfortable and confident. Evidence for changing joint loading is mixed, so treat them as comfort aids to trial rather than corrections, and combine them with strengthening.",
  },
  {
    question: "How long before strength work changes how my knee feels?",
    answer:
      "Neural adaptations begin within two to three weeks; measurable strength and function changes in trials typically appear over 8–12 weeks of twice-weekly training. Consistency matters more than intensity in the early phase.",
  },
];

const Biomechanics = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Knee Strengthening Exercises & Biomechanics Guide"
        description="How to strengthen knees: evidence-informed knee strengthening exercises, quadriceps and hip strength, movement control, gait and range of movement, in plain English."
        canonicalPath="/movement-biomechanics"
        keywords="knee strengthening exercises, how to strengthen knees, knee exercises, exercises for knee pain, knee biomechanics, quadriceps strength knee, knee valgus, gait retraining knee, knee range of movement, runner's knee"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Knee Biomechanics", url: "https://omkneehealth.com/movement-biomechanics" },
        ]}
      />
      <WebPageSchema
        name="Improving Knee Biomechanics"
        description="How strength, control and movement quality change the forces travelling through the knee, with peer-reviewed references."
        url="https://omkneehealth.com/movement-biomechanics"
        type="WebPage"
      />
      <FAQSchema faqs={faqs} />
      <Header />

      <main className="pt-28 lg:pt-44">
        <div className="container mx-auto px-6 mb-8">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </Button>
        </div>

        <section className="container mx-auto px-6 pb-14 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              Pillar Three of Five
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Knee Strengthening Exercises &amp; Biomechanics
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Your knee does not choose how much force passes through it — your muscles, your hips
              and your movement habits do. Biomechanics is simply the study of where that force
              lands, and almost all of it is trainable.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <figure className="max-w-4xl mx-auto">
            <img
              src={biomechanicsInfographic}
              alt="Infographic showing the chain from hip to knee to foot, with quadriceps, glute and calf strength distributing load through the knee"
              className="w-full rounded-xl border border-border"
              loading="lazy"
            />
            <figcaption className="font-sans text-xs text-muted-foreground text-center mt-3">
              How strength and control up and down the leg share the load at the knee.
            </figcaption>
          </figure>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto space-y-6">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-xl border border-border bg-background p-7 md:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <topic.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-serif text-xl md:text-2xl text-foreground pt-1">
                    {topic.title}
                  </h2>
                </div>
                <p className="font-sans text-foreground leading-relaxed mb-4">{topic.plain}</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed border-l-2 border-accent pl-4 mb-5">
                  <span className="uppercase tracking-[0.15em] text-[0.65rem] text-primary/80 block mb-1">
                    What the evidence suggests
                  </span>
                  {topic.evidence}
                </p>
                <h3 className="font-sans text-sm font-medium text-foreground mb-2">
                  What to do this week
                </h3>
                <ul className="space-y-2">
                  {topic.actions.map((action) => (
                    <li
                      key={action}
                      className="flex items-start gap-2 font-sans text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-muted/40 p-7 md:p-8">
            <h2 className="font-serif text-xl text-foreground mb-3">Five checks you can do at home</h2>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Not a diagnosis — just a simple way to spot where your weak link might be. Stop if
              anything is painful.
            </p>
            <ul className="space-y-2">
              {checks.map((check) => (
                <li key={check} className="flex items-start gap-2 font-sans text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-secondary/40 p-7 md:p-8">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <h2 className="font-serif text-xl text-foreground">Get assessed rather than guess</h2>
            </div>
            <p className="font-sans text-sm text-muted-foreground">
              If your knee locks, gives way, swells, or you cannot fully straighten it, see a
              physiotherapist or knee specialist before starting a new programme. For clinical
              detail on knee conditions, visit{" "}
              <a
                href="https://www.sportshealing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                sportshealing.com
              </a>
              .
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 text-center">
              Common questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`}>
                  <AccordionTrigger className="font-sans text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <PartnerLinks topics={["biomechanics", "clinical"]} />

        <ReferenceList references={references} />

        <section className="container mx-auto px-6 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-foreground mb-4">Next in the five pillars</h2>
            <p className="font-sans text-muted-foreground mb-6">
              Good movement still needs sensible dosing. Next: how much, how often, how fast to
              progress.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/load">
                  Managing Load
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/nourish">Back to Nutrition &amp; Diet</Link>
              </Button>
            </div>
            <p className="font-sans text-xs text-muted-foreground mt-8">
              This page is educational and does not replace medical advice, diagnosis or treatment.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Biomechanics;

/**
 * Managing Load - pillar page.
 * Evidence-informed, plain-English. Educational only, no medicinal claims.
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Timer,
  Repeat,
  Scale,
  BatteryCharging,
  AlertTriangle,
} from "lucide-react";
import loadInfographic from "@/assets/infographic-managing-load.jpg";

const topics = [
  {
    icon: TrendingUp,
    title: "Progress gradually — spikes are the problem, not load",
    plain:
      "Tissue gets stronger when it is loaded a bit more than it is used to, and complains when the jump is too big too soon. Most flare-ups follow a sudden increase: a new class, a holiday of hills, a weekend of DIY.",
    evidence:
      "Work on training load and injury shows that athletes exposed to rapid spikes in workload carry higher injury risk, while those who build to high chronic loads gradually tend to be more resilient [1]. The practical message is progression, not avoidance.",
    actions: [
      "Increase weekly volume in modest steps rather than doubling overnight",
      "Change one variable at a time: distance, speed, hills or load — not all four",
      "After a break, restart below where you stopped and rebuild over two to three weeks",
      "Plan an easier week roughly every fourth week",
    ],
  },
  {
    icon: Repeat,
    title: "Tendons prefer loading to rest",
    plain:
      "Complete rest feels sensible for a sore tendon, but tendon tissue de-conditions quickly. What it responds to is heavy, slow, progressive loading.",
    evidence:
      "In a randomised clinical trial in patellar tendinopathy, progressive tendon-loading exercise produced better clinical outcomes at 24 weeks than eccentric-only exercise therapy [2]. The load-induced tendinopathy continuum model explains why appropriate loading, rather than rest, is central to management [3].",
    actions: [
      "Slow, heavy repetitions beat fast, light ones for tendon complaints",
      "Some discomfort during loading is usually acceptable if it settles within 24 hours",
      "Reduce the dose rather than stopping altogether when symptoms flare",
      "Give tendon programmes 12 weeks or more before judging them",
    ],
  },
  {
    icon: Timer,
    title: "The 24-hour rule: how to read your knee",
    plain:
      "Your knee's response the morning after is the most useful data you have. Judging a session by how it felt at the time misses the delayed reaction.",
    evidence:
      "Symptom-monitoring approaches that guide load by the following-day response are widely used in clinical load-management programmes for tendon and joint conditions [4].",
    actions: [
      "Rate knee discomfort out of 10 before and the morning after activity",
      "Back to baseline within 24 hours: the dose was about right — repeat or nudge up",
      "Still worse after 24 hours: reduce the next session by roughly a third",
      "Swelling that appears after activity is a clear sign the dose was too high",
    ],
  },
  {
    icon: Scale,
    title: "Total load includes the rest of your life",
    plain:
      "Your knee does not distinguish between a gym session, a long shift on your feet, a heavy shopping trip and a day of gardening. It is all load, and it all adds up in the same week.",
    evidence:
      "In the IDEA randomised trial, combining diet with exercise in overweight adults with knee osteoarthritis reduced compressive knee joint loads and inflammatory markers and improved pain and function more than either alone [5].",
    actions: [
      "Look at the whole week, including work, travel, childcare and hobbies",
      "Schedule heavy training away from your most physical work days",
      "Break long standing or kneeling tasks into blocks",
      "Reducing body weight lowers the load on every single step",
    ],
  },
  {
    icon: BatteryCharging,
    title: "Recovery is when adaptation happens",
    plain:
      "Training is the stimulus; recovery is where the gain is banked. Without recovery you accumulate fatigue instead of fitness.",
    evidence:
      "Exercise therapy for knee osteoarthritis works when it is sustained across weeks; Cochrane's review of 54 trials found moderate improvements in pain and function from structured land-based programmes [6]. Adherence, not intensity, is the usual limiting factor.",
    actions: [
      "Leave 48 hours between heavy sessions for the same muscle group",
      "Alternate impact with non-impact: cycling, swimming, rowing",
      "Prioritise sleep and protein intake around harder training blocks",
      "A deliberate easy week is training, not slacking",
    ],
  },
];

const dosing = [
  {
    scenario: "Returning after two weeks off",
    start: "Around 60–70% of previous volume",
    progress: "Rebuild to full over 2–3 weeks",
  },
  {
    scenario: "Starting walking for fitness",
    start: "10–15 minutes on most days",
    progress: "Add roughly 10% total weekly minutes",
  },
  {
    scenario: "Beginning strength training",
    start: "2 sessions a week, 2 sets per exercise",
    progress: "Add a set or small load every 1–2 weeks",
  },
  {
    scenario: "Managing a grumbling tendon",
    start: "Heavy, slow loading every other day",
    progress: "Judge by the next-morning response",
  },
  {
    scenario: "Returning to running",
    start: "Walk-run intervals, alternate days",
    progress: "Increase run intervals before total distance",
  },
];

const references: Reference[] = [
  {
    n: 1,
    text: "Gabbett TJ. The training–injury prevention paradox: should athletes be training smarter and harder? British Journal of Sports Medicine. 2016;50(5):273–280.",
    url: "https://doi.org/10.1136/bjsports-2015-095788",
  },
  {
    n: 2,
    text: "Breda SJ, Oei EHG, Zwerver J, et al. Effectiveness of progressive tendon-loading exercise therapy in patients with patellar tendinopathy: a randomised clinical trial. British Journal of Sports Medicine. 2021;55(9):501–509.",
    url: "https://doi.org/10.1136/bjsports-2020-103403",
  },
  {
    n: 3,
    text: "Cook JL, Purdam CR. Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy. British Journal of Sports Medicine. 2009;43(6):409–416.",
    url: "https://doi.org/10.1136/bjsm.2008.051193",
  },
  {
    n: 4,
    text: "Núñez-Martínez P, Hernández-Guillen D. Management of patellar tendinopathy through monitoring, load control, and therapeutic exercise: a systematic review. Journal of Sport Rehabilitation. 2022;31(3):337–350.",
    url: "https://doi.org/10.1123/jsr.2021-0117",
  },
  {
    n: 5,
    text: "Messier SP, Mihalko SL, Legault C, et al. Effects of intensive diet and exercise on knee joint loads, inflammation, and clinical outcomes among overweight and obese adults with knee osteoarthritis: the IDEA randomized clinical trial. JAMA. 2013;310(12):1263–1273.",
    url: "https://doi.org/10.1001/jama.2013.277669",
  },
  {
    n: 6,
    text: "Fransen M, McConnell S, Harmer AR, Van der Esch M, Simic M, Bennell KL. Exercise for osteoarthritis of the knee. Cochrane Database of Systematic Reviews. 2015;(1):CD004376.",
    url: "https://doi.org/10.1002/14651858.CD004376.pub3",
  },
];

const faqs = [
  {
    question: "Should I rest completely when my knee hurts?",
    answer:
      "Rarely. For most non-traumatic knee complaints, relative rest works better than complete rest: reduce the aggravating load, keep moving in ways that feel comfortable, and rebuild gradually. Complete rest de-conditions muscle and tendon quickly, which usually makes the return harder.",
  },
  {
    question: "Is it safe to exercise with some knee discomfort?",
    answer:
      "Mild discomfort that stays within a tolerable range and settles within 24 hours is generally acceptable during rehabilitation. Sharp pain, swelling afterwards, or symptoms that are still worse the next morning are signs the dose was too high.",
  },
  {
    question: "How much should I increase my activity each week?",
    answer:
      "Small, steady increments are the safe default — many clinicians use around 10% a week as a rule of thumb. The evidence is about avoiding sharp spikes rather than any exact number, so use the following-day response to guide you.",
  },
  {
    question: "Is running bad for knees?",
    answer:
      "Recreational running is not associated with higher rates of knee osteoarthritis in the available evidence, and regular runners often have better joint health markers than sedentary people. The risk sits in sudden increases in mileage, intensity or hills without preparation.",
  },
];

const ManagingLoad = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Managing Load for Knee Health | OmKneeHealth"
        description="How much is too much? Evidence-informed, plain-English guidance on progressing activity, loading tendons, the 24-hour rule and recovery for healthier knees."
        canonicalPath="/knee-managing-load"
        keywords="knee load management, training load knee, tendon loading, 24 hour rule knee pain, progressive overload knees"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Managing Load", url: "https://omkneehealth.com/knee-managing-load" },
        ]}
      />
      <WebPageSchema
        name="Managing Load for Knee Health"
        description="Evidence-informed load management for knees: gradual progression, tendon loading, symptom monitoring and recovery, with peer-reviewed references."
        url="https://omkneehealth.com/knee-managing-load"
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
              Pillar Four of Five
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Managing Load
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Load is not the enemy — unfamiliar load is. Your knee adapts to what you ask of it
              regularly and protests at what you ask of it suddenly. Getting the dose right is the
              single most practical skill in knee health.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <figure className="max-w-4xl mx-auto">
            <img
              src={loadInfographic}
              alt="Infographic contrasting a gradual, stepped increase in training load with a sudden spike, alongside the 24-hour symptom response rule"
              className="w-full rounded-xl border border-border"
              loading="lazy"
            />
            <figcaption className="font-sans text-xs text-muted-foreground text-center mt-3">
              Steady steps build tolerance; spikes are where trouble starts.
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
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
              Sensible starting doses
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-6">
              General starting points, not personal prescriptions. Adjust to your own next-morning
              response.
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-sans">Situation</TableHead>
                    <TableHead className="font-sans">Where to start</TableHead>
                    <TableHead className="font-sans">How to progress</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dosing.map((row) => (
                    <TableRow key={row.scenario}>
                      <TableCell className="font-sans font-medium text-foreground">
                        {row.scenario}
                      </TableCell>
                      <TableCell className="font-sans text-muted-foreground">{row.start}</TableCell>
                      <TableCell className="font-sans text-muted-foreground">
                        {row.progress}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-secondary/40 p-7 md:p-8">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <h2 className="font-serif text-xl text-foreground">Signs you have overshot</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                "Swelling in the hours after activity",
                "Discomfort still raised 24 hours later",
                "Night pain following a training day",
                "Needing to limp the next morning",
                "Symptoms creeping up week on week",
                "Progress stalling despite more work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
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

        <ReferenceList references={references} />

        <section className="container mx-auto px-6 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-foreground mb-4">Next in the five pillars</h2>
            <p className="font-sans text-muted-foreground mb-6">
              The last pillar is about the moments where knees actually get hurt.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/knee-injury-prevention">
                  Injury Prevention
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/knee-biomechanics">Back to Biomechanics</Link>
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

export default ManagingLoad;

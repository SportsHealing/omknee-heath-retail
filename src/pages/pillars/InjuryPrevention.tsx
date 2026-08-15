/**
 * Injury Prevention - pillar page.
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
  Flame,
  Zap,
  Shield,
  Footprints,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";
import preventionInfographic from "@/assets/infographic-injury-prevention.jpg";

const topics = [
  {
    icon: Flame,
    title: "Warm up properly — it genuinely works",
    plain:
      "A structured warm-up is not stretching for five minutes. It is a short sequence of running, strength, balance and landing drills done before every session.",
    evidence:
      "A systematic review and meta-analysis of the FIFA 11 and 11+ programmes found a significant reduction in overall injury rate in footballers using these structured warm-ups [1]. Across sports, exercise-based prevention programmes reduce acute injuries substantially compared with controls [2].",
    actions: [
      "Give the warm-up 10–15 minutes, every session, not just match day",
      "Include jogging, controlled lunges, single-leg balance, hops and landings",
      "Finish with two or three sport-specific accelerations and changes of direction",
      "Consistency matters: benefits track with how regularly the programme is completed",
    ],
  },
  {
    icon: Zap,
    title: "Strength and neuromuscular training lowers ACL risk",
    plain:
      "Most serious knee injuries happen without contact — a landing, a cut, a sudden change of direction where control is lost. Training that control is the best-evidenced protection available.",
    evidence:
      "A meta-analysis of meta-analyses concluded that ACL injury-reduction training programmes meaningfully reduce injury rates, with the greatest benefit in female athletes and in programmes containing plyometric and strength components [3]. Strength training in particular shows a strong protective effect on overall injury risk [2].",
    actions: [
      "Two sessions a week of lower-limb strength: squats, split squats, hip hinges, calf raises",
      "Add hamstring-specific work such as Nordic curls or bridges",
      "Practise landing softly on two feet, then progress to one",
      "Train deceleration and cutting deliberately rather than only in matches",
    ],
  },
  {
    icon: Footprints,
    title: "Fatigue is when control disappears",
    plain:
      "Injury rates climb in the last quarter of matches and at the end of long sessions. Strength fades slowly; coordination fades first.",
    evidence:
      "Injury-surveillance data across team sports consistently show clustering of injuries in later periods of play, which is a core reason prevention programmes target neuromuscular control and conditioning [1][3].",
    actions: [
      "Build conditioning so match demands sit comfortably inside your capacity",
      "Rotate or substitute when technique visibly deteriorates",
      "Do skill and landing practice while fresh, not as an afterthought",
      "Treat poor sleep or illness as a reason to lower intensity that day",
    ],
  },
  {
    icon: Shield,
    title: "Footwear, surfaces and equipment",
    plain:
      "Grip is a trade-off: more grip means better performance and more rotational force through the knee when the foot sticks.",
    evidence:
      "Studies of shoe–surface interaction and a systematic review with meta-analysis found that higher shoe–surface interaction is associated with roughly double the risk of lower-limb injury in football codes [4].",
    actions: [
      "Match studs and soles to the surface you are actually playing on",
      "Replace worn footwear — cushioning and grip degrade before shoes look finished",
      "Take extra care in the first sessions on a new surface",
      "Braces have a role after specific injuries; discuss with a clinician rather than self-prescribing",
    ],
  },
  {
    icon: RotateCcw,
    title: "Finish your rehabilitation before you go back",
    plain:
      "A previous knee injury is the strongest predictor of the next one. Returning when the pain has gone but the strength has not is the classic mistake.",
    evidence:
      "Following ACL injury, incomplete rehabilitation and early return are associated with higher re-injury rates, and post-traumatic osteoarthritis is a well-documented long-term consequence of significant knee injury [3][5].",
    actions: [
      "Aim for strength within about 10% of the uninjured side before full return",
      "Pass hop and landing tests, not just the absence of pain",
      "Return in stages: training drills, then partial play, then full play",
      "Keep the prevention programme going permanently after a knee injury",
    ],
  },
];

const warmUp = [
  "2 min easy jog and leg swings",
  "6 walking lunges each side, controlled",
  "8 slow squats to a comfortable depth",
  "30 s single-leg balance each side, eyes closed if steady",
  "6 two-foot jumps landing softly and quietly",
  "4 controlled single-leg landings each side",
  "3 build-up sprints and 3 changes of direction",
];

const references: Reference[] = [
  {
    n: 1,
    text: "Thorborg K, Krommes KK, Esteve E, Clausen MB, Bartels EM, Rathleff MS. Effect of specific exercise-based football injury prevention programmes on the overall injury rate in football: a systematic review and meta-analysis of the FIFA 11 and 11+ programmes. British Journal of Sports Medicine. 2017;51(7):562–571.",
    url: "https://doi.org/10.1136/bjsports-2016-097066",
  },
  {
    n: 2,
    text: "Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. British Journal of Sports Medicine. 2014;48(11):871–877.",
    url: "https://doi.org/10.1136/bjsports-2013-092538",
  },
  {
    n: 3,
    text: "Webster KE, Hewett TE. Meta-analysis of meta-analyses of anterior cruciate ligament injury reduction training programs. Journal of Orthopaedic Research. 2018;36(10):2696–2708.",
    url: "https://doi.org/10.1002/jor.24043",
  },
  {
    n: 4,
    text: "Thomson A, Whiteley R, Bleakley C. Higher shoe-surface interaction is associated with doubling of lower extremity injury risk in football codes: a systematic review and meta-analysis. British Journal of Sports Medicine. 2015;49(19):1245–1252.",
    url: "https://doi.org/10.1136/bjsports-2014-094478",
  },
  {
    n: 5,
    text: "Øiestad BE, Juhl CB, Culvenor AG, Berg B, Thorlund JB. Knee extensor muscle weakness is a risk factor for the development of knee osteoarthritis: an updated systematic review and meta-analysis including 46 819 men and women. British Journal of Sports Medicine. 2022;56(6):349–355.",
    url: "https://doi.org/10.1136/bjsports-2021-104861",
  },
];

const faqs = [
  {
    question: "Do warm-up programmes really prevent knee injuries?",
    answer:
      "Yes — structured neuromuscular warm-ups such as the FIFA 11+ have been shown in pooled analyses to reduce overall injury rates in football, and similar programmes reduce ACL injury rates across sports. The catch is adherence: the benefit largely disappears if the programme is done occasionally rather than consistently.",
  },
  {
    question: "Why are women at higher risk of ACL injury?",
    answer:
      "Several factors interact, including differences in landing and cutting mechanics, hip and thigh muscle strength patterns, and anatomical differences. Prevention programmes appear to be particularly effective in female athletes, which is why they are strongly recommended in women's sport.",
  },
  {
    question: "Does stretching before sport prevent injury?",
    answer:
      "Static stretching on its own has not been shown to reduce injury rates and may briefly reduce power output. Dynamic movement preparation combined with strength and balance work is what the evidence supports. Keep longer static stretching for after activity.",
  },
  {
    question: "How long should I keep doing a prevention programme?",
    answer:
      "Indefinitely, if you keep playing. The protective effect depends on ongoing strength and neuromuscular control, which fade within weeks of stopping. Anyone with a previous knee injury has an even stronger reason to keep going.",
  },
];

const InjuryPrevention = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Knee Injury Prevention: What Works | OmKneeHealth"
        description="Evidence-informed, plain-English knee injury prevention: structured warm-ups, strength and neuromuscular training, fatigue, footwear and full rehabilitation."
        canonicalPath="/knee-injury-prevention"
        keywords="knee injury prevention, ACL prevention programme, FIFA 11+, neuromuscular training knee, landing technique"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Injury Prevention", url: "https://omkneehealth.com/knee-injury-prevention" },
        ]}
      />
      <WebPageSchema
        name="Knee Injury Prevention"
        description="What the peer-reviewed evidence shows about preventing knee injuries: warm-ups, neuromuscular training, fatigue management and return to sport."
        url="https://omkneehealth.com/knee-injury-prevention"
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
              Pillar Five of Five
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Injury Prevention
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Most serious knee injuries happen at the edges of control — tired, twisting, landing
              awkwardly, or doing something the body has not been prepared for. Prevention is one of
              the best-evidenced areas in all of sports medicine.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <figure className="max-w-4xl mx-auto">
            <img
              src={preventionInfographic}
              alt="Infographic of a knee injury prevention warm-up sequence: jogging, strength, balance, landing and change of direction drills"
              className="w-full rounded-xl border border-border"
              loading="lazy"
            />
            <figcaption className="font-sans text-xs text-muted-foreground text-center mt-3">
              A structured warm-up sequence, done consistently, is the best-evidenced protection.
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
            <h2 className="font-serif text-xl text-foreground mb-3">
              A 12-minute knee-protective warm-up
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Modelled on the structure used in published prevention programmes. Adapt to your sport
              and level.
            </p>
            <ol className="space-y-2">
              {warmUp.map((step, i) => (
                <li key={step} className="flex items-start gap-3 font-sans text-sm text-foreground">
                  <span className="text-primary shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-secondary/40 p-7 md:p-8">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <h2 className="font-serif text-xl text-foreground">After a knee injury</h2>
            </div>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              A pop, immediate swelling, or a knee that gives way needs proper assessment — these can
              indicate ligament or meniscal injury. Get seen rather than waiting it out. For clinical
              detail, visit{" "}
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

        <PartnerLinks topics={["prevention", "clinical"]} />

        <ReferenceList references={references} />

        <section className="container mx-auto px-6 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-foreground mb-4">That completes the five pillars</h2>
            <p className="font-sans text-muted-foreground mb-6">
              Wellness, nutrition, biomechanics, load and prevention work together, not separately.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/assessment">
                  Take the free knee assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/knee-managing-load">Back to Managing Load</Link>
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

export default InjuryPrevention;

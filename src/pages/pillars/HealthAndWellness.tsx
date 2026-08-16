/**
 * Knee Health & Wellness - pillar page.
 * Evidence-informed, plain-English guidance on the whole-body habits
 * that shape how knees feel and function. Educational only.
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import PartnerLinks from "@/components/PartnerLinks";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import FAQSchema from "@/components/FAQSchema";
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
  Moon,
  Scale,
  Brain,
  Cigarette,
  Sun,
  Footprints,
  AlertTriangle,
} from "lucide-react";

const topics = [
  {
    icon: Moon,
    title: "Sleep: your nightly repair window",
    plain:
      "Most of the body's repair and renewal work happens while you sleep. Short or broken sleep is consistently linked with stiffer, more sensitive joints the next day, and with slower recovery from training.",
    evidence:
      "Sleep restriction studies show increased inflammatory markers and lowered pain thresholds — the same activity feels harder and sorer on a poor night's sleep.",
    actions: [
      "Aim for 7–9 hours, at broadly the same times each day",
      "Keep the bedroom dark, cool and screen-free for the last hour",
      "Move the day's heaviest training away from late evening",
      "If knee discomfort wakes you, a pillow between or under the knees often helps",
    ],
  },
  {
    icon: Scale,
    title: "Body weight and the load through your knees",
    plain:
      "Every kilogram you carry is multiplied several times over at the knee when you walk, climb stairs or rise from a chair. Carrying less means the joint surfaces do less work with every step.",
    evidence:
      "Research consistently shows that modest, sustained weight reduction is one of the most reliable ways to improve knee function and walking comfort in people carrying extra weight. Fat tissue is also metabolically active, adding to the body's background inflammatory load.",
    actions: [
      "A 5–10% reduction is a realistic, worthwhile first target",
      "Combine gentle calorie reduction with resistance training so you keep muscle",
      "Choose low-impact cardio — cycling, swimming, cross-trainer — while you build up",
      "Track waist measurement as well as scale weight",
    ],
  },
  {
    icon: Brain,
    title: "Stress, mood and how movement feels",
    plain:
      "Stress does not invent knee problems, but it changes the volume at which your nervous system reports them. Under chronic stress people move less, sleep worse and notice discomfort more.",
    evidence:
      "Persistent stress raises cortisol, disturbs sleep architecture and is associated with heightened pain sensitivity. Studies of graded activity and relaxation-based programmes show better function scores even when the joint itself is unchanged.",
    actions: [
      "Build in daily decompression: a walk outdoors, breathing practice, yoga or stretching",
      "Keep moving on bad days — reduce the dose rather than stopping altogether",
      "Stay socially connected; isolation reliably worsens how symptoms are experienced",
      "Talk to your GP if low mood or anxiety is persistent",
    ],
  },
  {
    icon: Cigarette,
    title: "Smoking, alcohol and connective tissue",
    plain:
      "Smoking narrows small blood vessels, so less oxygen reaches tendons, ligaments and bone. Heavy alcohol use disturbs sleep, bone density and recovery.",
    evidence:
      "Smoking is a well-established risk factor for poorer tendon and bone healing and for slower recovery after knee surgery. Alcohol above recommended limits is associated with reduced bone mineral density and impaired muscle protein synthesis.",
    actions: [
      "Stopping smoking measurably improves tissue blood supply and healing",
      "Keep within UK guidance: no more than 14 units a week, spread over three or more days",
      "Include several alcohol-free days each week",
      "Free NHS support is available for stopping smoking",
    ],
  },
  {
    icon: Sun,
    title: "Daylight, vitamin D and bone health",
    plain:
      "The bone beneath your cartilage is living tissue that remodels constantly. It needs vitamin D, calcium and regular weight-bearing to stay strong.",
    evidence:
      "Vitamin D contributes to the normal absorption of calcium and to the maintenance of normal bones and muscle function. UK daylight from October to March is too weak for the skin to make meaningful vitamin D, which is why national guidance suggests a 10 µg daily supplement through autumn and winter.",
    actions: [
      "Get outdoors daily; short, regular daylight exposure also steadies your sleep rhythm",
      "Follow NHS guidance on a daily 10 µg vitamin D supplement in autumn and winter",
      "Include calcium-rich foods: dairy, fortified plant milks, tinned fish with bones, leafy greens",
      "Weight-bearing movement — walking, stairs, resistance work — signals bone to stay dense",
    ],
  },
  {
    icon: Footprints,
    title: "Daily movement and avoiding long stillness",
    plain:
      "Cartilage has no blood supply. It is fed by synovial fluid, which is pressed in and out of the tissue as the joint bends and takes load. Movement is literally how a knee gets its nutrition.",
    evidence:
      "Prolonged sitting is independently associated with stiffness and reduced function. Regular, moderate activity — around 150 minutes a week — supports joint comfort, muscle strength and general cardiovascular health.",
    actions: [
      "Break up sitting every 30–45 minutes, even briefly",
      "Take the knee through its full bend and straighten several times a day",
      "Accumulate around 150 minutes of moderate activity weekly, in whatever chunks suit you",
      "Add two sessions a week that challenge leg strength",
    ],
  },
];

const hormonalNote = [
  "Oestrogen influences collagen quality, so many women notice new knee stiffness around the perimenopause",
  "Thyroid conditions, diabetes and inflammatory arthritis all change how connective tissue behaves",
  "Some medicines affect tendons and bone — never stop a prescribed medicine, but do ask your GP or pharmacist",
];

const redFlags = [
  "Swelling that will not settle, or a knee that locks",
  "Sharp catching pain, or the knee giving way",
  "A clear loss of bend or straightening",
  "Severe pain at night or at rest",
  "Redness, heat and fever with a swollen knee — seek urgent care",
  "A new lump or bump that is growing",
];

const faqs = [
  {
    question: "Does losing weight really make a difference to knee comfort?",
    answer:
      "Yes. Because forces at the knee are several times body weight during walking and stair climbing, even a modest reduction of 5–10% meaningfully lowers the load passing through the joint. Combining weight reduction with leg strengthening tends to produce better function than either on its own.",
  },
  {
    question: "Is rest or movement better for a stiff knee?",
    answer:
      "For most everyday stiffness, gentle movement is better. Cartilage is nourished by synovial fluid that circulates when the joint bends and takes load, so long periods of stillness usually make a knee feel worse. Reduce the intensity rather than stopping entirely, and seek advice if symptoms persist beyond a few weeks.",
  },
  {
    question: "Do I need a vitamin D supplement in the UK?",
    answer:
      "NHS guidance suggests that adults in the UK consider a daily 10 microgram vitamin D supplement during autumn and winter, when sunlight is too weak for the skin to produce enough. Vitamin D contributes to the maintenance of normal bones and normal muscle function. People with little sun exposure may benefit year-round.",
  },
  {
    question: "How quickly will lifestyle changes show up in my knees?",
    answer:
      "Sleep and activity changes are often noticed within a few weeks. Changes driven by strength, weight or bone health work over months rather than days. Consistency matters far more than intensity, and progress is rarely a straight line.",
  },
  {
    question: "Can supplements replace these habits?",
    answer:
      "No. Supplements are intended to complement a balanced diet and sensible lifestyle, not to substitute for sleep, movement, healthy weight or professional care. Any nutritional support works best alongside the fundamentals described on this page.",
  },
];

const HealthAndWellness = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Knee Health & Wellness: Everyday Habits | OmKneeHealth"
        description="Plain-English, evidence-informed guidance on sleep, weight, stress, daylight and daily movement — the whole-body habits that shape how your knees feel."
        canonicalPath="/knee-health-wellness"
        keywords="knee health, knee wellness, sleep and joint health, weight and knee pain, vitamin D knees, daily movement knees"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Knee Health & Wellness", url: "https://omkneehealth.com/knee-health-wellness" },
        ]}
      />
      <WebPageSchema
        name="Knee Health & Wellness"
        description="Evidence-informed lifestyle guidance for maintaining healthy knees: sleep, body weight, stress, smoking and alcohol, vitamin D, and daily movement."
        url="https://omkneehealth.com/knee-health-wellness"
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

        {/* Hero */}
        <section className="container mx-auto px-6 pb-14 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              Pillar One of Five
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              How to Improve Knee Health &amp; Wellness
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              A healthy knee sits inside a healthy body. Long before exercises and supplements, how
              you sleep, what you weigh, how you handle stress and how much you move all shape the
              environment your joint tissue lives in. Here is what the evidence points to, in plain
              English.
            </p>
          </div>
        </section>

        {/* Why the whole body matters */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-3xl mx-auto rounded-xl border border-border bg-secondary/40 p-7 md:p-8">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Why whole-body health reaches your knees
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-4">
              Every structure inside the knee — the chondral surfaces, the menisci, the ligaments
              and the tendons — is built largely from collagen and bathed in synovial fluid. Both
              depend on the rest of your body doing its job: sleep for repair, circulation for
              oxygen and nutrients, muscle for shock absorption, and movement to pump fluid in and
              out of the cartilage.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed">
              That is why two people with similar scans can feel entirely differently. The joint is
              only part of the picture. For clinical detail on knee anatomy and conditions, visit{" "}
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

        {/* Topics */}
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

        {/* Hormones & health conditions */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-muted/40 p-7 md:p-8">
            <h2 className="font-serif text-xl text-foreground mb-3">
              Hormones, health conditions and medicines
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Knee health does not sit apart from the rest of your medical picture.
            </p>
            <ul className="space-y-2">
              {hormonalNote.map((note) => (
                <li key={note} className="flex items-start gap-2 font-sans text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Red flags */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-secondary/40 p-7 md:p-8">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <h2 className="font-serif text-xl text-foreground">When to seek professional help</h2>
            </div>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Self-care has limits. Speak to a GP, physiotherapist or knee specialist if you notice:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {redFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-2 font-sans text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
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

        {/* Next steps */}
        <section className="container mx-auto px-6 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-foreground mb-4">Next in the five pillars</h2>
            <p className="font-sans text-muted-foreground mb-6">
              Once the foundations are in place, what you eat gives your knee the raw material it
              needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/knee-nutrition-diet">Nutrition &amp; Diet</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/knee-score">Take the free knee assessment</Link>
              </Button>
            </div>
            <p className="font-sans text-xs text-muted-foreground mt-8">
              This page is educational and does not replace medical advice, diagnosis or treatment.
              In an emergency, call 999.
            </p>
          </div>
        </section>
        <PartnerLinks topics={["wellness", "imaging"]} />

      </main>

      <Footer />
    </div>
  );
};

export default HealthAndWellness;

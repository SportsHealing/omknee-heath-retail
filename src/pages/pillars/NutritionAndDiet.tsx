/**
 * Nutrition & Diet for knee health - pillar page.
 * Evidence-informed, plain-English guidance. Educational only,
 * EFSA-compliant nutrient wording, no medicinal claims.
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
  Beef,
  Citrus,
  Bone,
  Fish,
  Droplets,
  Wheat,
  AlertTriangle,
  Leaf,
  Sprout,
  CandyOff,
} from "lucide-react";

const topics = [
  {
    icon: Beef,
    title: "Protein: the building blocks for repair",
    plain:
      "Cartilage, tendon, ligament and muscle are all protein structures. If protein intake is low, the body has less raw material to maintain and rebuild them — and muscle is your knee's main shock absorber.",
    evidence:
      "UK guidance sets a minimum of roughly 0.75 g of protein per kilogram of body weight per day, but research on active adults and older adults points to around 1.0–1.6 g/kg to maintain muscle. Protein contributes to the growth and maintenance of muscle mass and to the maintenance of normal bones.",
    actions: [
      "Aim for a palm-sized protein portion at each main meal rather than one large hit at dinner",
      "Good sources: fish, poultry, eggs, dairy, beans, lentils, tofu, nuts and seeds",
      "Older adults generally need more, not less, protein to hold on to muscle",
      "Collagen-rich foods (bone broth, skin-on fish, slow-cooked cuts) supply glycine and proline",
    ],
  },
  {
    icon: Citrus,
    title: "Vitamin C and collagen formation",
    plain:
      "Your body cannot make collagen without vitamin C. It is the co-factor that lets collagen strands lock into their strong, rope-like structure.",
    evidence:
      "Vitamin C contributes to normal collagen formation for the normal function of cartilage, bones, skin and blood vessels — an authorised EFSA claim. The UK reference intake is 80 mg per day, easily met from food.",
    actions: [
      "Peppers, berries, kiwi, citrus, broccoli and tomatoes are the easiest sources",
      "Spread intake across the day — vitamin C is water-soluble and not stored",
      "Pair vitamin C with protein or collagen sources at the same meal",
      "Heavy or prolonged cooking reduces vitamin C; some raw or lightly cooked veg helps",
    ],
  },
  {
    icon: Bone,
    title: "Vitamin D, calcium and the bone beneath the cartilage",
    plain:
      "Under every joint surface is living bone. If that bone weakens, the whole joint loses support. Calcium is the mineral; vitamin D is what lets you absorb and use it.",
    evidence:
      "Vitamin D contributes to normal absorption of calcium, to the maintenance of normal bones and to normal muscle function. Calcium contributes to the maintenance of normal bones. NHS guidance suggests a daily 10 µg vitamin D supplement for UK adults in autumn and winter.",
    actions: [
      "Calcium: dairy, fortified plant milks, tinned sardines, tofu, leafy greens, almonds",
      "Take the NHS-recommended 10 µg vitamin D daily from October to March",
      "Add weight-bearing movement — nutrition alone does not build bone",
      "Vitamin K2 and magnesium play supporting roles in normal bone maintenance",
    ],
  },
  {
    icon: Fish,
    title: "Omega-3 fats and a lower inflammatory background",
    plain:
      "Most UK diets are heavy in omega-6 fats from processed foods and light on omega-3. Rebalancing the two shifts the body's background chemistry in a calmer direction.",
    evidence:
      "EPA and DHA contribute to normal heart function at 250 mg per day. Trials in joint health have used higher doses with mixed results, so treat omega-3 as part of overall diet quality rather than a targeted fix.",
    actions: [
      "Two portions of fish a week, one of them oily (salmon, mackerel, sardines, trout)",
      "Plant sources: walnuts, flaxseed, chia and rapeseed oil",
      "Cut back on ultra-processed snacks high in refined seed oils",
      "Vegetarian and vegan diets may benefit from an algae-based EPA/DHA supplement",
    ],
  },
  {
    icon: Wheat,
    title: "A whole-food pattern beats any single nutrient",
    plain:
      "No single food changes a knee. What consistently shows up in research is the overall pattern: mostly whole foods, plenty of plants, modest added sugar, limited ultra-processed food.",
    evidence:
      "Mediterranean-style eating patterns are repeatedly associated with lower inflammatory markers and better self-reported joint function. High added-sugar and highly processed diets are associated with the opposite, partly through weight gain and partly through metabolic effects.",
    actions: [
      "Fill half the plate with vegetables and aim for 30 different plants a week",
      "Choose wholegrains over refined where you can",
      "Use olive oil, herbs and spices generously — turmeric, ginger and garlic add polyphenols",
      "Keep added sugar and alcohol occasional rather than routine",
    ],
  },
  {
    icon: Droplets,
    title: "Hydration and synovial fluid",
    plain:
      "Synovial fluid — the slippery liquid that lubricates and feeds your cartilage — is mostly water. Being persistently under-hydrated is an easy, avoidable handicap.",
    evidence:
      "Water contributes to the maintenance of normal physical and cognitive functions at around 2 litres a day from all drinks and food. Dehydration also reduces exercise tolerance, which indirectly affects the strength work knees rely on.",
    actions: [
      "Roughly 6–8 glasses a day, more in heat or with heavy training",
      "Pale straw-coloured urine is a practical everyday marker",
      "Tea, coffee, milk and food all count towards intake",
      "Drink before, during and after exercise rather than only afterwards",
    ],
  },
];

const nutrientTable = [
  {
    nutrient: "Protein",
    role: "Building blocks for muscle, tendon and cartilage structure",
    food: "Fish, eggs, dairy, poultry, beans, lentils, tofu",
  },
  {
    nutrient: "Vitamin C",
    role: "Contributes to normal collagen formation for cartilage and bones",
    food: "Peppers, berries, kiwi, citrus, broccoli",
  },
  {
    nutrient: "Vitamin D",
    role: "Contributes to maintenance of normal bones and muscle function",
    food: "Oily fish, eggs, fortified foods, autumn/winter supplement",
  },
  {
    nutrient: "Calcium",
    role: "Contributes to the maintenance of normal bones",
    food: "Dairy, fortified plant milks, tinned fish with bones, greens",
  },
  {
    nutrient: "Zinc",
    role: "Contributes to normal protein synthesis and maintenance of normal bones",
    food: "Shellfish, meat, seeds, wholegrains, legumes",
  },
  {
    nutrient: "Copper",
    role: "Contributes to maintenance of normal connective tissues",
    food: "Nuts, seeds, shellfish, wholegrains, dark chocolate",
  },
  {
    nutrient: "Manganese",
    role: "Contributes to the normal formation of connective tissue",
    food: "Wholegrains, nuts, leafy greens, pulses",
  },
  {
    nutrient: "Omega-3 (EPA/DHA)",
    role: "Part of an overall balanced dietary fat intake",
    food: "Salmon, mackerel, sardines, algae oil",
  },
];

const plantSwaps = [
  {
    nutrient: "Protein",
    omnivore: "Fish, poultry, eggs, dairy",
    plant: "Lentils, chickpeas, beans, tofu, tempeh, seitan, soya yoghurt, nuts and seeds",
  },
  {
    nutrient: "Collagen amino acids (glycine, proline)",
    omnivore: "Bone broth, skin-on fish, slow-cooked cuts",
    plant: "Soya, pulses, seeds and wholegrains supply the same amino acids, plus vitamin C to use them",
  },
  {
    nutrient: "Calcium",
    omnivore: "Dairy, tinned fish with bones",
    plant: "Fortified plant milks and yoghurts, calcium-set tofu, kale, pak choi, almonds, tahini",
  },
  {
    nutrient: "Omega-3 (EPA/DHA)",
    omnivore: "Salmon, mackerel, sardines",
    plant: "Algae oil for EPA/DHA, with walnuts, flaxseed, chia and rapeseed oil for ALA",
  },
  {
    nutrient: "Vitamin D",
    omnivore: "Oily fish, egg yolk, fortified foods",
    plant: "Fortified foods and a vitamin D2 or lichen-derived D3 supplement",
  },
  {
    nutrient: "Zinc, iron and B12",
    omnivore: "Shellfish, meat, dairy",
    plant: "Pulses, seeds, wholegrains and fortified foods; B12 needs a supplement or fortified source",
  },
];

const gutHabits = [
  "Aim for 30 different plants a week — variety feeds a wider range of gut bacteria",
  "Around 30 g of fibre a day from wholegrains, pulses, vegetables, fruit, nuts and seeds",
  "Include fermented foods most days: live yoghurt, kefir, sauerkraut, kimchi, miso",
  "Increase fibre gradually and with plenty of fluid to avoid bloating",
  "Chew properly and eat unhurried — digestion starts before food reaches the gut",
  "Sleep, daily movement and stress management all measurably affect gut function",
  "Only use antibiotics when genuinely needed, exactly as prescribed",
];

const dayPlate = [
  "Breakfast: Greek yoghurt or fortified soya yoghurt, berries, seeds and oats",
  "Lunch: large mixed salad with peppers and tomatoes, oily fish or pulses, olive oil dressing",
  "Snack: a handful of nuts and a piece of citrus fruit",
  "Dinner: palm-sized protein, two portions of vegetables, wholegrain or sweet potato",
  "Through the day: water, and tea or coffee within sensible limits",
];

const faqs = [
  {
    question: "Is there a diet that reverses knee wear?",
    answer:
      "No diet can reverse structural joint changes, and you should be sceptical of anything claiming otherwise. What nutrition can do is supply the raw material your body uses for its normal maintenance of cartilage, bone and muscle, and support a healthy weight — both of which matter for how a knee feels and functions.",
  },
  {
    question: "Should I avoid nightshades, gluten or dairy for my knees?",
    answer:
      "For most people there is no good evidence that cutting out nightshades, gluten or dairy improves knee comfort, and dairy is a useful calcium source. Unless you have a diagnosed intolerance or coeliac disease, elimination diets tend to cost nutrients without benefit. If you suspect a food affects you, discuss a structured trial with a GP or registered dietitian.",
  },
  {
    question: "Do I need collagen from a supplement, or is food enough?",
    answer:
      "Dietary collagen from bone broth, skin-on fish and slow-cooked cuts provides the same amino acids. Hydrolysed collagen supplements are simply pre-broken-down and easier to take in a consistent daily dose. Either way, adequate vitamin C is needed for the body's normal collagen formation.",
  },
  {
    question: "How much protein do I actually need?",
    answer:
      "The UK minimum is around 0.75 g per kilogram of body weight per day. Adults who train, are losing weight, or are over 60 generally do better nearer 1.2–1.6 g/kg, spread across meals. For an 80 kg adult that is roughly 100–130 g a day, or around 30 g per main meal.",
  },
  {
    question: "Are supplements necessary if I eat well?",
    answer:
      "Food first is the right order. The common UK exception is vitamin D in autumn and winter, which NHS guidance recommends for adults generally. Beyond that, supplements are intended to complement a balanced diet, not replace it.",
  },
  {
    question: "Can a vegetarian or vegan diet support knee health as well as an omnivorous one?",
    answer:
      "Yes. Every nutrient your knee relies on — protein and its amino acids, vitamin C, calcium, vitamin D, zinc, copper, manganese and omega-3 — is available from plant or fortified sources. A well-planned vegetarian or vegan diet needs a little more attention to vitamin B12, iodine, iron and EPA/DHA, all of which are covered by fortified foods or a supplement. The foods differ; the building blocks do not.",
  },
  {
    question: "Why does gut health matter if I already eat well?",
    answer:
      "What you eat is not the same as what you absorb. Digestion and absorption happen in the gut, so a poorly functioning gut can leave you short of nutrients despite a good diet. Fibre variety, fermented foods, sleep, movement and stress all influence gut function. If you have persistent bloating, altered bowel habit, unexplained weight loss or suspected malabsorption, see your GP rather than self-treating.",
  },
];

const NutritionAndDiet = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Nutrition & Diet for Knee Health | OmKneeHealth"
        description="Plain-English, evidence-informed nutrition for your knees: protein, vitamin C and collagen, vitamin D and calcium, omega-3, hydration and everyday food choices."
        canonicalPath="/knee-nutrition-diet"
        keywords="nutrition for knee health, diet for joints, protein collagen knees, vitamin C collagen, vitamin D bones, anti-inflammatory diet UK"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Nutrition & Diet", url: "https://omkneehealth.com/knee-nutrition-diet" },
        ]}
      />
      <WebPageSchema
        name="Nutrition & Diet for Knee Health"
        description="Evidence-informed guidance on the nutrients and dietary patterns that support normal cartilage, bone and muscle maintenance."
        url="https://omkneehealth.com/knee-nutrition-diet"
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
              Pillar Two of Five
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Nutrition &amp; Diet
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Every structure in your knee is built from what you eat. Cartilage, tendon, ligament
              and bone are largely collagen — and collagen is protein plus the vitamins and minerals
              that let your body assemble it. This is what the evidence supports, without the hype.
            </p>
          </div>
        </section>

        {/* Framing */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-3xl mx-auto rounded-xl border border-border bg-secondary/40 p-7 md:p-8">
            <h2 className="font-serif text-2xl text-foreground mb-4">Food first, then top-ups</h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-4">
              There is no single food that fixes a knee, and no diet that rebuilds a worn joint
              surface. What food does is supply the raw material for your body's ordinary,
              continuous maintenance work — and keep your body weight in a range that asks less of
              the joint every time you take a step. It works in every dietary pattern: everything
              below can be met on a vegetarian, vegan or omnivorous diet. And whichever you choose,
              the foundation underneath it is a healthy gut, because absorption — not just intake —
              decides what your knee actually receives.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed">
              For clinical detail on knee conditions and diagnosis, visit{" "}
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

        {/* Gut health foundation */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-background p-7 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <Sprout className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-serif text-xl md:text-2xl text-foreground pt-1">
                Your gut is the foundation
              </h2>
            </div>
            <p className="font-sans text-foreground leading-relaxed mb-4">
              However organic your food or well-chosen your supplements, none of it reaches your
              knee until your gut has broken it down and absorbed it. What you eat and what you
              actually take up are two different things, and that gap is individual — it depends on
              your digestion, your gut lining, your microbiome, your medicines and your age.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed border-l-2 border-accent pl-4 mb-5">
              <span className="uppercase tracking-[0.15em] text-[0.65rem] text-primary/80 block mb-1">
                What the evidence suggests
              </span>
              A diverse, fibre-rich diet is consistently associated with a more diverse gut
              microbiome and better markers of gut function. Dietary fibre contributes to normal
              bowel function. Absorption of several nutrients relevant to joint tissue — including
              calcium, iron, zinc and the fat-soluble vitamins — is reduced when digestion is
              impaired, which is why two people on the same diet can end up in very different
              places.
            </p>
            <h3 className="font-sans text-sm font-medium text-foreground mb-2">
              Everyday habits that support a healthy gut
            </h3>
            <ul className="space-y-2">
              {gutHabits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-sans text-sm text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Vegetarian / omnivore equivalence */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-11 h-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                  Vegetarian, vegan or omnivorous — all of it works
                </h2>
                <p className="font-sans text-sm text-muted-foreground mt-2 max-w-2xl">
                  Many of the examples on this page happen to be animal foods because they are
                  concentrated and familiar, but nothing here requires them. Every nutrient your
                  knee depends on can be supplied by a plant-based or fortified alternative. Choose
                  the pattern you will actually keep to.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border overflow-hidden mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-sans">Nutrient</TableHead>
                    <TableHead className="font-sans">Omnivorous sources</TableHead>
                    <TableHead className="font-sans">Vegetarian &amp; plant-based sources</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plantSwaps.map((row) => (
                    <TableRow key={row.nutrient}>
                      <TableCell className="font-sans font-medium text-foreground">
                        {row.nutrient}
                      </TableCell>
                      <TableCell className="font-sans text-muted-foreground">
                        {row.omnivore}
                      </TableCell>
                      <TableCell className="font-sans text-muted-foreground">{row.plant}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="font-sans text-xs text-muted-foreground mt-4">
              Vitamin B12 and iodine need a fortified food or supplement on a fully plant-based
              diet. Our own supplement is available in both marine and vegetarian formulations.
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

        {/* Nutrient table */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
              Key nutrients at a glance
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-6">
              Roles below use officially authorised nutrient wording.
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-sans">Nutrient</TableHead>
                    <TableHead className="font-sans">Role in joint tissue</TableHead>
                    <TableHead className="font-sans">Everyday sources</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nutrientTable.map((row) => (
                    <TableRow key={row.nutrient}>
                      <TableCell className="font-sans font-medium text-foreground">
                        {row.nutrient}
                      </TableCell>
                      <TableCell className="font-sans text-muted-foreground">{row.role}</TableCell>
                      <TableCell className="font-sans text-muted-foreground">{row.food}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Day on a plate */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-muted/40 p-7 md:p-8">
            <h2 className="font-serif text-xl text-foreground mb-3">
              A knee-friendly day on a plate
            </h2>
            <p className="font-sans text-sm text-muted-foreground mb-4">
              An illustration, not a prescription — adapt it to your budget, culture and preferences.
            </p>
            <ul className="space-y-2">
              {dayPlate.map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Caution */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto rounded-xl border border-border bg-secondary/40 p-7 md:p-8">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <h2 className="font-serif text-xl text-foreground">Before you change your diet</h2>
            </div>
            <ul className="space-y-2">
              {[
                "Speak to your GP or pharmacist if you take medicines — some interact with supplements, including vitamin K and blood thinners",
                "Speak to a registered dietitian before cutting out whole food groups",
                "Kidney conditions, diabetes and pregnancy all change nutrient needs",
                "Be wary of any product or plan claiming to cure, treat or reverse joint conditions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
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

        {/* Next */}
        <section className="container mx-auto px-6 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-foreground mb-4">Next in the five pillars</h2>
            <p className="font-sans text-muted-foreground mb-6">
              With the raw material in place, how you move decides where the force lands.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/knee-biomechanics">
                  Biomechanics
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/knee-health-wellness">Back to Health &amp; Wellness</Link>
              </Button>
            </div>
            <p className="font-sans text-xs text-muted-foreground mt-8">
              This page is educational and does not replace medical advice, diagnosis or treatment.
              Food supplements should not be used as a substitute for a varied, balanced diet and
              healthy lifestyle.
            </p>
          </div>
        </section>
        <PartnerLinks topics={["nutrition", "wellness"]} />

      </main>

      <Footer />
    </div>
  );
};

export default NutritionAndDiet;

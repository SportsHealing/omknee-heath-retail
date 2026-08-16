/**
 * Knee Health Pillars - how knee health can be maintained.
 * Five pillars: general health & wellness, nutrition & diet,
 * biomechanics, load management, injury prevention.
 */

import { Link } from "react-router-dom";
import { HeartPulse, Salad, Activity, Gauge, ShieldCheck, ArrowRight } from "lucide-react";

const pillars: { id: string; href?: string; icon: typeof HeartPulse; title: string; summary: string; points: string[] }[] = [
  {
    id: "general-health-wellness",
    href: "/knee-health/wellness",
    icon: HeartPulse,
    title: "General Health & Wellness",
    summary:
      "A healthy knee sits inside a healthy body. Sleep, stress, weight and lifestyle all influence how joint tissue maintains itself.",
    points: [
      "Deep sleep is when repair and renewal happen — protect it",
      "Maintain a healthy weight to reduce the load travelling through the joint",
      "Manage stress; it shapes recovery and how movement feels",
      "Minimise alcohol and avoid smoking, which impairs collagen",
      "Daylight, hormone health and bone density all matter over decades",
    ],
  },
  {
    id: "nutrition-diet",
    href: "/knee-health/nourish",
    icon: Salad,
    title: "Nutrition & Diet",
    summary:
      "Tissue is built from what you eat. A balanced diet supplies the raw material for collagen, muscle and bone.",
    points: [
      "Adequate protein provides the building blocks for repair",
      "Vitamin C contributes to normal collagen formation for cartilage and bone",
      "Vitamin D and calcium contribute to the maintenance of normal bones",
      "Zinc and copper support connective tissue structure",
      "Balance protein, fat and carbohydrate; keep added sugar modest and stay hydrated",
    ],
  },
  {
    id: "knee-biomechanics",
    href: "/knee-health/strength-mobility",
    icon: Activity,
    title: "Improving Knee Biomechanics",
    summary:
      "How you move determines where force lands. Better control spreads load evenly across the joint.",
    points: [
      "Keep a full range of movement — flex and extend to circulate synovial fluid",
      "Practise good control when squatting, landing and descending stairs",
      "Keep quadriceps, hamstrings and hip muscles strong",
      "Stretch tendons and fascia regularly: strong and stretched beats strong and tight",
      "Train balance and coordination; notice if the knee falls inward or outward",
    ],
  },
  {
    id: "managing-load",
    href: "/knee-health/load",
    icon: Gauge,
    title: "Managing Load",
    summary:
      "Tissue adapts to load it can handle and complains about load it cannot. Progression is everything.",
    points: [
      "Build activity up gradually rather than in sudden spikes",
      "Tendons prefer steady, progressive loading over complete rest",
      "Alternate harder sessions with genuine recovery days",
      "Vary activity — walking, cycling and swimming distribute load differently",
      "Avoid long static positions; change posture through the day",
    ],
  },
  {
    id: "injury-prevention",
    href: "/knee-health/prepare",
    icon: ShieldCheck,
    title: "Injury Prevention",
    summary:
      "Most knee injuries happen at the edges of control — fatigue, twisting, and unfamiliar demands.",
    points: [
      "Warm up before impact, pivoting or sport",
      "Pivot smoothly and with control; squat and lunge with good form",
      "Respect fatigue — control fades before strength does",
      "Choose supportive footwear and appropriate surfaces",
      "Rehabilitate previous injuries fully before returning to full demands",
    ],
  },
];

const redFlags = [
  "Persistent swelling or locking",
  "Sharp catching pain",
  "Instability or giving way",
  "Reduced range of movement",
  "Severe pain at night",
  "Growing lumps or bumps",
];

const KneeHealthPillars = () => {
  return (
    <section id="maintaining-knee-health" className="py-24 lg:py-32 bg-background">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
            Everyday Knee Health
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            How knee health can be maintained
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Five areas shape how your knees feel and function over a lifetime. Small, consistent
            habits in each one add up far more than any single intervention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              id={pillar.id}
              className={`scroll-mt-32 rounded-xl border border-border bg-secondary/40 p-7 md:p-8 ${
                index === pillars.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
              </div>
              <ul className={`space-y-2 ${index === pillars.length - 1 ? "md:columns-2 md:gap-8" : ""}`}>
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 font-sans text-sm text-foreground break-inside-avoid"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              {pillar.href && (
                <Link
                  to={pillar.href}
                  className="mt-5 inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
                >
                  Read the full guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </article>
          ))}
        </div>

        {/* When to seek help */}
        <div className="max-w-6xl mx-auto mt-8 rounded-xl border border-border bg-muted/40 p-7 md:p-8">
          <h3 className="font-serif text-xl text-foreground mb-2">When to seek professional help</h3>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Self-care has limits. Speak to a GP, physiotherapist or knee specialist if you notice:
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {redFlags.map((flag) => (
              <li key={flag} className="font-sans text-sm text-foreground flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {flag}
              </li>
            ))}
          </ul>
          <p className="font-sans text-xs text-muted-foreground mt-4">
            This information is educational and does not replace medical advice, diagnosis or
            treatment. In an emergency, call 999.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KneeHealthPillars;

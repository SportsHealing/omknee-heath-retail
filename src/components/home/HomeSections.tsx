/**
 * Home page sections. Copy: handover A1, final wording.
 * Compliance (A1, D1.2): education (Four doors, Knee Score, OmKnee Five) sits
 * above the supplement band. Team cards and the supplement band never sit side
 * by side (D1.7).
 */
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlaceholderText from "@/components/PlaceholderText";
import { OMKNEE_FIVE, WELLNESS_HUB } from "@/lib/omkneeFive";
import { NAV } from "@/lib/navigation";
import { trackPillarSelect } from "@/lib/analytics";
import { TEAM } from "@/content/team";
import { CLINICS, ONLINE_CONSULTATION } from "@/content/clinics";
import { SUPPLEMENT, SUPPLEMENT_PATH } from "@/content/supplement";

const eyebrowClass = "font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4";
const h2Class = "font-serif text-3xl md:text-4xl text-foreground leading-tight";

/** 1. Hero */
export const HomeHero = () => (
  // Starts below the fixed header so the dark logo and links stay readable.
  <section className="relative mt-20 lg:mt-28 min-h-[85vh] flex flex-col justify-center bg-primary text-primary-foreground overflow-hidden">
    <div className="container relative z-10 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-sm tracking-[0.2em] uppercase text-gold mb-6">The OmKnee Club</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">Your knees, looked after for life.</h1>
        <p className="font-sans text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto mb-10">
          Join a free club for knee and musculoskeletal health. Founded and led by consultant knee surgeons, with
          expert-selected products, scans and clinics in one place.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="px-8 py-6 text-base bg-gold text-gold-foreground hover:bg-gold/90">
            <Link to={`${NAV.club.to}#join`}>Join the club, free</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="px-8 py-6 text-base bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/knee-score">Check your knee</Link>
          </Button>
        </div>
        <p className="mt-8 font-sans text-sm text-primary-foreground/80">
          Founding members get £100 towards a knee scan and 15% off the shop.
        </p>
      </div>
    </div>
    <p className="absolute bottom-4 left-0 right-0 text-center font-sans text-xs text-primary-foreground/50">
      [Hero photography: calm movement, no clinical imagery]
    </p>
  </section>
);

/** 2. The team behind the club */
export const HomeTeam = () => (
  <section className="py-20 lg:py-28">
    <div className="container px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className={`${h2Class} mb-6`}>Specialists who know knees.</h2>
        <p className="font-sans text-lg text-muted-foreground leading-relaxed">
          OmKneeHealth was founded by the team behind SportsHealing's knee clinics on Harley Street, in Chiswick and at
          the Platinum Medical Centre. Every guide, product and service here is shaped by people who assess and treat
          knees every day.
        </p>
      </div>
      <ul className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5">
        {TEAM.map((member) => (
          <li key={member.name} className="rounded-2xl border border-border bg-secondary/30 p-6 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-primary/40 font-sans text-xs text-muted-foreground">
              [photo]
            </div>
            <p className="font-serif text-xl text-foreground"><PlaceholderText text={member.name} /></p>
            <p className="mt-2 font-sans text-sm text-muted-foreground"><PlaceholderText text={member.details} /></p>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center">
        <Link to="/about" className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]">
          Meet the team
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </p>
    </div>
  </section>
);

/** 3. Four doors */
const DOORS = [
  { title: NAV.shop.label, line: "Supplements, braces, recovery and after-surgery essentials", to: NAV.shop.to },
  { title: NAV.scansTests.label, line: "Same-day knee MRI and blood tests", to: NAV.scansTests.to },
  { title: NAV.consultations.label, line: "See a specialist online or in clinic", to: NAV.consultations.to },
  { title: NAV.learn.label, line: "The OmKnee Five: a complete approach to knee health", to: NAV.learn.to },
];

export const HomeFourDoors = () => (
  <section className="py-20 lg:py-28 bg-secondary/40">
    <div className="container px-6">
      <h2 className={`${h2Class} text-center mb-12`}>Everything your knees need. One place.</h2>
      <ul className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {DOORS.map((door) => (
          <li key={door.to}>
            <Link
              to={door.to}
              className="group flex h-full min-h-[12rem] flex-col justify-between rounded-2xl border border-border bg-background p-8 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>
                <span className="block font-serif text-2xl text-foreground mb-3">{door.title}</span>
                <span className="block font-sans text-sm text-muted-foreground leading-relaxed">{door.line}</span>
              </span>
              <ArrowRight className="mt-6 h-5 w-5 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/** 4. Knee Score */
export const HomeKneeScore = () => (
  <section className="py-20 lg:py-28">
    <div className="container px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className={`${h2Class} mb-6`}>How are your knees today?</h2>
        <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">
          Take the free Knee Score in a few minutes. Join the club to save it and track change over time.
        </p>
        <Button size="lg" asChild>
          <Link to="/knee-score">Take the Knee Score</Link>
        </Button>
        <p className="mt-6 font-sans text-xs text-muted-foreground">
          The Knee Score is a self assessment tool. It does not provide a medical diagnosis.
        </p>
      </div>
    </div>
  </section>
);

/** 5. The OmKnee Five: a connected journey, with Wellness as the ring around it. */
export const HomeOmKneeFive = () => (
  <section id="omknee-five" className="py-20 lg:py-28 bg-secondary/40 scroll-mt-28">
    <div className="container px-6">
      <h2 className={`${h2Class} text-center mb-12`}>A complete approach to lifelong knee health.</h2>
      <div className="relative max-w-6xl mx-auto rounded-[2.5rem] border-2 border-dashed border-primary/30 px-4 sm:px-8 pt-12 pb-8">
        <Link
          to={WELLNESS_HUB.to}
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary px-3 font-sans text-[0.65rem] tracking-[0.22em] uppercase text-primary/70 hover:text-primary whitespace-nowrap"
        >
          {WELLNESS_HUB.name}
        </Link>
        <span className="absolute left-[12%] right-[12%] top-[4.75rem] hidden h-px bg-primary/25 lg:block" aria-hidden="true" />
        <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {OMKNEE_FIVE.map((pillar) => (
            <li key={pillar.id}>
              <Link
                to={pillar.to}
                onClick={() => trackPillarSelect(pillar.id)}
                className="group flex h-full flex-col rounded-2xl bg-background border border-border p-6 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary font-serif text-sm tabular-nums text-primary-foreground">
                  {pillar.number}
                </span>
                <span className="font-serif text-2xl text-foreground">{pillar.name}</span>
                <span className="mt-1 font-sans text-sm text-primary">{pillar.strapline}</span>
                <span className="mt-3 font-sans text-sm text-muted-foreground leading-relaxed">{pillar.shortDescription}</span>
              </Link>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center font-sans text-muted-foreground">
          Wellness sits around all five: sleep, recovery and the habits that make it stick.
        </p>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        <Button size="lg" asChild>
          <Link to={OMKNEE_FIVE[0].to}>Start with Understand</Link>
        </Button>
        <Link to={WELLNESS_HUB.to} className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]">
          {WELLNESS_HUB.ctaLabel}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

/** 6. OmKneeHealth Supplement feature band. Always below the education sections. */
export const HomeSupplementBand = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`${h2Class} mb-6`}>Our approach to knee nutrition.</h2>
        <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
          Food comes first. Where you choose to supplement, we believe you should know exactly what you are taking and
          why. The {SUPPLEMENT.name} brings together collagen, joint-matrix ingredients, botanicals and bone nutrients
          in one daily serving.
        </p>
        <p className="font-sans text-foreground mb-8">
          Contains vitamin C, which contributes to normal collagen formation for the normal function of bones and
          cartilage.
        </p>
        <Button size="lg" asChild>
          <Link to={SUPPLEMENT_PATH}>Explore the supplement</Link>
        </Button>
        <p className="mt-6 font-sans text-sm text-foreground">
          £{SUPPLEMENT.price} · Member price: £{SUPPLEMENT.memberPrice}
        </p>
      </div>
    </div>
  </section>
);

/** 7. Our clinics */
export const HomeClinics = () => (
  <section className="py-20 lg:py-28">
    <div className="container px-6">
      <h2 className={`${h2Class} text-center mb-12`}>When you want to see someone.</h2>
      <ul className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[...CLINICS, ONLINE_CONSULTATION].map((clinic) => (
          <li key={clinic.id} className="flex flex-col rounded-2xl border border-border bg-background overflow-hidden">
            <div className="flex aspect-video items-center justify-center gap-2 bg-secondary/60 font-sans text-xs text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {clinic.id === "online" ? "Online, UK wide" : "[map]"}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-serif text-lg text-foreground leading-snug">
                {clinic.id === "online" ? "Online consultation, from anywhere in the UK" : clinic.name}
              </p>
              {clinic.id === "online" ? null : (
                <p className="mt-2 font-sans text-sm text-muted-foreground"><PlaceholderText text={clinic.address} /></p>
              )}
              <div className="mt-auto pt-5">
                <Button variant="outline" asChild className="w-full min-h-[44px]">
                  <a href={clinic.bookingUrl} target="_blank" rel="noopener">
                    Book
                    <span className="sr-only">: {clinic.name} (opens in a new tab)</span>
                  </a>
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-10 text-center">
        <Button size="lg" asChild>
          <Link to={NAV.consultations.to}>Book a consultation</Link>
        </Button>
      </div>
    </div>
  </section>
);

/** 8. Club benefits */
const BENEFITS = [
  "£100 towards a knee scan",
  "15% off the OmKneeHealth shop",
  "Save and track your Knee Score",
  "Your personal OmKnee Five plan",
  "Priority booking for scans and consultations",
  "Members-only articles, challenges and Q&A sessions with the team",
  "Founding Member badge for early joiners",
];

export const HomeClubBenefits = () => (
  <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
    <div className="container px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">Membership is free. The benefits are real.</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-left mb-10">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex gap-3 rounded-xl border border-primary-foreground/15 px-5 py-4 font-sans text-primary-foreground/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
        <Button size="lg" asChild className="px-8 py-6 text-base bg-gold text-gold-foreground hover:bg-gold/90">
          <Link to={`${NAV.club.to}#join`}>Join the club, free</Link>
        </Button>
      </div>
    </div>
  </section>
);

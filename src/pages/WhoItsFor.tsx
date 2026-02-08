/**
 * Who It's For Page
 * Defines target audience and suitability
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, User, Users, Activity, Clock } from "lucide-react";

const suitableFor = [
  {
    icon: User,
    title: "Adults seeking proactive joint support",
    description: "Those who want to support their knee health before issues arise, as part of long-term wellness.",
  },
  {
    icon: Activity,
    title: "Active individuals",
    description: "People who exercise regularly and want nutritional support for joints under regular use.",
  },
  {
    icon: Clock,
    title: "Those in their 40s, 50s, 60s and beyond",
    description: "Adults who recognise that joint support becomes more relevant with age.",
  },
  {
    icon: Users,
    title: "People with family history of joint concerns",
    description: "Those who may have increased awareness of joint health due to family experience.",
  },
];

const notSuitableFor = [
  "Anyone seeking treatment for diagnosed conditions—this is a food supplement, not a medicine",
  "Those expecting immediate results—nutritional support is gradual",
  "People with shellfish allergies (unless choosing vegetarian formula)",
  "Pregnant or breastfeeding women (without healthcare provider approval)",
  "Anyone taking blood-thinning medication (without healthcare provider approval)",
  "Children under 18 years",
];

const WhoItsFor = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Who Is OmKneeHealth For? | Knee Joint Support"
        description="Designed for adults seeking long-term knee joint support, mobility and cartilage health through a holistic supplement approach."
        canonicalPath="/who-its-for"
        keywords="knee supplement suitability, who should take joint supplements, joint support for adults, knee health proactive"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Who It's For", url: "https://omkneehealth.com/who-its-for" },
        ]}
      />
      <WebPageSchema
        name="Who Is OmKneeHealth For? - Knee Joint Support"
        description="Understanding who our knee joint supplement is designed for—and who should consider other options."
        url="https://omkneehealth.com/who-its-for"
        type="WebPage"
      />
      <Header />

      <main className="pt-28 lg:pt-48 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              Is This Right For You?
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Who Is OmKneeHealth For?
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our knee joint supplement is designed for adults taking a proactive, long-term approach to joint health. We believe in being transparent about who we're designed for—and who might be better served elsewhere.
            </p>
          </div>
        </section>

        {/* Suitable For */}
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground mb-8 text-center">
              Our supplement may be suitable for
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {suitableFor.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary/30 rounded-lg p-6 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not Suitable For */}
        <section className="container mx-auto px-6 mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground mb-8 text-center">
              This supplement is not suitable for
            </h2>
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <ul className="space-y-4">
                {notSuitableFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Honest Positioning */}
        <section className="container mx-auto px-6 mt-16">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-lg p-8 border border-primary/10">
            <h2 className="font-serif text-xl text-foreground mb-4 text-center">
              Our Honest Position
            </h2>
            <div className="space-y-4 font-sans text-sm text-muted-foreground">
              <p>
                We formulated this supplement for people who understand that joint health is a long-term investment—not a quick fix. Supplements provide nutritional support, not therapeutic treatment.
              </p>
              <p>
                If you're experiencing significant knee pain or have been diagnosed with a joint condition, please work with a healthcare professional. Our supplement may complement their guidance, but it's not a replacement for medical care.
              </p>
              <p>
                We'd rather have fewer customers who are genuinely suited to our product than more customers who expect something we can't deliver.
              </p>
            </div>
          </div>
        </section>

        {/* Assessment CTA */}
        <section className="container mx-auto px-6 mt-16">
          <div className="max-w-2xl mx-auto text-center bg-secondary/30 rounded-lg p-8 md:p-12 border border-border">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Not sure if it's right for you?
            </h2>
            <p className="font-sans text-muted-foreground mb-6">
              Take our free knee health assessment to better understand your situation and whether supplementation might be appropriate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/assessment"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Take free assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-secondary/80 transition-colors border border-border"
              >
                View supplement
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhoItsFor;
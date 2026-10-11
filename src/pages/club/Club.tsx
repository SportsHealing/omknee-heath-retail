/**
 * The OmKnee Club (/club). Copy: handover A2.
 * The join form, confirmation screen and Klaviyo subscription arrive in Phase 4.
 */
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PlaceholderText from "@/components/PlaceholderText";
import { Button } from "@/components/ui/button";

const benefits = [
  { benefit: "£100 scan credit", detail: "Towards a knee scan booked through MyKneeScan" },
  { benefit: "15% off the shop", detail: "On supplements, braces, recovery and after-surgery products" },
  { benefit: "Your Knee Score, saved", detail: "Track how your knees change over time, with MyKneeScore" },
  { benefit: "Your OmKnee Five plan", detail: "Practical steps matched to your goals" },
  { benefit: "Priority booking", detail: "Earlier access to scan and consultation slots" },
  { benefit: "Members' Journal", detail: "Articles, seasonal challenges and Q&A sessions with the team" },
  { benefit: "Founding Member status", detail: "A badge for our first members, kept for life" },
];

const steps = [
  "Join with your email. It takes 30 seconds.",
  "Take the Knee Score and save it with MyKneeScore.",
  "Get your welcome codes and your first plan by email.",
];

const Club = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="The OmKnee Club"
      description="Free membership for everyone who wants to keep moving. £100 towards a knee scan, 15% off the shop and your Knee Score saved."
      canonicalPath="/club"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://omkneehealth.com" },
        { name: "The OmKnee Club", url: "https://omkneehealth.com/club" },
      ]}
    />
    <Header />
    <main className="pt-32 lg:pt-48 pb-24">
      <section className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Welcome to the OmKnee Club.
          </h1>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Free membership for everyone who wants to keep moving. Your knee health, tracked and looked after over the
            years, by a team that specialises in knees.
          </p>
        </div>
      </section>

      <section className="container px-6 mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">What you get</h2>
          <dl className="grid sm:grid-cols-2 gap-4">
            {benefits.map((item) => (
              <div key={item.benefit} className="rounded-xl border border-border bg-secondary/30 p-5">
                <dt className="font-serif text-lg text-foreground mb-1">{item.benefit}</dt>
                <dd className="font-sans text-sm text-muted-foreground leading-relaxed">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container px-6 mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">How it works</h2>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={step} className="flex gap-4 items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 font-serif text-sm text-primary tabular-nums">
                  {i + 1}
                </span>
                <span className="font-sans text-muted-foreground pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="join" className="container px-6 mt-16">
        <div className="max-w-xl mx-auto rounded-2xl border border-border bg-secondary/40 p-8 text-center">
          <Button size="lg" disabled aria-describedby="join-pending">
            Join the club, free
          </Button>
          <p id="join-pending" className="mt-4 font-sans text-sm text-muted-foreground">
            <PlaceholderText text="[Join form: built in Phase 4 with Klaviyo]" />
          </p>
          <p className="mt-4 font-sans text-xs text-muted-foreground">
            Free to join. Unsubscribe any time.{" "}
            <Link to="/privacy-policy" className="underline underline-offset-4 hover:text-foreground">Privacy Policy</Link>
            {" · "}
            <Link to="/club-terms" className="underline underline-offset-4 hover:text-foreground">Club terms</Link>
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Club;

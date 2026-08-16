import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import EcosystemPathway from "@/components/EcosystemPathway";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Account = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Your Account | OmKneeHealth"
      description="Manage your OmKneeHealth orders and preferences. Your Knee Score and its history are kept with MyKneeScore."
      canonicalPath="/account"
    />
    <Header />
    <main>
      <section className="pt-32 pb-24 lg:pt-56 lg:pb-32">
        <div className="container px-6">
          <div className="max-w-xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-6">Account</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Your account
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-10">
              Accounts and order history are on the way. In the meantime, your Knee Score and its
              history live with MyKneeScore, and our team can help with anything order-related.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:underline underline-offset-4 min-h-[44px]"
            >
              Contact the team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <EcosystemPathway
        site="mykneescore"
        title="Looking for your Knee Score?"
        description="Your score and how it changes over time are kept securely with MyKneeScore."
      />
    </main>
    <Footer />
  </div>
);

export default Account;

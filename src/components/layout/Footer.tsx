import { Instagram, Facebook, Linkedin } from "lucide-react";
import JoinForm from "@/components/club/JoinForm";
import logoWhite from "@/assets/logo-white.png";
import { OMKNEE_FIVE, WELLNESS_HUB } from "@/lib/omkneeFive";
import { NAV, SUPPLEMENT_LINK } from "@/lib/navigation";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/omkneehealth" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/omkneehealth" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/omkneehealth" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container px-6">
        {/* Your Knee Journey */}
        <div className="mb-12 pb-10 border-b border-primary-foreground/10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-6 text-center">
            Your Knee Journey
          </p>
          <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
            {[
              { step: "Look after", name: "OmKneeHealth", href: "/", external: false },
              { step: "Check", name: "MyKneeScore", href: "https://mykneescore.com/", external: true },
              { step: "Understand", name: "Knee Passport", href: "https://www.sportshealing.com/know-your-knee/", external: true },
              { step: "Scan", name: "MyKneeScan", href: "https://www.mykneescan.com/", external: true },
              { step: "Specialist care", name: "SportsHealing", href: "https://www.sportshealing.com/", external: true },
              { step: "Clinical expertise", name: "ChinmayGupte.com", href: "https://www.chinmaygupte.com/", external: true },
            ].map((item, i) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
                  className="block h-full rounded-lg border border-primary-foreground/15 px-5 py-4 transition-colors hover:border-primary-foreground/40"
                >
                  <span className="block font-sans text-[0.7rem] tracking-[0.15em] uppercase text-primary-foreground/50 mb-1">
                    {`0${i + 1} · ${item.step}`}
                  </span>
                  <span className="font-sans text-sm text-primary-foreground/90">{item.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* UK Trust Banner */}
        <div className="mb-12 pb-10 border-b border-primary-foreground/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-3">
              Designed for UK Lifestyles
            </p>
            <p className="font-sans text-sm text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Formulated in the United Kingdom by UK-based clinicians, manufactured to UK GMP standards, and designed specifically for British joint health needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-sans text-primary-foreground/60">
              <span className="bg-primary-foreground/10 px-3 py-1.5 rounded-full">UK GMP Certified</span>
              <span className="bg-primary-foreground/10 px-3 py-1.5 rounded-full">Third-Party UK Lab Tested</span>
              <span className="bg-primary-foreground/10 px-3 py-1.5 rounded-full">EFSA-Compliant Claims</span>
              <span className="bg-primary-foreground/10 px-3 py-1.5 rounded-full">Free UK Delivery</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={logoWhite} 
              alt="OmKneeHealth - UK Knee Joint Supplement" 
              width={160}
              height={64}
              className="h-16 w-auto mb-4"
            />
            <p className="font-sans text-sm text-primary-foreground/70 leading-relaxed mb-4">
              UK clinician-founded. Evidence-informed joint health.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/80" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 text-primary-foreground/50">
              Get started
            </h4>
            <ul className="space-y-1">
              {[NAV.club, NAV.scansTests, NAV.consultations, { to: "/knee-score", label: "Get Your Knee Score" }].map((item) => (
                <li key={item.to}>
                  <a href={item.to} className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 text-primary-foreground/50">
              The OmKnee Five
            </h4>
            <ul className="space-y-1">
              <li>
                <a href={NAV.learn.to} className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  The OmKnee Five
                </a>
              </li>
              {OMKNEE_FIVE.map((pillar) => (
                <li key={pillar.id}>
                  <a
                    href={pillar.to}
                    className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 flex items-center gap-2"
                  >
                    <span className="text-primary-foreground/40 tabular-nums text-xs">{pillar.number}</span>
                    {pillar.name}
                  </a>
                </li>
              ))}
              <li>
                <a href={WELLNESS_HUB.to} className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  {WELLNESS_HUB.name}
                </a>
              </li>
              <li>
                <a href="/journal" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Journal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 text-primary-foreground/50">
              Shop
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="/shop" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  All knee health products
                </a>
              </li>
              <li>
                <a href={SUPPLEMENT_LINK.to} className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  {SUPPLEMENT_LINK.label}
                </a>
              </li>
              <li>
                <a href="/ingredients" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/who-its-for" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Who It's For
                </a>
              </li>
              <li>
                <a href="/faq" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 text-primary-foreground/50">
              Ecosystem
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="/partners" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Our Partner Network
                </a>
              </li>
              <li>
                <a href="https://mykneescore.com/" target="_blank" rel="noopener" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  MyKneeScore: assessment & monitoring
                </a>
              </li>
              <li>
                <a href="https://www.sportshealing.com/" target="_blank" rel="noopener" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  SportsHealing: education & rehabilitation
                </a>
              </li>
              <li>
                <a href="https://mykneescan.com/" target="_blank" rel="noopener" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  MyKneeScan: knee imaging
                </a>
              </li>
              <li>
                <a href="https://www.chinmaygupte.com/" target="_blank" rel="noopener" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Mr Chinmay Gupte: knee surgeon, London
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 text-primary-foreground/50">
              Company
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="mailto:hello@omkneehealth.com" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  hello@<wbr />omkneehealth.com
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/returns-policy" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="/legal" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Legal & Compliance
                </a>
              </li>
              <li>
                <a href="/team-resources" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Team Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-10 border-t border-primary-foreground/10">
          <div className="max-w-md mx-auto">
            <h4 className="font-serif text-lg text-primary-foreground mb-4 text-center">Join the OmKnee Club, free</h4>
            <JoinForm source="footer" tone="dark" compact confirmationHeading="h3" />
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="font-serif text-xl text-primary-foreground/90 text-center mb-8">
            Understand. Look after. Keep moving.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} OmKneeHealth. All rights reserved.
            </p>
            <p className="font-sans text-xs text-primary-foreground/40 text-center md:text-right max-w-xl">
              Food supplement. Not intended to diagnose, treat, cure, or prevent any disease. 
              Consult your healthcare provider before use.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

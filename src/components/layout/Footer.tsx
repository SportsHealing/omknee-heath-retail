import { useState } from "react";
import { Instagram, Facebook, Linkedin, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/omkneehealth" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/omkneehealth" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/omkneehealth" },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail("");
    
    toast({
      title: "You're subscribed!",
      description: "Thank you for joining our newsletter.",
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container px-6">
        {/* Your Knee Journey */}
        <div className="mb-12 pb-10 border-b border-primary-foreground/10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-6 text-center">
            Your Knee Journey
          </p>
          <ol className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {[
              { step: "Understand", name: "OmKneeHealth", href: "/knee-health", external: false },
              { step: "Check", name: "MyKneeScore", href: "https://mykneescore.com/", external: true },
              { step: "Scan", name: "MyKneeScan", href: "https://mykneescan.com/", external: true },
              { step: "Specialist care", name: "SportsHealing", href: "https://www.sportshealing.com/", external: true },
              { step: "Clinical lead", name: "Mr Chinmay Gupte", href: "https://www.chinmaygupte.com/", external: true },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
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
              Knee Health
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="/knee-health" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Knee Health hub
                </a>
              </li>
              <li>
                <a href="/your-knee" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Your Knee
                </a>
              </li>
              <li>
                <a href="/knee-movement" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Movement
                </a>
              </li>
              <li>
                <a href="/cartilage-collagen-synovial-fluid" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Cartilage, Collagen & Synovial Fluid
                </a>
              </li>
              <li>
                <a href="/movement-biomechanics" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Strength & Mobility
                </a>
              </li>
              <li>
                <a href="/nourish" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Nutrition
                </a>
              </li>
              <li>
                <a href="/healthy-knees-through-life" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Healthy Knees Through Life
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
                <a href="/product" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Joint + Movement Support
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
                <a href="/knee-score" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Get Your Knee Score
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
                  hello@omkneehealth.com
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
          <div className="max-w-sm mx-auto text-center">
            <h4 className="font-serif text-lg text-primary-foreground mb-4">
              Stay informed
            </h4>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <CheckCircle className="w-5 h-5" />
                <span className="font-sans text-sm">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/40"
                  aria-label="Email address for newsletter"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="secondary"
                  className="px-4"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? (
                    "..."
                  ) : (
                    <Send className="w-4 h-4" aria-hidden="true" />
                  )}
                </Button>
              </form>
            )}
            
            <p className="font-sans text-xs text-primary-foreground/40 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
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

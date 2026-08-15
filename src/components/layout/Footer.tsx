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

        <div className="grid md:grid-cols-4 gap-10 mb-12">
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

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 text-primary-foreground/50">
              Shop
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="/product" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Joint + Movement Support
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
                <a href="/ingredients" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Ingredients
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 text-primary-foreground/50">
              Learn
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="/blog" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Knee Health Blog
                </a>
              </li>
              <li>
                <a href="/science" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  The Science
                </a>
              </li>
              <li>
                <a href="/assessment" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Free Knee Assessment
                </a>
              </li>
              <li>
                <a href="/curated" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Curated Resources
                </a>
              </li>
              <li>
                <a href="/faq" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  FAQs
                </a>
              </li>
            </ul>

            {/* Clinical partners */}
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 mt-6 text-primary-foreground/50">
              Clinical Partners
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="/partners" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Our Partner Network
                </a>
              </li>
              <li>
                <a href="https://www.sportshealing.com/" target="_blank" rel="noopener" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  SportsHealing: musculoskeletal care
                </a>
              </li>
              <li>
                <a href="https://www.chinmaygupte.com/" target="_blank" rel="noopener" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Mr Chinmay Gupte: knee surgeon, London
                </a>
              </li>
              <li>
                <a href="https://mykneescan.com/" target="_blank" rel="noopener" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  MyKneeScan: same-day knee MRI
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 text-primary-foreground/50">
              Contact
            </h4>
            <ul className="space-y-1">
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
                <a href="/#our-story" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Our Story
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
            </ul>

            {/* Team Resources */}
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 mt-6 text-primary-foreground/50">
              Team Resources
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="/team-resources" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors min-h-[44px] py-2 block">
                  Internal Resources
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

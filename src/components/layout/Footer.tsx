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
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img 
              src={logoWhite} 
              alt="OmKneeHealth" 
              className="h-16 w-auto mb-4"
            />
            <p className="font-sans text-sm text-primary-foreground/70 leading-relaxed mb-4">
              Knee health, considered properly. Founded by Chinmay and Cynthia Gupte — 
              clinicians bringing evidence-informed care to joint health support.
            </p>
            <p className="font-sans text-xs text-primary-foreground/50 italic mb-4">
              Designed by clinicians. Guided by evidence.
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
            <ul className="space-y-3">
              <li>
                <a href="/product" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Joint + Movement Support
                </a>
              </li>
              <li>
                <a href="/product#how-to-use" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  How to Use
                </a>
              </li>
              <li>
                <a href="/product#ingredients" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
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
            <ul className="space-y-3">
              <li>
                <a href="/#philosophy" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="/science" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  The Science
                </a>
              </li>
              <li>
                <a href="/assessment" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Knee Assessment
                </a>
              </li>
              <li>
                <a href="/product#product-faq" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.15em] mb-4 text-primary-foreground/50">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="mailto:hello@omkneehealth.com" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  hello@omkneehealth.com
                </a>
              </li>
              <li>
                <a href="/#our-story" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/returns-policy" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Returns Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-primary-foreground/10">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-serif text-lg text-primary-foreground mb-2">
              Stay informed
            </h4>
            <p className="font-sans text-sm text-primary-foreground/60 mb-4">
              Get evidence-based insights on joint health delivered to your inbox.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <CheckCircle className="w-5 h-5" />
                <span className="font-sans text-sm">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/40"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="secondary"
                  className="px-4"
                >
                  {isSubmitting ? (
                    "..."
                  ) : (
                    <Send className="w-4 h-4" />
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

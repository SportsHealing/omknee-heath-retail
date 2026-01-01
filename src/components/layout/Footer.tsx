import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
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
            <p className="font-sans text-xs text-primary-foreground/50 italic">
              Designed by clinicians. Guided by evidence.
            </p>
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
                <a href="#" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
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

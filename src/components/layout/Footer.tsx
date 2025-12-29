const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-xl font-medium">
              OmKnee<span className="opacity-60">Health</span>
            </span>
            <p className="font-sans text-sm text-primary-foreground/60 mt-4 leading-relaxed">
              Clinician-led joint support, grounded in evidence and care.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide mb-4 opacity-60">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Joint Support
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Bundles
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide mb-4 opacity-60">
              Learn
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  The Science
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide mb-4 opacity-60">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-primary-foreground/40">
              © 2024 OmKneeHealth. All rights reserved.
            </p>
            <p className="font-sans text-xs text-primary-foreground/40 text-center max-w-xl">
              These statements have not been evaluated by the FDA. Our products are not intended 
              to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider 
              before use.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

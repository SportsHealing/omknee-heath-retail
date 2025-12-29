import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-om-forest text-white py-16">
      <div className="container px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img 
              src={logoWhite} 
              alt="OmKneeHealth London" 
              className="h-16 w-auto mb-4"
            />
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Holistic knee care, personalised. Clinician-led joint support, grounded in evidence and care.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide mb-4 text-white/60">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/product" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="/product" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
                  Joint Support
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
                  Bundles
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide mb-4 text-white/60">
              Learn
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="/science" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
                  The Science
                </a>
              </li>
              <li>
                <a href="/product#faq" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wide mb-4 text-white/60">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-white/40">
              © 2024 OmKneeHealth London. All rights reserved.
            </p>
            <p className="font-sans text-xs text-white/40 text-center max-w-xl">
              These statements have not been evaluated by regulatory authorities. Our products are not intended 
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

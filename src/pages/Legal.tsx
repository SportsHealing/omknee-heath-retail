/**
 * Legal / Compliance Page
 * Supplement information, disclaimers, and regulatory compliance
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { Link } from "react-router-dom";
import { FileText, Shield, AlertTriangle, Scale } from "lucide-react";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Supplement Information & Disclaimers | OmKneeHealth"
        description="Important information, disclaimers and usage guidance relating to OmKneeHealth supplements and website content."
        canonicalPath="/legal"
        keywords="supplement disclaimer, food supplement information, EFSA compliance, supplement safety"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Legal Information", url: "https://omkneehealth.com/legal" },
        ]}
      />
      <WebPageSchema
        name="Supplement Information & Disclaimers - OmKneeHealth"
        description="Important legal information, disclaimers, and regulatory compliance information for OmKneeHealth products."
        url="https://omkneehealth.com/legal"
        type="WebPage"
      />
      <Header />

      <main className="pt-28 lg:pt-48 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6">
              Supplement Information & Disclaimers
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Important information about our products, health claims, and regulatory compliance.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Food Supplement Status */}
            <div className="bg-secondary/30 rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-xl text-foreground pt-1">Food Supplement Status</h2>
              </div>
              <div className="space-y-4 font-sans text-sm text-muted-foreground leading-relaxed">
                <p>
                  OmKneeHealth products are classified as <strong className="text-foreground">food supplements</strong> under UK and EU food law. They are not medicines and are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
                </p>
                <p>
                  Food supplements are intended to supplement the diet and should not be used as a substitute for a varied, balanced diet and a healthy lifestyle.
                </p>
                <p>
                  The recommended daily dose should not be exceeded. Keep out of reach of young children. Store in a cool, dry place away from direct sunlight.
                </p>
              </div>
            </div>

            {/* Health Claims */}
            <div className="bg-secondary/30 rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-xl text-foreground pt-1">Health Claims & EFSA Compliance</h2>
              </div>
              <div className="space-y-4 font-sans text-sm text-muted-foreground leading-relaxed">
                <p>
                  All health claims made on this website and product packaging comply with the <strong className="text-foreground">EU Nutrition and Health Claims Regulation (EC) No 1924/2006</strong> and are based on authorised claims from the EU Register.
                </p>
                <p>
                  <strong className="text-foreground">EFSA-authorised claims used on this site include:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Vitamin C contributes to normal collagen formation for the normal function of cartilage</li>
                  <li>Vitamin D contributes to the maintenance of normal bones</li>
                  <li>Vitamin D contributes to the maintenance of normal muscle function</li>
                  <li>Copper contributes to maintenance of normal connective tissues</li>
                  <li>Manganese contributes to normal formation of connective tissue</li>
                  <li>Zinc contributes to normal protein synthesis</li>
                </ul>
                <p>
                  Where ingredients do not have authorised health claims (such as collagen peptides, glucosamine, chondroitin, curcumin, and boswellia), we do not make specific health claims. We describe their scientific rationale and traditional use transparently.
                </p>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="bg-secondary/50 rounded-lg p-8 border border-destructive/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <h2 className="font-serif text-xl text-foreground pt-1">Medical Disclaimer</h2>
              </div>
              <div className="space-y-4 font-sans text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">This product is not intended to diagnose, treat, cure, or prevent any disease.</strong>
                </p>
                <p>
                  The information provided on this website is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition.
                </p>
                <p>
                  If you experience knee pain, swelling, instability, or other symptoms, please consult a healthcare professional for proper assessment. Do not delay seeking medical advice because of information on this website.
                </p>
                <p>
                  <strong className="text-foreground">Consult your doctor before use if you:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Are pregnant or breastfeeding</li>
                  <li>Take any medications, especially blood thinners or diabetes medication</li>
                  <li>Have any medical conditions</li>
                  <li>Have allergies to any ingredients (including shellfish for our Original Formula)</li>
                  <li>Are scheduled for surgery</li>
                </ul>
              </div>
            </div>

            {/* Website Content */}
            <div className="bg-secondary/30 rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-serif text-xl text-foreground pt-1">Website Content</h2>
              </div>
              <div className="space-y-4 font-sans text-sm text-muted-foreground leading-relaxed">
                <p>
                  The content on this website is provided for informational purposes only. While we strive to keep information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information.
                </p>
                <p>
                  Scientific research is ongoing, and our understanding of nutrition and joint health continues to evolve. Information presented reflects our current understanding at the time of publication.
                </p>
                <p>
                  References to clinical studies and research are provided for informational purposes. Individual results may vary, and we make no guarantees about specific outcomes from using our products.
                </p>
              </div>
            </div>

            {/* Related Policies */}
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <h2 className="font-serif text-xl text-foreground mb-4">Related Policies</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy-policy" className="font-sans text-sm text-primary hover:underline">
                    Privacy Policy →
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="font-sans text-sm text-primary hover:underline">
                    Terms & Conditions →
                  </Link>
                </li>
                <li>
                  <Link to="/returns-policy" className="font-sans text-sm text-primary hover:underline">
                    Returns Policy →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center">
              <p className="font-sans text-sm text-muted-foreground mb-4">
                Questions about our compliance or product information?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Contact us
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
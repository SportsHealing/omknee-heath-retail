import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy"
        description="OmKneeHealth Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with UK GDPR."
        canonicalPath="/privacy-policy"
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
                Legal
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Privacy Policy
              </h1>
              <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  OmKneeHealth ("we", "our", or "us") is committed to protecting your privacy and 
                  ensuring that your personal data is handled in a safe and responsible manner. 
                  This Privacy Policy explains how we collect, use, store, and protect your personal 
                  information in accordance with the UK General Data Protection Regulation (UK GDPR) 
                  and the Data Protection Act 2018.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our website and services, you consent to the practices described in this policy.
                </p>
              </section>

              {/* Data Controller */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">2. Data Controller</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  OmKneeHealth is the data controller responsible for your personal data. If you have 
                  any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <p className="text-foreground font-medium mb-2">OmKneeHealth</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline">hello@omkneehealth.com</a>
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">3. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect and process the following categories of personal data:
                </p>
                
                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Assessment Data:</strong> Responses to our knee health assessments, including symptom information, health history, and lifestyle factors.</li>
                  <li><strong>Contact Information:</strong> Name, email address, and any other details you provide when contacting us or signing up for updates.</li>
                  <li><strong>Transaction Data:</strong> Purchase history, payment details (processed securely by our payment provider), and delivery information.</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Technical Data:</strong> IP address, browser type and version, device information, operating system, and timezone settings.</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on pages, navigation paths, and interaction with website features.</li>
                  <li><strong>Cookies:</strong> Information collected through cookies and similar tracking technologies (see Section 8).</li>
                </ul>
              </section>

              {/* Legal Basis for Processing */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">4. Legal Basis for Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under UK GDPR, we must have a lawful basis for processing your personal data. We rely on the following:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Consent:</strong> Where you have given clear consent for us to process your personal data for specific purposes (e.g., marketing communications, assessment reports).</li>
                  <li><strong>Contract:</strong> Where processing is necessary to fulfil a contract with you (e.g., processing orders, delivering products).</li>
                  <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests, provided these do not override your rights (e.g., improving our services, website analytics).</li>
                  <li><strong>Legal Obligation:</strong> Where we need to comply with a legal requirement.</li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">5. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your personal data for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provide and personalise our knee health assessment tools</li>
                  <li>To process and fulfil product orders</li>
                  <li>To send you assessment reports and results (with your consent)</li>
                  <li>To respond to your enquiries and provide customer support</li>
                  <li>To send marketing communications (where you have opted in)</li>
                  <li>To improve our website, products, and services</li>
                  <li>To comply with legal and regulatory requirements</li>
                  <li>To detect and prevent fraud or misuse of our services</li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">6. Data Sharing and Third Parties</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal data. We may share your data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our website, processing payments, and delivering products (e.g., payment processors, delivery services).</li>
                  <li><strong>Analytics Providers:</strong> Services that help us understand website usage (data is anonymised where possible).</li>
                  <li><strong>Legal Authorities:</strong> Where required by law, court order, or to protect our legal rights.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  All third parties are contractually obligated to handle your data securely and in accordance with UK GDPR.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Assessment Data:</strong> Not stored unless you explicitly request an emailed report. Session data is processed locally in your browser and not transmitted to our servers.</li>
                  <li><strong>Transaction Data:</strong> Retained for 7 years to comply with tax and accounting requirements.</li>
                  <li><strong>Marketing Data:</strong> Until you unsubscribe or withdraw consent.</li>
                  <li><strong>Website Analytics:</strong> Aggregated data retained for up to 26 months.</li>
                </ul>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our website uses cookies to enhance your experience. Cookies are small text files stored on your device. We use:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and choices.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">9. Your Rights Under UK GDPR</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten").</li>
                  <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data.</li>
                  <li><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format.</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline">hello@omkneehealth.com</a>. 
                  We will respond within one month of your request.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">10. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organisational measures to protect your personal data against 
                  unauthorised access, alteration, disclosure, or destruction. This includes encryption, secure servers, 
                  and regular security assessments. However, no method of transmission over the internet is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">11. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your data is primarily processed within the UK and European Economic Area (EEA). Where we transfer 
                  data outside the UK/EEA, we ensure appropriate safeguards are in place, such as Standard Contractual 
                  Clauses approved by the UK Information Commissioner's Office (ICO) or transfers to countries with 
                  adequate data protection laws.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">12. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed at individuals under 18 years of age. We do not knowingly collect 
                  personal data from children. If you believe we have inadvertently collected data from a child, 
                  please contact us immediately.
                </p>
              </section>

              {/* Changes to Policy */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">13. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                  with an updated "Last updated" date. We encourage you to review this policy periodically. 
                  Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Complaints */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">14. Complaints</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have concerns about how we handle your personal data, please contact us first at{" "}
                  <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline">hello@omkneehealth.com</a>. 
                  We will do our best to resolve any issues.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO):
                </p>
                <div className="bg-muted/30 rounded-xl p-6 border border-border mt-4">
                  <p className="text-foreground font-medium mb-2">Information Commissioner's Office</p>
                  <p className="text-muted-foreground mb-1">Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ico.org.uk</a></p>
                  <p className="text-muted-foreground">Helpline: 0303 123 1113</p>
                </div>
              </section>

              {/* Contact */}
              <section className="pb-8">
                <h2 className="text-xl font-serif text-foreground mb-4">15. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For any questions, concerns, or requests regarding this Privacy Policy or your personal data, 
                  please contact us:
                </p>
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <p className="text-foreground font-medium mb-2">OmKneeHealth</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline">hello@omkneehealth.com</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
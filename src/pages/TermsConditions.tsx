import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms & Conditions"
        description="OmKneeHealth Terms and Conditions. Read our terms of use, product disclaimers, and legal information."
        canonicalPath="/terms-conditions"
      />
      <Header />
      <main className="pt-28 lg:pt-48 pb-16">
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
                Terms & Conditions
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
                  Welcome to OmKneeHealth. These Terms and Conditions ("Terms") govern your use of our website 
                  at www.omkneehealth.com ("Website") and the purchase of products from us. By accessing our 
                  Website or purchasing our products, you agree to be bound by these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Please read these Terms carefully before using our Website or making a purchase. If you do 
                  not agree with any part of these Terms, you must not use our Website or purchase our products.
                </p>
              </section>

              {/* About Us */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">2. About Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  OmKneeHealth is a trading name. We are a UK-based company specialising in evidence-informed 
                  knee health support products and educational resources.
                </p>
                <div className="bg-muted/30 rounded-xl p-6 border border-border">
                  <p className="text-foreground font-medium mb-2">Contact Information</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline">hello@omkneehealth.com</a>
                  </p>
                </div>
              </section>

              {/* Website Use */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">3. Use of Our Website</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using our Website, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use the Website only for lawful purposes and in accordance with these Terms</li>
                  <li>Not use the Website in any way that could damage, disable, or impair the Website</li>
                  <li>Not attempt to gain unauthorised access to any part of the Website or its systems</li>
                  <li>Not use the Website to transmit any harmful, offensive, or illegal content</li>
                  <li>Provide accurate and complete information when creating an account or making a purchase</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We reserve the right to restrict or terminate your access to the Website at any time if we 
                  believe you have breached these Terms.
                </p>
              </section>

              {/* Food Supplement Disclaimer */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">4. Product Disclaimer – Food Supplements</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4">
                  <p className="text-amber-800 font-medium mb-2">Important Notice</p>
                  <p className="text-amber-700 text-sm">
                    Our products are food supplements and are not intended to diagnose, treat, cure, or prevent 
                    any disease. They should not be used as a substitute for a varied and balanced diet or a 
                    healthy lifestyle.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Please note the following:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Our products are classified as food supplements under UK and EU regulations</li>
                  <li>Health claims made are limited to those authorised by the European Food Safety Authority (EFSA) and permitted under UK law</li>
                  <li>Results may vary between individuals and are not guaranteed</li>
                  <li>Do not exceed the stated recommended daily dose</li>
                  <li>Keep out of reach of children</li>
                  <li>Store in a cool, dry place away from direct sunlight</li>
                </ul>
              </section>

              {/* Medical Disclaimer */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">5. Medical Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The information provided on our Website, including our knee health assessments and educational 
                  content, is for general informational and educational purposes only. It is not intended to be 
                  and should not be construed as medical advice.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Always consult a qualified healthcare professional before starting any supplement, especially if you are pregnant, breastfeeding, taking medication, or have a medical condition</li>
                  <li>Our knee assessments are educational tools and do not constitute medical diagnosis or treatment recommendations</li>
                  <li>Do not disregard professional medical advice or delay seeking it based on information from our Website</li>
                  <li>If you experience any adverse reactions, discontinue use and seek medical attention immediately</li>
                </ul>
              </section>

              {/* Products and Orders */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">6. Products and Orders</h2>
                
                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">6.1 Product Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We make every effort to ensure that product descriptions, images, and prices on our Website 
                  are accurate. However, we do not warrant that product descriptions or other content is 
                  error-free. If a product is not as described, your sole remedy is to return it in accordance 
                  with our returns policy.
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">6.2 Placing an Order</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you place an order through our Website, you are making an offer to purchase products. 
                  We reserve the right to accept or decline your order. A contract is formed only when we 
                  dispatch your order and send you a dispatch confirmation.
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">6.3 Pricing and Payment</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>All prices are in British Pounds (GBP) and include VAT where applicable</li>
                  <li>We reserve the right to change prices at any time without notice</li>
                  <li>Payment must be made at the time of ordering</li>
                  <li>We accept major credit/debit cards and other payment methods as displayed at checkout</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">6.4 Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We aim to dispatch orders within 1-2 business days. Delivery times are estimates and not 
                  guaranteed. We are not liable for delays caused by circumstances beyond our control. 
                  Free UK delivery is available on orders over £30.
                </p>
              </section>

              {/* Subscriptions */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">7. Subscription Orders</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you choose to subscribe to regular deliveries:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Your payment method will be charged automatically at the frequency you select</li>
                  <li>You can cancel, pause, or modify your subscription at any time before the next billing date</li>
                  <li>Subscription discounts apply only while your subscription is active</li>
                  <li>We will notify you before any price changes to your subscription</li>
                  <li>Cancellation requests must be made at least 48 hours before your next scheduled delivery</li>
                </ul>
              </section>

              {/* Returns and Refunds */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">8. Returns and Refunds</h2>
                
                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">8.1 Right to Cancel</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under the Consumer Contracts Regulations 2013, you have the right to cancel your order within 
                  14 days of receiving your goods without giving any reason. To exercise this right, you must 
                  inform us of your decision to cancel by a clear statement (e.g., email to hello@omkneehealth.com).
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">8.2 Returns Conditions</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Products must be returned unopened and in their original packaging</li>
                  <li>Opened products cannot be returned for hygiene and safety reasons, unless defective</li>
                  <li>You are responsible for the cost of returning the goods</li>
                  <li>Refunds will be processed within 14 days of receiving the returned goods</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">8.3 Defective Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you receive a defective product, please contact us within 7 days of delivery. We will 
                  arrange for a replacement or full refund, including return postage costs.
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">9. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content on our Website, including but not limited to text, graphics, logos, images, 
                  audio, video, software, and the compilation thereof, is the property of OmKneeHealth or 
                  its content suppliers and is protected by UK and international copyright laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works from, publicly display, 
                  or exploit any content from our Website without our prior written consent.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">10. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Our Website and products are provided "as is" without warranties of any kind, either express or implied</li>
                  <li>We do not guarantee that our Website will be uninterrupted, secure, or error-free</li>
                  <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Website or products</li>
                  <li>Our total liability for any claim arising from or relating to these Terms shall not exceed the amount you paid for the relevant product</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Nothing in these Terms excludes or limits our liability for death or personal injury caused 
                  by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot 
                  be excluded or limited by English law.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">11. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless OmKneeHealth, its officers, directors, employees, 
                  and agents from any claims, damages, losses, liabilities, costs, or expenses (including 
                  legal fees) arising from your use of our Website, breach of these Terms, or violation of 
                  any rights of a third party.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">12. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Website may contain links to third-party websites. These links are provided for your 
                  convenience only. We have no control over and are not responsible for the content, privacy 
                  policies, or practices of any third-party websites. Your use of third-party websites is at 
                  your own risk.
                </p>
              </section>

              {/* Force Majeure */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">13. Force Majeure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We shall not be liable for any failure or delay in performing our obligations where such 
                  failure or delay results from circumstances beyond our reasonable control, including but 
                  not limited to natural disasters, war, terrorism, riots, government actions, pandemic, 
                  strikes, or supply chain disruptions.
                </p>
              </section>

              {/* Severability */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">14. Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be invalid, illegal, or unenforceable by a 
                  court of competent jurisdiction, such provision shall be deemed modified to the minimum 
                  extent necessary to make it valid and enforceable. The remaining provisions shall continue 
                  in full force and effect.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">15. Governing Law and Jurisdiction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of England and 
                  Wales. Any disputes arising from or relating to these Terms or your use of our Website 
                  shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-xl font-serif text-foreground mb-4">16. Changes to These Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                  upon posting to our Website with an updated "Last updated" date. Your continued use of our 
                  Website after any changes constitutes acceptance of the new Terms. We encourage you to review 
                  these Terms periodically.
                </p>
              </section>

              {/* Contact */}
              <section className="pb-8">
                <h2 className="text-xl font-serif text-foreground mb-4">17. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
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

export default TermsConditions;
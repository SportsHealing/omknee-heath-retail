import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const ReturnsPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Returns Policy | OmKneeHealth"
        description="Our returns policy for OmKneeHealth products. Learn about our 30-day satisfaction guarantee, return process, and refund conditions."
      />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container px-6 max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
            Returns Policy
          </h1>

          <p className="text-muted-foreground mb-8">
            Last updated: January 2026
          </p>

          <div className="prose prose-lg max-w-none text-foreground/90">
            
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">1. Our Commitment</h2>
              <p className="mb-4 leading-relaxed">
                At OmKneeHealth, we are committed to your complete satisfaction. We understand that 
                purchasing supplements online requires trust, which is why we offer a straightforward 
                returns policy. If you're not entirely happy with your purchase, we're here to help.
              </p>
              <p className="leading-relaxed">
                This policy applies to all products purchased directly through our website 
                (www.omkneehealth.com). Products purchased through third-party retailers are subject 
                to their respective returns policies.
              </p>
            </section>

            {/* 30-Day Guarantee */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">2. 30-Day Satisfaction Guarantee</h2>
              <p className="mb-4 leading-relaxed">
                We offer a <strong>30-day satisfaction guarantee</strong> on all first-time purchases. 
                If you're not satisfied with your product for any reason, you may return it within 
                30 days of receipt for a full refund of the product price.
              </p>
              <p className="mb-4 leading-relaxed">
                The 30-day period begins from the date you receive your order, not the date of purchase.
              </p>
              <div className="bg-muted/50 rounded-lg p-6 my-6">
                <h3 className="font-semibold text-lg text-foreground mb-3">Guarantee Conditions:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Applies to first-time purchases only</li>
                  <li>Limited to one product per customer</li>
                  <li>Product may be opened and partially used</li>
                  <li>Original proof of purchase required</li>
                  <li>Return shipping costs are the customer's responsibility</li>
                </ul>
              </div>
            </section>

            {/* Eligible Returns */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">3. Eligible Returns</h2>
              <p className="mb-4 leading-relaxed">
                We accept returns for the following reasons:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Damaged or defective products:</strong> Items that arrive damaged, faulty, or not as described</li>
                <li><strong>Incorrect orders:</strong> If you receive the wrong product or quantity</li>
                <li><strong>Dissatisfaction:</strong> If the product does not meet your expectations (within the 30-day guarantee period)</li>
                <li><strong>Change of mind:</strong> Unopened products in their original sealed packaging</li>
              </ul>
            </section>

            {/* Non-Eligible Returns */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">4. Items Not Eligible for Return</h2>
              <p className="mb-4 leading-relaxed">
                For health and safety reasons, we cannot accept returns for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Products past their expiry date</li>
                <li>Items that have been tampered with or had their safety seal broken (unless for satisfaction guarantee claims)</li>
                <li>Products not purchased directly from our website</li>
                <li>Items returned more than 30 days after receipt</li>
                <li>Second or subsequent orders (satisfaction guarantee applies to first purchase only)</li>
                <li>Products that have been stored incorrectly (e.g., exposed to extreme temperatures)</li>
              </ul>
            </section>

            {/* Return Process */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">5. How to Return a Product</h2>
              <p className="mb-4 leading-relaxed">
                To initiate a return, please follow these steps:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 my-6">
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Contact us:</strong> Email us at{" "}
                    <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline">
                      hello@omkneehealth.com
                    </a>{" "}
                    with your order number and reason for return. We aim to respond within 1-2 business days.
                  </li>
                  <li>
                    <strong>Receive authorisation:</strong> We'll provide you with a Returns Authorisation Number (RAN) 
                    and return address. Returns without a RAN may not be processed.
                  </li>
                  <li>
                    <strong>Package your return:</strong> Securely package the product in its original packaging 
                    if possible. Include your RAN and proof of purchase.
                  </li>
                  <li>
                    <strong>Ship your return:</strong> Send the package to the address provided. We recommend 
                    using a tracked delivery service for your protection.
                  </li>
                  <li>
                    <strong>Confirmation:</strong> Once we receive and inspect your return, we'll email you 
                    to confirm receipt and process your refund.
                  </li>
                </ol>
              </div>
            </section>

            {/* Refunds */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">6. Refunds</h2>
              <p className="mb-4 leading-relaxed">
                Once your return is received and inspected, we'll send you an email to notify you of the 
                approval or rejection of your refund.
              </p>
              <h3 className="font-semibold text-lg text-foreground mb-3">Refund Processing:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Approved refunds will be processed within 5-7 business days</li>
                <li>Refunds will be credited to your original payment method</li>
                <li>Bank processing times may vary; please allow up to 10 additional business days for the refund to appear in your account</li>
                <li>For credit card payments, the refund may appear on your next billing statement</li>
              </ul>
              <h3 className="font-semibold text-lg text-foreground mb-3">What We Refund:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Product price:</strong> Full refund of the product cost</li>
                <li><strong>Original shipping:</strong> Refunded only for damaged, defective, or incorrect orders</li>
                <li><strong>Return shipping:</strong> Covered by OmKneeHealth only for damaged, defective, or incorrect orders</li>
              </ul>
            </section>

            {/* Damaged or Defective Items */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">7. Damaged or Defective Items</h2>
              <p className="mb-4 leading-relaxed">
                If you receive a damaged or defective product, please contact us immediately at{" "}
                <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline">
                  hello@omkneehealth.com
                </a>. We take quality seriously and will resolve the issue promptly.
              </p>
              <p className="mb-4 leading-relaxed">
                Please include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your order number</li>
                <li>Clear photographs of the damaged product and packaging</li>
                <li>A description of the issue</li>
              </ul>
              <p className="leading-relaxed">
                For damaged or defective items, we will either replace the product at no additional cost 
                or provide a full refund including shipping costs.
              </p>
            </section>

            {/* Exchanges */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">8. Exchanges</h2>
              <p className="mb-4 leading-relaxed">
                We currently do not offer direct exchanges. If you wish to exchange a product, please 
                return the original item for a refund and place a new order for the desired product.
              </p>
              <p className="leading-relaxed">
                This ensures you receive your new product as quickly as possible without waiting for 
                the return to be processed.
              </p>
            </section>

            {/* Subscription Cancellations */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">9. Subscription Orders</h2>
              <p className="mb-4 leading-relaxed">
                If you have an active subscription, you may cancel at any time before your next scheduled 
                delivery. Cancellations must be made at least 5 business days before your next billing date 
                to prevent the next shipment.
              </p>
              <p className="mb-4 leading-relaxed">
                To cancel your subscription:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Log into your account and manage your subscription settings, or</li>
                <li>Email us at{" "}
                  <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline">
                    hello@omkneehealth.com
                  </a>{" "}
                  with your request
                </li>
              </ul>
              <p className="leading-relaxed">
                Returns for subscription orders follow the same policy as one-time purchases, with the 
                30-day satisfaction guarantee applying to your first subscription shipment only.
              </p>
            </section>

            {/* International Returns */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">10. International Returns</h2>
              <p className="mb-4 leading-relaxed">
                For orders shipped outside the United Kingdom, the same return policy applies. However, 
                please note:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Return shipping costs are the customer's responsibility</li>
                <li>Any customs duties or taxes paid on the original order are non-refundable</li>
                <li>We recommend using a tracked international shipping service</li>
                <li>Please allow additional time for international returns to reach us</li>
              </ul>
            </section>

            {/* Late or Missing Refunds */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">11. Late or Missing Refunds</h2>
              <p className="mb-4 leading-relaxed">
                If you haven't received your refund within the expected timeframe:
              </p>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>Check your bank account or credit card statement again</li>
                <li>Contact your bank or credit card company, as processing times vary</li>
                <li>If you've done the above and still haven't received your refund, please contact us at{" "}
                  <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline">
                    hello@omkneehealth.com
                  </a>
                </li>
              </ol>
            </section>

            {/* Contact */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">12. Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about our Returns Policy, please don't hesitate to contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-6 my-6">
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hello@omkneehealth.com" className="text-primary hover:underline">
                    hello@omkneehealth.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Response time:</strong> Within 1-2 business days
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  We're here to help and will do our best to ensure your satisfaction with every purchase.
                </p>
              </div>
            </section>

            {/* Policy Changes */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-foreground mb-4">13. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We reserve the right to modify this Returns Policy at any time. Changes will be effective 
                immediately upon posting to our website. The policy in effect at the time of your purchase 
                will apply to that order.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnsPolicy;

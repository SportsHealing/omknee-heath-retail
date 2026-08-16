/**
 * Newsletter - restrained email capture closing the homepage.
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="py-28 lg:py-36 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Keep moving.</h2>
          <div className="space-y-4 font-sans text-muted-foreground mb-10 max-w-md mx-auto">
            <p>Ideas, evidence and practical information about looking after your knees.</p>
            <p>
              Explore movement, nutrition, knee health, new Journal articles and selected
              OmKneeHealth products.
            </p>
          </div>

          {done ? (
            <p className="font-sans text-sm text-primary" role="status">
              Thank you — we will be in touch.
            </p>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 justify-center"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setDone(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 sm:max-w-xs font-sans"
              />
              <Button type="submit" size="lg" className="h-12 px-8 text-sm font-sans tracking-wide">
                Join OmKnee
              </Button>
            </form>
          )}

          <p className="font-sans text-xs text-muted-foreground mt-8 max-w-md mx-auto leading-relaxed">
            By subscribing, you agree to receive OmKneeHealth emails. You can unsubscribe at any
            time. See our{" "}
            <a href="/privacy-policy" className="underline underline-offset-4">
              Privacy Policy
            </a>{" "}
            for information about how we use your data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

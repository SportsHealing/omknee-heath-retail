import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KneeTriageCalculator from "@/components/assessment/KneeTriageCalculator";
import { Shield, AlertCircle } from "lucide-react";

const Assessment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-8 md:py-12 bg-om-cream/30">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-om-sage font-medium tracking-wide uppercase text-sm mb-3">
                SportsHealing / OmKneeHealth
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Knee Assessment Triage Calculator
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                A clinical-grade triage tool that assesses your knee symptoms and health risk factors 
                to provide personalised guidance on next steps.
              </p>
            </div>

            {/* Disclaimer Banner */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <strong>Not Medical Advice:</strong> This calculator is for educational and guidance 
                  purposes only. It does not replace professional medical evaluation. If you have 
                  concerns about your knee health, please consult a qualified healthcare professional.
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Shield className="w-4 h-4 text-primary" />
              <p className="text-sm text-muted-foreground">
                UK GDPR-aligned • Data minimisation • Your information is secure and never sold
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-6">
            <KneeTriageCalculator />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;

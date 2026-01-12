import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Zap, Clock, Shield, ArrowRight, Stethoscope, Moon, AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import BackToTop from "@/components/ui/BackToTop";
import KneeScoreEmbed from "@/components/home/KneeScoreEmbed";
import KneeTriageCalculator from "@/components/assessment/KneeTriageCalculator";

type AssessmentView = "menu" | "quick" | "full" | "triage";

const Assessment = () => {
  const [currentView, setCurrentView] = useState<AssessmentView>("menu");

  const resetToMenu = () => setCurrentView("menu");

  // Assessment Menu - Entry point
  if (currentView === "menu") {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Free Knee Assessment | OmKneeHealth"
          description="Take our free clinician-developed knee health assessments. Start with a quick score, then explore comprehensive options for deeper insight."
          canonicalPath="/assessment"
        />
        <Header />
        <main className="pt-20">
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                  <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary/70 mb-4">
                    Clinician-Developed Tools
                  </p>
                  <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                    Assess Your Knee Health
                  </h1>
                  <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-4">
                    Our assessments are developed by the OmKneeHealth clinical team, 
                    drawing on professional experience and validated questionnaires 
                    to provide meaningful insight into your knee health.
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    We recommend starting with the Quick Knee Score, then exploring 
                    more comprehensive options if desired.
                  </p>
                </div>

                {/* Recommended: Quick Assessment */}
                <div className="mb-8">
                  <button
                    onClick={() => setCurrentView("quick")}
                    className="w-full bg-background rounded-2xl border-2 border-primary p-8 text-left transition-all duration-200 hover:shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Start Here
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                            Quick Knee Score
                          </h2>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            ~2 mins
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                          7 focused questions covering pain, stiffness, mobility, stability, 
                          and daily impact. Get an instant score with personalised guidance.
                        </p>
                        <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                          Start Quick Assessment
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-10">
                  <div className="flex-1 border-t border-border" />
                  <span className="font-sans text-xs text-muted-foreground uppercase tracking-wide">
                    Want more detail?
                  </span>
                  <div className="flex-1 border-t border-border" />
                </div>

                {/* Other Options */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Knee + Sleep */}
                  <button
                    onClick={() => setCurrentView("full")}
                    className="bg-background rounded-2xl border border-border p-6 text-left transition-all duration-200 hover:border-primary hover:shadow-md group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Moon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        ~4 mins
                      </span>
                    </div>
                    <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                      Knee + Sleep Score
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      14 questions assessing both knee health and sleep quality. 
                      Understand how sleep affects your recovery.
                    </p>
                    <span className="inline-flex items-center text-primary font-medium text-sm">
                      Take Full Assessment
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </button>

                  {/* Clinical Triage */}
                  <button
                    onClick={() => setCurrentView("triage")}
                    className="bg-background rounded-2xl border border-border p-6 text-left transition-all duration-200 hover:border-primary hover:shadow-md group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-primary" />
                      </div>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        ~5 mins
                      </span>
                    </div>
                    <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                      Clinical Triage Calculator
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      13 questions for comprehensive symptom assessment with 
                      risk-stratified guidance on next steps.
                    </p>
                    <span className="inline-flex items-center text-primary font-medium text-sm">
                      Take Triage Assessment
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </button>
                </div>

                {/* Disclaimer */}
                <div className="mt-10 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <strong>Important:</strong> These assessments are for guidance and 
                    educational purposes only. They do not constitute medical diagnosis 
                    or replace professional medical evaluation. Always consult a 
                    healthcare professional for medical advice.
                  </div>
                </div>

                {/* Privacy */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Shield className="w-4 h-4 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Your responses are private and not stored • UK GDPR-aligned
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Quick Assessment View
  if (currentView === "quick") {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Quick Knee Score | OmKneeHealth"
          description="Take our 2-minute knee health assessment. 7 questions to understand your knee health with instant results."
          canonicalPath="/assessment"
        />
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-4">
            <Button 
              variant="ghost" 
              onClick={resetToMenu}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Assessments
            </Button>
          </div>
          <KneeScoreEmbed mode="quick" onComplete={resetToMenu} />
        </main>
        <BackToTop />
        <Footer />
      </div>
    );
  }

  // Full Knee + Sleep Assessment View
  if (currentView === "full") {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Knee + Sleep Score | OmKneeHealth"
          description="Take our comprehensive 4-minute assessment covering knee health and sleep quality."
          canonicalPath="/assessment"
        />
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-4">
            <Button 
              variant="ghost" 
              onClick={resetToMenu}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Assessments
            </Button>
          </div>
          <KneeScoreEmbed mode="full" onComplete={resetToMenu} />
        </main>
        <BackToTop />
        <Footer />
      </div>
    );
  }

  // Clinical Triage View
  if (currentView === "triage") {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Clinical Triage Calculator | OmKneeHealth"
          description="Comprehensive symptom assessment with risk-stratified guidance. 13 questions for deeper clinical insight."
          canonicalPath="/assessment"
        />
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-4">
            <Button 
              variant="ghost" 
              onClick={resetToMenu}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Assessments
            </Button>
          </div>
          
          {/* Triage Disclaimer */}
          <div className="container mx-auto px-6 mb-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <strong>Clinical Triage Tool:</strong> This assessment provides risk-stratified 
                  guidance based on your symptoms. It is for educational purposes only and does 
                  not replace professional medical evaluation.
                </div>
              </div>
            </div>
          </div>
          
          <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-6">
              <KneeTriageCalculator />
            </div>
          </section>
        </main>
        <BackToTop />
        <Footer />
      </div>
    );
  }

  return null;
};

export default Assessment;

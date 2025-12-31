import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KneeScoreEmbed from "@/components/home/KneeScoreEmbed";
import KneeTriageCalculator from "@/components/assessment/KneeTriageCalculator";
import { Zap, Stethoscope, Shield, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type AssessmentTab = "scores" | "triage";

const Assessment = () => {
  const [activeTab, setActiveTab] = useState<AssessmentTab>("scores");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-8 md:py-12 bg-secondary/30">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-8">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
                Free Assessment Tools
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Understand Your Knee Health
              </h1>
              <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
              <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Clinician-developed tools to help you gain clarity — not sales pitches. 
                Choose the assessment that fits your needs.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-background rounded-2xl border border-border p-2 flex gap-2">
                <button
                  onClick={() => setActiveTab("scores")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-200",
                    activeTab === "scores"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Zap className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">Quick Scores</div>
                    <div className={cn(
                      "text-xs",
                      activeTab === "scores" ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      Knee Score & Sleep Score
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab("triage")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-200",
                    activeTab === "triage"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Stethoscope className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">Triage Calculator</div>
                    <div className={cn(
                      "text-xs",
                      activeTab === "triage" ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      Clinical Risk Assessment
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Tab Descriptions */}
            <div className="max-w-3xl mx-auto mb-8">
              {activeTab === "scores" && (
                <div className="bg-background rounded-xl border border-border p-6 animate-fade-up">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-foreground mb-1">Quick Knee & Sleep Scores</h2>
                      <p className="text-sm text-muted-foreground mb-3">
                        Get your Pro Knee Score in 2 minutes, or take the full assessment including sleep quality for a combined health index. 
                        Perfect for tracking progress over time.
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">7–14 questions</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">2–4 minutes</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">Instant RAG score</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "triage" && (
                <div className="bg-background rounded-xl border border-border p-6 animate-fade-up">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-foreground mb-1">Knee Assessment Triage Calculator</h2>
                      <p className="text-sm text-muted-foreground mb-3">
                        A comprehensive clinical-grade triage tool that assesses your knee symptoms, function, and health risk factors 
                        to provide personalised guidance on next steps and care pathway.
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">13 symptom questions</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">4–6 minutes</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">Risk-stratified recommendations</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Disclaimer for Triage */}
            {activeTab === "triage" && (
              <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <strong>Not Medical Advice:</strong> This calculator is for educational and guidance 
                    purposes only. It does not replace professional medical evaluation.
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Note */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Shield className="w-4 h-4 text-primary" />
              <p className="text-sm text-muted-foreground">
                UK GDPR-aligned • Your data is secure and never sold
              </p>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        {activeTab === "scores" && <KneeScoreEmbed />}
        
        {activeTab === "triage" && (
          <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-6">
              <KneeTriageCalculator />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;

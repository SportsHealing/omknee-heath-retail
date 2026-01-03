import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KneeScoreEmbed from "@/components/home/KneeScoreEmbed";
import KneeTriageCalculator from "@/components/assessment/KneeTriageCalculator";
import { Zap, Stethoscope, Shield, AlertCircle, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type AssessmentTab = "scores" | "triage";

const Assessment = () => {
  const [activeTab, setActiveTab] = useState<AssessmentTab>("scores");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Knee Assessment"
        description="Take our free clinician-developed knee health assessment. Understand your situation with honest guidance — no sales pitch, just clarity."
        canonicalPath="/assessment"
      />
      <Header />
      <main className="pt-20">
        <section className="py-8 md:py-12 bg-secondary/30">
          <div className="container mx-auto px-6">
            {/* Back Button */}
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate(-1)}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </div>

            {/* Header */}
            <div className="text-center mb-10">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary/70 mb-6">
                Free Tools
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Knee Assessment
              </h1>
              <p className="font-sans text-muted-foreground max-w-md mx-auto">
                Clinician-developed. Choose your assessment.
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

            {/* Tab Descriptions - simplified */}
            <div className="max-w-2xl mx-auto mb-8">
              {activeTab === "scores" && (
                <div className="bg-background rounded-xl border border-border p-5 animate-fade-up text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    2-4 minutes. Instant score. Track progress over time.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 text-xs">
                    <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">7–14 questions</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">Instant RAG score</span>
                  </div>
                </div>
              )}
              
              {activeTab === "triage" && (
                <div className="bg-background rounded-xl border border-border p-5 animate-fade-up text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    4-6 minutes. Comprehensive symptom assessment. Risk-stratified guidance.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 text-xs">
                    <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">13 questions</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">Clinical triage</span>
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

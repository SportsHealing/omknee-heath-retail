import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KneeScoreEmbed from "@/components/home/KneeScoreEmbed";
import FullKneeAssessment from "@/components/assessment/FullKneeAssessment";
import { Zap, Stethoscope, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

type AssessmentTab = "scores" | "clinical";

const Assessment = () => {
  const [activeTab, setActiveTab] = useState<AssessmentTab>("scores");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-8 md:py-12 bg-om-cream/30">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-om-sage font-medium tracking-wide uppercase text-sm mb-3">
                Knee Health Assessments
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Assess Your Knee Health
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Choose between quick scoring tools or a comprehensive clinical assessment.
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
                  onClick={() => setActiveTab("clinical")}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-200",
                    activeTab === "clinical"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Stethoscope className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">Full Assessment</div>
                    <div className={cn(
                      "text-xs",
                      activeTab === "clinical" ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      Clinical Intake Form
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
              
              {activeTab === "clinical" && (
                <div className="bg-background rounded-xl border border-border p-6 animate-fade-up">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-foreground mb-1">Full Clinical Knee Assessment</h2>
                      <p className="text-sm text-muted-foreground mb-3">
                        A comprehensive clinician-designed intake form covering your symptoms, medical history, medications, 
                        lifestyle, and goals. Ideal for personalised care recommendations.
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">9 detailed sections</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">4–6 minutes</span>
                        <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">Clinician-ready report</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
        
        {activeTab === "clinical" && (
          <section className="py-12 md:py-16 bg-om-cream/30">
            <div className="container mx-auto px-6">
              <FullKneeAssessment />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;

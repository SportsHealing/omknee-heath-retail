import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KneeScoreEmbed from "@/components/home/KneeScoreEmbed";
import FullKneeAssessment from "@/components/assessment/FullKneeAssessment";
import { Button } from "@/components/ui/button";
import { Zap, ClipboardList, Clock, ArrowRight, Shield, Stethoscope } from "lucide-react";

type AssessmentType = "select" | "quick" | "full";

const Assessment = () => {
  const [assessmentType, setAssessmentType] = useState<AssessmentType>("select");

  const handleBack = () => setAssessmentType("select");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {assessmentType === "select" && (
          <section className="py-16 md:py-20 bg-om-cream/30">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                  <p className="text-om-sage font-medium tracking-wide uppercase text-sm mb-3">
                    Knee Health Assessments
                  </p>
                  <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                    Choose Your Assessment
                  </h1>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    We offer two assessment options depending on your needs and available time. 
                    Both are designed by clinicians and provide personalised recommendations.
                  </p>
                </div>

                {/* Options Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Quick Score */}
                  <button
                    onClick={() => setAssessmentType("quick")}
                    className="bg-background rounded-2xl border border-border p-8 text-left transition-all duration-200 hover:border-primary hover:shadow-xl group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Zap className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>~2–4 minutes</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                      Quick Knee Score
                    </h2>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                      A rapid symptom-focused assessment. Get your Pro Knee Score with RAG band rating and targeted recommendations.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        7–14 symptom questions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Knee + optional sleep assessment
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Instant score & action plan
                      </li>
                    </ul>
                    <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Start Quick Score
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </button>

                  {/* Full Clinical Assessment */}
                  <button
                    onClick={() => setAssessmentType("full")}
                    className="bg-background rounded-2xl border-2 border-primary p-8 text-left transition-all duration-200 hover:shadow-xl relative overflow-hidden group"
                  >
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Comprehensive
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Stethoscope className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>~4–6 minutes</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                      Full Knee Assessment
                    </h2>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                      A comprehensive clinical intake form. Provides detailed insights for personalised care recommendations.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        9 detailed sections
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Medical history & lifestyle
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Past treatments & medications
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Clinician-ready report
                      </li>
                    </ul>
                    <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Start Full Assessment
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </button>
                </div>

                {/* Privacy Note */}
                <div className="flex items-center justify-center gap-2 mt-10">
                  <Shield className="w-5 h-5 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    UK GDPR-aligned • Your data is secure and never sold
                  </p>
                </div>

                {/* Info Cards */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                  <div className="bg-background rounded-xl border border-border p-5 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Clinician-Designed</h3>
                    <p className="text-sm text-muted-foreground">Created by orthopaedic specialists</p>
                  </div>
                  <div className="bg-background rounded-xl border border-border p-5 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Private & Secure</h3>
                    <p className="text-sm text-muted-foreground">Your responses are protected</p>
                  </div>
                  <div className="bg-background rounded-xl border border-border p-5 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <ClipboardList className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Personalised Results</h3>
                    <p className="text-sm text-muted-foreground">Tailored recommendations for you</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {assessmentType === "quick" && (
          <div>
            <div className="container mx-auto px-6 pt-8">
              <Button variant="ghost" onClick={handleBack} className="mb-4">
                ← Back to Assessment Options
              </Button>
            </div>
            <KneeScoreEmbed />
          </div>
        )}

        {assessmentType === "full" && (
          <section className="py-12 md:py-16 bg-om-cream/30">
            <div className="container mx-auto px-6">
              <FullKneeAssessment onBack={handleBack} />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;

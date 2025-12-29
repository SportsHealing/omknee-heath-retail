import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, RotateCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import RAGGauge from "./RAGGauge";
import RecommendedActions from "./RecommendedActions";

interface Question {
  id: string;
  text: string;
  category: string;
}

const questions: Question[] = [
  { id: "pain", text: "How often do you experience knee pain?", category: "Pain" },
  { id: "stiffness", text: "How stiff do your knees feel in the morning?", category: "Stiffness" },
  { id: "mobility", text: "How easy is it to walk up and down stairs?", category: "Mobility" },
  { id: "stability", text: "How stable do your knees feel during daily activities?", category: "Stability" },
  { id: "swelling", text: "How often do you notice swelling in your knees?", category: "Swelling" },
  { id: "activity", text: "How much does knee discomfort limit your physical activities?", category: "Activity" },
  { id: "sleep", text: "How often does knee discomfort affect your sleep?", category: "Sleep" },
];

const options = [
  { value: 5, label: "Never / Not at all" },
  { value: 4, label: "Rarely / Mildly" },
  { value: 3, label: "Sometimes / Moderately" },
  { value: 2, label: "Often / Significantly" },
  { value: 1, label: "Always / Severely" },
];

const getScoreBand = (score: number) => {
  if (score >= 80) return { label: "Excellent", color: "text-green-600", bg: "bg-green-100" };
  if (score >= 60) return { label: "Good", color: "text-emerald-600", bg: "bg-emerald-100" };
  if (score >= 40) return { label: "Fair", color: "text-amber-600", bg: "bg-amber-100" };
  if (score >= 20) return { label: "Needs Attention", color: "text-orange-600", bg: "bg-orange-100" };
  return { label: "Seek Support", color: "text-red-600", bg: "bg-red-100" };
};

const KneeScoreEmbed = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxScore = questions.length * 5;
    return Math.round((total / maxScore) * 100);
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = ((currentStep + (showResults ? 1 : 0)) / questions.length) * 100;

  if (showResults) {
    const score = calculateScore();
    const band = getScoreBand(score);

    return (
      <section className="py-16 md:py-20 bg-om-cream/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-background rounded-2xl border border-border shadow-elegant p-8 md:p-12 text-center">
              <p className="text-om-sage font-medium tracking-wide uppercase text-sm mb-3">
                Your Results
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
                Knee Health Score
              </h2>

              {/* RAG Gauge Display */}
              <div className="mb-8 flex justify-center">
                <RAGGauge score={score} label="Knee Health Score" size={220} />
              </div>

              {/* Recommended Actions */}
              <RecommendedActions 
                score={score} 
                ctaUrl="/product" 
                ctaText="Explore Joint Support"
              />

              {/* Score Breakdown */}
              <details className="text-left mb-8 p-6 bg-muted/30 rounded-xl">
                <summary className="text-sm font-medium text-foreground cursor-pointer">
                  View Your Responses
                </summary>
                <div className="space-y-3 mt-4">
                  {questions.map((q) => (
                    <div key={q.id} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{q.category}</span>
                      <span className="font-medium text-foreground">
                        {options.find(o => o.value === answers[q.id])?.label}
                      </span>
                    </div>
                  ))}
                </div>
              </details>

              {/* Privacy Note */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="w-4 h-4 text-om-forest" />
                <p className="text-sm text-muted-foreground">
                  Your responses are private and not stored.
                </p>
              </div>

              {/* Actions */}
              <div className="flex justify-center">
                <Button variant="outline" onClick={resetAssessment}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <section className="py-16 md:py-20 bg-om-cream/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-om-sage font-medium tracking-wide uppercase text-sm mb-3">
              Free Assessment Tool
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Understand Your Knee Health
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Answer a few simple questions to reflect on your current knee comfort and mobility.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <div className="bg-background rounded-2xl border border-border shadow-elegant p-8 md:p-10">
            <p className="text-xs font-medium text-om-sage uppercase tracking-wide mb-2">
              {currentQuestion.category}
            </p>
            <h3 className="text-xl md:text-2xl font-serif text-foreground mb-8">
              {currentQuestion.text}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                  className={`w-full p-4 text-left rounded-xl border transition-all duration-200 hover:border-primary hover:bg-primary/5 ${
                    answers[currentQuestion.id] === option.value
                      ? "border-primary bg-primary/10"
                      : "border-border bg-background"
                  }`}
                >
                  <span className="text-foreground">{option.label}</span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Previous question
              </button>
            )}
          </div>

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <Shield className="w-4 h-4 text-om-forest" />
            <p className="text-sm text-muted-foreground">
              Your responses are private and not stored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KneeScoreEmbed;

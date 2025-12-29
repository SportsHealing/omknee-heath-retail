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
  group: "knee" | "sleep";
}

const kneeQuestions: Question[] = [
  { id: "pain", text: "How often do you experience knee pain?", category: "Pain", group: "knee" },
  { id: "stiffness", text: "How stiff do your knees feel in the morning?", category: "Stiffness", group: "knee" },
  { id: "mobility", text: "How easy is it to walk up and down stairs?", category: "Mobility", group: "knee" },
  { id: "stability", text: "How stable do your knees feel during daily activities?", category: "Stability", group: "knee" },
  { id: "swelling", text: "How often do you notice swelling in your knees?", category: "Swelling", group: "knee" },
  { id: "activity", text: "How much does knee discomfort limit your physical activities?", category: "Activity", group: "knee" },
  { id: "knee_sleep", text: "How often does knee discomfort affect your sleep?", category: "Sleep Impact", group: "knee" },
];

const sleepQuestions: Question[] = [
  { id: "sleep_quality", text: "How would you rate your overall sleep quality?", category: "Quality", group: "sleep" },
  { id: "sleep_duration", text: "Do you get enough hours of sleep each night?", category: "Duration", group: "sleep" },
  { id: "sleep_onset", text: "How easily do you fall asleep?", category: "Onset", group: "sleep" },
  { id: "sleep_maintenance", text: "How often do you wake during the night?", category: "Continuity", group: "sleep" },
  { id: "sleep_refreshed", text: "How refreshed do you feel upon waking?", category: "Recovery", group: "sleep" },
  { id: "sleep_daytime", text: "How often do you feel tired during the day?", category: "Daytime", group: "sleep" },
  { id: "sleep_routine", text: "How consistent is your sleep routine?", category: "Routine", group: "sleep" },
];

const allQuestions = [...kneeQuestions, ...sleepQuestions];

const options = [
  { value: 5, label: "Never / Not at all" },
  { value: 4, label: "Rarely / Mildly" },
  { value: 3, label: "Sometimes / Moderately" },
  { value: 2, label: "Often / Significantly" },
  { value: 1, label: "Always / Severely" },
];

const KneeScoreEmbed = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<"knee" | "sleep" | "index">("index");

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentStep < allQuestions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateKneeScore = () => {
    const kneeAnswers = kneeQuestions.map(q => answers[q.id]).filter(Boolean);
    if (kneeAnswers.length === 0) return 0;
    const total = kneeAnswers.reduce((sum, val) => sum + val, 0);
    const maxScore = kneeAnswers.length * 5;
    return Math.round((total / maxScore) * 100);
  };

  const calculateSleepScore = () => {
    const sleepAnswers = sleepQuestions.map(q => answers[q.id]).filter(Boolean);
    if (sleepAnswers.length === 0) return 0;
    const total = sleepAnswers.reduce((sum, val) => sum + val, 0);
    const maxScore = sleepAnswers.length * 5;
    return Math.round((total / maxScore) * 100);
  };

  const calculateIndexScore = () => {
    const kneeScore = calculateKneeScore();
    const sleepScore = calculateSleepScore();
    return Math.round((kneeScore * 0.6 + sleepScore * 0.4));
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setActiveTab("index");
  };

  const progress = ((currentStep + (showResults ? 1 : 0)) / allQuestions.length) * 100;
  const currentQuestion = allQuestions[currentStep];
  const isKneeSection = currentStep < kneeQuestions.length;

  if (showResults) {
    const kneeScore = calculateKneeScore();
    const sleepScore = calculateSleepScore();
    const indexScore = calculateIndexScore();

    const tabs = [
      { id: "index" as const, label: "Combined Index", score: indexScore },
      { id: "knee" as const, label: "Pro Knee", score: kneeScore },
      { id: "sleep" as const, label: "Sleep", score: sleepScore },
    ];

    const activeScore = activeTab === "knee" ? kneeScore : activeTab === "sleep" ? sleepScore : indexScore;
    const activeLabel = activeTab === "knee" ? "Pro Knee Score" : activeTab === "sleep" ? "Sleep Score" : "Knee + Sleep Index";
    const activeQuestions = activeTab === "knee" ? kneeQuestions : activeTab === "sleep" ? sleepQuestions : allQuestions;

    return (
      <section className="py-16 md:py-20 bg-om-cream/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-om-sage font-medium tracking-wide uppercase text-sm mb-3">
                Your Results
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                Knee + Sleep Health Score
              </h2>
              <div className="inline-block px-3 py-1 bg-om-sage/10 rounded-full">
                <span className="text-sm text-om-sage">RAG bands • actions by severity</span>
              </div>
            </div>

            {/* 3 Gauge Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`bg-background rounded-2xl border p-6 transition-all duration-200 ${
                    activeTab === tab.id 
                      ? "border-primary shadow-lg ring-2 ring-primary/20" 
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">
                    {tab.label} Dial
                  </p>
                  <RAGGauge score={tab.score} label={tab.label} size={160} />
                </button>
              ))}
            </div>

            {/* Active Recommendations Panel */}
            <div className="bg-background rounded-2xl border border-border shadow-elegant p-8">
              <h3 className="text-xl font-serif text-foreground mb-6 text-center">
                {activeLabel} — Recommended Actions
              </h3>
              
              <RecommendedActions 
                score={activeScore} 
                ctaUrl="/product" 
                ctaText="Explore Joint Support"
                category={activeTab}
              />

              {/* Score Breakdown */}
              <details className="text-left mb-6 p-6 bg-muted/30 rounded-xl">
                <summary className="text-sm font-medium text-foreground cursor-pointer">
                  View Your Responses
                </summary>
                <div className="space-y-3 mt-4">
                  {activeQuestions.map((q) => (
                    <div key={q.id} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{q.category}</span>
                      <span className="font-medium text-foreground">
                        {options.find(o => o.value === answers[q.id])?.label || "—"}
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
              Knee + Sleep Health Assessment
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Answer questions about your knee health and sleep quality to get your combined wellness score.
            </p>
          </div>

          {/* Section Indicator */}
          <div className="flex justify-center gap-4 mb-6">
            <div className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isKneeSection 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground"
            }`}>
              Knee Health
            </div>
            <div className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !isKneeSection 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground"
            }`}>
              Sleep Quality
            </div>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentStep + 1} of {allQuestions.length}</span>
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

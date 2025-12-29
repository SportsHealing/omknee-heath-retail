import { AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BandRecommendation {
  headline: string;
  actions: string[];
  redFlags?: string[];
}

const recommendations: Record<string, BandRecommendation> = {
  critical: {
    headline: "Prioritise Professional Support",
    actions: [
      "Schedule an appointment with your GP or physiotherapist",
      "Rest and avoid activities that worsen symptoms",
      "Apply ice for 15-20 minutes several times daily",
      "Consider anti-inflammatory support (consult your doctor)",
      "Keep a symptom diary to share with your healthcare provider",
      "Explore gentle, low-impact movement when comfortable",
    ],
    redFlags: [
      "Sudden severe pain or inability to bear weight",
      "Significant swelling that doesn't improve",
      "Knee locking or giving way repeatedly",
      "Signs of infection (redness, warmth, fever)",
    ],
  },
  low: {
    headline: "Take Action to Improve Comfort",
    actions: [
      "Consult a physiotherapist for a personalised exercise plan",
      "Start gentle strengthening exercises (quad sets, leg raises)",
      "Incorporate daily low-impact movement (swimming, cycling)",
      "Focus on maintaining a healthy weight to reduce joint stress",
      "Consider supportive nutrition for joint health",
    ],
  },
  moderate: {
    headline: "Maintain & Strengthen Your Progress",
    actions: [
      "Continue regular low-impact exercise routines",
      "Add balance and stability exercises to your routine",
      "Stretch daily, focusing on quads, hamstrings, and calves",
      "Support joint health with targeted nutrition",
      "Monitor for any changes and adjust activities accordingly",
    ],
  },
  good: {
    headline: "Keep Up the Great Work",
    actions: [
      "Maintain your current exercise and activity levels",
      "Include variety in your workouts to prevent overuse",
      "Stay hydrated and nourish your joints with quality nutrition",
      "Warm up properly before physical activities",
      "Listen to your body and rest when needed",
    ],
  },
};

const getBandKey = (score: number): string => {
  if (score >= 75) return "good";
  if (score >= 50) return "moderate";
  if (score >= 25) return "low";
  return "critical";
};

const getBandStyle = (score: number) => {
  if (score >= 75) return { border: "border-green-200", bg: "bg-green-50", accent: "text-green-700" };
  if (score >= 50) return { border: "border-lime-200", bg: "bg-lime-50", accent: "text-lime-700" };
  if (score >= 25) return { border: "border-amber-200", bg: "bg-amber-50", accent: "text-amber-700" };
  return { border: "border-red-200", bg: "bg-red-50", accent: "text-red-700" };
};

interface RecommendedActionsProps {
  score: number;
  ctaUrl?: string;
  ctaText?: string;
}

const RecommendedActions = ({ 
  score, 
  ctaUrl = "/product", 
  ctaText = "Book Next Step" 
}: RecommendedActionsProps) => {
  const bandKey = getBandKey(score);
  const recommendation = recommendations[bandKey];
  const style = getBandStyle(score);

  return (
    <div className={`text-left rounded-xl border ${style.border} ${style.bg} p-6 mb-8`}>
      <h3 className={`text-lg font-semibold ${style.accent} mb-4`}>
        {recommendation.headline}
      </h3>
      
      <ul className="space-y-3 mb-6">
        {recommendation.actions.map((action, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className={`w-5 h-5 ${style.accent} flex-shrink-0 mt-0.5`} />
            <span className="text-sm text-foreground">{action}</span>
          </li>
        ))}
      </ul>

      {recommendation.redFlags && (
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="font-semibold text-red-700 text-sm">Seek Immediate Care If:</span>
          </div>
          <ul className="space-y-1.5 ml-7">
            {recommendation.redFlags.map((flag, index) => (
              <li key={index} className="text-sm text-red-700">• {flag}</li>
            ))}
          </ul>
        </div>
      )}

      <Button asChild className="w-full sm:w-auto">
        <a href={ctaUrl}>
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </Button>
    </div>
  );
};

export default RecommendedActions;

import { AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BandRecommendation {
  title: string;
  bullets: string[];
  note?: string;
}

type Category = "knee" | "sleep" | "index";
type BandKey = "poor" | "fair" | "good" | "excellent";

const library: Record<BandKey, Record<Category, BandRecommendation>> = {
  poor: {
    knee: {
      title: "High priority support (0–25)",
      bullets: [
        "Reduce load and avoid flare triggers (pivoting, deep flexion, long hills).",
        "Address pain/swelling promptly: compression, elevation, short activity breaks.",
        "Arrange clinical assessment to determine diagnosis and stability.",
        "Consider imaging if symptoms are persistent or there is trauma/locking/instability.",
        "Start guided rehab focusing on swelling control, ROM, and early strength."
      ],
      note: "Red flags: hot swollen joint, fever, inability to weight bear, true locking, calf swelling, numbness — seek urgent assessment."
    },
    sleep: {
      title: "Sleep is limiting recovery (0–25)",
      bullets: [
        "Prioritise consistent sleep/wake timing for 7 days.",
        "Reduce late caffeine/alcohol; protect a wind-down routine.",
        "Target the lowest contributor (latency, restfulness, timing) first.",
        "Consider pain control strategies that support sleep (positioning, timing of rehab).",
        "If snoring/apnoea symptoms, consider formal sleep assessment."
      ],
      note: "If severe insomnia or daytime sleepiness affecting safety (driving), seek medical advice."
    },
    index: {
      title: "Recovery profile needs urgent optimisation (0–25)",
      bullets: [
        "Treat this as a reset phase: reduce load, improve sleep timing, and stabilise symptoms.",
        "Identify the lowest knee domain and lowest sleep contributor and target both.",
        "Consider a clinician review to align diagnosis + plan.",
        "Structured rehab is recommended; imaging may be appropriate depending on symptoms.",
        "Re-score in 7–14 days after interventions."
      ],
      note: "If symptoms are rapidly worsening or there are red flags, seek urgent assessment."
    }
  },
  fair: {
    knee: {
      title: "Needs improvement (26–50)",
      bullets: [
        "Focus on your lowest domain first (often stairs, stiffness, pain).",
        "Use progressive strengthening (quads/hip/calf) 2–3x/week.",
        "Avoid sudden load spikes; build step-count and hills gradually.",
        "If swelling persists, review training volume and consider assessment.",
        "Re-score weekly to track response."
      ]
    },
    sleep: {
      title: "Sleep improvement zone (26–50)",
      bullets: [
        "Optimise timing: same wake time, morning light exposure.",
        "Reduce screens/bright light 60 minutes pre-bed.",
        "If latency is low, try earlier wind-down and reduce late exercise.",
        "If restfulness is low, review stress, late meals, alcohol timing.",
        "Re-score after 7 nights of consistent routine."
      ]
    },
    index: {
      title: "Good potential with targeted changes (26–50)",
      bullets: [
        "Target 1 knee domain + 1 sleep contributor for the next 2 weeks.",
        "Increase strength and stability work; reduce flare triggers.",
        "Aim for consistent sleep timing and recovery rituals.",
        "Consider clinician input if instability/swelling persists.",
        "Re-score weekly; expect steady improvement."
      ]
    }
  },
  good: {
    knee: {
      title: "On track (51–75)",
      bullets: [
        "Maintain progressive strengthening and mobility work.",
        "Gradually reintroduce higher demand tasks (stairs, kneeling) as tolerated.",
        "Use symptom-guided pacing: avoid >2/10 pain increase next day.",
        "Consider a technique review for running/cutting if relevant.",
        "Re-score every 2–4 weeks."
      ]
    },
    sleep: {
      title: "Solid sleep foundation (51–75)",
      bullets: [
        "Keep timing consistent; protect a wind-down routine.",
        "Improve the weakest contributor (often REM/deep or restfulness).",
        "Optimise bedroom environment (cool, dark, quiet).",
        "Keep caffeine earlier in the day; avoid late heavy meals.",
        "Re-score monthly."
      ]
    },
    index: {
      title: "Good recovery profile (51–75)",
      bullets: [
        "Keep building strength + stability and protect sleep consistency.",
        "Address your lowest knee domain to move toward green range.",
        "Use recovery spacing between high-load days.",
        "Re-score every 2–4 weeks."
      ]
    }
  },
  excellent: {
    knee: {
      title: "Excellent / optimal (76–100)",
      bullets: [
        "Maintain your routine: strength, mobility, and load management.",
        "Add prehab: single-leg strength, balance, controlled deceleration.",
        "Avoid sudden spikes in training volume; build progressively.",
        "Re-score every 4–8 weeks or after changes in training."
      ]
    },
    sleep: {
      title: "Excellent / optimal (76–100)",
      bullets: [
        "Keep timing steady and protect your routine.",
        "Use recovery days strategically around intense training.",
        "Maintain light exposure and consistent wake time.",
        "Re-score every 4–8 weeks."
      ]
    },
    index: {
      title: "Optimal recovery profile (76–100)",
      bullets: [
        "Stay consistent; focus on prevention.",
        "Maintain strength and sleep habits through busy periods.",
        "Re-score after travel, schedule disruption, or training changes."
      ]
    }
  }
};

const getBandKey = (score: number): BandKey => {
  if (score <= 25) return "poor";
  if (score <= 50) return "fair";
  if (score <= 75) return "good";
  return "excellent";
};

const getBandName = (score: number): string => {
  if (score <= 25) return "Poor (0–25)";
  if (score <= 50) return "Fair (26–50)";
  if (score <= 75) return "Good (51–75)";
  return "Excellent (76–100)";
};

const getBandStyle = (bandKey: BandKey) => {
  const styles = {
    poor: { border: "border-red-300", bg: "bg-red-50", accent: "text-red-700", accentHex: "#dc2626" },
    fair: { border: "border-rose-200", bg: "bg-rose-50", accent: "text-rose-600", accentHex: "#fb7185" },
    good: { border: "border-amber-200", bg: "bg-amber-50", accent: "text-amber-700", accentHex: "#f59e0b" },
    excellent: { border: "border-green-200", bg: "bg-green-50", accent: "text-green-700", accentHex: "#16a34a" },
  };
  return styles[bandKey];
};

interface RecommendedActionsProps {
  score: number;
  ctaUrl?: string;
  ctaText?: string;
  category?: Category;
}

const RecommendedActions = ({ 
  score, 
  ctaUrl = "/product", 
  ctaText = "Book next step",
  category = "knee"
}: RecommendedActionsProps) => {
  const bandKey = getBandKey(score);
  const recommendation = library[bandKey][category];
  const style = getBandStyle(bandKey);

  return (
    <div className={`text-left rounded-xl border ${style.border} ${style.bg} p-6 mb-6`}>
      <h4 className={`text-base font-semibold ${style.accent} mb-4 m-0`}>
        {recommendation.title}
      </h4>
      
      <ul className="space-y-2 mb-4 pl-0 list-none">
        {recommendation.bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className={`w-4 h-4 ${style.accent} flex-shrink-0 mt-0.5`} />
            <span className="text-sm text-foreground leading-snug">{bullet}</span>
          </li>
        ))}
      </ul>

      {recommendation.note && (
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-red-700">{recommendation.note}</span>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-4">
        <Button asChild size="sm">
          <a href={ctaUrl}>
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default RecommendedActions;

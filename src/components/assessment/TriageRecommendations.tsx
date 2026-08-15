import type { TriageBand } from "@/lib/triageScoring";
import { AlertTriangle, Activity, Stethoscope, Heart, ShieldCheck, ImageIcon, User, FlaskConical, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TriageRecommendationsProps {
  band: TriageBand;
  className?: string;
}

interface Recommendation {
  icon: React.ReactNode;
  title: string;
  items: string[];
  urgency: string;
}

// Now higher score = better health
// 76-100 = Excellent, 51-75 = Good, 26-50 = Fair, 0-25 = Poor
const recommendations: Record<TriageBand, Recommendation> = {
  "76-100": {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: "Excellent Knee Health — Self-Management",
    urgency: "Reassess in 2–4 weeks",
    items: [
      "Continue self-care with education on joint protection",
      "Gentle strengthening exercises (focus on quadriceps and hip stability)",
      "Activity modification to reduce aggravating movements",
      "Optional: OTC topical NSAID if appropriate for pain relief",
      "Swelling management: ice, compression, elevation as needed",
      "Monitor symptoms and reassess if no improvement",
    ],
  },
  "51-75": {
    icon: <Activity className="w-6 h-6 text-amber-600" />,
    title: "Good Knee Health — Guided Care",
    urgency: "Consider clinician review if no improvement in 2–4 weeks",
    items: [
      "Structured physiotherapy plan with progressive strengthening",
      "Guided exercises targeting specific deficits",
      "If swelling/pain persists >2–4 weeks → consider imaging",
      "X-ray if osteoarthritis pattern suspected",
      "MRI if meniscal or ligament symptoms present",
      "Remote clinician review available for personalised guidance",
    ],
  },
  "26-50": {
    icon: <Stethoscope className="w-6 h-6 text-rose-500" />,
    title: "Fair Knee Health — Clinician Review Recommended",
    urgency: "Book a clinical consultation",
    items: [
      "In-person or virtual clinician assessment recommended",
      "Imaging likely required based on clinical picture",
      "MRI if instability, locking, or ligament concerns",
      "X-ray if osteoarthritis pattern suspected",
      "Ultrasound if effusion guidance needed",
      "Consider baseline bloods if systemic inflammatory or metabolic risk",
      "Optional add-ons: HbA1c, lipid profile, vitamin D",
    ],
  },
  "0-25": {
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    title: "Poor Knee Health — Expedited Review Required",
    urgency: "Seek prompt medical attention",
    items: [
      "Priority clinical assessment required",
      "Screen for red flag symptoms:",
      "• Hot, swollen joint with fever → possible infection",
      "• Inability to weight bear → possible fracture or severe injury",
      "• Suspected DVT (calf swelling, warmth, pain)",
      "• True mechanical locking of the knee",
      "• Major recent trauma",
      "If any red flags present: seek urgent care or A&E",
      "Imaging and specialist referral likely needed",
    ],
  },
};

export default function TriageRecommendations({ band, className }: TriageRecommendationsProps) {
  const rec = recommendations[band];
  
  // Colors now match inverted scale (higher = better)
  const bgColors: Record<TriageBand, string> = {
    "76-100": "bg-emerald-50 border-emerald-200",
    "51-75": "bg-amber-50 border-amber-200",
    "26-50": "bg-rose-50 border-rose-200",
    "0-25": "bg-red-50 border-red-200",
  };
  
  // Determine which CTAs to show based on band (lower bands = worse health = more CTAs)
  const showClinicianCTA = band === "0-25" || band === "26-50" || band === "51-75";
  const showImagingCTA = band === "0-25" || band === "26-50" || band === "51-75";
  const showBloodsCTA = band === "0-25" || band === "26-50";
  
  return (
    <div className={className}>
      <div className={`rounded-xl border-2 p-6 ${bgColors[band]}`}>
        <div className="flex items-center gap-3 mb-4">
          {rec.icon}
          <div>
            <h3 className="text-lg font-semibold text-foreground">{rec.title}</h3>
            <p className="text-sm font-medium text-muted-foreground">{rec.urgency}</p>
          </div>
        </div>
        
        <ul className="space-y-2 mb-6">
          {rec.items.map((item, index) => (
            <li 
              key={index} 
              className={`text-sm text-foreground/80 ${item.startsWith("•") ? "ml-4" : "flex items-start gap-2"}`}
            >
              {!item.startsWith("•") && (
                <Heart className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Action CTAs based on band */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {showClinicianCTA && (
            <Button asChild className="w-full">
              <a href="https://sportshealing.com" target="_blank" rel="noopener noreferrer">
                <User className="w-4 h-4 mr-2" />
                Find a Clinician
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
          {showImagingCTA && (
              <Button asChild variant="outline" className="w-full">
                <a href="https://mykneescore.com" target="_blank" rel="noopener noreferrer">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Explore Imaging
                </a>
              </Button>
          )}
          {showBloodsCTA && (
            <Button asChild variant="outline" className="w-full">
              <a href="https://sportshealing.com/bloods" target="_blank" rel="noopener noreferrer">
                <FlaskConical className="w-4 h-4 mr-2" />
                View Blood Tests
              </a>
            </Button>
          )}
        </div>
      </div>
      
      {/* Red Flag Alert for poor knee health band (now 0-24) */}
      {band === "0-25" && (
        <div className="mt-4 p-4 bg-red-100 border-2 border-red-300 rounded-lg">
          <div className="flex items-center gap-2 text-red-700 font-semibold mb-2">
            <AlertTriangle className="w-5 h-5" />
            Important Safety Information
          </div>
          <p className="text-sm text-red-700">
            If you experience a hot, swollen joint with fever, inability to weight bear, 
            severe pain following trauma, or signs of a blood clot (calf swelling/warmth), 
            please seek emergency medical care immediately.
          </p>
        </div>
      )}
    </div>
  );
}

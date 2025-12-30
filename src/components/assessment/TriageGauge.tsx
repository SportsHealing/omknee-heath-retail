import { cn } from "@/lib/utils";
import type { TriageBand } from "@/lib/triageScoring";

interface TriageGaugeProps {
  score: number;
  band: TriageBand;
  className?: string;
}

// Higher score = better health: 0-25 dark red, 26-50 light red, 51-75 amber, 76-100 green
const bandColors: Record<TriageBand, { bg: string; text: string; label: string }> = {
  "76-100": {
    bg: "from-emerald-400 to-emerald-500",
    text: "text-emerald-600",
    label: "Excellent Knee Health",
  },
  "51-75": {
    bg: "from-amber-400 to-amber-500",
    text: "text-amber-600",
    label: "Good Knee Health",
  },
  "26-50": {
    bg: "from-rose-300 to-rose-400",
    text: "text-rose-500",
    label: "Fair Knee Health",
  },
  "0-25": {
    bg: "from-red-500 to-red-600",
    text: "text-red-600",
    label: "Poor Knee Health",
  },
};

export default function TriageGauge({ score, band, className }: TriageGaugeProps) {
  const { bg, text, label } = bandColors[band];
  
  // Calculate needle rotation (-90deg to 90deg for 0-100)
  const rotation = -90 + (score / 100) * 180;
  
  return (
    <div 
      className={cn("flex flex-col items-center", className)}
      role="meter"
      aria-valuenow={score}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Triage Score: ${score} out of 100. Band: ${label}`}
    >
      {/* Gauge Container */}
      <div className="relative w-64 h-32 overflow-hidden">
        {/* Gauge Arc Background - Left=Poor (red), Right=Excellent (green) */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            {/* Background arc segments - Poor=red, Fair=light red, Good=amber, Excellent=green */}
            <path
              d="M 10 100 A 90 90 0 0 1 55 23"
              fill="none"
              stroke="#dc2626"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M 55 23 A 90 90 0 0 1 100 10"
              fill="none"
              stroke="#fb7185"
              strokeWidth="16"
            />
            <path
              d="M 100 10 A 90 90 0 0 1 145 23"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="16"
            />
            <path
              d="M 145 23 A 90 90 0 0 1 190 100"
              fill="none"
              stroke="#22c55e"
              strokeWidth="16"
              strokeLinecap="round"
            />
            
            {/* Band labels */}
            <text x="30" y="70" fontSize="8" fill="hsl(var(--muted-foreground))" textAnchor="middle">0-25</text>
            <text x="70" y="35" fontSize="8" fill="hsl(var(--muted-foreground))" textAnchor="middle">26-50</text>
            <text x="130" y="35" fontSize="8" fill="hsl(var(--muted-foreground))" textAnchor="middle">51-75</text>
            <text x="170" y="70" fontSize="8" fill="hsl(var(--muted-foreground))" textAnchor="middle">76-100</text>
          </svg>
        </div>
        
        {/* Needle */}
        <div 
          className="absolute bottom-0 left-1/2 origin-bottom transition-transform duration-700 ease-out"
          style={{ 
            transform: `translateX(-50%) rotate(${rotation}deg)`,
            width: '4px',
            height: '70px',
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-foreground to-foreground/80 rounded-t-full" />
        </div>
        
        {/* Center dot */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full bg-background border-4 border-foreground" />
      </div>
      
      {/* Score Display */}
      <div className="mt-4 text-center">
        <div className={cn("text-5xl font-bold", text)}>
          {score}
        </div>
        <div className="text-sm text-muted-foreground mt-1">
          Triage Score
        </div>
        <div className={cn(
          "mt-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r",
          bg
        )}>
          {label}
        </div>
      </div>
    </div>
  );
}

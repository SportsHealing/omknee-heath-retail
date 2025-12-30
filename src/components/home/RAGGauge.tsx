interface RAGGaugeProps {
  score: number;
  label: string;
  size?: "sm" | "md" | "lg";
}

const getScoreBand = (score: number) => {
  if (score >= 76) return { label: "Excellent Knee Health", color: "#16a34a" }; // green
  if (score >= 51) return { label: "Good Knee Health", color: "#f59e0b" }; // amber
  if (score >= 26) return { label: "Fair Knee Health", color: "#fb7185" }; // light red
  return { label: "Poor Knee Health", color: "#dc2626" }; // dark red (0-25)
};

const RAGGauge = ({ score, label, size = "md" }: RAGGaugeProps) => {
  const clampedScore = Math.max(0, Math.min(100, score));
  const band = getScoreBand(clampedScore);
  
  // Needle rotation: 0 = -90deg, 100 = 90deg
  const needleRotation = -90 + (clampedScore / 100) * 180;

  // Size configurations
  const sizeConfig = {
    sm: { arcW: 160, arcH: 80, needle: 55, gaugeH: 110 },
    md: { arcW: 220, arcH: 110, needle: 70, gaugeH: 140 },
    lg: { arcW: 280, arcH: 140, needle: 90, gaugeH: 180 },
  };
  
  const config = sizeConfig[size];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Gauge Container */}
      <div 
        className="relative w-full"
        style={{ height: config.gaugeH, maxWidth: config.arcW + 60 }}
      >
        {/* Arc with conic gradient - 0 on left (red), 100 on right (green) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 border border-border/20"
          style={{
            top: 12,
            width: config.arcW,
            height: config.arcH,
            borderRadius: `${config.arcW}px ${config.arcW}px 0 0`,
            background: `conic-gradient(
              from 180deg at 50% 100%,
              #dc2626 0deg 45deg,
              #fb7185 45deg 90deg,
              #f59e0b 90deg 135deg,
              #16a34a 135deg 180deg
            )`,
            WebkitMask: `radial-gradient(circle at 50% 100%, transparent 0 62%, #000 62%)`,
            mask: `radial-gradient(circle at 50% 100%, transparent 0 62%, #000 62%)`,
            transform: 'scaleX(-1)',
          }}
        />
        
        {/* Needle */}
        <div
          className="absolute left-1/2 bg-foreground rounded-sm shadow-lg transition-transform duration-700 ease-out"
          style={{
            bottom: 28,
            width: 4,
            height: config.needle,
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${needleRotation}deg)`,
          }}
        />
        
        {/* Center dot */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-foreground"
          style={{ bottom: 22 }}
        />
        
        {/* Readout */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center w-full"
          style={{ bottom: -8 }}
        >
          <p className="text-3xl font-extrabold text-foreground m-0">{clampedScore}</p>
        </div>
      </div>
      
      {/* Label and Band */}
      <div className="text-center mt-2">
        <p className="text-sm text-muted-foreground">{label}</p>
        <span
          className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: band.color + "20",
            color: band.color,
          }}
        >
          {band.label}
        </span>
      </div>
    </div>
  );
};

export default RAGGauge;

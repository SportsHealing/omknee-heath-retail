interface RAGGaugeProps {
  score: number;
  label: string;
  size?: number;
}

const getScoreBand = (score: number) => {
  if (score >= 75) return { label: "Excellent", segment: 3 };
  if (score >= 50) return { label: "Good", segment: 2 };
  if (score >= 25) return { label: "Fair", segment: 1 };
  return { label: "Needs Attention", segment: 0 };
};

const RAGGauge = ({ score, label, size = 200 }: RAGGaugeProps) => {
  const clampedScore = Math.max(0, Math.min(100, score));
  const band = getScoreBand(clampedScore);
  
  // Calculate needle rotation: 0 = -90deg (left), 100 = 90deg (right)
  const needleRotation = -90 + (clampedScore / 100) * 180;
  
  // SVG dimensions
  const centerX = size / 2;
  const centerY = size / 2;
  const outerRadius = size * 0.42;
  const innerRadius = size * 0.28;
  const needleLength = size * 0.38;

  // Create arc path for each segment
  const createArcPath = (startAngle: number, endAngle: number, inner: number, outer: number) => {
    const startRadOuter = (startAngle * Math.PI) / 180;
    const endRadOuter = (endAngle * Math.PI) / 180;
    const startRadInner = (startAngle * Math.PI) / 180;
    const endRadInner = (endAngle * Math.PI) / 180;

    const x1 = centerX + outer * Math.cos(startRadOuter);
    const y1 = centerY + outer * Math.sin(startRadOuter);
    const x2 = centerX + outer * Math.cos(endRadOuter);
    const y2 = centerY + outer * Math.sin(endRadOuter);
    const x3 = centerX + inner * Math.cos(endRadInner);
    const y3 = centerY + inner * Math.sin(endRadInner);
    const x4 = centerX + inner * Math.cos(startRadInner);
    const y4 = centerY + inner * Math.sin(startRadInner);

    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    return `M ${x1} ${y1} A ${outer} ${outer} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${inner} ${inner} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  // Segments: 180° arc from -180° to 0° (left to right)
  // Each segment is 45° (180° / 4 segments)
  const segments = [
    { start: -180, end: -135, color: "#dc2626" },  // Red (0-24)
    { start: -135, end: -90, color: "#f59e0b" },   // Amber (25-49)
    { start: -90, end: -45, color: "#84cc16" },    // Yellow-Green (50-74)
    { start: -45, end: 0, color: "#16a34a" },      // Green (75-100)
  ];

  return (
    <div className="flex flex-col items-center" style={{ width: size }}>
      <svg
        width={size}
        height={size * 0.6}
        viewBox={`0 0 ${size} ${size * 0.6}`}
        className="overflow-visible"
      >
        {/* Gauge segments */}
        <g transform={`translate(0, ${size * 0.08})`}>
          {segments.map((seg, i) => (
            <path
              key={i}
              d={createArcPath(seg.start, seg.end, innerRadius, outerRadius)}
              fill={seg.color}
              opacity={band.segment === i ? 1 : 0.3}
              className="transition-opacity duration-500"
            />
          ))}
          
          {/* Center cover */}
          <circle
            cx={centerX}
            cy={centerY}
            r={innerRadius - 4}
            className="fill-background"
          />
          
          {/* Needle */}
          <g
            transform={`rotate(${needleRotation}, ${centerX}, ${centerY})`}
            className="transition-transform duration-700 ease-out"
          >
            <line
              x1={centerX}
              y1={centerY}
              x2={centerX - needleLength}
              y2={centerY}
              stroke="hsl(var(--foreground))"
              strokeWidth={3}
              strokeLinecap="round"
            />
            {/* Needle base */}
            <circle
              cx={centerX}
              cy={centerY}
              r={6}
              className="fill-foreground"
            />
          </g>
          
          {/* Tick marks */}
          {[0, 25, 50, 75, 100].map((tick) => {
            const angle = -180 + (tick / 100) * 180;
            const rad = (angle * Math.PI) / 180;
            const tickStart = outerRadius + 4;
            const tickEnd = outerRadius + 12;
            return (
              <g key={tick}>
                <line
                  x1={centerX + tickStart * Math.cos(rad)}
                  y1={centerY + tickStart * Math.sin(rad)}
                  x2={centerX + tickEnd * Math.cos(rad)}
                  y2={centerY + tickEnd * Math.sin(rad)}
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth={1.5}
                />
                <text
                  x={centerX + (tickEnd + 10) * Math.cos(rad)}
                  y={centerY + (tickEnd + 10) * Math.sin(rad)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-muted-foreground text-[10px]"
                >
                  {tick}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      
      {/* Score display */}
      <div className="text-center -mt-2">
        <p className="text-3xl font-bold text-foreground">{clampedScore}</p>
        <p className="text-sm font-medium text-muted-foreground mt-1">{label}</p>
        <p
          className="text-xs font-semibold mt-1 px-3 py-1 rounded-full inline-block"
          style={{
            backgroundColor: segments[band.segment].color + "20",
            color: segments[band.segment].color,
          }}
        >
          {band.label}
        </p>
      </div>
    </div>
  );
};

export default RAGGauge;

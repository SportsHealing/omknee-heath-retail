// Knee Assessment Triage Calculator - Scoring Logic
// All calculations are deterministic and client-side

export type SmokingStatus = 
  | "never"
  | "ex_12m_plus"
  | "ex_under_12m"
  | "current";

export type DiabetesStatus = 
  | "none"
  | "prediabetes"
  | "type2_non_insulin"
  | "insulin_poor_control";

export type PriorKneeSurgery = 
  | "none"
  | "arthroscopy"
  | "ligament_reconstruction"
  | "prior_replacement";

export interface TriageInputs {
  kneeScore: number; // 0-100, 100 = best
  painNRS: number; // 0-10
  swelling: number; // 0-5
  smokingStatus: SmokingStatus;
  cigarettesPerDay?: number;
  bmi: number;
  diabetesStatus: DiabetesStatus;
  priorKneeSurgery: PriorKneeSurgery;
}

export interface TriageResults {
  severity: number; // 0-100
  smokingPoints: number; // 0-8
  bmiPoints: number; // 0-10
  diabetesPoints: number; // 0-8
  priorSurgeryPoints: number; // 0-10
  painBoost: number; // 0-6
  swellingBoost: number; // 0-6
  riskPoints: number; // 0-40
  triageScore: number; // 0-100
  band: TriageBand;
}

export type TriageBand = "0-24" | "25-49" | "50-74" | "75-100";

// Calculate severity from knee score
export function calculateSeverity(kneeScore: number): number {
  return 100 - kneeScore;
}

// Calculate smoking points based on status and cigarettes per day
export function calculateSmokingPoints(
  status: SmokingStatus,
  cigarettesPerDay?: number
): number {
  switch (status) {
    case "never":
      return 0;
    case "ex_12m_plus":
      return 1;
    case "ex_under_12m":
      return 3;
    case "current":
      // Override to 8 if >= 10 cigarettes per day
      if (cigarettesPerDay !== undefined && cigarettesPerDay >= 10) {
        return 8;
      }
      return 6;
    default:
      return 0;
  }
}

// Calculate BMI points
export function calculateBMIPoints(bmi: number): number {
  if (bmi < 30) return 0;
  if (bmi < 35) return 5;
  return 10;
}

// Calculate diabetes points
export function calculateDiabetesPoints(status: DiabetesStatus): number {
  switch (status) {
    case "none":
      return 0;
    case "prediabetes":
      return 2;
    case "type2_non_insulin":
      return 5;
    case "insulin_poor_control":
      return 8;
    default:
      return 0;
  }
}

// Calculate prior surgery points
export function calculatePriorSurgeryPoints(surgery: PriorKneeSurgery): number {
  switch (surgery) {
    case "none":
      return 0;
    case "arthroscopy":
      return 5;
    case "ligament_reconstruction":
      return 8;
    case "prior_replacement":
      return 10;
    default:
      return 0;
  }
}

// Calculate pain boost for pain > 5
export function calculatePainBoost(painNRS: number): number {
  if (painNRS <= 5) return 0;
  if (painNRS <= 7) return 3;
  return 6; // 8-10
}

// Calculate swelling boost
export function calculateSwellingBoost(swelling: number): number {
  const boostMap: Record<number, number> = {
    0: 0,
    1: 1,
    2: 2,
    3: 4,
    4: 5,
    5: 6,
  };
  return boostMap[swelling] ?? 0;
}

// Calculate risk points (capped at 40)
export function calculateRiskPoints(
  smokingPoints: number,
  bmiPoints: number,
  diabetesPoints: number,
  priorSurgeryPoints: number,
  painBoost: number,
  swellingBoost: number
): number {
  const total = smokingPoints + bmiPoints + diabetesPoints + priorSurgeryPoints + painBoost + swellingBoost;
  return Math.min(40, total);
}

// Calculate final triage score
export function calculateTriageScore(severity: number, riskPoints: number): number {
  const riskPct = (riskPoints / 40) * 100;
  return Math.round(0.70 * severity + 0.30 * riskPct);
}

// Determine band from triage score
export function getBand(triageScore: number): TriageBand {
  if (triageScore <= 24) return "0-24";
  if (triageScore <= 49) return "25-49";
  if (triageScore <= 74) return "50-74";
  return "75-100";
}

// Main calculation function
export function calculateTriageResults(inputs: TriageInputs): TriageResults {
  const severity = calculateSeverity(inputs.kneeScore);
  const smokingPoints = calculateSmokingPoints(inputs.smokingStatus, inputs.cigarettesPerDay);
  const bmiPoints = calculateBMIPoints(inputs.bmi);
  const diabetesPoints = calculateDiabetesPoints(inputs.diabetesStatus);
  const priorSurgeryPoints = calculatePriorSurgeryPoints(inputs.priorKneeSurgery);
  const painBoost = calculatePainBoost(inputs.painNRS);
  const swellingBoost = calculateSwellingBoost(inputs.swelling);
  
  const riskPoints = calculateRiskPoints(
    smokingPoints,
    bmiPoints,
    diabetesPoints,
    priorSurgeryPoints,
    painBoost,
    swellingBoost
  );
  
  const triageScore = calculateTriageScore(severity, riskPoints);
  const band = getBand(triageScore);
  
  return {
    severity,
    smokingPoints,
    bmiPoints,
    diabetesPoints,
    priorSurgeryPoints,
    painBoost,
    swellingBoost,
    riskPoints,
    triageScore,
    band,
  };
}

// ============================================
// TEST CASES
// ============================================

export interface TestCase {
  name: string;
  inputs: TriageInputs;
  expectedTriageScore: number;
  expectedBand: TriageBand;
}

export const testCases: TestCase[] = [
  {
    name: "Low Risk Example",
    inputs: {
      kneeScore: 90,
      painNRS: 2,
      swelling: 0,
      smokingStatus: "never",
      bmi: 24,
      diabetesStatus: "none",
      priorKneeSurgery: "none",
    },
    expectedTriageScore: 7, // Severity=10, RiskPoints=0 -> 0.7*10 + 0.3*0 = 7
    expectedBand: "0-24",
  },
  {
    name: "High Risk Example",
    inputs: {
      kneeScore: 40,
      painNRS: 8,
      swelling: 5,
      smokingStatus: "current",
      cigarettesPerDay: 15,
      bmi: 38,
      diabetesStatus: "insulin_poor_control",
      priorKneeSurgery: "prior_replacement",
    },
    // Severity=60, SmokingPoints=8, BMIPoints=10, DiabetesPoints=8, PriorSurgeryPoints=10, PainBoost=6, SwellingBoost=6
    // Total risk = 8+10+8+10+6+6 = 48 -> capped at 40
    // RiskPct = 100
    // TriageScore = 0.7*60 + 0.3*100 = 42 + 30 = 72
    expectedTriageScore: 72,
    expectedBand: "50-74",
  },
  {
    name: "Medium Risk Example",
    inputs: {
      kneeScore: 65,
      painNRS: 6,
      swelling: 2,
      smokingStatus: "ex_12m_plus",
      bmi: 32,
      diabetesStatus: "prediabetes",
      priorKneeSurgery: "arthroscopy",
    },
    // Severity=35, SmokingPoints=1, BMIPoints=5, DiabetesPoints=2, PriorSurgeryPoints=5, PainBoost=3, SwellingBoost=2
    // Total risk = 1+5+2+5+3+2 = 18
    // RiskPct = (18/40)*100 = 45
    // TriageScore = 0.7*35 + 0.3*45 = 24.5 + 13.5 = 38
    expectedTriageScore: 38,
    expectedBand: "25-49",
  },
];

// Run tests and return results
export function runTests(): { passed: boolean; results: string[] } {
  const results: string[] = [];
  let allPassed = true;
  
  testCases.forEach((tc) => {
    const result = calculateTriageResults(tc.inputs);
    const scorePassed = result.triageScore === tc.expectedTriageScore;
    const bandPassed = result.band === tc.expectedBand;
    
    if (!scorePassed || !bandPassed) {
      allPassed = false;
      results.push(`❌ ${tc.name}: Expected Score ${tc.expectedTriageScore}, Got ${result.triageScore}. Expected Band ${tc.expectedBand}, Got ${result.band}`);
    } else {
      results.push(`✓ ${tc.name}: Score ${result.triageScore}, Band ${result.band}`);
    }
  });
  
  return { passed: allPassed, results };
}

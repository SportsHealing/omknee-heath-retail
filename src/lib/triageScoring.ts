// Knee Assessment Triage Calculator - Scoring Logic
// All calculations are deterministic and client-side

export type SmokingStatus = 
  | "never"
  | "ex_12m_plus"
  | "ex_under_12m"
  | "current";

export type AlcoholIntake = 
  | "none"
  | "moderate"    // 1-14 units/week
  | "heavy"       // 15-21 units/week
  | "very_heavy"; // 22+ units/week

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

// Knee symptom questionnaire answers (0-4 scale: Never=0, Rarely=1, Sometimes=2, Often=3, Always=4)
export interface KneeSymptomScores {
  pain: number;           // 0-4: How often do you experience knee pain?
  swelling: number;       // 0-4: How often does your knee swell?
  locking: number;        // 0-4: How often does your knee lock or catch?
  givingWay: number;      // 0-4: How often does your knee give way or feel unstable?
  stiffness: number;      // 0-4: How often do you experience knee stiffness?
  stairs: number;         // 0-4: How much difficulty do you have with stairs?
  walking: number;        // 0-4: How much difficulty do you have walking distances?
  nightPain: number;      // 0-4: How often does knee pain disturb your sleep?
  squatting: number;      // 0-4: How much difficulty do you have squatting?
  kneeling: number;       // 0-4: How much difficulty do you have kneeling?
  running: number;        // 0-4: How much difficulty do you have running?
  twisting: number;       // 0-4: How much difficulty do you have with twisting/pivoting?
  standingFromSitting: number; // 0-4: How much difficulty do you have standing from sitting?
}

export interface TriageInputs {
  kneeScore: number; // 0-100, 100 = best (calculated or manual)
  painNRS: number; // 0-10
  swelling: number; // 0-5
  smokingStatus: SmokingStatus;
  cigarettesPerDay?: number;
  alcoholIntake: AlcoholIntake;
  bmi: number;
  diabetesStatus: DiabetesStatus;
  priorKneeSurgery: PriorKneeSurgery;
  // Optional symptom details for enhanced analysis
  kneeSymptoms?: KneeSymptomScores;
}

export interface TriageResults {
  severity: number; // 0-100
  smokingPoints: number; // 0-8
  alcoholPoints: number; // 0-8
  bmiPoints: number; // 0-10
  diabetesPoints: number; // 0-8
  priorSurgeryPoints: number; // 0-10
  painBoost: number; // 0-6
  swellingBoost: number; // 0-6
  mechanicalBoost: number; // 0-6 (locking + giving way)
  riskPoints: number; // 0-48 (updated cap)
  triageScore: number; // 0-100
  band: TriageBand;
}

export type TriageBand = "0-24" | "25-49" | "50-74" | "75-100";

// ============================================
// KNEE SCORE CALCULATION FROM QUESTIONNAIRE
// ============================================

// Calculate knee score from symptom questionnaire (0-100, 100 = best)
// Each symptom is 0-4 (worst), so max raw score = 52 (13 questions * 4)
// We invert and scale to 0-100 where 100 = no symptoms
export function calculateKneeScoreFromSymptoms(symptoms: KneeSymptomScores): number {
  const maxRawScore = 52; // 13 questions * 4 max each
  const rawScore = 
    symptoms.pain +
    symptoms.swelling +
    symptoms.locking +
    symptoms.givingWay +
    symptoms.stiffness +
    symptoms.stairs +
    symptoms.walking +
    symptoms.nightPain +
    symptoms.squatting +
    symptoms.kneeling +
    symptoms.running +
    symptoms.twisting +
    symptoms.standingFromSitting;
  
  // Invert: 0 raw = 100 knee score, 52 raw = 0 knee score
  const kneeScore = Math.round(((maxRawScore - rawScore) / maxRawScore) * 100);
  return Math.max(0, Math.min(100, kneeScore));
}

// Default symptom scores (all 0 = no symptoms)
export const defaultKneeSymptoms: KneeSymptomScores = {
  pain: 0,
  swelling: 0,
  locking: 0,
  givingWay: 0,
  stiffness: 0,
  stairs: 0,
  walking: 0,
  nightPain: 0,
  squatting: 0,
  kneeling: 0,
  running: 0,
  twisting: 0,
  standingFromSitting: 0,
};

// ============================================
// SCORING FUNCTIONS
// ============================================

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

// Calculate alcohol points (0-8 scale)
export function calculateAlcoholPoints(intake: AlcoholIntake): number {
  switch (intake) {
    case "none":
      return 0;
    case "moderate": // 1-14 units/week
      return 2;
    case "heavy": // 15-21 units/week
      return 5;
    case "very_heavy": // 22+ units/week
      return 8;
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

// Calculate mechanical symptom boost (locking + giving way)
// Adds extra risk for mechanical symptoms that may indicate structural damage
export function calculateMechanicalBoost(symptoms?: KneeSymptomScores): number {
  if (!symptoms) return 0;
  
  // Locking: 0-4 scale, Giving way: 0-4 scale
  // Combined max = 8, scaled to 0-6
  const lockingScore = symptoms.locking;
  const givingWayScore = symptoms.givingWay;
  const combined = lockingScore + givingWayScore;
  
  if (combined === 0) return 0;
  if (combined <= 2) return 2;
  if (combined <= 4) return 4;
  return 6; // 5-8
}

// Calculate risk points (capped at 48 to account for alcohol and mechanical boost)
export function calculateRiskPoints(
  smokingPoints: number,
  alcoholPoints: number,
  bmiPoints: number,
  diabetesPoints: number,
  priorSurgeryPoints: number,
  painBoost: number,
  swellingBoost: number,
  mechanicalBoost: number
): number {
  const total = smokingPoints + alcoholPoints + bmiPoints + diabetesPoints + 
                priorSurgeryPoints + painBoost + swellingBoost + mechanicalBoost;
  return Math.min(48, total);
}

// Calculate final triage score (inverted: 100 = best knee health, 0 = worst)
export function calculateTriageScore(severity: number, riskPoints: number): number {
  const riskPct = (riskPoints / 48) * 100; // Updated to 48 max
  const rawScore = Math.round(0.70 * severity + 0.30 * riskPct);
  // Invert so higher = better knee health
  return 100 - rawScore;
}

// Determine band from triage score (higher score = better health)
export function getBand(triageScore: number): TriageBand {
  if (triageScore >= 76) return "75-100";  // Excellent
  if (triageScore >= 51) return "50-74";   // Good
  if (triageScore >= 25) return "25-49";   // Fair
  return "0-24";                           // Poor
}

// Main calculation function
export function calculateTriageResults(inputs: TriageInputs): TriageResults {
  const severity = calculateSeverity(inputs.kneeScore);
  const smokingPoints = calculateSmokingPoints(inputs.smokingStatus, inputs.cigarettesPerDay);
  const alcoholPoints = calculateAlcoholPoints(inputs.alcoholIntake);
  const bmiPoints = calculateBMIPoints(inputs.bmi);
  const diabetesPoints = calculateDiabetesPoints(inputs.diabetesStatus);
  const priorSurgeryPoints = calculatePriorSurgeryPoints(inputs.priorKneeSurgery);
  const painBoost = calculatePainBoost(inputs.painNRS);
  const swellingBoost = calculateSwellingBoost(inputs.swelling);
  const mechanicalBoost = calculateMechanicalBoost(inputs.kneeSymptoms);
  
  const riskPoints = calculateRiskPoints(
    smokingPoints,
    alcoholPoints,
    bmiPoints,
    diabetesPoints,
    priorSurgeryPoints,
    painBoost,
    swellingBoost,
    mechanicalBoost
  );
  
  const triageScore = calculateTriageScore(severity, riskPoints);
  const band = getBand(triageScore);
  
  return {
    severity,
    smokingPoints,
    alcoholPoints,
    bmiPoints,
    diabetesPoints,
    priorSurgeryPoints,
    painBoost,
    swellingBoost,
    mechanicalBoost,
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
    name: "Low Risk Example (High Score = Excellent Health)",
    inputs: {
      kneeScore: 90,
      painNRS: 2,
      swelling: 0,
      smokingStatus: "never",
      alcoholIntake: "none",
      bmi: 24,
      diabetesStatus: "none",
      priorKneeSurgery: "none",
    },
    // Severity=10, RiskPoints=0 -> Raw=0.7*10 + 0.3*0 = 7 -> Inverted = 100-7 = 93
    expectedTriageScore: 93,
    expectedBand: "75-100",
  },
  {
    name: "High Risk Example (Low Score = Poor Health)",
    inputs: {
      kneeScore: 40,
      painNRS: 8,
      swelling: 5,
      smokingStatus: "current",
      cigarettesPerDay: 15,
      alcoholIntake: "very_heavy",
      bmi: 38,
      diabetesStatus: "insulin_poor_control",
      priorKneeSurgery: "prior_replacement",
      kneeSymptoms: {
        ...defaultKneeSymptoms,
        locking: 4,
        givingWay: 4,
      },
    },
    // Severity=60, Risk capped at 48 -> RiskPct=100
    // Raw = 0.7*60 + 0.3*100 = 42+30 = 72 -> Inverted = 100-72 = 28
    expectedTriageScore: 28,
    expectedBand: "25-49",
  },
  {
    name: "Medium Risk Example",
    inputs: {
      kneeScore: 65,
      painNRS: 6,
      swelling: 2,
      smokingStatus: "ex_12m_plus",
      alcoholIntake: "moderate",
      bmi: 32,
      diabetesStatus: "prediabetes",
      priorKneeSurgery: "arthroscopy",
    },
    // Severity=35, RiskPoints=20 -> RiskPct=41.67
    // Raw = 0.7*35 + 0.3*41.67 = 24.5+12.5 = 37 -> Inverted = 100-37 = 63
    expectedTriageScore: 63,
    expectedBand: "50-74",
  },
  {
    name: "Mechanical Symptoms Example",
    inputs: {
      kneeScore: 70,
      painNRS: 5,
      swelling: 1,
      smokingStatus: "never",
      alcoholIntake: "none",
      bmi: 26,
      diabetesStatus: "none",
      priorKneeSurgery: "none",
      kneeSymptoms: {
        ...defaultKneeSymptoms,
        locking: 3,
        givingWay: 2,
      },
    },
    // Severity=30, RiskPoints=5 -> RiskPct=10.42
    // Raw = 0.7*30 + 0.3*10.42 = 21+3.13 = 24 -> Inverted = 100-24 = 76
    expectedTriageScore: 76,
    expectedBand: "75-100",
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

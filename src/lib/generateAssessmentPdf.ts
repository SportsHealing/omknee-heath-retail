import { jsPDF } from "jspdf";

interface QuickScoreData {
  type: "quick";
  kneeScore: number;
  sleepScore?: number;
  indexScore?: number;
  answers: Record<string, number>;
  date: string;
}

interface FullAssessmentData {
  type: "full";
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  symptomScore: number;
  scoreBand: string;
  symptoms: {
    pain: number;
    sleep: number;
    swelling: number;
    instability: number;
    stiffness: number;
    stairs: number;
    function: number;
  };
  priorProblem: string;
  treatments: string[];
  pmh: string[];
  allergies: string;
  medications: string;
  smoker: string;
  alcohol: string;
  expectations: string;
  date: string;
}

type AssessmentData = QuickScoreData | FullAssessmentData;

const getScoreBandColor = (score: number): [number, number, number] => {
  if (score >= 75) return [59, 130, 246]; // Blue - Optimal
  if (score >= 50) return [34, 197, 94]; // Green
  if (score >= 25) return [245, 158, 11]; // Amber
  return [239, 68, 68]; // Red
};

const getFullScoreBandColor = (band: string): [number, number, number] => {
  switch (band) {
    case "Optimal": return [59, 130, 246];
    case "Green": return [34, 197, 94];
    case "Amber": return [245, 158, 11];
    default: return [239, 68, 68];
  }
};

export const generateQuickScorePdf = (data: QuickScoreData): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(22, 101, 52); // Primary green
  doc.rect(0, 0, pageWidth, 40, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("OmKneeHealth", 20, 25);
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Knee Score Assessment Results", 20, 35);
  
  // Date
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(10);
  doc.text(`Generated: ${data.date}`, pageWidth - 60, 50);
  
  // Score Section
  let yPos = 70;
  
  // Knee Score
  const [r, g, b] = getScoreBandColor(data.kneeScore);
  doc.setFillColor(r, g, b);
  doc.roundedRect(20, yPos - 10, 80, 50, 5, 5, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  doc.text(String(data.kneeScore), 45, yPos + 20);
  
  doc.setFontSize(10);
  doc.text("Pro Knee Score", 35, yPos + 32);
  
  // Sleep Score (if available)
  if (data.sleepScore !== undefined) {
    const [sr, sg, sb] = getScoreBandColor(data.sleepScore);
    doc.setFillColor(sr, sg, sb);
    doc.roundedRect(110, yPos - 10, 80, 50, 5, 5, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(36);
    doc.text(String(data.sleepScore), 135, yPos + 20);
    
    doc.setFontSize(10);
    doc.text("Sleep Score", 130, yPos + 32);
  }
  
  yPos += 60;
  
  // Combined Index (if available)
  if (data.indexScore !== undefined) {
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Combined Knee + Sleep Index: ${data.indexScore}`, 20, yPos);
    yPos += 15;
  }
  
  // Score interpretation
  yPos += 10;
  doc.setTextColor(50, 50, 50);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Score Interpretation", 20, yPos);
  yPos += 10;
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const interpretations = [
    { range: "75-100: Optimal", desc: "Your knee health is excellent" },
    { range: "50-74: Green", desc: "Good knee health with minor concerns" },
    { range: "25-49: Amber", desc: "Moderate issues, consider professional advice" },
    { range: "0-24: Red", desc: "Significant concerns, seek professional help" },
  ];
  
  interpretations.forEach((item) => {
    doc.setFont("helvetica", "bold");
    doc.text(item.range, 25, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(` - ${item.desc}`, 65, yPos);
    yPos += 8;
  });
  
  // Your Responses
  yPos += 15;
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Your Responses", 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  
  const questionLabels: Record<string, string> = {
    pain: "Pain frequency",
    stiffness: "Morning stiffness",
    mobility: "Stair mobility",
    stability: "Knee stability",
    swelling: "Swelling frequency",
    activity: "Activity limitation",
    knee_sleep: "Sleep impact from knee",
    sleep_quality: "Overall sleep quality",
    sleep_duration: "Sleep duration",
    sleep_onset: "Falling asleep",
    sleep_maintenance: "Sleep continuity",
    sleep_refreshed: "Morning refreshment",
    sleep_daytime: "Daytime tiredness",
    sleep_routine: "Sleep routine consistency",
  };
  
  const valueLabels = ["—", "Always/Severely", "Often/Significantly", "Sometimes/Moderately", "Rarely/Mildly", "Never/Not at all"];
  
  Object.entries(data.answers).forEach(([key, value]) => {
    const label = questionLabels[key] || key;
    const valueText = valueLabels[value] || String(value);
    
    doc.setFont("helvetica", "normal");
    doc.text(`${label}:`, 25, yPos);
    doc.setFont("helvetica", "bold");
    doc.text(valueText, 90, yPos);
    yPos += 7;
    
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
  });
  
  // Footer
  yPos = doc.internal.pageSize.getHeight() - 20;
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150, 150, 150);
  doc.text("This assessment is for informational purposes only and does not constitute medical advice.", 20, yPos);
  doc.text("Please consult a healthcare professional for personalized guidance.", 20, yPos + 5);
  
  // Save
  doc.save(`OmKneeHealth-Score-${data.date.replace(/[/\s:]/g, "-")}.pdf`);
};

export const generateFullAssessmentPdf = (data: FullAssessmentData): void => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(22, 101, 52);
  doc.rect(0, 0, pageWidth, 45, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("OmKneeHealth", 20, 20);
  
  doc.setFontSize(14);
  doc.text("Full Knee Assessment Report", 20, 32);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Generated: ${data.date}`, 20, 42);
  
  // Patient Info
  let yPos = 60;
  
  doc.setTextColor(50, 50, 50);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Patient Information", 20, yPos);
  yPos += 12;
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${data.firstName} ${data.lastName}`, 25, yPos);
  yPos += 7;
  doc.text(`Email: ${data.email}`, 25, yPos);
  yPos += 7;
  doc.text(`Date of Birth: ${data.dob}`, 25, yPos);
  yPos += 15;
  
  // Score Summary
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Symptom Score Summary", 20, yPos);
  yPos += 12;
  
  const [r, g, b] = getFullScoreBandColor(data.scoreBand);
  doc.setFillColor(r, g, b);
  doc.roundedRect(25, yPos - 5, 60, 35, 5, 5, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text(String(data.symptomScore), 42, yPos + 15);
  
  doc.setFontSize(9);
  doc.text(data.scoreBand, 45, yPos + 25);
  
  doc.setTextColor(50, 50, 50);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Based on 7 symptom domains", 95, yPos + 10);
  doc.text("(pain, sleep, swelling, instability,", 95, yPos + 17);
  doc.text("stiffness, stairs, function)", 95, yPos + 24);
  
  yPos += 45;
  
  // Symptom Breakdown
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Symptom Breakdown", 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  
  const symptoms = [
    { label: "Pain Level", value: data.symptoms.pain, max: 10 },
    { label: "Sleep Disturbance", value: data.symptoms.sleep, max: 10 },
    { label: "Swelling", value: data.symptoms.swelling, max: 5 },
    { label: "Instability", value: data.symptoms.instability, max: 5 },
    { label: "Stiffness", value: data.symptoms.stiffness, max: 10 },
    { label: "Stairs Difficulty", value: data.symptoms.stairs, max: 5 },
    { label: "Function Limitation", value: data.symptoms.function, max: 5 },
  ];
  
  symptoms.forEach((s) => {
    doc.text(`${s.label}:`, 25, yPos);
    doc.setFont("helvetica", "bold");
    doc.text(`${s.value} / ${s.max}`, 90, yPos);
    doc.setFont("helvetica", "normal");
    yPos += 7;
  });
  
  yPos += 10;
  
  // Medical History
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Medical History", 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Previous knee problem: ${data.priorProblem || "Not specified"}`, 25, yPos);
  yPos += 7;
  doc.text(`Treatments tried: ${data.treatments.length > 0 ? data.treatments.join(", ") : "None"}`, 25, yPos);
  yPos += 7;
  doc.text(`Medical conditions: ${data.pmh.length > 0 ? data.pmh.join(", ") : "None"}`, 25, yPos);
  yPos += 7;
  doc.text(`Allergies: ${data.allergies || "None reported"}`, 25, yPos);
  yPos += 7;
  
  // Check if we need a new page
  if (yPos > 240) {
    doc.addPage();
    yPos = 20;
  }
  
  // Lifestyle
  yPos += 8;
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Lifestyle", 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Smoking status: ${data.smoker || "Not specified"}`, 25, yPos);
  yPos += 7;
  doc.text(`Alcohol consumption: ${data.alcohol || "Not specified"}`, 25, yPos);
  yPos += 12;
  
  // Goals
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Goals & Expectations", 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const expectations = data.expectations || "Not specified";
  const expectLines = doc.splitTextToSize(expectations, pageWidth - 50);
  doc.text(expectLines, 25, yPos);
  
  // Footer
  const footerY = doc.internal.pageSize.getHeight() - 25;
  doc.setDrawColor(200, 200, 200);
  doc.line(20, footerY - 5, pageWidth - 20, footerY - 5);
  
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text("This assessment is for informational purposes only and does not constitute medical advice.", 20, footerY);
  doc.text("Please consult a healthcare professional for personalized guidance.", 20, footerY + 5);
  doc.text("Sportshealing × OmKneeHealth", 20, footerY + 10);
  
  // Save
  const safeName = `${data.firstName}-${data.lastName}`.replace(/[^a-zA-Z0-9]/g, "");
  doc.save(`OmKneeHealth-FullAssessment-${safeName}-${data.date.replace(/[/\s:]/g, "-")}.pdf`);
};

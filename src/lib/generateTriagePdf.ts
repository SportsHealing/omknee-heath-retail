import jsPDF from "jspdf";
import type { TriageResults, TriageBand } from "./triageScoring";

interface TriagePdfData {
  kneeScore: number;
  painNRS: number;
  swelling: number;
  bmi: number;
  smokingStatus: string;
  diabetesStatus: string;
  priorKneeSurgery: string;
  results: TriageResults;
}

const bandLabels: Record<TriageBand, string> = {
  "0-24": "Self-Management Pathway",
  "25-49": "Guided Care Pathway",
  "50-74": "Clinician Review Recommended",
  "75-100": "Expedited Clinician Review",
};

const bandColors: Record<TriageBand, [number, number, number]> = {
  "0-24": [34, 197, 94],    // green
  "25-49": [245, 158, 11],  // amber
  "50-74": [249, 115, 22],  // orange
  "75-100": [239, 68, 68],  // red
};

const recommendations: Record<TriageBand, string[]> = {
  "0-24": [
    "Continue self-care with education on joint protection",
    "Gentle strengthening exercises (focus on quadriceps and hip stability)",
    "Activity modification to reduce aggravating movements",
    "Optional: OTC topical NSAID if appropriate for pain relief",
    "Swelling management: ice, compression, elevation as needed",
    "Monitor symptoms and reassess if no improvement in 2-4 weeks",
  ],
  "25-49": [
    "Structured physiotherapy plan with progressive strengthening",
    "Guided exercises targeting specific deficits",
    "If swelling/pain persists >2-4 weeks, consider imaging",
    "X-ray if osteoarthritis pattern suspected",
    "MRI if meniscal or ligament symptoms present",
    "Remote clinician review available for personalised guidance",
  ],
  "50-74": [
    "In-person or virtual clinician assessment recommended",
    "Imaging likely required based on clinical picture",
    "MRI if instability, locking, or ligament concerns",
    "X-ray if osteoarthritis pattern suspected",
    "Ultrasound if effusion guidance needed",
    "Consider baseline bloods if systemic inflammatory or metabolic risk",
  ],
  "75-100": [
    "Priority clinical assessment required",
    "Screen for red flag symptoms (hot swollen joint, fever, inability to weight bear)",
    "Suspected DVT requires urgent evaluation",
    "True mechanical locking needs specialist review",
    "If any red flags present: seek urgent care or A&E",
    "Imaging and specialist referral likely needed",
  ],
};

const smokingLabels: Record<string, string> = {
  never: "Never smoked",
  ex_12m_plus: "Ex-smoker (stopped 12+ months)",
  ex_under_12m: "Ex-smoker (stopped <12 months)",
  current: "Current smoker",
};

const diabetesLabels: Record<string, string> = {
  none: "No diabetes",
  prediabetes: "Prediabetes / borderline",
  type2_non_insulin: "Type 2 diabetes (non-insulin)",
  insulin_poor_control: "Insulin-treated or poor control",
};

const surgeryLabels: Record<string, string> = {
  none: "None",
  arthroscopy: "Arthroscopy / meniscectomy / debridement",
  ligament_reconstruction: "Ligament reconstruction / osteotomy / cartilage",
  prior_replacement: "Prior knee replacement or multiple operations",
};

export function generateTriagePdf(data: TriagePdfData): void {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let y = 20;

  // Header
  doc.setFontSize(20);
  doc.setTextColor(45, 90, 74); // Primary green
  doc.text("Knee Assessment Triage Report", margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text("SportsHealing / OmKneeHealth", margin, y);
  y += 5;
  doc.text(`Generated: ${new Date().toLocaleDateString("en-GB", { 
    day: "numeric", 
    month: "long", 
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })}`, margin, y);
  y += 15;

  // Triage Score Box
  const bandColor = bandColors[data.results.band];
  doc.setFillColor(bandColor[0], bandColor[1], bandColor[2]);
  doc.roundedRect(margin, y, pageWidth - margin * 2, 35, 3, 3, "F");

  doc.setFontSize(32);
  doc.setTextColor(255, 255, 255);
  doc.text(data.results.triageScore.toString(), margin + 15, y + 24);

  doc.setFontSize(12);
  doc.text("Triage Score", margin + 40, y + 15);
  doc.setFontSize(14);
  doc.text(bandLabels[data.results.band], margin + 40, y + 26);
  
  y += 45;

  // Score Breakdown
  doc.setFontSize(14);
  doc.setTextColor(30, 30, 30);
  doc.text("Score Breakdown", margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  
  const scores = [
    ["Knee Score", `${data.kneeScore}/100`],
    ["Severity", `${data.results.severity}/100`],
    ["Risk Points", `${data.results.riskPoints}/40`],
    ["Triage Score", `${data.results.triageScore}/100`],
  ];

  scores.forEach(([label, value], index) => {
    const x = margin + (index % 2) * 85;
    const yOffset = Math.floor(index / 2) * 8;
    doc.text(`${label}: ${value}`, x, y + yOffset);
  });
  y += 20;

  // Your Responses Section
  doc.setFontSize(14);
  doc.setTextColor(30, 30, 30);
  doc.text("Your Responses", margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  
  const responses = [
    ["Pain Level (NRS)", `${data.painNRS}/10`],
    ["Swelling", `${data.swelling}/5`],
    ["BMI", data.bmi.toString()],
    ["Smoking Status", smokingLabels[data.smokingStatus] || data.smokingStatus],
    ["Diabetes Status", diabetesLabels[data.diabetesStatus] || data.diabetesStatus],
    ["Prior Knee Surgery", surgeryLabels[data.priorKneeSurgery] || data.priorKneeSurgery],
  ];

  responses.forEach(([label, value]) => {
    doc.setTextColor(100, 100, 100);
    doc.text(`${label}:`, margin, y);
    doc.setTextColor(30, 30, 30);
    doc.text(value, margin + 45, y);
    y += 6;
  });
  y += 10;

  // Risk Factor Points
  doc.setFontSize(14);
  doc.setTextColor(30, 30, 30);
  doc.text("Risk Factor Breakdown", margin, y);
  y += 8;

  doc.setFontSize(10);
  const riskFactors = [
    ["Smoking Points", `${data.results.smokingPoints}/8`],
    ["BMI Points", `${data.results.bmiPoints}/10`],
    ["Diabetes Points", `${data.results.diabetesPoints}/8`],
    ["Prior Surgery Points", `${data.results.priorSurgeryPoints}/10`],
    ["Pain Boost", `${data.results.painBoost}/6`],
    ["Swelling Boost", `${data.results.swellingBoost}/6`],
  ];

  riskFactors.forEach(([label, value], index) => {
    const x = margin + (index % 2) * 85;
    const yOffset = Math.floor(index / 2) * 6;
    doc.setTextColor(100, 100, 100);
    doc.text(`${label}:`, x, y + yOffset);
    doc.setTextColor(30, 30, 30);
    doc.text(value, x + 40, y + yOffset);
  });
  y += 22;

  // Recommendations
  doc.setFontSize(14);
  doc.setTextColor(30, 30, 30);
  doc.text("Recommended Next Steps", margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  
  const recs = recommendations[data.results.band];
  recs.forEach((rec) => {
    // Check if we need a new page
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    
    const lines = doc.splitTextToSize(`• ${rec}`, pageWidth - margin * 2 - 5);
    doc.text(lines, margin + 5, y);
    y += lines.length * 5 + 2;
  });
  y += 10;

  // Red flag warning for high-risk
  if (data.results.band === "75-100") {
    if (y > 240) {
      doc.addPage();
      y = 20;
    }
    
    doc.setFillColor(254, 226, 226);
    doc.roundedRect(margin, y, pageWidth - margin * 2, 25, 2, 2, "F");
    doc.setDrawColor(239, 68, 68);
    doc.roundedRect(margin, y, pageWidth - margin * 2, 25, 2, 2, "S");
    
    doc.setFontSize(10);
    doc.setTextColor(153, 27, 27);
    doc.text("IMPORTANT: If you experience a hot, swollen joint with fever, inability", margin + 5, y + 8);
    doc.text("to weight bear, or signs of a blood clot, seek emergency care immediately.", margin + 5, y + 14);
    y += 30;
  }

  // Disclaimer
  if (y > 250) {
    doc.addPage();
    y = 20;
  }
  
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text("DISCLAIMER: This report is for educational and guidance purposes only. It does not constitute", margin, y);
  y += 4;
  doc.text("medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional", margin, y);
  y += 4;
  doc.text("for any health concerns. SportsHealing/OmKneeHealth cannot be held liable for actions taken", margin, y);
  y += 4;
  doc.text("based on this information.", margin, y);
  y += 10;

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(45, 90, 74);
  doc.text("www.omkneehealth.com | UK GDPR Compliant", margin, 285);

  // Save the PDF
  const filename = `knee-triage-report-${new Date().toISOString().split("T")[0]}.pdf`;
  doc.save(filename);
}

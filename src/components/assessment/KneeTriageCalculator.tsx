import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { 
  ChevronRight, 
  ChevronLeft, 
  Info, 
  Shield, 
  Calculator,
  Activity,
  Heart,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Download,
  ClipboardList,
  Mail
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  type SmokingStatus,
  type AlcoholIntake,
  type DiabetesStatus,
  type PriorKneeSurgery,
  type KneeSymptomScores,
  type TriageInputs,
  type TriageResults,
  calculateTriageResults,
  calculateKneeScoreFromSymptoms,
  defaultKneeSymptoms,
  runTests,
} from "@/lib/triageScoring";
import TriageGauge from "./TriageGauge";
import TriageRecommendations from "./TriageRecommendations";
import { KneeRecommendations } from "./KneeRecommendations";
import { generateTriagePdf } from "@/lib/generateTriagePdf";

// ============================================
// CONFIGURATION - Set your webhook URL here
// ============================================
const WEBHOOK_URL = ""; // Set your Zapier/Power Automate webhook URL

type Step = "symptoms" | "knee" | "health" | "results";

interface FormData {
  // Knee score mode
  useQuestionnaire: boolean;
  manualKneeScore: number;
  kneeSymptoms: KneeSymptomScores;
  // Current symptoms
  painNRS: number;
  swelling: number;
  // Health factors
  smokingStatus: SmokingStatus | "";
  cigarettesPerDay: number;
  alcoholIntake: AlcoholIntake | "";
  heightCm: number;
  weightKg: number;
  bmi: number;
  diabetesStatus: DiabetesStatus | "";
  priorKneeSurgery: PriorKneeSurgery | "";
  consentGDPR: boolean;
}

const initialFormData: FormData = {
  useQuestionnaire: true,
  manualKneeScore: 50,
  kneeSymptoms: { ...defaultKneeSymptoms },
  painNRS: 5,
  swelling: 2,
  smokingStatus: "",
  cigarettesPerDay: 0,
  alcoholIntake: "",
  heightCm: 170,
  weightKg: 70,
  bmi: 24.2,
  diabetesStatus: "",
  priorKneeSurgery: "",
  consentGDPR: false,
};

// Symptom question labels - distance-based questions use different options
type QuestionType = "frequency" | "difficulty" | "distance";
const symptomQuestions: { key: keyof KneeSymptomScores; label: string; type: QuestionType }[] = [
  { key: "pain", label: "How often do you get knee pain during daily activities?", type: "frequency" },
  { key: "swelling", label: "How often does your knee swell up?", type: "frequency" },
  { key: "stiffness", label: "How often do you get knee stiffness, especially in the morning?", type: "frequency" },
  { key: "locking", label: "How often does your knee lock, catch, or get stuck?", type: "frequency" },
  { key: "givingWay", label: "How often does your knee give way or feel unstable?", type: "frequency" },
  { key: "nightPain", label: "How often does knee pain disturb your sleep?", type: "frequency" },
  { key: "stairs", label: "How much difficulty do you have going up or down stairs?", type: "difficulty" },
  { key: "walking", label: "How far can you walk before knee problems stop you?", type: "distance" },
  { key: "squatting", label: "How much difficulty do you have squatting down?", type: "difficulty" },
  { key: "kneeling", label: "How much difficulty do you have kneeling?", type: "difficulty" },
  { key: "running", label: "How far can you run before knee problems stop you?", type: "distance" },
  { key: "twisting", label: "How much difficulty do you have with twisting or pivoting movements?", type: "difficulty" },
  { key: "standingFromSitting", label: "How much difficulty do you have getting up from a chair?", type: "difficulty" },
];

const frequencyLabels = ["Never", "Rarely", "Sometimes", "Often", "Always"];
const difficultyLabels = ["None", "Mild", "Moderate", "Severe", "Unable"];
const distanceLabels = [">3km", "1-3km", "Up to 1km", "50-250m", "<50m"];

export default function KneeTriageCalculator() {
  const [step, setStep] = useState<Step>("symptoms");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [results, setResults] = useState<TriageResults | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTests, setShowTests] = useState(false);
  const [testResults, setTestResults] = useState<{ passed: boolean; results: string[] } | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailConsent, setEmailConsent] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");

  // Calculate knee score from symptoms or use manual
  const getKneeScore = (): number => {
    if (formData.useQuestionnaire) {
      return calculateKneeScoreFromSymptoms(formData.kneeSymptoms);
    }
    return formData.manualKneeScore;
  };

  // Calculate BMI from height and weight
  const calculateBMI = (heightCm: number, weightKg: number): number => {
    if (heightCm <= 0 || weightKg <= 0) return 0;
    const heightM = heightCm / 100;
    return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
  };

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto-calculate BMI when height or weight changes
      if (field === "heightCm" || field === "weightKg") {
        updated.bmi = calculateBMI(
          field === "heightCm" ? (value as number) : prev.heightCm,
          field === "weightKg" ? (value as number) : prev.weightKg
        );
      }
      
      return updated;
    });
  };

  const updateSymptom = (key: keyof KneeSymptomScores, value: number) => {
    setFormData(prev => ({
      ...prev,
      kneeSymptoms: { ...prev.kneeSymptoms, [key]: value },
    }));
  };

  const validateStep = (currentStep: Step): boolean => {
    if (currentStep === "symptoms") {
      return true; // Questionnaire has defaults
    }
    if (currentStep === "knee") {
      return true; // Sliders have defaults
    }
    if (currentStep === "health") {
      if (!formData.smokingStatus) {
        toast.error("Please select your smoking status");
        return false;
      }
      if (!formData.alcoholIntake) {
        toast.error("Please select your alcohol intake");
        return false;
      }
      if (!formData.diabetesStatus) {
        toast.error("Please select your diabetes status");
        return false;
      }
      if (!formData.priorKneeSurgery) {
        toast.error("Please select your prior knee surgery status");
        return false;
      }
      // Consent is optional - only needed for emailed reports
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;

    if (step === "symptoms") {
      setStep("knee");
    } else if (step === "knee") {
      setStep("health");
    } else if (step === "health") {
      // Calculate results
      const kneeScore = getKneeScore();
      const inputs: TriageInputs = {
        kneeScore,
        painNRS: formData.painNRS,
        swelling: formData.swelling,
        smokingStatus: formData.smokingStatus as SmokingStatus,
        cigarettesPerDay: formData.smokingStatus === "current" ? formData.cigarettesPerDay : undefined,
        alcoholIntake: formData.alcoholIntake as AlcoholIntake,
        bmi: formData.bmi,
        diabetesStatus: formData.diabetesStatus as DiabetesStatus,
        priorKneeSurgery: formData.priorKneeSurgery as PriorKneeSurgery,
        kneeSymptoms: formData.useQuestionnaire ? formData.kneeSymptoms : undefined,
      };
      
      const calculatedResults = calculateTriageResults(inputs);
      setResults(calculatedResults);
      setStep("results");
      
      // Submit to webhook
      submitToWebhook(inputs, calculatedResults);
    }
  };

  const handleBack = () => {
    if (step === "knee") {
      setStep("symptoms");
    } else if (step === "health") {
      setStep("knee");
    } else if (step === "results") {
      setStep("health");
    }
  };

  const submitToWebhook = async (inputs: TriageInputs, triageResults: TriageResults) => {
    if (!WEBHOOK_URL) {
      console.log("No webhook URL configured. Payload:", {
        timestamp: new Date().toISOString(),
        session_id: crypto.randomUUID(),
        ...inputs,
        ...triageResults,
        Consent_GDPR: formData.consentGDPR,
      });
      return;
    }

    setIsSubmitting(true);
    
    const payload = {
      timestamp: new Date().toISOString(),
      session_id: crypto.randomUUID(),
      KneeScore_0to100: inputs.kneeScore,
      Severity_0to100: triageResults.severity,
      PainNRS_0to10: inputs.painNRS,
      Swelling_0to5: inputs.swelling,
      SmokingStatus: inputs.smokingStatus,
      CigarettesPerDay: inputs.cigarettesPerDay ?? null,
      AlcoholIntake: inputs.alcoholIntake,
      BMI: inputs.bmi,
      DiabetesStatus: inputs.diabetesStatus,
      PriorKneeSurgery: inputs.priorKneeSurgery,
      SmokingPoints: triageResults.smokingPoints,
      AlcoholPoints: triageResults.alcoholPoints,
      BMIPoints: triageResults.bmiPoints,
      DiabetesPoints: triageResults.diabetesPoints,
      PriorSurgeryPoints: triageResults.priorSurgeryPoints,
      PainBoost: triageResults.painBoost,
      SwellingBoost: triageResults.swellingBoost,
      MechanicalBoost: triageResults.mechanicalBoost,
      RiskPoints_0to48: triageResults.riskPoints,
      TriageScore_0to100: triageResults.triageScore,
      Band: triageResults.band,
      KneeSymptoms: inputs.kneeSymptoms ?? null,
      Consent_GDPR: formData.consentGDPR,
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
      toast.success("Your assessment has been submitted");
    } catch (error) {
      console.error("Webhook error:", error);
      toast.error("Failed to submit assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setResults(null);
    setStep("symptoms");
    setShowEmailForm(false);
    setEmailConsent(false);
    setEmailAddress("");
  };

  const handleEmailReport = () => {
    if (!emailConsent) {
      toast.error("Please tick the consent checkbox first");
      return;
    }
    if (!emailAddress || !emailAddress.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    // Placeholder - backend not yet implemented
    toast.info("Email report feature coming soon! Download the PDF for now.");
  };

  const handleRunTests = () => {
    const results = runTests();
    setTestResults(results);
    setShowTests(true);
  };

  // Render step indicator
  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8 flex-wrap">
      {[
        { key: "symptoms", label: "Knee Function" },
        { key: "knee", label: "Current Symptoms" },
        { key: "health", label: "Health Factors" },
        { key: "results", label: "Results" },
      ].map((s, index) => {
        const stepOrder = ["symptoms", "knee", "health", "results"];
        const currentIndex = stepOrder.indexOf(step);
        const thisIndex = stepOrder.indexOf(s.key);
        
        return (
          <div key={s.key} className="flex items-center">
            <div className={cn(
              "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-medium transition-colors",
              step === s.key 
                ? "bg-primary text-primary-foreground" 
                : thisIndex < currentIndex
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
            )}>
              {index + 1}
            </div>
            <span className={cn(
              "ml-1 sm:ml-2 text-xs sm:text-sm hidden md:inline",
              step === s.key ? "text-foreground font-medium" : "text-muted-foreground"
            )}>
              {s.label}
            </span>
            {index < 3 && (
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-muted-foreground" />
            )}
          </div>
        );
      })}
    </div>
  );

  // Clickable score selector component
  const ScoreSelector = ({
    label,
    value,
    options,
    onChange,
    tooltip,
  }: {
    label: string;
    value: number;
    options: { value: number; label: string }[];
    onChange: (value: number) => void;
    tooltip?: string;
  }) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label className="text-sm font-medium">{label}</Label>
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <span className="text-2xl font-bold text-primary">{value}</span>
      </div>
      <ToggleGroup 
        type="single" 
        value={value.toString()} 
        onValueChange={(v) => v && onChange(parseInt(v))}
        className="flex flex-wrap gap-2 justify-start"
      >
        {options.map((option) => (
          <ToggleGroupItem
            key={option.value}
            value={option.value.toString()}
            className={cn(
              "px-3 py-2 text-sm rounded-lg border transition-all",
              value === option.value
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background border-border hover:bg-muted"
            )}
          >
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );

  // Radio field component
  const RadioField = ({
    label,
    value,
    options,
    onChange,
    tooltip,
  }: {
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    tooltip?: string;
  }) => (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Label className="text-sm font-medium">{label}</Label>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-4 h-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-3">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value} className="text-sm font-normal cursor-pointer">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );

  // Symptom selector component - clickable buttons
  const SymptomSelector = ({
    symptomKey,
    label,
    value,
    questionType,
  }: {
    symptomKey: keyof KneeSymptomScores;
    label: string;
    value: number;
    questionType: QuestionType;
  }) => {
    const labels = questionType === "distance" 
      ? distanceLabels 
      : questionType === "difficulty" 
        ? difficultyLabels 
        : frequencyLabels;
    
    return (
      <div className="space-y-2 py-3 border-b border-border last:border-0">
        <Label className="text-sm font-medium">{label}</Label>
        <ToggleGroup 
          type="single" 
          value={value.toString()} 
          onValueChange={(v) => v && updateSymptom(symptomKey, parseInt(v))}
          className="flex flex-wrap gap-1.5 justify-start"
        >
          {labels.map((labelText, index) => (
            <ToggleGroupItem
              key={index}
              value={index.toString()}
              className={cn(
                "px-2.5 py-1.5 text-xs rounded-md border transition-all",
                value === index
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:bg-muted"
              )}
            >
              {labelText}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator />

      {/* Step 1: Knee Function Questionnaire */}
      {step === "symptoms" && (
        <Card className="p-6 md:p-8 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Knee Function Assessment</h2>
              <p className="text-sm text-muted-foreground">Rate how your knee affects daily activities</p>
            </div>
          </div>

          {/* Toggle for questionnaire vs manual */}
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg mb-6">
            <div>
              <Label className="text-sm font-medium">Use questionnaire</Label>
              <p className="text-xs text-muted-foreground">Answer symptom questions to calculate your Knee Score</p>
            </div>
            <Switch
              checked={formData.useQuestionnaire}
              onCheckedChange={(checked) => updateField("useQuestionnaire", checked)}
            />
          </div>

          {formData.useQuestionnaire ? (
            <div className="space-y-1">
              {symptomQuestions.map((q) => (
                <SymptomSelector
                  key={q.key}
                  symptomKey={q.key}
                  label={q.label}
                  value={formData.kneeSymptoms[q.key]}
                  questionType={q.type}
                />
              ))}
              
              {/* Calculated score preview */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg text-center">
                <div className="text-sm text-muted-foreground mb-1">Calculated Knee Score</div>
                <div className="text-3xl font-bold text-primary">
                  {getKneeScore()}<span className="text-lg text-muted-foreground">/100</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
                <strong>Manual Override:</strong> Enter your Knee Score directly if you already have a clinical assessment score.
              </div>
              <ScoreSelector
                label="Knee Function Score"
                value={formData.manualKneeScore}
                options={[
                  { value: 0, label: "0" },
                  { value: 20, label: "20" },
                  { value: 40, label: "40" },
                  { value: 60, label: "60" },
                  { value: 80, label: "80" },
                  { value: 100, label: "100" },
                ]}
                onChange={(v) => updateField("manualKneeScore", v)}
                tooltip="Enter your known knee function score from a clinical assessment."
              />
            </div>
          )}

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={() => window.history.back()}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button onClick={handleNext} size="lg">
              Continue
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      )}

      {/* Step 2: Current Symptoms */}
      {step === "knee" && (
        <Card className="p-6 md:p-8 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Current Symptoms</h2>
              <p className="text-sm text-muted-foreground">Rate your pain and swelling right now</p>
            </div>
          </div>

          <div className="space-y-8">
            <ScoreSelector
              label="Pain Level (NRS)"
              value={formData.painNRS}
              options={[
                { value: 0, label: "0 - None" },
                { value: 2, label: "2 - Mild" },
                { value: 4, label: "4 - Moderate" },
                { value: 6, label: "6 - Severe" },
                { value: 8, label: "8 - Very Severe" },
                { value: 10, label: "10 - Worst" },
              ]}
              onChange={(v) => updateField("painNRS", v)}
              tooltip="Rate your current pain on a 0-10 scale, where 0 is no pain and 10 is the worst pain imaginable."
            />

            <ScoreSelector
              label="Swelling"
              value={formData.swelling}
              options={[
                { value: 0, label: "0 - None" },
                { value: 1, label: "1 - Minimal" },
                { value: 2, label: "2 - Mild" },
                { value: 3, label: "3 - Moderate" },
                { value: 4, label: "4 - Significant" },
                { value: 5, label: "5 - Severe" },
              ]}
              onChange={(v) => updateField("swelling", v)}
              tooltip="Rate the amount of swelling in your knee from 0 (none) to 5 (severe, very noticeable)."
            />

            {/* Show knee score summary */}
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Your Knee Score:</span>
                <span className="text-lg font-bold text-primary">{getKneeScore()}/100</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button onClick={handleNext} size="lg">
              Continue
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      )}

      {/* Step 3: Health Factors */}
      {step === "health" && (
        <Card className="p-6 md:p-8 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Health Factors</h2>
              <p className="text-sm text-muted-foreground">Help us understand your risk profile</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Smoking Status */}
            <RadioField
              label="Smoking Status"
              value={formData.smokingStatus}
              onChange={(v) => updateField("smokingStatus", v as SmokingStatus)}
              options={[
                { value: "never", label: "Never smoked" },
                { value: "ex_12m_plus", label: "Ex-smoker (stopped ≥12 months ago)" },
                { value: "ex_under_12m", label: "Ex-smoker (stopped <12 months ago)" },
                { value: "current", label: "Current smoker" },
              ]}
              tooltip="Smoking can affect healing and joint health."
            />

            {/* Cigarettes per day - only show if current smoker */}
            {formData.smokingStatus === "current" && (
              <div className="space-y-2 pl-6 border-l-2 border-primary/20 animate-fade-up">
                <Label className="text-sm font-medium">Cigarettes per day</Label>
                <Input
                  type="number"
                  min={0}
                  max={100}
                  value={formData.cigarettesPerDay}
                  onChange={(e) => updateField("cigarettesPerDay", parseInt(e.target.value) || 0)}
                  className="w-32"
                />
              </div>
            )}

            {/* Alcohol Intake */}
            <RadioField
              label="Alcohol Intake"
              value={formData.alcoholIntake}
              onChange={(v) => updateField("alcoholIntake", v as AlcoholIntake)}
              options={[
                { value: "none", label: "None / rarely drink" },
                { value: "moderate", label: "Moderate (1-14 units per week)" },
                { value: "heavy", label: "Heavy (15-21 units per week)" },
                { value: "very_heavy", label: "Very heavy (22+ units per week)" },
              ]}
              tooltip="1 unit = half pint of beer, small glass of wine, or single spirit measure."
            />

            {/* BMI Calculator */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Label className="text-sm font-medium">Body Mass Index (BMI)</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Enter your height and weight to calculate BMI, or enter BMI directly.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label className="text-xs text-muted-foreground">Height (cm)</Label>
                  <Input
                    type="number"
                    min={100}
                    max={250}
                    value={formData.heightCm}
                    onChange={(e) => updateField("heightCm", parseInt(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Weight (kg)</Label>
                  <Input
                    type="number"
                    min={30}
                    max={300}
                    value={formData.weightKg}
                    onChange={(e) => updateField("weightKg", parseInt(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">BMI</Label>
                  <Input
                    type="number"
                    min={10}
                    max={60}
                    step={0.1}
                    value={formData.bmi}
                    onChange={(e) => updateField("bmi", parseFloat(e.target.value) || 0)}
                    className="bg-muted/50"
                  />
                </div>
              </div>
            </div>

            {/* Diabetes Status */}
            <RadioField
              label="Diabetes Status"
              value={formData.diabetesStatus}
              onChange={(v) => updateField("diabetesStatus", v as DiabetesStatus)}
              options={[
                { value: "none", label: "No diabetes" },
                { value: "prediabetes", label: "Prediabetes / borderline" },
                { value: "type2_non_insulin", label: "Type 2 diabetes (non-insulin)" },
                { value: "insulin_poor_control", label: "Insulin-treated or poor control" },
              ]}
              tooltip="Diabetes can affect healing and joint health outcomes."
            />

            {/* Prior Knee Surgery */}
            <RadioField
              label="Prior Knee Surgery"
              value={formData.priorKneeSurgery}
              onChange={(v) => updateField("priorKneeSurgery", v as PriorKneeSurgery)}
              options={[
                { value: "none", label: "None" },
                { value: "arthroscopy", label: "Arthroscopy / meniscectomy / debridement" },
                { value: "ligament_reconstruction", label: "Ligament reconstruction / osteotomy / cartilage procedure" },
                { value: "prior_replacement", label: "Prior knee replacement or multiple operations" },
              ]}
              tooltip="Previous knee surgeries may affect treatment recommendations."
            />

            {/* Note: Consent is only required when requesting emailed report */}
          </div>

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button onClick={handleNext} size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Score
                </>
              )}
            </Button>
          </div>
        </Card>
      )}

      {/* Step 4: Results */}
      {step === "results" && results && (
        <div className="space-y-6 animate-fade-up">
          {/* Gauge Card */}
          <Card className="p-6 md:p-8">
            <div className="flex items-center justify-center mb-6">
              <TriageGauge score={results.triageScore} band={results.band} />
            </div>

            {/* Score Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{getKneeScore()}</div>
                <div className="text-xs text-muted-foreground">Knee Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{results.severity}</div>
                <div className="text-xs text-muted-foreground">Severity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{results.riskPoints}</div>
                <div className="text-xs text-muted-foreground">Risk Points (0-48)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{results.triageScore}</div>
                <div className="text-xs text-muted-foreground">Triage Score</div>
              </div>
            </div>

            {/* Detailed breakdown */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="text-sm font-medium text-muted-foreground mb-3">Risk Factor Breakdown</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="bg-muted/50 rounded p-2">
                  <div className="text-muted-foreground">Smoking</div>
                  <div className="font-semibold">{results.smokingPoints}/8</div>
                </div>
                <div className="bg-muted/50 rounded p-2">
                  <div className="text-muted-foreground">Alcohol</div>
                  <div className="font-semibold">{results.alcoholPoints}/8</div>
                </div>
                <div className="bg-muted/50 rounded p-2">
                  <div className="text-muted-foreground">BMI</div>
                  <div className="font-semibold">{results.bmiPoints}/10</div>
                </div>
                <div className="bg-muted/50 rounded p-2">
                  <div className="text-muted-foreground">Diabetes</div>
                  <div className="font-semibold">{results.diabetesPoints}/8</div>
                </div>
                <div className="bg-muted/50 rounded p-2">
                  <div className="text-muted-foreground">Prior Surgery</div>
                  <div className="font-semibold">{results.priorSurgeryPoints}/10</div>
                </div>
                <div className="bg-muted/50 rounded p-2">
                  <div className="text-muted-foreground">Pain Boost</div>
                  <div className="font-semibold">{results.painBoost}/6</div>
                </div>
                <div className="bg-muted/50 rounded p-2">
                  <div className="text-muted-foreground">Swelling Boost</div>
                  <div className="font-semibold">{results.swellingBoost}/6</div>
                </div>
                <div className="bg-muted/50 rounded p-2">
                  <div className="text-muted-foreground">Mechanical</div>
                  <div className="font-semibold">{results.mechanicalBoost}/6</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recommendations */}
          <TriageRecommendations band={results.band} />

          {/* Personalised Test Recommendations */}
          <Card className="p-6 md:p-8">
            <h3 className="text-xl font-serif text-foreground mb-6 text-center">
              Personalised Test Recommendations
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Get a tailored package of imaging, blood tests, and procedures based on your score and health profile.
            </p>
            <KneeRecommendations 
              kneeScore={getKneeScore()} 
              useIndexScore={false}
            />
          </Card>

          {/* Disclaimer */}
          <Card className="p-4 bg-muted/50">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <strong>Important:</strong> This tool provides guidance only and is not a substitute for 
                professional medical advice, diagnosis, or treatment. Always consult with a qualified 
                healthcare provider for any health concerns.
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Edit Responses
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                generateTriagePdf({
                  kneeScore: getKneeScore(),
                  painNRS: formData.painNRS,
                  swelling: formData.swelling,
                  bmi: formData.bmi,
                  smokingStatus: formData.smokingStatus as string,
                  alcoholIntake: formData.alcoholIntake as string,
                  diabetesStatus: formData.diabetesStatus as string,
                  priorKneeSurgery: formData.priorKneeSurgery as string,
                  kneeSymptoms: formData.useQuestionnaire ? formData.kneeSymptoms : undefined,
                  results: results,
                });
                toast.success("PDF downloaded successfully");
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowEmailForm(!showEmailForm)}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Report
            </Button>
            <Button onClick={handleReset}>
              Start New Assessment
            </Button>
          </div>

          {/* Email Report Form */}
          {showEmailForm && (
            <Card className="p-4 mt-4 animate-fade-up">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="email-consent"
                    checked={emailConsent}
                    onCheckedChange={(checked) => setEmailConsent(checked === true)}
                  />
                  <Label htmlFor="email-consent" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                    I consent to receive my assessment report via email. My data will be processed in accordance with UK GDPR and used solely to deliver this report.
                  </Label>
                </div>
                
                {emailConsent && (
                  <div className="space-y-3 animate-fade-up">
                    <div className="space-y-2">
                      <Label htmlFor="email-address" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email-address"
                        type="email"
                        placeholder="your@email.com"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="bg-background"
                      />
                    </div>
                    <Button onClick={handleEmailReport} className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Report to Email
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Test Section - Hidden by default */}
          <div className="pt-8 border-t border-border">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleRunTests}
              className="text-xs text-muted-foreground"
            >
              Run Scoring Tests
            </Button>
            
            {showTests && testResults && (
              <div className="mt-4 p-4 bg-muted rounded-lg text-sm font-mono">
                <div className={cn(
                  "flex items-center gap-2 mb-3 font-semibold",
                  testResults.passed ? "text-emerald-600" : "text-red-600"
                )}>
                  {testResults.passed ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  {testResults.passed ? "All tests passed" : "Some tests failed"}
                </div>
                <ul className="space-y-1">
                  {testResults.results.map((result, i) => (
                    <li key={i} className="text-xs">{result}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Privacy Notice */}
      <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Shield className="w-4 h-4 text-primary" />
        <span>UK GDPR-aligned • Data minimisation • Your data is secure</span>
      </div>
    </div>
  );
}
